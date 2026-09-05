# CLAUDE.md — Kern Stem Care website (Astro)

Context for Claude Code. Read this before editing.

## What this project is

A bilingual (English / Spanish) marketing website for **Kern Stem Care**, a
**medical coordination agency** based in Cancún, Mexico, serving patients from
the **United States and Canada**. The agency coordinates and guides patients to
independent, licensed clinics, physicians, and cellular-therapy laboratories.

**Critical positioning:** Kern Stem Care is an AGENCY, NOT a clinic. It does not
provide medical treatment. Keep this clear everywhere. Medical care is delivered
by independent, licensed (COFEPRIS) partner providers.

> This is the **Astro** rebuild of the original static HTML site. The content is
> identical; the delivery is now a typed, route-based i18n Astro project.

## Tech stack

- **Astro 7** (requires Node >= 22.12.0), **TypeScript** (strict).
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js`). Available
  for new work; the existing Kern design is hand-written CSS preserved as scoped
  component styles for fidelity.
- **@astrojs/sitemap** generates `sitemap-index.xml` on build.
- Route-based i18n: English at `/en`, Spanish at `/es` (no client-side toggle).
- **Multi-page**: every page uses the shared `SiteLayout` (same `SiteHeader` /
  `SiteFooter`); the menu links to all pages. Nav model lives in `src/i18n/nav.ts`.

## Commands

```bash
npm install      # first time (needs Node >= 22.12.0)
npm run dev      # dev server at localhost:4321 ( /  ->  /en )
npm run build    # astro check + build to ./dist
npm run preview  # preview the production build
npm run test:a11y # axe-core WCAG 2.1 AA scan of every route, desktop + mobile (Playwright)
```

> First-time a11y setup: `npx playwright install chromium`. The test builds + serves
> the site and fails on any WCAG 2.1 A/AA violation (incl. color contrast). Every
> route runs twice — `desktop` and `mobile` projects (see `playwright.config.ts`) —
> because some violations only exist at one width: a decorative blob that sits
> behind a heading once the layout stacks, or a table that only overflows in the
> longer Spanish copy. Desktop-only runs missed both.

## File map

- `astro.config.mjs` — `site`, i18n (`prefixDefaultLocale: true`), sitemap, Tailwind.
- `src/styles/global.css` — design tokens + shared primitives (buttons, `.section`,
  `.card`, `.grid`, forms, `.page-hero`…). Reused by every page.
- `src/i18n/ui.ts` — site-level strings (titles, meta descriptions) + `languages`.
- `src/i18n/nav.ts` — shared menu model (`getNav`, labels, consult CTA, tagline).
- `src/i18n/home.ts` — **all** home-page content, typed, per language (`homeContent`).
- `src/i18n/pages.ts` — content for the interior pages (`pagesContent`): services,
  the 3 service details, about, process, testimonials, contact.
- `src/i18n/legal.ts` — Privacy + Terms & Conditions + Medical Disclaimer content,
  per language (`legalContent`), plus `legalNav()` (footer links to the 3 legal pages).
- `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations`, `getRouteFromUrl`.
- `src/data/structuredData.ts` — JSON-LD builders: `organizationNode`
  (Organization + additionalType TravelAgency — agency, not a clinic) and
  `medicalProcedureNode` (the 3 therapies). `ORG_TYPE` controls the org schema type.
- `src/layouts/BaseLayout.astro` — HTML shell: `Seo` + site-wide `StructuredData`
  (Organization / TravelAgency) + `<slot name="head">`.
- `src/layouts/SiteLayout.astro` — BaseLayout + `SiteHeader` + `<main>` + `SiteFooter`.
  **Every content page uses this.**
- `src/components/SiteHeader.astro` — shared header: brand, full menu (Services is a
  dropdown), route-aware language switch, CTA, mobile hamburger.
- `src/components/SiteFooter.astro` — shared footer + floating WhatsApp button.
- `src/components/Seo.astro` — **reusable SEO head**: title/description/image →
  meta + Open Graph + Twitter Card + hreflang (en/es/x-default) + canonical + robots.
- `src/components/StructuredData.astro` — emits JSON-LD (`business` + `procedures` props).
- `src/components/PageHero.astro` / `ProseSections.astro` — interior-page building blocks.
- `src/components/VideoTestimonial.astro` — lazy "facade" video card: thumbnail + play,
  loads the YouTube/Vimeo `<iframe>` only on click. Used by the Testimonials page grid.
- `src/components/HomeContent.astro` — home body sections (markup + scoped CSS + JS).
- `src/components/HomeSchema.astro` — localized FAQPage JSON-LD (home only).
- `src/components/LegalContent.astro` — legal-page body (Privacy / Terms / Medical
  Disclaimer), renders inside `SiteLayout`; cross-links the other two legal pages.
- `src/components/CookieConsent.astro` — accessible cookie-consent banner (shown on
  every page via `SiteLayout`; choice persists in `localStorage['ksc-cookie-consent']`).
- `src/components/pages/*.astro` — one component per interior page type
  (Services, ServiceDetail, About, Process, Testimonials, Contact).
- `src/pages/index.astro` — redirects `/` → `/en`.
- `src/pages/{en,es}/index.astro` — home pages.
- `src/pages/{en,es}/services/` — `index` + `stem-cells` / `exosomes` / `fibroblasts`.
- `src/pages/{en,es}/{about,process,testimonials,contact}.astro` — interior pages.
- `src/pages/{en,es}/{privacy,terms,medical-disclaimer}.astro` — legal pages.
- `src/pages/robots.txt.ts` — dynamically generated `/robots.txt` (Sitemap from `site`).
- `public/favicon.svg` — Genesis mark.
- `public/assets/logo/` — brand logos (Genesis primary, Union secondary).
- `docs/` — non-site reference material. `voz-de-marca.md` is the **brand voice file**:
  read it before writing any patient-facing copy, blog post, or social/Google Business
  post. Also: advertising guide (`guia-publicidad-eeuu-canada.md`) and testimonial
  script (`guion-testimoniales.md`).

## Brand

- Colors (CSS vars in `src/styles/global.css`): blue `#1565c0`, teal `#0a9396`,
  navy `#0d2a4a`, gold accent `#c9a227`.
- Logo "Genesis": two overlapping circles (cells) with a gold nucleus. Used as the
  inline header/footer mark and the favicon.
- Wordmark: "KERN" (navy) + "STEM CARE" (teal).

## Conventions (IMPORTANT — follow these)

1. **Bilingual content:** every user-facing string lives once per language in the
   `src/i18n/*.ts` dictionaries. To add content, add BOTH the `en` and `es` value.
   Do NOT reintroduce the old `data-en`/`data-es` DOM-toggle pattern — languages are
   separate routes now.
2. **Placeholders:** text inside `[square brackets]` (often class `ph`) is a
   placeholder for the client's real data (phone, email, license numbers, prices,
   photos, video embeds). Don't invent real values — leave bracketed placeholders.
3. **Honesty / compliance (non-negotiable):**
   - No unproven medical claims, no promises of cure, no "X% success".
   - Keep the "agency, not a clinic" framing and the medical disclaimers.
   - Note that therapies may not be FDA / Health Canada approved (investigational).
   - Testimonials require "results vary / not typical" + written consent.
4. **Media / images (performance):**
   - Put real raster images in `src/assets/` and render them with `<Image>` /
     `<Picture>` from `astro:assets` — they emit AVIF/WebP and lazy-load. Always pass
     `width`/`height` (or an aspect-ratio box) to avoid layout shift (CLS).
   - `VideoTestimonial`'s `thumbnail` prop takes an imported image (`ImageMetadata`)
     → optimized `<Picture>`; a YouTube id auto-uses YouTube's own WebP thumbnail.
   - Exception: `public/og-image.jpg` (social card) stays a static file in `public/`
     with a stable URL — social scrapers don't run Astro's image pipeline. Use 1200×630.
   - Carousel / testimonial cards carry bracketed placeholders for the real media.
5. **Domain:** the production domain is set in `astro.config.mjs` (`SITE_URL`) and
   `public/robots.txt`. Replace `kernstemcare.com` if the real domain differs.
6. **Accessibility (WCAG 2.1 AA) — keep it passing:**
   - Use `var(--teal-text)` (not `--teal`) for teal **text** on light backgrounds.
   - Every form control needs a real label: wrap it as `<label><span>…</span><input/></label>`
     (or give an `aria-label`). Don't rely on `placeholder` alone.
   - One `<h1>` per page (via `PageHero`); don't skip heading levels — add a
     `<h2 class="sr-only">` for a visually-headless section.
   - Decorative icons/emoji get `aria-hidden="true"`; meaningful links need a
     descriptive name (e.g. `aria-label`), not just "Learn more".
7. **Performance / Core Web Vitals:**
   - Fonts are a **system stack** (no web fonts) — keep it that way, or load any
     web font with `font-display: swap` + `preload` to avoid blocking/CLS.
   - CSS is inlined per route (`build.inlineStylesheets: 'always'`) so the critical
     CSS never blocks rendering. Measured: LCP = the H1 (text), CLS = 0.
   - Quick check: `npm run preview` then `node scripts/measure-cwv.mjs /en /en/contact`.
   - Full Lighthouse: `npm run preview` then `npm run lighthouse -- /en mobile` (or
     `desktop`). Scores: desktop 100/100/100/100; home-mobile ~99/100/100/100.
     Non-critical home JS is deferred.
9. **Motion:** scroll-reveal animations were removed (they read as the page
   "re-opening" on navigation). Only subtle CSS hovers remain. Clicking a nav link
   for the page you're already on scrolls to top instead of reloading (`SiteHeader`).
8. **Analytics (privacy-friendly, consent-gated):** Plausible + Google Analytics 4,
   configured in `src/config/analytics.ts` (each provider has its own `enabled` flag)
   and loaded by `src/components/Analytics.astro`. GA4 is live (`ga.enabled: true`,
   measurement ID `G-FJ5KMGCBDS`); Plausible stays `enabled: false` until the domain
   is registered at plausible.io. Both load ONLY after the visitor accepts cookies,
   and `window.kscTrack(name, props)` is a no-op without consent and forwards to
   every enabled provider. Track a new event by adding `data-analytics-event="…"` to
   a link/form, or calling `window.kscTrack('…')` from a script. Current events:
   `Book Consultation` (header CTA), `Contact Form Submit`, `Testimonial Play`,
   `Estimate Form Submit`. The Privacy Policy's cookies/analytics section already
   mentions Google Analytics — update it if the provider mix changes.
10. **Internal links carry a trailing slash.** Astro builds every route as a
    directory, so `/en/about/` is the canonical URL — the canonical tag, the
    sitemap and the hreflang alternates all use it, and Netlify 301s the
    slashless form. Never hand-write `href="/en/about"`; wrap the path in
    `withSlash()` from `src/i18n/utils.ts` at the point where the `<a>` is
    rendered (so nav.ts and the i18n dictionaries stay free of the
    bookkeeping), and end markdown links in blog posts with the slash.
11. **SEO extras:** breadcrumbs (`Breadcrumbs.astro`, visible + `BreadcrumbList` JSON-LD)
    on every interior page; per-keyword meta titles in `src/i18n/pages.ts`; social image
    at `public/og-image.jpg` (regenerate with `node scripts/gen-og.mjs`). NOTE: services
    use `MedicalProcedure` (provider = independent clinic), not `Service`, to keep the
    "agency, not a clinic" framing — don't add `Service` schema for the therapies.
12. **Blog / resources** (`src/content/blog/`): add a post by dropping
    `src/content/blog/<en|es>/<slug>.md` with the frontmatter from `src/content.config.ts`
    (`title, description, lang, pubDate, reviewedBy, …`). It auto-appears on `/<lang>/blog`,
    at `/<lang>/blog/<slug>`, in the sitemap, and emits `BlogPosting` JSON-LD. For health
    content set `reviewedBy` (E-E-A-T). `draft: true` hides it. Every post ends
    with a "Keep reading" block of up to 3 sibling posts, chosen by shared
    `tags` with recency as the tie-break — so `tags` are the internal-linking
    mechanism between posts, not decoration. Before this existed each post had
    a single inbound link (from `/blog/`) and none outbound, and Search Console
    was reporting the older English posts as "Discovered - currently not
    indexed".

## TODO backlog (carried over)

- Replace all `[bracketed]` placeholders with real client data.
- Replace the placeholder blog posts with real, keyword-targeted articles (set `reviewedBy`).
- Add real carousel/testimonial media (`og-image.jpg` is now generated).
- Fill in partner clinics/labs and coordinator profiles (with written permission).
- Forms are wired to **Netlify Forms** (`data-netlify`, names: `contact`, `lead`,
  `newsletter`; shared AJAX handler in `FormHandler.astro`, deploy config in
  `netlify.toml`). After the first deploy, set up notifications in the Netlify UI
  (Forms → Settings → email/Slack/webhook). To use a different backend instead,
  point `FormHandler.astro`'s `fetch` at it.
- Set the real WhatsApp number in the floating button (`wa.me/1XXXXXXXXXX`).
- Have a lawyer review `src/i18n/legal.ts` (Privacy/Terms) for MX/US/CA.
