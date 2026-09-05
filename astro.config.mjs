// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { homeContent } from './src/i18n/home.ts';

// Production domain — must match Netlify's PRIMARY domain (apex, no www; www 301s here).
// `site` is required for the sitemap and for absolute canonical/OG URLs.
const SITE_URL = 'https://kernstemcare.com';

// Partner detail pages whose business name is still a "[bracket]" placeholder.
// PartnerDetailPage.astro noindexes exactly these; the sitemap filter below
// reads the same content so the two can never drift apart again.
const PLACEHOLDER_PARTNERS = homeContent.en.team.partners.filter((p) => p.name.startsWith('[')).map((p) => p.slug);

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
      // Keep noindexed pages out of the sitemap — submitting a URL that also
      // carries a noindex tag is a contradiction Search Console flags as
      // "Excluded by 'noindex' tag". Covers: the bare root (noindex redirect
      // to /en/), and the partner detail pages that are still placeholder.
      //
      // The placeholder list is derived from the content rather than written
      // out by hand: PartnerDetailPage noindexes a partner whose name is still
      // a "[bracket]" placeholder, and this filter has to agree with it. It
      // did not — partner-clinic-1 and partner-lab-1 got real names (Timeless
      // Beauty, NAO Biotechnology) and stayed excluded here, which is why
      // Search Console reported them "Discovered - currently not indexed".
      filter: (page) => page !== `${SITE_URL}/` && !PLACEHOLDER_PARTNERS.some((slug) => new RegExp(`/partners/${slug}/?$`).test(page)),
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
