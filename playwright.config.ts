import { defineConfig, devices } from '@playwright/test';

/**
 * Accessibility test runner. `npm run test:a11y` builds the site, serves the
 * production output with `astro preview`, and runs axe-core (WCAG 2.1 AA) against
 * every route. See tests/a11y.spec.ts.
 *
 * Every route runs twice — desktop and mobile. Some failures only exist at one
 * width: the home page's decorative journey blobs, for example, sit behind the
 * section heading only once the layout collapses to a single column, which drops
 * that heading below the AA contrast threshold on phones while desktop passes.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:4321',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4321/en',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
