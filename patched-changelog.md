# Changelog consolidé des forks "-patched"

> Généré par `scripts/patched-changelog.sh` le 2026-07-24 09:47.
> Pour chaque dépôt : commits ajoutés par le fork **par-dessus la dernière release upstream**
> (tag non `-patched` ancêtre du HEAD référencé). Ce sont les commits à re-baser lors d'une montée de version.

## `connectors/gar-connector`

- **branche référencée** : `3.1.4-patched-dev` @ `baa9131`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**4 commit(s)**)
- **tags patched** : 3.1.4-patched 

```
baa9131 feat(gar): export-cron vide => export périodique désactivé
fac1ffa fix(gar): handle String value for pagination-limit config
1bf084e fix: remove setIsolationGroup/setIsolatedClasses incompatible with Vert.x 4.x
2b50475 chore: prepare next development iteration
```

## `connectors/moodle-connector`

- **branche référencée** : `(detached)` @ `8f13164`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**1 commit(s)**)
- **tags patched** : 2.2.4-patched 

```
8f13164 feat: change version to patched
```

## `libs/entcore`

- **branche référencée** : `6.14.9-patched-dev` @ `811310a8d4`
- **base upstream** : `6.14.9`  →  delta = `6.14.9..HEAD` (**6128 commit(s)**)
- **tags patched** : 6.14.9-patched 6.14.9-patched-SNAPSHOT 

```
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
f4adc5d39d fix(conversation): envoi différé — parse sender_context jsonb (String mod-postgresql)
db32e1ac90 feat(conversation): envoi différé de messages
502dfbe9e9 style(conversation): prettier sur useMessagingHours
a3f8bb4600 feat(conversation): matérialise le blocage horaires côté élève
c685b53d6f feat(conversation): horaires d'utilisation de la messagerie
5c33a5bd27 fix(broker): enregistre JavaTimeModule pour sérialiser les Instant des DTO
51b38d945f chore(conversation): build.sh transmet NODE_AUTH_TOKEN au conteneur + revision 6.14.9-patched
157913cf0c feat(conversation): signaler un abus + modération ADML
4594ff0121 Patch indicator mongo
1d1d4597cb fix(session): patch version 6.14.9-patched
2f2f7e4b8f fix(auth): getAuthInfoByCode filtre par code + expiration Java (fix echange OIDC casse par migration vertx4)
e1cdfff948 fix(auth): getAuthInfoByCode filtre par code seul + expiration en Java (le filtre createdAt $date ne marche plus via le persistor vertx4)
e9f39520b0 fix(auth): getAuthInfoByCode utilise $date epoch au lieu de chaine ISO (echange code OIDC casse par migration vertx4, cf WB-2222)
f3996114e1 style(conversation): prettier (imports @open-ent sur une ligne)
d1aab6ba8a feat(conversation): migration frontend @edifice.io -> @open-ent (support data-product 1d)
3473a78f06 feat(timeline): redirect /timeline/timeline to /dashboard/home
4af6ec7179 fix(directory): restore assetPath fallback to serverMap when own config is missing
38f1459742 i18n: translate en.json to English
946bcb030c i18n: sync en.json keys with fr.json across all modules
7e2c814750 i18n(conversation): sync en.json keys with fr.json
9fdf33733a Update write
de1ba00587 fix(portal,directory): disable default super admin + portal fixes
4c1ca73acf fix(ci): delete entire package when only one version exists (GitHub 400 fix)
bfbe8bc5cd fix(ci): add cleanup step to delete existing package versions before re-deploying
e6fa7f324e fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
18ba199c06 ci: add build-and-publish workflow for GitHub Packages
402445879e fix(workspace): port missing i18n keys + fix French values in en.json
c52e61af2b fix(workspace): patch version 6.14.9-patched
59dd143b02 fix(workspace): auto-init UserBook on quota 404 + fix initUserQuota endpoint
74c59dc7bb fix(workspace): auto-init UserBook on quota 404 + fix initUserQuota endpoint
193e6752b7 fix(common): explorer tree
6951d616ae fix:  IPostgresClient event handler
0ad661fe37 fix: manage quota
0c8355f621 chore(portal): add translation
1c8e61fcc0 feat(broker): add direction field (in/out) to spy messages
0d966ab5ba fix(broker): ignore unknown JSON properties on deserialization
c92aed2c99 fix(broker): spy notifyAdminWatchers on outgoing sendRawMessage
ab123968a6 fix(broker): include mongodb-helper via shade filter instead of disabling minimizeJar
e2d15e49d5 fix(broker): disable shade minimizeJar — BaseServer deps accessed via reflection/inheritance
7a65a192d7 fix(broker): close client before super.stop() — prevent IllegalStateException on NATS drain during hot-reload
4f1894b95c fix(auth,portal): patch null-check childTheme + validate theme cookie
0c297cfbe0 fix(auth,portal): patch null-check childTheme + validate theme cookie
8963f8552b fix(auth): patch version 6.14.9-patched
0c4bd52507 fix(auth): patch version 6.14.9-patched
45e9b193c3 fix: generic traduction to support all Open ENT deployment
0f4f0fb4c8 fix: generic traduction to support all Open ENT deployment
40469dd8d2 fix(auth): logo missing on login page — null check on currentTheme + add bare hostname in skins
... (6048 commits supplémentaires tronqués)
```

## `libs/entcore-css-lib`

- **branche référencée** : `(detached)` @ `7063b7d`
- **base upstream** : `4.3.10`  →  delta = `4.3.10..HEAD` (**2 commit(s)**)
- **tags patched** : 4.3.10-patched 

```
7063b7d chore(icon): Livret Sco, add app icon
6ed8271 chore: prepare next development iteration
```

## `libs/generic-icons`

- **branche référencée** : `(detached)` @ `960f4af`
- **base upstream** : `2.2.9`  →  delta = `2.2.9..HEAD` (**13 commit(s)**)

```
960f4af chore: updated assistancetic icon
e01d7c2 chore: add updated assistance tic icon
ee4ee34 chore(icons): update screen time icon
da0868f chore: add assistancetic icon
9b64391 chore: add elea icon
9ba482d chore(icons): INTEG-954 add NEW screen time icon
5315e9b chore: add geogebra, minetest and communities
d632c21 chore(icons): INTEG-954 add screen time icon
a236dda chore: update Readme file
33a1ea0 chore: add votil icon
08f54f4 INTEG-708: add cantine icon
d216927 chore:  INTEG-801 add nabook icon
7e409d5 feat(appointments): [#RDV-50] add Appointments icon
```

## `libs/infra-front`

- **branche référencée** : `4.8.17-patched-dev` @ `15c7179`
- **base upstream** : `4.8.17`  →  delta = `4.8.17..HEAD` (**5 commit(s)**)
- **tags patched** : 4.8.17-patched 

```
15c7179 a11y(RGAA 51H): calendrier — intitules des boutons + <ul> filters non-liste
d51d31b fix(tracking): directive xiti en no-op (Matomo remplace Xiti)
6812702 fix(linker): guard against null/empty app address before indexOf
c85c73d New webpack
a756687 chore: prepare next development iteration
```

## `libs/mongodb-helper`

- **branche référencée** : `(detached)` @ `60e36ca`
- **base upstream** : `3.1.1`  →  delta = `3.1.1..HEAD` (**3 commit(s)**)
- **tags patched** : 3.1.1-patched 

```
60e36ca chore(mongodb-helper): upgrade maven image to 3.8.6-jdk-8
f3a3037 fix(mongodb-helper): patch version 3.1.1-patched
6358878 upgrade edifice-parent
```

## `libs/ode-bootstrap`

- **branche référencée** : `(detached)` @ `f6d2e8a`
- **base upstream** : `1.5.3`  →  delta = `1.5.3..HEAD` (**2 commit(s)**)

```
f6d2e8a chore(icon): Livret Sco, add app icon
764e921 chore: prepare next development iteration
```

## `libs/openent-frontend-framework`

- **branche référencée** : `2.5.30-patched-dev` @ `ecc63f3`
- **base upstream** : `v2.5.30`  →  delta = `v2.5.30..HEAD` (**4 commit(s)**)
- **tags patched** : 2.5.30-patched 

```
ecc63f3 test(55D): insertion d'images par lots (useMediaLibraryEditor)
20874f7 ci(publish): declencher aussi sur les tags *-patched (release du fork Open ENT)
8bab5d2 a11y(RGAA 51H): contraste AA du bootstrap edifice (gris + vert e-primo)
11ff12f fix(55F): reconnaissance vocale — relance auto sur no-speech (mode continu) + test unitaire
```

## `libs/theme-open-ent`

- **branche référencée** : `3.4.10-patched-dev` @ `454a740`
- **base upstream** : `2.3.2`  →  delta = `2.3.2..HEAD` (**789 commit(s)**)
- **tags patched** : 3.4.10-patched 

```
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
83a151e release: 3.4.10
f4a9359 INTEG-1173/ Added assistance Tic logo fix
6b9b0c7 chore: prepare next development iteration
a185195 release: 3.4.9
8e74e9a INTEG-1173/ Added assistance Tic logo
52e0532 chore: prepare next development iteration
8128afd release: 3.4.8
26c8668 chore: prepare next development iteration
7fcf97a release: 3.4.7
8bab616 feat(portal): CLC-55, open carbonio in a new tab
464987e chore: prepare next development iteration
46f2f20 release: 3.4.6
fd6313c feat(navbar): CZ-76, add mailbox icon for Carbonio
7b1ff7b chore: prepare next development iteration
1107bf3 release: 3.4.5
f3be171 chore(icon): ENT13-10, update screen time icon
79cc22d chore: prepare next development iteration
9dc26f1 release: 3.4.4
87214b9 fix(Normandie): SUPPORT-3962 - add displayName in mail's notification
a22efc9 chore: prepare next development iteration
49ad9b9 release: 3.4.3
4e282ac fix(corsican): #SUPPORT-3061 move corsican i18n overrides to corsican projects only
297849b chore: prepare next development iteration
ae09e6d release: 3.4.2
d538623 feat(nati) : SUPPORT-3690 - add new entry for WAYF
a027d7d feature(mail): #COCO-3383 add english template for activation mail (#68)
7e880b1 chore: prepare next development iteration
7caed2e release: 3.4.1
e0e8028 feat(CD84): SUPPORT-3769 - Change text for relative entry on WAYF
0c5a963 chore: prepare next development iteration
7fe07a7 release: 3.4.0
fd78459 feat(Nati): SUPPORT-3690 - add i18n for a new WAYF entry
cee047b fix: #PEDAGO-3215, replace magneto by communities error
be4594d fix: #WB2-1770, fix forget comma in css classes
77c5f5b feat: #WB2-1770, add css for new checkbox and new label
78b223c fix: #WB2-1204, add correct size notification
0a9f475 chore: prepare next development iteration
ed6874f release: 3.3.23
1cef04b chore(icons): INTEG-954 add NEW screen time icon
4d8a545 chore: prepare next development iteration
9c3130a release: 3.3.22
4e9cd8a fix(Guyane): SUPPORT-3435 - modify timeline.mail.logo.src entry for multilingual
5705a7a chore: prepare next development iteration
fd37beb release: 3.3.21
f2e1b11 fix: COCO-1565, send logo to foreground in 8/page layout
92d3595 fix: #COCO-3805 update oneconnect override with link to edifice.io
24c6fb9 fix: COCO-1565, logo NEO en fond sur publipostage 8/page (#67)
1f5c76e chore: prepare next development iteration
d6add78 release: 3.3.20
463d951 fix: COCO-4554, COCO-4570, COCO-4572 add missing icons and change colors
0b49e60 chore(auth-i18n): INTEG-1004 add project name in auth title
97b9c88 chore: prepare next development iteration
db504f9 release: 3.3.19
72ba69f chore(SAAS):SUPPORT-3067 - modify the path for the CD84 logo on first connexion pdf (#65)
3c6674d chore(icons): INTEG-954 add screen time icon
ae0eec0 chore(icons):INTEG-899 ajout icon cantine
a5c67e4 chore: update Readme file
3658ea2 chore(COLIBRI):SUPPORT-3003 - change the logo on illustration file (#66)
1e98db5 chore(ENT77):SUPPORT-3066 - modification of the informations on the smart banner for ENT77 (#64)
693480c chore: prepare next development iteration
a906520 release: 3.3.18
ecc1538 fix: ENABLING-310 add viescolaire
8909e9e chore: prepare next development iteration
dc06862 release: 3.3.17
ea65133 fix(ent77): #COCO-4460 remove zimbra override
cefcdb7 chore: ENABLING-310 change default color off app to match category
7c6ba13 chore: prepare next development iteration
... (709 commits supplémentaires tronqués)
```

## `libs/vertx-cron-timer`

- **branche référencée** : `(detached)` @ `a3b142a`
- **base upstream** : `3.0.0`  →  delta = `3.0.0..HEAD` (**4 commit(s)**)
- **tags patched** : 3.0.0-patched 

```
a3b142a Docker not in root
1676ec5 fix(vertx-cron-timer): patch version 3.0.0-patched
72ab7f7 Bump to edifice-parent 1.2.0
03f8928 Ignore target
```

## `libs/web-utils`

- **branche référencée** : `(detached)` @ `35fdd31`
- **base upstream** : `3.3.2`  →  delta = `3.3.2..HEAD` (**1 commit(s)**)
- **tags patched** : 3.2.2-patched 3.3.2-patched 

```
35fdd31 fix(web-utils): patch version 3.3.2-patched + null-check i18n args
```

## `modules/actualites`

- **branche référencée** : `3.1.5-patched-dev` @ `477d5080`
- **base upstream** : `0.17.1`  →  delta = `0.17.1..HEAD` (**808 commit(s)**)
- **tags patched** : 3.1.4-patched 3.1.5-patched 

```
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
dd29c7cb fix:#COCO-5276 display expiration date if no publication date
62b58238 fix: info edit scroll + merge route type hook + cache issue in update thread
17487d8c fix: #COCO-5116, use public conf parameters for FALC (#217)
9da8fee4 fix: #COCO-4601 add admin/settings to renderview
... (728 commits supplémentaires tronqués)
```

## `modules/appointments`

- **branche référencée** : `1.3.6-patched-dev` @ `a11feb8`
- **base upstream** : `1.3.6`  →  delta = `1.3.6..HEAD` (**4 commit(s)**)
- **tags patched** : 1.3.6-patched 1.3.7-patched 

```
a11feb8 ci: dev-check-repository fonctionnel (frontend pnpm/Vite + backend Maven, remplace legacy)
05fee4f fix(grids): durcir la garde du paramètre states de GET /grids
2642115 chore(conf): consolider les patchs pass-tech sur base officielle 1.3.6
6457ae7 feat: change version to patched
```

## `modules/blog`

- **branche référencée** : `5.4.7-patched-dev` @ `8bcdc65`
- **base upstream** : `1.24.1`  →  delta = `1.24.1..HEAD` (**1014 commit(s)**)
- **tags patched** : 5.4.10-patched 5.4.7-patched 

```
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
c6e9ce8 chore: prepare next development iteration
... (934 commits supplémentaires tronqués)
```

## `modules/cahier-de-textes`

- **branche référencée** : `4.1.7-patched-dev` @ `c42dc65b`
- **base upstream** : `4.1.5`  →  delta = `4.1.5..HEAD` (**24 commit(s)**)
- **tags patched** : 4.1.5-patched 4.1.6-patched 4.1.7-patched 

```
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

- **branche référencée** : `4.2.7-patched-dev` @ `f35b7ac`
- **base upstream** : `4.2.7`  →  delta = `4.2.7..HEAD` (**21 commit(s)**)
- **tags patched** : 4.2.10-patched 4.2.7-patched 

```
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
67e3b94 ci: retirer version pnpm explicite (conflit avec packageManager) + install --no-frozen-lockfile
dd04ae6 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
9a70f06 feat: change version to patched
```

## `modules/collaborative-editor`

- **branche référencée** : `3.3.5-patched-dev` @ `eaf0ac5`
- **base upstream** : `0.9.0`  →  delta = `0.9.0..HEAD` (**232 commit(s)**)
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
6cdcc73 release: 3.3.5
7b95f1b chore: prepare next development iteration
6edb2ff release: 3.3.4
bfb1a7e chore: prepare next development iteration
62bb35e release: 3.3.3
f894148 chore: set snapshot version after merge
f49af29 chore: prepare next development iteration
7514f12 chore: prepare next development iteration
cf4258f chore: prepare next development iteration
308e935 release: 3.3.2
1fe1c07 chore: prepare next development iteration
c5b0450 release: 3.3.1
d1ed9db chore: prepare next development iteration
ff57f6a release: 3.3.0
0e56f8b chore: update edifice-parent in pom
4ae389c fix: export resource result handler
affa138 chore: prepare next development iteration
4e08bfb chore: update dependencies
380ae72 feat: #RBACK-155, #RBACK-117, kubernetes compatibility
6d79cc9 feat(conf): #RBACK-188 add template.j2
5ba779b chore: update dependencies
b78d9c2 chore: prepare next development iteration
0e95e10 release: 3.2.0
6593572 chore: set snapshot version after merge
5f48c97 feat: #PEDAGO-3019, trigger definitive deletion on delete user
311627c feat: #PEDAGO-3019, notify deleted resources on broker
0b47125 feat: #PEDAGO-2699, link into community
06e7f47 fix: #PEDAGO-3305, enable reindex by period
96bf00e chore: prepare next development iteration
b8f0604 chore: prepare next development iteration
f06810e chore: prepare next development iteration
9b02056 release: 3.1.1
ebe72d5 chore: prepare next development iteration
a92d395 release: 3.1.0
92baa04 chore: set snapshot version after merge
3d5cb6d chore: prepare next development iteration
7c0a3c3 chore: prepare next development iteration
adcecaa release: 3.0.8
9286dd7 chore: update Readme file
ee38656 chore: remove xitiSwitch
a708a6e chore: prepare next development iteration
26a5578 release: 3.0.7
95f51d8 chore: prepare next development iteration
170f0f0 release: 3.0.6
c130d0e chore: update dependencies
ba14049 Update fr wordings
3781aa9 chore: prepare next development iteration
cc38f89 release: 3.0.5
446f836 chore: prepare next development iteration
ae29d17 release: 3.0.4
026d14d chore: prepare next development iteration
09261f9 release: 3.0.3
5b80ad4 chore: set snapshot version after merge
fbba993 chore: set version for object storage
144c436 chore: update dependencies
bd165f3 chore: prepare next development iteration
f833d5e release: 3.0.2
db2668e chore: set snapshot version after merge
7b878f4 chore: prepare next development iteration
38257e9 fix: #WB2-2138,  add indexes
f6dea18 fix: #WB2-2138, allow access to pad by name
030fcae fix: #WB2-2481, update text for emptypage consult user
17e1ebb fix: #WB2-2475, remove explorer trad tooltip shared
8733360 chore: prepare next development iteration
7045f72 release: 3.0.1
dc5e9a8 chore: prepare next development iteration
c6cc854 release: 3.0.0
... (152 commits supplémentaires tronqués)
```

## `modules/collaborative-wall`

- **branche référencée** : `3.4.9-patched-dev` @ `a2c5863`
- **base upstream** : `0.10.0`  →  delta = `0.10.0..HEAD` (**767 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.8-patched 3.4.9-patched 

```
a2c5863 [51C-inlayout] feat(collaborative-wall): entree de montage in-layout (mode embed + MemoryRouter)
1a9bf98 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
8b38d3d ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
f82b10d fix(i18n): compléter/corriger les traductions anglaises des notifications timeline
e3dd7df build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
e84f107 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
221be61 feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
6daf2cf ci: pnpm install --no-frozen-lockfile (résout @open-ent/* 2.5.26 publiés sur GitHub Packages)
730c98e feat(collaborativewall): tracking Matomo (@open-ent 2.5.26, proxy dashboard) + vert préservé — v3.4.9
3458792 migration @open-ent for new 1d data product
5452485 ci: passer OPENENT_PACKAGES_TOKEN/NPM_TOKEN/TIPTAP_PRO_TOKEN au pnpm install (fix auth @open-ent cross-repo)
3ff1bf1 collaborativewall: retirer Module Federation, revenir au build standalone
4cca9f1 release: 3.4.9-patched
1001ec0 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
5b269bb i18n: sync and translate en.json to English
2ba328a feat(frontend): Module Federation — expose mount function for dashboard embedding
2358fdd chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
4608ed6 add img
1dbac76 ci: add build-and-publish workflow for GitHub Packages
61d083f fix: change version to -patched
3dd0274 release: 3.4.7
05814df chore: prepare next development iteration
d59037a release: 3.4.6
a165e3c chore: prepare next development iteration
7980485 release: 3.4.5
7d75592 chore: prepare next development iteration
059ff46 release: 3.4.4
f5c908c chore: prepare next development iteration
1fd1efc release: 3.4.3
c4ba8b7 chore: set snapshot version after merge
a2c0bb1 chore: prepare next development iteration
0c8d6b3 chore: prepare next development iteration
0d748f9 chore: #SRE-4685 use Jenkins credentials instead of env variables
03283c7 chore: prepare next development iteration
51f92de release: 3.4.2
6ce08b8 chore: prepare next development iteration
9995c7a release: 3.4.1
15b9bf0 chore: #ENABLING-610 remove charet from package.json
72f225a chore: prepare next development iteration
ba208e7 release: 3.4.0
3424845 chore: update edifice-parent in pom
fb06496 fix: export resource result handler
25ae4c4 chore: prepare next development iteration
7fe2f09 chore: update dependencies
07767f8 chore: update dependencies
2948b3a feat: #RBACK-127 #RBACK-155 #RBACK-117, kubernetes compatibility
82ebc5b chore: prepare next development iteration
72e01c1 release: 3.3.6
20e51fe chore: set snapshot version after merge
d098888 chore: prepare next development iteration
468d998 feat(conf): #RBACK-188 add template.j2
f48ebf8 chore: prepare next development iteration
58eef00 release: 3.3.5
85bb7ce chore: update version
fe5fe32 chore: prepare next development iteration
e5ae5e1 fix: use iso string format for note date fields, fix notes zIndex
8b1e31c chore: prepare next development iteration
d3e3260 chore: prepare next development iteration
0eae4e1 release: 3.3.4
0170d92 chore: prepare next development iteration
68e5910 release: 3.3.3
9bc8364 chore: prepare next development iteration
13a67e6 release: 3.3.2
1799f04 chore: prepare next development iteration
8fe55f5 release: 3.3.1
6055e33 chore: prepare next development iteration
a6e59c8 release: 3.3.0
5d862d1 chore: set snapshot version after merge
b5f580f fix: #PEDAGO-3389, add white space for description modal
842e504 chore: upgrade entcore
168a73b fix: #PEDAGO-3306, use scan instead of keys
692f54e fix: #PEDAGO-3144, fix zindex notes with index map
435341b Revert "fix: #PEDAGO-3144, add zIndex with websocket"
a85fd2c fix: #PEDAGO-3144, add zIndex with websocket
74fecf3 chore: prepare next development iteration
e73d84b fix: #PEDAGO-3144, fix zIndex note with backend
55f6e0d chore: prepare next development iteration
6016625 chore: prepare next development iteration
ebeeb32 release: 3.2.2
fed1fea chore: prepare next development iteration
... (687 commits supplémentaires tronqués)
```

## `modules/community`

- **branche référencée** : `2.2.1-patched-dev` @ `1996873`
- **base upstream** : `2.2.1`  →  delta = `2.2.1..HEAD` (**10 commit(s)**)
- **tags patched** : 2.2.1-patched 

```
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

- **branche référencée** : `2.1.12-patched-dev` @ `07a522ee`
- **base upstream** : `2.1.12`  →  delta = `2.1.12..HEAD` (**28 commit(s)**)
- **tags patched** : 2.1.12-patched 

```
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

- **branche référencée** : `3.1.4-patched-dev` @ `51128be`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.1.4-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/exercizer`

- **branche référencée** : `4.3.6-patched-dev` @ `7a16cf95`
- **base upstream** : `4.3.6`  →  delta = `4.3.6..HEAD` (**12 commit(s)**)
- **tags patched** : 4.2.5-patched 4.3.6-patched 

```
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

- **branche référencée** : `2.5.7-patched-dev` @ `e16be35`
- **base upstream** : `lib-v2.5.23`  →  delta = `lib-v2.5.23..HEAD` (**24 commit(s)**)
- **tags patched** : 2.5.7-patched 2.5.8-patched 2.5.9-patched 

```
e16be35 [51C-migration] ci(explorer): publier lib+tests+fat sur GitHub Packages (merge de 1f659fc dans 2.5.7-patched)
c544d03 [51C-inlayout] fix(explorer): neutralise le decor plein-page en mode embarque
bb7075c feat(explorer): entree de montage in-layout isolee (CCTP 51C-2)
e221a26 chore(deps): pin @open-ent/bootstrap 2.5.30-patched (RGAA 51H contraste)
77789f8 fix(scram): scram:client provided + vertx-sql-client provided — fat-jar sans pgclient/scram
aae3afd ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
50c2ee4 ci: continue-on-error sur publish GH Packages (immuabilité) → la release porte le fat-mod
b54ef59 ci(explorer): NPM_TOKEN + TIPTAP_PRO_TOKEN (sinon .npmrc non parsé -> @open-ent sur npmjs 404)
8b09e08 ci(explorer): pnpm install --no-frozen-lockfile (résolution @open-ent via .npmrc)
346be5e build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
b3c1102 ci(explorer): NODE_AUTH_TOKEN (OPENENT_PACKAGES_TOKEN) pour l'install frontend @open-ent
588efd9 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
0e97b8c feat: capture Sentry/GlitchTip (projet /7) via @open-ent/* 2.5.29 + rebuild frontend
e3946d2 chore(deps): @open-ent/* 2.5.26 -> 2.5.27 (garde favicon theme.basePath)
12532c9 fix(explorer): liste vide au lieu de 500 si l'index OpenSearch n'existe pas
1d426b8 fix(build): base vite '/explorer/public/' en prod (404 du bundle sinon)
08291b6 ci(publish-lib): fournir NODE_AUTH_TOKEN (OPENENT_PACKAGES_TOKEN) à l'install — fix 401 cross-repo sur @open-ent/react
ad3302f chore: gitignore artefact de build
d7a6215 fix(explorer): tracking Matomo proxy dashboard (@open-ent 2.5.26) — remplace l'ancien setSiteId/stats direct cassé
ca60424 deps: @open-ent/* ^2.5.22 -> ^2.5.24 (tracking Matomo publié)
affc252 build(explorer): dist avec tracking Matomo (matomo.js, plus de 404 xiti)
9963da0 build(explorer): dist @open-ent (look 1d/vert, data-product=1d) — cohérent avec la source migrée 715bfce
715bfce feat: migration frontend @edifice.io (fork lié develop-pedago) -> @open-ent 2.5.22 publié (look 1d/vert)
9264896 fix(view): supprime le double préfixe /explorer/public/explorer/public (assets 404)
```

## `modules/forum`

- **branche référencée** : `2.1.3-patched-dev` @ `14804d1`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**11 commit(s)**)
- **tags patched** : 2.1.3-patched 2.1.4-patched 2.1.5-patched 

```
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
- **base upstream** : `3.0.0`  →  delta = `3.0.0..HEAD` (**8 commit(s)**)
- **tags patched** : 3.0.0-patched 3.1.0-patched 

```
664808b ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
49ef643 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
bb0f772 ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
e926e9a build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
95bdaf0 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
48bf837 ci: add build-and-publish workflow for GitHub Packages
5262efa Compatible JDK 21
1520d47 fix(http-proxy): patch version 3.0.0-patched
```

## `modules/magneto`

- **branche référencée** : `(detached)` @ `2c2478e`
- **base upstream** : `2.10.0`  →  delta = `2.10.0..HEAD` (**11 commit(s)**)
- **tags patched** : 2.10.0-patched 

```
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

- **branche référencée** : `3.4.9-patched-dev` @ `6278e38`
- **base upstream** : `0.10.0`  →  delta = `0.10.0..HEAD` (**557 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.9-patched 

```
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
e42e7fd chore: prepare next development iteration
0ac795a chore: update @edifice.io deps
a0a959c feat: #PEDAGO-3019, notify deleted resources on broker
... (477 commits supplémentaires tronqués)
```

## `modules/mod-image-resizer`

- **branche référencée** : `3.2.3-patched-dev` @ `3f2f147`
- **base upstream** : `3.2.3`  →  delta = `3.2.3..HEAD` (**6 commit(s)**)
- **tags patched** : 3.1.0-patched 3.2.3-patched 

```
3f2f147 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
35d338a ci: settings.xml profil github-packages (entcore-v2) pour résoudre fr.openent:app-parent
f233894 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
4eba285 ci: injecte buildNumber/scmBranch (commit + branche) dans le MANIFEST
24f6beb ci: add build-and-publish workflow
19aaab6 fix(mod-image-resizer): patch version 3.2.3-patched
```

## `modules/mod-json-schema-validator`

- **branche référencée** : `3.0.0-patched-dev` @ `4a9bf47`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**25 commit(s)**)
- **tags patched** : 3.0.0-patched 

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
7695953 release: 2.1.1
2d09681 chore: prepare next development iteration
1be3399 release: 2.1.0
47b32ec chore: update edifice-parent in pom
298c953 chore: set next development version
39f79a5 feat: #RBACK-165 #RBACK-162 #RBACK-157 #RBACK-119 #RBACK-117, kubernetes compatibility
8b17316 feat(conf): #RBACK-188 add template.j2
1551a65 chore: update json validator groupId in pom.xml
d5ed6fc chore: update jsonschema in pom.xml
```

## `modules/mod-mongo-persistor`

- **branche référencée** : `4.1.1-patched-dev` @ `a680a0f`
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

- **branche référencée** : `2.1.1-patched-dev` @ `5b658e6`
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

- **branche référencée** : `2.1.1-patched-dev` @ `7afd40f`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**9 commit(s)**)
- **tags patched** : 2.1.1-patched 2.1.1-patched-dev 

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

- **branche référencée** : `2.1.3-patched-dev` @ `6c4edab`
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

## `modules/moodle-connector`

- **branche référencée** : `(detached)` @ `61b32fa`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**0 commit(s)**)
- **tags patched** : 2.2.4-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/pages`

- **branche référencée** : `2.1.5-patched-dev` @ `b6b86fa`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**16 commit(s)**)
- **tags patched** : 2.1.5-patched 

```
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

- **branche référencée** : `2.1.4-patched-dev` @ `d3a052f`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**12 commit(s)**)
- **tags patched** : 2.1.4-patched 

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

- **branche référencée** : `2.1.9-patched-dev` @ `a2eb6196`
- **base upstream** : `0.20.8`  →  delta = `0.20.8..HEAD` (**607 commit(s)**)
- **tags patched** : 2.1.9-patched 

```
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
50d8d86f chore: update dependencies
ca7167ab chore: prepare next development iteration
... (527 commits supplémentaires tronqués)
```

## `modules/rack`

- **branche référencée** : `3.1.7-patched-dev` @ `51e846f`
- **base upstream** : `3.1.7`  →  delta = `3.1.7..HEAD` (**23 commit(s)**)
- **tags patched** : 3.1.6-patched 3.1.7-patched 

```
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

- **branche référencée** : `2.1.7-patched-dev` @ `9b33319`
- **base upstream** : `2.1.7`  →  delta = `2.1.7..HEAD` (**29 commit(s)**)
- **tags patched** : 1.2.0-patched 2.1.4-patched 2.1.7-patched 

```
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

- **branche référencée** : `5.2.4-patched-dev` @ `ae33dcf`
- **base upstream** : `2.3.1`  →  delta = `2.3.1..HEAD` (**462 commit(s)**)
- **tags patched** : 5.2.4-patched 

```
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
e2595ba release: 5.2.4
80ba00a chore: #SRE-4685 use Jenkins credentials instead of env variables
467005a chore: prepare next development iteration
8f76106 release: 5.2.3
3f82f27 chore: update edifice-parent in pom
7faf013 chore: prepare next development iteration
2cc33a2 release: 5.2.2
53c56d4 chore: prepare next development iteration
639fa28 release: 5.2.1
79f773c chore: prepare next development iteration
621adfc release: 5.2.0
65d0b64 chore: set next development version
c73abf4 ci: add missing init function
3c8fadd ci: set docker env var before running
8fbb9f2 chore: update dependencies
68e942f chore: update dependencies
9416015 feat: #RBACK-117, zookeeper migration
29d3719 feat(conf): #RBACK-188 add template.j2
f4813c9 chore: update dependencies
2798fcb chore: update dependencies
5c0eb0e chore: update dependencies
4ed568d chore: prepare next development iteration
316a9c5 release: 5.1.9
4f350fa chore: prepare next development iteration
ebd1c83 release: 5.1.8
3d7a664 fix(gar-resources): #MED-383 retrieve GAR resources depending on structure (#171)
37d1931 chore: prepare next development iteration
1e22151 release: 5.1.7
afcbcc6 fix: remove old libs from pakage.json
217d8b1 fix: DATA-429 add event when access gar resource
231f20f chore: update dependencies
c6fccea fix(notif): [#MED-371] fix push notif text on mobile device
2488cbe chore: prepare next development iteration
fd4265b release: 5.1.6
9ef7336 feat(sql) : added default levels for new platforms
aaa5fa6 chore: update dependencies
3820b3a fix: fix conf template
4f178a6 chore: prepare next development iteration
ae857ab release: 5.1.5
84d7363 chore: update edifice-parent in pom
65333e4 chore: update edifice-parent in pom
032d3bc fix(pins): #MED-378 fix display of hightlight pins (#170)
639dc55 fix(moodle): fix moodle search
aa6ecaa feat(pins): #MED-378 add conf param for highlight text (#169)
284c644 fix: #MED-291 change color and use edifice button
1289fec feat(error-page): #MED-291 Implement error page for 404 or code errors (#168)
2e849e1 fix(signet): #MED-375 update favorites when signet is updated (#167)
d3099f2 feat(notif): #MED-373 restrict Moodle resources access to teachers and personnels only (#166)
3541acd fix(notif): #MED-371 mobile notif for new pin (#165)
50a1954 feat(moodle): #MED-356 add duplication for moodle resources (#164)
52c7845 fix(notif): #MED-354 restrict new pin notifs to users with MediaCentre access (#163)
d937d23 chore: prepare next development iteration
... (382 commits supplémentaires tronqués)
```

## `modules/rss`

- **branche référencée** : `(detached)` @ `b34873e`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**6 commit(s)**)
- **tags patched** : 2.1.4-patched 

```
b34873e ci: -DbuildNumber/-DscmBranch au build (SCM-Branch au MANIFEST, fini UNKNOWN)
59c3843 ci: publication du fat-mod sur rct-nexus (classifier=fat) — chaîne CI→nexus→launcher
9755253 build: parent io.edifice:app-parent -> fr.openent:app-parent (Implementation-Version au MANIFEST)
7143503 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
303baaf fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
085e3ac ci: add build-and-publish workflow for GitHub Packages
```

## `modules/search-engine`

- **branche référencée** : `2.1.5-patched-dev` @ `17c6299`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**14 commit(s)**)
- **tags patched** : 2.1.5-patched 

```
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

- **branche référencée** : `2.6.0-patched-dev` @ `ff19117`
- **base upstream** : `2.6.0`  →  delta = `2.6.0..HEAD` (**14 commit(s)**)
- **tags patched** : 2.6.0-patched 

```
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

- **branche référencée** : `4.0.1-patched-dev` @ `8014cc4`
- **base upstream** : `0.18.0`  →  delta = `0.18.0..HEAD` (**567 commit(s)**)
- **tags patched** : 3.1.5-patched 4.0.1-patched 4.0.2-patched 4.0.2-patched-divergent-backup 

```
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
9ff960e fix: INTEG-1395, export tickets now export all tickets
e4695bf fix: INTEG-1411, display the right date and time accross whole app
a8cd09a refactor: INTEG-1399, INTEG-1344, hide table toolbar for non admin and always display it for admin
b9b42e5 feat: INTEG-1363, reopen ticket when adding comment to resolved or closed ticket
442bdc4 fix: INTEG-1390, handle UTC date string to display right date and time
... (487 commits supplémentaires tronqués)
```

## `modules/timeline-generator`

- **branche référencée** : `3.3.7-patched-dev` @ `4537d37`
- **base upstream** : `3.3.7`  →  delta = `3.3.7..HEAD` (**14 commit(s)**)
- **tags patched** : 3.3.6-patched 3.3.7-patched 

```
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

- **branche référencée** : `2.1.5-patched-dev` @ `ccac5261`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**27 commit(s)**)
- **tags patched** : 2.1.5-patched 

```
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

## `modules/wiki`

- **branche référencée** : `3.5.13-patched-dev` @ `8986ae4`
- **base upstream** : `0.16.0`  →  delta = `0.16.0..HEAD` (**765 commit(s)**)
- **tags patched** : 3.5.12-patched 3.5.13-patched 3.5.9-patched 

```
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
9e0255d chore: prepare next development iteration
ee89395 Update fr wordings
df3098e feat(conf): #RBACK-188 add template.j2
... (685 commits supplémentaires tronqués)
```

## `static/application-help-1d`

- **branche référencée** : `4.12.4-patched-dev` @ `478bf82`
- **base upstream** : `4.12.4`  →  delta = `4.12.4..HEAD` (**0 commit(s)**)
- **tags patched** : 4.12.4-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `static/application-help-2d`

- **branche référencée** : `4.12.7-patched-dev` @ `97c7a49`
- **base upstream** : `4.12.7`  →  delta = `4.12.7..HEAD` (**0 commit(s)**)
- **tags patched** : 4.12.7-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

---

**Résumé** : 51 dépôt(s) forké(s)/patché(s) documenté(s) ; 8 dépôt(s) sans delta patched (suivent une branche upstream).

### Comment relire / régénérer
- Mettre à jour les tags upstream : `git submodule foreach 'git fetch --tags origin || true'`
- Régénérer : `./scripts/patched-changelog.sh` (copie aussi la page publique open-ent.github.io)
- Lors d'une montée de version d'un module : re-baser/cherry-pick les commits listés ci-dessus sur la nouvelle release upstream avant de re-tagger `X-patched`.
