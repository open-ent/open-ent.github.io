#!/usr/bin/env python3
"""Relève les runs GitHub Actions en cours des modules du dashboard.

Écrit data/builds.json et le pousse dès que l'ensemble des runs en cours
change. Sans run en cours, une seule passe (~5 s) puis sortie : le job ne
garde pas un des 20 jobs simultanés de l'offre Free. Dès qu'un run est en
cours, il est suivi toutes les INTERVAL secondes, au plus POLL_SECONDS.

Les requêtes portent un If-None-Match : une réponse 304 ne compte pas dans la
limite de 5 000 appels/h du jeton, partagée avec les autres workflows.
"""
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone

TOKEN = os.environ["GH_TOKEN"]
POLL_SECONDS = int(os.environ.get("POLL_SECONDS", "270"))
INTERVAL = int(os.environ.get("INTERVAL", "30"))
OUT = "data/builds.json"
ACTIVE = {"queued", "in_progress", "waiting", "pending", "requested"}

etags, cache = {}, {}


def runs(repo):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{repo}/actions/runs?per_page=10",
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            **({"If-None-Match": etags[repo]} if repo in etags else {}),
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            etags[repo] = r.headers.get("ETag", "")
            cache[repo] = json.load(r).get("workflow_runs", [])
    except urllib.error.HTTPError as e:
        if e.code != 304:
            print(f"::warning::{repo}: HTTP {e.code}", file=sys.stderr)
    except Exception as e:  # réseau : on garde le dernier état connu
        print(f"::warning::{repo}: {e}", file=sys.stderr)
    return cache.get(repo, [])


def snapshot(repos):
    builds = []
    with ThreadPoolExecutor(max_workers=10) as pool:
        results = list(pool.map(lambda repo: (repo, runs(repo)), repos))
    for repo, repo_runs in results:
        for run in repo_runs:
            if run.get("status") not in ACTIVE:
                continue
            builds.append({
                "repo": repo,
                "run_id": run["id"],
                "workflow": run.get("name") or "",
                "status": "in_progress" if run["status"] == "in_progress" else "queued",
                "branch": run.get("head_branch") or "",
                "event": run.get("event") or "",
                "started_at": run.get("run_started_at") or run.get("created_at"),
                "url": run.get("html_url"),
            })
    return sorted(builds, key=lambda b: (b["repo"], b["run_id"]))


def publish(builds):
    data = {"checked_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "builds": builds}
    with open(OUT, "w") as f:
        json.dump(data, f, indent=1)
        f.write("\n")
    names = ", ".join(sorted({b["repo"].split("/")[-1] for b in builds})) or "aucun"
    subprocess.run(["git", "add", OUT], check=True)
    subprocess.run(["git", "commit", "-q", "-m", f"chore(builds): en cours — {names} [skip ci]"], check=True)
    # uptime.yml et les snapshots de sécurité poussent sur la même branche.
    if subprocess.run(["git", "push", "-q"]).returncode:
        subprocess.run(["git", "pull", "-q", "--rebase", "-X", "theirs"], check=True)
        subprocess.run(["git", "push", "-q"], check=True)


def main():
    with open("data.json") as f:
        repos = sorted({m["repo_url"].removeprefix("https://github.com/")
                        for m in json.load(f)["modules"] if m.get("repo_url")})
    try:
        with open(OUT) as f:
            published = json.load(f).get("builds", [])
    except (FileNotFoundError, json.JSONDecodeError):
        published = None

    deadline = time.monotonic() + POLL_SECONDS
    while True:
        builds = snapshot(repos)
        if builds != published:
            print(f"{len(builds)} run(s) en cours : {[b['repo'] for b in builds]}")
            publish(builds)
            published = builds
        if not builds or time.monotonic() + INTERVAL > deadline:
            break
        time.sleep(INTERVAL)


if __name__ == "__main__":
    main()
