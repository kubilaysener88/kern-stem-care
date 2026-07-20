// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production domain — must match Netlify's PRIMARY domain (apex, no www; www 301s here).
// `site` is required for the sitemap and for absolute canonical/OG URLs.
const SITE_URL = 'https://kernstemcare.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Inline all CSS into the page <head> so the critical stylesheet never blocks
  // rendering on a separate request (the bundle is small and gzips well).
  build: {
    inlineStylesheets: 'always',
  },

  // astro:assets — <Image>/<Picture> emit modern formats (WebP/AVIF) and lazy-load
  // by default. Allow the YouTube thumbnail host for remote image processing.
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },

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
