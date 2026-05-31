# Changelog consolidé des forks "-patched"

> Généré par `scripts/patched-changelog.sh` le 2026-05-31 11:53.
> Pour chaque dépôt : commits ajoutés par le fork **par-dessus la dernière release upstream**
> (tag non `-patched` ancêtre du HEAD référencé). Ce sont les commits à re-baser lors d'une montée de version.

## `connectors/gar-connector`

- **branche référencée** : `3.1.4-patched-dev` @ `fac1ffa`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**3 commit(s)**)
- **tags patched** : 3.1.4-patched 

```
fac1ffa fix(gar): handle String value for pagination-limit config
1bf084e fix: remove setIsolationGroup/setIsolatedClasses incompatible with Vert.x 4.x
2b50475 chore: prepare next development iteration
```

## `connectors/moodle-connector`

- **branche référencée** : `(detached)` @ `21ce8ee`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**1 commit(s)**)

```
21ce8ee chore: prepare next development iteration
```

## `libs/entcore`

- **branche référencée** : `6.14.9-patched-dev` @ `a234bc41a`
- **base upstream** : `6.14.9`  →  delta = `6.14.9..HEAD` (**23 commit(s)**)
- **tags patched** : 6.14.9-patched 6.14.9-patched-SNAPSHOT 

```
a234bc41a feat(timeline): redirect /timeline/timeline to /dashboard/home
0a4645fe1 fix(directory): restore assetPath fallback to serverMap when own config is missing
2f69afbbb i18n: translate en.json to English
6a6735378 i18n: sync en.json keys with fr.json across all modules
ac0f45498 i18n(conversation): sync en.json keys with fr.json
038e882ce Update write
56141f317 fix(portal,directory): disable default super admin + portal fixes
1c87a09db fix(ci): delete entire package when only one version exists (GitHub 400 fix)
9742ee809 fix(ci): add cleanup step to delete existing package versions before re-deploying
392a79209 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
ff6fe1ee5 ci: add build-and-publish workflow for GitHub Packages
5466c30e1 fix(workspace): port missing i18n keys + fix French values in en.json
f746b7a26 fix(workspace): patch version 6.14.9-patched
02a4bc636 fix(workspace): auto-init UserBook on quota 404 + fix initUserQuota endpoint
4f1894b95 fix(auth,portal): patch null-check childTheme + validate theme cookie
0c4bd5250 fix(auth): patch version 6.14.9-patched
0f4f0fb4c fix: generic traduction to support all Open ENT deployment
3ff4df904 fix(auth): logo missing on login page — null check on currentTheme + add bare hostname in skins
268011f05 fix: generic traduction to support all Open ENT deployment
3f705800b fix(portal): add missing i18n keys (add.attachment, homepage.widget.last-infos-list)
75943af06 fix: translation
53488994e fix: I18 for App registry
76ab2de94 fix(conversation): boolean = character varying error in count query
```

## `libs/entcore-css-lib`

- **branche référencée** : `(detached)` @ `7063b7d`
- **base upstream** : `4.3.10`  →  delta = `4.3.10..HEAD` (**2 commit(s)**)

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

- **branche référencée** : `4.8.17-patched-dev` @ `6812702`
- **base upstream** : `4.8.17`  →  delta = `4.8.17..HEAD` (**3 commit(s)**)
- **tags patched** : 4.8.17-patched 

```
6812702 fix(linker): guard against null/empty app address before indexOf
c85c73d New webpack
a756687 chore: prepare next development iteration
```

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

- **branche référencée** : `main` @ `e2598ff`
- **base upstream** : `v2.5.21`  →  delta = `v2.5.21..HEAD` (**3 commit(s)**)

```
e2598ff ci: rename @edifice.io->@open-ent dans TOUS les package.json (apps inclus) pour le re-link
4e74d7b ci: re-pnpm install apres rename (resout workspace:* @open-ent au publish)
0f592af ci: fix pnpm/action-setup (retire version, lit packageManager)
```

## `libs/theme-open-ent`

- **branche référencée** : `develop` @ `8973522`
- **base upstream** : `3.4.10`  →  delta = `3.4.10..HEAD` (**11 commit(s)**)

```
8973522 Improve theme openent3
8558ddc nouvelle version image
7cdc965 fix image
dae8add Add logo for openent1d and openent3
ba99b14 feat: create new 1d theme
ec833ba chore: translation
4af9094 add theme openent3
e474f80 add theme openent3
236920d chore: prepare next development iteration
2eaa9e0 add openent overrides
71cff8d fix: remove blank in logo
```

## `libs/vertx-cron-timer`

- **branche référencée** : `3.0.0-patched-dev` @ `a3b142a`
- **base upstream** : `3.0.0`  →  delta = `3.0.0..HEAD` (**4 commit(s)**)
- **tags patched** : 3.0.0-patched 

```
a3b142a Docker not in root
1676ec5 fix(vertx-cron-timer): patch version 3.0.0-patched
72ab7f7 Bump to edifice-parent 1.2.0
03f8928 Ignore target
```

## `libs/web-utils`

- **branche référencée** : `3.3.2-patched-dev` @ `35fdd31`
- **base upstream** : `3.3.2`  →  delta = `3.3.2..HEAD` (**1 commit(s)**)
- **tags patched** : 3.3.2-patched 

```
35fdd31 fix(web-utils): patch version 3.3.2-patched + null-check i18n args
```

## `modules/actualites`

- **branche référencée** : `3.1.4-patched-dev` @ `7d07e3b2`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**5 commit(s)**)
- **tags patched** : 3.1.4-patched 3.1.5-patched 

```
7d07e3b2 actualites: migration @edifice.io -> @open-ent
7b2efb67 ci: add build-and-publish workflow
aee9f68e fix pnpm
56e57ece fix(actualites): cast boolean fields to ::boolean in INSERT/UPDATE queries
75c9e6ed feat: change version to patched
```

## `modules/appointments`

- **branche référencée** : `1.3.6-patched-dev` @ `a0ecfac`
- **base upstream** : `1.3.6`  →  delta = `1.3.6..HEAD` (**3 commit(s)**)
- **tags patched** : 1.3.6-patched 

```
a0ecfac fix: suppot PostgresSQL 16
e26b4a7 MAnage PostgreSQ types
6457ae7 feat: change version to patched
```

## `modules/blog`

- **branche référencée** : `5.4.7-patched-dev` @ `8373d0c`
- **base upstream** : `5.4.7`  →  delta = `5.4.7..HEAD` (**9 commit(s)**)
- **tags patched** : 5.4.10-patched 5.4.7-patched 

```
8373d0c blog: build standalone propre + migration @open-ent/explorer
fe4150b ci: definir NPM_TOKEN/TIPTAP_PRO_TOKEN a l'install (parse .npmrc -> routage @open-ent)
9dfdf96 ci: auth GitHub Packages (@open-ent) pour l'install frontend
5f6d761 feat(blog): @open-ent depuis GitHub Packages + bootstrap externe
0eda39b ci: add build-and-publish workflow
4120023 i18n: sync and translate en.json to English
52244cf allowReplies by default
714dd3a update view with last js version
3da9c6f feat: change version to patched
```

## `modules/cahier-de-textes`

- **branche référencée** : `4.1.5-patched-dev` @ `b45a7427`
- **base upstream** : `4.1.5`  →  delta = `4.1.5..HEAD` (**3 commit(s)**)
- **tags patched** : 4.1.5-patched 

```
b45a7427 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
3ba9e2ff ci: add build-and-publish workflow for GitHub Packages
ce93535d fix(sql): cast date parameters to ::date to fix PostgreSQL type mismatch
```

## `modules/calendar`

- **branche référencée** : `dev` @ `36f32be`
- **base upstream** : `4.2.9`  →  delta = `4.2.9..HEAD` (**6 commit(s)**)

```
36f32be chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6585792 ci: add build-and-publish workflow for GitHub Packages
2d9731e chore: prepare next development iteration
7da35e5 release: 4.2.10
5af977f #COCO-5740 : add watcher (#253)
09cb4ca chore: prepare next development iteration
```

## `modules/collaborative-editor`

- **branche référencée** : `3.3.5-patched-dev` @ `b1e75fe`
- **base upstream** : `3.3.5`  →  delta = `3.3.5..HEAD` (**8 commit(s)**)
- **tags patched** : 3.3.5-patched 

```
b1e75fe feat(collaborative-editor): add etherpad-public-url support
a3c2fc2 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
9acba0b i18n: sync and translate en.json to English
8785bd5 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
a5b52aa fix(collaborative-editor): patch version 3.3.5-patched + i18n timeline en
bf07fd4 ci: add build-and-publish workflow for GitHub Packages
10a82bb release: 3.3.6
0ce213e chore: prepare next development iteration
```

## `modules/collaborative-wall`

- **branche référencée** : `3.4.7-patched-dev` @ `854fe5a`
- **base upstream** : _aucun tag release ancêtre trouvé_ (fork à histoire disjointe ?)
- **tags patched** : 3.4.7-patched 3.4.8-patched 3.4.9-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/competences`

- **branche référencée** : `2.1.12-patched-dev` @ `6da21b10`
- **base upstream** : `2.1.12`  →  delta = `2.1.12..HEAD` (**6 commit(s)**)
- **tags patched** : 2.1.12-patched 

```
6da21b10 fix(competences): patch version 2.1.12-patched
4c572695 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6e53b90f ci: add build-and-publish workflow for GitHub Packages
b9003644 fix(competences): patch version 2.1.12-patched
cde1b121 fix: BulletinWorker NPE when neo4jConfig is JSON null string
d4f3f471 chore: prepare next development iteration
```

## `modules/edt`

- **branche référencée** : `master` @ `1b0aceb`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**11 commit(s)**)

```
1b0aceb feat(edt): EDT→RBS bridge — sync course bookings to RBS on creation
62aa1d1 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
aa47d07 i18n: translate en.json to English
db3a0d7 i18n: sync en.json keys with fr.json
5685ad6 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
1f3e135 fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
00b8ef4 ci: re-trigger build after entcore-v2 published to GitHub Packages
e8200f2 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
381aa5a ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
89e1b45 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
3b20267 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/exercizer`

- **branche référencée** : `4.3.6-patched-dev` @ `e8da1e91`
- **base upstream** : `4.3.6`  →  delta = `4.3.6..HEAD` (**3 commit(s)**)
- **tags patched** : 4.2.5-patched 

```
e8da1e91 fix: default blank due date
c9b355f0 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
e98a3dee fix(exercizer): patch version 4.3.6-patched
```

## `modules/explorer`

- **branche référencée** : `2.5.7-patched-dev` @ `1a4f9ca`
- **base upstream** : `lib-v2.5.23`  →  delta = `lib-v2.5.23..HEAD` (**0 commit(s)**)
- **tags patched** : 2.5.7-patched 

_Aucun commit au-dessus de la base (ou base introuvable)._

## `modules/forum`

- **branche référencée** : `dev` @ `4b077e8`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**4 commit(s)**)

```
4b077e8 ci: add build-and-publish workflow for GitHub Packages
855584f chore: prepare next development iteration
9dd8504 release: 2.1.4
d7a4e88 chore: prepare next development iteration
```

## `modules/http-proxy`

- **branche référencée** : `3.0.0-patched-dev` @ `48bf837`
- **base upstream** : `3.0.0`  →  delta = `3.0.0..HEAD` (**3 commit(s)**)
- **tags patched** : 3.0.0-patched 

```
48bf837 ci: add build-and-publish workflow for GitHub Packages
5262efa Compatible JDK 21
1520d47 fix(http-proxy): patch version 3.0.0-patched
```

## `modules/mindmap`

- **branche référencée** : `develop` @ `a6cd76f`
- **base upstream** : `3.4.9`  →  delta = `3.4.9..HEAD` (**6 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.9-patched 

```
a6cd76f mindmap: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer, dedupe vite)
0d1d6c0 fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
1e2f82c fix(ci): Java 8, GitHub Packages auth, entcore_version parameter, branch triggers
9d460f0 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
75f8e4d ci: add build-and-publish workflow for GitHub Packages
83440eb chore: prepare next development iteration
```

## `modules/mod-image-resizer`

- **branche référencée** : `3.2.3-patched-dev` @ `19aaab6`
- **base upstream** : `3.2.3`  →  delta = `3.2.3..HEAD` (**1 commit(s)**)
- **tags patched** : 3.2.3-patched 

```
19aaab6 fix(mod-image-resizer): patch version 3.2.3-patched
```

## `modules/mod-json-schema-validator`

- **branche référencée** : `3.0.0-patched-dev` @ `6ce1f54`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**7 commit(s)**)
- **tags patched** : 3.0.0-patched 

```
6ce1f54 ci: add build-and-publish workflow for GitHub Packages
e1d08fa set default user for docker
2cdfddb fix(mod-json-schema-validator): keep app-parent, revert 3.0.2 upgrade (Java17+new API required)
beeec35 fix(mod-json-schema-validator): use open-ent parent, java17, revert incompatible 3.0.2 upgrade
09ec239 fix(mod-json-schema-validator): patch version 3.0.0-patched
7b15cca update pom.xml
acb977f fix: support JDK 21 and pattern
```

## `modules/mod-mongo-persistor`

- **branche référencée** : `4.1.1-patched-dev` @ `638727b`
- **base upstream** : `4.1.1`  →  delta = `4.1.1..HEAD` (**1 commit(s)**)
- **tags patched** : 4.1.1-patched 

```
638727b fix(mod-mongo-persistor): patch version 4.1.1-patched
```

## `modules/mod-pdf-generator`

- **branche référencée** : `2.1.1-patched-dev` @ `15a8d76`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**1 commit(s)**)
- **tags patched** : 2.1.1-patched 

```
15a8d76 fix(mod-pdf-generator): patch version 2.1.1-patched
```

## `modules/mod-postgresql`

- **branche référencée** : `2.1.1-patched-dev` @ `d642192`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**4 commit(s)**)
- **tags patched** : 2.1.1-patched 

```
d642192 fix(sql): résilience démarrage + montée HikariCP 5.1.0 / JDK 21
d00ac64 ci: add build-and-publish workflow
352df44 manage other type for PostgreSQL > 14
17c1cb4 fix(sql): handle Boolean and Long types in SqlPersistor.prepared()
```

## `modules/mod-sftp`

- **branche référencée** : `2.1.3-patched-dev` @ `b00088f`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**2 commit(s)**)
- **tags patched** : 2.1.3-patched 

```
b00088f ci: add build-and-publish workflow
0bfd303 fix(mod-sftp): patch version 2.1.3-patched
```

## `modules/mod-zip`

- **branche référencée** : `3.1.1-patched-dev` @ `3134bc0`
- **base upstream** : `3.2.1`  →  delta = `3.2.1..HEAD` (**2 commit(s)**)
- **tags patched** : 3.1.1-patched 

```
3134bc0 fix: fix version typo
660d995 fix: change version to -patched
```

## `modules/pages`

- **branche référencée** : `master` @ `7f70532`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**1 commit(s)**)

```
7f70532 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/poll`

- **branche référencée** : `master` @ `b170ec7`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**1 commit(s)**)

```
b170ec7 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/presences`

- **branche référencée** : `2.1.9-patched-dev` @ `9abd0bad`
- **base upstream** : `2.1.9`  →  delta = `2.1.9..HEAD` (**14 commit(s)**)
- **tags patched** : 2.1.9-patched 

```
4703a03d fix(presences): support PostgreSQL 16
eed4e2df fix(ci): add --ignore-engines to yarn install for Node 16 compatibility
797d3722 fix(ci): run Gulp via docker run to avoid Alpine musl issues with artifact actions
8359457f fix(ci): use upload/download-artifact@v1 for Alpine musl compatibility
af581b42 ci: re-trigger build after entcore-v2 published to GitHub Packages
83ce1feb fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
c79eda13 ci: fix workflows — accès GitHub Packages pour entcore-v2 patched
1393a2a0 fix(presences): cast String event type/reason IDs to integer for bigint columns
f0bd00d4 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
2ba32573 ci: add build-and-publish workflow for GitHub Packages
f46376c5 add css for incidents, massmailing, presences, stats
ca81a2a8 fix: change revision to 2.1.9-patched
115e2001 fix: manage fields EXCLUDE_ALERT_ABSENCE_NO_REASON, EXCLUDE_ALERT_LATENESS_NO_REASON, EXCLUDE_ALERT_FORGOTTEN_NOTEBOOK
062009ad fix: Support date to en format (yyyy-mm-dd)
```

## `modules/rack`

- **branche référencée** : `master` @ `4e38596`
- **base upstream** : `3.1.7`  →  delta = `3.1.7..HEAD` (**3 commit(s)**)
- **tags patched** : 3.1.6-patched 

```
4e38596 chore(common): bump entCoreVersion 6.14.12 → 6.14.9-patched
83b97f2 ci: add build-and-publish workflow for GitHub Packages
963a349 doc: add mirroring note in readme
```

## `modules/rbs`

- **branche référencée** : `2.1.7-patched-dev` @ `e648468`
- **base upstream** : `2.1.7`  →  delta = `2.1.7..HEAD` (**6 commit(s)**)
- **tags patched** : 2.1.7-patched 

```
e648468 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
475079e chore(rbs): gitignore package-lock.json
cb060ca fix(rbs): patch version 2.1.7-patched
6a6d5ba Move to JDK 21
e745d56 ci: add build-and-publish workflow for GitHub Packages
e314dfc chore: prepare next development iteration
```

## `modules/ressource-aggregator`

- **branche référencée** : `5.2.4-patched-dev` @ `24c9f40`
- **base upstream** : `5.2.4`  →  delta = `5.2.4..HEAD` (**13 commit(s)**)
- **tags patched** : 5.2.4-patched 

```
24c9f40 mediacentre: migration @edifice.io -> @open-ent (2.1.2 -> 2.5.22) + alignement peers (react-query 5, react-i18next 14, react 18.3.1) + dedupe vite
1a0d87a chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
9dad9d0 ci: add build-and-publish workflow for GitHub Packages
5424f07 add JML modif
bbad719 fix(mediacentre): patch version 5.2.4-patched
0da4acf fix: remove fake ressources in ressources.json
c2826ab feat: remove duplicate in ressources.json
c662928 fix: change version in pom.xml
c61c8b0 feat: add more ressources mock
bb4b07f fix: image for gar ressources
37803d1 fix: mock ressources GAR
712e505 fix: elsatic version for request with or without _doc
b7358d4 chore: prepare next development iteration
```

## `modules/rss`

- **branche référencée** : `master` @ `085e3ac`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**1 commit(s)**)

```
085e3ac ci: add build-and-publish workflow for GitHub Packages
```

## `modules/search-engine`

- **branche référencée** : `master` @ `f98af21`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**1 commit(s)**)

```
f98af21 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/support`

- **branche référencée** : `4.0.1-patched-dev` @ `0956234`
- **base upstream** : `4.0.1`  →  delta = `4.0.1..HEAD` (**9 commit(s)**)
- **tags patched** : 3.1.5-patched 4.0.1-patched 4.0.2-patched 

```
0956234 support: migration @edifice.io -> @open-ent
898d89b ci: add build-and-publish workflow
50a5ebf ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
e075cc3 i18n: sync and translate en.json to English
8b2e3a5 Support Github as issue manager
47e65ca feat(github): resolve school name and UAI from Neo4j in issue body
15ef1a8 fix(sql): cast bug tracker issue id to bigint in INSERT
20a00e9 feat(support): add GitHub escalation service
e25aff9 fix(support): patch version 4.0.1-patched
```

## `modules/timeline-generator`

- **branche référencée** : `master` @ `9249723`
- **base upstream** : `3.3.7`  →  delta = `3.3.7..HEAD` (**2 commit(s)**)

```
9249723 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
d890173 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/vie-scolaire`

- **branche référencée** : `dev` @ `c2afaf47`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**3 commit(s)**)

```
c2afaf47 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
0ab130d8 ci: add build-and-publish workflow for GitHub Packages
dcbe6e84 chore: prepare next development iteration
```

## `modules/wiki`

- **branche référencée** : `3.5.9-patched-dev` @ `6aac625`
- **base upstream** : `3.5.9`  →  delta = `3.5.9..HEAD` (**6 commit(s)**)
- **tags patched** : 3.5.12-patched 3.5.13-patched 3.5.9-patched 

```
6aac625 wiki: maj hash bundle migré @open-ent dans wiki.html (index-DXMW4Zs4.js / index-BO3H2sUv.css)
20f3bb9 wiki: migration @edifice.io -> @open-ent (+ ode-explorer -> @open-ent/explorer)
4b09343 release: 3.5.13-patched
1d220f2 ci: add build-and-publish workflow
2a71444 missing wiki html
53863cf fix(wiki): patch version 3.5.9-patched + entcore 6.14.9-patched
```

## `static/application-help-1d`

- **branche référencée** : `dev` @ `1eac8aa`
- **base upstream** : `4.12.4`  →  delta = `4.12.4..HEAD` (**2 commit(s)**)

```
1eac8aa chore: remove old conf.j2 file
92fa204 prepare next development iteration
```

---

**Résumé** : 46 dépôt(s) forké(s)/patché(s) documenté(s) ; 4 dépôt(s) sans delta patched (suivent une branche upstream).

### Comment relire / régénérer
- Mettre à jour les tags upstream : `git submodule foreach 'git fetch --tags origin || true'`
- Régénérer : `./scripts/patched-changelog.sh` (copie aussi la page publique open-ent.github.io)
- Lors d'une montée de version d'un module : re-baser/cherry-pick les commits listés ci-dessus sur la nouvelle release upstream avant de re-tagger `X-patched`.
