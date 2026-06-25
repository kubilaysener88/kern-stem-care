// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production domain. Replace once the real domain is purchased/confirmed.
// `site` is required for the sitemap and for absolute canonical/OG URLs.
const SITE_URL = 'https://www.kernstemcare.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Per-language routing: /en and /es (default locale is also prefixed).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      // The root redirect ( / -> /en ) is handled explicitly by src/pages/index.astro.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
