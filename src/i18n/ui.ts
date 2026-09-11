export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

// Site-level UI strings (titles, meta). Page content lives in home.ts / legal.ts.
export const ui = {
  en: {
    'site.title': 'Kern Stem Care — Stem Cell Therapy in Cancún, Mexico',
    'site.description':
      'Stem cell therapy in Cancún, Mexico, coordinated for patients from the U.S. and Canada. Vetted licensed clinics, published prices, one bilingual coordinator.',
    'site.shortTitle': 'Kern Stem Care',
  },
  es: {
    'site.title': 'Kern Stem Care — Células Madre en Cancún, México',
    'site.description':
      'Terapia con células madre en Cancún, México, coordinada para pacientes de EE.UU. y Canadá. Clínicas con licencia, precios publicados y un coordinador bilingüe.',
    'site.shortTitle': 'Kern Stem Care',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
