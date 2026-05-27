# open-ent.github.io

Dashboard de suivi des artefacts publiés pour la plateforme **Open-ENT**.

🔗 **https://open-ent.github.io**

---

## Présentation

Ce dépôt héberge le tableau de bord des modules Open-ENT, accessible en tant que site GitHub Pages. Il centralise, pour chaque composant de la plateforme, les informations suivantes :

- **Statut CI** (dernier run de `build-and-publish.yml`)
- **Dernières versions publiées** et lien de téléchargement du fat JAR
- **Notes de release** synthétisées
- Liens directs vers le dépôt, les actions CI et les releases GitHub

Les modules sont organisés en trois sections :

| Section | Description |
|---|---|
| **Entcore — Socle commun** | Modules du framework entcore (auth, common, directory, workspace…) |
| **Applications** | Modules applicatifs (blog, calendar, wiki, exercizer…) |
| **Connecteurs** | Connecteurs d'intégration tierce (GAR, Moodle…) |
| **Infrastructure** | Modules techniques (mod-zip, mod-mongo-persistor, mod-pdf-generator…) |

---

## Architecture

```
open-ent.github.io/
├── index.html        # Dashboard statique (HTML/CSS/JS vanilla)
├── data.json         # Données générées automatiquement par GitHub Actions
└── .github/
    └── workflows/
        └── generate-dashboard.yml   # Workflow de génération des données
```

### `data.json`

Fichier JSON généré automatiquement contenant la liste des modules avec leur statut CI, leurs releases et leurs métadonnées. Il est mis à jour :

- Chaque nuit à **3h00 UTC** (cron)
- À chaque push sur `main` (hors modifications de `data.json`)
- À réception d'un événement `repository_dispatch` de type `artifact-published`
- Manuellement via `workflow_dispatch`

### `index.html`

Page statique pure (sans framework) qui charge `data.json` et rend le dashboard côté client. Aucune dépendance externe, aucun build nécessaire.

---

## Génération des données

Le workflow `generate-dashboard.yml` utilise le token `GH_PACKAGES_TOKEN` (secret du dépôt) pour interroger l'API GitHub et :

1. Récupérer le statut du dernier run CI filtré sur `build-and-publish.yml`
2. Lister les 5 dernières releases GitHub (fat JAR détecté par le pattern `*-fat.jar`)
3. Récupérer les versions Maven publiées sur GitHub Packages pour les modules entcore (via les métadonnées Maven)

---

## Repositories couverts

### Entcore
[`open-ent/entcore-v2`](https://github.com/open-ent/entcore-v2) — modules : `auth`, `common`, `directory`, `workspace`, `conversation`, `timeline`, `portal`, `session`, `communication`, `feeder`, `admin`, `infra`, `archive`, `audience`, `cas`

### Applications
`actualites` · `appointments` · `blog` · `cahier-de-textes` · `calendar` · `collaborative-editor` · `collaborative-wall` · `exercizer` · `explorer` · `forum` · `mindmap` · `pages` · `poll` · `rack` · `rss` · `search-engine` · `support` · `timeline-generator` · `wiki`

### Connecteurs
`gar-connector` · `moodle-connector`

### Infrastructure
`mod-zip` · `http-proxy` · `mod-image-resizer` · `mod-json-schema-validator` · `mod-mongo-persistor` · `mod-pdf-generator` · `mod-postgresql` · `mod-sftp`
