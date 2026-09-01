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
  es: 'Agencia de coordinación médica con sede en Cancún, México. Guiamos a pacientes de Estados Unidos y Canadá y coordinamos viaje, hospedaje, citas y acompañamiento bilingüe con clínicas, médicos y laboratorios de terapia celular independientes y certificados. No somos una clínica y no brindamos tratamiento médico; toda la atención la brindan proveedores independientes con licencia gubernamental (COFEPRIS).',
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
    url: `${site}/${lang}`,
    logo: `${site}/assets/logo/kern-icon-color.png`,
    image: `${site}/og-image.jpg`,
    telephone: '+52 998 767 8979',
    email: 'kernstemcare@gmail.com',
    priceRange: '[$$]',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Retorno Viento, SM 4, Núm. 10',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      postalCode: '[ZIP]',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '[00.000000]', longitude: '[-00.000000]' },
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
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      '[https://www.facebook.com/yourpage]',
      '[https://www.instagram.com/yourpage]',
      '[https://www.youtube.com/yourchannel]',
    ],
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
    url: `${site}/${lang}/services/${meta.slug}`,
    procedureType: 'https://schema.org/PercutaneousProcedure',
    // Care is delivered by independent licensed providers, coordinated by the agency.
    provider: { '@type': 'MedicalBusiness', name: '[Independent licensed partner provider]' },
    relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Regenerative Medicine' },
  };
}
