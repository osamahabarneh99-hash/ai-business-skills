import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { render } from './template.mjs';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dir = new URL('../config/', import.meta.url);
const targets = process.argv[2] ? [process.argv[2] + '.json'] : readdirSync(dir);
const browser = await chromium.launch();

for (const f of targets.filter(f => f.endsWith('.json'))) {
  const cfg = JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
  const html = render(cfg);
  writeFileSync(new URL(`../out/${cfg.slug}.html`, import.meta.url), html);
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({ path: new URL(`../out/${cfg.slug}.pdf`, import.meta.url).pathname,
                   width: '210mm', height: '297mm', printBackground: true });
  await page.close();
  console.log(`✅ ${cfg.slug}.pdf`);
}
await browser.close();
