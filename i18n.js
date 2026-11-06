/*
 * i18n léger et sans dépendance pour les pages du dashboard Open-ENT.
 *
 * Usage côté balisage : data-i18n="clé" (texte), data-i18n-title,
 * data-i18n-placeholder, data-i18n-aria-label.
 * Usage côté script : t('clé', { var: … }) puis I18N.onChange(render) pour
 * que le contenu rendu en JS suive le changement de langue.
 *
 * Langue retenue : ?lang= → localStorage → langue du navigateur → fr.
 */
(function () {
  'use strict';

  var STRINGS = {
    // ── Commun ────────────────────────────────────────────────────────
    'common.loading':         { fr: 'Chargement…',               en: 'Loading…' },
    'common.platformStatus':  { fr: 'Statut plateforme',          en: 'Platform status' },
    'common.backToDashboard': { fr: '← Retour au dashboard',      en: '← Back to the dashboard' },
    'nav.dashboard':          { fr: '← Artifacts Dashboard',      en: '← Artifacts Dashboard' },
    'nav.updates':            { fr: 'Nouveautés',                 en: "What's new" },
    'nav.security':           { fr: 'Librairies & CVE',           en: 'Libraries & CVEs' },
    'nav.changelog':          { fr: 'Changelog des patchs',       en: 'Patch changelog' },
    'nav.lcm':                { fr: 'Cycle de vie',               en: 'Lifecycle' },
    'nav.docs':               { fr: 'Documentation',              en: 'Documentation' },
    'nav.mobile':             { fr: 'Application mobile',         en: 'Mobile app' },
    'nav.demo':               { fr: 'Essayer la démo',            en: 'Try the demo' },
    'nav.register':           { fr: 'Créer un compte gratuit',    en: 'Create a free account' },
    'sec.entcore':            { fr: 'Entcore — Socle commun',     en: 'Entcore — Core platform' },
    'sec.apps':               { fr: 'Applications',               en: 'Applications' },
    'sec.connectors':         { fr: 'Connecteurs',                en: 'Connectors' },
    'sec.infra':              { fr: 'Infrastructure',             en: 'Infrastructure' },

    // ── index.html ────────────────────────────────────────────────────
    'index.title':        { fr: 'Open-ENT — Artifacts Dashboard', en: 'Open-ENT — Artifacts Dashboard' },
    'index.subtitle':     { fr: 'Modules publiés sur GitHub Packages', en: 'Modules published on GitHub Packages' },
    'index.modules':      { fr: '{n} modules',                    en: '{n} modules' },
    'index.updatedAt':    { fr: 'Mis à jour le {date}',           en: 'Updated on {date}' },
    'index.archTitle':    { fr: 'Architecture de la plateforme',  en: 'Platform architecture' },
    'index.archDetail':   { fr: '— voir le détail',               en: '— view details' },
    'index.moduleDetail': { fr: 'Détail des modules',             en: 'Module details' },
    'index.loadingArtifacts': { fr: 'Chargement des artefacts…',  en: 'Loading artifacts…' },
    'index.loadError':    { fr: 'Erreur de chargement des données : {msg}', en: 'Could not load the data: {msg}' },
    'index.noModule':     { fr: 'Aucun module trouvé',            en: 'No module found' },
    'index.noRelease':    { fr: 'Aucune version publiée',         en: 'No published release' },
    'index.releaseNotes': { fr: 'Notes de version — {tag}',       en: 'Release notes — {tag}' },
    'index.cveChip':      { fr: 'CVE : {critical} critiques · {high} hautes', en: 'CVEs: {critical} critical · {high} high' },
    'index.cveTitle':     { fr: '{critical} critiques, {high} hautes, {medium} moyennes, {low} basses',
                            en: '{critical} critical, {high} high, {medium} medium, {low} low' },
    'index.cveOk':        { fr: 'CVE ok',                         en: 'CVEs ok' },
    'index.tipChangelog': { fr: 'Synthèse des modifications apportées par les forks « -patched »',
                            en: 'Summary of the changes carried by the “-patched” forks' },
    'index.tipUpdates':   { fr: 'Les dernières versions publiées, semaine après semaine',
                            en: 'The latest published releases, week after week' },
    'index.tipSecurity':  { fr: 'Dépendances et vulnérabilités connues (CVE) des modules',
                            en: 'Module dependencies and known vulnerabilities (CVEs)' },
    'index.footerPrivate': { fr: 'Les modules dont les liens renvoient une erreur <strong>404</strong> sont des <strong>modules privés</strong> : leur dépôt n’est pas accessible publiquement.',
                             en: 'Modules whose links return a <strong>404</strong> are <strong>private modules</strong>: their repository is not publicly accessible.' },
    'index.tipLcm':      { fr: 'Fin de support des briques techniques et marge restante', en: 'End of support for the technical building blocks, and the runway left' },
    'index.tipDocs':      { fr: 'Documentation fonctionnelle et technique d’Open-ENT',
                            en: 'Open-ENT functional and technical documentation' },
    'index.tipMobile':    { fr: 'Découvrir l’application mobile Open-ENT',
                            en: 'Discover the Open-ENT mobile app' },
    'index.tipDemo':      { fr: 'Recevoir un accès de découverte à la plateforme de démonstration',
                            en: 'Get a discovery access to the demo platform' },
    'index.tipRegister':  { fr: 'Créer un compte sur la plateforme de démonstration ent-scolaire.fr',
                            en: 'Create an account on the ent-scolaire.fr demo platform' },
    'index.building':     { fr: 'build en cours',                 en: 'building' },
    'index.queued':       { fr: 'en file d’attente',              en: 'queued' },
    'index.buildsChip':   { fr: '{n} build(s) en cours',          en: '{n} build(s) running' },
    'index.buildTitle':   { fr: '{workflow} sur {branch} — démarré à {time}', en: '{workflow} on {branch} — started at {time}' },
    'index.footerGenerated': { fr: 'Généré automatiquement via GitHub Actions —', en: 'Generated automatically by GitHub Actions —' },
    'index.footerWorkflows': { fr: 'Voir les workflows',          en: 'View the workflows' },
    'arch.apps':          { fr: 'APPLICATIONS',                   en: 'APPLICATIONS' },
    'arch.connectors':    { fr: 'CONNECTEURS',                    en: 'CONNECTORS' },
    'arch.entcore':       { fr: 'ENTCORE — SOCLE COMMUN',         en: 'ENTCORE — CORE PLATFORM' },
    'arch.infra':         { fr: 'INFRASTRUCTURE',                 en: 'INFRASTRUCTURE' },

    // ── changelog.html ────────────────────────────────────────────────
    'changelog.title':    { fr: 'Open-ENT — Changelog des patchs', en: 'Open-ENT — Patch changelog' },
    'changelog.h1a':      { fr: 'Changelog',                      en: 'Patch' },
    'changelog.h1b':      { fr: 'des patchs',                     en: 'changelog' },
    'changelog.loading':  { fr: 'Chargement du changelog…',       en: 'Loading the changelog…' },
    'changelog.error':    { fr: 'Impossible de charger le changelog : {msg}', en: 'Could not load the changelog: {msg}' },
    'changelog.footer':   { fr: 'Synthèse des commits ajoutés par les forks « -patched » par-dessus l’upstream ·',
                            en: 'Summary of the commits added by the “-patched” forks on top of upstream ·' },
    'changelog.frNotice': { fr: '',
                            en: 'Commit messages below are written in French by the module teams.' },

    // ── updates.html ──────────────────────────────────────────────────
    'updates.title':      { fr: 'Open-ENT — Nouveautés',          en: "Open-ENT — What's new" },
    'updates.h1':         { fr: 'Nouveautés',                     en: "What's new" },
    'updates.patchTip':   { fr: 'Détail des patchs',              en: 'Patch details' },
    'updates.lead':       { fr: 'Les modules Open ENT sont publiés chaque semaine : nouvelles fonctionnalités et correctifs. Voici les dernières versions.',
                            en: 'Open ENT modules ship every week, with new features and fixes. Here are the latest releases.' },
    'updates.filterSection': { fr: 'Filtrer par section',         en: 'Filter by section' },
    'updates.filterPeriod':  { fr: 'Filtrer par période',         en: 'Filter by period' },
    'updates.all':        { fr: 'Tout',                           en: 'All' },
    'updates.allHistory': { fr: 'Tout l’historique',              en: 'Full history' },
    'updates.thisWeek':   { fr: 'Cette semaine',                  en: 'This week' },
    'updates.last4Weeks': { fr: '4 dernières semaines',           en: 'Last 4 weeks' },
    'updates.loading':    { fr: 'Chargement des versions…',       en: 'Loading releases…' },
    'updates.hint':       { fr: 'Survolez la liste pour la mettre en pause · cliquez sur une version pour ses notes de release.',
                            en: 'Hover the list to pause it · click a release to open its notes.' },
    'updates.latest':     { fr: 'Dernière version publiée',       en: 'Latest published release' },
    'updates.entcore':    { fr: 'Socle entcore',                  en: 'Entcore core' },
    'updates.weekOf':     { fr: 'Semaine du {date}',              en: 'Week of {date}' },
    'updates.noDate':     { fr: 'Date non renseignée',            en: 'No date available' },
    'updates.none':       { fr: 'Aucune version sur cette période.', en: 'No release in this period.' },
    'updates.since':      { fr: 'Évolutions depuis {tag}',        en: 'Changes since {tag}' },
    'updates.newRelease': { fr: 'Nouvelle version de {module}',   en: 'New release of {module}' },
    'updates.error':      { fr: 'Impossible de charger data.json.', en: 'Could not load data.json.' },
    'updates.footer':     { fr: 'Généré à partir de <a href="./data.json">data.json</a> (workflow quotidien) ·',
                            en: 'Generated from <a href="./data.json">data.json</a> (daily workflow) ·' },
    'updates.modulesSuffix': { fr: '{repo} ({n} modules)',        en: '{repo} ({n} modules)' },

    // ── security.html ─────────────────────────────────────────────────
    'security.title':     { fr: 'Open-ENT — Librairies & CVE',    en: 'Open-ENT — Libraries & CVEs' },
    'security.h1a':       { fr: 'Librairies',                     en: 'Libraries' },
    'security.h1b':       { fr: '& CVE',                          en: '& CVEs' },
    'security.subtitle':  { fr: 'Dépendances et vulnérabilités connues des modules, au commit réellement livré',
                            en: 'Module dependencies and known vulnerabilities, at the commit actually shipped' },
    'security.tabModules': { fr: 'Modules',                       en: 'Modules' },
    'security.tabLibs':   { fr: 'Librairies',                     en: 'Libraries' },
    'security.tabTrend':  { fr: 'Évolution',                      en: 'Trend' },

    // ── Évolution (snapshots datés) ───────────────────────────────────
    'trend.period7':      { fr: '7 derniers jours',               en: 'Last 7 days' },
    'trend.period30':     { fr: '30 derniers jours',              en: 'Last 30 days' },
    'trend.period90':     { fr: '90 derniers jours',              en: 'Last 90 days' },
    'trend.periodAll':    { fr: 'Tout l\u2019historique',             en: 'Full history' },
    'trend.none':         { fr: 'Pas encore d\u2019historique : le premier snapshot sera pris au prochain scan.', en: 'No history yet: the first snapshot will be taken at the next scan.' },
    'trend.needTwo':      { fr: 'Un seul snapshot pour l\u2019instant — la comparaison démarre au deuxième.', en: 'Only one snapshot so far — comparison starts with the second one.' },
    'trend.window':       { fr: 'Du {from} au {to}',              en: 'From {from} to {to}' },
    'trend.fixed':        { fr: 'CVE corrigées',                  en: 'CVEs fixed' },
    'trend.appeared':     { fr: 'CVE apparues',                   en: 'CVEs appeared' },
    'trend.detailNote':   { fr: 'Détail limité aux sévérités {sev} ; les dépôts privés ne publient que leurs compteurs.', en: 'Detail limited to {sev} severities; private repositories publish counters only.' },
    'trend.prsOpen':      { fr: 'PR de correction ouvertes',      en: 'Open remediation PRs' },
    'trend.prsSecurity':  { fr: 'dont {n} sur alerte de vulnérabilité', en: 'incl. {n} from vulnerability alerts' },
    'trend.prsMerged':    { fr: 'PR fusionnées sur la période',   en: 'PRs merged over the period' },
    'trend.prsNone':      { fr: 'Aucune PR de correction fusionnée sur la période.', en: 'No remediation PR merged over the period.' },
    'trend.chartTitle':   { fr: 'Vulnérabilités dans le temps',   en: 'Vulnerabilities over time' },
    'trend.movers':       { fr: 'Modules qui ont bougé',          en: 'Modules that moved' },
    'trend.noMove':       { fr: 'Aucun écart sur la période.',    en: 'No change over the period.' },
    'trend.thModule':     { fr: 'Module',                         en: 'Module' },
    'trend.thDelta':      { fr: 'Écart',                          en: 'Change' },
    'trend.thFixed':      { fr: 'Corrigées',                      en: 'Fixed' },
    'trend.thNew':        { fr: 'Apparues',                       en: 'New' },
    'trend.thPrs':        { fr: 'PR ouvertes',                    en: 'Open PRs' },
    'trend.gitlinkSame':  { fr: 'gitlink inchangé',               en: 'gitlink unchanged' },
    'trend.countPoints':  { fr: '{n} snapshots',                  en: '{n} snapshots' },
    'trend.loading':      { fr: 'Comparaison des snapshots…',     en: 'Comparing snapshots…' },
    'security.search':    { fr: 'Rechercher un module, un paquet, une CVE…', en: 'Search a module, a package, a CVE…' },
    'security.searchAria': { fr: 'Rechercher',                    en: 'Search' },
    'security.allSections': { fr: 'Toutes les sections',          en: 'All sections' },
    'security.other':     { fr: 'Autres (libs, outils)',          en: 'Other (libs, tools)' },
    'security.sortAria':  { fr: 'Tri',                            en: 'Sort' },
    'security.sortSeverity': { fr: 'Tri : sévérité',              en: 'Sort: severity' },
    'security.sortVersions': { fr: 'Tri : nombre de versions',    en: 'Sort: number of versions' },
    'security.sortName':  { fr: 'Tri : nom',                      en: 'Sort: name' },
    'security.sortDeps':  { fr: 'Tri : nombre de dépendances',    en: 'Sort: number of dependencies' },
    'security.sortUpdates': { fr: 'Tri : mises à jour en attente', en: 'Sort: pending updates' },
    'security.loadingData': { fr: 'Chargement des données…',      en: 'Loading data…' },
    'security.sevCritical': { fr: 'Critiques',                    en: 'Critical' },
    'security.sevHigh':   { fr: 'Hautes',                         en: 'High' },
    'security.sevMedium': { fr: 'Moyennes',                       en: 'Medium' },
    'security.sevLow':    { fr: 'Basses',                         en: 'Low' },
    'security.modulesHit': { fr: '{n} modules touchés',           en: '{n} modules affected' },
    'security.deps':      { fr: 'Dépendances',                    en: 'Dependencies' },
    'security.modulesScanned': { fr: '{n} modules scannés',       en: '{n} modules scanned' },
    'security.clean':     { fr: 'Sans critique ni haute',         en: 'No critical or high' },
    'security.outOf':     { fr: 'sur {n} modules',                en: 'out of {n} modules' },
    'security.scanRun':   { fr: 'run du scan',                    en: 'scan run' },
    'security.trivyScan': { fr: 'Scan Trivy : {date}',            en: 'Trivy scan: {date}' },
    'security.renovateAt': { fr: 'Renovate : {date}',             en: 'Renovate: {date}' },
    'security.renovateNone': { fr: 'Renovate : pas encore de rapport', en: 'Renovate: no report yet' },
    'security.headModule': { fr: 'Module',                        en: 'Module' },
    'security.headVulns': { fr: 'Vulnérabilités : critiques · hautes · moyennes · basses',
                            en: 'Vulnerabilities: critical · high · medium · low' },
    'security.headDeps':  { fr: 'Dépendances',                    en: 'Dependencies' },
    'security.countModules': { fr: '{n} modules',                 en: '{n} modules' },
    'security.countLibs': { fr: '{n} librairies directes',        en: '{n} direct libraries' },
    'security.noModule':  { fr: 'Aucun module ne correspond.',    en: 'No module matches.' },
    'security.noLib':     { fr: 'Aucune librairie ne correspond.', en: 'No library matches.' },
    'security.notScanned': { fr: 'non scanné',                    en: 'not scanned' },
    'security.private':   { fr: 'privé',                          en: 'private' },
    'security.depsSmall': { fr: 'dépendances',                    en: 'dependencies' },
    'security.updatesSmall': { fr: 'mises à jour',                en: 'updates' },
    'security.scanUnavailable': { fr: 'Scan indisponible pour ce module lors du dernier passage.',
                                  en: 'No scan available for this module on the last run.' },
    'security.privateRepo': { fr: 'Dépôt privé : {n} vulnérabilité(s), détail non publié. Consulter le scan dans le dépôt open-ent-mods.',
                              en: 'Private repository: {n} vulnerability(ies), details not published. See the scan in the open-ent-mods repository.' },
    'security.noVuln':    { fr: 'Aucune vulnérabilité connue dans les dépendances analysées.',
                            en: 'No known vulnerability in the analysed dependencies.' },
    'security.linkRepo':  { fr: 'Dépôt',                          en: 'Repository' },
    'security.linkRenovateDash': { fr: 'Tableau de bord Renovate', en: 'Renovate dashboard' },
    'security.linkRenovatePr': { fr: 'PR Renovate',               en: 'Renovate PRs' },
    'security.thSev':     { fr: 'Sév.',                           en: 'Sev.' },
    'security.thId':      { fr: 'Identifiant',                    en: 'Identifier' },
    'security.thPackage': { fr: 'Paquet',                         en: 'Package' },
    'security.thVersion': { fr: 'Version → corrigée',             en: 'Version → fixed' },
    'security.thTitle':   { fr: 'Titre',                          en: 'Title' },
    'security.showMore':  { fr: 'Afficher les {n} autres',        en: 'Show the {n} others' },
    'security.renovatePending': { fr: 'Mises à jour proposées par Renovate :', en: 'Updates proposed by Renovate:' },
    'security.thCurrent': { fr: 'Actuelle',                       en: 'Current' },
    'security.thAvailable': { fr: 'Disponible',                   en: 'Available' },
    'security.thFile':    { fr: 'Fichier',                        en: 'File' },
    'security.thLib':     { fr: 'Librairie',                      en: 'Library' },
    'security.thVersionsUsed': { fr: 'Versions utilisées',        en: 'Versions in use' },
    'security.thModules': { fr: 'Modules',                        en: 'Modules' },
    'security.nVersions': { fr: '{n} versions',                   en: '{n} versions' },
    'security.moreLibs':  { fr: '{n} autres : affiner la recherche.', en: '{n} more: refine your search.' },
    'security.noScanYet': { fr: 'Pas encore de scan publié (data/security.json).', en: 'No scan published yet (data/security.json).' },
    'security.footer':    { fr: 'Scan quotidien <a href="https://trivy.dev" target="_blank" rel="noopener">Trivy</a> des sous-modules d’open-ent-mods, au commit du gitlink · mises à jour proposées par <a href="https://docs.renovatebot.com" target="_blank" rel="noopener">Renovate</a> (le samedi).',
                            en: 'Daily <a href="https://trivy.dev" target="_blank" rel="noopener">Trivy</a> scan of the open-ent-mods submodules, at the gitlink commit · updates proposed by <a href="https://docs.renovatebot.com" target="_blank" rel="noopener">Renovate</a> (on Saturdays).' },
    // ── lcm.html ─────────────────────────────────────────
    'lcm.title':      { fr: 'Open-ENT — Cycle de vie des composants', en: 'Open-ENT — Component lifecycle' },
    'lcm.h1a':        { fr: 'Cycle de vie',                       en: 'Component' },
    'lcm.h1b':        { fr: 'des composants',                     en: 'lifecycle' },
    'lcm.subtitle':   { fr: 'Fin de support des briques techniques d’Open ENT v3, et ce qu’il reste de marge',
                        en: 'End of support for the technical building blocks of Open ENT v3, and the runway left' },
    'lcm.intro':      { fr: 'Open ENT v3 n’est pas un logiciel isolé : il s’exécute sur une chaîne de briques — machine virtuelle Java, Node.js, Vert.x, bases de données, moteur de recherche, orchestrateur — qui ont chacune leur propre calendrier de fin de support. Cette page donne, pour chaque brique, la version réellement déployée et la date à laquelle elle cesse de recevoir des correctifs.',
                        en: 'Open ENT v3 is not a standalone piece of software: it runs on a chain of building blocks — Java virtual machine, Node.js, Vert.x, databases, search engine, orchestrator — each with its own end-of-support calendar. This page gives, for every block, the version actually deployed and the date it stops receiving fixes.' },
    'lcm.loading':    { fr: 'Chargement du cycle de vie…',        en: 'Loading the lifecycle data…' },
    'lcm.error':      { fr: 'Impossible de charger les données : {msg}', en: 'Could not load the data: {msg}' },

    'lcm.st.expired': { fr: 'Hors support',                       en: 'Out of support' },
    'lcm.st.urgent':  { fr: 'Moins de 12 mois',                   en: 'Under 12 months' },
    'lcm.st.watch':   { fr: 'Moins de 24 mois',                   en: 'Under 24 months' },
    'lcm.st.ok':      { fr: 'Plus de 24 mois',                    en: 'Over 24 months' },
    'lcm.st.rolling': { fr: 'Flux continu',                       en: 'Rolling release' },
    'lcm.st.expiredShort': { fr: 'Hors support',                  en: 'Out of support' },

    'lcm.timelineTitle': { fr: 'Marge de support restante',        en: 'Remaining support runway' },
    'lcm.timelineHint':  { fr: 'Chaque barre part d’aujourd’hui et s’arrête à la fin de support annoncée. Les barres rouges, à gauche du repère, mesurent le retard déjà pris.',
                            en: 'Every bar starts today and ends at the announced end of support. Red bars, left of the marker, measure the delay already taken.' },
    'lcm.today':      { fr: 'aujourd’hui',                      en: 'today' },
    'lcm.tableTitle': { fr: 'Détail par composant',               en: 'Component by component' },
    'lcm.thComponent':{ fr: 'Composant',                          en: 'Component' },
    'lcm.thVersion':  { fr: 'Version déployée',                 en: 'Deployed version' },
    'lcm.thWhere':    { fr: 'Dans la plateforme',                 en: 'In the platform' },
    'lcm.thEol':      { fr: 'Fin de support',                     en: 'End of support' },
    'lcm.thLeft':     { fr: 'Marge',                              en: 'Runway' },
    'lcm.rolling':    { fr: 'Pas de branche LTS',                 en: 'No LTS branch' },
    'lcm.rollingLong':{ fr: 'Projet sans branche de maintenance : seule la dernière version publiée reçoit des correctifs.',
                        en: 'Project without a maintenance branch: only the latest published release receives fixes.' },
    'lcm.activeUntil':{ fr: 'Support actif jusqu’au {date}, puis maintenance.', en: 'Active support until {date}, then maintenance.' },
    'lcm.extended':   { fr: 'Support étendu (payant) jusqu’au {date}.', en: 'Extended (paid) support until {date}.' },
    'lcm.target':     { fr: 'Cible',                              en: 'Target' },
    'lcm.since':      { fr: 'depuis {date}',                      en: 'since {date}' },
    'lcm.expiredSince': { fr: 'dépassée depuis {dur}',          en: '{dur} past due' },
    'lcm.years':      { fr: '{n} ans',                            en: '{n} yrs' },
    'lcm.year':       { fr: '{n} an',                             en: '{n} yr' },
    'lcm.months':     { fr: '{n} mois',                           en: '{n} mo' },
    'lcm.yearsMonths':{ fr: '{y} · {m}',                         en: '{y} · {m}' },
    'lcm.lessMonth':  { fr: 'moins d’un mois',                   en: 'under a month' },

    'lcm.whyTitle':   { fr: 'Pourquoi Open ENT v3 suit les versions supportées', en: 'Why Open ENT v3 tracks supported versions' },
    'lcm.whyLead':    { fr: 'Tenir la chaîne technique à jour n’est pas un confort d’ingénierie : c’est ce qui permet de corriger une faille le jour où elle sort, et de ne pas transformer une mise à jour en projet.',
                        en: 'Keeping the technical chain current is not an engineering comfort: it is what makes it possible to fix a flaw the day it lands, and to stop upgrades from turning into projects.' },
    'lcm.why1t':      { fr: 'Une version hors support ne se corrige plus', en: 'An unsupported version no longer gets fixed' },
    'lcm.why1b':      { fr: 'Passée la date de fin de vie, l’éditeur ou la communauté ne publie plus de correctif, même pour une vulnérabilité critique. Le scan quotidien des dépendances continue de signaler la faille, mais il n’existe plus de version vers laquelle aller.',
                        en: 'Past the end-of-life date, the vendor or the community stops publishing fixes, even for a critical vulnerability. The daily dependency scan still reports the flaw, but there is no version left to move to.' },
    'lcm.why2t':      { fr: 'Des données scolaires, donc un niveau d’exigence', en: 'School data, and the duty of care that comes with it' },
    'lcm.why2b':      { fr: 'Un ENT traite les données personnelles d’élèves mineurs. Le RGPD demande un niveau de protection conforme à l’état de l’art, et les référentiels d’hébergement comme les marchés publics demandent des composants maintenus. Une brique hors support est un point de non-conformité documentable.',
                        en: 'A digital learning environment processes the personal data of minors. The GDPR requires protection in line with the state of the art, and both hosting frameworks and public tenders require maintained components. An unsupported block is a documentable compliance gap.' },
    'lcm.why3t':      { fr: 'Migrer tôt, c’est migrer petit',     en: 'Migrating early means migrating small' },
    'lcm.why3b':      { fr: 'Une montée reportée se paie en saut de plusieurs versions majeures d’un seul coup : fenêtre d’indisponibilité longue, régressions difficiles à cerner, retour arrière coûteux. Suivre le rythme de l’amont transforme ces ruptures en gestes de routine.',
                        en: 'A deferred upgrade is paid for as a jump across several majors at once: a long maintenance window, regressions that are hard to pin down, an expensive rollback. Following the upstream cadence turns those breaks into routine moves.' },
    'lcm.why4t':      { fr: 'Rester capable d’évoluer',           en: 'Staying able to move' },
    'lcm.why4b':      { fr: 'Les versions récentes apportent les gains de performance, les correctifs amont et les outils sur lesquels s’appuient les nouveaux développements. Une plateforme figée finit par bloquer ses propres fonctionnalités — une dépendance qui refuse de se construire suffit.',
                        en: 'Recent versions bring the performance gains, the upstream fixes and the tooling that new development builds on. A frozen platform ends up blocking its own features — one dependency that refuses to build is enough.' },

    'lcm.howTitle':   { fr: 'Comment la mise à jour est tenue',   en: 'How the upgrades are kept up' },
    'lcm.how1t':      { fr: 'Veille',                             en: 'Watch' },
    'lcm.how1b':      { fr: 'Les dates sont relevées sur endoflife.date et sur les annonces des projets amont, puis revues à chaque campagne.',
                        en: 'Dates are taken from endoflife.date and from upstream project announcements, then reviewed at every campaign.' },
    'lcm.how2t':      { fr: 'Mises à jour automatisées',          en: 'Automated updates' },
    'lcm.how2b':      { fr: 'Renovate ouvre chaque semaine les demandes de montée de dépendances sur tous les dépôts ; l’intégration continue construit et publie l’artefact correspondant.',
                        en: 'Renovate opens dependency update requests across every repository each week; continuous integration builds and publishes the matching artifact.' },
    'lcm.how3t':      { fr: 'Campagnes groupées',                 en: 'Grouped campaigns' },
    'lcm.how3b':      { fr: 'Les sauts structurants sont menés d’un bloc sur l’ensemble des dépôts : JDK 25 et Node 26 en novembre 2026, bascule du graphe de l’annuaire vers ArcadeDB en octobre 2026, avec rejeu des tests de bout en bout.',
                        en: 'Structural jumps are carried out across all repositories at once: JDK 25 and Node 26 in November 2026, the directory graph moving to ArcadeDB in October 2026, with the end-to-end tests replayed.' },
    'lcm.how4t':      { fr: 'Traçabilité',                       en: 'Traceability' },
    'lcm.how4b':      { fr: 'Chaque version déployée est épinglée dans le chart de déploiement et visible, module par module, sur le tableau de bord des artefacts et la page des librairies.',
                        en: 'Every deployed version is pinned in the deployment chart and visible, module by module, on the artifacts dashboard and the libraries page.' },

    'lcm.footer':     { fr: 'Dates relevées le {date} sur <a href="https://endoflife.date" target="_blank" rel="noopener">endoflife.date</a> et les annonces des projets amont · versions lues dans le chart de déploiement de la plateforme.',
                        en: 'Dates collected on {date} from <a href="https://endoflife.date" target="_blank" rel="noopener">endoflife.date</a> and upstream project announcements · versions read from the platform deployment chart.' },

    'security.footer2':   { fr: 'Dépôts privés : seuls les compteurs sont publiés. Les dépendances Maven sont lues sans résolution distante : seules celles dont la version figure dans le pom sont analysées.',
                            en: 'Private repositories: only the counters are published. Maven dependencies are read without remote resolution: only those whose version appears in the pom are analysed.' }
  };

  var LANGS = ['fr', 'en'];
  var STORE = 'openent.lang';
  var LOCALES = { fr: 'fr-FR', en: 'en-GB' };

  function stored() {
    try { return localStorage.getItem(STORE); } catch (e) { return null; }
  }
  function detect() {
    var q = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(q) >= 0) return q;
    var s = stored();
    if (LANGS.indexOf(s) >= 0) return s;
    var nav = (navigator.languages || [navigator.language || 'fr'])[0] || 'fr';
    return nav.toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }

  var lang = detect();
  var listeners = [];

  function t(key, vars) {
    var entry = STRINGS[key];
    var s = entry ? (entry[lang] != null ? entry[lang] : entry.fr) : key;
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (m, k) {
        return vars[k] != null ? vars[k] : m;
      });
    }
    return s;
  }

  // Applique les clés posées dans le balisage statique.
  function apply(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = t(key);
      else el.textContent = t(key);
    });
    ['title', 'placeholder', 'aria-label'].forEach(function (attr) {
      root.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        el.setAttribute(attr, t(el.getAttribute('data-i18n-' + attr)));
      });
    });
    document.documentElement.lang = lang;
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE, lang); } catch (e) { /* mode privé */ }
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
    I18N.lang = lang;
    I18N.locale = LOCALES[lang];
    apply(document);
    renderSwitches();
    listeners.forEach(function (fn) { try { fn(lang); } catch (e) { console.error(e); } });
  }

  // ── Sélecteur de langue ─────────────────────────────────────────────
  var CSS = '' +
    '.lang-switch{display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:999px;' +
    'border:1px solid var(--border,#2e3354);background:var(--surface,#1a1d27);vertical-align:middle;}' +
    '.lang-switch button{appearance:none;border:0;background:transparent;cursor:pointer;' +
    'font:700 0.7rem/1 Inter,system-ui,sans-serif;letter-spacing:.06em;color:var(--muted,#8892aa);' +
    'padding:5px 9px;border-radius:999px;transition:background .15s,color .15s;}' +
    '.lang-switch button:hover{color:var(--text,#e2e8f0);}' +
    '.lang-switch button[aria-pressed="true"]{background:var(--accent,#4f8ef7);color:#fff;}';

  function renderSwitches() {
    document.querySelectorAll('[data-lang-switch]').forEach(function (host) {
      host.innerHTML = '<div class="lang-switch" role="group" aria-label="Language">' +
        LANGS.map(function (l) {
          return '<button type="button" data-set-lang="' + l + '" aria-pressed="' +
            (l === lang) + '" lang="' + l + '">' + l.toUpperCase() + '</button>';
        }).join('') + '</div>';
    });
  }

  function mount() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    renderSwitches();
    apply(document);
    document.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-set-lang]') : null;
      if (b) setLang(b.dataset.setLang);
    });
  }

  var I18N = {
    lang: lang,
    locale: LOCALES[lang],
    t: t,
    apply: apply,
    setLang: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };

  window.I18N = I18N;
  window.t = t;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
