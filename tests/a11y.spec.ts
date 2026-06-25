import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type { Result } from 'axe-core';

/**
 * WCAG 2.1 AA accessibility checks for every route, powered by axe-core.
 * Run with `npm run test:a11y` (builds + serves + scans).
 */

const ROUTES = [
  '/en',
  '/es',
  '/en/services',
  '/es/services',
  '/en/services/stem-cells',
  '/en/services/exosomes',
  '/en/services/fibroblasts',
  '/es/services/stem-cells',
  '/en/about',
  '/es/about',
  '/en/process',
  '/es/process',
  '/en/testimonials',
  '/es/testimonials',
  '/en/contact',
  '/es/contact',
  '/en/privacy',
  '/es/privacy',
  '/en/terms',
  '/es/terms',
  '/en/medical-disclaimer',
  '/es/medical-disclaimer',
];

const WCAG_AA_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

function format(violations: Result[]): string {
  if (!violations.length) return '';
  return violations
    .map((v) => {
      const targets = v.nodes.map((n) => `      - ${n.target.join(' ')}`).join('\n');
      return `  [${v.impact ?? 'n/a'}] ${v.id}: ${v.help}\n    ${v.helpUrl}\n${targets}`;
    })
    .join('\n');
}

for (const route of ROUTES) {
  test(`a11y (WCAG 2.1 AA): ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'load' });
    const { violations } = await new AxeBuilder({ page }).withTags(WCAG_AA_TAGS).analyze();
    if (violations.length) {
      console.log(`\n✗ ${route}\n${format(violations)}\n`);
    }
    expect(violations, `${violations.length} accessibility violation(s) on ${route}`).toEqual([]);
  });
}
