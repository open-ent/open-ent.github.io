# Changelog consolidé des forks "-patched"

> Généré par `scripts/patched-changelog.sh` le 2026-09-03 09:52.
> Pour chaque dépôt : commits ajoutés par le fork **par-dessus la dernière release upstream**
> (tag non `-patched` ancêtre du HEAD référencé). Ce sont les commits à re-baser lors d'une montée de version.

## `connectors/gar-connector`

- **branche référencée** : `(detached)` @ `83cdb21`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**5 commit(s)**)
- **tags patched** : 3.1.4-patched 

```
83cdb21 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
baa9131 feat(gar): export-cron vide => export périodique désactivé
fac1ffa fix(gar): handle String value for pagination-limit config
1bf084e fix: remove setIsolationGroup/setIsolatedClasses incompatible with Vert.x 4.x
2b50475 chore: prepare next development iteration
```

## `connectors/lool`

- **branche référencée** : `(detached)` @ `d00c655`
- **base upstream** : `2.2.5`  →  delta = `2.2.5..HEAD` (**7 commit(s)**)
- **tags patched** : 2.2.5-patched 

```
d00c655 fix(deps): aligne @open-ent/* sur 2.5.30-patched
2aa9ee6 fix(ci): NODE_AUTH_TOKEN manquant au step build frontend React
172bbbf fix(entcore): repointe entCoreVersion/entCoreLibsVersion sur 6.14.9-patched
05be54a feat(theme)!: migration @edifice.io -> @open-ent + bootstrap chargé au runtime
81eb711 ci: chaîne build & publish fat-mod (les 2 IHM + GitHub Packages + rct-nexus)
708d344 fix(wopi): NPE document supprimé, port WOPI/Collabora, init callback, canBeOpen
79e01f1 fix(pom): aligner le parent POM et les versions entcore pour build offline
```

## `connectors/moodle-connector`

- **branche référencée** : `(detached)` @ `8c213b9`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**9 commit(s)**)
- **tags patched** : 2.2.4-patched 2.2.5-patched 

```
8c213b9 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
61b32fa build: parent fr.openent:app-parent (Implementation-Version au MANIFEST)
3d077d9 ci(moodle-connector): build Gulp + backend, publish fat-mod 2.2.4 (GitHub Packages + rct-nexus)
e55c20f ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
4c9f427 i18n: translate en.json to English
b8b08ea i18n: sync en.json keys with fr.json
17cce91 feat(ci): add build-and-publish workflow + modernize dev-check
8f13164 feat: change version to patched
21ce8ee chore: prepare next development iteration
```

## `connectors/nextcloud`

- **branche référencée** : `(detached)` @ `3b9a631`
- **base upstream** : `2.4.2`  →  delta = `2.4.2..HEAD` (**30 commit(s)**)
- **tags patched** : 2.4.2-patched 

```
3b9a631 fix(entcore): repointe entCoreVersion/entCoreLibsVersion sur 6.14.9-patched
85e404a feat(create): créer un document Office directement dans NextCloud
45e6e6e style(content): repositionne le toggle liste/icônes sous le bouton Importer
bd8813c revert(nextcloud): retire l'injection CSS d'alignement (folder-tree = infra-front, différé)
fe2e0ea fix(nextcloud): alignement cible folder-list-item/folder-tree-inner (pas seulement ul)
484018e ci(nextcloud): delete-then-deploy sur rct-nexus (dépôt release immuable)
a07fc6e fix(nextcloud): aligne « Documents synchronisés » dans le picker de documents
6aa6be0 style(import): bouton Importer NextCloud identique au natif (document-buttons-add + icone)
3d27ea0 fix(import): bouton Importer = vrai <button> (style thème) declenchant un input file cache
645a53b fix(import): bouton Importer NextCloud ouvre le selecteur de fichiers (fini le popup blanc)
aec9438 style(frontend): prettier --write (fix format:check dev-check-repository)
f297058 fix(front): bouton Importer aligné à droite (right-magnet) dans la vue synchronisée
4b57130 feat(front): bouton Importer persistant dans la vue Documents synchronisés
4160c4a feat(front): copyDocumentWorkspaceToCloud (copie doc ENT -> NextCloud)
5386fc1 i18n: 'Documents synchronisés' -> 'Documents synchronisés avec NextCloud'
99cd997 fix(config): résoudre la config NextCloud pour tout host (port standard + repli)
bc5a864 feat(desktop): blocage des extensions dangereuses + réglages par établissement
8673582 fix(documents): PDF non éditable via Direct Editing + Content-Disposition inline + droits resource
80b4976 fix(dates): forcer Locale.ENGLISH dans SimpleDateFormat
1fef892 fix: déplier auto Documents synchronisés + ne plus forcer editorId=onlyoffice
b51a8f1 fix(desktop): console admin NextCloud — validation, erreurs, ergonomie
d032a85 feat(share): partage NextCloud inter-établissements (structures autorisées)
41e07a5 feat(share): UI de partage NextCloud natif (bouton + picker utilisateur)
d6f4c56 feat(share): partage NextCloud natif entre utilisateurs ENT (coproduction)
a292bcc feat(preview): afficher les vignettes/aperçus d'images dans Documents synchronisés
44a9a74 fix(edition): corriger le double encodage du path (getEditUrl) sur fichiers avec espace/caractère spécial
5e781be feat(edition): édition bureautique en ligne via l'API Direct Editing (OnlyOffice)
297e735 ci: workflow build-and-publish dual (Angular+React) calque sur form/magneto
9a3d767 ci: retirer le workflow pnpm inadapte (build via edifice-cli, deploy Nexus manuel)
7bd034e chore: patched 2.4.2-patched + CI build-and-publish (fat-mod Nexus)
```

## `connectors/pmb-connector`

- **branche référencée** : `(detached)` @ `922dc10`
- **base upstream** : `2.2.2`  →  delta = `2.2.2..HEAD` (**9 commit(s)**)
- **tags patched** : 2.2.2-patched 

```
922dc10 fix(entcore): repointe entCoreVersion/entCoreLibsVersion sur 6.14.9-patched
bef3534 docs: README reflète le niveau administrateur local (AdminFilter)
f2555b9 feat(admin-local): niveau administrateur local pour la connexion PMB
6b9e9e7 feat(admin): écran de configuration de la connexion PMB par établissement
81f173d fix(amass): 3 bugs bloquant tout amass PMB réel, révélés par la vérification bout-en-bout
1796d6d docs: id_principal généralise aussi le partage d'un PMB régional mutualisé
d7d670b feat(multi-établissement): un serveur PMB par établissement
6780205 fix(pmb): source_id remplace database, incompatible avec ws/connector_out.php
ed2de42 fix(pmb-connector): premier patch -- parent fr.openent + CI build-and-publish
```

## `connectors/wordpress-connector`

- **branche référencée** : `develop` @ `99b1d82`
- **base upstream** : `1.2.2`  →  delta = `1.2.2..HEAD` (**17 commit(s)**)

```
7918e7c chore : fix label in container
afb51a9 fix(oceanwp): filet de sécurité pour un menu assigné pendant qu'OceanWP est actif
b68df0d fix(oceanwp): reporte le menu principal/pied de page au changement de thème
f304925 feat(oceanwp): bandeau de tutelle, pied de page et signature Open ENT
fc83b66 feat(themes): modèles OceanWP par type d'établissement
9d7cc31 feat(roles): rôle administrator pour un ADMIN_LOCAL sur son périmètre réel
31107a4 feat(roles): rôle administrator automatique pour le super admin ENT
dc83c8c feat(medias): copier le lien d'un document du workspace, sans dupliquer
39b8ef8 feat(medias): espace « Documents du workspace » dans la médiathèque
77ae47b feat(oidc): connexion auto depuis wp-login.php (sans clic sur bouton)
1897150 feat(oidc): SSO — route la connexion vers le skin ENT de l'établissement
149b2f5 Revert "feat(oidc): SSO multi-plateforme — route par établissement (openent_oidc_host)"
1eafa56 feat(oidc): SSO multi-plateforme — route par établissement (openent_oidc_host)
61fbd4b feat(medias): sélecteur d'image dans le dashboard ENT (logo, bandeau, favicon…)
0a84319 feat(settings): favicon en libre-service pour l'établissement
ae72457 feat(portail): portail des établissements par académie/ENT régional
6091d7c feat(medias): import des ressources partagées et des assets du thème dans la médiathèque locale
```

## `libs/entcore`

- **branche référencée** : `6.14.9-patched-dev` @ `7f1f960a6b`
- **base upstream** : `6.14.9`  →  delta = `6.14.9..HEAD` (**6175 commit(s)**)
- **tags patched** : 6.14.9-patched 6.14.9-patched-SNAPSHOT 

```
7f1f960a6b feat(archive): sauvegarde d'un établissement, groupe par groupe
6821dc4f47 fix(events): ignore aussi les health-checks ELB dans le filtre de sonde
69882a2433 fix: translation for portal-mui for video features
6c77b6e996 feat(auth): journaliser les tentatives de connexion refusées (LOGIN_FAILURE)
83b1f05cce feat(auth): expose le périmètre ADMIN_LOCAL dans le userinfo OAuth2
c9e24c1af2 feat(auth): expose superAdmin dans le userinfo OAuth2
ee82c09e2e feat(infra): historique personnel self-service (event/mine)
8970aab081 feat(workspace): liste anonyme des documents publiés sur le portail par établissement
71facfbb7f feat: a document in workspace can be published in pages or wordpress
6e4f0e9d78 feat(i18n): clés navbar.chat / navbar.chat.activeCall
6a4cec0dd5 fix: revert webUtilsVersion à 3.3.2 (non patché)
ce90f127db fix: garde IP null-safe pour requête event-bus synthétique + branding par structure + web-utils patché
75c819b7bb fix(events): ignorer les accès kube-probe/health-check dans l'audit ACCESS
61eeb5d7fc fix: remove video component for a complete new open ent module
0a2370cdf5 fix: video as app
e5ba6752d7 fix: add archive management + video support
e5cd8047bb fix(quota): quota par département fiable et restreint aux établissements
5a62dbec28 fix(workspace): garder la barre d'action visible même dossier vide
ebe1e7fefa feat: quota service
508cc1921a fix(app-registry): retourner address dans GET /appregistry/applications
0f72c6a798 fix(archive): timeout d'acquisition de verrou export trop court (500ms -> 5s)
0135616520 fix: npe
e8471dae6c fix: add feature to add manually "functional group" like head head
c4835c6c61 fix(common): UserInfos.Application tolère les propriétés JSON inconnues (category)
8d6c03485d fix(theme): messagerie — bootstrap openent chargé au runtime (charte eclat-bfc)
8a40cfb888 fix(timeline): remonter le titre des messages flash à l'utilisateur
5da4c2a747 fix(directory): journaliser l'échec de mise en cache de l'avatar
e1109bf970 ci(admin): builder le frontend Angular de l'admin (sinon /admin 500)
05435d97d8 fix(conversation): lien de recherche vers la route moderne de la messagerie
bdd5e8cfb1 fix(workspace): enregistrer ConfController -> /workspace/conf/public expose publicConf
7bec56527b feat(conversation): rend les messages interrogeables par le moteur de recherche
a26ea59057 fix(workspace): picker NextCloud - decode noms (%20) + liste verticale (styles inline)
267b8544b1 fix(workspace): picker NextCloud - chemin relatif (save OK) + filtre dossiers techniques + CSS
a42282fe69 fix(workspace): popup Partager NextCloud - ncShare recréé à la volée
a8cce0c207 fix(workspace): interpolation [[ ]] dans la lightbox NextCloud (au lieu de {{ }})
d3c6d8dd59 fix(workspace): NextcloudShareDelegateScope ne redéclare plus display (TS2430)
7b53f16190 fix(workspace): lightbox 'Partager vers NextCloud' invisible -> display.ncShare
cf51a38e88 fix(tests): publier le jar principal org.entcore:tests (build-helper attach testJs)
a144c072fb feat(workspace): action 'Partager/Déplacer vers NextCloud' sur docs natifs
bda2ca70f8 i18n(workspace): 'Documents synchronisés' -> 'Documents synchronisés avec NextCloud'
7cf4d5bf9d fix(workspace): garantir public/js/behaviours.js dans le jar (packaging)
3080679532 fix(scim): InputStream.readAllBytes() casse la compilation Java 8 du CI
b4043b68ae fix(ci): générer les frontends gulp avant mvn deploy (view/ + public/dist/)
ebcf0ff62c feat(workspace): bloquer les extensions dangereuses à l'upload natif
dcd735b9ee fix: LogRepositoryEvents.exportResources() rappelle enfin son handler
5e43bee99d feat(scim): connecteur de provisioning SCIM/SET (IAM externe)
66adaf54ce chore(conversation/frontend): registres npm via tokens d'env + chargement .env dans build.sh
811310a8d4 docs(auth): corrige le @param javadoc de /oauth2/token (type -> request)
e7fd741ff1 fix(timeline): retire l'illustration « lumiere eteinte » des etats vides
9e2c31e678 fix(timeline): fil de nouveautes plus sobre et filtre deplie par defaut
46016ba9be i18n(directory): neutraliser le libellé « Explorer le réseau » (défaut sans marque régionale)
dd95c74d9b a11y(auth login): RGAA 51H — html lang=fr, viewport zoomable, labels liés aux champs (for=)
a9a9a6eaf3 Revert "feat(session): exposer app.category dans la projection des applications de session"
ae06416bec feat(session): exposer app.category dans la projection des applications de session
29949760a7 fix(scram): vertx-pg-client + scram:client en provided (common) ; deps provided pg/sql-client (auth) — corrige NoClassDefFoundError StringPreparation sous scram-sha-256
cbf62e29da fix(search): SearchingHandler répond « 0 résultat » sur échec de source
226dab22bf fix(archive): dedup des apps exportables (Mes donnees)
b7b9105ef0 fix(postgres): IPostgresClient.notify - completion idempotente (tryComplete/tryFail)
546794b6c9 feat: change version to patched without snapshot
1dd6fb06b5 feat(1d): mot de passe assisté primaire (demande élève + réinit. enseignant à l'écran)
c881fce877 fix(messagerie): délégation lue via getDisplayName (action WORKFLOW)
cc14f305ab feat(messagerie): exclusion temporaire d'un élève + coupure de communication ciblée
ea8c67ed08 ci(conversation): NODE_AUTH_TOKEN=OPENENT_PACKAGES_TOKEN (lecture des packages @open-ent, GITHUB_TOKEN insuffisant cross-repo)
ac7385ce02 ci(conversation): générer package.json depuis le template avant pnpm install (sinon pnpm remonte à la racine, vite absent) — validé en local
46bad5a038 ci(conversation): pnpm via corepack (packageManager 8.6.6) — install+vite build validés en local
7d0b1964bb ci(conversation): laisser pnpm/action-setup lire packageManager (pnpm@8.6.6) au lieu de forcer v10 (conflit → vite introuvable)
87ef39c422 ci(conversation): builder le frontend React en CI (sinon view/index.html absent → 500)
291eee39e0 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
a605c685bc ci(entcore): settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
2848b79fac build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
7029dad0af ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
905fde9864 archive: sauvegarde/restauration self admin-local — manifeste versionné via config, maps locales, import tolérant sans version
3f3ae408cb chore(auth): rebranding i18n EN (NEO Team -> Open ENT Team)
3f71ebcc8f fix(archive): version du manifeste via config module-versions (sans Hazelcast)
a257513c14 feat(auth): endpoints admin des blocages temporaires de connexion
699b88f05c fix(conversation): cast JSONB des colonnes cci/cciName/toName/ccName à l'update
bcef8e18c9 chore(conversation): bump @open-ent frontend 2.5.29 -> 2.5.30
da7ae3ac23 chore(conversation): bump @open-ent frontend 2.5.22 -> 2.5.29
638fae1fee fix(conversation): API liste programmés sur /scheduled/list (évite le conflit avec la route SPA /scheduled)
8529fb9b6f fix(conversation): route SPA accepte /conversation/scheduled (deep-link dossier Programmés)
... (6095 commits supplémentaires tronqués)
```

## `libs/infra-front`

- **branche référencée** : `(detached)` @ `97b0867`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 4.8.17-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/mongodb-helper`

- **branche référencée** : `(detached)` @ `60e36ca`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.1.1-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/ode-bootstrap`

- **branche référencée** : `(detached)` @ `f6d2e8a`
- **base upstream** : `1.5.3`  →  delta = `1.5.3..HEAD` (**2 commit(s)**)

```
f6d2e8a chore(icon): Livret Sco, add app icon
764e921 chore: prepare next development iteration
```

## `libs/openent-frontend-framework`

- **branche référencée** : `(detached)` @ `baaa8e2`
- **base upstream** : `v2.5.30`  →  delta = `v2.5.30..HEAD` (**17 commit(s)**)
- **tags patched** : v2.5.30-patched 

```
03cb724 fix(video-recorder): relecture locale des captures d'écran
4d78e49 fix(media-library): ne pas planter quand l'action pré-succès échoue
3847294 fix(ci): résout le nom de package publié depuis package.json (force republish)
79c17f7 feat(video-recorder): capture écran / webcam / écran+webcam
bf1c4d9 fix(header): icône chat-nats dédiée (bulle) au lieu de l'icône messagerie
2ba77a3 feat(header): icône chat-nats (non-lus + appel en cours)
c217ee9 docs(readme): documente la publication @open-ent (GitHub Packages) et le mode force-republish
c7b6f2b docs(readme): documente la publication @open-ent (GitHub Packages) et le mode force-republish
b02f5a6 ci(publish): ajoute un mode force-republish (workflow_dispatch)
9bbe3a3 ci(publish): ajoute un mode force-republish (workflow_dispatch)
3b1f071 communities behaviour
3b27bfb fix(bootstrap): nuances --primary dérivées + halo focus pour eclat-bfc
85bcc97 feat(bootstrap): couleur de marque eclat-bfc pour le produit neo
ecc63f3 test(55D): insertion d'images par lots (useMediaLibraryEditor)
20874f7 ci(publish): declencher aussi sur les tags *-patched (release du fork Open ENT)
8bab5d2 a11y(RGAA 51H): contraste AA du bootstrap edifice (gris + vert e-primo)
11ff12f fix(55F): reconnaissance vocale — relance auto sur no-speech (mode continu) + test unitaire
```

## `libs/portal-mui`

- **branche référencée** : `main` @ `9d67db8`
- **base upstream** : `1.0.0`  →  delta = `1.0.0..HEAD` (**14 commit(s)**)

```
9d67db8 fix: add missing translation
5dba369 fix: translation
214798d ci(publish-dev-tag): ajoute le workflow de snapshot -dev (rct-nexus)
e13d535 feat: page de téléchargement Open ENT Desktop (Windows/macOS/Linux)
65ae179 fix: workflow to include branch and commit information in fat mod
2dc5ad7 fix(assets): restaure glyphicons_197_remove.png et glyphicons-halflings-white.png
38272d0 fix(i18n): ajoute la clé racine "workflowhub" manquante
04f31e1 doc: documentation
e11d097 fix(ci): résoudre org.entcore:ent-core (parent) via GitHub Packages
8d5c4e9 fix(ci): NEXUS_USER/PASSWORD au niveau du job backend, pas juste Deploy
9006569 fix(ci): bump @openent/ts-client 1.7.5 + react-mui 1.0.1
f1de3c7 fix(ci): désactiver l'alias vite vers le repo sibling quand il est absent
a0a5acf fix(ci): remplacer les deps file: par les versions Nexus publiées
4d28e50 chore: support ios app distribution
```

## `libs/theme-open-ent`

- **branche référencée** : `(detached)` @ `3fd94c3`
- **base upstream** : `3.4.10`  →  delta = `3.4.10..HEAD` (**17 commit(s)**)
- **tags patched** : 3.4.10-patched 

```
3fd94c3 fix(eclat-bfc): logotype horizontal sur le publipostage
e0e8fc3 feat(theme): override eclat-bfc construit depuis les sources
454a740 chore(build): decouverte dynamique des themes + menage docker/sass + LICENSE/README
6f0b53b a11y(RGAA 51H): aria-label bouton mot de passe + contraste ecran de connexion
4ad760c Move Neo team to Open ENT
4663b35 chore(theme): màj logos openent3 (logo, logo-mobile, variantes; retrait neo-pocket)
35b4694 Improve theme openent3
b9eb8e4 nouvelle version image
2be1646 fix image
37125a8 Add logo for openent1d and openent3
563461d feat: create new 1d theme
b1f314b chore: translation
5e022e2 add theme openent3
5cba0da add theme openent3
37996c5 chore: prepare next development iteration
19a394b add openent overrides
b93ca3d fix: remove blank in logo
```

## `libs/vertx-cron-timer`

- **branche référencée** : `(detached)` @ `248c4ca`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.0.0-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/web-utils`

- **branche référencée** : `(detached)` @ `0190668`
- **base upstream** : `3.3.2`  →  delta = `3.3.2..HEAD` (**2 commit(s)**)
- **tags patched** : 3.3.2-patched 

```
0190668 fix: getIp null-safe si remoteAddress() est absent
35fdd31 fix(web-utils): patch version 3.3.2-patched + null-check i18n args
```

## `modules/actualites`

- **branche référencée** : `3.1.5-patched-dev` @ `3b9e016f`
- **base upstream** : `0.17.1`  →  delta = `0.17.1..HEAD` (**812 commit(s)**)
- **tags patched** : 3.1.4-patched 3.1.5-patched 

```
3b9e016f ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
83ae90da fix(deps): aligne @open-ent/* sur 2.5.30-patched
31bcc01e fix(tests): résoudre les libellés du portail par alias, avec repli
378e2e79 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
477d5080 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
3a66599c fix(actualites): creation d'actualite cassee (route 404 + filtre 401)
e3d75a5b test(actualites): couvre le contrat status de createInfo
a207e9b5 test(mocks): enregistrer defaultHandlers + endpoints shell pour éviter les EINVAL flaky
43f66af9 fix(actualites): anomalies création actu (spinner infini, statut DRAFT défaut, division par zéro SQL)
4806227c ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
017fd718 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
1fb8e758 fix(i18n): ajouter les traductions anglaises manquantes (en.json absent)
986e6254 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
61482aef ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
f2ac004f feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
fe548e05 ci: fournir NODE_AUTH_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN à l'install pnpm (fix 404 @open-ent cross-repo)
c0ce835b chore(frontend): reformatage prettier (imports)
32c16fcb feat(actualites): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert
3f9bf947 feat: migration frontend @open-ent (look 1d/vert) sur 3.1.5-patched + entcore 6.14.9-patched
fecaa22d fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
d2900c36 fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers, no-frozen-lockfile
a1bf47aa chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
de106933 Migrate to JDK 21
3652de0b ci: add build-and-publish workflow for GitHub Packages
6d759569 release: 3.1.5
834389a3 fix: #IMPULS-5759 timezone is not properly handled on publication date
657dbcef fix: #COCO-5718 regression in widget query (#242)
7c81faa2 fix: #COCO-5708 integrate optimized query to framework + cleanup deprecated endpoints (#239)
0054f697 fix: #COCO-5693
9193c8e2 fix:#COCO-5583 set publicationdate of published info to today (#226)
024f15ad chore: prepare next development iteration
ec5800e7 release: 3.1.4
4d667b03 chore: fix pom.xml
20481a86 fix: #COCO-5512 fix extract from preference query users ids
51be310d chore: prepare next development iteration
df70d632 release: 3.1.3
a7ca7998 fix: #COCO-5645 add T in date format for legacy widget
fa22744b fix: #COCO-5645 split legacy query for actu and relocalise date (#229)
a661e8bd feat: #COCO-5494 screeb trigger FALC
bb7d67f0 feat: #COCO-5494 screeb trigger FALC (#228)
c1dfe858 feat: #COCO-5570 add content in preview endpoint (#227)
22e0c83b chore: prepare next development iteration
b0273a15 release: 3.1.2
f677d6b8 Update fr wordings
c798bdf5 Update fr wordings
6772108c Update fr wordings
ed15e8f3 Update fr wordings
eb6a79c8 Update fr wordings
04911382 Update fr wordings
647abe71 chore: #COCO-4435, change config keys to kebab-case
1c1987f9 chore: prepare next development iteration
ff4cf896 release: 3.1.1
149e6374 chore: prepare next development iteration
5c2a35de release: 3.1.0
d4e6b36a chore: set edificeFalc version properly
5fb14d1f fix(actualites):#COCO-4601 add data-test-id manage-threads-button
10a4a7df Update fr wordings
14f1c6a1 fix: script pg grants to apps role
239f4f5b fix: #COCO-5432 fix build
db3a5061 fix: #COCO-5436 fix test setup
f3826942 chore: set snapshot version after merge
9bd6d844 fix: #COCO-5116, wording for the FALC know more modal
2b0fe386 feat: #COCO-5432, super adml cleanup cron (#223)
fe4beed7 fix: #COCO-4435, log + batches
74b0ceb2 fix: #COCO-5442 ignore preferences on thread management + fix issues in thread filter (#221)
930bae48 feat: #COCO-5444, hidden threads dont generate timeline notifications (#222)
d9781a46 fix: #COCO-5443 thread setting user role display
97e646b6 fix: #COCO-4436, FALC design adjustements (#220)
fd527e87 fix:#COCO-5276 fix review qa
06995c9e ci: do not need to build image for now
4d06c2ce fix: #COCO-5247 regression on mobile list
3e93317e fix: #COCO-5379 update load tests (#219)
86d0f41e fix:#COCO-5226 auto update correctly dates in date picker (#218)
22d905b6 fix:#COCO-4818 add scroll margin to InfoCard when unexpand
217577d6 fix: #COCO-5245 pusblisher should be allow to delete news (#212)
b568ee4c fix: #COCO-5247 list page with full height
ec8e024e fix: #COCO-4436, fix text simplifier
9f170b42 fix: #COCO-5171, remove unpublish unsubmit on settings page
ed49ac11 chore: #COCO-5225, optimize application rights - partie 1/2 (#202)
04290470 fix: #COCO-4601 feedback designer
... (732 commits supplémentaires tronqués)
```

## `modules/appointments`

- **branche référencée** : `(detached)` @ `1484a51`
- **base upstream** : `1.3.6`  →  delta = `1.3.6..HEAD` (**209 commit(s)**)
- **tags patched** : 1.3.6-patched 1.3.7-patched 

```
1484a51 fix(deps): aligne @open-ent/* sur 2.5.30-patched
9d792bc fix(entcore): repointe entCoreVersion sur 6.14.9-patched
2d6307c fix(appointments): protéger DURATION_VALUES contre une duration absente/invalide
e02d8a4 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
a11feb8 ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
05fee4f fix(grids): durcir la garde du paramètre states de GET /grids
2642115 chore(conf): consolider les patchs pass-tech sur base officielle 1.3.6
8d4adfd ci: chaîne build & publish fat-mod (GitHub Packages + rct-nexus)
e62bf6b build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
aad778b chore: ignore *.tsbuildinfo (cache build TypeScript)
53f95d1 fix(conf): useTheme passe le code app à getConf (au lieu d'une chaîne vide)
f3e06f8 fix(conf): app code "appointments" pour EdificeClientProvider (404 /Rendez-vous/conf/public)
f4c496b chore: gitignore artefact de build
3f050f4 fix(theme): bandeau vert #2ba84a en mode 1D (data-product=1d)
bbc7331 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (build-and-publish aligné)
c372af5 appointments: migration @edifice.io -> @open-ent (2.5.16 -> 2.5.22) + alignement peers + fix @cgi require(dayjs/react) + token CI
c73808b ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
ece4009 fix: suppot PostgresSQL 16
5f5851e MAnage PostgreSQ types
6457ae7 feat: change version to patched
d653475 feat: change version to patched
fdd96bf release: 1.3.6
732e415 chore: prepare next development iteration
b1ba8ce release: 1.3.5
2fa3818 fix: #ENABLING-671 endDate should be greater than startDate
d774ac4 chore: prepare next development iteration
3a9f742 release: 1.3.4
22bee1c fix(search): #RDV-78 fix search infinite scroll using infinite queries (#102)
f239580 fix(search) : #RDV-78 fix research pagination on front
7c33176 fix(search) : #RDV-78 fix search results when deleting and reinputing a letter (#101)
825d1a3 chore: #SRE-4685 use Jenkins credentials instead of env variables
1e40722 chore: prepare next development iteration
639fa01 release: 1.3.3
b3625e2 chore: prepare next development iteration
677b67d release: 1.3.2
753b4ba chore: prepare next development iteration
eb12083 release: 1.3.1
567daeb fix(slots) : #RDV-100 fix weekslots not appearing on editing/aperçu (#100)
49adc2f fix(slots) : #RDV-100 fix weekslots not appearing on certain conditions (#99)
0825af5 fix(edit) : #RDV-99 fix public not cancelling edition when empty (#98)
a43a246 chore: prepare next development iteration
b27c97d release: 1.3.0
c3f8172 chore: set next development version
cd741b5 chore: update dependencies
c98b894 feat: #RBACK-117, zookeeper migration
790d42e chore: prepare next development iteration
c149ed3 release: 1.2.2
aff91aa fix(): fix i18n syntaxe and missing coma
6407cf3 feat(conf): #RBACK-188 add template.j2
0c6e02f chore: prepare next development iteration
423c74c chore: release 1.2.1
1d70a0a release: 1.2.0
e8b5bdc fix: #RDV-95 make feedback
db00756 feat(grids): #RDV-95 allow updating availability-impacting grid fields (#97)
f704db8 feat: #RDV-96 allow full week selection for start and end dates (#96)
404bbff feat: #RDV-87 add 5 and 10 minute slot duration options (#95)
941a26f ci: init docker env vars before building
d2e92c6 chore: update dependencies
76bbe0d chore: prepare next development iteration
3371918 chore: downgrade cgi-learning-hub dependency version
482e27d release: 1.1.2
40fb3b2 fix: #RDV-98 adapt select grids width in book appointment modal
0e3cca6 chore: update dependencies
987e042 chore: update dependencies
d3d1302 chore: prepare next development iteration
6b312de release: 1.1.1
5a6aacf chore: prepare next development iteration
2ceecce release: 1.1.0
020fef9 chore: set cgi-learning-hub dependancies version
f11de91 fix(1d): [#RDV-84, #RDV-85] fix theme 1D and i18n interpolation
350dfc2 feat(theme): #RDV-85 add 1D theme support on appointments (#94)
7799eea chore: update dependencies
5b4f38d chore(): update dependencies
8d9474b chore: prepare for next development iteration
ae6da1d release: 1.0.6
254cc4a fix(groups): filter empty groups (#93)
079db78 chore: prepare for next development iteration
e0fcbc5 release: 1.0.5
ec0f2fa fix(groups): fix groups rules during grid creation (#92)
8255d31 chore: prepare for next development iteration
... (129 commits supplémentaires tronqués)
```

## `modules/blog`

- **branche référencée** : `(detached)` @ `eea4e3f`
- **base upstream** : `1.24.1`  →  delta = `1.24.1..HEAD` (**1015 commit(s)**)
- **tags patched** : 5.4.10-patched 5.4.7-patched 

```
eea4e3f fix(deps): aligne @open-ent/* sur 2.5.30-patched
8bcdc65 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
ecaf135 fix(scram): entCoreVersion 6.14.9 -> 6.14.9-patched (common provided, fat-jar sans pgclient/scram)
b6ea865 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
6dbb1b9 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
51c2fb1 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
14fc2a4 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
79d7de0 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
334f633 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
261fbc8 ci: pnpm install --no-frozen-lockfile (résout @open-ent/explorer 2.5.26 désormais publié)
a350ffa chore(frontend): reformatage prettier (imports)
e0f20ce fix(blog): Matomo via proxy dashboard (siteId par domaine, @open-ent 2.5.26)
4cc7b3f build(blog): hook Matomo (react 2.5.25, logs [Matomo] au lieu de [Xiti])
288eb83 feat(blog): tracking Matomo (@open-ent 2.5.25) + vue verte (dist/index.html avec link openent-bootstrap)
4deed8b fix(blog): vue servie avec le link /assets/themes/openent-bootstrap actif (bandeau vert 1d)
209c4a1 Revert matomo sur blog : restaure le build vert @open-ent/client 2.5.22
d8febc4 fix(matomo): rebuild blog avec @open-ent/client 2.5.24 (tracking Matomo, plus de 404 xiti)
186a968 blog: build standalone propre + migration @open-ent/explorer
9b2f131 ci: definir NPM_TOKEN/TIPTAP_PRO_TOKEN a l'install (parse .npmrc -> routage @open-ent)
871bcbd ci: auth GitHub Packages (@open-ent) pour l'install frontend
86d0aee feat(blog): @open-ent depuis GitHub Packages + bootstrap externe
2ed59b1 ci: add build-and-publish workflow
08ff780 i18n: sync and translate en.json to English
26e7cd2 allowReplies by default
5f98f50 update view with last js version
b1a259c feat: change version to patched
fcc9ef3 release: 5.4.7
7690c5e chore: prepare next development iteration
5c9d854 release: 5.4.6
7fd7596 chore: prepare next development iteration
0c303dc release: 5.4.5
a69462e chore: set snapshot version after merge
32a3a60 fix: #PEDAGO-3808, create preview from json
4e10d08 fix: #PEDAGO-3840, disable antiflood
72c0a77 fix: #PEDAGO-3691, remove deprecated right publishComment
0197eed chore: prepare next development iteration
00f354e chore: prepare next development iteration
b683e80 release: 5.4.4
ea6ffb0 chore: prepare next development iteration
87bf966 release: 5.4.3
990d24d chore: set snapshot version after merge
6ff58bd chore: prepare next development iteration
0b5f994 fix: #PEDAGO-2992, enable antiflood for publish-comment and submit-post
083c2d1 chore: #SRE-4685 use Jenkins credentials instead of env variables
23163b6 chore: prepare next development iteration
8f2be42 release: 5.4.2
82da682 chore: prepare next development iteration
2d6b9ec release: 5.4.1
1f9a6d3 chore: #ENABLING-611 remove charet from package.json (#145)
252e431 chore: prepare next development iteration
e9a5716 chore: set modMongo version
21e1e36 release: 5.4.0
0bbec63 fix: fix dependencies versions in pom.xml
da4a8e4 chore: update edifice-parent in pom
0936370 chore: set next development version
a2671ca chore: update dependencies
b99bdca feat: #RBACK-117 #RBACK-127 #RBACK-155, kubernetes compatibility
698d580 chore: prepare next development iteration
f2d9940 release: 5.3.7
2a409b6 feat(conf): #RBACK-188 add template.j2
3d89087 chore: prepare next development iteration
f2643c4 release: 5.3.6
bd57fa3 Update fr wordings
356b601 chore: prepare next development iteration
5df0600 release: 5.3.5
a2728e1 doc: update readme
3692aaf chore: prepare next development iteration
b9c467c release: 5.3.4
7859eeb feat: #INTEG-1053 add option to disable blog comment replies
0aff3e1 chore: prepare next development iteration
0111b49 release: 5.3.3
f067c04 chore: prepare next development iteration
d08c0a7 release: 5.3.2
8cc2998 chore: prepare next development iteration
9837a5a release: 5.3.1
30a103b chore: prepare next development iteration
58253f7 release: 5.3.0
cfba29b chore: set snapshot version after merge
c0e3f67 chore: prepare next development iteration
f8c8263 chore: prepare next development iteration
... (935 commits supplémentaires tronqués)
```

## `modules/cahier-de-textes`

- **branche référencée** : `4.1.7-patched-dev` @ `533e117f`
- **base upstream** : `4.1.5`  →  delta = `4.1.5..HEAD` (**70 commit(s)**)
- **tags patched** : 4.1.5-patched 4.1.6-patched 4.1.7-patched 

```
533e117f ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
f8a05478 feat(diary): paramétrage du cahier de textes par classe/groupe (MOD11 CCTP)
f561951c fix(deps): aligne @open-ent/* sur 2.5.30-patched
11749f5b fix(diary): conflit de créneau RBS silencieux pour l'enseignant
50970571 fix(diary): sélecteur de ressource RBS + build.sh local
2adb8fc9 fix(security): corriger l'IDOR sur GET /diary/progressions/:ownerId
e2c9a829 chore(build): migrer docker-compose vers docker compose
9d79244a feat(diary): afficher un tooltip Inspecteur sur les visas posés par un PERSONNEL habilité inspecteur
1269a458 fix(diary): champ salle en texte libre passé en lecture seule
297dba14 feat(diary): sélecteur de ressources RBS pour une séance (coexistence avec room)
574eaa3d fix(diary): ajouter la vue diary-react.html manquante
30a42fd3 fix(build): exclure frontend/ du tsconfig racine
c666b558 feat(diary): sélecteur d'établissement pour l'inspecteur dans la vue d'inspection
c1f26f13 feat(diary): périmètre d'inspection issu des habilitations, pas des rattachements
5ea7c8ed fix(diary): vue consultation progressions distingue erreur et absence de données
c67dcf56 fix(diary): popup visas rouvrable à chaque clic (transition forcée du lightbox)
d63cb2d2 ci(diary): delete-then-deploy sur rct-nexus (dépôt release immuable)
a82951a5 fix(diary): colonne État affiche tous les visas (désambiguïsation par heure)
9479559c fix(diary): popup visas affiche le vrai viseur + « Élèves du groupe » dans la recherche admin
84074186 Diary: vue consultation des progressions d'un enseignant (direction, lecture seule)
152a72fa feat(diary): « Élèves du groupe xxx » aussi dans les écrans de saisie (devoir/séance)
b3cbf5ab ux(diary): visas empilés une ligne par visa dans la colonne État
23783262 fix(diary): $rootScope:infdig — mémoïser getNotebookVisas (boucle de digest)
98fcd871 fix(diary): mapper visas_detail dans le modèle Notebook (sinon droppé)
8d4ae7b6 feat(diary): visa multi-viseurs v2 — string_agg (au lieu du jsonb_agg qui faisait hang)
5a8505a7 revert(diary): retirer l'agrégat visas de la requête notebooks (hang + affichage KO)
1106ba8e perf(diary): index composites pour /diary/notebooks (vue notebook)
739d95f4 ux(diary): masquer la recherche enseignant/classe pour les élèves et parents
7abafa45 ux(diary): placeholder recherche classe (accueil) plus explicite
e91d21f2 ux(diary): placeholder recherche enseignant plus explicite
2f8c7c36 feat(diary): visa multi-viseurs — afficher tous les visas « Visé le [date] par [nom] »
0dcdd98a fix(diary): chip enseignant — style inline (le sass n'est pas compilé par le mod)
560312c8 fix(diary): picker médiacentre — la recherche ne partait pas (scope enfant du lightbox)
d676cb90 feat(diary): page d'accueil — recherche classe « Élèves du groupe 501 » + saisie tolérante
ec23480d ux(diary): message médiacentre neutre + distinction avant/après recherche
8526d2bb ux(diary): picker espace doc — 1 seule validation (bouton « Ajouter » de la media-library)
8a154ce8 feat(diary): recherche d'audience — libellé « Élèves du groupe 501 » + saisie tolérante
fa517115 fix(diary): recherche d'audience — revenir à l'affichage du nom (search cassé par le préfixe)
66484a87 ux(diary): chip enseignant sélectionné ne chevauche plus le panneau
096ffdb2 feat(diary): ressources du médiacentre attachables (devoir + séance)
08b05bf7 ux(diary): audience obligatoire visible + libellé recherche + préfixe Groupe/Classe
c869b54c feat(diary): ressources "espace documentaire" aussi sur la séance (parité devoir)
cc128297 ux(diary): clarifier le picker de ressources (devoir)
9b0e3847 feat(diary): pièces jointes "Ressources" sur le devoir (espace documentaire)
4fe77669 fix(diary): PDF visa/impression 404 — poster sur /generate/pdf
b0c74117 fix(diary): visa/PDF non enregistré — init NodePdfHelper avant VisaServiceImpl
c42dc65b ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
e5c15a65 fix(51C comparatif): séances de la semaine dans la grille calendaire + btn-link lisible (thème)
f5e69955 feat(diary/react): écran Progressions (séquences pédagogiques)
564060ef feat(51C diary): ecran Seances React (liste + creation + publication)
3cbb3f41 [51C-migration] feat(cahier-de-textes): vue calendrier hebdomadaire (parité)
6a2d9cd8 [51C-migration] feat(cahier-de-textes): incrément 2 — gestion des types de devoir
6f06d743 [51C-migration] feat(cahier-de-textes): migration React incrément 1 — devoirs
ccaac1be build(diary): version 4.1.7-patched avec les correctifs (forward-port)
d2a7cc28 fix(diary): safeApply disponible sur tous les scopes (sélection de matière)
06c37924 fix(diary): radios échéance Session/Date mutuellement exclusifs (créer un travail)
492559bd fix(diary): responsive recherche de classe (#2) + version 4.1.5-patched
05441ea3 fix(diary): garde le cycle $digest (async-autocomplete) + $scope.display (manageProgression)
6daaccae ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
d2064312 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
f10fc7d1 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
e924b960 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
d33e1f6c fix(session): caster la date en to_date à l'INSERT (PG16)
f659cb6f fix(homework): répondre (JsonArray vide) pour les profils non gérés au lieu de laisser la requête en attente
f32b3fe1 release: 4.1.7-patched
edb41be7 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
00944914 i18n: sync and translate en.json to English
b45a7427 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
3ba9e2ff ci: add build-and-publish workflow for GitHub Packages
ce93535d fix(sql): cast date parameters to ::date to fix PostgreSQL type mismatch
```

## `modules/calendar`

- **branche référencée** : `4.2.7-patched-dev` @ `7212659`
- **base upstream** : `4.2.10`  →  delta = `4.2.10..HEAD` (**59 commit(s)**)
- **tags patched** : 4.2.10-patched 4.2.7-patched 

```
7212659 ci: ajoute le script refresh-open-ent-lock.mjs manquant
6ba86b5 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
1aa2fda fix(deps): aligne @open-ent/* sur 2.5.30-patched
9eddb7c fix(console): retire deux causes de bruit console (directive dépréciée + appel de droits cassé)
f97eee0 fix(calendar): creation d'evenement sur les agendas reellement selectionnes (au lieu de la case a cocher secondaire), et creation en multi-agenda quand plusieurs sont selectionnes
f19cdaf fix(calendar): épingler entcore sur une version fixe (dev flottant cassait le multi-combo en prod)
eb5717f fix(calendar): exclure $$hashKey aussi des pièces jointes déjà sérialisées
bc07c48 fix(calendar): 500 sur enregistrement avec ressources médiacentre (champ $$hashKey)
16fb9df fix(calendar): 500 sur enregistrement d'un événement récurrent (owner sur-emboîté)
c103e56 fix(calendar): boutons Enregistrer grisés en permanence sur un événement récurrent
46406d9 fix(calendar): les toasts (ex : ajout ressource médiacentre) étaient masqués par une lightbox ouverte
b562569 fix(calendar): toast de confirmation à l'ajout d'une ressource médiacentre
eb04064 feat(calendar): ressources du médiacentre sur les événements + fix noms encodés
6b29c4f fix(calendar): sections agendas établissement/groupe toujours visibles (comme les autres)
ee23f09 feat(calendar): formulaire de création agenda établissement/groupe + partage
a8faf1b feat(calendar): fondation agendas établissement/groupe (backend endpoints + modèle + sidebar)
891752d fix(calendar): toast anti-doublon différé (contourne $apply already in progress du media-library)
4435b6c feat(calendar): anti-doublon pièces jointes + « Mon agenda » sur l'agenda par défaut
fddd053 ci: verrouiller entcore sur une version -patched au build
de45da3 fix(ihm duale): ajouter la vue calendar-react.html manquante dans le fat-mod
bc710d6 docs(frontend-ui): corriger le commentaire de bascule IHM
2ee48ca fix(ci): -Dmaven.test.skip=true au lieu de -DskipTests sur Build fat JAR
67f2026 fix(dev): build local cassé — submodule git mal monté dans Docker
508e71c ci: écrire la branche et le commit dans le MANIFEST du fat mod
f35b7ac ci(calendar): réactiver le publish rct-nexus (jar complet depuis [B])
28d3859 ci(calendar): builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
de27d33 ci(calendar): ne plus publier sur rct-nexus depuis la CI (module dual React)
56d7188 ci(calendar): tolérer le 409 Conflict au publish GitHub Packages
16a3845 feat(51C): agendas externes ICS (section + ajout par URL autorisée, lecture seule exclue de l'écriture)
be8fe31 feat(51C comparatif): vue Liste des événements
871dd5d fix(51C comparatif): section Agendas partagés (sidebar scindée) + btn-link lisible (thème)
731d5d6 ci(calendar): fix publish sur tag — settings COMPLET (repository GitHub Packages)
cdaa917 [51C-migration] chore(calendar): défaut IHM -> react (parité atteinte)
8db04af [51C-migration] feat(calendar): incrément 4 — partage d'un événement
06d499a [51C-migration] feat(calendar): incrément 3 — vues Jour / Semaine / Mois
1e44add [51C-migration] feat(calendar): incrément 2 — partage d'un calendrier
64df003 [51C-migration] feat(calendar): migration React incrément 1 — agenda + calendriers + événements
8efaed4 ci(fix): settings publish complet (github repos + creds) pour resoudre le parent app-parent
fbf68d3 ci(diag): trace shell (set -x) + mvn -version pour identifier l'echec du step publish
ab42abc ci(fix): supprimer le composant nexus existant avant redeploy (maven-releases interdit l'ecrasement)
cdad73a fix(agenda): pre-selection de l'agenda a l'edition d'un evenement
0fa864b ci(fix): générer view/ (view-src→view) + build:sass avant package, sinon 500
b0accf5 build: version 4.2.7 (= déployé, Implementation-Version au MANIFEST)
cd346b8 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
915b550 fix(calendar): remplace JsonHttpServerRequest.toJson (supprimé en vertx4) par le pattern headers/Cookie
008510d ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
166dccf fix(i18n): ajouter les dernières clés anglaises manquantes (parité fr.json)
f33f41e fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
d79b55c build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
67e3b94 ci: retirer version pnpm explicite (conflit avec packageManager) + install --no-frozen-lockfile
dd04ae6 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
31cd44c fix(ci): vendor missing entcore PreferenceHelper classes (not in 6.14.9-patched)
fe86c68 fix(ci): remove Maven build from dev-check (Java compat issue tracked separately)
726a7a5 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
ccb8ef9 fix(ci): docker Gulp, Java 8, GitHub Packages auth, entcore_version, branch triggers, dev-check fixes
36f32be chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6585792 ci: add build-and-publish workflow for GitHub Packages
9a70f06 feat: change version to patched
2d9731e chore: prepare next development iteration
```

## `modules/chat-nats`

- **branche référencée** : `develop` @ `eb5dc3c`
- **base upstream** : `1.0.0`  →  delta = `1.0.0..HEAD` (**41 commit(s)**)

```
eb5dc3c ci: ajoute le script refresh-open-ent-lock.mjs manquant
5721be9 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
bd0eafd websocker handler
401cef6 fix(deps): régénère pnpm-lock.yaml (CI frozen-lockfile cassée depuis le bump 2.5.30-patched)
c2ed78b fix(deps): repointe @open-ent/* sur 2.5.30-patched (2.5.31/2.5.32-patched supprimées)
affc994 fix(deps): bump @open-ent/* vers 2.5.32-patched (icône chat dédiée)
c702625 fix(deps): bump @open-ent/* vers 2.5.31-patched (icône chat header)
d02630d feat(status): endpoint GET /chat/status pour l'icône du header commun
1f57c92 fix: set/refresh Matrix display name and reuse a stable call device
3b95443 feat: expose Matrix identity by login + inbound external invites, voice-only calls
a176d87 fix(deps): repointe @open-ent/* sur 2.5.30-patched (2.5.31-patched supprime)
489e063 feat: support call with external matrix account
4efadfd fix: i18 text
3d0c412 fix: try to have better message for matrix issue
55a635a fix: tsc
2cab35f feat: message can be edited
59b3fe1 fix: add log
fa5b581 feat: chat start call banner
3188ef5 fix: improve presence management
027b823 fix(chat): tombstone les messages supprimes (pour tout le monde) au lieu de les faire disparaitre
0840845 feat: delete messages for all users and not only owner
aa8b429 feat: manage message deletion for a owner
77e3f49 fix: title
8adaf11 fix: presence in forntend + wait cursor
611f3ac fix: closing </servers> tag missing in nx-settings.xml
a8d65d6 chore: add new wokflow to find issue and generate a fat mod on a specific commit
97e54d6 try to fix call
2dc246c fix: call someone
a6a4683 feat: add matrix bridge for call
83cab62 feat(i18n): mise en place réelle de l'i18n dans le frontend chat-nats
d8b9fc8 fix(messages): affiche le nom de l'expéditeur dans les salons de groupe
8ae3750 fix(groups): gère le cas d'un groupe existant réduit au créateur lui-même
c29b8b0 fix(groups): verrouille la composition d'un salon créé à partir d'un groupe ENT
956074d fix(frontend): en-têtes de catégories colorées + pictos dans le picker de groupes existants
b0caf96 feat(groups): miroir des groupes chat vers de vrais groupes ENT + démarrage depuis un groupe existant
8730ed1 fix(frontend): élargit les modales pour éviter le scroll horizontal
67bd4e9 fix(frontend): couleur du thème, avatars non déformés, filtre profil + avatars dans la modale
7aa4d9d feat(frontend): socle React @open-ent (bandeau ENT + thème par domaine)
83b0616 Update version from 1.1.0-SNAPSHOT to 1.2.0-SNAPSHOT
408c20b Bump version from 1.0.0 to 1.2.0
f1c6803 feat: manage group
```

## `modules/collaborative-editor`

- **branche référencée** : `(detached)` @ `eaf0ac5`
- **base upstream** : `3.3.5`  →  delta = `3.3.5..HEAD` (**13 commit(s)**)
- **tags patched** : 3.3.5-patched 3.3.6-patched 

```
eaf0ac5 fix(collaborative-editor): liste vide bloquante + resolution de domaine
515e4bc ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
89dfa54 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
f034141 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
b1f7d38 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
407f4c0 feat(collaborative-editor): add etherpad-public-url support
44c8803 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
42ecd7e i18n: sync and translate en.json to English
14def63 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
761acec fix(collaborative-editor): patch version 3.3.5-patched + i18n timeline en
3714ada ci: add build-and-publish workflow for GitHub Packages
5e3c0a7 release: 3.3.6
eba664e chore: prepare next development iteration
```

## `modules/collaborative-wall`

- **branche référencée** : `(detached)` @ `53c12ec`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.4.7-patched 3.4.8-patched 3.4.9-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/community`

- **branche référencée** : `2.2.1-patched-dev` @ `526b039`
- **base upstream** : `2.2.1`  →  delta = `2.2.1..HEAD` (**12 commit(s)**)
- **tags patched** : 2.2.1-patched 

```
526b039 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
6e0748e fix(deps): aligne @open-ent/* sur 2.5.30-patched
1996873 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
dba8b72 fix(51C comparatif): btn-link lisible (thème) — actions Détail/Renommer visibles
9056ccb feat(51C-migration): community — invitation/retrait de membres (Détail, React)
c25b968 feat(51C-migration): community — écran Détail d'une communauté (React)
f87a00c [51C-migration] feat(community): recherche/filtre des communautés (parité)
967bb4e [51C-migration] feat(community): incrément 3 — édition (renommage) PUT /community/:id
0651e34 [51C-migration] feat(community): incrément 2 — création/suppression de communauté
f6506f4 [51C-migration] feat(community): migration React incrément 1 — mes communautés + annuaire
5cd9da8 fix(community): #5 garde null sur types dans setRights (TypeError null.indexOf)
8e19d24 fix: change version to 2.2.1-patched
```

## `modules/competences`

- **branche référencée** : `2.1.12-patched-dev` @ `087af2a2`
- **base upstream** : `2.1.12`  →  delta = `2.1.12..HEAD` (**33 commit(s)**)
- **tags patched** : 2.1.12-patched 

```
087af2a2 ci: ajoute le script refresh-open-ent-lock.mjs manquant
f67bc3bb ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
8dc6a575 fix(deps): aligne @open-ent/* sur 2.5.30-patched
fc48285c fix(competences): épingler entcore sur une version fixe (dev flottant)
1976abc2 docs(frontend-ui): corriger le commentaire de bascule IHM
07a522ee ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
bf6bf89b fix(51C comparatif): btn-link lisible (thème)
dcb9d6c6 feat(competences/react): écran Relevé de notes (classe/matière/période)
95c618cb feat(competences/react): écran Arbre de compétences (référentiel par domaines)
5bd055c5 feat(51C-migration): competences — écran Saisie de notes par devoir (React)
8ee3cc32 [51C-migration] feat(competences): onglet Évaluations (liste des devoirs)
bcd6451c [51C-migration] feat(competences): bascule React PAR DÉFAUT
7518dc55 [51C-migration] feat(competences): migration React incrément 1 — référentiels d'évaluation
200a447d fix(competences): eviter le NPE sur getType() null (ex. admin) dans view
6624565b ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
7f353cd2 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
69ce5ec2 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
adb938a1 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
ec5f82ef ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
61aa800e i18n: translate en.json to English
544cc420 i18n: sync en.json keys with fr.json
07a62a28 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
c460fe1e fix(ci): add --ignore-engines to yarn install for Node 16 compatibility
39644a92 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
9ac6ebae ci: re-trigger build after entcore-v2 published to GitHub Packages
cce6b52b fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
3ba06f2e ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
6da21b10 fix(competences): patch version 2.1.12-patched
4c572695 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6e53b90f ci: add build-and-publish workflow for GitHub Packages
b9003644 fix(competences): patch version 2.1.12-patched
cde1b121 fix: BulletinWorker NPE when neo4jConfig is JSON null string
d4f3f471 chore: prepare next development iteration
```

## `modules/edt`

- **branche référencée** : `3.1.4-patched-dev` @ `9d32a91`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.1.4-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/exercizer`

- **branche référencée** : `(detached)` @ `64ad7b43`
- **base upstream** : `4.3.6`  →  delta = `4.3.6..HEAD` (**18 commit(s)**)
- **tags patched** : 4.2.5-patched 4.3.6-patched 

```
64ad7b43 fix(parcours,à-rendre,pilotage): parité sujet à rendre + navigation suivi + prolongation bidirectionnelle
a436afa5 fix(parcours): corrige 5 bugs réels trouvés en recette + ajoute le suivi de classe (D5)
d3f0b1bf feat: parcours multi-séquences (D1/D5/D6/D7), pilotage temps réel (D3), import de ressource externe (D4)
354b24c1 fix(library): masquer le bouton 'Publier dans la bibliotheque' (Bibliotheque non provisionnee)
0623f92b feat(schedule): noms de groupes lisibles dans le selecteur de destinataires
e366522a fix(i18n): ajout des 45 cles manquantes affichees en brut (fr+en) + timeline Exercizer
7a16cf95 fix(i18n): ajout des clés manquantes exercizer.update et exercizer.subject.desc (fr+en)
22ffcd56 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
cf5cfa2a ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
552cdb40 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
990ded3a build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4fb57f55 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
eb49b648 i18n(en): traduire les valeurs restées en français (at, From, To, on)
9127e240 i18n(fr): ajouter la clé exercizer.title
e249ed4b i18n: sync and translate en.json to English
e8da1e91 fix: default blank due date
c9b355f0 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
e98a3dee fix(exercizer): patch version 4.3.6-patched
```

## `modules/explorer`

- **branche référencée** : `(detached)` @ `ced1a5c2`
- **base upstream** : `lib-v2.5.23`  →  delta = `lib-v2.5.23..HEAD` (**25 commit(s)**)
- **tags patched** : 2.5.7-patched 2.5.8-patched 2.5.9-patched 

```
ced1a5c2 fix(deps): aligne @open-ent/* sur 2.5.30-patched
e16be35d [51C-migration] ci(explorer): publier lib+tests+fat sur GitHub Packages (merge de 1f659fc dans 2.5.7-patched)
c544d039 [51C-inlayout] fix(explorer): neutralise le decor plein-page en mode embarque
bb7075c9 feat(explorer): entree de montage in-layout isolee (CCTP 51C-2)
e221a266 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
77789f8d fix(scram): scram:client provided + vertx-sql-client provided — fat-jar sans pgclient/scram
aae3afd1 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
50c2ee45 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
b54ef599 ci(explorer): NPM_TOKEN + TIPTAP_PRO_TOKEN (sinon .npmrc non parsé -> @open-ent sur npmjs 404)
8b09e08c ci(explorer): pnpm install --no-frozen-lockfile (résolution @open-ent via .npmrc)
346be5e0 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
b3c11028 ci(explorer): NODE_AUTH_TOKEN (OPENENT_PACKAGES_TOKEN) pour l'install frontend @open-ent
588efd92 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
0e97b8ca feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
e3946d28 chore(deps): @open-ent/* 2.5.26 -> 2.5.27 (garde favicon theme.basePath)
12532c99 fix(explorer): liste vide au lieu de 500 si l'index OpenSearch n'existe pas
1d426b8e fix(build): base vite '/explorer/public/' en prod (404 du bundle sinon)
08291b6b ci(publish-lib): fournir NODE_AUTH_TOKEN (OPENENT_PACKAGES_TOKEN) à l'install — fix 401 cross-repo sur @open-ent/react
ad3302ff chore: gitignore artefact de build
d7a62159 fix(explorer): tracking Matomo proxy dashboard (@open-ent 2.5.26) — remplace l'ancien setSiteId/stats direct cassé
ca604242 deps: @open-ent/* ^2.5.22 -> ^2.5.24 (tracking Matomo publié)
affc2522 build(explorer): dist avec tracking Matomo (matomo.js, plus de 404 xiti)
9963da00 build(explorer): dist @open-ent (look 1d/vert, data-product=1d) — cohérent avec la source migrée 715bfce
715bfcee feat: migration frontend @edifice.io (fork lié develop-pedago) -> @open-ent 2.5.22 publié (look 1d/vert)
92648962 fix(view): supprime le double préfixe /explorer/public/explorer/public (assets 404)
```

## `modules/form`

- **branche référencée** : `(detached)` @ `d7106814`
- **base upstream** : `3.1.0`  →  delta = `3.1.0..HEAD` (**8 commit(s)**)
- **tags patched** : 3.1.0-patched 

```
d7106814 fix(deps): repointe @open-ent/* sur 2.5.30-patched (2.5.31-patched supprime)
c45b717c fix(theme): pin @open-ent/bootstrap@2.5.31-patched (correctif eclat-bfc)
e0d8ece4 ci(form): HUSKY=0 pour neutraliser le prepare husky en CI (sous-module sans .git dir)
5d4b1b90 ci: build & publish fat-mods (formulaire + formulaire-public) vers rct-nexus
2283942c fix(theme): getConf(FORMULAIRE) pour récupérer le thème is1d (bandeau)
03f9c871 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
0f5f013e feat(form): migration frontend @edifice.io -> @open-ent (formulaire + formulaire-public)
e8979bab build(patched): 3.1.0-patched sur entcore 6.14.9-patched
```

## `modules/forum`

- **branche référencée** : `2.1.3-patched-dev` @ `2a76e4a`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**20 commit(s)**)
- **tags patched** : 2.1.3-patched 2.1.4-patched 2.1.5-patched 

```
2a76e4a ci: ajoute le script refresh-open-ent-lock.mjs manquant
6652aca ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
c778729 fix(deps): aligne @open-ent/* sur 2.5.30-patched
a372e39 fix(forum): afficher l'illustration par défaut des catégories sans image
6bb0067 fix(entcore): compiler forum contre l'entcore patché, pas l'upstream
938afa6 fix(ihm duale): ajouter la vue forum-react.html manquante dans le fat-mod
2e8f27a docs(frontend-ui): corriger le commentaire de bascule IHM
7149946 ci: écrire la branche et le commit dans le MANIFEST du fat mod
fd236e5 ci(forum): publier le fat-mod sur rct-nexus (module dual, requis pour FORUM_VERSION -patched en prod)
14804d1 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
ed1adeb fix(51C comparatif): sujets listés sous les catégories + btn-link lisible (thème)
ca7b545 ci(forum): tolérer le 409 GitHub Packages sur re-tag (continue-on-error)
bce5568 [51C-migration] fix(forum): défaut IHM react via le fallback Java (conf strippée à la génération)
e999ae1 [51C-migration] chore(forum): défaut IHM -> react (parité atteinte)
c3fa24c [51C-migration] feat(forum): partage de catégorie (modale sur l'API entcore)
cbfe3e6 [51C-migration] feat(forum): édition inline du nom de catégorie et des titres de sujet
7334bc8 [51C-migration] feat(forum): éditeur riche (@open-ent/react) pour les messages
16ec5fc ci: add build-and-publish workflow
8ec808d [51C-migration] feat(forum): migration React + bascule ?ui= (sur 2.1.3-patched, sans bump)
d7e234a feat: change version to patched
```

## `modules/http-proxy`

- **branche référencée** : `(detached)` @ `664808b`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.0.0-patched 3.1.0-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/magneto`

- **branche référencée** : `(detached)` @ `9823749`
- **base upstream** : `2.10.0`  →  delta = `2.10.0..HEAD` (**12 commit(s)**)

```
9823749 fix(deps): migre @edifice.io/{client,react,tiptap-extensions,utilities} vers @open-ent@2.5.30-patched
2c2478e ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
ad2eada chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
9d71aa0 ci(publish): coordonnées du fat-mod parsées depuis le nom tilde (évite mvn help:evaluate qui échouait en CI sur la résolution du parent)
c69a622 fix(frontend): référence @cgi-learning-hub à 1.13.0 (tag develop cassé : 1.13.0-dev incompatible mui 5.15 / 1.2.0 sans RadioGroup)
73a438b ci(build): chaîne build→publish fat-mod (frontend pnpm/Vite + backend Maven, GH Packages + rct-nexus)
a0322d3 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
eeb18b5 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
4a39dcb build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
2e2083a build(2.10.0-patched): entcore open-ent 6.14.9-patched (fix crash async map cluster) + thème openent runtime (bandeau 1d) + fix menu vue board
d940857 Version 6.14.9-patched
400fb2f chore: prepare next development iteration
```

## `modules/mindmap`

- **branche référencée** : `(detached)` @ `9f35155`
- **base upstream** : `0.10.0`  →  delta = `0.10.0..HEAD` (**560 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.9-patched 

```
9f35155 fix(deps): aligne @open-ent/* sur 2.5.30-patched
b497238 fix(deps): aligne @open-ent/* sur 2.5.30-patched
461d083 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
6278e38 [51C-inlayout][MODIF-FICHIER-EXISTANT] feat(mindmap): masque le Layout du module en mode embarque
c792cdb [51C-inlayout] feat(mindmap): entree de montage in-layout (mode embed + MemoryRouter)
5928445 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
39fb4bc ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
f1a293b fix(i18n): compléter les traductions anglaises manquantes (explorer, dossiers, groupes, notifications)
2ca6574 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
eea9626 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
71b8059 chore: ignore frontend/.pnpm-store
183764a feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
122f4fa ci(mindmap): résoudre explorer 2.5.9-patched (lib+tests) depuis GitHub Packages open-ent/explorer ; retour à -DskipTests
0ddcc11 ci(mindmap): build avec -Dmaven.test.skip=true (skip compilation tests) — le jar backend explorer (dép. test) n'est publié nulle part ; hors fat jar de toute façon
9d6d9e0 build: explorerVersion 2.5.7-patched -> 2.5.9-patched (seule version patchée publiée sur GitHub Packages ; dépendance de test, hors fat jar)
9be8651 ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
c89a3c7 feat(mindmap): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert — build Docker Java 8
0103f9f fix(build): explorerVersion 2.5-SNAPSHOT -> 2.5.7-patched (SNAPSHOT introuvable en nexus, build cassé)
afdb5a8 build: bump 3.4.9-patched (publication nexus, déploiement)
5a460b3 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
a7333cd mindmap: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer, dedupe vite)
87e80e5 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
8f64c4d fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
c966cbe chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
a78a31a ci: add build-and-publish workflow for GitHub Packages
3cd7a07 chore: prepare next development iteration
a388a52 release: 3.4.9
4aa713a chore: prepare next development iteration
29223a4 release: 3.4.8
5eb4637 chore: prepare next development iteration
98a42fa release: 3.4.7
714e194 chore: prepare next development iteration
623cff1 release: 3.4.6
c56dc11 chore: prepare next development iteration
c1d9322 release: 3.4.5
201044f chore: prepare next development iteration
c60057b release: 3.4.4
f9fae4c chore: prepare next development iteration
80b3f07 release: 3.4.3
1eedbef chore: set snapshot version after merge
19d39b4 chore: prepare next development iteration
326f4be chore: prepare next development iteration
2bd7f79 chore: #SRE-4685 use Jenkins credentials instead of env variables
4802497 chore: prepare next development iteration
7a0f98e release: 3.4.2
564eef5 chore: prepare next development iteration
b510c00 release: 3.4.1
1056ea5 chore: #ENABLING-609 remove charet from package.json (#61)
c08cbde chore: prepare next development iteration
b36a974 release: 3.4.0
371953d chore: set next development version
9ceaa36 chore: faster publish
be0ad17 chore: update dependencies
155c55a chore: update dependencies
efed86a feat: #RBACK-117 #RBACK-127 #RBACK-155, kubernetes compatibility
eef2a8b chore: prepare next development iteration
1f5dc3d release: 3.3.6
426d79c feat(conf): #RBACK-188 add template.j2
73dd322 chore: prepare next development iteration
3e09e50 release: 3.3.5
7759ed4 chore: prepare next development iteration
6d8d7df release: 3.3.4
7210694 chore: prepare next development iteration
1dc0f22 release: 3.3.3
37b414b chore: prepare next development iteration
44e90f7 release: 3.3.2
f54b4f3 chore: prepare next development iteration
7aa2f0f release: 3.3.1
78973c9 chore: prepare next development iteration
6f09a53 release: 3.3.0
5790121 chore: set snapshot version after merge
fc3c36e chore: prepare next development iteration
c768204 chore: prepare next development iteration
ac246c3 chore: prepare next development iteration
92af725 release: 3.2.2
21a9076 chore: prepare next development iteration
6e6a0ea release: 3.2.1
64fa221 chore: prepare next development iteration
6fae992 release: 3.2.0
4747c1a chore: set snapshot version after merge
... (480 commits supplémentaires tronqués)
```

## `modules/mod-image-resizer`

- **branche référencée** : `(detached)` @ `729f171`
- **base upstream** : `3.2.3`  →  delta = `3.2.3..HEAD` (**7 commit(s)**)
- **tags patched** : 3.1.0-patched 3.2.3-patched 

```
729f171 fix(resizer): conserver le format de l'image et gérer la transparence
3f2f147 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
35d338a ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
f233894 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4eba285 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
24f6beb ci: add build-and-publish workflow
19aaab6 fix(mod-image-resizer): patch version 3.2.3-patched
```

## `modules/mod-json-schema-validator`

- **branche référencée** : `(detached)` @ `4a9bf47`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**25 commit(s)**)
- **tags patched** : 3.0.0-patched 3.1.0-patched 

```
236f6e2 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
eceaddc ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
6ac9579 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4f599fe ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
d07b3f2 ci: add build-and-publish workflow for GitHub Packages
ae917c4 set default user for docker
2cdfddb fix(mod-json-schema-validator): keep app-parent, revert 3.0.2 upgrade (Java17+new API required)
bb78925 fix(mod-json-schema-validator): keep app-parent, revert 3.0.2 upgrade (Java17+new API required)
beeec35 fix(mod-json-schema-validator): use open-ent parent, java17, revert incompatible 3.0.2 upgrade
05761b5 fix(mod-json-schema-validator): use open-ent parent, java17, revert incompatible 3.0.2 upgrade
09ec239 fix(mod-json-schema-validator): patch version 3.0.0-patched
9162f2b fix(mod-json-schema-validator): patch version 3.0.0-patched
7b15cca update pom.xml
0f0e5cd update pom.xml
acb977f fix: support JDK 21 and pattern
bc00597 fix: support JDK 21 and pattern
91ec475 release: 2.1.1
8d35ff3 chore: prepare next development iteration
8e8e1fa release: 2.1.0
4b13b7a chore: update edifice-parent in pom
8e5ac4c chore: set next development version
5ec9aac feat: #RBACK-165 #RBACK-162 #RBACK-157 #RBACK-119 #RBACK-117, kubernetes compatibility
5b0b2c1 feat(conf): #RBACK-188 add template.j2
55d3503 chore: update json validator groupId in pom.xml
3ea42a3 chore: update jsonschema in pom.xml
```

## `modules/mod-mongo-persistor`

- **branche référencée** : `(detached)` @ `a680a0f`
- **base upstream** : `4.1.1`  →  delta = `4.1.1..HEAD` (**6 commit(s)**)
- **tags patched** : 3.1.0-patched 4.1.1-patched 

```
a680a0f ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
adf6f8c ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
d6eb1a3 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
cf57879 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
dcd42e8 ci: add build-and-publish workflow
638727b fix(mod-mongo-persistor): patch version 4.1.1-patched
```

## `modules/mod-pdf-generator`

- **branche référencée** : `(detached)` @ `5b658e6`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**6 commit(s)**)
- **tags patched** : 2.1.1-patched 3.1.0-patched 

```
5b658e6 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
ef0566e ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
10cc91f build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
5acf0c6 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
7892bc4 ci: add build-and-publish workflow
15a8d76 fix(mod-pdf-generator): patch version 2.1.1-patched
```

## `modules/mod-postgresql`

- **branche référencée** : `(detached)` @ `7afd40f`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**9 commit(s)**)
- **tags patched** : 2.1.1-patched 2.1.1-patched-dev 3.1.0-patched 

```
7afd40f ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
d058241 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
d7945e0 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
f68079f ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
11f0c1a ci: build en Java 21 (le pom compile désormais en 21)
fd5a0db fix(sql): résilience démarrage + montée HikariCP 5.1.0 / JDK 21
9bca6e7 ci: add build-and-publish workflow
352df44 manage other type for PostgreSQL > 14
17c1cb4 fix(sql): handle Boolean and Long types in SqlPersistor.prepared()
```

## `modules/mod-sftp`

- **branche référencée** : `(detached)` @ `6c4edab`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**8 commit(s)**)
- **tags patched** : 2.1.3-patched 

```
6c4edab ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
005baaa ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
22f4c74 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
9360427 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
5f67dd9 feat(sftp): ajoute les actions list et get (download) pour l'alimentation AAF
2a89069 ci: tolerate 409 (already-published) on fat JAR deploy
88656d9 ci: add build-and-publish workflow
0bfd303 fix(mod-sftp): patch version 2.1.3-patched
```

## `modules/mod-zip`

- **branche référencée** : `(detached)` @ `a22b798`
- **base upstream** : `3.2.1`  →  delta = `3.2.1..HEAD` (**11 commit(s)**)
- **tags patched** : 3.1.0-patched 3.1.1-patched 

```
a22b798 ci: publier le fat-mod nexus avec classifier=fat (= ce que le launcher tire)
fa5fb7c ci: deploy-file nexus depuis /tmp (évite la résolution du parent)
1f1674a ci: coords nexus depuis le nom du fat-mod (deploy-file sans résolution)
99099ab ci: continue-on-error sur publish GH Packages (prod tire de nexus)
6ec568d ci: publication du fat-mod sur rct-nexus (chaîne CI→nexus pour le launcher prod)
4fa2cf9 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
75911be build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
2ebd142 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
94091ba ci: add build-and-publish workflow
3134bc0 fix: fix version typo
660d995 fix: change version to -patched
```

## `modules/pages`

- **branche référencée** : `2.1.5-patched-dev` @ `aeacca8`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**21 commit(s)**)
- **tags patched** : 2.1.5-patched 2.1.6-patched 

```
aeacca8 ci: ajoute le script refresh-open-ent-lock.mjs manquant
e3f1ca8 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
49f4fbf fix(deps): aligne @open-ent/* sur 2.5.30-patched
0c35d0a ci: verrouiller entcore sur une version -patched au build
f0f411a fix(ihm duale): ajouter la vue pages-react.html manquante dans le fat-mod
b6b86fa ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
6df1ec8 feat(51C comparatif): dossiers (CRUD /pages/folder, navigation, déplacement de sites) + corbeille (trashed, restauration, suppression définitive)
08ce8a1 fix(51C comparatif): recherche + métadonnées propriétaire/date + btn-link lisible (thème)
b0055db [51C-migration] feat(pages): incrément 2 — partage de site + défaut React
8384308 [51C-migration] feat(pages): migration React incrément 1 — sites web + pages
8db7f86 feat(58B): droits de modification par page (Cahier multimedia)
abe6d54 chore: pin 2.1.5-patched + entcore 6.14.9-patched (sur base master fr.openent)
6a964d1 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
3e987b1 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
6ff34ee fix(i18n): compléter les traductions anglaises manquantes du fichier principal
63e118c fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
4078e16 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
a83a138 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
be813f1 fix(ci): add GitHub Packages repo and standardize workflow
fa3e889 fix(ci): run Gulp via docker run, add Java 8 and GitHub Packages auth
7f70532 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/poll`

- **branche référencée** : `(detached)` @ `d3a052f`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**12 commit(s)**)
- **tags patched** : 2.1.4-patched 2.1.5-patched 2.1.6-patched 

```
5e5489e ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
10f8f78 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
f35e65d fix(i18n): compléter les traductions anglaises manquantes du fichier principal
417e147 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
06eddfb build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
0722570 release: 2.1.6-patched
99c3567 ci: add build-and-publish workflow
b1f4a4d fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
9d209c7 fix(ci): add GitHub Packages repo and standardize workflow
21cedc1 fix(ci): run Gulp via docker run, add Java 8 and GitHub Packages auth
b170ec7 ci: add build-and-publish workflow for GitHub Packages
2769e6e feat: change version to patched
```

## `modules/presences`

- **branche référencée** : `(detached)` @ `74162875`
- **base upstream** : `0.20.8`  →  delta = `0.20.8..HEAD` (**609 commit(s)**)
- **tags patched** : 2.1.9-patched 

```
74162875 fix(repo): supprime le répertoire "?/" qui rend le dépôt inclonable sous Windows
5e4a49fe fix(deps): aligne @open-ent/* sur 2.5.30-patched (incidents, massmailing, presences, statistics-presences)
a2eb6196 feat(51C): migrations React massmailing (Publipostage+Historique) et statistics-presences (indicateur Global) + tableau de bord presences (appels/présences du jour)
8ad96b4d feat(51C comparatif): incidents recherche/export CSV/création/bascule traité + date et absents du jour (tableau de bord) + btn-link lisible
c71ddc24 feat(incidents/react): migration React — Incidents + Punitions (CCTP 51C)
ae5c6110 feat(presences/react): écran Dispenses (exemptions) — liste + création
b71536d7 feat(51C presences): ecran de regularisation des absences React
76e0f2c3 feat(51C presences): tableau de bord d'accueil React (alertes, appels oublies, declarations parents)
5932f341 feat(51C-migration): presences — registre d'appel (React)
8e443562 [51C-migration] feat(presences): saisie d'absence (écran métier via ADML)
66ab6be6 [51C-migration] feat(presences): réglage « Appels multiples (>1h) » dans les seuils
86111cbf [51C-migration] feat(presences): incrément 3 — CRUD actions + dispositifs
b942c294 [51C-migration] feat(presences): incrément 2 — créer/supprimer un motif d'absence
e41155b5 [51C-migration] feat(presences): migration React incrément 1 — paramétrage
19eb867a ci: dev-check en job unique (gulp+maven, sans handoff d'artefact)
fa80a504 ci: dev-check-repository fonctionnel (frontend Gulp + backend Maven, remplace legacy)
3df8b4d6 fix(presences): décompte half-day robuste si end_of_half_day absent
95571c77 fix(presences): défaut HALF_DAY si méthode de récupération inconnue (NPE)
72c3a158 feat(presences): rapport d'ouverture des appels par groupe/académie (agrégation des établissements descendants)
2d03e175 feat(presences): e-mails de notification thémés ENT + pilotage par établissement
be6889ba ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
46db8e03 ci(presences): répare étapes publish (GH Packages glob) + nexus (glob tilde)
ef61ffd6 ci: corrige publication nexus (presences glob tilde / ressource-aggregator --no-frozen-lockfile)
ed811516 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
ebe5f1c5 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
1669ea7b feat(events): endpoint taux de présence établissement
acb2be87 fix(incidents): /places double-complétion (placesUsedPromise)
56d7d7d7 feat(events): endpoint vie scolaire non restreint pour le tableau de bord
b7dd9f66 fix(incidents): cast LIMIT/OFFSET en ::bigint pour PostgreSQL 16
49ab5ca8 fix(presences): cast LIMIT/OFFSET en ::bigint pour PostgreSQL 16
d68d0354 fix(presences): repli personnel CPE->DIRECTION->ADML pour l'ouverture des appels
4af6959b style(presences): ajustements CSS
402458d1 fix(presences): support PostgreSQL 16
f5d1f1bd fix(ci): add --ignore-engines to yarn install for Node 16 compatibility
5a85baca fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
83657af1 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
acc09ca4 ci: re-trigger build after entcore-v2 published to GitHub Packages
c699f152 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
f839ade2 ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
e0969569 fix(presences): cast String event type/reason IDs to integer for bigint columns
c7abb04a chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
a317ca70 ci: add build-and-publish workflow for GitHub Packages
3e108263 add css for incidents, massmailing, presences, stats
3289e2fc fix: change revision to 2.1.9-patched
933ed02b fix: manage fields EXCLUDE_ALERT_ABSENCE_NO_REASON, EXCLUDE_ALERT_LATENESS_NO_REASON, EXCLUDE_ALERT_FORGOTTEN_NOTEBOOK
ad3359da fix: Support date to en format (yyyy-mm-dd)
75e2b1ff release: 2.1.9
4f196492 chore: prepare next development iteration
6dd0e4bd release: 2.1.8
3b05ff79 fix: #COCO-5105 send the correct structure for creating an absence for the student (#375)
971a7311 chore: prepare next development iteration
c04213ca release: 2.1.7
90ce4a4b fix: #COCO-5259 rename common package to avoid name conflict
a58bbb03 chore: prepare next development iteration
753ad0c5 release: 2.1.6
f335b25d fix: #COCO-5259 rename common package to avoid name conflict (#376)
30879f22 chore: prepare next development iteration
819b52fa release: 2.1.5
d21fb744 chore: prepare next development iteration
e4134c18 release: 2.1.4
a0ac4c47 fix: #COCO-4632, visibilité absence web (#374)
8df6b797 fix: #COCO-4632, visibilité absence web (#373)
8966f41b chore: prepare next development iteration
232f3e09 release: 2.1.3
560819ef chore: update edifice-parent in pom
11c1419f chore: prepare next development iteration
dfae0613 release: 2.1.2
1fa45035 chore: prepare next development iteration
65d502db release: 2.1.1
9cc5a197 chore: prepare next development iteration
40214425 release: 2.1.0
66eb81c0 chore: prepare next development iteration
8f7fb230 chore: update dependencies
d6a15d95 feat: #RBACK-119, #RBACK-117, kubernetes compatibility
86586198 feat(conf): #RBACK-188 add template.j2
6b982a5a chore: update dependencies
6c3d948a chore: prepare next development iteration
d48aac91 release: 2.0.14
27e104fe Fix events date parsing of the front datepicker value
71904a32 fix: #COCO-4832, timezone (#372)
... (529 commits supplémentaires tronqués)
```

## `modules/rack`

- **branche référencée** : `3.1.7-patched-dev` @ `5d45d48`
- **base upstream** : `3.1.7`  →  delta = `3.1.7..HEAD` (**26 commit(s)**)
- **tags patched** : 3.1.6-patched 3.1.7-patched 

```
5d45d48 ci: ajoute le script refresh-open-ent-lock.mjs manquant
52ec036 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
da5ae4e fix(deps): aligne @open-ent/* sur 2.5.30-patched (frontend + client/rest)
51e846f chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
f2cf510 fix(rack): copie casier->workspace - i18n [[count]] + comptage succes
dc64a1e fix(rack): #2 libelle app 'Rack' -> 'Casier' (app-displayName)
5d801af fix modify .gitignore
9fcd8c1 fix: add NODE_AUTH_TOKEN in docker-compose file
f27e7cf ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
263a4f6 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
aca4382 fix(i18n): compléter les traductions anglaises des notifications timeline
f7a905b build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
cd2a5a9 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
d363554 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
621cd21 ci+deps: auth @open-ent à l'install pnpm + alignement @open-ent/* ^2.5.26
9c1f850 chore: ignorer .pnpm-store/
f9af7d5 feat: migration frontend @edifice.io -> @open-ent (data-product 1d) + client/rest + bump 3.1.7-patched
375ee4d fix(ci): build workspace packages in dependency order (client-rest first)
901fc69 fix(ci): run vite build directly to skip typecheck errors
1a757f8 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
a0a5ecb fix(ci): pnpm auto-detect version from packageManager, node 22
8c3aa16 fix(ci): add GitHub Packages repo and standardize workflow
efea7f3 fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers, no-frozen-lockfile
4e38596 chore(common): bump entCoreVersion 6.14.12 → 6.14.9-patched
83b97f2 ci: add build-and-publish workflow for GitHub Packages
963a349 doc: add mirroring note in readme
```

## `modules/rbs`

- **branche référencée** : `2.1.7-patched-dev` @ `d927592`
- **base upstream** : `2.1.7`  →  delta = `2.1.7..HEAD` (**42 commit(s)**)
- **tags patched** : 1.2.0-patched 2.1.4-patched 2.1.7-patched 

```
d927592 ci: ajoute le script refresh-open-ent-lock.mjs manquant
beb7c04 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
6b6d775 fix(deps): aligne @open-ent/* sur 2.5.30-patched
42fb453 fix(rbs): resource_id dans RETURNING + tsconfig frontend exclu
515657a fix(rbs): épingler entcore sur une version fixe (dev flottant)
49c7dae feat(rbs): action de bus "list-resources" pour un accès sans droit RBS
776fd45 fix(rbs): élargir les listes déroulantes du sniplet de réservation calendar
fb1cecd fix(rbs): export PDF 500 quand le shared data "skins" est null
1868d77 feat(rbs): suppression par l'auteur + onglet Modération (parité React)
a8141b8 fix(rbs): restaurer "Nouvelle réservation"/"Export" en sortant du mode gestion
5cd6d1d ci: verrouiller entcore sur une version -patched au build
6f07a3d fix(ihm duale): ajouter la vue rbs-react.html manquante dans le fat-mod
03129bd docs(frontend-ui): corriger le commentaire de bascule IHM
9b33319 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
43cf60c feat(51C comparatif): vues Jour/Semaine/Mois + sélection multiple de ressources par type (panneau latéral)
bd1c13d fix(51C comparatif): Export + Modération accessibles depuis le planning + btn-link lisible (thème)
a5cbb32 fix(51C-parité): rbs — planning hebdomadaire en vue par défaut (grille créneaux×jours)
07f5a93 ci(rbs): rendre dev-check-repository fonctionnel (build+test Maven, remplace legacy)
4861c43 ci(rbs): neutraliser dev-check-repository (legacy Node10/Gulp/Gradle)
dd8c6a9 [51C-migration] fix(rbs): fuseau — parseBackendDate (backend renvoie de l'UTC sans 'Z')
5712cd1 [51C-migration] fix(rbs): hash router (évite les 404 F5 sur sous-routes)
d2c6854 [51C-migration] chore(rbs): défaut IHM -> react (parité atteinte)
751c055 [51C-migration] feat(rbs): incrément 6 — vue agenda hebdomadaire
cac772b [51C-migration] feat(rbs): incrément 5 — export des réservations (iCalendar / PDF)
b368f7e [51C-migration] feat(rbs): incrément 4 — disponibilités + partage des types
2e9ff4b [51C-migration] feat(rbs): incrément 3 — gestion des types et ressources (CRUD)
46f7f5d [51C-migration] feat(rbs): incrément 2 — réservations périodiques + modération
8b487af [51C-migration] feat(rbs): migration React incrément 1 — ressources + réservation simple
dac4dd9 a11y(51H): rbs — <html lang="fr"> (RGAA html-has-lang)
91baac7 fix(dates): corriger la signature dépréciée moment().add(unité, n)
dca35ac ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
485e5ba ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
f3c8946 fix(i18n): ajouter les dernières clés anglaises manquantes (parité fr.json)
ece91da build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
f832298 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
49d78fa ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
e648468 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
475079e chore(rbs): gitignore package-lock.json
cb060ca fix(rbs): patch version 2.1.7-patched
6a6d5ba Move to JDK 21
e745d56 ci: add build-and-publish workflow for GitHub Packages
e314dfc chore: prepare next development iteration
```

## `modules/ressource-aggregator`

- **branche référencée** : `(detached)` @ `f0cabee`
- **base upstream** : `5.2.4`  →  delta = `5.2.4..HEAD` (**35 commit(s)**)
- **tags patched** : 5.2.4-patched 

```
f0cabee fix(deps): aligne @open-ent/* sur 2.5.30-patched
c43b159 fix(theme): la sidebar mediacentre recouvrait le contenu en thème 1D
e087a78 fix(frontend): afficher PMB dans la navigation par défaut, la recherche et les favoris
61516b6 fix(backend): intégrer PMB aux favoris/pins + retirer GAR de la recherche générale
e622046 refactor(cron): scheduler amass sans CronTrigger (timer ne se déclenchait jamais)
e8908e6 Ajout ressource GAR de démo : Cyrano de Bergerac (lelivrescolaire.fr)
b739d02 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
ae33dcf ci(ressource-aggregator): dev-check on:[push] (déclenche sur -patched-dev)
51cb849 ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
214f197 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
5c00180 fix(mediacentre): #1 signets 500->[] (index absent) + skip pins si structure vide
8c28f06 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
106f10f fix(frontend): pin @cgi-learning-hub/* a 1.13.0 (corrige RollupError createSvgIcon)
6d5e654 fix(frontend): build vite en un seul chunk (inlineDynamicImports)
8ebb7ff ci: corrige publication nexus (presences glob tilde / ressource-aggregator --no-frozen-lockfile)
28d518f ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
33e90f2 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
d3a20d6 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
f64e947 fix(mediacentre): cartes en barres fines (--openent-columns) + centrage du contenu et menu en thème 1d
5a74c8c chore: gitignore artefact de build
e6c0b98 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
d905e60 mediacentre: fix runtime require(dayjs/react) de @cgi-learning-hub/ui (plugin vite remplace __require par imports ESM) + commonjsOptions
8a581a5 mediacentre: migration @edifice.io -> @open-ent (2.1.2 -> 2.5.22) + alignement peers (react-query 5, react-i18next 14, react 18.3.1) + dedupe vite
cdb5736 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
7e70954 ci: add build-and-publish workflow for GitHub Packages
1c4959c add JML modif
48df9f8 fix(mediacentre): patch version 5.2.4-patched
0732821 fix: remove fake ressources in ressources.json
d3bccfa feat: remove duplicate in ressources.json
1ddc142 fix: change version in pom.xml
37159aa feat: add more ressources mock
f50aaf4 fix: image for gar ressources
7fefa6a fix: mock ressources GAR
a221e97 fix: elsatic version for request with or without _doc
7e53b54 chore: prepare next development iteration
```

## `modules/rss`

- **branche référencée** : `(detached)` @ `062a582`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**7 commit(s)**)
- **tags patched** : 2.1.4-patched 

```
062a582 chore(patched): aligner la version Maven sur 2.1.4-patched
b34873e ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
59c3843 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
9755253 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
7143503 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
303baaf fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
085e3ac ci: add build-and-publish workflow for GitHub Packages
```

## `modules/schoolbook`

- **branche référencée** : `develop` @ `be1ab1f`
- **base upstream** : `1.1.0`  →  delta = `1.1.0..HEAD` (**10 commit(s)**)

```
be1ab1f ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
3b99853 fix(deps): aligne @open-ent/* sur 2.5.30-patched
09bbe50 ci: add Publish Dev Tag workflow to deploy develop snapshots without a full gitflow release
2576e2c chore: update version
a7ac36c chore: i18n align messages
820864d feat(schoolbook 1.2.0): manuel du Médiacentre joint à un mot de liaison
63b63ca feat(schoolbook): signalement d'un message du carnet de liaison
17d038a chore: develop 1.2.0-SNAPSHOT (gitflow, apres integration mots rapides dans 1.1.0)
b58f2a8 ci: publish nexus sur maven-releases (les tags sont des releases)
2346c44 chore: develop 1.1.0-SNAPSHOT (gitflow)
```

## `modules/school-planner`

- **branche référencée** : `(detached)` @ `9a40691`
- **base upstream** : `1.0.0`  →  delta = `1.0.0..HEAD` (**17 commit(s)**)

```
9a40691 chore: rename docker-publish.yml to build-and-publish.yml for naming consistency across our own modules
47f203c chore: new workflow for quick deployment in production
23b10cc fix: exempte /school-planner/api/version du garde-fou de session ENT
ffee3bb fix: exempte /school-planner/api/version du garde-fou de session ENT
300c095 fix: rend /school-planner/api/version public (quarkus-oidc bloquait tout endpoint sans jeton par défaut)
eb26456 fix: rend /school-planner/api/version public (quarkus-oidc bloquait tout endpoint sans jeton par défaut)
a43ecfb feat: expose les infos de build (version/branche/commit) via /school-planner/api/version
4cf949a feat: expose les infos de build (version/branche/commit) via /school-planner/api/version
86d6fd7 ci: retire le debug temporaire, documente les secrets au niveau repo
68c9251 ci: debug - test secret repo-level
b5e379f ci: debug - test secret frais
f310d59 ci: debug temporaire (longueur secrets + test curl direct)
4526ea0 ci: corrige la variable NEXUS_USER et ajoute le repo GitHub Packages en repli
b9c776b ci: corrige la variable NEXUS_USER et ajoute le repo GitHub Packages en repli
948fdea ci: ajoute le workflow de publication Docker (GHCR)
4d39e5b chore: add github workflow
1ffe8c2 Eviter qu'un professeur soit utiliser sur le même creneau horaire
```

## `modules/search-engine`

- **branche référencée** : `(detached)` @ `595e2df`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**20 commit(s)**)
- **tags patched** : 2.1.4-patched 2.1.5-patched 

```
595e2df fix(deps): aligne @open-ent/* sur 2.5.30-patched
d561a23 fix(i18n): libellé "Démarches" pour le type WorkflowHubSearchingEvents
7944915 feat(search): écrans facettes, état vide et accès directs (handoff 1b/1d/1e)
ad0347e fix(search): recherche par préfixe et requête désaccentuée sur OpenSearch
7f0cda0 feat(search): source OpenSearch (index Explorer) dans le moteur de recherche
480331e docs(frontend-ui): corriger le commentaire de bascule IHM
17c6299 [51C-migration] feat(search-engine): bascule runtime react/angular (conf frontend-ui + ?ui=)
1f7e5e7 [51C-migration] feat(search-engine): migration frontend AngularJS -> React
0304bd3 fix(searchengine): timeout réel de la recherche globale (anti « Chargement… » infini)
7bcd1ac fix(searchengine): timeout réel de la recherche globale (anti « Chargement… » infini)
41ce297 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
ed6c2e9 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
de5ce28 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
69255de build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
72e7070 chore: bump version 2.1.5-patched
cf465a9 ci: add build-and-publish workflow
6aa1c52 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
6f0086d fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
f98af21 ci: add build-and-publish workflow for GitHub Packages
e312888 feat: change version to patched
```

## `modules/statistics`

- **branche référencée** : `2.6.0-patched-dev` @ `afe7806`
- **base upstream** : `2.6.0`  →  delta = `2.6.0..HEAD` (**17 commit(s)**)
- **tags patched** : 2.6.0-patched 

```
afe7806 ci: ajoute le script refresh-open-ent-lock.mjs manquant
3bc8f00 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
aec2444 fix(deps): aligne @open-ent/* sur 2.5.30-patched
ff19117 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
9e818c2 [51C-migration] feat(statistics): incrément 3 — bandeau d'indicateurs clés (KPI)
fd43ae7 [51C-migration] feat(statistics): incrément 2 — sélecteur de granularité (jour/semaine/mois)
fb63024 [51C-migration] feat(statistics): bascule React PAR DÉFAUT
fab17a1 [51C-migration] feat(statistics): migration React incrément 1 — tableau de bord d'usage
064dbfa ci(statistics): fix build sur tag — -Dmaven.test.skip=true (org.entcore:tests introuvable)
5b9ff9d fix(scram): vertx-pg-client provided + vertx-sql-client provided — fat-jar sans pgclient/scram
6bcbcc5 ci: workflow build & publish fat mod (Gulp + nexus/GitHub Packages)
45ad4f7 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
cb405a3 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
3c9523d fix(stats): index stats_aggregation_idx créé au démarrage
73282fa feat(stats): backend Mongo lit le contrat frontend 2.6.0 (indicator/frequency/entity) -> StatsResponse depuis la collection stats
0c5472e chore: ignore .yarn directory
381b1c9 build: aligne stats sur entcore 6.14.9-patched + version 2.6.0-patched
```

## `modules/support`

- **branche référencée** : `4.0.1-patched-dev` @ `86b1a1e`
- **base upstream** : `0.18.0`  →  delta = `0.18.0..HEAD` (**572 commit(s)**)
- **tags patched** : 3.1.5-patched 4.0.1-patched 4.0.2-patched 

```
86b1a1e ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
cf1a562 fix(deps): aligne @open-ent/* sur 2.5.30-patched
77a5210 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
a0825ee chore(support): rebuild frontend (bootstrap sorti du bundle)
7e36878 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
8014cc4 fix(support): synchroniser pnpm-lock sur le pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H)
aaa7bfa chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
0aaed38 fix(support): versionner la coquille SPA view/index.html (fix page blanche /support)
56a5b72 fix(support): anomalies CCTP #1 escalade, #2 export, #3 routes SPA
bb25951 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
afef6fb ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
fdcf699 ci(support): settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
112abd2 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
655caf8 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
0a2fe5d ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
3e548e8 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
c6b004b fix(tickets): garde null sur n.profiles (NPE getProfileFromTickets)
a937769 ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
c240720 feat(support): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert — build Docker Java 8
5487d8f ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
3b93f5d support: migration @edifice.io -> @open-ent
7e2eacb ci: add build-and-publish workflow
a27ceba ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
8b06e5d i18n: sync and translate en.json to English
24073ed Support Github as issue manager
c865717 feat(github): resolve school name and UAI from Neo4j in issue body
d681083 fix(sql): cast bug tracker issue id to bigint in INSERT
0c853bd feat(support): add GitHub escalation service
2a3e3d7 fix(support): patch version 4.0.1-patched
da77c52 release: 4.0.1
41800a2 Update fr wordings
62b02b6 chore: prepare next development iteration
7fb62e5 release: 4.0.0
a76c8a3 Update fr wordings
8b02017 chore: change version after merge
2098288 chore: INTEG-2055 display IconBulle when it's comment from bugTracket (event 5)
cdb355e   fix: derive isAllChecked from filters.status prop instead of local state
5808255 fix: INTEG-2051 prevent infinite submit loop on status select after ticket update
e7d45cf fix: INTEG-1804, prevent user with adml rights in one school to edit status in another school
efb6166 feat: INTEG-2049, a non admin user can only resolve a ticket
a826b5a refactor: INTEG-1449, set fixed column width for ticket table
8b76675 fix: INTEG-1415, prevent non adml users to export tickets
2462098 chore: update wording
7f833eb fix: allow user to copy attachments to root folder "Mes documents"
2244cf8 fix: INTEG-1364, add i18n translation keys for ticket status
715af2b feat: INTEG-1448, add ability to sort on escalation date
117b76f fix: INTEG-1415, prevent non adml users to export ticket during multi selection
91f3a96 fix: add Attachement type
8f5552e chore: add icon to redirect to the external ticket
f34f20c fix: update ticket status to OPENED when a comment is posted
df849ab chore: update pnpm-lock.yaml
28b6f6b chore: add serach by username as well
9b5bcc6 chore: improve SearchableDropdown test
1fd6f81 chore: update package
93dcf58 style: format code
dd49004 chore: add unitaire test to frontend
51a8060 chore: migrate pagination to edifice.io
2b0e26a Refactor: improve the code and remove unused code
6a04944 chore: add copy for some input
b2b175a chore: i18N for user profil
9fb274d chore: INTEG-1364 add i18N key
6115204 chore: INTEG-1422 add workspace modale to add modale to worskpace
6a832a7 chore: add sort by for column
9bda06f feat: INTEG-1417, handle ticket search on backend side
eab5e11 fix: INTEG-1418, merge admin and user schools to handle hybrid roles
1e26890 fix: prevent infinite rerender
ad98436 feat: INTEG-1425, display back button when viewing ticket details on small screens
e7514d0 fix: INTEG-1423, adjust ticket creation page padding
7b196a4 fix: INTEG-1424, disable editor focus on ticket creation page
c87eb14 feat: INTEG-1417, handle ticket search on backend side
3793286 fix: INTEG-1414, auto-select school when only one is available
3d74a7f feat: INTEG-1422, add handle copy attachment to workspace feature
421d275 fix: INTEG-1413, add error toast if error during attachment upload
c3a7b02 fix: INTEG-1421, remove AddAttachment from comment form
49db724 chore: prepare next development iteration
d40b90c release: 3.1.5
5c5cf97 fix: INTEG-1420, allow user to escalate ticket only if new or open
f032755 fix: INTEG-1415, update rights to multi-select and escalate
21c2fc6 feat: INTEG-1419, add link to userbook
5476b06 fix: INTEG-1414, prefetch school on ticket creation route to avoid filtering and possible race condition
... (492 commits supplémentaires tronqués)
```

## `modules/timeline-generator`

- **branche référencée** : `3.3.7-patched-dev` @ `cc560f8`
- **base upstream** : `3.3.7`  →  delta = `3.3.7..HEAD` (**22 commit(s)**)
- **tags patched** : 3.3.6-patched 3.3.7-patched 

```
cc560f8 ci: ajoute le script refresh-open-ent-lock.mjs manquant
fb842a4 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
63e1b9d fix(deps): aligne @open-ent/* sur 2.5.30-patched
de5465b chore: ignorer le bundle React (public/tlreact*), reconstruit en CI et par build.sh
b0d11bf fix(theme): la vue explorer suit la charte comme les autres modules
1a3526f feat(react): intégrer l'IHM React au fat-mod
e0bb94f fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
3314528 fix(bouton)survol transparent
4537d37 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
35120d3 feat(51C comparatif): recherche de frises
d87a4ab fix(51C comparatif): btn-link lisible (thème)
8d3fcf1 [51C-migration] feat(timeline-generator): incrément 2 — partage de frise
689ba75 [51C-migration] feat(timeline-generator): migration React incrément 1 — frises + événements
7ce1a05 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
12d21c8 build: version 3.3.7-patched (alignement fork/déployé + Implementation-Version)
814377e ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
4085b47 fix(i18n): compléter les traductions anglaises manquantes (explorer, événements, dossiers, groupes)
43b1d5e build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
66fa1dc fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
5e18547 fix(ci): run Gulp via docker run, add Java 8 and GitHub Packages auth
9249723 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
d890173 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/vie-scolaire`

- **branche référencée** : `(detached)` @ `71186e56`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**32 commit(s)**)
- **tags patched** : 2.1.5-patched 

```
71186e56 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
2d819c9e refactor: retire l'IHM React (migration CCTP 51C abandonnée)
e0302f1b fix: support different format date
1e6861c3 fix(viescolaire): AccessIfMyStructure — autoriser aussi via le scope d'une fonction transversale (ADMIN_INSPECTION/ADMIN_COLLECTIVITE)
f9082912 docs(frontend-ui): corriger le commentaire de bascule IHM
ccac5261 ci(vie-scolaire): réactiver le publish rct-nexus (jar complet depuis [B])
34071a76 ci(vie-scolaire): builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
8e8bf2da ci(vie-scolaire): ne plus publier sur rct-nexus depuis la CI (module dual React)
eb9b569d ci(vie-scolaire): retirer l'étape Vite en CI (aligner sur la convention gulp-only)
9853ae0e ci(vie-scolaire): builder les 2 IHM (Angular gulp + React Vite) dans le fat-mod
19498b02 feat(51C): passerelles vers les modules liés (Compétences / Présences / Cahier de textes)
83ed13ca fix(51C comparatif): libellés des périodes (Trimestre/Semestre + ordre) + btn-link lisible (thème)
dcf08662 feat(viescolaire/react): écrans Regroupements + Périodes d'exclusion
8135d7e1 feat(51C viesco): ecran Services d'enseignement React
1627ea96 fix(51C-migration): viescolaire — libellé période aligné sur Angular
00ee89b3 feat(51C-migration): viescolaire — écran Paramétrage des périodes (React)
e233cbab [51C-migration] feat(vie-scolaire): trombinoscope (élèves + avatars, recherche)
4d21e6d3 [51C-migration] feat(vie-scolaire): mémento élève (fiche + commentaires) — écran admin
83065968 [51C-migration] feat(vie-scolaire): carte Plages horaires (parité paramétrage)
747a1620 [51C-migration] feat(vie-scolaire): incrément 2 — année scolaire + découpages
2029cda5 [51C-migration] feat(vie-scolaire): migration React incrément 1 — référentiel
18b3b06e ci: dev-check en job unique (gulp+maven, sans handoff d'artefact)
c699c704 ci: dev-check-repository fonctionnel (frontend Gulp + backend Maven, remplace legacy)
dc26c16e fix(viescolaire): eviter IN () invalide quand l'utilisateur n'a pas de structure
faed0708 fix(viescolaire): null-guard ModelHelper.toJsonArray (NPE sur liste nulle)
b002d51a ci(fix): Node 20 (sass 1.101/chokidar 5 ESM nécessite require(ESM), KO en Node 18)
ff9015a9 ci(fix): builder le frontend (gulp+sass) avant le package, sinon view/ absent → 500
62156008 ci: chaîne build & publish fat-mod (GitHub Packages + rct-nexus)
1ccb7d4b fix(i18n): compléter les traductions anglaises (736 clés manquantes)
270e8c25 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
66e24d0c fix(timeslot): caster startHour/endHour en ::time dans l'INSERT des créneaux
8d643949 feat: change version to patched
```

## `modules/vote`

- **branche référencée** : `develop` @ `13e5c58`
- **base upstream** : `1.0.0`  →  delta = `1.0.0..HEAD` (**8 commit(s)**)

```
13e5c58 ci: ajoute le script refresh-open-ent-lock.mjs manquant
cec90a4 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
af7b365 fix(deps): aligne @open-ent/* sur 2.5.30-patched
5a7c726 fix: balise </servers> manquante dans nx-settings.xml (publish-dev-tag)
098e3ff chore : update workflow
fc7815a chore: add workflow
f877f17 Update version to 1.1.0-SNAPSHOT in pom.xml
be9fab5 chore: develop 1.1.0-SNAPSHOT (gitflow)
```

## `modules/wiki`

- **branche référencée** : `(detached)` @ `ced2009`
- **base upstream** : `0.16.0`  →  delta = `0.16.0..HEAD` (**768 commit(s)**)
- **tags patched** : 3.5.12-patched 3.5.13-patched 3.5.9-patched 

```
ced2009 fix(deps): aligne @open-ent/* sur 2.5.30-patched
db69b8a chore: retire le gabarit mort view/wiki.html
5369745 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
8986ae4 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
795409f ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
a2324f8 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
05b6170 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
c4c2222 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
7c0a9b5 ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
78dd141 feat(wiki): tracking Matomo (@open-ent 2.5.26) + [Matomo] — proxy dashboard, vert préservé
5d132cc i18n(wiki): complete English translations (en.json + timeline)
291a1f2 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
1319334 wiki: maj hash bundle migré @open-ent dans wiki.html (index-DXMW4Zs4.js / index-BO3H2sUv.css)
4be028f wiki: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer)
db61787 release: 3.5.13-patched
b18e640 ci: add build-and-publish workflow
2759aa9 missing wiki html
57cb11f fix(wiki): patch version 3.5.9-patched + entcore 6.14.9-patched
189367a release: 3.5.9
1da57d9 Update fr wordings
0834ec7 chore: prepare next development iteration
4c45b28 release: 3.5.8
c7377e8 chore: prepare next development iteration
3ff7bb1 release: 3.5.7
f6dd4a1 chore: set snapshot version after merge
f1d5d8d fix: #PEDAGO-3791, preserve editor style
496936f chore: prepare next development iteration
9251a30 chore: prepare next development iteration
26b68cc chore: downgrade edifice-frontend-framework libs
ab9e114 release: 3.5.6
e56b601 fix: #PEDAGO-3841, force katex version to 0.16.33 for tiptap math extension because of an execution JS error
d0a49e2 fix: #PEDAGO-3841, add log for AI received structure pages size
f2196bf fix: #PEDAGO-3841, fix Mongo replica issue with Pages AI content update (#128)
25592fb chore: prepare next development iteration
c170a14 release: 3.5.5
8f40635 chore: prepare next development iteration
11a8bab release: 3.5.4
9881827 Update fr wordings
6bec8f2 chore: set snapshot version after merge
ab63811 chore: prepare next development iteration
2c96b8d fix: #PEDAGO-3616, fix page 'created' field format
5bce77b fix: #PEDAGO-3713, fix mongodb date parsing issue
b5cafd0 style: lint on CSS
43443e6 fix: #PEDAGO-3713, refactor poll vote to retrieve it from DB and not localStorage
173b434 fix: #PEDAGO-3616, fix useEffect dependencies loop issue
b7c55b1 fix: #PEDAGO-3750, add missing assistant ai step1 level i18n
c653552 fix: #PEDAGO-3616, fix loader icon for Manual pages
5933f5a feat: #PEDAGO-3616, add generated Page content style for Headings
f8fe084 feat: #PEDAGO-3616, add Page generation animation
6c84341 fix: #PEDAGO-3616, allow user to click on page being generated
4088718 feat: #PEDAGO-3616, show loading icons for page per page generation
9282938 feat: #PEDAGO-3616, add AI metadata to generated pages
a0f67aa feat: #PEDAGO-3616, handle page per page AI content creation
83a5ed9 feat: #PEDAGO-3337, add PromotionCard component to Assistant page
43da274 chore: #SRE-4685 use Jenkins credentials instead of env variables
c80d71f chore: prepare next development iteration
ea3582c release: 3.5.3
43a7e47 chore: update edifice-parent in pom
a8c7b4f feat: #RBACK-206, bump app-parent version to 1.2.0
ba011ac chore: prepare next development iteration
95bacc4 release: 3.5.2
f4ec5c4 chore: prepare next development iteration
ffe6e83 release: 3.5.1
d8ae9b1 chore: #ENABLING-612 remove charet from package.json
e54ab67 fix: add React Pdf polyfill to mock DOMMatrix in jsdom and fix unit tests
e8e4c3b chore: prepare next development iteration
cbdba76 release: 3.5.0
6f7546c fix: update wikigen client
33ccc21 chore: set next development version
c0972c0 chore: update dependencies
7427ff9 feat: #RBACK-117 #RBACK-155, kubernetes compatibility
866ed7d chore: prepare next development iteration
49c1f80 release: 3.4.6
348395d chore: set snapshot version after merge
5a0908f fix: #PEDAGO-3609, adjust Margins for AI Pages assistant root page
0d93f6a fix: #PEDAGO-3555, show page ViewsCounter only for manager and creator users
c30f8d0 refactor: refactor Assistant CSS file
618c298 refactor: refactor Levels and Subjects UI
464eba3 fix: #PEDAGO-3607, add border-color on simple radio card hover
8955ae4 fix: #PEDAGO-3609, add Margins to AI Assistant pages
... (688 commits supplémentaires tronqués)
```

## `modules/workflowhub`

- **branche référencée** : `develop` @ `dc4e39a`
- **base upstream** : `1.2.0`  →  delta = `1.2.0..HEAD` (**11 commit(s)**)

```
dc4e39a ci: ajoute le script refresh-open-ent-lock.mjs manquant
4c520b5 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
d488cad fix(deps): repointe @open-ent/* sur 2.5.30-patched (2.5.31-patched supprime)
b8e8718 fix(i18n): libellé "Démarches" pour le titre d'onglet du navigateur
09ff029 feat: add search feature
aa07236 fix(ci): purger les GitHub Releases dupliquées du tag mobile -dev
d50b6d3 fix: archivage workflow import/export
07256e1 fix: le titre du formulaire public reprend l'intitulé de la démarche
fd83915 feat: improve new demand form + autofilled form
67fe26c Update version to 1.3.0-SNAPSHOT in pom.xml
c83747a chore: new workflow for quick deployment in production based on dev branch
```

## `static/application-help-2d`

- **branche référencée** : `(detached)` @ `5457a68`
- **base upstream** : `4.12.7`  →  delta = `4.12.7..HEAD` (**2 commit(s)**)
- **tags patched** : 4.12.7-patched 

```
5457a68 docs: ajouter la fiche d'aide du nouveau module communities (MVP)
cb3d749 docs(rbs): expliquer la modification des paramètres d'une ressource
```

---

**Résumé** : 58 dépôt(s) forké(s)/patché(s) documenté(s) ; 8 dépôt(s) sans delta patched (suivent une branche upstream).

### Comment relire / régénérer
- Mettre à jour les tags upstream : `git submodule foreach 'git fetch --tags origin || true'`
- Régénérer : `./scripts/patched-changelog.sh` (copie aussi la page publique open-ent.github.io)
- Lors d'une montée de version d'un module : re-baser/cherry-pick les commits listés ci-dessus sur la nouvelle release upstream avant de re-tagger `X-patched`.
