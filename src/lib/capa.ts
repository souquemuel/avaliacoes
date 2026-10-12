// Gera capas em SVG para os artigos (sem imagens externas).
// Cada tema tem um motivo gráfico; o slug varia a composição.

type TemaCapa = 'pedir' | 'responder' | 'usar' | 'guia';

const ROTULO: Record<TemaCapa, string> = {
  pedir: 'PEDIR',
  responder: 'RESPONDER',
  usar: 'USAR',
  guia: 'GUIA COMPLETO',
};

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return Math.abs(h);
}

const estrela = (cx: number, cy: number, r: number, fill: string, op = 1) => {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const ang = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.45;
    pts.push(`${(cx + rr * Math.cos(ang)).toFixed(1)},${(cy + rr * Math.sin(ang)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}" opacity="${op}"/>`;
};

const linhasTexto = (x: number, y: number, larguras: number[], cor: string) =>
  larguras.map((w, i) => `<rect x="${x}" y="${y + i * 16}" width="${w}" height="7" rx="3.5" fill="${cor}"/>`).join('');

function motivo(tema: TemaCapa, v: number): string {
  const ouro = '#d6a84a';
  const claro = 'rgba(255,255,255,.14)';
  const ox = 300 + (v % 5) * 6;
  const oy = 70 + (v % 3) * 6;
  if (tema === 'pedir') {
    // Balão de conversa com estrelas sendo preenchidas
    return `
      <g transform="translate(${ox} ${oy})">
        <rect x="0" y="0" width="220" height="120" rx="22" fill="#1f232d" stroke="${ouro}" stroke-opacity=".5"/>
        <path d="M40 120 l0 34 l34 -34z" fill="#1f232d" stroke="${ouro}" stroke-opacity=".5"/>
        <rect x="38" y="118" width="38" height="4" fill="#1f232d"/>
        ${[0, 1, 2, 3, 4].map((i) => estrela(42 + i * 34, 48, 14, i < 3 + (v % 3) ? ouro : claro)).join('')}
        ${linhasTexto(28, 78, [150, 110], claro)}
      </g>
      <circle cx="${ox + 250}" cy="${oy + 150}" r="34" fill="${ouro}"/>
      <path d="M${ox + 236} ${oy + 150} l10 10 l20 -22" stroke="#14161c" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  if (tema === 'responder') {
    // Avaliação + resposta da empresa
    return `
      <g transform="translate(${ox - 10} ${oy - 10})">
        <rect x="0" y="0" width="210" height="96" rx="18" fill="#1f232d" stroke="rgba(255,255,255,.12)"/>
        ${[0, 1, 2, 3, 4].map((i) => estrela(30 + i * 24, 30, 9, i < 2 + (v % 2) ? ouro : claro)).join('')}
        ${linhasTexto(20, 52, [160, 120], claro)}
      </g>
      <g transform="translate(${ox + 60} ${oy + 104})">
        <rect x="0" y="0" width="210" height="88" rx="18" fill="${ouro}"/>
        <circle cx="30" cy="30" r="12" fill="#14161c"/>
        ${linhasTexto(52, 24, [120], 'rgba(20,22,28,.55)')}
        ${linhasTexto(20, 52, [170, 130], 'rgba(20,22,28,.35)')}
      </g>`;
  }
  if (tema === 'usar') {
    // Estrela que vira gráfico de crescimento
    const alturas = [40, 62, 54, 88, 120].map((h) => h + (v % 4) * 4);
    return `
      <g transform="translate(${ox} ${oy + 10})">
        ${alturas.map((h, i) => `<rect x="${i * 44}" y="${170 - h}" width="30" height="${h}" rx="6" fill="${i === 4 ? ouro : 'rgba(255,255,255,.16)'}"/>`).join('')}
        <path d="M15 ${170 - alturas[0] - 18} L59 ${170 - alturas[1] - 18} L103 ${170 - alturas[2] - 18} L147 ${170 - alturas[3] - 18} L191 ${170 - alturas[4] - 18}" stroke="${ouro}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        ${estrela(191, 170 - alturas[4] - 18, 18, ouro)}
      </g>`;
  }
  // guia: constelação de estrelas
  const pts = [[0, 60], [70, 10], [150, 50], [230, 0], [200, 110], [110, 150]].map(([x, y]) => [x + ox - 20, y + oy + 10]);
  return `
    <polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="${ouro}" stroke-opacity=".45" stroke-width="2"/>
    ${pts.map(([x, y], i) => estrela(x, y, i === 3 ? 30 : 14 + (i % 3) * 3, ouro, i === 3 ? 1 : 0.85)).join('')}`;
}

export function capaSvg(tema: string, slug: string, opcoes: { rotulo?: string; titulo?: string } = {}): string {
  const t = (['pedir', 'responder', 'usar', 'guia'].includes(tema) ? tema : 'guia') as TemaCapa;
  const v = hash(slug);
  const id = `g${v % 100000}`;
  const rotulo = opcoes.rotulo ?? ROTULO[t];
  return `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
  <defs>
    <radialGradient id="${id}" cx="${70 + (v % 20)}%" cy="${30 + (v % 30)}%" r="70%">
      <stop offset="0" stop-color="#3a2f17"/><stop offset=".55" stop-color="#1a1c23"/><stop offset="1" stop-color="#121419"/>
    </radialGradient>
    <pattern id="p${id}" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.06)"/></pattern>
  </defs>
  <rect width="640" height="360" fill="url(#${id})"/>
  <rect width="640" height="360" fill="url(#p${id})"/>
  ${motivo(t, v)}
  <text x="40" y="64" fill="#d6a84a" font-family="Inter Variable, system-ui, sans-serif" font-size="15" font-weight="700" letter-spacing="3">${rotulo}</text>
  <rect x="40" y="78" width="36" height="3" fill="#d6a84a"/>
  ${opcoes.titulo ? `<text x="40" y="310" fill="#fff" font-family="Fraunces Variable, Georgia, serif" font-size="30" font-weight="600">${opcoes.titulo}</text>` : ''}
</svg>`;
}

export function tempoLeitura(texto: string | undefined): number {
  const palavras = (texto ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(palavras / 200));
}
