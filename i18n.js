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
