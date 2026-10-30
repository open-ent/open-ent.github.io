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

### Données de sécurité (`data/`)

| Fichier | Produit par | Contenu |
|---|---|---|
| `security.json` | `security-scan.yml` (open-ent-mods, chaque nuit) | état courant : dépendances et CVE de chaque sous-module, au commit du gitlink |
| `security-prs.json` | idem, `scripts/ops/security-prs.mjs` | PR de correction de dépendances de l'org (Renovate, alertes OSV) |
| `security-history.json` | idem, `scripts/ops/security-snapshot.mjs` | une ligne par jour : totaux, compteurs par module, PR ouvertes |
| `data/security-snapshots/<date>.json` | idem | CVE *critical* + *high* figées à cette date, base de comparaison |
| `renovate-report.json` | workflow `renovate.yml` (open-ent/.github, le samedi) | mises à jour en attente par dépôt |

`security.html` les lit tous : onglets **Modules** et **Librairies** pour l'état courant, onglet
**Évolution** pour le suivi dans le temps (courbe, écarts, CVE corrigées / apparues, PR de correction).
Les snapshots détaillés sont purgés par rétention (45 jours au quotidien, puis hebdomadaire, puis
mensuel) ; l'historique agrégé est conservé sans limite.

### `i18n.js`

Couche de traduction partagée par les quatre pages (`index`, `updates`, `security`, `changelog`). Un seul jeu de pages sert le français et l'anglais : pas de fichier dupliqué.

- **Dictionnaire unique** en haut du fichier : `'clé': { fr: '…', en: '…' }`.
- **Balisage** : `data-i18n="clé"` (texte), `data-i18n-html` (contenu HTML), `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-aria-label`.
- **Scripts de page** : `t('clé', { var: … })`, et `I18N.onChange(fn)` pour rejouer le rendu dynamique au changement de langue.
- **Langue retenue**, dans l'ordre : `?lang=fr|en` → `localStorage` → langue du navigateur → français.
- Le sélecteur `FR / EN` est injecté dans chaque élément `[data-lang-switch]` ; le changement se fait sans rechargement et met à jour `?lang=` dans l'URL.

Les contenus **issus des données** restent dans leur langue d'origine : notes de release GitHub, messages de commit de `patched-changelog.md`, titres de CVE. Seule l'interface est traduite.

L'horodatage est publié en ISO (`generated_at_iso`) et formaté côté client selon la langue ; `generated_at` (chaîne française pré-formatée) est conservé comme repli.

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
`actualites` · `appointments` · `blog` · `cahier-de-textes` · `calendar` · `collaborative-editor` · `collaborative-wall` · `esign` · `exercizer` · `explorer` · `forum` · `mindmap` · `pages` · `poll` · `rack` · `rss` · `search-engine` · `support` · `timeline-generator` · `vote` · `wiki` · `workflowhub`

### Connecteurs
`gar-connector` · `lool-connector` · `moodle-connector` · `nextcloud` · `wordpress-connector`

### Infrastructure
`mod-zip` · `http-proxy` · `mod-image-resizer` · `mod-json-schema-validator` · `mod-mongo-persistor` · `mod-pdf-generator` · `mod-postgresql` · `mod-sftp`
