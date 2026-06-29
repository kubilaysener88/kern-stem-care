import { chromium } from 'playwright';

/**
 * Quick Core Web Vitals probe against the running preview (production build).
 * Usage: node scripts/measure-cwv.mjs            (defaults to a few routes)
 * Requires `npm run preview` serving on http://localhost:4321.
 */
const BASE = process.env.BASE ?? 'http://localhost:4321';
const ROUTES = process.argv.slice(2).length ? process.argv.slice(2) : ['/en', '/en/testimonials'];

const browser = await chromium.launch();

for (const route of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE + route, { waitUntil: 'load' });

  // Count render-blocking stylesheets in <head>.
  const blockingCss = await page.evaluate(
    () => document.querySelectorAll('head link[rel="stylesheet"]:not([media="print"])').length
  );

  // Collect LCP + CLS via PerformanceObserver, then settle.
  const vitals = await page.evaluate(
    () =>
      new Promise((resolve) => {
        let lcp = 0;
        let lcpEl = '';
        let cls = 0;
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) {
            lcp = e.startTime;
            lcpEl = e.element ? e.element.tagName + (e.element.className ? '.' + String(e.element.className).split(' ')[0] : '') : '';
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value;
        }).observe({ type: 'layout-shift', buffered: true });
        // Let layout settle (lazy thumbnails, fonts) then report.
        setTimeout(() => resolve({ lcp: Math.round(lcp), lcpEl, cls: +cls.toFixed(4) }), 2500);
      })
  );

  const lcpRating = vitals.lcp <= 2500 ? 'good' : vitals.lcp <= 4000 ? 'needs-improvement' : 'poor';
  const clsRating = vitals.cls <= 0.1 ? 'good' : vitals.cls <= 0.25 ? 'needs-improvement' : 'poor';
  console.log(
    `${route.padEnd(22)} LCP ${String(vitals.lcp + 'ms').padEnd(8)}(${lcpRating}, ${vitals.lcpEl})  CLS ${String(vitals.cls).padEnd(7)}(${clsRating})  render-blocking CSS: ${blockingCss}`
  );
  await page.close();
}

await browser.close();
