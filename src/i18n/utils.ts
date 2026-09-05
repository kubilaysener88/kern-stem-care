import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Extract the language code from a URL like /en/about -> 'en'. */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/** Returns a translator function bound to the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Strip the leading locale segment from a path: /es/blog/ -> /blog/.
 * The trailing slash is preserved deliberately — it is part of the canonical
 * URL (see `withSlash`), and the hreflang alternates are built from this.
 */
export function getRouteFromUrl(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] in ui) segments.shift();
  const route = '/' + segments.join('/');
  return route === '/' ? '/' : withSlash(route);
}

/**
 * Give an internal path its trailing slash.
 *
 * Astro builds every route as a directory (`/en/about/index.html`), so the
 * canonical tag and the sitemap both use `/en/about/` — and Netlify answers a
 * link written as `/en/about` with a 301 to that form. Search Console was
 * filing 27 URLs under "Page with redirect" for exactly this reason, and the
 * hreflang alternates pointed at the redirecting form too, which matters more:
 * an hreflang cluster is only honoured when it annotates the canonical URL.
 *
 * Anything that is not a site path is returned untouched — absolute URLs,
 * mailto/tel, bare fragments, and files with an extension (/og-image.jpg).
 */
export function withSlash(href: string): string {
  if (!href.startsWith('/')) return href;
  const hashAt = href.indexOf('#');
  const path = hashAt === -1 ? href : href.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : href.slice(hashAt);
  if (path.endsWith('/')) return path + hash;
  if (/\.[a-z0-9]+$/i.test(path)) return href;
  return path + '/' + hash;
}

/** Turn a heading (EN or ES, accents included) into a stable anchor id. */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
