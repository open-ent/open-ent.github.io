# Changelog consolidé des forks "-patched"

> Généré par `scripts/release/patched-changelog.sh` le 2026-10-08 05:03.
> Pour chaque dépôt : commits ajoutés par le fork **par-dessus la dernière release upstream**
> (tag non `-patched` ancêtre du HEAD référencé). Ce sont les commits à re-baser lors d'une montée de version.

## `connectors/gar-connector`

- **branche référencée** : `3.2.6-patched-dev` @ `3486ad1`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**36 commit(s)**)
- **tags patched** : 3.1.4-patched 3.2.6-patched 

```
6bb9c95 feat: passer les libs entcore en 6.16.8-patched
a544b65 fix(ci): isoler org.entcore:tests dans un profil gatling-it
9f17ba1 feat: passer sur entcore 6.16.14-patched
1113009 release: 3.2.6
0faab9c fix: relation (Group)-[:AUTHORIZED]->(Role) jamais créée mais succès renvoyé
76495b6 chore: prepare next development iteration
f56b3d9 release: 3.2.5
3438032 fix: #ENABLING-1185, fix template.j2 default value for export-cron
3719c2b chore: prepare next development iteration
032550a release: 3.2.4
5b883a9 fix: #ENABLING-1185, parametrize eb request so exports remain on the same instance that started it (#10)
83cdb21 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
3485990 chore: prepare next development iteration
ddeb95c release: 3.2.3
2073a39 chore: update dependencies
4fc335a chore: update dependencies
d6276f6 fix(image): create /srv/mediacentre/tmp in image to avoid export problems on k8s
4924ac2 chore: prepare next development iteration
f172705 release: 3.2.2
a47f399 chore: prepare next development iteration
e6ec49e release: 3.2.1
baa9131 feat(gar): export-cron vide => export périodique désactivé
c807ab3 chore: prepare next development iteration
72b146b release: 3.2.0
fac1ffa fix(gar): handle String value for pagination-limit config
46c0dfa chore: upgrade lib version
2ec73f0 chore: set snapshot version after merge
1bf084e fix: remove setIsolationGroup/setIsolatedClasses incompatible with Vert.x 4.x
b434e50 chore: add sftp module
a712a5e ci: fix maven options
e900b27 chore: adding secured action
37375c9 chore: exposing cron tasks to be triggered by api call
f145f7c chore: update build image
3281dd2 chore: set right version for entcore libs
353a98e feat: add probes
2b50475 chore: prepare next development iteration
```

## `connectors/lool`

- **branche référencée** : `(detached)` @ `4642f16`
- **base upstream** : `2.2.5`  →  delta = `2.2.5..HEAD` (**21 commit(s)**)
- **tags patched** : 2.2.5-patched 2.2.7-patched 

```
4642f16 feat: montée de version lool 2.2.5-patched -> 2.2.7-patched
db36df6 feat: passer les libs entcore en 6.16.8-patched
13fb236 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
1423a61 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
be626f3 fix(ci): isoler org.entcore:tests dans un profil gatling-it
e8a89c0 feat: passer sur entcore 6.16.14-patched
38917ea release: 2.2.7
8d0135e chore: prepare next development iteration
6e4039e chore: update Github actions
74aee4c chore: bump version actions/setup-node@v7
073f477 ci: bump softprops/action-gh-release en v3
3a5c2e6 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
d00c655 fix(deps): aligne @open-ent/* sur 2.5.30-patched
2aa9ee6 fix(ci): NODE_AUTH_TOKEN manquant au step build frontend React
172bbbf fix(entcore): repointe entCoreVersion/entCoreLibsVersion sur 6.14.9-patched
fdc03eb release: 2.2.6
05be54a feat(theme)!: migration @edifice.io -> @open-ent + bootstrap chargé au runtime
81eb711 ci: chaîne build & publish fat-mod (les 2 IHM + GitHub Packages + rct-nexus)
708d344 fix(wopi): NPE document supprimé, port WOPI/Collabora, init callback, canBeOpen
79e01f1 fix(pom): aligner le parent POM et les versions entcore pour build offline
5b95b54 chore: prepare next development iteration
```

## `connectors/moodle-connector`

- **branche référencée** : `(detached)` @ `647b23d`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**31 commit(s)**)
- **tags patched** : 2.2.4-patched 2.3.4-patched 

```
647b23d feat: montée de version moodle-connector 2.2.4-patched -> 2.3.4-patched
8f28a60 feat: passer les libs entcore en 6.16.8-patched
b8d1638 fix(ci): isoler org.entcore:tests dans un profil gatling-it
7f7a21b feat: passer sur entcore 6.16.14-patched
07730bd release: 2.3.4
fbc1616 chore: update Github actions
3150e68 chore: update Github actions
d8411e7 ci: bump softprops/action-gh-release en v3
ac39008 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
8c213b9 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
604acac chore: prepare next development iteration
7fcb26e release: 2.3.3
413fb32 fix: HDF-3463 fix typescript version
8d629b7 chore: prepare next development iteration
da3c1ba release: 2.3.2
a676f9d chore: upgrade node version
eacd3f2 chore: update dependencies
f3dfe44 chore: update dependencies
669b455 chore: prepare next development iteration
46ab981 release: 2.3.1
3c59f02 chore: prepare next development iteration
cc5018c release: 2.3.0
98d39af chore: upgrade lib version
d3b3166 chore: set snapshot version after merge
8f13164 feat: change version to patched
782fcd7 ci: fix maven options
0cb83c5 chore: adding secured action
8152930 chore: exposing cron tasks to be triggered by api call
e0f4f28 ci: improve image build
1388260 feat: add probes and runtime mods dependencies
51aff07 chore: upgrade parent
```

## `connectors/nextcloud`

- **branche référencée** : `(detached)` @ `8317aa9`
- **base upstream** : `2.4.2`  →  delta = `2.4.2..HEAD` (**46 commit(s)**)
- **tags patched** : 2.4.2-patched 2.4.3-patched 

```
8317aa9 feat: montée de version nextcloud 2.4.2-patched -> 2.4.3-patched
d4d6fa4 feat: passer les libs entcore en 6.16.8-patched
9ba67e5 fix(ci): isoler org.entcore:tests dans un profil gatling-it
d1e770f feat: passer sur entcore 6.16.14-patched
e7ce257 release: 2.4.3
634a8b9 chore: update Github actions
f8054af chore: bump github action
4c83b20 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
26b6e88 fix(ci): GITHUB_TOKEN manquant sur le step qui exécute réellement mvn
68b75bc ci: retrigger dev-check-repository (secret OPENENT_PACKAGES_TOKEN mis à jour)
c04abb8 fix(ci): utiliser OPENENT_PACKAGES_TOKEN pour resolve app-parent (cross-repo)
642586e fix(ci): permissions packages:read manquantes -> 401 sur app-parent (entcore-v2)
5c8ba95 fix(ci): dev-check-repository — tsconfigRootDir absolu + settings Maven GitHub Packages
2dbaee1 fix(ci): supprimer le package entier plutôt qu'une version (API GitHub)
5632c69 fix(ci): delete-then-deploy pour GitHub Packages (409 avalé par continue-on-error)
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
52d5dc0 chore: prepare next development iteration
```

## `connectors/pmb-connector`

- **branche référencée** : `(detached)` @ `656140c`
- **base upstream** : `2.2.2`  →  delta = `2.2.2..HEAD` (**22 commit(s)**)
- **tags patched** : 2.2.2-patched 2.2.3-patched 

```
656140c feat: montée de version pmb-connector 2.2.2-patched -> 2.2.3-patched
23f2604 feat: passer les libs entcore en 6.16.8-patched
a3e07f0 fix(ci): retirer une dépendance déclarée deux fois dans le pom
868f074 fix(ci): isoler org.entcore:tests dans un profil gatling-it
5898744 feat: passer sur entcore 6.16.14-patched
c0219d2 release: 2.2.3
e4d3d9f chore: update Github actions
5bd08ea chore: update Github actions
71f4d19 ci: bump softprops/action-gh-release en v3
ef9a160 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
d707e93 ci: répare dev-check-repository et fiabilise la publication sur tag rejoué
18e6767 feat(notices): lien de réservation d'un exemplaire, et notices pointées sur l'OPAC
922dc10 fix(entcore): repointe entCoreVersion/entCoreLibsVersion sur 6.14.9-patched
bef3534 docs: README reflète le niveau administrateur local (AdminFilter)
f2555b9 feat(admin-local): niveau administrateur local pour la connexion PMB
6b9e9e7 feat(admin): écran de configuration de la connexion PMB par établissement
81f173d fix(amass): 3 bugs bloquant tout amass PMB réel, révélés par la vérification bout-en-bout
1796d6d docs: id_principal généralise aussi le partage d'un PMB régional mutualisé
d7d670b feat(multi-établissement): un serveur PMB par établissement
6780205 fix(pmb): source_id remplace database, incompatible avec ws/connector_out.php
ed2de42 fix(pmb-connector): premier patch -- parent fr.openent + CI build-and-publish
d1ac4ab chore: prepare next development iteration
```

## `connectors/wordpress-connector`

- **branche référencée** : `main` @ `99b1d82`
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

## `libs/edifice-entcore-libs`

- **branche référencée** : `(detached)` @ `b65c6245`
- **base upstream** : `6.16.8`  →  delta = `6.16.8..HEAD` (**8 commit(s)**)
- **tags patched** : 6.16.3-patched 6.16.7-patched 6.16.8-patched 

```
b65c6245 fix(events): ne pas déréférencer un utilisateur absent dans isDuplicateAccessModule
9a098db4 fix(timeline): verrou local pour eventsI18n, comme en 6.14.9-patched
cff835a6 feat(common): verrouillage des identifiants d'un compte
4082f4a8 feat: user can follow their history connections
6b9be626 fix(ci): ne plus supprimer le composant nexus avant de pousser les fat-jars
cd6dee38 fix(session): listSessions par defaut, pour le backend Redis ajoute en 6.16
3c2935ee fix(ci): publier les libs sur rct-nexus plutot que GitHub Packages
d489251c feat: fork patché 6.16.3-patched des libs extraites d'entcore
```

## `libs/entcore`

- **branche référencée** : `(detached)` @ `ca7b94c1c`
- **base upstream** : `6.16.14`  →  delta = `6.16.14..HEAD` (**6237 commit(s)**)
- **tags patched** : 6.14.9-patched 6.14.9-patched-SNAPSHOT 6.16.10-patched 6.16.14-patched 

```
ca7b94c1c feat: passer les libs en 6.16.8-patched
7c07e51bc fix(ci): purger org.entcore du cache Maven avant le build
057560785 fix(workspace): le compteur de stockage ne descend plus sous zéro
c5cae90d0 feat(workspace,conversation): lister et purger les fichiers d'un compte
307bd571e feat(auth,directory): le verrou d'un compte protège aussi ses rattachements
e919176f7 feat(auth): étendre la refonte à l'écran de nouveau mot de passe
f50b8e1f1 feat(auth,directory): verrouillage des identifiants d'un compte
e0de81027 fix(session,neo4j): adresse mongo « null… » et NPE sur transaction vide
1deea7a4e feat(directory): ajoute structureId à GroupService.getInfos()/getBatchInfos()
456aa155d feat: access to google drive and onedrive for workspace
94d5688ec feat(session): porter l'appareil dans la session et lister ses sessions par utilisateur
170401a90 feat: manage authentification per user agent for a user
48c76da56 feat: manage authentification per user agent for a user
9c60842f7 fix(infra): <multi-combo> affichait "[object Object]" au lieu du titre de chaque option
72155cd02 perf(oeip): ne ramène que les identifiants pour repérer les orphelins
fb6260305 fix(timeline): retablir beta() et renderTimeline2dOrBeta perdus a la fusion
a99266822 fix(interoperability): versionner common avec entCoreLibsVersion
6639465bd feat(auth): étendre la refonte aux écrans d'activation et de CGU
891ef1431 feat: improve screen auth + PWA
184ddfc2b fix(auth): restore the 16 missing French translations
3673d2f22 fix(timeline): serialize eventsI18n appends without starving the worker pool
1fa53717a add function admin collectivite
8ae1cc80c fix: add admin collectivite for role
a0612d21f feat: oeip purge
027815b73 feat(oeip): signature détachée et scellement du manifeste
9a1788701 feat(interoperability): produit la notice de traitement et la provenance
c79283f1e feat(interoperability): rend la pseudonymisation effective
fb4ee2d20 feat(interoperability): reprise sémantique de l'espace documentaire
bd1ff6941 feat(interoperability): reprise sémantique du blog, sans charge utile d'origine
602982583 feat(interoperability): projection Common Cartridge, et résolution globale des liens
98f489636 feat(interoperability): import sémantique de l'annuaire — l'appariement d'identité
b3ffd29cc feat(interoperability): l'espace documentaire en niveau Core, et l'écart avoué
b65c65a0f feat(interoperability): le blog en niveau Core, avec réécriture des liens internes
979c7d55a feat(interoperability): premier mapper sémantique — l'annuaire en niveau Core
d541ee731 feat(interoperability): permet de désigner le compte destinataire d'un import
6b544f9cf feat(interoperability): routes d'export et d'import, niveau Native opérationnel
c54fd8517 feat(interoperability): niveau Native — archive vers paquet OEIP et retour
fcd56981c feat(interoperability): squelette du module OEIP, découverte et validation
f11605ab4 feat(interoperability): pose le socle normatif du format d'échange OEIP 1.0
03b457fe9 feat: manage branding service per structure
f98df9268 feat: personalisation possible avec un logo par établissement
57f64f220 fix(communication): verrous morts Neo4j à la création d'un établissement
4c5ce7c68 fix: email for reset password
275a0606f fix(ci): exclure le module tests (Gatling/Scala 2.12) du job de publication
540f168a0 chore: bump github node action version
d21049e1a fix(security): 6 faux succès validUniqueResult dans conversation
6dcd6c239 fix(auth): findByMail traitait un email inconnu comme un succès
72634f61e Revert "feat(i18n): ajoute la clé calendar.mode.fortnight (vue "quinzaine")"
00f47ba6a feat(i18n): ajoute la clé calendar.mode.fortnight (vue "quinzaine")
0c2625480 fix(ci): delete-then-deploy pour rct-nexus (clobber systémique)
8ca878d86 fix(archive): l'export ne bloque plus indéfiniment si le verrou échoue
1dc181070 chore(ci): bump actions/checkout v4->v6 (conversation, portal) (OPENENT-57) [skip ci]
3985942cb chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
128841d91 fix(ci): évite le 409 Conflict lié à la course push -dev / workflow_dispatch -patched (OPENENT-56)
35dbd389f feat(session): suivi des sessions courantes et déconnexion forcée
1998a0221 feat(archive): restauration groupée d'un lot d'établissement
c03a73ac3 feat(workspace): seuil d'alerte de quota réglable par établissement
0f8658573 feat(horaires): horaires d'utilisation ouverts aux autres espaces d'échange
ceb966877 feat(session): dispense et exigence de second facteur par compte
31aac1c90 feat(auth): politique de mot de passe résolue par degré
fd6ef6eb7 feat(storage): analyse antivirus bloquante des pièces jointes à l'upload
7060c5aba fix: export archive per structure
7f1f960a6 feat(archive): sauvegarde d'un établissement, groupe par groupe
6821dc4f4 fix(events): ignore aussi les health-checks ELB dans le filtre de sonde
69882a243 fix: translation for portal-mui for video features
6c77b6e99 feat(auth): journaliser les tentatives de connexion refusées (LOGIN_FAILURE)
83b1f05cc feat(auth): expose le périmètre ADMIN_LOCAL dans le userinfo OAuth2
c9e24c1af feat(auth): expose superAdmin dans le userinfo OAuth2
ee82c09e2 feat(infra): historique personnel self-service (event/mine)
8970aab08 feat(workspace): liste anonyme des documents publiés sur le portail par établissement
71facfbb7 feat: a document in workspace can be published in pages or wordpress
6e4f0e9d7 feat(i18n): clés navbar.chat / navbar.chat.activeCall
6a4cec0dd fix: revert webUtilsVersion à 3.3.2 (non patché)
ce90f127d fix: garde IP null-safe pour requête event-bus synthétique + branding par structure + web-utils patché
75c819b7b fix(events): ignorer les accès kube-probe/health-check dans l'audit ACCESS
61eeb5d7f fix: remove video component for a complete new open ent module
0a2370cdf fix: video as app
e5ba6752d fix: add archive management + video support
e5cd8047b fix(quota): quota par département fiable et restreint aux établissements
5a62dbec2 fix(workspace): garder la barre d'action visible même dossier vide
... (6157 commits supplémentaires tronqués)
```

## `libs/entcore-css-lib`

- **branche référencée** : `fix/pnpm-var-primary` @ `1320b58`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 4.3.10-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/infra-front`

- **branche référencée** : `4.8.17-patched-dev` @ `d1dcb84`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 4.8.17-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/mongodb-helper`

- **branche référencée** : `3.1.1-patched-dev` @ `60e36ca`
- **base upstream** : `3.1.1`  →  delta = `3.1.1..HEAD` (**3 commit(s)**)
- **tags patched** : 3.1.1-patched 

```
60e36ca chore(mongodb-helper): upgrade maven image to 3.8.6-jdk-8
f3a3037 fix(mongodb-helper): patch version 3.1.1-patched
6358878 upgrade edifice-parent
```

## `libs/ode-bootstrap`

- **branche référencée** : `develop` @ `f6d2e8a`
- **base upstream** : `1.5.3`  →  delta = `1.5.3..HEAD` (**2 commit(s)**)

```
f6d2e8a chore(icon): Livret Sco, add app icon
764e921 chore: prepare next development iteration
```

## `libs/openent-frontend-framework`

- **branche référencée** : `2.5.30-patched-dev` @ `1a6d117e`
- **base upstream** : `v2.5.30`  →  delta = `v2.5.30..HEAD` (**34 commit(s)**)
- **tags patched** : 2.5.30-patched v2.5.30-patched v2.5.31-patched 

```
1a6d117e fix(client): ne plus rejeter la page HTML d'erreur du serveur
b4e05b1c fix(bootstrap)!: sépare l'asset de thème du paquet npm (build Vite des modules)
1782b162 feat(header): flèches précédent/suivant du bandeau en application installée
8a71b5f7 fix: cause racine du crash ProseMirror et réactivation de ContentAnalysis
a1cdd835 feat: per-check trigger mode (live vs on-demand) in useContentAnalysis
f7848e11 fix: disable ContentAnalysis extension — crashes editor creation on blog
1eb163f3 fix: re-export buildTextIndex from the published content-analysis subpath
73cfe770 feat: add context help
dc8f3f1f feat: expose moderationAction on the analyzeContent() result
bb54ddf4 fix: send X-XSRF-TOKEN on the analyze POST call
cba37473 feat: content-analysis extension + hook (schoolbook's actual editor)
c08d60c9 feat(bootstrap): couleurs de marque surchargeables au runtime
804159e3 feat: add occitanie
2badff69 feat: add esign logo
aefed0d0 chore: update Github actions
3e75a8c4 chore: bump version actions/setup-node@v7
1024611c chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
03cb7243 fix(video-recorder): relecture locale des captures d'écran
4d78e490 fix(media-library): ne pas planter quand l'action pré-succès échoue
38472949 fix(ci): résout le nom de package publié depuis package.json (force republish)
79c17f78 feat(video-recorder): capture écran / webcam / écran+webcam
bf1c4d9e fix(header): icône chat-nats dédiée (bulle) au lieu de l'icône messagerie
2ba77a3d feat(header): icône chat-nats (non-lus + appel en cours)
c217ee94 docs(readme): documente la publication @open-ent (GitHub Packages) et le mode force-republish
c7b6f2b1 docs(readme): documente la publication @open-ent (GitHub Packages) et le mode force-republish
b02f5a65 ci(publish): ajoute un mode force-republish (workflow_dispatch)
9bbe3a39 ci(publish): ajoute un mode force-republish (workflow_dispatch)
3b1f071f communities behaviour
3b27bfba fix(bootstrap): nuances --primary dérivées + halo focus pour eclat-bfc
85bcc976 feat(bootstrap): couleur de marque eclat-bfc pour le produit neo
ecc63f3a test(55D): insertion d'images par lots (useMediaLibraryEditor)
20874f77 ci(publish): declencher aussi sur les tags *-patched (release du fork Open ENT)
8bab5d28 a11y(RGAA 51H): contraste AA du bootstrap edifice (gris + vert e-primo)
11ff12f2 fix(55F): reconnaissance vocale — relance auto sur no-speech (mode continu) + test unitaire
```

## `libs/theme-open-ent`

- **branche référencée** : `develop` @ `4a19be8`
- **base upstream** : `theme-adm-3.4.10-20`  →  delta = `theme-adm-3.4.10-20..HEAD` (**0 commit(s)**)
- **tags patched** : 3.4.10-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/vertx-cron-timer`

- **branche référencée** : `3.0.0-patched-dev` @ `248c4ca`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.0.0-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `libs/web-utils`

- **branche référencée** : `3.3.2-patched-dev` @ `4e2c200`
- **base upstream** : `3.3.2`  →  delta = `3.3.2..HEAD` (**3 commit(s)**)
- **tags patched** : 3.3.2-patched 

```
4e2c200 fix(static): ne plus rejouer un statut après l'envoi des en-têtes
0190668 fix: getIp null-safe si remoteAddress() est absent
35fdd31 fix(web-utils): patch version 3.3.2-patched + null-check i18n args
```

## `modules/actualites`

- **branche référencée** : `(detached)` @ `d44b4074`
- **base upstream** : `0.17.1`  →  delta = `0.17.1..HEAD` (**882 commit(s)**)
- **tags patched** : 3.1.4-patched 3.1.5-patched 3.2.10-patched 

```
d44b4074 feat: montée de version actualites 3.1.5-patched -> 3.2.10-patched
3889580c feat: passer les libs entcore en 6.16.8-patched
3c84cc1c fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
b9690c5f fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
56e5f79c feat: passer sur entcore 6.16.14-patched
2447a30c fix(actualites): cast boolean fields to ::boolean in INSERT/UPDATE queries
174736c7 fix(ci): isoler org.entcore:tests dans un profil gatling-it
d08f163b chore: update Github actions
9c5d7af1 chore: update Github actions
31980bee chore: update Github actions
9f87d514 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
dccfa82f chore: bump version actions/setup-node@v7
50a7ceb7 ci: bump softprops/action-gh-release en v3
843b9455 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
ff4e908b ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
3677caff fix(deps): aligne @open-ent/* sur 2.5.30-patched
1055299a fix(tests): résoudre les libellés du portail par alias, avec repli
18634b48 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
db3e61c3 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
3156a2e0 fix(actualites): creation d'actualite cassee (route 404 + filtre 401)
b69eb010 test(actualites): couvre le contrat status de createInfo
8f468032 test(mocks): enregistrer defaultHandlers + endpoints shell pour éviter les EINVAL flaky
8b8059e7 fix(actualites): anomalies création actu (spinner infini, statut DRAFT défaut, division par zéro SQL)
9ae35cb4 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
18aee42b ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
8262f91d fix(i18n): ajouter les traductions anglaises manquantes (en.json absent)
77c4efe9 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
68eee0d3 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
e91ff219 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
90c3b818 ci: fournir NODE_AUTH_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN à l'install pnpm (fix 404 @open-ent cross-repo)
bb72842a chore(frontend): reformatage prettier (imports)
c888bd90 feat(actualites): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert
44ce378d feat: migration frontend @open-ent (look 1d/vert) sur 3.1.5-patched + entcore 6.14.9-patched
3a229ed4 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
22d7d8a5 fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers, no-frozen-lockfile
287f05fd chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
5ec024f5 Migrate to JDK 21
721e5834 ci: add build-and-publish workflow for GitHub Packages
7706baa8 release: 3.2.10
62347382 fix: #IMPULS-6283 add prefix on imported thread to distinct imported threads from original (#251)
e3a5abf4 chore: prepare next development iteration
b239a3f8 release: 3.2.9
5424cc7f chore: set snapshot version after merge
3165cde2 chore: prepare next development iteration
adcf151e chore: set snapshot version after merge
8f2a4090 chore: prepare next development iteration
7f1acfb5 chore: prepare next development iteration
b1ae3321 release: 3.2.8
4921510f fix: #IMPULS-6222, 500 error loop (#250)
d0c23cd9 fix: #IMPULS-5503, remove info-shared notification (#249)
d18502e7 chore: prepare next development iteration
7f2804ec release: 3.2.7
a49ce05f chore: prepare next development iteration
c834809c release: 3.2.6
3b6e1330 chore: prepare next development iteration
e25911c3 release: 3.2.5
def80d5f chore: prepare next development iteration
40c48317 release: 3.2.4
2a4cafb9 chore: update dependencies
8f1f516e chore: update dependencies
5234afbf chore: update dependencies
8453f54b fix: #IMPULS-5947 we should default expiration date only if publicati… (#247)
4bb4dda5 Update fr wordings
4f960df2 chore: prepare next development iteration
257a6317 release: 3.2.3
b9e59041 Update fr wordings
1d9fd002 fix: #IMPULS-6013, cron tigger (#248)
39a9e8e5 fix:#IMPULS-5990 cannot expDate without pubDate
879e5c46 chore: prepare next development iteration
a5dc4e3f release: 3.2.2
bc96ade6 fix: #IMPULS-5761 fix default value to timezone UTC form modified and created field + fix timezone comparaison in queries (#244)
ec5439cc chore: prepare next development iteration
9b25f24f release: 3.2.1
81808b29 fix: IMPULS-5454, preview info contents
b1c6a0d4 feat: #COCO-5572, add isHeadline flag to NewsLight DTO (#237)
42ba6c13 chore: prepare next development iteration
66d27f7d release: 3.2.0
39a40cb6 chore(template): add new conf for superAdmlCleanupCron
72a35851 chore: upgrade lib version
69c1d0a0 chore: set snapshot version after merge
... (802 commits supplémentaires tronqués)
```

## `modules/appointments`

- **branche référencée** : `(detached)` @ `4676f2e`
- **base upstream** : `1.3.6`  →  delta = `1.3.6..HEAD` (**281 commit(s)**)
- **tags patched** : 1.3.6-patched 1.3.7-patched 1.6.7-patched 

```
4676f2e feat: montée de version appointments 1.3.6-patched -> 1.6.7-patched
10243a0 feat: passer les libs entcore en 6.16.8-patched
a9ecd29 feat: passer sur entcore 6.16.14-patched
293ed7f release: 1.6.7
0bc0871 feat: add communication between workflowhub and appointments to request rdv
9d0a89e fix(ci): isoler org.entcore:tests dans un profil gatling-it
8a7da82 chore: update Github actions
1a1e718 chore: update Github actions
6175363 chore: update Github actions
0a5c8c2 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
e66b818 chore: bump version actions/setup-node@v7
247d185 ci: bump softprops/action-gh-release en v3
844b295 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
1484a51 fix(deps): aligne @open-ent/* sur 2.5.30-patched
9d792bc fix(entcore): repointe entCoreVersion sur 6.14.9-patched
698ecd8 chore: prepare next development iteration
7965be7 release: 1.6.6
2d6307c fix(appointments): protéger DURATION_VALUES contre une duration absente/invalide
e02d8a4 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
f117298 chore: prepare next development iteration
5ec3c01 release: 1.6.5
e1476ad chore: prepare next development iteration
5f12801 release: 1.6.4
a2d86f8 chore: prepare next development iteration
0ef213e release: 1.6.3
e67b4ae chore: update transtack version
94ec097 chore: prepare next development iteration
1b7fb78 release: 1.6.2
a11feb8 ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
05fee4f fix(grids): durcir la garde du paramètre states de GET /grids
2642115 chore(conf): consolider les patchs pass-tech sur base officielle 1.3.6
bff4502 chore : fix cgi front libs version
962ce14 chore: prepare next development iteration
dc7f764 release: 1.6.1
8d4adfd ci: chaîne build & publish fat-mod (GitHub Packages + rct-nexus)
e62bf6b build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
aad778b chore: ignore *.tsbuildinfo (cache build TypeScript)
53ff875 chore: downgrade SNAPSHOT to avoid autodeployment issue
4e708cf chore: prepare next development iteration
1a24223 release: 1.6.0
bd4988b fix(share): [#RDV-130, #RDV-131] fix feedbacks on new sharing system (#121)
cad5208 fix(notif): [#RDV-113] fix link in notif
94a1d08 ix(): pin dependencies to prevent dayjs error at runtime
7cd12c1 feat(share): [#RDV-113] sent notification on sharing (#120)
53f95d1 fix(conf): useTheme passe le code app à getConf (au lieu d'une chaîne vide)
f3e06f8 fix(conf): app code "appointments" pour EdificeClientProvider (404 /Rendez-vous/conf/public)
f4c496b chore: gitignore artefact de build
3f050f4 fix(theme): bandeau vert #2ba84a en mode 1D (data-product=1d)
48cdd93 feat(public): [#RDV-124] clean old logic of public target list (#119)
b8789e8 feat(sharing):  [#RDV-92] fix and improve sharing system (#118)
eacf923 feat(sharing): [#RDV-122] add sharing modal (#117)
d9d23de feat(sharing): [#RDV-122] add necessary to open sharing modal (#116)
a9d4a25 feat(sharing): [#RDV-123] implement sharing logic (#115)
26d56fe fix(): [#RDV-121] change some i18n values
bbc7331 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (build-and-publish aligné)
c372af5 appointments: migration @edifice.io -> @open-ent (2.5.16 -> 2.5.22) + alignement peers + fix @cgi require(dayjs/react) + token CI
b643ed7 chore: prepare next development iteration
b4d7cf3 release: 1.5.0
1ea8b32 fix: pin dependencies to prevent dayjs error at runtime
c73808b ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
1098b2e chore: upgrade lib version
583ef70 chore: set snapshot version after merge
cce76c7 chore: prepare next development iteration
46c9fb6 release: 1.4.1
08ea842 chore: add postgres persistor as runtime req
6189c47 chore: adding secured action
f781cdc chore: exposing cron tasks to be triggered by api call
e3d2da8 feat: add probes
137853a feat: embed session module
bdfffbc fix(api): improve api calls for mutations
8ab329f chore: prepare next development iteration
d5dfebd release: 1.4.0
e3ef8f8 fix(): fix various feedbacks (#114)
ece4009 fix: suppot PostgresSQL 16
3a4476c fix(): fix feedbacks (#113)
5f5851e MAnage PostgreSQ types
72161f3 fix(slot): [#RDV-109] avoid overlap of dailyslots (#112)
619c5d7 chore(): update hub-ui dependency version
db7c123 fix(): fix various feedbacks (#111)
7d4fe79 feat(link): [#RDV-111] acces to a specific grid by link (#110)
... (201 commits supplémentaires tronqués)
```

## `modules/blog`

- **branche référencée** : `(detached)` @ `3c3e1c5`
- **base upstream** : `1.24.1`  →  delta = `1.24.1..HEAD` (**1110 commit(s)**)
- **tags patched** : 5.4.10-patched 5.4.7-patched 5.5.12-patched 

```
3c3e1c5 feat: montée de version blog 5.4.7-patched -> 5.5.12-patched
3138d3c feat: passer les libs entcore en 6.16.8-patched
556f373 feat: passer sur entcore 6.16.14-patched
d722621 build: bundle reconstruit avec le correctif du client @open-ent
a438115 build: nouveau hash de bundle après rebuild sur @open-ent 2.5.30-patched republié
a3a7805 ci: nouveau suffixe de cache pnpm après republication de @open-ent 2.5.30-patched
faed8c3 ci: résoudre proprement les @open-ent/* republiés (patron schoolbook)
9283654 fix(ci): isoler org.entcore:tests dans un profil gatling-it
430e371 chore: update Github actions
e559c66 chore: update Github actions
15dd69a chore: update Github actions
d1002ce fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
0dac8e8 chore: bump version actions/setup-node@v7
4885b9b ci: bump softprops/action-gh-release en v3
3d82493 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
842e858 ci: purger entcore du cache Maven avant le build
0059b8b feat(horaires): soumettre l'écriture du blog aux horaires d'utilisation
7db63e3 fix(deps): aligne @open-ent/* sur 2.5.30-patched
c55fa33 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
34c61ce fix(scram): entCoreVersion 6.14.9 -> 6.14.9-patched (common provided, fat-jar sans pgclient/scram)
06c0d24 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
492a77a ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
7157d91 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
80035ad build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
72f4416 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
4e38975 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
7080622 ci: pnpm install --no-frozen-lockfile (résout @open-ent/explorer 2.5.26 désormais publié)
e4a7188 chore(frontend): reformatage prettier (imports)
452ed9a fix(blog): Matomo via proxy dashboard (siteId par domaine, @open-ent 2.5.26)
dce2cd0 build(blog): hook Matomo (react 2.5.25, logs [Matomo] au lieu de [Xiti])
a9dd6db feat(blog): tracking Matomo (@open-ent 2.5.25) + vue verte (dist/index.html avec link openent-bootstrap)
7de1a85 fix(blog): vue servie avec le link /assets/themes/openent-bootstrap actif (bandeau vert 1d)
6fb2cfc Revert matomo sur blog : restaure le build vert @open-ent/client 2.5.22
84d9f62 fix(matomo): rebuild blog avec @open-ent/client 2.5.24 (tracking Matomo, plus de 404 xiti)
05ccfbc blog: build standalone propre + migration @open-ent/explorer
53ac7b1 ci: definir NPM_TOKEN/TIPTAP_PRO_TOKEN a l'install (parse .npmrc -> routage @open-ent)
ed22242 ci: auth GitHub Packages (@open-ent) pour l'install frontend
8f2ecfa feat(blog): @open-ent depuis GitHub Packages + bootstrap externe
f1f21aa ci: add build-and-publish workflow
b565308 i18n: sync and translate en.json to English
fa91023 update view with last js version
c6f0e99 feat: change version to patched
a194520 release: 5.5.12
d21efad chore: prepare next development iteration
42d9546 release: 5.5.11
b74ddf3 chore: prepare next development iteration
fae5a71 release: 5.5.10
4c7966e chore: prepare next development iteration
7e4bc28 release: 5.5.9
e62c9bb chore: upgrade react-query version
c6946ab chore: set snapshot version after merge
3d91ea4 chore: prepare next development iteration
89ef7c2 chore: set snapshot version after merge
7bfab70 chore: prepare next development iteration
a771632 chore: set snapshot version after merge
ea18a37 chore: update package json
fc3c7d4 fix: #PEDAGO-4299, truncate long title
4a2b17a chore: prepare next development iteration
a1a86c3 fix: #PEDAGO-4262, position the post pinned badge on the right of the card
fdef7e0 fix: #PEDAGO-4210, fix cut picture on firefox when print
9a41090 release: 5.5.7
88742e4 chore: prepare next development iteration
334b0a9 chore: prepare next development iteration
e0d6597 release: 5.5.8
59c1626 Update fr wordings
ef8f7e4 chore: set snapshot version after merge
b4093c4 chore: prepare next development iteration
2c6c031 fix: #PEDAGO-4249, remove pinned field on post unpin
e5c9cce feat(frontend): #PEDAGO-3396, add pinned badge and card styles
9a8b94f PR Copilot Feedback
1606252 feat: #PEDAGO-3396, add Post pinned frontend
5100048 feat: #PEDAGO-3396, add index for list sorted by pinned
5b570ff feat: #PEDAGO-3396, when pinning a post unpin previous pinned post and sort by pinned
ec90eb8 feat: #PEDAGO-3396, update backend service for Post Pinning
ee73736 release: 5.5.7
e464791 chore: prepare next development iteration
72688b1 release: 5.5.6
5074e07 chore: prepare next development iteration
100823b release: 5.5.5
3798770 chore: prepare next development iteration
... (1030 commits supplémentaires tronqués)
```

## `modules/cahier-de-textes`

- **branche référencée** : `(detached)` @ `e2aa04a7`
- **base upstream** : `4.1.6`  →  delta = `4.1.6..HEAD` (**112 commit(s)**)
- **tags patched** : 4.1.5-patched 4.1.6-patched 4.1.7-patched 4.2.4-patched 

```
c11c4765 feat: passer les libs entcore en 6.16.8-patched
a262bb0b fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
91bff6fc fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
6c140339 feat: passer sur entcore 6.16.14-patched
5fabe02a fix(diary): NPE non catchée bloquait indéfiniment GET /session/:id sur un id inexistant
843a83f2 release: 4.2.4
462b5d87 feat(diary): visa en masse par filtre + workflow de proposition de modification de séance
f2beaf78 fix(diary): transmet le teacherId à Course.sync() depuis le calendrier
fd456c4a fix: super-admin plateforme contourne les droits par établissement (cahier de textes)
675e5d77 fix: super-admin plateforme contourne les droits sur le paramétrage cahier de textes
0e90e647 fix(ci): isoler org.entcore:tests dans un profil gatling-it
a55c77e1 chore: update Github actions
d2948590 chore: update Github actions
e91a816d fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
0345e276 chore: bump version actions/setup-node@v7
43c5a90d ci: bump softprops/action-gh-release en v3
6be6b3cb fix(security): 5 faux succès validUniqueResult (dont 1 corruption de données)
bb41be3b fix(calendar): masque le bandeau "Travail à faire" en vue quinzaine
bd23be78 Rend paramétrable la politique d'archivage du cahier de textes
8d3d840c fix(diary): écran MOD11 audience-settings n'affichait jamais les vrais groupes
39f5efe8 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
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
749c6e39 chore: prepare next development iteration
24d12c01 release: 4.2.3
ec87bccc chore: prepare next development iteration
29127f9f release: 4.2.2
5eab367b chore: update dependencies
cf06ca3e chore: update dependencies
c42dc65b ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
e5c15a65 fix(51C comparatif): séances de la semaine dans la grille calendaire + btn-link lisible (thème)
f5e69955 feat(diary/react): écran Progressions (séquences pédagogiques)
564060ef feat(51C diary): ecran Seances React (liste + creation + publication)
3cbb3f41 [51C-migration] feat(cahier-de-textes): vue calendrier hebdomadaire (parité)
6a2d9cd8 [51C-migration] feat(cahier-de-textes): incrément 2 — gestion des types de devoir
6f06d743 [51C-migration] feat(cahier-de-textes): migration React incrément 1 — devoirs
... (32 commits supplémentaires tronqués)
```

## `modules/calendar`

- **branche référencée** : `react-migration-rappels` @ `e6f264d`
- **base upstream** : `4.2.7`  →  delta = `4.2.7..HEAD` (**109 commit(s)**)
- **tags patched** : 4.2.7-patched 4.3.6-patched 

```
e6f264d fix(calendar): un agenda apparu depuis la dernière visite reste visible
eedd154 fix(calendar): le formulaire d'événement ne s'ouvrait plus (IHM React)
be00b8f feat(calendar): éditeur riche pour la description de l'événement
32ba882 feat(calendar): pièces jointes et ressources du médiacentre dans l'IHM React
73d7fd3 feat(calendar): rappels d'événement dans l'IHM React
350ec07 feat: montée de version calendar 4.2.7-patched -> 4.3.6-patched
df9cb9b feat: passer les libs entcore en 6.16.8-patched
5254203 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
9730e4b feat: passer sur entcore 6.16.14-patched
a391e07 feat(calendar): suppression des réservations RBS avec l'événement
c57eef5 feat(calendar): récurrence des événements dans l'IHM React
9b231f3 feat(calendar): import et export iCalendar dans l'IHM React
0bafcde feat(calendar): agendas d'établissement et de groupe dans l'IHM React
4eeedf2 feat(calendar): droits, événements multi-jours, fiche en lecture seule
82969ac fix(calendar): corrections d'affichage et sauvegarde de la récurrence
e628f67 feat(calendar): habillage de l'IHM React sur le socle @open-ent
83ae04e fix(calendar): corrige la collision de route booking-proposal et relocalise la case droit de réservation
11dc3a2 fix(calendar): déclare structureName dans le modèle frontend Calendar
762047f fix(calendar): affiche le nom de l'établissement dans l'intitulé de l'agenda
ac7af83 fix(calendar): affiche le propriétaire dans la liste des agendas d'établissement
be9b277 feat(calendar): sélecteur d'établissement dans le panneau Disponibilité
261dde8 feat(calendar): case à cocher du droit de partage granulaire "réservation"
ec42d9d feat(calendar): étend le panneau Disponibilité à tous les agendas non externes
641de4a feat(calendar): droit de partage granulaire pour associer une réservation RBS
4a80436 feat(calendar): circuit d'approbation réelle pour une réservation RBS sur agenda partagé
1ed74d5 fix(calendar): synchronise réellement RBS à la modification d'un événement
bbd53d1 feat(calendar): panneau "Disponibilité EDT + RBS" pour l'agenda d'établissement
98a429b fix(ci): évite l'inlining par Vite de l'@import runtime /theme/brand.css
c9743ea release: 4.3.6
e82c192 feat(calendar): reçoit les réservations RBS validées pour alimenter l'agenda d'établissement
315c5ec fix(ci): isoler org.entcore:tests dans un profil gatling-it
281cbe9 chore: update Github actions
7bc2061 chore: update Github actions
31c3104 chore: update Github actions
c274527 chore: bump version actions/setup-node@v7
bf9d576 ci: bump softprops/action-gh-release en v3
a6c94db chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
d0beb1f fix(calendar): calendar.portalpublish n'est pas un rôle de partage valide (read/contrib/manager/publish/comment) — réutilise calendar.manager, casse le build (Invalid sharing type)
b11844a feat: support export of ICS for public agenda in wordpress
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
fb5dc16 chore: prepare next development iteration
6556c11 release: 4.3.5
57e85c5 chore: prepare next development iteration
e6ca9d1 release: 4.3.4
a1ab042 chore: update dependencies
5d69f36 chore: update dependencies
166f5f8 fix:#ENABLING-546 watcher cache and hot reload
f35b7ac ci(calendar): réactiver le publish rct-nexus (jar complet depuis [B])
28d3859 ci(calendar): builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
de27d33 ci(calendar): ne plus publier sur rct-nexus depuis la CI (module dual React)
56d7188 ci(calendar): tolérer le 409 Conflict au publish GitHub Packages
49ceeb7 fix: #SRE-5674, avoid call to cluster wide event bus
645ad03 chore: prepare next development iteration
030327f release: 4.3.3
16a3845 feat(51C): agendas externes ICS (section + ajout par URL autorisée, lecture seule exclue de l'écriture)
be8fe31 feat(51C comparatif): vue Liste des événements
871dd5d fix(51C comparatif): section Agendas partagés (sidebar scindée) + btn-link lisible (thème)
... (29 commits supplémentaires tronqués)
```

## `modules/collaborative-editor`

- **branche référencée** : `(detached)` @ `7ffdde0`
- **base upstream** : `0.9.0`  →  delta = `0.9.0..HEAD` (**276 commit(s)**)
- **tags patched** : 3.3.5-patched 3.3.6-patched 3.4.7-patched 

```
7ffdde0 feat: montée de version collaborative-editor 3.3.5-patched -> 3.4.7-patched
afa6d70 feat: passer les libs entcore en 6.16.8-patched
6c14f08 feat: passer sur entcore 6.16.14-patched
d42a1b3 fix(ci): isoler org.entcore:tests dans un profil gatling-it
c3d7482 chore: update Github actions
2699e0f chore: update Github actions
1aee435 ci: bump softprops/action-gh-release en v3
db07553 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
7ae77dc fix(collaborative-editor): liste vide bloquante + resolution de domaine
99ae5a2 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
e14d44c ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
9000150 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
aceeb9a build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
a6c9a95 feat(collaborative-editor): add etherpad-public-url support
e499cf5 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
3487c17 i18n: sync and translate en.json to English
9a74a71 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
409ce55 fix(collaborative-editor): patch version 3.3.5-patched + i18n timeline en
7ed0806 ci: add build-and-publish workflow for GitHub Packages
1686a07 release: 3.4.7
c6be3d8 chore: prepare next development iteration
e441679 release: 3.4.6
93fdb6e chore: set snapshot version after merge
da8fbec fix: #PEDAGO-4016, remove Unused Pad Notification Cron and API
d9790c7 chore: prepare next development iteration
5ce0f39 chore: prepare next development iteration
363bb77 release: 3.4.5
9215bbb chore: prepare next development iteration
146e39c release: 3.4.4
9452cb4 chore: update dependencies
471033e chore: update dependencies
dad044b chore: prepare next development iteration
45b1eac release: 3.4.3
54e0f84 chore: prepare next development iteration
329bedc release: 3.4.2
da54a1e chore: prepare next development iteration
99fe882 release: 3.4.1
1b382c3 chore: set snapshot version after merge
2ff8e73 chore: prepare next development iteration
77ba723 chore: prepare next development iteration
87b3d10 chore: prepare next development iteration
c4b46f1 release: 3.4.0
a05aeb3 chore: upgrade lib version
c43ccf2 chore: set snapshot version after merge
563fa16 fix: create parent if not exists while exporting
541af6a fix: handle connectivity error
55ad8f0 chore: adding secured action
32f32af chore: exposing cron tasks to be triggered by api call
7497f2d chore: improve build
ae98e12 feat: add manifest attributes
48c4f7d feat: add probes
463daea chore: upgrade parent
89c7434 wip
2606a7b feat: #SRE-5075, add runtime dependencies
966f861 chore: prepare next development iteration
10a82bb release: 3.3.6
0ce213e chore: prepare next development iteration
15d5cbb release: 3.3.5
48881d9 chore: prepare next development iteration
2854c62 release: 3.3.4
76e9574 chore: prepare next development iteration
4d63467 release: 3.3.3
64d8b27 chore: set snapshot version after merge
22058b3 chore: prepare next development iteration
06a0576 chore: prepare next development iteration
86c5768 chore: prepare next development iteration
71d19e4 release: 3.3.2
419586e chore: prepare next development iteration
acf4136 release: 3.3.1
050c50c chore: prepare next development iteration
cac7b43 release: 3.3.0
d2bec6d chore: update edifice-parent in pom
3cd60da fix: export resource result handler
4ab5315 chore: prepare next development iteration
175251d chore: update dependencies
edebdb0 feat: #RBACK-155, #RBACK-117, kubernetes compatibility
d0c77f0 feat(conf): #RBACK-188 add template.j2
7027016 chore: update dependencies
abcf986 chore: prepare next development iteration
c176ce0 release: 3.2.0
... (196 commits supplémentaires tronqués)
```

## `modules/collaborative-wall`

- **branche référencée** : `(detached)` @ `0d8eaf8`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.4.7-patched 3.4.8-patched 3.4.9-patched 3.5.12-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/community`

- **branche référencée** : `(detached)` @ `a28d667`
- **base upstream** : `2.2.1`  →  delta = `2.2.1..HEAD` (**35 commit(s)**)
- **tags patched** : 2.2.1-patched 2.2.5-patched 

```
a28d667 feat: montée de version community 2.2.1-patched -> 2.2.5-patched
7c3b5f0 feat: passer les libs entcore en 6.16.8-patched
a760d19 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
ba51a44 fix(ci): retirer une dépendance déclarée deux fois dans le pom
089a882 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
f03d64b feat: passer sur entcore 6.16.14-patched
1fbfafb release: 2.2.5
3ccda4f fix(ci): isoler org.entcore:tests dans un profil gatling-it
9544719 chore: update Github actions
b68975f fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
f5b4f44 chore: bump version actions/setup-node@v7
d210e07 ci: bump softprops/action-gh-release en v3
3c24935 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
526b039 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
6e0748e fix(deps): aligne @open-ent/* sur 2.5.30-patched
426c710 chore: prepare next development iteration
343690d release: 2.2.4
7e01a08 chore: prepare next development iteration
6130e60 release: 2.2.3
991a550 chore: update dependencies
8d294fc chore: update dependencies
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
3e3c6a4 chore: prepare next development iteration
93ae24c release: 2.2.2
484d7f9 Update fr wordings
d1e7b39 chore: prepare next development iteration
```

## `modules/competences`

- **branche référencée** : `(detached)` @ `50a077d3`
- **base upstream** : `2.1.12`  →  delta = `2.1.12..HEAD` (**75 commit(s)**)
- **tags patched** : 2.1.12-patched 2.2.4-patched 

```
50a077d3 fix(competences): versionner la feuille de style compilée
36f81542 feat: montée de version competences 2.1.12-patched -> 2.2.4-patched
f8edccb0 feat: passer les libs entcore en 6.16.8-patched
b48d3b54 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
8991b22b fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
b378b771 feat: passer sur entcore 6.16.14-patched
215c029d release: 2.2.4
964501ad fix: super-admin plateforme contourne les droits par établissement (Compétences)
303438ae fix(ci): isoler org.entcore:tests dans un profil gatling-it
b73f0f27 chore: update Github actions
1125112f fix: remove dead Nashorn import, skip test compilation for JDK 21
d5716a9a chore: bump version actions/setup-node@v7
2eadbd18 ci: bump softprops/action-gh-release en v3
364da933 fix(security): renommage cross-établissement d'une compétence renvoyait 200
6059036f chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
087af2a2 ci: ajoute le script refresh-open-ent-lock.mjs manquant
f67bc3bb ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
8dc6a575 fix(deps): aligne @open-ent/* sur 2.5.30-patched
fc48285c fix(competences): épingler entcore sur une version fixe (dev flottant)
1976abc2 docs(frontend-ui): corriger le commentaire de bascule IHM
337bd7a2 chore: prepare next development iteration
fbd692f4 release: 2.2.3
4cade6e4 chore: prepare next development iteration
5cb8858a release: 2.2.2
2c5c806b chore: upgrade node version
88ff0dc8 chore: update dependencies
b9f09061 chore: update dependencies
07a522ee ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
bf6bf89b fix(51C comparatif): btn-link lisible (thème)
dcb9d6c6 feat(competences/react): écran Relevé de notes (classe/matière/période)
95c618cb feat(competences/react): écran Arbre de compétences (référentiel par domaines)
5bd055c5 feat(51C-migration): competences — écran Saisie de notes par devoir (React)
8ee3cc32 [51C-migration] feat(competences): onglet Évaluations (liste des devoirs)
bcd6451c [51C-migration] feat(competences): bascule React PAR DÉFAUT
7518dc55 [51C-migration] feat(competences): migration React incrément 1 — référentiels d'évaluation
200a447d fix(competences): eviter le NPE sur getType() null (ex. admin) dans view
0b533fa9 chore: prepare next development iteration
99ea7e3a release: 2.2.1
6624565b ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
7f353cd2 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
69ce5ec2 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
adb938a1 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
ee73876c chore: prepare next development iteration
1edf2c9c release: 2.2.0
ec5f82ef ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
61aa800e i18n: translate en.json to English
544cc420 i18n: sync en.json keys with fr.json
5cde346d chore: upgrade lib version
414d8cc7 chore: set snapshot version after merge
63985e85 fix: class cast on event bus serialization
f9d0929a fix: compatibility with vertx cluster serialization - 2
f5b9ee1b fix: compatibility with vertx cluster serialization
77954e6b Revert "fix: compatibility with vertx cluster serialization"
adca9365 fix: compatibility with vertx cluster serialization
0f991227 chore: add pdf generator as a runtime dependency
5f1f0c72 fix: fetch neo4jConfig from the local server map
68a12c6c chore: improve build
983de8b7 chore: cleanup pom.xml
16a0580d chore: add startup failure log
e4f48b0e feat: add probes
07a62a28 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
c460fe1e fix(ci): add --ignore-engines to yarn install for Node 16 compatibility
39644a92 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
9ac6ebae ci: re-trigger build after entcore-v2 published to GitHub Packages
cce6b52b fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
3ba06f2e ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
6da21b10 fix(competences): patch version 2.1.12-patched
fe3a6c3f chore: prepare next development iteration
ff566dcd release: 2.1.13
4c572695 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6e53b90f ci: add build-and-publish workflow for GitHub Packages
540ed2c7 fix(bulletin): [#EVAL-678] fix export inconsistencies
b9003644 fix(competences): patch version 2.1.12-patched
cde1b121 fix: BulletinWorker NPE when neo4jConfig is JSON null string
d4f3f471 chore: prepare next development iteration
```

## `modules/edt`

- **branche référencée** : `3.1.4-patched-dev` @ `269d468`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**62 commit(s)**)
- **tags patched** : 3.1.4-patched 

```
269d468 fix(edt): l'avertissement de disponibilité ne se déclenchait pas en mode créneau nommé
34948cf fix(edt): l'avertissement de disponibilité ne se déclenchait jamais
4d60633 docs(edt): simplifie le commentaire de l'avertissement de disponibilité
6be917f feat(edt): avertissement de disponibilité réelle à la saisie manuelle d'un cours (point b)
bcbce97 fix(edt): infobulle affiche les ressources RBS liées, motif de réservation lisible
2da0b18 fix(edt): régressions trouvées en test réel sur l'écran cours (semaine perdue, salle non présélectionnée)
5200a0e fix(edt): room-conflicts ignorait le format datetime + le créneau horaire, tri du sélecteur de salle par catégorie
a12d8cf feat(edt): route de conflit de salle pour RBS, pont vers school-planner pour la catégorie de salle requise
5cbdf8b fix(ci): évite l'inlining par Vite de l'@import runtime /theme/brand.css
773880d fix: super-admin plateforme contourne les droits par établissement (EDT)
d309961 fix(ci): isoler org.entcore:tests dans un profil gatling-it
f9e2439 chore: update Github actions
3661ab4 chore: update Github actions
d4e6cbe chore: bump version actions/setup-node@v7
d3f9d1a ci: bump softprops/action-gh-release en v3
6f4d985 feat(manage-course): avertissement de catégorie de salle vs matière
06eb815 fix(security): masquer un tag de cours d'une autre structure renvoyait 200
12dc62e fix(ci): -Dmaven.test.skip=true au lieu de -DskipTests (testCompile Scala plante sur JDK21)
289f0de fix(edt): annule le style inventé, réutilise la classe deselect-button d'origine
334dd02 fix(edt): unifie select-button/deselect-button en une seule classe toggle-all-button
5e72f14 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
f232cf2 feat(edt): bouton "Tout sélectionner" à côté de "Tout désélectionner"
7eb9faa fix(deps): aligne @open-ent/* sur 2.5.30-patched
9d32a91 ci: ajoute le script refresh-open-ent-lock.mjs manquant
957fabd ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
b3f9a25 fix(deps): aligne @open-ent/* sur 2.5.30-patched
ffb3a46 fix(edt): fuite de gestionnaires jQuery, double-soumission, conflits RBS silencieux
92e3eb8 fix(edt): sélecteur de ressource RBS qui ne s'attachait jamais au cours
ddc0de7 chore(build): migrer docker-compose vers docker compose
60ff96c fix(edt): champ salle en texte libre passé en lecture seule
09813f4 feat(edt): sélecteur de ressources RBS pour un cours (coexistence avec roomLabels)
68c6e33 fix(build): exclure frontend/ du tsconfig racine
003466e fix(edt): recharger les documents à l'édition d'un cours (GET /courses/:id)
0ac1d18 ci(edt): delete-then-deploy sur rct-nexus (dépôt release immuable)
6af2c7b feat(edt): attacher des documents à un cours (espace documentaire + médiacentre)
7ca2f83 docs(frontend-ui): corriger le commentaire de bascule IHM
51128be ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
2579be9 fix(51C): grille — résolution du créneau par heure de début pour les cours sans idStartSlot (cours manuels)
b7289f0 feat(51C comparatif): création de cours (POST /edt/course) + fix crossDateFilter (occurrences ponctuelles ignorées)
7e2d3c0 feat(51C comparatif): « Mon emploi du temps » par défaut (parité Angular)
de0c7ac [51C-migration] feat(edt): filtre « Mon emploi du temps » (par enseignant)
f140255 [51C-migration] feat(edt): incrément 2 — vue grille horaire hebdomadaire
411549c [51C-migration] feat(edt): migration React incrément 1 — emploi du temps (lecture)
b910e39 fix(edt): libelle des cours a matiere personnalisee (rendu calendrier)
581a60f ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
e54501c ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
112e6f6 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
dbf62d3 feat(edt): notification timeline + push aux élèves lors d'un changement de cours
d83448a update package-lock
d903d55 feat(edt): EDT→RBS bridge — sync course bookings to RBS on creation
f635f44 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
cbb60af i18n: translate en.json to English
4112ca6 i18n: sync en.json keys with fr.json
e6e2264 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
50a70b9 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
0e68f5d ci: re-trigger build after entcore-v2 published to GitHub Packages
d507aa0 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
16ffa08 ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
69b8e4c ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
99ac9b8 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
d454cc2 ci: add build-and-publish workflow for GitHub Packages
10b8339 feat: change version to patched
```

## `modules/exercizer`

- **branche référencée** : `(detached)` @ `0b2d0347`
- **base upstream** : `4.3.6`  →  delta = `4.3.6..HEAD` (**66 commit(s)**)
- **tags patched** : 4.2.5-patched 4.3.6-patched 4.4.7-patched 

```
0b2d0347 feat: montée de version exercizer 4.3.6-patched -> 4.4.7-patched
80f9e445 feat: passer les libs entcore en 6.16.8-patched
782a835c feat: passer sur entcore 6.16.14-patched
2fe67292 release: 4.4.7
b561825e fix(ci): isoler org.entcore:tests dans un profil gatling-it
4ed50775 chore: update Github actions
068dece2 chore: update Github actions
d9d671b6 fix(build.sh): ne plus tenter d'installer entcore@<branche-du-module>
34cc7d6a fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
6c6379ad ci: bump softprops/action-gh-release en v3
a7a52cfd fix(security): 2 faux succès validUniqueResult sur exercizer
668e7a12 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
f7c6265e Update fr wordings
d4a77e36 chore: prepare next development iteration
d354199b release: 4.4.6
64ad7b43 fix(parcours,à-rendre,pilotage): parité sujet à rendre + navigation suivi + prolongation bidirectionnelle
a436afa5 fix(parcours): corrige 5 bugs réels trouvés en recette + ajoute le suivi de classe (D5)
6a0a1be1 Update fr wordings
d3f0b1bf feat: parcours multi-séquences (D1/D5/D6/D7), pilotage temps réel (D3), import de ressource externe (D4)
baca6628 chore: set snapshot version after merge
354b24c1 fix(library): masquer le bouton 'Publier dans la bibliotheque' (Bibliotheque non provisionnee)
0623f92b feat(schedule): noms de groupes lisibles dans le selecteur de destinataires
e366522a fix(i18n): ajout des 45 cles manquantes affichees en brut (fr+en) + timeline Exercizer
855fbbb8 fix: #PEDAGO-4153, fix Casiers typo
13a27c83 fix: #PEDAGO-4153, refactor Sujet à rendre to Rack
1326ede0 chore: prepare next development iteration
5bb4b97f chore: prepare next development iteration
6a327305 chore: prepare next development iteration
331e35ef release: 4.4.5
c78cfaa5 chore: prepare next development iteration
5bab92c8 release: 4.4.4
17714978 chore: update dependencies
b99a9b07 chore: update dependencies
01a70aa4 chore: prepare next development iteration
7f223895 release: 4.4.3
538e4945 Update fr wordings
7a16cf95 fix(i18n): ajout des clés manquantes exercizer.update et exercizer.subject.desc (fr+en)
7938d653 chore: prepare next development iteration
94cde730 release: 4.4.2
22ffcd56 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
cf5cfa2a ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
552cdb40 fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
990ded3a build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4fb57f55 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
44094024 chore: prepare next development iteration
3c7e3728 release: 4.4.1
eb49b648 i18n(en): traduire les valeurs restées en français (at, From, To, on)
9127e240 i18n(fr): ajouter la clé exercizer.title
a14736cb chore: prepare next development iteration
5f198b71 release: 4.4.0
e249ed4b i18n: sync and translate en.json to English
a403c96b chore: upgrade lib version
237d87e5 chore: set snapshot version after merge
e8da1e91 fix: default blank due date
c9b355f0 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
e98a3dee fix(exercizer): patch version 4.3.6-patched
ab3a767b test: fix nominal script test name
554e4ded chore: add testJs deployment ressource
930fac4c chore: add missing workspace dep
00555f68 chore: adding secured action
fead764f chore: exposing cron tasks to be triggered by api call
32b3d6d2 chore: imrove build
4570d2a9 feat: add probes
03ee33c0 chore: upgrade parent
5b55798f feat: #SRE-5075, add session runtime dependency
7e761278 chore: prepare next development iteration
```

## `modules/explorer`

- **branche référencée** : `(detached)` @ `995011f`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 2.5.7-patched 2.5.8-patched 2.6.13-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/form`

- **branche référencée** : `(detached)` @ `b6ba6e80`
- **base upstream** : `3.1.0`  →  delta = `3.1.0..HEAD` (**49 commit(s)**)
- **tags patched** : 3.1.0-patched 3.1.9-patched 

```
86951546 feat: passer les libs entcore en 6.16.8-patched
7e654814 fix(ci): retirer une dépendance déclarée deux fois dans le pom
bed8758f feat: passer sur entcore 6.16.14-patched
1ce2590c release: 3.1.9
b9a2a7b2 ci: réécrire dev-check-repository à partir de build-and-publish
764e4974 fix(ci): isoler org.entcore:tests dans un profil gatling-it
afa27c3c chore: update Github actions
e518bb61 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
37cfb3f4 chore: bump github action
bba9cbfd chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
1341b820 chore: workflow to include branch and commit information
d7106814 fix(deps): repointe @open-ent/* sur 2.5.30-patched (2.5.31-patched supprime)
dda48bac chore: prepare next development iteration
4f957a99 release: 3.1.8
c45b717c fix(theme): pin @open-ent/bootstrap@2.5.31-patched (correctif eclat-bfc)
1526535d chore: prepare next development iteration
b0cb1267 fix(build): fix node warning and add edifice cli
a547e914 fix(build): upgrade node in docker-compose for angular
8e5d566d fix(build): upgrade tanstack version
5491d9f9 release: 3.1.7
d78badef fix(): #IMPULS-6183, add missing formulaire.response_public_notification i18n key (#632)
75d9c1be chore: prepare next development iteration
d3e9f266 release: 3.1.6
37608fe6 chore: prepare next development iteration
790c33f0 release: 3.1.5
2792c32f chore: prepare next development iteration
aeac9a25 release: 3.1.4
9e7f621f chore: prepare next development iteration
0e0d9e83 release: 3.1.3
2f4d1b55 chore: update dependencies
31bf4570 chore: update dependencies
b2ca031c build:#ENABLING-899 fix copy ressources html notifications
8a24617a chore: prepare next development iteration
cfe332fc release: 3.1.2
0bf3873a fix(public): [#FOR-1029] fix public creation according to rights (#631)
1fb6706d fix(): [FOR-1026, FOR-1027] fix shortanswer result and CSV export (#630)
82261f01 chore: prepare next development iteration
45fa3d06 release: 3.1.1
9d171dd2 ci: call init script before building
e0d8ece4 ci(form): HUSKY=0 pour neutraliser le prepare husky en CI (sous-module sans .git dir)
5d4b1b90 ci: build & publish fat-mods (formulaire + formulaire-public) vers rct-nexus
2283942c fix(theme): getConf(FORMULAIRE) pour récupérer le thème is1d (bandeau)
03f9c871 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
0f5f013e feat(form): migration frontend @edifice.io -> @open-ent (formulaire + formulaire-public)
e8979bab build(patched): 3.1.0-patched sur entcore 6.14.9-patched
58763eaf fix: do not try to log an error when NotifyCron was launched successfully
a0141581 chore: prepare next development iteration
7e1dd204 ci: fix maven upload options when publishing
fb395b17 chore: fix cgi libs version
```

## `modules/forum`

- **branche référencée** : `(detached)` @ `b9a1e41`
- **base upstream** : `2.2.5`  →  delta = `2.2.5..HEAD` (**33 commit(s)**)
- **tags patched** : 2.1.3-patched 2.2.5-patched 

```
f086420 feat: passer les libs entcore en 6.16.8-patched
94ef107 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
e5c75e0 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
e106e46 feat: passer sur entcore 6.16.14-patched
86baa23 fix(ci): isoler org.entcore:tests dans un profil gatling-it
cb3a716 chore: update Github actions
aae5a53 chore: update Github actions
2319a40 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
e42f1c2 chore: bump version actions/setup-node@v7
36be1ab ci: bump softprops/action-gh-release en v3
2f596f8 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
3aad6aa ci: purger entcore du cache Maven avant le build
80a8e0d feat(horaires): soumettre l'écriture du forum aux horaires d'utilisation
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

- **branche référencée** : `3.0.0-patched-dev` @ `ce0f9b4`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.0.0-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/magneto`

- **branche référencée** : `(detached)` @ `3e04d34b`
- **base upstream** : `2.10.0`  →  delta = `2.10.0..HEAD` (**47 commit(s)**)
- **tags patched** : 2.10.0-patched 2.10.7-patched 

```
3e04d34b feat: montée de version magneto 2.10.0-patched -> 2.10.7-patched
c46957cf feat: passer les libs entcore en 6.16.8-patched
6cb8c57f fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
9b0b7b24 fix(ci): retirer une dépendance déclarée deux fois dans le pom
850871c4 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
d093f415 feat: passer sur entcore 6.16.14-patched
01dbc072 release: 2.10.7
3e2fc93b ci: -Dmaven.test.skip=true dans dev-check-repository
f2fb06ce fix(ci): isoler org.entcore:tests dans un profil gatling-it
6fab933e chore: update Github actions
b81cfd00 chore: update Github actions
9a5c616d chore: update Github actions
63fc7020 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
62bd869e chore: bump version actions/setup-node@v7
5d68add8 ci: bump softprops/action-gh-release en v3
1838c06f chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21) (OPENENT-57) [skip ci]
12deaacf build: lockfile suivi et install CI gelée
98237498 fix(deps): migre @edifice.io/{client,react,tiptap-extensions,utilities} vers @open-ent@2.5.30-patched
2da97712 fix(build): fix casual irrevelant error on build
44812c7a chore: prepare next development iteration
fc8cecee release: 2.10.6
749599e6 chore: prepare next development iteration
bcb867a1 release: 2.10.5
00230d6f chore: prepare next development iteration
a974b90a release: 2.10.4
344016cc chore: update transtack version
a67e5b8a chore: update dependencies
bf332495 chore: update dependencies
6d87080b chore: prepare next development iteration
ac63f83a release: 2.10.3
65b7cbaa chore: prepare next development iteration
f6604f73 release: 2.10.2
2c2478eb ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
ad2eadaf chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
13623f5a fix: #ENABLING-1016, use common RedisOptions factory
b7bd9046 fix: set final cgi-learning-hub lib versions to fix front build
0574055d chore: prepare next development iteration
be49c75e release: 2.10.1
9d71aa00 ci(publish): coordonnées du fat-mod parsées depuis le nom tilde (évite mvn help:evaluate qui échouait en CI sur la résolution du parent)
c69a6221 fix(frontend): référence @cgi-learning-hub à 1.13.0 (tag develop cassé : 1.13.0-dev incompatible mui 5.15 / 1.2.0 sans RadioGroup)
73a438b8 ci(build): chaîne build→publish fat-mod (frontend pnpm/Vite + backend Maven, GH Packages + rct-nexus)
a0322d33 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
eeb18b5d fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
4a39dcb8 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
2e2083a7 build(2.10.0-patched): entcore open-ent 6.14.9-patched (fix crash async map cluster) + thème openent runtime (bandeau 1d) + fix menu vue board
d940857c Version 6.14.9-patched
400fb2f8 chore: prepare next development iteration
```

## `modules/mindmap`

- **branche référencée** : `(detached)` @ `3b05fae`
- **base upstream** : `0.10.0`  →  delta = `0.10.0..HEAD` (**616 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.9-patched 3.5.12-patched 

```
3b05fae feat: montée de version mindmap 3.4.9-patched -> 3.5.12-patched
f800ccc feat: passer les libs entcore en 6.16.8-patched
4d6e700 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
2b9709e fix(ci): retirer une dépendance déclarée deux fois dans le pom
9144979 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
e0e266f feat: passer sur entcore 6.16.14-patched
c828b2b fix(ci): isoler org.entcore:tests dans un profil gatling-it
b0ce88b chore: update Github actions
1660a32 chore: update Github actions
b9793f3 chore: update Github actions
3d20d1f fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
86cd9bd chore: bump version actions/setup-node@v7
c55d90a ci: bump softprops/action-gh-release en v3
a25faaf chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
c4ff111 build: lockfile suivi et install CI gelée
f4bb241 fix(deps): aligne @open-ent/* sur 2.5.30-patched
93cafc0 fix(deps): aligne @open-ent/* sur 2.5.30-patched
085916c fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
cf499f1 [51C-inlayout][MODIF-FICHIER-EXISTANT] feat(mindmap): masque le Layout du module en mode embarque
d2d673c [51C-inlayout] feat(mindmap): entree de montage in-layout (mode embed + MemoryRouter)
7d5be7d chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
c712620 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
9ac46f9 fix(i18n): compléter les traductions anglaises manquantes (explorer, dossiers, groupes, notifications)
9968a28 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
f6f1550 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
dbbe10b chore: ignore frontend/.pnpm-store
905362c feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
69e7b13 ci(mindmap): résoudre explorer 2.5.9-patched (lib+tests) depuis GitHub Packages open-ent/explorer ; retour à -DskipTests
befcfef ci(mindmap): build avec -Dmaven.test.skip=true (skip compilation tests) — le jar backend explorer (dép. test) n'est publié nulle part ; hors fat jar de toute façon
48a44ae build: explorerVersion 2.5.7-patched -> 2.5.9-patched (seule version patchée publiée sur GitHub Packages ; dépendance de test, hors fat jar)
ed45419 ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
b1ca305 feat(mindmap): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert — build Docker Java 8
63f4237 fix(build): explorerVersion 2.5-SNAPSHOT -> 2.5.7-patched (SNAPSHOT introuvable en nexus, build cassé)
423f058 build: bump 3.4.9-patched (publication nexus, déploiement)
f97b62e ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
2595406 mindmap: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer, dedupe vite)
dedf31d fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
6ac09fb fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
41648ab chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
97daafb ci: add build-and-publish workflow for GitHub Packages
d8d0c76 release: 3.5.12
a088914 chore: prepare next development iteration
9cc073f release: 3.5.11
975ca70 chore: prepare next development iteration
c32f758 release: 3.5.10
2f51882 chore: prepare next development iteration
40c34ad release: 3.5.9
0e8d742 chore: upgrade react-query version
729b439 chore: prepare next development iteration
a49d55b release: 3.5.8
52b2652 chore: prepare next development iteration
73fa428 release: 3.5.7
37c4cc2 chore: prepare next development iteration
14caba5 release: 3.5.6
32a3e5c chore: prepare next development iteration
fe80360 release: 3.5.5
1bac166 chore: prepare next development iteration
2c6a462 release: 3.5.4
ebc5ccf chore: update dependencies
716d1d1 chore: update dependencies
d6d3b94 chore: prepare next development iteration
d40baad release: 3.5.3
a2af342 chore: prepare next development iteration
4f2c618 release: 3.5.2
0cc6e0a chore: prepare next development iteration
106ca24 release: 3.5.1
d75b33d chore: set snapshot version after merge
fbd9578 chore: prepare next development iteration
607f7ef chore: prepare next development iteration
fc7c844 fix: set right version number for org.entcore.test dependency
149aa4e chore: prepare next development iteration
3b3e94f release: 3.5.0
4879428 chore: upgrade lib version
bf652fd chore: set snapshot version after merge
ddf1fd4 chore: improve build
0e5f64c chore: improve build
5471f2e feat: add probes
33e6fbf chore: prepare next development iteration
e9a6226 release: 3.4.11
00dec01 chore: prepare next development iteration
... (536 commits supplémentaires tronqués)
```

## `modules/mod-image-resizer`

- **branche référencée** : `(detached)` @ `70f7f23`
- **base upstream** : `3.2.3`  →  delta = `3.2.3..HEAD` (**26 commit(s)**)
- **tags patched** : 3.1.0-patched 3.2.3-patched 3.3.1-patched 

```
70f7f23 feat: montée de version mod-image-resizer 3.2.3-patched -> 3.3.1-patched
2321d5c feat: passer les libs entcore en 6.16.8-patched
5b95509 feat: passer sur entcore 6.16.14-patched
8fd0787 chore: update Github actions
ea9d22d chore: update Github actions
d3ad1c2 ci: bump softprops/action-gh-release en v3
729f171 fix(resizer): conserver le format de l'image et gérer la transparence
28bb5ba release: 3.3.1
4d5cae1 chore: update dependencies
8042b23 chore: #ENABLING-1105, lower log level of high quality scaling
3f2f147 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
35d338a ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
f233894 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4eba285 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
c0f6b55 chore: prepare next development iteration
d65b03d release: 3.3.0
24f6beb ci: add build-and-publish workflow
39f60e6 chore: harmonize ent-core-libs version in pom.xml
838f1b6 chore: set snapshot version after merge
19aaab6 fix(mod-image-resizer): patch version 3.2.3-patched
2c4a81d fix: right positions for comma inside template.j2
98979c6 chore: update s3 config
b05b96e chore: upgrade parent
ac16818 ci: speed up maven compilation
6ffc000 feat: #SRE-5075, entcore.commons separation
c8d2970 chore: prepare next development iteration
```

## `modules/mod-json-schema-validator`

- **branche référencée** : `3.0.0-patched-dev` @ `8bd38e8`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**27 commit(s)**)
- **tags patched** : 3.0.0-patched 

```
8bd38e8 ci: bump softprops/action-gh-release en v3
9d500ac chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
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

- **branche référencée** : `4.1.1-patched-dev` @ `d77b550`
- **base upstream** : `4.1.1`  →  delta = `4.1.1..HEAD` (**8 commit(s)**)
- **tags patched** : 3.1.0-patched 4.1.1-patched 

```
d77b550 ci: bump softprops/action-gh-release en v3
90dd7ec chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
a680a0f ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
adf6f8c ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
d6eb1a3 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
cf57879 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
dcd42e8 ci: add build-and-publish workflow
638727b fix(mod-mongo-persistor): patch version 4.1.1-patched
```

## `modules/mod-pdf-generator`

- **branche référencée** : `2.1.1-patched-dev` @ `3cfee5e`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**8 commit(s)**)
- **tags patched** : 2.1.1-patched 3.1.0-patched 

```
3cfee5e ci: bump softprops/action-gh-release en v3
5c9a9ae chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
5b658e6 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
ef0566e ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
10cc91f build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
5acf0c6 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
7892bc4 ci: add build-and-publish workflow
15a8d76 fix(mod-pdf-generator): patch version 2.1.1-patched
```

## `modules/mod-postgresql`

- **branche référencée** : `2.1.1-patched-dev` @ `0b5691c`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**11 commit(s)**)
- **tags patched** : 2.1.1-patched 2.1.1-patched-dev 

```
0b5691c ci: bump softprops/action-gh-release en v3
6a4ed98 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
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

- **branche référencée** : `2.1.3-patched-dev` @ `3595b75`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**10 commit(s)**)
- **tags patched** : 2.1.3-patched 

```
3595b75 ci: bump softprops/action-gh-release en v3
ba7c267 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
6c4edab ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
005baaa ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
22f4c74 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
9360427 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
5f67dd9 feat(sftp): ajoute les actions list et get (download) pour l'alimentation AAF
2a89069 ci: tolerate 409 (already-published) on fat JAR deploy
88656d9 ci: add build-and-publish workflow
0bfd303 fix(mod-sftp): patch version 2.1.3-patched
```

## `modules/mod-sms-sender`

- **branche référencée** : `master` @ `5f519b6`
- **base upstream** : `2.2.0`  →  delta = `2.2.0..HEAD` (**2 commit(s)**)

```
5f519b6 ci: bump softprops/action-gh-release en v3
d59e440 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
```

## `modules/mod-zip`

- **branche référencée** : `3.1.1-patched-dev` @ `7e385a2`
- **base upstream** : `3.2.1`  →  delta = `3.2.1..HEAD` (**13 commit(s)**)
- **tags patched** : 3.1.0-patched 3.1.1-patched 

```
7e385a2 ci: bump softprops/action-gh-release en v3
90a2cf5 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
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

## `modules/open-ent-desktop`

- **branche référencée** : `develop` @ `6ab4e74`
- **base upstream** : `v0.1.2`  →  delta = `v0.1.2..HEAD` (**6 commit(s)**)

```
6ab4e74 chore(release): 0.1.3
86fae05 feat(chat): conversation et appel vidéo dans le compagnon
1179a28 fix urls for ent
7993649 chore: update Github actions
e12e6b4 chore: bump github action for node > 20
46f38c1 chore: bump version actions/setup-node@v7
```

## `modules/pages`

- **branche référencée** : `(detached)` @ `3f3cd0e`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**44 commit(s)**)
- **tags patched** : 2.1.5-patched 2.2.5-patched 

```
3f3cd0e feat: montée de version pages 2.1.5-patched -> 2.2.5-patched
2a2615b feat: passer les libs entcore en 6.16.8-patched
2c26099 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
0f447ab fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
1adf60a feat: passer sur entcore 6.16.14-patched
459b20d release: 2.2.5
00b2302 chore: update Github actions
045586e chore: update Github actions
ce455c1 chore: update Github actions
2db0ed4 chore: bump version actions/setup-node@v7
e00b07a ci: bump softprops/action-gh-release en v3
aeacca8 ci: ajoute le script refresh-open-ent-lock.mjs manquant
e3f1ca8 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
49f4fbf fix(deps): aligne @open-ent/* sur 2.5.30-patched
0c35d0a ci: verrouiller entcore sur une version -patched au build
f0f411a fix(ihm duale): ajouter la vue pages-react.html manquante dans le fat-mod
a37030a chore: prepare next development iteration
b6e3e66 release: 2.2.4
bb65376 chore: prepare next development iteration
1004a0a release: 2.2.3
92bd342 chore: update dependencies
6a0d723 chore: update dependencies
b6b86fa ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
59be554 chore: prepare next development iteration
c88e2ec release: 2.2.2
6df1ec8 feat(51C comparatif): dossiers (CRUD /pages/folder, navigation, déplacement de sites) + corbeille (trashed, restauration, suppression définitive)
08ce8a1 fix(51C comparatif): recherche + métadonnées propriétaire/date + btn-link lisible (thème)
b0055db [51C-migration] feat(pages): incrément 2 — partage de site + défaut React
8384308 [51C-migration] feat(pages): migration React incrément 1 — sites web + pages
8db7f86 feat(58B): droits de modification par page (Cahier multimedia)
abe6d54 chore: pin 2.1.5-patched + entcore 6.14.9-patched (sur base master fr.openent)
7d879bb chore: prepare next development iteration
dc87923 release: 2.2.1
20b7ba1 chore: prepare next development iteration
73894a9 ci: download edifice cli during init
901bc12 release: 2.2.0
a7a2509 chore: upgrade lib version
dc03849 chore: set snapshot version after merge
4320496 ci: fix maven options
fddb7a2 chore: improve build
eb4197b chore: set separation version
0962241 chore: update web utils version
63082b0 feat: add probes
d9dc443 chore: prepare next development iteration
```

## `modules/poll`

- **branche référencée** : `(detached)` @ `c6e8d58`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**31 commit(s)**)
- **tags patched** : 2.1.4-patched 2.2.5-patched 

```
c6e8d58 feat: montée de version poll 2.1.4-patched -> 2.2.5-patched
c0cb22a feat: passer les libs entcore en 6.16.8-patched
f07fd25 feat: passer sur entcore 6.16.14-patched
e734b8a release: 2.2.5
478ebb8 fix(build.sh): ne plus tenter d'installer entcore@<branche-du-module>
5b15cc4 chore: update Github actions
7b089bc chore: update Github actions
83abf83 ci: bump softprops/action-gh-release en v3
4441a6b chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
aabd3bf chore: prepare next development iteration
adecaed release: 2.2.4
e0e028a chore: prepare next development iteration
6c05cf6 release: 2.2.3
d0d837f chore: update dependencies
475a47f chore: update dependencies
83fed39 chore: prepare next development iteration
d191da7 release: 2.2.2
5a27f19 chore: prepare next development iteration
270b2dc release: 2.2.1
488d20a chore: prepare next development iteration
5b35c3b release: 2.2.0
0722570 release: 2.1.6-patched
99c3567 ci: add build-and-publish workflow
e0f4f51 chore: upgrade lib version
721b5e9 chore: set snapshot version after merge
2769e6e feat: change version to patched
2f7213b chore: update build image
c98be89 chore: update build image
8900e3f feat: add probes and runtime mods dependencies
4adeb2b feat: add probes
71b1476 chore: prepare next development iteration
```

## `modules/presences`

- **branche référencée** : `(detached)` @ `8371cf3a`
- **base upstream** : `0.20.8`  →  delta = `0.20.8..HEAD` (**692 commit(s)**)
- **tags patched** : 2.1.9-patched 2.2.10-patched 

```
8371cf3a fix(presences): versionner la feuille de style compilée
f70a3db8 feat: montée de version presences 2.1.9-patched -> 2.2.10-patched
bd70d01c feat: passer les libs entcore en 6.16.8-patched
9766f585 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
082e8b0e fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
90ccb5d0 feat: passer sur entcore 6.16.14-patched
0c92e57d fix(massmailing): ne plus lever de NPE quand le contrôle SQL de démarrage échoue
98706ac2 fix(security): corrige la précédence &&/|| dans AbsenceRight (IDOR)
cc539a7b fix: super-admin voyait toujours 0 sanction (filtre owner_id résiduel)
dabca4c5 fix: super-admin plateforme contourne les droits par structure (registers/statistics/search)
3e35b68d fix: super-admin plateforme contourne les droits par structure du dashboard Pilotage
33e9413d fix: dates tronquées à minuit + total réel jamais exposé (incidents/sanctions)
8bfb048a Revert "fix: dates seules (YYYY-MM-DD) tronquées à minuit dans plusieurs filtres"
ebdd5bf2 fix: dates seules (YYYY-MM-DD) tronquées à minuit dans plusieurs filtres
ea24d1d6 fix(ci): isoler org.entcore:tests dans un profil gatling-it
124b068c chore: update Github actions
6e64673b fix(incidents): fenêtre de dates tronquée à minuit sur le listing/stats sanctions
d93b783a fix(incidents): garde-fou sur student_ids manquant en création de sanction
6e2c02c0 fix(incidents): la borne de fin de fenêtre de dates excluait les incidents du jour même
5c81b255 chore: update Github actions
34000a5a fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
5d4256bd ci: bump softprops/action-gh-release en v3
f7a51a81 fix(security): corrige 2 bypass cross-structure sur les absences collectives
69e45c17 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
02eef665 fix(presences): tableau de bord vie-scolaire toujours à 0 (filterReasons exclut absences/retards)
48e3ca7e fix(repo): supprime le répertoire "?/" qui rend le dépôt inclonable sous Windows
01b873fb fix(deps): aligne @open-ent/* sur 2.5.30-patched (incidents, massmailing, presences, statistics-presences)
cac59ae4 feat(51C): migrations React massmailing (Publipostage+Historique) et statistics-presences (indicateur Global) + tableau de bord presences (appels/présences du jour)
ea3a5d84 feat(51C comparatif): incidents recherche/export CSV/création/bascule traité + date et absents du jour (tableau de bord) + btn-link lisible
ad83f09a feat(incidents/react): migration React — Incidents + Punitions (CCTP 51C)
0c047422 feat(presences/react): écran Dispenses (exemptions) — liste + création
c3fac714 feat(51C presences): ecran de regularisation des absences React
b5e42c7c feat(51C presences): tableau de bord d'accueil React (alertes, appels oublies, declarations parents)
51397a93 feat(51C-migration): presences — registre d'appel (React)
571abf4f [51C-migration] feat(presences): saisie d'absence (écran métier via ADML)
2a5a3226 [51C-migration] feat(presences): réglage « Appels multiples (>1h) » dans les seuils
ba8f52c4 [51C-migration] feat(presences): incrément 3 — CRUD actions + dispositifs
50734d3a [51C-migration] feat(presences): incrément 2 — créer/supprimer un motif d'absence
ebb4e865 [51C-migration] feat(presences): migration React incrément 1 — paramétrage
2b20e973 ci: dev-check en job unique (gulp+maven, sans handoff d'artefact)
c3373881 ci: dev-check-repository fonctionnel (frontend Gulp + backend Maven, remplace legacy)
5760cb24 fix(presences): décompte half-day robuste si end_of_half_day absent
852353bf fix(presences): défaut HALF_DAY si méthode de récupération inconnue (NPE)
02dd0100 feat(presences): rapport d'ouverture des appels par groupe/académie (agrégation des établissements descendants)
f1eee34d feat(presences): e-mails de notification thémés ENT + pilotage par établissement
781faf85 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
4b9ba82c ci(presences): répare étapes publish (GH Packages glob) + nexus (glob tilde)
4f4dad4b ci: corrige publication nexus (presences glob tilde / ressource-aggregator --no-frozen-lockfile)
7834b540 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
8fe9072d build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
306fb7e2 feat(events): endpoint taux de présence établissement
5cb341be fix(incidents): /places double-complétion (placesUsedPromise)
8632a549 feat(events): endpoint vie scolaire non restreint pour le tableau de bord
9952dc21 fix(incidents): cast LIMIT/OFFSET en ::bigint pour PostgreSQL 16
7849c004 fix(presences): cast LIMIT/OFFSET en ::bigint pour PostgreSQL 16
4b180322 fix(presences): repli personnel CPE->DIRECTION->ADML pour l'ouverture des appels
1c2093eb fix(presences): support PostgreSQL 16
1383ac65 fix(ci): add --ignore-engines to yarn install for Node 16 compatibility
3b3c1ed0 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
0f63dcd9 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
45e562ae ci: re-trigger build after entcore-v2 published to GitHub Packages
15e7e356 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
08d6af43 ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
7df70dca fix(presences): cast String event type/reason IDs to integer for bigint columns
114e298d chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
55253aea ci: add build-and-publish workflow for GitHub Packages
270cbd72 add css for incidents, massmailing, presences, stats
dd0a488c fix: change revision to 2.1.9-patched
9f3aad86 fix: manage fields EXCLUDE_ALERT_ABSENCE_NO_REASON, EXCLUDE_ALERT_LATENESS_NO_REASON, EXCLUDE_ALERT_FORGOTTEN_NOTEBOOK
d13fa618 fix: Support date to en format (yyyy-mm-dd)
909e4686 release: 2.2.10
00501ad5 test(common): #ORGA-530, more tests on fix register cron
6426e6c0 fix(common): #ORGA-530 fix register cron
362d7c3e chore: prepare next development iteration
ba869b32 release: 2.2.9
814b1143 chore: prepare next development iteration
4b8b34ab release: 2.2.8
ef8d9157 chore: set snapshot version after merge
9f96797d fix(registry): #ORGA-370 disable export buttons when no class is selected (#388)
b7e97cb1 feat:#ORGA-372 add screeb (#387)
... (612 commits supplémentaires tronqués)
```

## `modules/rack`

- **branche référencée** : `(detached)` @ `bbf76f1`
- **base upstream** : `3.1.7`  →  delta = `3.1.7..HEAD` (**143 commit(s)**)
- **tags patched** : 3.1.6-patched 3.1.7-patched 3.2.10-patched 

```
bbf76f1 feat: montée de version rack 3.1.7-patched -> 3.2.10-patched
ac4762b feat: passer les libs entcore en 6.16.8-patched
a012d99 feat: passer sur entcore 6.16.14-patched
cf26751 fix(frontend): ne plus bundler le CSS de @open-ent/bootstrap
425651d feat(rack): lister et purger le casier d'un compte
ba8f507 release: 3.2.10
e9a01c7 chore: upgrade react-hook-form version
ab41950 chore: bump java version to 21
33bd311 chore: set snapshot version after merge
9594e36 feat: add contextual help
12ff333 chore: prepare next development iteration
b0dbccc chore: set snapshot version after merge
e910824 chore: prepare next development iteration
dec58e4 chore: set snapshot version after merge
bcf03cb fix: add bootstrap shared css for dynamic theme
fb089e1 chore: update package json
484ed18 fix: manage common version
79569f8 chore: prepare next development iteration
1c18e92 release: 3.2.8
484c3df chore: prepare next development iteration
5fc1b13 chore: update Github actions
08fad64 chore: update Github actions
bccbf49 chore: update Github actions
a74ce0a chore: bump version actions/setup-node@v7
6b5f00c ci: bump softprops/action-gh-release en v3
84ed868 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
5d45d48 ci: ajoute le script refresh-open-ent-lock.mjs manquant
52ec036 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
7371aa2 chore: prepare next development iteration
1ebd430 release: 3.2.9
20236aa chore: modify version client rest
2431343 chore: set snapshot version after merge
aada58f chore: prepare next development iteration
0f0657e chore: #PEDAGO-4203, update pnpmlock
ceec3c6 fix: #PEDAGO-4152, add collections item in rack mobile menu with access rights
80b0b7e chore: add package collect and update pnpm lock
da5ae4e fix(deps): aligne @open-ent/* sur 2.5.30-patched (frontend + client/rest)
71515a6 release: 3.2.8
7f65bf7 chore: prepare next development iteration
8e59233 release: 3.2.7
da7e6bb chore: prepare next development iteration
9a1547a release: 3.2.6
af0e440 chore: prepare next development iteration
ed87ad3 release: 3.2.5
b88bcf6 chore: update dependencies
54e94c1 chore: update dependencies
e55c8ba chore: add collect-frontend dep back again
5571ed1 chore: set snapshot version after merge
578c7d9 chore: update pnpm lock
cdda571 chore: prepare next development iteration
cbfe64b chore: prepare next development iteration
0bd3536 chore: fix @edifice.io/react crossed dependency
f02221b chore: update pnpm-lock file
c3ecaea release: 3.2.4
e362470 Update fr wordings
51e846f chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
f2cf510 fix(rack): copie casier->workspace - i18n [[count]] + comptage succes
dc64a1e fix(rack): #2 libelle app 'Rack' -> 'Casier' (app-displayName)
5d801af fix modify .gitignore
408ebb1 chore: prepare next development iteration
b812e30 release: 3.2.3
9fcd8c1 fix: add NODE_AUTH_TOKEN in docker-compose file
3857d2c chore: prepare next development iteration
fc5ef59 release: 3.2.2
f27e7cf ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
263a4f6 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
aca4382 fix(i18n): compléter les traductions anglaises des notifications timeline
f7a905b build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
cd2a5a9 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
d363554 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
9fce6eb chore: prepare next development iteration
6ea1c3d release: 3.2.1
b8040b5 chore: use same version in all package.json
259d57e chore: set snapshot version after merge
8474aef chore: prepare next development iteration
0cfd85f chore: auto update eff
8b8b6e1 chore: update pnpmlock
6227388 chore: add collect into rack
2de4cdf chore: prepare next development iteration
621cd21 ci+deps: auth @open-ent à l'install pnpm + alignement @open-ent/* ^2.5.26
... (63 commits supplémentaires tronqués)
```

## `modules/rbs`

- **branche référencée** : `2.1.7-patched-dev` @ `29c4169`
- **base upstream** : `2.1.7`  →  delta = `2.1.7..HEAD` (**83 commit(s)**)
- **tags patched** : 1.2.0-patched 2.1.4-patched 2.1.7-patched 

```
29c4169 feat(rbs): endpoint de vérification de disponibilité sans droit RBS individuel (point b)
b880718 fix(rbs): un super-admin voyait les types de ressources incomplets ou pas du tout
bd4a85f feat(rbs): interface Accepter/Refuser pour les propositions de réservation Calendar (point B2)
2c223d5 feat(rbs): avertissement EDT dans le formulaire d'événement Calendar
d8925ab Force la largeur du bandeau d'avertissement (!important)
4d3bac5 Sélection par type de ressource dans l'onglet Disponibilité (Angular)
45e4dde Bascule en vue "ce jour" quand une date précise est choisie (Angular)
820be78 Ajoute la sélection directe d'une date dans l'onglet Disponibilité (Angular)
4d674ea Bandeau d'avertissement pleine largeur (pas juste le texte centré)
3d3d817 Gèle la quantité à 0 quand plus aucune ressource n'est disponible
90ef9ab Libellé plus explicite pour le lien Disponibilité du formulaire
59dc8da Centre et met en gras les avertissements "aucune ressource/type" du formulaire
d41e42e Supprime le toast d'erreur doublon/mal formulé (aucune ressource pour l'établissement)
134e81f Corrige un digest AngularJS "already in progress" dans booking-form
1329871 Corrige l'icône Disponibilité (CSS mort) et ajoute la mini-vue au formulaire
b2a0c06 Ajoute l'onglet Disponibilité (EDT+RBS) dans le menu RBS Angular
4098a73 feat(rbs): filtre par période optionnel sur GET /resource/:id/bookings
0adb35b docs(rbs): corrige une affirmation erronée sur la notification (vérifiée OK en dev, mauvaise base mongo consultée)
bd8c6a9 feat(rbs): mécanisme de priorité — la direction réserve directement, l'enseignant en attente est refusé
7062ee8 fix(rbs): la saisie libre "Autres salles à créer" n'avait aucun effet
916def2 feat(rbs): import des réservations depuis l'Emploi du temps, avec resynchronisation intelligente
0294f9d fix(rbs): libellés du formulaire ressource peu clairs — ajout de textes d'aide explicites
c6417ad fix(rbs): capacité/équipements réservés aux salles, association possible dès la création
d79d18e feat(rbs): recensement des ressources — capacité, équipements, matériel mobile, besoin de clé
407b89e fix(ci): évite l'inlining par Vite de l'@import runtime /theme/brand.css
a77d1f5 fix(rbs): réservation silencieuse quand plus aucune quantité disponible sur le créneau
9a0bb26 feat(rbs): auto-validation quand le demandeur peut lui-même valider, avertissement conflit salle EDT, notification agenda d'établissement
f77f915 fix: super-admin plateforme contourne les droits par établissement (RBS)
5f99a8d ci: retirer le mvn test de dev-check-repository
c9bf407 fix(ci): isoler org.entcore:tests dans un profil gatling-it
4eb185c chore: update Github actions
53f3fa2 chore: update Github actions
4325245 chore: bump version actions/setup-node@v7
357f646 ci: bump softprops/action-gh-release en v3
a81ea65 feat(resource-type): scinder la catégorie LABO en physique-chimie et SVT
1324dfb feat(resource-type): écran de sélection (cases + quantité) pour les types standards
e05810d feat(resource-type): ajoute une catégorie de salle (texte libre)
1bf0a2e fix(ci): -Dmaven.test.skip=true au lieu de -DskipTests (testCompile Scala plante sur JDK21)
27a030f fix(rbs): force une couleur par défaut à la création d'une ressource
a1aa3e7 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
bae3a29 fix(rbs): accepter color:null dans les schémas create/updateResource
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
... (3 commits supplémentaires tronqués)
```

## `modules/ressource-aggregator`

- **branche référencée** : `(detached)` @ `5a511fb`
- **base upstream** : `2.3.1`  →  delta = `2.3.1..HEAD` (**520 commit(s)**)
- **tags patched** : 5.2.4-patched 5.3.8-patched 

```
5a511fb feat: montée de version ressource-aggregator 5.2.4-patched -> 5.3.8-patched
464476f feat: passer les libs entcore en 6.16.8-patched
ba60556 feat: passer sur entcore 6.16.14-patched
48f4c06 feat(mediacentre): indexe GAR comme les autres sources (mock ET réel)
2c29455 feat(mediacentre): recherche GAR par mot-clé en mode mock
0fe7ca1 fix(mediacentre): sert toujours le catalogue GAR mock complet + log PMB exploitable
b0ba4fc ci: aligner les workflows sur les autres modules
f2a7b85 fix(ci): isoler org.entcore:tests dans un profil gatling-it
256c44b chore: update Github actions
acd9bbd chore: update Github actions
2ae8a07 feat(mediacentre): bascule config mock/réel pour les ressources GAR
3a77745 fix(mediacentre): filtrer réellement les ressources GAR par établissement
70a2f46 chore: update Github actions
8345016 chore: bump version actions/setup-node@v7
7116a50 ci: bump softprops/action-gh-release en v3
d47e7c5 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
05748bc feat(pmb): réserver un exemplaire au CDI depuis une notice
066d57d fix(header): remplace le hack position:fixed par la vraie règle inline neo
778e469 fix(header): icônes du menu compte minuscules en thème 1d
2a8fd7f fix(deps): aligne @open-ent/* sur 2.5.30-patched
6d87e85 fix(theme): la sidebar mediacentre recouvrait le contenu en thème 1D
72c8568 fix(frontend): afficher PMB dans la navigation par défaut, la recherche et les favoris
fa8a5f2 fix(backend): intégrer PMB aux favoris/pins + retirer GAR de la recherche générale
a15b189 refactor(cron): scheduler amass sans CronTrigger (timer ne se déclenchait jamais)
6a2ec16 Ajout ressource GAR de démo : Cyrano de Bergerac (lelivrescolaire.fr)
445b0de fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
e315d00 ci(ressource-aggregator): dev-check on:[push] (déclenche sur -patched-dev)
cda803e ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
5c2412a chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
8dde434 fix(mediacentre): #1 signets 500->[] (index absent) + skip pins si structure vide
81b7ca7 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
d4d5bed fix(frontend): pin @cgi-learning-hub/* a 1.13.0 (corrige RollupError createSvgIcon)
89a0c79 fix(frontend): build vite en un seul chunk (inlineDynamicImports)
766dd79 ci: corrige publication nexus (presences glob tilde / ressource-aggregator --no-frozen-lockfile)
9f45859 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
65b2cb1 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
1df8c17 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
fff310f fix(mediacentre): cartes en barres fines (--openent-columns) + centrage du contenu et menu en thème 1d
81423fd chore: gitignore artefact de build
ae61122 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
d8a2370 mediacentre: fix runtime require(dayjs/react) de @cgi-learning-hub/ui (plugin vite remplace __require par imports ESM) + commonjsOptions
2a34499 mediacentre: migration @edifice.io -> @open-ent (2.1.2 -> 2.5.22) + alignement peers (react-query 5, react-i18next 14, react 18.3.1) + dedupe vite
0d713bd chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
9c7b095 ci: add build-and-publish workflow for GitHub Packages
c9e704b fix(mediacentre): patch version 5.2.4-patched
30edd70 fix: remove fake ressources in ressources.json
b7de5e4 feat: remove duplicate in ressources.json
205642a fix: change version in pom.xml
e9573a2 feat: add more ressources mock
b934a7b fix: image for gar ressources
96dd5fb fix: mock ressources GAR
9e3378f fix: elsatic version for request with or without _doc
7185e98 release: 5.3.8
15bd2bc chore: prepare next development iteration
b2bf18a release: 5.3.7
d0c6cec fix: signets publiés/épinglés invisibles - route ES search/bulk invalide (CRNA-249)
22ed6e1 chore: prepare next development iteration
581330c release: 5.3.6
515b6ee fix: sidebar overlaps HeaderV2 due to missing header-beta stacking rule
80bf0c5 chore: prepare next development iteration
349f3a2 fix: fix tanstack dependency version
c2df551 release: 5.3.5
71f21d8 fix: remove useless package.json.template
7214c1e chore: prepare next development iteration
0e5627c release: 5.3.4
5d8646c chore: update dependencies
d9aaabf chore: update dependencies
acd1d47 chore: prepare next development iteration
a7b1172 release: 5.3.3
8afd531 chore: prepare next development iteration
7c91c93 release: 5.3.2
1ded81e chore: prepare next development iteration
9c8d502 release: 5.3.1
4b9e5e6 fix: #SRE-5434, add runtime dependency to postgresql
b4f5672 chore: prepare next development iteration
f4bca1d release: 5.3.0
3aae98f chore: upgrade lib version
86d0ae4 chore: set snapshot version after merge
a464f12 ci: fix maven options
540e800 chore: improve build
... (440 commits supplémentaires tronqués)
```

## `modules/rss`

- **branche référencée** : `(detached)` @ `7841db8`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**22 commit(s)**)
- **tags patched** : 2.1.4-patched 2.2.3-patched 

```
7841db8 feat: montée de version rss 2.1.4-patched -> 2.2.3-patched
57294bf feat: passer les libs entcore en 6.16.8-patched
fbaeefb feat: passer sur entcore 6.16.14-patched
9aa576c release: 2.2.3
af02f24 ci: bump softprops/action-gh-release en v3
c96ea62 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
062a582 chore(patched): aligner la version Maven sur 2.1.4-patched
98eb745 chore: prepare next development iteration
ac70507 release: 2.2.2
deec464 chore: update dependencies
242afdf chore: update dependencies
4031f55 chore: prepare next development iteration
f45e3e7 release: 2.2.1
604a884 chore: prepare next development iteration
fc4b072 release: 2.2.0
58e46ad chore: upgrade lib version
57625db chore: set snapshot version after merge
9ac306a ci: add override-theme
6ad47d6 chore: improve build
cefd15c feat: add probes and runtime mods dependencies
8f98db0 feat: add probes
4056440 chore: prepare next development iteration
```

## `modules/school-planner`

- **branche référencée** : `develop` @ `34f7b2b`
- **base upstream** : `1.0.0`  →  delta = `1.0.0..HEAD` (**41 commit(s)**)

```
34f7b2b test(planner): couvre le garde-fou anti-conflit RBS à l'export
ce1c5d4 docs(planner): commentaires simplifiés, concrets et en français
ca85acb feat(planner): exclusivité de salle — contrainte dure opt-in par catégorie (point c)
72fe145 fix(planner): garde-fou anti-conflit RBS juste avant l'écriture à l'export (point a)
234b7db feat: bouton "Sécuriser les salles dans RBS maintenant" après un transfert vers l'EDT
439513f feat(school-planner): endpoint de résolution de catégorie de salle pour le pont EDT
c6c6bb6 fix: callbacks non protégés laissant le job/l'appelant bloqué indéfiniment
a12a512 Revert "fix: sécurise tout le callback solve() contre les exceptions non catchées"
8fb67de fix: sécurise tout le callback solve() contre les exceptions non catchées
065a147 fix(solver): le calcul de résolution restait bloqué indéfiniment à 0s/score null
3ef675b chore: update Github actions
d5a2d5c chore: update Github actions
fdc8cad feat(room-category): scinder LABO en physique-chimie et SVT
d19d96a feat(room-category): association matière -> catégorie de salle éditable
4f0671b fix(tensions): traduit le jour en français dans la bannière de salles (MONDAY -> Lundi)
da2c22a fix(tensions): sépare classes en défaut de couverture vs profs en surcharge
bf63d16 fix(tensions): détecte aussi les classes couvertes par un prof qualifié en surcharge
7ad85fd fix(frontend): garde défensive sur les nouveaux champs de tension
5111606 feat(tensions): précise le signalement (classes impactées + équivalent poste)
2eee126 feat(frontend): affiche les tensions enseignants/salles après un calcul
90a5f66 feat(planner): détecte et signale les tensions enseignants/salles au calcul
3a5c908 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
dc4eb88 fix(solver): corrige teacherWeeklyHoursBalance pour les enseignants à 0 affectation
70c61b1 feat(solver): rééquilibrage du volume horaire hebdomadaire par enseignant
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

- **branche référencée** : `(detached)` @ `2cf217c`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**51 commit(s)**)
- **tags patched** : 2.1.5-patched 2.2.5-patched 

```
2cf217c feat: montée de version search-engine 2.1.5-patched -> 2.2.5-patched
f8219a7 feat: passer les libs entcore en 6.16.8-patched
13e96cd fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
53c0fa7 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
6b3ee40 feat: passer sur entcore 6.16.14-patched
bdb02fb release: 2.2.5
9a47f4b build: passer entcore en 6.14.9-patched
b78132f ci: bump softprops/action-gh-release en v3
68cae70 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
595e2df fix(deps): aligne @open-ent/* sur 2.5.30-patched
d561a23 fix(i18n): libellé "Démarches" pour le type WorkflowHubSearchingEvents
7944915 feat(search): écrans facettes, état vide et accès directs (handoff 1b/1d/1e)
ad0347e fix(search): recherche par préfixe et requête désaccentuée sur OpenSearch
7f0cda0 feat(search): source OpenSearch (index Explorer) dans le moteur de recherche
480331e docs(frontend-ui): corriger le commentaire de bascule IHM
600b18f chore: prepare next development iteration
bfbb160 release: 2.2.4
bc0fd3e chore: update dependencies
73d0f60 chore: update dependencies
088925d chore: prepare next development iteration
b4cf01e release: 2.2.3
3d98ec8 chore: prepare next development iteration
5911cb7 release: 2.2.2
17c6299 [51C-migration] feat(search-engine): bascule runtime react/angular (conf frontend-ui + ?ui=)
1f7e5e7 [51C-migration] feat(search-engine): migration frontend AngularJS -> React
0304bd3 fix(searchengine): timeout réel de la recherche globale (anti « Chargement… » infini)
7bcd1ac fix(searchengine): timeout réel de la recherche globale (anti « Chargement… » infini)
ed7e03b chore: prepare next development iteration
4fa6186 fix: #ENABLING-965, better handling of the timeout
c671319 chore: prepare next development iteration
eb37933 release: 2.2.1
41ce297 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
ed6c2e9 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
de5ce28 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
69255de build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
72e7070 chore: bump version 2.1.5-patched
f25bd28 chore: prepare next development iteration
1b2dc29 release: 2.2.0
cf465a9 ci: add build-and-publish workflow
e21900f chore: upgrade lib version
0007522 chore: set snapshot version after merge
6aa1c52 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
6f0086d fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
f98af21 ci: add build-and-publish workflow for GitHub Packages
e312888 feat: change version to patched
95fdb0e ci: fix maven options
6bdbebe fix: listen on clusterized eventBus
1c6fd14 chore: improve build
11904c1 chore: cleanup pom.xml
a367088 feat: add probes and runtime mods dependencies
c31b0cf chore: prepare next development iteration
```

## `modules/statistics`

- **branche référencée** : `(detached)` @ `cb6cba4`
- **base upstream** : `2.6.0`  →  delta = `2.6.0..HEAD` (**47 commit(s)**)
- **tags patched** : 2.6.0-patched 2.6.4-patched 

```
cb6cba4 feat: montée de version statistics 2.6.0-patched -> 2.6.4-patched
844f498 feat: passer les libs entcore en 6.16.8-patched
ea8f3da fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
5322132 fix(ci): retirer une dépendance déclarée deux fois dans le pom
10478a2 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
04fb195 feat: passer sur entcore 6.16.14-patched
f5686b5 release: 2.6.4
42b6e31 fix(ci): isoler org.entcore:tests dans un profil gatling-it
d7ac1c1 chore: update Github actions
6d281e3 chore: update Github actions
8b6c584 chore: bump version actions/setup-node@v7
c9493fc ci: bump softprops/action-gh-release en v3
2e28c86 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
32c60bf feat(stats): préselection d'établissement via ?structureId= dans l'URL
d9f2544 ci: ajoute publish-dev-tag.yml pour forcer une republication nexus
6316d3b fix(stats): périmètre de fonction pour /stats/structures + sélecteur d'établissement
afe7806 ci: ajoute le script refresh-open-ent-lock.mjs manquant
3bc8f00 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
aec2444 fix(deps): aligne @open-ent/* sur 2.5.30-patched
c1aa289 chore: prepare next development iteration
09fae41 release: 2.6.3
bd50eb8 chore: update dependencies
60aaa9b chore: update dependencies
ff19117 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
2070923 fix: fetch event store and neo4j config from local configuration
73ccaef chore: prepare next development iteration
0b33ff7 release: 2.6.2
9455f4c Update fr wordings
9e818c2 [51C-migration] feat(statistics): incrément 3 — bandeau d'indicateurs clés (KPI)
fd43ae7 [51C-migration] feat(statistics): incrément 2 — sélecteur de granularité (jour/semaine/mois)
fb63024 [51C-migration] feat(statistics): bascule React PAR DÉFAUT
fab17a1 [51C-migration] feat(statistics): migration React incrément 1 — tableau de bord d'usage
064dbfa ci(statistics): fix build sur tag — -Dmaven.test.skip=true (org.entcore:tests introuvable)
adebaf1 fix: #IMPULS-5748 add module assistance TIC
5b9ff9d fix(scram): vertx-pg-client provided + vertx-sql-client provided — fat-jar sans pgclient/scram
f84a3f3 Update fr wordings
7a02795 chore: prepare next development iteration
fd12ae4 release: 2.6.1
6bcbcc5 ci: workflow build & publish fat mod (Gulp + nexus/GitHub Packages)
45ad4f7 fix(i18n): compléter les traductions anglaises manquantes du fichier principal
cb405a3 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
3c9523d fix(stats): index stats_aggregation_idx créé au démarrage
73282fa feat(stats): backend Mongo lit le contrat frontend 2.6.0 (indicator/frequency/entity) -> StatsResponse depuis la collection stats
0c5472e chore: ignore .yarn directory
381b1c9 build: aligne stats sur entcore 6.14.9-patched + version 2.6.0-patched
378f68c chore: prepare next development iteration
748c95a ci: call init before build
```

## `modules/support`

- **branche référencée** : `(detached)` @ `97f9319`
- **base upstream** : `0.18.0`  →  delta = `0.18.0..HEAD` (**634 commit(s)**)
- **tags patched** : 3.1.5-patched 4.0.1-patched 4.1.9-patched 

```
97f9319 feat: montée de version support 4.0.1-patched -> 4.1.9-patched
82dfebc feat: passer les libs entcore en 6.16.8-patched
67de44a fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
7e58d05 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
ac5d0b0 feat: passer sur entcore 6.16.14-patched
f559cd4 fix(ci): isoler org.entcore:tests dans un profil gatling-it
82dbe65 chore: update Github actions
0e03478 chore: update Github actions
eedbcbc chore: update Github actions
18575bc fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
68c5ae7 chore: bump version actions/setup-node@v7
91f7077 ci: bump softprops/action-gh-release en v3
80e85f7 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
9423341 ci: purge du lock @open-ent en rattrapage, plus avant l'install gelée
087cf51 build: lockfile suivi et install CI gelée
51b4b25 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
afc06f2 fix(deps): aligne @open-ent/* sur 2.5.30-patched
4090d69 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
ec30766 chore(support): rebuild frontend (bootstrap sorti du bundle)
8ed0354 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
30e6e2b fix(support): synchroniser pnpm-lock sur le pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H)
3fc2093 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
3fdfa62 fix(support): versionner la coquille SPA view/index.html (fix page blanche /support)
e1f8b92 fix(support): anomalies CCTP #1 escalade, #2 export, #3 routes SPA
63fa8a7 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
209d3d8 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
37b8fc1 ci(support): settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
98f3b1a fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
eea255d build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
22720b2 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
0e23c3b feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
910d0e1 fix(tickets): garde null sur n.profiles (NPE getProfileFromTickets)
4467eef ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
b2f49cb feat(support): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert — build Docker Java 8
71537a9 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
af1b097 support: migration @edifice.io -> @open-ent
67b553e ci: add build-and-publish workflow
2f3d705 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
fdd73c7 i18n: sync and translate en.json to English
1ad2f23 Support Github as issue manager
41bc286 feat(github): resolve school name and UAI from Neo4j in issue body
514a548 fix(sql): cast bug tracker issue id to bigint in INSERT
6e0923e feat(support): add GitHub escalation service
7b90311 fix(support): patch version 4.0.1-patched
90c7b3c release: 4.1.9
9bddef2 chore: prepare next development iteration
56afdbe release: 4.1.8
d36278d fix: INTEG-2104 encode filenames for Zendesk uploads to handle special characters
877e4f2 fix: INTEG-2163 restore profile sorting
ad838b3 fix: INTEG-2123 ensure ticket status handling is consistent when comments are added
cc8e289 fix: INTEG-2079 handle WAITING status correctly during ticket sync with Zendesk
f6d86ff fix: INTEG-2107, display the right issue id when using Support Pivot
6282b74 chore: prepare next development iteration
1284a3a release: 4.1.7
e87011c chore: prepare next development iteration
da4cfeb release: 4.1.6
bca10ce chore: prepare next development iteration
7789a0f release: 4.1.5
ef25509 chore: prepare next development iteration
a69bd5c release: 4.1.4
0b4b30f chore: update dependencies
3672cd6 chore: update dependencies
e9b443d chore: prepare next development iteration
1dfff89 release: 4.1.3
a73a38d chore: prepare next development iteration
d28c307 release: 4.1.2
ad9ee42 fix: INTEG-2103, keep school selection in sync when schoolOptions grows
553be84 fix: INTEG-2072 ensure UTC timezone is set for date formatting in DateHelper
e7ab6d4 Update fr wordings
2aa62eb chore: prepare next development iteration
ea25354 release: 4.1.1
7bf8f15 fix: INTEG-2099, replace newlines characters with <br> in comments
4378be0 fix: INTEG-2093 apply progressive rendering to SearchableDropdown
689d90f fix: INTEG-2084 deduplicate ticket categories by display name
14785f4 chore: prepare next development iteration
c9870a5 ci: call init before build
0c88ddd release: 4.1.0
171a8da chore: upgrade lib version
1785613 chore: set snapshot version after merge
e10551d ci: clean
... (554 commits supplémentaires tronqués)
```

## `modules/timeline-generator`

- **branche référencée** : `(detached)` @ `bbb4ea5`
- **base upstream** : `3.3.7`  →  delta = `3.3.7..HEAD` (**67 commit(s)**)
- **tags patched** : 3.3.6-patched 3.3.7-patched 3.4.8-patched 

```
bbb4ea5 feat: montée de version timeline-generator 3.3.7-patched -> 3.4.8-patched
6003cf8 feat: passer les libs entcore en 6.16.8-patched
f8e3e50 fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
f1ba02a fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
8898401 feat: passer sur entcore 6.16.14-patched
424c73a release: 3.4.8
0e9c41a chore: prepare next development iteration
dc4be45 fix(ci): isoler org.entcore:tests dans un profil gatling-it
231a421 chore: update Github actions
2c24abe chore: update Github actions
1e6f5a5 chore: bump version actions/setup-node@v7
736ba77 ci: bump softprops/action-gh-release en v3
fbefed6 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
cc560f8 ci: ajoute le script refresh-open-ent-lock.mjs manquant
fb842a4 ci: re-résout les @open-ent/* avant l'install (fix 409 GitHub Packages)
63e1b9d fix(deps): aligne @open-ent/* sur 2.5.30-patched
da1fdbc release: 3.4.7
06cfd8a fix(description) : #CO-1872 fix bullet points and listing not displaying (#41)
de5465b chore: ignorer le bundle React (public/tlreact*), reconstruit en CI et par build.sh
b0d11bf fix(theme): la vue explorer suit la charte comme les autres modules
1a3526f feat(react): intégrer l'IHM React au fat-mod
e0bb94f fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
3314528 fix(bouton)survol transparent
67c8dcb chore: prepare next development iteration
3683c26 release: 3.4.6
af41fac chore: prepare next development iteration
deae46e release: 3.4.5
465bc7f chore: prepare next development iteration
124e81e release: 3.4.4
0cff9a2 chore: update dependencies
cf77b0b chore: update dependencies
4537d37 ci: builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
84ef653 chore: prepare next development iteration
3d948aa release: 3.4.3
35120d3 feat(51C comparatif): recherche de frises
d87a4ab fix(51C comparatif): btn-link lisible (thème)
8d3fcf1 [51C-migration] feat(timeline-generator): incrément 2 — partage de frise
689ba75 [51C-migration] feat(timeline-generator): migration React incrément 1 — frises + événements
6a158f9 chore: prepare next development iteration
386fa86 release: 3.4.2
7ce1a05 ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
12d21c8 build: version 3.3.7-patched (alignement fork/déployé + Implementation-Version)
814377e ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
4085b47 fix(i18n): compléter les traductions anglaises manquantes (explorer, événements, dossiers, groupes)
43b1d5e build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
7db98f8 chore: prepare next development iteration
669ca04 release: 3.4.1
314e29b chore: set snapshot version after merge
f9ffe69 chore: prepare next development iteration
e7ebd33 chore: prepare next development iteration
5e6a333 chore: prepare next development iteration
ba85875 release: 3.4.0
585ee81 chore: upgrade lib version
8f58062 chore: set snapshot version after merge
ecce43b chore: improve build
a7056ba chore: set right version for entcore libs
9c19c08 feat: add probes
66fa1dc fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
5e18547 fix(ci): run Gulp via docker run, add Java 8 and GitHub Packages auth
2aba12c chore: prepare next development iteration
1eb3454 release: 3.3.8
9249723 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
d890173 ci: add build-and-publish workflow for GitHub Packages
9933817 chore: set snapshot version after merge
1d32d34 fix: #RSSI-56, sanitize headline and text fields to prevent XSS attacks
d56090a chore: prepare next development iteration
9a13f6a chore: prepare next development iteration
```

## `modules/vie-scolaire`

- **branche référencée** : `(detached)` @ `78d62700`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**70 commit(s)**)
- **tags patched** : 2.1.5-patched 2.2.4-patched 

```
770d5644 feat: passer les libs entcore en 6.16.8-patched
9ef0fbcd feat: passer sur entcore 6.16.14-patched
ff94cc00 release: 2.2.4
1673ae52 fix(vie-scolaire): common/courses bloquait indéfiniment sans filtre classe/groupe
046ffbeb fix: super-admin plateforme contourne AccessIfMyStructure/StructureAdminPersonnalTeacher
d260721f fix: faute de frappe END_DATE_PATTERN ("T23.59Z" -> "T23:59Z")
6c11723b fix(ci): isoler org.entcore:tests dans un profil gatling-it
282e9d94 chore: update Github actions
6af2fc68 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
f9ff3b38 chore: bump version actions/setup-node@v7
a10b9ee8 ci: bump softprops/action-gh-release en v3
10a5439a fix(security): super-admin bloqué sur l'admin Vie Scolaire (Configuration & Initialisation)
f89ce59d chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
dd3710a9 fix(viescolaire): recherche utilisateur insensible à la casse
57d3a6a3 feat: trombinoscope
64f85bcd feat(trombinoscope): affichage/export HTML et PDF par établissement, classe ou groupe
ec7786a4 feat(viescolaire): intègre l'onglet cahier de textes par classe/groupe (MOD11)
841e6edc fix(viescolaire): éviter le NPE dans setParamsServices si coefficient/evaluable/is_visible sont absents
72e76730 fix(viescolaire): borner les tentatives de getTypesOfGroup au lieu d'une boucle infinie
71186e56 fix(entcore): repointe entCoreVersion sur 6.14.9-patched
2d819c9e refactor: retire l'IHM React (migration CCTP 51C abandonnée)
e0302f1b fix: support different format date
1e6861c3 fix(viescolaire): AccessIfMyStructure — autoriser aussi via le scope d'une fonction transversale (ADMIN_INSPECTION/ADMIN_COLLECTIVITE)
f9082912 docs(frontend-ui): corriger le commentaire de bascule IHM
a6c5187a chore(conf): update enable-date for new year
127cf5ff chore: prepare next development iteration
d3429d28 release: 2.2.3
eea991a1 chore: update dependencies
aadf3ed3 chore: update dependencies
ccac5261 ci(vie-scolaire): réactiver le publish rct-nexus (jar complet depuis [B])
34071a76 ci(vie-scolaire): builder le bundle React (sous-projet frontend/ Vite) dans le fat-mod [B]
8e8bf2da ci(vie-scolaire): ne plus publier sur rct-nexus depuis la CI (module dual React)
eb9b569d ci(vie-scolaire): retirer l'étape Vite en CI (aligner sur la convention gulp-only)
9853ae0e ci(vie-scolaire): builder les 2 IHM (Angular gulp + React Vite) dans le fat-mod
c731e109 chore: prepare next development iteration
7dee1f2e release: 2.2.2
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
c44fd832 chore: prepare next development iteration
84491f88 release: 2.2.1
b002d51a ci(fix): Node 20 (sass 1.101/chokidar 5 ESM nécessite require(ESM), KO en Node 18)
ff9015a9 ci(fix): builder le frontend (gulp+sass) avant le package, sinon view/ absent → 500
62156008 ci: chaîne build & publish fat-mod (GitHub Packages + rct-nexus)
1ccb7d4b fix(i18n): compléter les traductions anglaises (736 clés manquantes)
270e8c25 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
66e24d0c fix(timeslot): caster startHour/endHour en ::time dans l'INSERT des créneaux
4a0aef6f chore: prepare next development iteration
5a700379 release: 2.2.0
7b6945f3 chore: upgrade lib version
b1932bf0 chore: set snapshot version after merge
8d643949 feat: change version to patched
14d37023 fix: fix npe cast problem
995adedd ci: fix maven options
63b4cf9c chore: improve build
409d34d5 fix: set right version for entcore.common
d90bf85d feat: add probes
dcbe6e84 chore: prepare next development iteration
```

## `modules/wiki`

- **branche référencée** : `(detached)` @ `dbd912e`
- **base upstream** : `0.16.0`  →  delta = `0.16.0..HEAD` (**892 commit(s)**)
- **tags patched** : 3.5.12-patched 3.5.13-patched 3.6.16-patched 

```
dbd912e feat: montée de version wiki 3.5.13-patched -> 3.6.16-patched
fc0de93 feat: passer les libs entcore en 6.16.8-patched
8c7fbfd fix(ci): réaligner le verrou pnpm sur @open-ent 2.5.30-patched republié
d981028 fix(ci): réaligner le verrou pnpm sur les paquets @open-ent republiés
a6ac14c feat: passer sur entcore 6.16.14-patched
4c8585a fix(ci): isoler org.entcore:tests dans un profil gatling-it
c0fa85d chore: update Github actions
4d8315a chore: update Github actions
8e2ae41 chore: update Github actions
40ceec7 fix(ci): skip test compilation to bypass scala-maven-plugin/JDK21 crash
1585ae1 chore: bump version actions/setup-node@v7
a560e51 ci: bump softprops/action-gh-release en v3
0d2e6c6 chore(ci): bump actions/checkout v4->v6, setup-java v4->v6 (java 21), docker/login-action v3->v4 (OPENENT-57) [skip ci]
1d13e13 build: commiter pnpm-lock.yaml et geler l'install en CI
833b7e6 fix(deps): aligne @open-ent/* sur 2.5.30-patched
2d98c4d chore: retire le gabarit mort view/wiki.html
3d198a6 fix(theme): bootstrap chargé au runtime au lieu d'être bundlé
3d0dfaf chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
f02257c ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
59dcc3b build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
a1f580a ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
b9b2481 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
8e61650 ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
32b8105 feat(wiki): tracking Matomo (@open-ent 2.5.26) + [Matomo] — proxy dashboard, vert préservé
e79f938 i18n(wiki): complete English translations (en.json + timeline)
37a25e0 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
459c67e wiki: maj hash bundle migré @open-ent dans wiki.html (index-DXMW4Zs4.js / index-BO3H2sUv.css)
2eec6ba wiki: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer)
337b97f release: 3.5.13-patched
7373eae ci: add build-and-publish workflow
98791b8 missing wiki html
022ebbf fix(wiki): patch version 3.5.9-patched + entcore 6.14.9-patched
8e64dcf release: 3.6.16
3d1685d chore: prepare next development iteration
1d2c1a3 release: 3.6.15
99e290d chore: set snapshot version after merge
5b370db chore: prepare next development iteration
e73ba12 chore: prepare next development iteration
91ab40b chore: prepare next development iteration
1582df3 release: 3.6.14
769e84a chore: prepare next development iteration
35d0458 release: 3.6.13
d1ef18c chore: set snapshot version after merge
be33b31 chore: prepare next development iteration
a182052 chore: prepare next development iteration
8b13af2 release: 3.6.12
dae66cc fix: add missing ending curly brace
f4f4e8d chore: prepare next development iteration
9e44eb9 release: 3.6.11
3fb1ec1 Update fr wordings
3cb95d7 fix: #PEDAGO-4090, add security if don't have screeb app id
ec372af chore: set snapshot version after merge
5cd3ddf fix: #PEDAGO-3854, show H1 html tag in page content
155704a chore: prepare next development iteration
50b96ef chore: set snapshot version after merge
c5396e7 feat: #PEDAGO-4090, add screeb provider (#131)
125d6c4 chore: update package json
bdcd447 fix: #PEDAGO-4101, add translation for push notif
54fc0e8 fix: #PEDAGO-4083, remove usless security right on dropdown mobile menu
b3b2f98 chore: prepare next development iteration
bcf04c7 release: 3.6.7
561bd1d chore: prepare next development iteration
4186250 chore: prepare next development iteration
e5b57c0 release: 3.6.10
f7a022b chore: upgrade react query and react hook form
036f410 chore: prepare next development iteration
f01a32a release: 3.6.9
7216f07 Update fr wordings
6fef382 chore: set snapshot version after merge
d43694a chore: prepare next development iteration
0320974 fix: #PEDAGO-3941, add emptyscreen unauthorized error
8bf3fee fix: #PEDAGO-4214, add 2 sequences Wiki IA
6d30f3d fix: #PEDAGO-4059, fix rights to update courses in communities
f4d1c2d release: 3.6.8
c744746 fix: uset local "server" map to retrieve wiki's configuration
07a269e release: 3.6.7
61b69f3 chore: prepare next development iteration
c017f76 release: 3.6.6
ec0099c chore: prepare next development iteration
b59ceae release: 3.6.5
... (812 commits supplémentaires tronqués)
```

## `starter`

- **branche référencée** : `6.16.14` @ `1c10435`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 6.14.9-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `static/application-help-2d`

- **branche référencée** : `communities-help-mvp` @ `5457a68`
- **base upstream** : `4.12.7`  →  delta = `4.12.7..HEAD` (**2 commit(s)**)
- **tags patched** : 4.12.7-patched 

```
5457a68 docs: ajouter la fiche d'aide du nouveau module communities (MVP)
cb3d749 docs(rbs): expliquer la modification des paramètres d'une ressource
```

---

**Résumé** : 58 dépôt(s) forké(s)/patché(s) documenté(s) ; 14 dépôt(s) sans delta patched (suivent une branche upstream).

### Comment relire / régénérer
- Mettre à jour les tags upstream : `git submodule foreach 'git fetch --tags origin || true'`
- Régénérer : `./scripts/release/patched-changelog.sh` (copie aussi la page publique open-ent.github.io)
- Lors d'une montée de version d'un module : re-baser/cherry-pick les commits listés ci-dessus sur la nouvelle release upstream avant de re-tagger `X-patched`.
