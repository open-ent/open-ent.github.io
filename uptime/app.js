const fmtPct = (v) => (typeof v === 'number' ? `${v.toFixed(3)}%` : '-');
const fmtMs = (v) => (typeof v === 'number' ? `${v} ms` : '-');

function fmtDate(iso) {
  if (!iso) return '-';
  const d = new Date(iso);
  return `${d.toLocaleDateString('fr-FR')} ${d.toLocaleTimeString('fr-FR')}`;
}

function durationLabel(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return '0 min';
  const totalMin = Math.round(ms / 60000);
  if (totalMin < 60) return `${totalMin} min`;
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${h}h ${m}min`;
}

function setCurrentStatus(summary) {
  const statusPulse = document.getElementById('statusPulse');
  const statusText = document.getElementById('statusText');
  const dot = statusPulse.querySelector('.dot');

  const isUp = summary?.current?.isUp;
  if (isUp === true) {
    statusText.textContent = `Operationnel (${summary.current.httpStatus})`;
    dot.style.background = 'var(--up)';
    dot.style.boxShadow = '0 0 0 0 rgba(39, 208, 125, 0.7)';
  } else if (isUp === false) {
    statusText.textContent = `Incident en cours (${summary.current.httpStatus ?? 'ERR'})`;
    dot.style.background = 'var(--down)';
    dot.style.boxShadow = '0 0 0 0 rgba(255, 77, 109, 0.75)';
  } else {
    statusText.textContent = 'En attente de donnees';
  }
}

function setMetrics(summary) {
  document.getElementById('uptime24h').textContent = fmtPct(summary.availability.last24h);
  document.getElementById('uptime7d').textContent = fmtPct(summary.availability.last7d);
  document.getElementById('uptime30d').textContent = fmtPct(summary.availability.last30d);
  document.getElementById('latencyAvg').textContent = fmtMs(summary.latencyMs.avg);
  document.getElementById('generatedAt').textContent = `Mis a jour: ${fmtDate(summary.generatedAt)}`;
}

function drawLatencyChart(history) {
  const canvas = document.getElementById('latencyChart');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const points = history.slice(-240);
  const latencies = points.map((p) => p.responseTimeMs).filter((x) => Number.isFinite(x));

  if (!latencies.length) {
    ctx.fillStyle = '#bfd0ef';
    ctx.font = '16px Space Grotesk, sans-serif';
    ctx.fillText('Pas assez de mesures pour afficher la courbe', 24, 40);
    return;
  }

  const max = Math.max(...latencies, 1);
  const min = Math.min(...latencies, 0);

  ctx.strokeStyle = 'rgba(191, 208, 239, 0.18)';
  ctx.lineWidth = 1;
  for (let i = 1; i <= 4; i += 1) {
    const y = (height / 5) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.beginPath();
  points.forEach((p, idx) => {
    const value = Number.isFinite(p.responseTimeMs) ? p.responseTimeMs : max;
    const x = (idx / (points.length - 1 || 1)) * (width - 30) + 15;
    const y = height - 15 - ((value - min) / (max - min || 1)) * (height - 30);
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.strokeStyle = '#3ea6ff';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function renderUptimeBar(history) {
  const bar = document.getElementById('uptimeBar');
  const last24h = history.slice(-288);

  bar.innerHTML = '';
  for (const p of last24h) {
    const cell = document.createElement('span');
    cell.className = `uptime-cell ${p.isUp ? 'up' : 'down'}`;
    cell.title = `${fmtDate(p.timestamp)} - ${p.isUp ? 'UP' : 'DOWN'}${p.httpStatus ? ` (${p.httpStatus})` : ''}`;
    bar.appendChild(cell);
  }
}

function renderIncidents(summary) {
  const list = document.getElementById('incidentsList');
  const count = document.getElementById('incidentCount');
  const incidents = (summary.incidents || []).slice(-12).reverse();

  count.textContent = `${incidents.length} incident${incidents.length > 1 ? 's' : ''}`;
  list.innerHTML = '';

  if (!incidents.length) {
    const li = document.createElement('li');
    li.className = 'incident';
    li.innerHTML = '<p class="incident-title">Aucun incident recent</p><p class="incident-meta">Le service est stable sur la periode observee.</p>';
    list.appendChild(li);
    return;
  }

  for (const incident of incidents) {
    const li = document.createElement('li');
    li.className = 'incident';

    const title = `Incident ${incident.worstStatus ?? 'ERR'} - ${durationLabel(incident.durationMs)}`;
    const meta = `${fmtDate(incident.startedAt)} -> ${fmtDate(incident.endedAt)} | checks down: ${incident.checks}`;

    li.innerHTML = `
      <p class="incident-title">${title}</p>
      <p class="incident-meta">${meta}</p>
    `;
    list.appendChild(li);
  }
}

async function loadStatus() {
  const [summaryRes, historyRes] = await Promise.all([
    fetch('./data/latest.json', { cache: 'no-store' }),
    fetch('./data/history.json', { cache: 'no-store' }),
  ]);

  const summary = await summaryRes.json();
  const history = await historyRes.json();

  setCurrentStatus(summary);
  setMetrics(summary);
  drawLatencyChart(history);
  renderUptimeBar(history);
  renderIncidents(summary);
}

async function run() {
  try {
    await loadStatus();
  } catch (err) {
    const statusText = document.getElementById('statusText');
    statusText.textContent = `Erreur de chargement des donnees: ${String(err)}`;
  }
}

run();
setInterval(run, 60000);
