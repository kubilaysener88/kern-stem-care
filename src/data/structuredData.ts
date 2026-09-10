import type { Lang } from '../i18n/ui';

/**
 * Schema.org JSON-LD builders.
 *
 * Kern Stem Care is positioned as a *coordination agency, not a clinic* (see
 * CLAUDE.md), so the organization is modeled as an `Organization` with
 * `additionalType` TravelAgency — NOT as a `MedicalBusiness` (which would assert it
 * is itself a medical provider). The individual cellular therapies are described as
 * `MedicalProcedure` nodes (educational); the actual care is delivered by
 * independent, licensed partner providers.
 *
 * Replace every [bracketed] value with real data before publishing.
 */

const ORG_TYPE = 'Organization';
const ORG_ADDITIONAL_TYPE = 'https://schema.org/TravelAgency';
const ORG_ID = '#organization';

export type ProcedureKey = 'stemCells' | 'exosomes' | 'fibroblasts';

interface Localized {
  name: string;
  description: string;
}

const orgDescription: Record<Lang, string> = {
  en: 'Medical coordination agency based in Cancún, Mexico. We guide patients from the United States and Canada and coordinate travel, lodging, appointments, and bilingual support with independent, licensed clinics, physicians, and cellular-therapy laboratories. We are not a clinic and do not provide medical treatment; all care is delivered by independent, government-licensed (COFEPRIS) providers.',
  es: 'Agencia de coordinación médica con sede en Cancún, México. Guiamos a pacientes de Estados Unidos y Canadá y coordinamos viaje, hospedaje, citas y acompañamiento bilingüe con clínicas, médicos y laboratorios de terapia celular independientes y con licencia. No somos una clínica y no brindamos tratamiento médico; toda la atención la brindan proveedores independientes con licencia gubernamental (COFEPRIS).',
};

const procedureMeta: Record<ProcedureKey, { slug: string; en: Localized; es: Localized }> = {
  stemCells: {
    slug: 'stem-cells',
    en: {
      name: 'Stem Cell Therapy',
      description:
        'Regenerative cellular therapy using stem cells, studied for tissue repair and regeneration. Provided by independent, licensed partner clinics in Cancún. Many such therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational; individual results vary.',
    },
    es: {
      name: 'Terapia con Células Madre',
      description:
        'Terapia celular regenerativa con células madre, estudiada para la reparación y regeneración de tejidos. La brindan clínicas aliadas independientes y certificadas en Cancún. Muchas de estas terapias no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación; los resultados individuales varían.',
    },
  },
  exosomes: {
    slug: 'exosomes',
    en: {
      name: 'Exosome Therapy',
      description:
        'Regenerative cellular therapy using exosomes, studied for cell-to-cell signaling and regenerative processes. Provided by independent, licensed partner clinics in Cancún. Many such therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational; individual results vary.',
    },
    es: {
      name: 'Terapia con Exosomas',
      description:
        'Terapia celular regenerativa con exosomas, estudiada por su papel en la señalización entre células y los procesos regenerativos. La brindan clínicas aliadas independientes y certificadas en Cancún. Muchas de estas terapias no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación; los resultados individuales varían.',
    },
  },
  fibroblasts: {
    slug: 'fibroblasts',
    en: {
      name: 'Fibroblast Therapy',
      description:
        'Regenerative cellular therapy using fibroblasts, studied in skin, wound, and regenerative applications. Provided by independent, licensed partner clinics in Cancún. Many such therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational; individual results vary.',
    },
    es: {
      name: 'Terapia con Fibroblastos',
      description:
        'Terapia celular regenerativa con fibroblastos, estudiada en aplicaciones de piel, cicatrización y regeneración. La brindan clínicas aliadas independientes y certificadas en Cancún. Muchas de estas terapias no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación; los resultados individuales varían.',
    },
  },
};

/** Organization identity node — agency, not a clinic (see NOTE above). */
export function organizationNode(site: string, lang: Lang) {
  return {
    '@type': ORG_TYPE,
    additionalType: ORG_ADDITIONAL_TYPE,
    '@id': `${site}/${ORG_ID}`,
    name: 'Kern Stem Care',
    description: orgDescription[lang],
    url: `${site}/${lang}/`,
    logo: `${site}/assets/logo/kern-icon-color.png`,
    image: `${site}/og-image.jpg`,
    telephone: '+52 998 767 8979',
    email: 'kernstemcare@gmail.com',
    priceRange: '$850 - $7500',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Retorno Viento, SM 4, Núm. 10',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      postalCode: '77500',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '21.152350', longitude: '-86.823734' },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Mexico' },
    ],
    availableLanguage: ['en', 'es'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        // The contact page has always said 9am–6pm; the schema said 8am–8pm.
        // Google reads both, and a Business Profile would have made a third
        // version. 9–6 is the real one.
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/kernstemcare/',
      'https://www.youtube.com/@KernStemCare',
      'https://www.tiktok.com/@kernstemcare',
    ],
  };
}

/**
 * The site's medical reviewer.
 *
 * A physician, which is what the clinical claims need standing behind them —
 * which grades of osteoarthritis respond, when a therapy is not appropriate,
 * whether something is safe. Her cédula is a *Médico Cirujano* licence with no
 * specialty registered on top of it, and the schema below says exactly that so
 * nothing more can be read into it.
 *
 * Named only because she confirmed in writing that she reviewed the articles.
 * `reviewedBy` asserts a review happened; it is not a way to borrow a name.
 */
export const MEDICAL_REVIEWER = {
  name: 'Beleguí Sánchez Guzmán',
  /** Cédula profesional, verifiable at cedulaprofesional.sep.gob.mx. */
  licence: '11082915',
  jobTitle: { en: 'Physician', es: 'Médica' },
} as const;

/** Schema.org Person for the medical reviewer, credential spelled out. */
export function medicalReviewerNode(lang: Lang) {
  return {
    '@type': 'Person',
    name: MEDICAL_REVIEWER.name,
    jobTitle: MEDICAL_REVIEWER.jobTitle[lang],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: lang === 'es' ? 'Cédula profesional' : 'Professional licence',
      identifier: MEDICAL_REVIEWER.licence,
      educationalLevel: lang === 'es' ? 'Licenciatura como Médico Cirujano' : 'Doctor of Medicine (Médico Cirujano)',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Secretaría de Educación Pública',
        url: 'https://cedulaprofesional.sep.gob.mx/',
      },
    },
  };
}

/**
 * The site's scientific reviewer.
 *
 * Kept here, in one place, so the credential published in the byline and the
 * one sent to Google can never drift apart. She reviews the laboratory science
 * — what the cells are, how they are sourced and processed — which is what a
 * biology credential stands behind. The clinical claims wait on a physician,
 * which is why `reviewedBy` in the post frontmatter is a separate field.
 */
export const SCIENCE_REVIEWER = {
  name: 'Teresita Irais Álvarez Olvera',
  /** Cédula profesional, verifiable at cedulaprofesional.sep.gob.mx. */
  licence: '10506533',
  jobTitle: { en: 'Biologist', es: 'Bióloga' },
} as const;

/** Schema.org Person for the scientific reviewer, credential spelled out. */
export function scienceReviewerNode(lang: Lang) {
  return {
    '@type': 'Person',
    name: SCIENCE_REVIEWER.name,
    jobTitle: SCIENCE_REVIEWER.jobTitle[lang],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: lang === 'es' ? 'Cédula profesional' : 'Professional licence',
      identifier: SCIENCE_REVIEWER.licence,
      educationalLevel: lang === 'es' ? 'Licenciatura en Biología' : "Bachelor's degree in Biology",
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Secretaría de Educación Pública',
        url: 'https://cedulaprofesional.sep.gob.mx/',
      },
    },
  };
}

/** A cellular therapy described as a Schema.org MedicalProcedure. */
export function medicalProcedureNode(site: string, lang: Lang, key: ProcedureKey) {
  const meta = procedureMeta[key];
  const t = meta[lang];
  return {
    '@type': 'MedicalProcedure',
    '@id': `${site}/${lang}/services/${meta.slug}#procedure`,
    name: t.name,
    description: t.description,
    url: `${site}/${lang}/services/${meta.slug}/`,
    procedureType: 'https://schema.org/PercutaneousProcedure',
    // Care is delivered by an independent licensed provider, chosen per patient and
    // named on that patient's own quote — so no single provider is asserted here.
    relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Regenerative Medicine' },
  };
}
