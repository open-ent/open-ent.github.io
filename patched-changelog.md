# Changelog consolidé des forks "-patched"

> Généré par `scripts/patched-changelog.sh` le 2026-06-09 19:12.
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

- **branche référencée** : `(detached)` @ `21ce8ee`
- **base upstream** : `2.2.4`  →  delta = `2.2.4..HEAD` (**1 commit(s)**)
- **tags patched** : 2.2.4-patched 2.2.5-patched 

```
21ce8ee chore: prepare next development iteration
```

## `libs/entcore`

- **branche référencée** : `6.14.9-patched-dev` @ `502dfbe9e`
- **base upstream** : `6.14.9`  →  delta = `6.14.9..HEAD` (**47 commit(s)**)
- **tags patched** : 6.14.9-patched 6.14.9-patched-SNAPSHOT 

```
502dfbe9e style(conversation): prettier sur useMessagingHours
a3f8bb460 feat(conversation): matérialise le blocage horaires côté élève
c685b53d6 feat(conversation): horaires d'utilisation de la messagerie
5c33a5bd2 fix(broker): enregistre JavaTimeModule pour sérialiser les Instant des DTO
51b38d945 chore(conversation): build.sh transmet NODE_AUTH_TOKEN au conteneur + revision 6.14.9-patched
157913cf0 feat(conversation): signaler un abus + modération ADML
4594ff012 Patch indicator mongo
1d1d4597c fix(session): patch version 6.14.9-patched
2f2f7e4b8 fix(auth): getAuthInfoByCode filtre par code + expiration Java (fix echange OIDC casse par migration vertx4)
e1cdfff94 fix(auth): getAuthInfoByCode filtre par code seul + expiration en Java (le filtre createdAt $date ne marche plus via le persistor vertx4)
e9f39520b fix(auth): getAuthInfoByCode utilise $date epoch au lieu de chaine ISO (echange code OIDC casse par migration vertx4, cf WB-2222)
f3996114e style(conversation): prettier (imports @open-ent sur une ligne)
d1aab6ba8 feat(conversation): migration frontend @edifice.io -> @open-ent (support data-product 1d)
3473a78f0 feat(timeline): redirect /timeline/timeline to /dashboard/home
4af6ec717 fix(directory): restore assetPath fallback to serverMap when own config is missing
38f145974 i18n: translate en.json to English
946bcb030 i18n: sync en.json keys with fr.json across all modules
7e2c81475 i18n(conversation): sync en.json keys with fr.json
9fdf33733 Update write
de1ba0058 fix(portal,directory): disable default super admin + portal fixes
4c1ca73ac fix(ci): delete entire package when only one version exists (GitHub 400 fix)
bfbe8bc5c fix(ci): add cleanup step to delete existing package versions before re-deploying
e6fa7f324 fix(ci): use Java 8 to fix javax.xml.bind compilation errors on JDK 11
18ba199c0 ci: add build-and-publish workflow for GitHub Packages
402445879 fix(workspace): port missing i18n keys + fix French values in en.json
c52e61af2 fix(workspace): patch version 6.14.9-patched
59dd143b0 fix(workspace): auto-init UserBook on quota 404 + fix initUserQuota endpoint
74c59dc7b fix(workspace): auto-init UserBook on quota 404 + fix initUserQuota endpoint
193e6752b fix(common): explorer tree
6951d616a fix:  IPostgresClient event handler
0ad661fe3 fix: manage quota
0c8355f62 chore(portal): add translation
1c8e61fcc feat(broker): add direction field (in/out) to spy messages
0d966ab5b fix(broker): ignore unknown JSON properties on deserialization
c92aed2c9 fix(broker): spy notifyAdminWatchers on outgoing sendRawMessage
ab123968a fix(broker): include mongodb-helper via shade filter instead of disabling minimizeJar
e2d15e49d fix(broker): disable shade minimizeJar — BaseServer deps accessed via reflection/inheritance
7a65a192d fix(broker): close client before super.stop() — prevent IllegalStateException on NATS drain during hot-reload
0c297cfbe fix(auth,portal): patch null-check childTheme + validate theme cookie
8963f8552 fix(auth): patch version 6.14.9-patched
45e9b193c fix: generic traduction to support all Open ENT deployment
40469dd8d fix(auth): logo missing on login page — null check on currentTheme + add bare hostname in skins
048023d1b fix: generic traduction to support all Open ENT deployment
291774ed5 fix(portal): add missing i18n keys (add.attachment, homepage.widget.last-infos-list)
469d7d76b fix: translation
f8d609ec7 fix: I18 for App registry
ad62bfec0 fix(conversation): boolean = character varying error in count query
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

- **branche référencée** : `4.8.17-patched-dev` @ `d51d31b`
- **base upstream** : `4.8.17`  →  delta = `4.8.17..HEAD` (**4 commit(s)**)
- **tags patched** : 4.8.17-patched 

```
d51d31b fix(tracking): directive xiti en no-op (Matomo remplace Xiti)
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

## `libs/theme-open-ent`

- **branche référencée** : `develop` @ `4663b35`
- **base upstream** : `3.4.10`  →  delta = `3.4.10..HEAD` (**12 commit(s)**)

```
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

- **branche référencée** : `3.1.5-patched-dev` @ `f2ac004f`
- **base upstream** : `3.1.5`  →  delta = `3.1.5..HEAD` (**10 commit(s)**)
- **tags patched** : 3.1.4-patched 3.1.5-patched 

```
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
```

## `modules/appointments`

- **branche référencée** : `fix/conf-on-1.3.6-patched` @ `53f95d1`
- **base upstream** : `1.3.6`  →  delta = `1.3.6..HEAD` (**3 commit(s)**)
- **tags patched** : 1.3.6-patched 1.3.7-patched 

```
53f95d1 fix(conf): useTheme passe le code app à getConf (au lieu d'une chaîne vide)
f3e06f8 fix(conf): app code "appointments" pour EdificeClientProvider (404 /Rendez-vous/conf/public)
d653475 feat: change version to patched
```

## `modules/blog`

- **branche référencée** : `5.4.7-patched-dev` @ `334f633`
- **base upstream** : `5.4.7`  →  delta = `5.4.7..HEAD` (**18 commit(s)**)
- **tags patched** : 5.4.10-patched 5.4.7-patched 

```
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
```

## `modules/cahier-de-textes`

- **branche référencée** : `4.1.5-patched-dev` @ `f659cb6f`
- **base upstream** : `4.1.5`  →  delta = `4.1.5..HEAD` (**7 commit(s)**)
- **tags patched** : 4.1.5-patched 4.1.6-patched 4.1.7-patched 

```
f659cb6f fix(homework): répondre (JsonArray vide) pour les profils non gérés au lieu de laisser la requête en attente
f32b3fe1 release: 4.1.7-patched
edb41be7 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
00944914 i18n: sync and translate en.json to English
b45a7427 chore(common): bump entCoreVersion 6.14.9 → 6.14.9-patched
3ba9e2ff ci: add build-and-publish workflow for GitHub Packages
ce93535d fix(sql): cast date parameters to ::date to fix PostgreSQL type mismatch
```

## `modules/calendar`

- **branche référencée** : `dev` @ `36f32be`
- **base upstream** : `4.2.10`  →  delta = `4.2.10..HEAD` (**3 commit(s)**)
- **tags patched** : 4.2.10-patched 4.2.7-patched 

```
36f32be chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
6585792 ci: add build-and-publish workflow for GitHub Packages
2d9731e chore: prepare next development iteration
```

## `modules/collaborative-editor`

- **branche référencée** : `3.3.5-patched-dev` @ `407f4c0`
- **base upstream** : `3.3.5`  →  delta = `3.3.5..HEAD` (**8 commit(s)**)
- **tags patched** : 3.3.5-patched 3.3.6-patched 

```
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

- **branche référencée** : `3.4.9-patched-dev` @ `221be61`
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

- **branche référencée** : `3.1.4-patched-dev` @ `d83448a`
- **base upstream** : `3.1.4`  →  delta = `3.1.4..HEAD` (**14 commit(s)**)
- **tags patched** : 3.1.4-patched 

```
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

- **branche référencée** : `4.3.6-patched-dev` @ `eb49b648`
- **base upstream** : `4.3.6`  →  delta = `4.3.6..HEAD` (**6 commit(s)**)
- **tags patched** : 4.2.5-patched 4.3.6-patched 

```
eb49b648 i18n(en): traduire les valeurs restées en français (at, From, To, on)
9127e240 i18n(fr): ajouter la clé exercizer.title
e249ed4b i18n: sync and translate en.json to English
e8da1e91 fix: default blank due date
c9b355f0 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
e98a3dee fix(exercizer): patch version 4.3.6-patched
```

## `modules/explorer`

- **branche référencée** : `2.5.7-patched-dev` @ `0e97b8c`
- **base upstream** : `lib-v2.5.23`  →  delta = `lib-v2.5.23..HEAD` (**12 commit(s)**)
- **tags patched** : 2.5.7-patched 2.5.8-patched 2.5.9-patched 

```
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

- **branche référencée** : `dev` @ `4b077e8`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**2 commit(s)**)
- **tags patched** : 2.1.3-patched 2.1.4-patched 2.1.5-patched 

```
4b077e8 ci: add build-and-publish workflow for GitHub Packages
855584f chore: prepare next development iteration
```

## `modules/http-proxy`

- **branche référencée** : `3.0.0-patched-dev` @ `95bdaf0`
- **base upstream** : `3.0.0`  →  delta = `3.0.0..HEAD` (**4 commit(s)**)
- **tags patched** : 3.0.0-patched 3.1.0-patched 

```
95bdaf0 ci: update workflows — fix triggers, Java 8, GitHub Packages resolver
48bf837 ci: add build-and-publish workflow for GitHub Packages
5262efa Compatible JDK 21
1520d47 fix(http-proxy): patch version 3.0.0-patched
```

## `modules/magneto`

- **branche référencée** : `2.10.0-patched-dev` @ `2e2083a`
- **base upstream** : `2.10.0`  →  delta = `2.10.0..HEAD` (**3 commit(s)**)
- **tags patched** : 2.10.0-patched 

```
2e2083a build(2.10.0-patched): entcore open-ent 6.14.9-patched (fix crash async map cluster) + thème openent runtime (bandeau 1d) + fix menu vue board
d940857 Version 6.14.9-patched
400fb2f chore: prepare next development iteration
```

## `modules/mindmap`

- **branche référencée** : `3.4.9-patched-dev` @ `71b8059`
- **base upstream** : `3.4.9`  →  delta = `3.4.9..HEAD` (**16 commit(s)**)
- **tags patched** : 3.4.7-patched 3.4.9-patched 

```
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
```

## `modules/mod-image-resizer`

- **branche référencée** : `3.2.3-patched-dev` @ `24f6beb`
- **base upstream** : `3.2.3`  →  delta = `3.2.3..HEAD` (**2 commit(s)**)
- **tags patched** : 3.1.0-patched 3.2.3-patched 

```
24f6beb ci: add build-and-publish workflow
19aaab6 fix(mod-image-resizer): patch version 3.2.3-patched
```

## `modules/mod-json-schema-validator`

- **branche référencée** : `3.0.0-patched-dev` @ `d07b3f2`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**7 commit(s)**)
- **tags patched** : 3.0.0-patched 3.1.0-patched 

```
d07b3f2 ci: add build-and-publish workflow for GitHub Packages
ae917c4 set default user for docker
bb78925 fix(mod-json-schema-validator): keep app-parent, revert 3.0.2 upgrade (Java17+new API required)
05761b5 fix(mod-json-schema-validator): use open-ent parent, java17, revert incompatible 3.0.2 upgrade
9162f2b fix(mod-json-schema-validator): patch version 3.0.0-patched
0f0e5cd update pom.xml
bc00597 fix: support JDK 21 and pattern
```

## `modules/mod-mongo-persistor`

- **branche référencée** : `4.1.1-patched-dev` @ `dcd42e8`
- **base upstream** : `4.1.1`  →  delta = `4.1.1..HEAD` (**2 commit(s)**)
- **tags patched** : 3.1.0-patched 4.1.1-patched 

```
dcd42e8 ci: add build-and-publish workflow
638727b fix(mod-mongo-persistor): patch version 4.1.1-patched
```

## `modules/mod-pdf-generator`

- **branche référencée** : `2.1.1-patched-dev` @ `7892bc4`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**2 commit(s)**)
- **tags patched** : 2.1.1-patched 3.1.0-patched 

```
7892bc4 ci: add build-and-publish workflow
15a8d76 fix(mod-pdf-generator): patch version 2.1.1-patched
```

## `modules/mod-postgresql`

- **branche référencée** : `2.1.1-patched-dev` @ `11f0c1a`
- **base upstream** : `2.1.1`  →  delta = `2.1.1..HEAD` (**5 commit(s)**)
- **tags patched** : 2.1.1-patched 2.1.1-patched-dev 

```
11f0c1a ci: build en Java 21 (le pom compile désormais en 21)
fd5a0db fix(sql): résilience démarrage + montée HikariCP 5.1.0 / JDK 21
9bca6e7 ci: add build-and-publish workflow
352df44 manage other type for PostgreSQL > 14
17c1cb4 fix(sql): handle Boolean and Long types in SqlPersistor.prepared()
```

## `modules/mod-sftp`

- **branche référencée** : `2.1.3-patched-dev` @ `88656d9`
- **base upstream** : `2.1.3`  →  delta = `2.1.3..HEAD` (**2 commit(s)**)
- **tags patched** : 2.1.3-patched 

```
88656d9 ci: add build-and-publish workflow
0bfd303 fix(mod-sftp): patch version 2.1.3-patched
```

## `modules/mod-zip`

- **branche référencée** : `3.1.1-patched-dev` @ `94091ba`
- **base upstream** : `3.2.1`  →  delta = `3.2.1..HEAD` (**3 commit(s)**)
- **tags patched** : 3.1.0-patched 3.1.1-patched 

```
94091ba ci: add build-and-publish workflow
3134bc0 fix: fix version typo
660d995 fix: change version to -patched
```

## `modules/pages`

- **branche référencée** : `master` @ `7f70532`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**1 commit(s)**)
- **tags patched** : 2.1.5-patched 2.1.6-patched 

```
7f70532 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/poll`

- **branche référencée** : `master` @ `b170ec7`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**1 commit(s)**)
- **tags patched** : 2.1.4-patched 2.1.5-patched 2.1.6-patched 

```
b170ec7 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/presences`

- **branche référencée** : `2.1.9-patched-dev` @ `4af6959b`
- **base upstream** : `2.1.9`  →  delta = `2.1.9..HEAD` (**15 commit(s)**)
- **tags patched** : 2.1.9-patched 

```
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
```

## `modules/rack`

- **branche référencée** : `3.1.7-patched-dev` @ `d363554`
- **base upstream** : `3.1.7`  →  delta = `3.1.7..HEAD` (**13 commit(s)**)
- **tags patched** : 3.1.6-patched 3.1.7-patched 

```
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

- **branche référencée** : `2.1.7-patched-dev` @ `e648468`
- **base upstream** : `2.1.7`  →  delta = `2.1.7..HEAD` (**6 commit(s)**)
- **tags patched** : 1.2.0-patched 2.1.4-patched 2.1.7-patched 

```
e648468 chore(common): bump entCoreVersion 6.14-SNAPSHOT → 6.14.9-patched
475079e chore(rbs): gitignore package-lock.json
cb060ca fix(rbs): patch version 2.1.7-patched
6a6d5ba Move to JDK 21
e745d56 ci: add build-and-publish workflow for GitHub Packages
e314dfc chore: prepare next development iteration
```

## `modules/ressource-aggregator`

- **branche référencée** : `5.2.4-patched-dev` @ `5a74c8c`
- **base upstream** : `5.2.4`  →  delta = `5.2.4..HEAD` (**16 commit(s)**)
- **tags patched** : 5.2.4-patched 

```
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

- **branche référencée** : `master` @ `085e3ac`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**1 commit(s)**)

```
085e3ac ci: add build-and-publish workflow for GitHub Packages
```

## `modules/search-engine`

- **branche référencée** : `master` @ `f98af21`
- **base upstream** : `2.1.4`  →  delta = `2.1.4..HEAD` (**1 commit(s)**)
- **tags patched** : 2.1.4-patched 2.1.5-patched 

```
f98af21 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/statistics`

- **branche référencée** : `2.6.0-patched-dev` @ `73282fa`
- **base upstream** : `2.6.0`  →  delta = `2.6.0..HEAD` (**3 commit(s)**)
- **tags patched** : 2.6.0-patched 

```
73282fa feat(stats): backend Mongo lit le contrat frontend 2.6.0 (indicator/frequency/entity) -> StatsResponse depuis la collection stats
0c5472e chore: ignore .yarn directory
381b1c9 build: aligne stats sur entcore 6.14.9-patched + version 2.6.0-patched
```

## `modules/support`

- **branche référencée** : `4.0.1-patched-dev` @ `3e548e8`
- **base upstream** : `4.0.1`  →  delta = `4.0.1..HEAD` (**14 commit(s)**)
- **tags patched** : 3.1.5-patched 4.0.1-patched 4.0.2-patched 

```
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
```

## `modules/timeline-generator`

- **branche référencée** : `3.3.7-patched-dev` @ `66fa1dc`
- **base upstream** : `3.3.7`  →  delta = `3.3.7..HEAD` (**4 commit(s)**)
- **tags patched** : 3.3.6-patched 3.3.7-patched 

```
66fa1dc fix(ci): use glob to find fat JAR (supports ~ naming and SNAPSHOT versions)
5e18547 fix(ci): run Gulp via docker run, add Java 8 and GitHub Packages auth
9249723 chore(common): bump entCoreVersion 6.14.15 → 6.14.9-patched
d890173 ci: add build-and-publish workflow for GitHub Packages
```

## `modules/vie-scolaire`

- **branche référencée** : `2.1.5-patched-dev` @ `66e24d0c`
- **base upstream** : `2.1.5`  →  delta = `2.1.5..HEAD` (**2 commit(s)**)
- **tags patched** : 2.1.5-patched 

```
66e24d0c fix(timeslot): caster startHour/endHour en ::time dans l'INSERT des créneaux
8d643949 feat: change version to patched
```

## `modules/wiki`

- **branche référencée** : `3.5.13-patched-dev` @ `c4c2222`
- **base upstream** : `3.5.9`  →  delta = `3.5.9..HEAD` (**11 commit(s)**)
- **tags patched** : 3.5.12-patched 3.5.13-patched 3.5.9-patched 

```
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
```

## `static/application-help-1d`

- **branche référencée** : `dev` @ `1eac8aa`
- **base upstream** : `4.12.4`  →  delta = `4.12.4..HEAD` (**2 commit(s)**)

```
1eac8aa chore: remove old conf.j2 file
92fa204 prepare next development iteration
```

---

**Résumé** : 47 dépôt(s) forké(s)/patché(s) documenté(s) ; 9 dépôt(s) sans delta patched (suivent une branche upstream).

### Comment relire / régénérer
- Mettre à jour les tags upstream : `git submodule foreach 'git fetch --tags origin || true'`
- Régénérer : `./scripts/patched-changelog.sh` (copie aussi la page publique open-ent.github.io)
- Lors d'une montée de version d'un module : re-baser/cherry-pick les commits listés ci-dessus sur la nouvelle release upstream avant de re-tagger `X-patched`.
