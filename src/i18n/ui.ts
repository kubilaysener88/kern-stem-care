export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

// Site-level UI strings (titles, meta). Page content lives in home.ts / legal.ts.
export const ui = {
  en: {
    'site.title': 'Kern Stem Care | Regenerative Medicine in Mexico for International Patients',
    'site.description':
      'Kern Stem Care coordinates stem cell & regenerative care in Cancún, Mexico for patients worldwide — including the U.S. and Canada. Vetted, licensed clinics, plus travel and appointments. Not a clinic; your trusted guide.',
    'site.shortTitle': 'Kern Stem Care',
  },
  es: {
    'site.title': 'Kern Stem Care | Medicina Regenerativa en México para Pacientes Internacionales',
    'site.description':
      'Kern Stem Care coordina atención con células madre y regenerativa en Cancún, México para pacientes de todo el mundo — incluyendo EE.UU. y Canadá. Clínicas certificadas, viaje y citas. No es una clínica; tu guía de confianza.',
    'site.shortTitle': 'Kern Stem Care',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
