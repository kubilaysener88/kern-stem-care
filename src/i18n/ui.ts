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
      'Kern Stem Care is a medical coordination agency in Cancún, Mexico. We guide patients from the U.S. and Canada and coordinate travel, lodging, and appointments with independent, licensed regenerative-medicine clinics and laboratories. Not a clinic — your trusted guide.',
    'site.shortTitle': 'Kern Stem Care',
  },
  es: {
    'site.title': 'Kern Stem Care | Medicina Regenerativa en México para Pacientes de EE.UU. y Canadá',
    'site.description':
      'Kern Stem Care es una agencia de coordinación médica en Cancún, México. Guiamos a pacientes de EE.UU. y Canadá y coordinamos viaje, hospedaje y citas con clínicas y laboratorios de medicina regenerativa independientes y certificados. No somos una clínica — somos tu guía de confianza.',
    'site.shortTitle': 'Kern Stem Care',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
