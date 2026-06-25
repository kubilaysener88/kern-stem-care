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
npm run test:a11y # axe-core WCAG 2.1 AA scan of every route (Playwright)
```

> First-time a11y setup: `npx playwright install chromium`. The test builds + serves
> the site and fails on any WCAG 2.1 A/AA violation (incl. color contrast).

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
- `docs/` — non-site reference material (advertising guide, testimonial script).

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
4. **Media:** carousel and testimonial cards carry bracketed placeholders for real
   `<img>`, `<video>`, or YouTube embeds.
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

## TODO backlog (carried over)

- Replace all `[bracketed]` placeholders with real client data.
- Add `public/og-image.jpg` (referenced by social meta) and real carousel/testimonial media.
- Fill in partner clinics/labs and coordinator profiles (with written permission).
- Connect the contact + newsletter forms to a real email/CRM endpoint (currently a stub `fakeSubmit`).
- Set the real WhatsApp number in the floating button (`wa.me/1XXXXXXXXXX`).
- Have a lawyer review `src/i18n/legal.ts` (Privacy/Terms) for MX/US/CA.
