export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

// Site-level UI strings (titles, meta). Page content lives in home.ts / legal.ts.
export const ui = {
  en: {
    'site.title': 'Kern Stem Care | Regenerative Medicine in Mexico for U.S. & Canada Patients',
    'site.description':
      'Kern Stem Care coordinates stem cell & regenerative care in Cancún, Mexico for U.S. and Canada patients — vetted independent, licensed clinics, plus travel and appointments. Not a clinic; your trusted guide.',
    'site.shortTitle': 'Kern Stem Care',
  },
  es: {
    'site.title': 'Kern Stem Care | Medicina Regenerativa en México para Pacientes de EE.UU. y Canadá',
    'site.description':
      'Kern Stem Care coordina atención con células madre y regenerativa en Cancún, México para pacientes de EE.UU. y Canadá — clínicas certificadas, viaje y citas. No es una clínica; tu guía de confianza.',
    'site.shortTitle': 'Kern Stem Care',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
