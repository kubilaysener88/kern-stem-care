import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
import { chromium } from 'playwright';

/**
 * Lighthouse audit against the running preview (production build).
 * Usage: node scripts/lighthouse.mjs [url] [mobile|desktop]
 * Needs `npm run preview` serving on http://localhost:4321.
 * Uses the Playwright-managed Chromium unless CHROME_PATH is set.
 */
const url = process.argv[2] || 'http://localhost:4321/en';
const formFactor = process.argv[3] || 'mobile';

const chrome = await launch({
  chromePath: process.env.CHROME_PATH || chromium.executablePath(),
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});

const opts = {
  port: chrome.port,
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  logLevel: 'error',
};
if (formFactor === 'desktop') {
  opts.formFactor = 'desktop';
  opts.screenEmulation = { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false };
  opts.throttling = { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 };
}

const { lhr } = await lighthouse(url, opts);
await chrome.kill();

console.log(`\n=== Lighthouse (${formFactor}) — ${url} ===`);
const order = ['performance', 'accessibility', 'best-practices', 'seo'];
for (const id of order) {
  const c = lhr.categories[id];
  console.log(`  ${c.title.padEnd(16)} ${Math.round(c.score * 100)}`);
}

console.log('\n--- Key metrics ---');
for (const m of ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']) {
  const a = lhr.audits[m];
  if (a) console.log(`  ${a.title.padEnd(28)} ${a.displayValue ?? a.score}`);
}

console.log('\n--- Failing / sub-100 audits (by category) ---');
for (const id of order) {
  const cat = lhr.categories[id];
  const failing = cat.auditRefs
    .map((ref) => ({ ref, a: lhr.audits[ref.id] }))
    .filter(({ a }) => a && a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative')
    .sort((x, y) => (y.ref.weight || 0) - (x.ref.weight || 0));
  if (!failing.length) continue;
  console.log(`\n  [${cat.title}]`);
  for (const { ref, a } of failing) {
    console.log(`    • (${a.score === null ? '-' : Math.round(a.score * 100)}) w=${ref.weight} ${a.id}: ${a.title}${a.displayValue ? ' → ' + a.displayValue : ''}`);
  }
}
console.log('');
