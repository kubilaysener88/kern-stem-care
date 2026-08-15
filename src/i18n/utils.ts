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

/** Strip the leading locale segment from a path: /es/blog -> /blog. */
export function getRouteFromUrl(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] in ui) segments.shift();
  return '/' + segments.join('/');
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
