import type { Lang } from './ui';

/**
 * Shared navigation model. The site is multi-page: every page uses the same
 * SiteHeader / SiteFooter, and the menu links to all of them.
 * Route slugs are shared across languages (e.g. /en/services, /es/services);
 * only the labels are localized.
 */

export interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
}

const labels = {
  en: {
    tagline: 'Medical Coordination Agency · Cancún',
    home: 'Home',
    services: 'Services',
    stemCells: 'Stem Cells',
    exosomes: 'Exosomes',
    fibroblasts: 'Fibroblasts',
    placenta: 'Freeze-Dried Placenta',
    about: 'About',
    process: 'International Patients',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
    consult: 'Book a Consultation',
  },
  es: {
    tagline: 'Agencia de Coordinación Médica · Cancún',
    home: 'Inicio',
    services: 'Servicios',
    stemCells: 'Células Madre',
    exosomes: 'Exosomas',
    fibroblasts: 'Fibroblastos',
    placenta: 'Placenta Liofilizada',
    about: 'Sobre Nosotros',
    process: 'Pacientes Internacionales',
    testimonials: 'Testimonios',
    blog: 'Blog',
    contact: 'Contacto',
    consult: 'Agendar Consulta',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export const navLabels = labels;

/** Top-level menu (Services holds the three individual service pages). */
export function getNav(lang: Lang): NavItem[] {
  const t = labels[lang];
  const base = `/${lang}`;
  return [
    { path: `${base}`, label: t.home },
    {
      path: `${base}/services`,
      label: t.services,
      children: [
        { path: `${base}/services/stem-cells`, label: t.stemCells },
        { path: `${base}/services/exosomes`, label: t.exosomes },
        { path: `${base}/services/fibroblasts`, label: t.fibroblasts },
        { path: `${base}/services/placenta`, label: t.placenta },
      ],
    },
    { path: `${base}/about`, label: t.about },
    { path: `${base}/process`, label: t.process },
    { path: `${base}/testimonials`, label: t.testimonials },
    { path: `${base}/blog`, label: t.blog },
    { path: `${base}/contact`, label: t.contact },
  ];
}

export function getConsultLabel(lang: Lang): string {
  return labels[lang].consult;
}

export function getTagline(lang: Lang): string {
  return labels[lang].tagline;
}
