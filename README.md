# Kern Stem Care — website

Bilingual (EN/ES) marketing site for **Kern Stem Care**, a medical coordination
agency in Cancún, Mexico, serving patients from the U.S. and Canada.

> **Kern Stem Care is an agency, not a clinic.** Keep the "agency, not a clinic"
> framing and all medical disclaimers intact. See [CLAUDE.md](CLAUDE.md).

Built with **Astro 7**, **TypeScript**, **Tailwind CSS v4**, `@astrojs/sitemap`,
and per-language routing (`/en`, `/es`).

## Requirements

- **Node.js >= 22.12.0** (Astro 7 requirement). Install the latest LTS, then:
  ```bash
  node --version
  ```

## Getting started

```bash
cd astro-site
npm install
npm run dev
```

Open http://localhost:4321 — `/` redirects to `/en`. Try `/en`, `/es`,
`/en/privacy`, `/es/privacy`, `/en/terms`, `/es/terms`.

## Scripts

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`          |
| `npm run build`   | Type-check (`astro check`) and build to `./dist/` |
| `npm run preview` | Preview the production build locally              |
| `npm run check`   | Run the Astro/TypeScript type checker             |
| `npm run test:a11y` | Build, serve, and scan every route with axe-core (WCAG 2.1 AA) |

## Accessibility testing

`npm run test:a11y` runs [axe-core](https://github.com/dequelabs/axe-core) (via
Playwright) against **every route** and fails on any WCAG 2.1 A/AA violation —
including color contrast, which needs real rendering. It builds the site, serves
`dist/` with `astro preview`, and scans all pages. Run it before deploying or wire it
into CI. First-time setup needs the browser once: `npx playwright install chromium`.

## Structure

The site is multi-page: every page renders through `SiteLayout`, which provides the
shared `SiteHeader` (menu links to all pages) and `SiteFooter`.

```
src/
├── components/
│   ├── SiteHeader.astro     # Shared header: menu (Services dropdown), lang switch, CTA
│   ├── SiteFooter.astro     # Shared footer + floating WhatsApp button
│   ├── BaseHead.astro       # SEO: title, canonical, hreflang, OG, Twitter
│   ├── PageHero.astro       # Interior-page hero (eyebrow + title + lead)
│   ├── ProseSections.astro  # Renders a list of {h2, body} sections
│   ├── HomeContent.astro    # Home body sections (scoped CSS + carousel/filter JS)
│   ├── HomeSchema.astro     # JSON-LD (Organization + localized FAQPage)
│   ├── LegalContent.astro   # Privacy/Terms renderer (own minimal chrome)
│   └── pages/               # One component per interior page type
│       ├── ServicesPage.astro       ServiceDetailPage.astro
│       ├── AboutPage.astro           ProcessPage.astro
│       └── TestimonialsPage.astro    ContactPage.astro
├── i18n/
│   ├── ui.ts                # Site-level strings + languages
│   ├── nav.ts               # Shared menu model (labels + routes)
│   ├── home.ts              # Home content, per language
│   ├── pages.ts             # Interior-page content, per language
│   ├── legal.ts             # Privacy + Terms content, per language
│   └── utils.ts             # Language/route helpers
├── layouts/
│   ├── BaseLayout.astro     # Minimal HTML shell + head slot
│   └── SiteLayout.astro     # BaseLayout + SiteHeader + <main> + SiteFooter
├── pages/
│   ├── index.astro          # "/" -> "/en"
│   ├── en/ , es/            # index, services/(index|stem-cells|exosomes|fibroblasts),
│   │                        #   about, process, testimonials, contact, privacy, terms
└── styles/
    └── global.css           # Brand tokens + shared design primitives (Tailwind entry)
public/
├── favicon.svg              # Genesis mark
├── assets/logo/             # Brand logos
└── robots.txt               # Points to the sitemap
docs/                        # Reference material (not part of the built site)
```

## Before going live

- Set the real domain in **two** places: `SITE_URL` in `astro.config.mjs` and the
  `Sitemap:` line in `public/robots.txt`.
- Replace every `[bracketed]` placeholder with real client data (phone, email,
  license numbers, prices, partner/coordinator details).
- Add `public/og-image.jpg` for social sharing and real carousel/testimonial media.
- Wire the contact + newsletter forms to a real email/CRM endpoint (currently a stub).
- Set the WhatsApp number in `src/components/HomeContent.astro` (`wa.me/1XXXXXXXXXX`).
- Have a lawyer review the Privacy/Terms templates in `src/i18n/legal.ts`.

## Adding content / a new language

All copy lives in `src/i18n/*.ts` — add both the `en` and `es` value. To add a
locale, extend `locales` in `astro.config.mjs` (+ the sitemap `i18n.locales`),
`languages` in `src/i18n/ui.ts`, and the `Record<Lang, …>` content maps.
