import { readFileSync } from 'node:fs';
const b64 = f => readFileSync(new URL(`./fonts/${f}`, import.meta.url)).toString('base64');
const F = { r: b64('Inter-4.ttf'), m: b64('Inter-3.ttf'), s: b64('Inter-2.ttf'), b: b64('Inter-1.ttf'), d: b64('Fraunces.ttf') };

const money = n => '$' + n.toLocaleString('en-US');

export function render(c) {
  const total = c.pricing.reduce((s, r) => s + r.amount, 0);
  const face = (w, k) => `@font-face{font-family:Inter;font-weight:${w};src:url(data:font/ttf;base64,${F[k]})format('truetype')}`;

  return `<!doctype html><html><head><meta charset="utf-8"><style>
${face(400,'r')}${face(500,'m')}${face(600,'s')}${face(700,'b')}
@font-face{font-family:Display;font-weight:600;src:url(data:font/ttf;base64,${F.d})format('truetype')}
@page{size:A4;margin:0}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,sans-serif;color:#1a1d21;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.pg{width:210mm;height:297mm;padding:22mm 20mm;position:relative;page-break-after:always;overflow:hidden}
.pg:last-child{page-break-after:auto}
.num{position:absolute;bottom:12mm;right:20mm;font-size:8pt;color:#9aa1a9;letter-spacing:.08em}
.rule{position:absolute;bottom:12mm;left:20mm;font-size:8pt;color:#9aa1a9;letter-spacing:.12em;text-transform:uppercase}
h1{font-family:Display;font-size:34pt;line-height:1.1;font-weight:600;letter-spacing:-.01em}
h2{font-family:Display;font-size:20pt;font-weight:600;margin-bottom:6mm;letter-spacing:-.01em}
h3{font-size:10pt;font-weight:600;margin-bottom:2mm}
p{font-size:9.5pt;line-height:1.65;color:#3d444c}
.lede{font-size:11pt;line-height:1.6;color:#2b3138}
.eyebrow{font-size:8pt;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${c.accent}}
.bar{width:24mm;height:1.6mm;background:${c.accent};margin:5mm 0 8mm}
/* cover */
.cover{background:${c.dark};color:#fff;display:flex;flex-direction:column;justify-content:space-between}
.cover h1{color:#fff;font-size:40pt;max-width:135mm}
.cover .eyebrow{color:${c.accent}}
.cover p{color:#b9c0c8}
.meta{display:flex;gap:14mm;border-top:1px solid rgba(255,255,255,.15);padding-top:6mm}
.meta div{font-size:8.5pt}
.meta span{display:block;color:#8b939c;font-size:7.5pt;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.5mm}
.meta b{color:#fff;font-weight:500}
/* blocks */
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:8mm 10mm;margin-top:7mm}
.stat{border-top:2px solid ${c.accent};padding-top:3mm}
.stat b{display:block;font-family:Display;font-size:22pt;font-weight:600;line-height:1}
.stat span{font-size:8.5pt;color:#6b7480}
.item{display:flex;gap:5mm;margin-bottom:5mm}
.item .n{font-family:Display;font-size:13pt;color:${c.accent};font-weight:600;min-width:9mm}
table{width:100%;border-collapse:collapse;margin-top:5mm}
th{text-align:left;font-size:7.5pt;letter-spacing:.12em;text-transform:uppercase;color:#8b939c;padding-bottom:3mm;border-bottom:1px solid #e3e7eb;font-weight:600}
td{padding:4mm 0;border-bottom:1px solid #eef1f4;font-size:9.5pt;vertical-align:top}
td.r,th.r{text-align:right}
.tot td{border-bottom:none;border-top:2px solid ${c.dark};font-weight:700;font-size:12pt;padding-top:4mm}
.phase{display:grid;grid-template-columns:26mm 1fr;gap:5mm;padding:4mm 0;border-bottom:1px solid #eef1f4}
.phase b{font-size:9pt;color:${c.accent}}
.sign{display:grid;grid-template-columns:1fr 1fr;gap:12mm;margin-top:14mm}
.sign div{border-top:1px solid #1a1d21;padding-top:3mm;font-size:8.5pt;color:#6b7480}
.note{background:#f6f8fa;border-left:2.5mm solid ${c.accent};padding:5mm 6mm;margin-top:7mm}
.note p{font-size:9pt;color:#3d444c}
</style></head><body>

<section class="pg cover">
  <div><div class="eyebrow">${c.docLabel}</div><div class="bar"></div>
  <h1>${c.title}</h1>
  <p style="margin-top:6mm;font-size:11pt;max-width:110mm">${c.subtitle}</p></div>
  <div class="meta">
    <div><span>Prepared for</span><b>${c.client}</b></div>
    <div><span>Prepared by</span><b>${c.company}</b></div>
    <div><span>Date</span><b>${c.date}</b></div>
    <div><span>Valid until</span><b>${c.validUntil}</b></div>
  </div>
</section>

<section class="pg">
  <div class="eyebrow">01 — Overview</div><div class="bar"></div>
  <h2>${c.overview.heading}</h2>
  <p class="lede">${c.overview.lede}</p>
  <div class="grid2">
    ${c.overview.stats.map(s => `<div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join('')}
  </div>
  <div class="note"><p><b>${c.overview.noteTitle}</b> — ${c.overview.note}</p></div>
  <div class="rule">${c.company}</div><div class="num">02</div>
</section>

<section class="pg">
  <div class="eyebrow">02 — Scope of work</div><div class="bar"></div>
  <h2>${c.scope.heading}</h2>
  <p style="margin-bottom:7mm">${c.scope.intro}</p>
  ${c.scope.items.map((s, i) => `<div class="item"><div class="n">${String(i + 1).padStart(2, '0')}</div>
    <div><h3>${s.title}</h3><p>${s.body}</p></div></div>`).join('')}
  <div class="rule">${c.company}</div><div class="num">03</div>
</section>

<section class="pg">
  <div class="eyebrow">03 — Timeline</div><div class="bar"></div>
  <h2>${c.timeline.heading}</h2>
  <p style="margin-bottom:6mm">${c.timeline.intro}</p>
  ${c.timeline.phases.map(p => `<div class="phase"><b>${p.when}</b><div><h3>${p.title}</h3><p>${p.body}</p></div></div>`).join('')}
  <div class="rule">${c.company}</div><div class="num">04</div>
</section>

<section class="pg">
  <div class="eyebrow">04 — Investment</div><div class="bar"></div>
  <h2>${c.pricingHeading}</h2>
  <table><thead><tr><th>Item</th><th>Detail</th><th class="r">Amount</th></tr></thead><tbody>
  ${c.pricing.map(r => `<tr><td><b>${r.item}</b></td><td style="color:#6b7480">${r.detail}</td><td class="r">${money(r.amount)}</td></tr>`).join('')}
  <tr class="tot"><td>Total</td><td></td><td class="r">${money(total)}</td></tr>
  </tbody></table>
  <div class="note"><p>${c.pricingNote}</p></div>
  <div class="rule">${c.company}</div><div class="num">05</div>
</section>

<section class="pg">
  <div class="eyebrow">05 — Terms &amp; acceptance</div><div class="bar"></div>
  <h2>Terms of engagement</h2>
  ${c.terms.map((t, i) => `<div class="item"><div class="n">${String(i + 1).padStart(2, '0')}</div>
    <div><h3>${t.title}</h3><p>${t.body}</p></div></div>`).join('')}
  <div class="sign">
    <div>Signature — ${c.client}<br><br><br></div>
    <div>Signature — ${c.company}<br><br><br></div>
  </div>
  <div class="rule">${c.company}</div><div class="num">06</div>
</section>

</body></html>`;
}
