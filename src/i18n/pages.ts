import type { Lang } from './ui';

/**
 * Placeholder content for the interior pages (services, service details, about,
 * process, testimonials, contact). Real copy/data goes where you see [brackets].
 * Keep the "agency, not a clinic" framing and the medical disclaimers (CLAUDE.md).
 */

export interface PageSection {
  h2: string;
  body: string; // inline HTML allowed
}
export interface ServiceCard {
  icon: string;
  slug: 'stem-cells' | 'exosomes' | 'fibroblasts';
  title: string;
  body: string;
}
export interface TestimonialCard {
  provider: 'youtube' | 'vimeo';
  videoId: string;
  thumbnail?: string;
  tag: string;
  name: string;
  meta: string;
  summary: string;
}

export interface SimplePage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: PageSection[];
  disclaimer?: string;
}
export interface ServicesIndexPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cards: ServiceCard[];
  disclaimer: string;
}
export interface ProcessPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  steps: { title: string; body: string }[];
  sections: PageSection[];
}
export interface TestimonialsPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  cards: TestimonialCard[];
  disclaimer: string;
}
export interface ContactPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
}

export interface PagesSet {
  services: ServicesIndexPage;
  stemCells: SimplePage;
  exosomes: SimplePage;
  fibroblasts: SimplePage;
  about: SimplePage;
  process: ProcessPage;
  testimonials: TestimonialsPage;
  contact: ContactPage;
}

const investigationalEN =
  '<strong>Important:</strong> Kern Stem Care is a coordination agency and does not provide medical treatment or advice. These therapies are offered by independent, licensed providers. Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Individual results vary; no outcome or cure is guaranteed.';
const investigationalES =
  '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación y no brinda tratamiento ni consejo médico. Estas terapias las ofrecen proveedores independientes y certificados. Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Los resultados individuales varían; no se garantiza ningún resultado ni cura.';

const en: PagesSet = {
  services: {
    metaTitle: 'Regenerative Therapies in Cancún, Mexico | Kern Stem Care',
    metaDescription:
      'Compare the cellular therapies we help U.S. and Canadian patients access in Cancún — stem cells, exosomes and fibroblasts — through independent, licensed clinics and labs.',
    eyebrow: 'What We Coordinate',
    title: 'Services',
    lead: 'We coordinate access to three core cellular therapies — offered by independent, licensed partner clinics and laboratories in Cancún. Choose a therapy to learn more. <span class="ph">[Edit this overview.]</span>',
    cards: [
      { icon: '🧬', slug: 'stem-cells', title: 'Stem Cells', body: 'Cells studied for their role in tissue repair and regeneration — the central pillar of every protocol in our network. <span class="ph">[Edit summary.]</span>' },
      { icon: '✨', slug: 'exosomes', title: 'Exosomes', body: 'Cell-released vesicles studied for their role in cell-to-cell signaling and regenerative processes. <span class="ph">[Edit summary.]</span>' },
      { icon: '🧫', slug: 'fibroblasts', title: 'Fibroblasts', body: 'Collagen-producing cells studied in skin, wound, and regenerative applications. <span class="ph">[Edit summary.]</span>' },
    ],
    disclaimer: investigationalEN,
  },
  stemCells: {
    metaTitle: 'Stem Cell Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Considering stem cell therapy in Cancún? Kern Stem Care coordinates evaluation, licensed-clinic treatment, travel and follow-up for U.S. & Canada patients. Free evaluation.',
    eyebrow: 'Cellular Therapy',
    title: 'Stem Cells',
    lead: 'Here we explain, in simple words, what stem cells are and how they may help you. <span class="ph">[Replace with your own introduction.]</span>',
    sections: [
      { h2: 'In simple words', body: 'Think of your body like a house. Over time, some parts wear out or get damaged. <strong>Stem cells</strong> are like tiny helpers your own body uses to repair itself and build new parts. They are special because they haven\'t picked a "job" yet — they can turn into many kinds of cells, such as bone, skin, or muscle cells.' },
      { h2: 'What are stem cells?', body: 'Stem cells are like the "building blocks" of the body. Every day your body makes new cells to replace old or injured ones, and many of those new cells come from stem cells. Scientists study them closely because of the role they play in the body\'s natural repair and regeneration. <span class="ph">[Edit with the specific stem-cell sources your partners use.]</span>' },
      { h2: 'How may they help you?', body: 'Doctors and clinics study stem cells because they <strong>may</strong> support the body\'s own repair process. Some people look into them for joint discomfort, recovery, or general wellness. Everyone is different, so it\'s normal to have questions — and results are never guaranteed.' },
      { h2: 'What partners use it for', body: 'Independent clinics in our network apply it within programs such as joint & orthopedic, sports recovery, and wellness. <span class="ph">[List the areas your partners actually offer.]</span>' },
      { h2: 'What to expect, step by step', body: 'It all starts with a <strong>medical consultation</strong> done by the provider (the clinic), not by us. In that visit they examine you, explain whether the treatment is right for you, and answer your questions. We take care of the rest: booking the appointment, the travel, and supporting you throughout the journey. <span class="ph">[Describe the typical journey.]</span>' },
    ],
    disclaimer: investigationalEN,
  },
  exosomes: {
    metaTitle: 'Exosome Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Exosome therapy in Cancún, coordinated end-to-end by Kern Stem Care with independent, licensed clinics. Bilingual guidance and a free evaluation for U.S. & Canada patients.',
    eyebrow: 'Cellular Therapy',
    title: 'Exosomes',
    lead: 'An overview of the exosome therapy our partner network provides. <span class="ph">[Replace with your own introduction.]</span>',
    sections: [
      { h2: 'What it is', body: 'Exosomes are microscopic vesicles released by cells that carry signaling molecules, studied for their role in cell-to-cell communication and regenerative processes. <span class="ph">[Edit description.]</span>' },
      { h2: 'What partners use it for', body: 'Used by independent clinics within regenerative and wellness programs. <span class="ph">[List the areas your partners actually offer.]</span>' },
      { h2: 'What to expect', body: 'The provider evaluates your case first; we handle scheduling, travel, and on-the-ground support. <span class="ph">[Describe the typical journey.]</span>' },
    ],
    disclaimer: investigationalEN,
  },
  fibroblasts: {
    metaTitle: 'Fibroblast Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Fibroblast therapy in Cancún, coordinated by Kern Stem Care with independent, licensed clinics. Bilingual guidance, travel and follow-up for U.S. & Canada patients.',
    eyebrow: 'Cellular Therapy',
    title: 'Fibroblasts',
    lead: 'An overview of the fibroblast therapy our partner network provides. <span class="ph">[Replace with your own introduction.]</span>',
    sections: [
      { h2: 'What it is', body: 'Fibroblasts are cells that produce collagen and support connective tissue, studied in skin, wound, and regenerative applications. <span class="ph">[Edit description.]</span>' },
      { h2: 'What partners use it for', body: 'A natural fit for aesthetic & skin programs offered by independent clinics. <span class="ph">[List the areas your partners actually offer.]</span>' },
      { h2: 'What to expect', body: 'A provider-led evaluation comes first; we coordinate everything around your visit. <span class="ph">[Describe the typical journey.]</span>' },
    ],
    disclaimer: investigationalEN,
  },
  about: {
    metaTitle: 'About | Kern Stem Care',
    metaDescription: 'Meet Kern Stem Care: a bilingual medical-coordination agency in Cancún — not a clinic — that vets providers and guides U.S. & Canada patients from first call to follow-up.',
    eyebrow: 'About Kern Stem Care',
    title: 'Your single, trusted point of contact in Mexico',
    lead: 'Kern Stem Care is the agency; the medical care is delivered by independent, licensed providers. <span class="ph">[Replace with your story.]</span>',
    sections: [
      { h2: 'Who we are', body: 'A medical coordination agency based in Cancún, guiding patients from the United States and Canada. We are not a clinic and do not provide medical treatment. <span class="ph">[Edit.]</span>' },
      { h2: 'What we do', body: 'We vet providers, match your case, and handle travel, lodging, transport, and appointments — one bilingual coordinator from first call to follow-up. <span class="ph">[Edit.]</span>' },
      { h2: 'Our network', body: 'We connect you only with clinics, physicians, and laboratories licensed under Mexico’s health authority (COFEPRIS). <span class="ph">[Describe your vetting and partners.]</span>' },
    ],
  },
  process: {
    metaTitle: 'Regenerative Care for U.S. & Canada Patients | Kern Stem Care',
    metaDescription: 'How Kern Stem Care coordinates regenerative care for U.S. & Canada patients: evaluation, licensed clinic, travel, treatment and follow-up — one bilingual coordinator throughout.',
    eyebrow: 'How It Works',
    title: 'Process for international patients',
    lead: 'From your first message to follow-up back home, here is how the journey works. <span class="ph">[Edit the overview.]</span>',
    steps: [
      { title: 'Free Consultation', body: 'Share your history. We match your case to the right partner provider, who reviews it and explains realistic options.' },
      { title: 'Plan, Quote & Itinerary', body: 'The provider sends a medical plan; we build your transparent quote and travel itinerary around it.' },
      { title: 'Travel & Care in Cancún', body: 'We coordinate flights, lodging, and transport. You receive care at our partner clinic; we stay with you throughout.' },
      { title: 'Follow-Up at Home', body: 'We help coordinate remote check-ins and aftercare with the provider once you return home.' },
    ],
    sections: [
      { h2: 'Travel & logistics', body: 'Cancún International (CUN) has direct flights from most major U.S. and Canadian cities. We provide flight guidance, airport pickup, and lodging near the partner clinic. <span class="ph">[Add travel times and what is included.]</span>' },
      { h2: 'Costs & payments', body: 'You receive a transparent written quote before committing. Medical fees are set by and paid to the provider; our coordination fee and travel costs are itemized separately. <span class="ph">[Explain your fee model.]</span>' },
    ],
  },
  testimonials: {
    metaTitle: 'Testimonials | Kern Stem Care',
    metaDescription: 'Real patient stories, shared with written consent. Results are not typical and vary by person. See how Kern Stem Care supports patients traveling to Cancún.',
    eyebrow: 'Patient Stories',
    title: 'Real patients, real stories',
    lead: 'Drop your edited videos or written stories into the placeholders below. <span class="ph">[Edit intro.]</span>',
    cards: [
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 U.S. · Orthopedic', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', tag: '🇨🇦 Canada · Neurological', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 U.S. · Wellness', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', tag: '🇨🇦 Canada · Autoimmune', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 U.S. · Orthopedic', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇨🇦 Canada · Orthopedic', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
    ],
    disclaimer:
      '<strong>Testimonial disclaimer:</strong> Testimonials reflect individual experiences and are not a promise of results. Patients shown gave written consent to share their stories. Results are not typical and will vary from person to person.',
  },
  contact: {
    metaTitle: 'Contact | Kern Stem Care',
    metaDescription: 'Request a free, no-obligation evaluation. A bilingual Kern Stem Care coordinator replies within 24 hours to guide your regenerative-care options in Cancún.',
    eyebrow: 'Get Started',
    title: 'Request your free, no-obligation evaluation',
    lead: 'A patient coordinator will reach out within 24 hours. <span class="ph">[Edit.]</span>',
  },
};

const es: PagesSet = {
  services: {
    metaTitle: 'Terapias Regenerativas en Cancún, México | Kern Stem Care',
    metaDescription:
      'Compara las terapias celulares a las que ayudamos a acceder en Cancún — células madre, exosomas y fibroblastos — con clínicas y laboratorios independientes y certificados.',
    eyebrow: 'Qué Coordinamos',
    title: 'Servicios',
    lead: 'Coordinamos el acceso a tres terapias celulares centrales — ofrecidas por clínicas y laboratorios aliados, independientes y certificados, en Cancún. Elige una terapia para saber más. <span class="ph">[Editar este resumen.]</span>',
    cards: [
      { icon: '🧬', slug: 'stem-cells', title: 'Células Madre', body: 'Células estudiadas por su papel en la reparación y regeneración de tejidos — el pilar central de cada protocolo de nuestra red. <span class="ph">[Editar resumen.]</span>' },
      { icon: '✨', slug: 'exosomes', title: 'Exosomas', body: 'Vesículas liberadas por las células, estudiadas por su papel en la señalización entre células y los procesos regenerativos. <span class="ph">[Editar resumen.]</span>' },
      { icon: '🧫', slug: 'fibroblasts', title: 'Fibroblastos', body: 'Células productoras de colágeno, estudiadas en aplicaciones de piel, cicatrización y regeneración. <span class="ph">[Editar resumen.]</span>' },
    ],
    disclaimer: investigationalES,
  },
  stemCells: {
    metaTitle: 'Terapia con Células Madre en Cancún, México | Kern Stem Care',
    metaDescription: '¿Piensas en terapia con células madre en Cancún? Kern Stem Care coordina evaluación, tratamiento en clínicas certificadas, viaje y seguimiento para pacientes de EE.UU. y Canadá.',
    eyebrow: 'Terapia Celular',
    title: 'Células Madre',
    lead: 'Aquí te explicamos, con palabras sencillas, qué son las células madre y cómo podrían ayudarte. <span class="ph">[Reemplazar con tu introducción.]</span>',
    sections: [
      { h2: 'En pocas palabras', body: 'Imagina que tu cuerpo es como una casa. Con el tiempo, algunas partes se desgastan o se dañan. Las <strong>células madre</strong> son como pequeñas ayudantes que tu propio cuerpo usa para repararse y crear partes nuevas. Son especiales porque todavía no tienen un "trabajo fijo": pueden convertirse en muchos tipos de células, por ejemplo de hueso, de piel o de músculo.' },
      { h2: '¿Qué son las células madre?', body: 'Las células madre son como los "ladrillos" con los que se construye el cuerpo. Todos los días tu cuerpo fabrica células nuevas para reemplazar a las viejas o dañadas, y muchas de esas células nuevas nacen a partir de células madre. Los científicos las estudian mucho por el papel que tienen en la reparación y regeneración natural del cuerpo. <span class="ph">[Editar con las fuentes específicas que usan tus aliados.]</span>' },
      { h2: '¿Cómo podrían ayudarte?', body: 'Los médicos y las clínicas estudian las células madre porque <strong>podrían</strong> apoyar el proceso natural de reparación del propio cuerpo. Algunas personas se interesan en ellas por molestias en las articulaciones, para recuperarse o para su bienestar general. Cada persona es diferente, así que es normal tener dudas — y los resultados nunca están garantizados.' },
      { h2: 'Para qué la usan los aliados', body: 'Las clínicas independientes de nuestra red la aplican en programas como articular y ortopédico, recuperación deportiva y bienestar. <span class="ph">[Lista las áreas que tus aliados realmente ofrecen.]</span>' },
      { h2: 'Qué esperar, paso a paso', body: 'Todo empieza con una <strong>consulta médica</strong> que hace el proveedor (la clínica), no nosotros. En esa consulta te revisan, te explican si el tratamiento es adecuado para ti y te resuelven tus dudas. Nosotros nos encargamos de lo demás: agendar la cita, el viaje y acompañarte durante el proceso. <span class="ph">[Describe el proceso típico.]</span>' },
    ],
    disclaimer: investigationalES,
  },
  exosomes: {
    metaTitle: 'Terapia con Exosomas en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con exosomas en Cancún, coordinada de principio a fin por Kern Stem Care con clínicas independientes y certificadas. Evaluación gratuita para pacientes de EE.UU. y Canadá.',
    eyebrow: 'Terapia Celular',
    title: 'Exosomas',
    lead: 'Un resumen de la terapia con exosomas que ofrece nuestra red de aliados. <span class="ph">[Reemplazar con tu introducción.]</span>',
    sections: [
      { h2: 'Qué es', body: 'Los exosomas son vesículas microscópicas liberadas por las células que transportan moléculas de señalización, estudiadas por su papel en la comunicación entre células y los procesos regenerativos. <span class="ph">[Editar descripción.]</span>' },
      { h2: 'Para qué la usan los aliados', body: 'Empleados por clínicas independientes dentro de programas regenerativos y de bienestar. <span class="ph">[Lista las áreas que tus aliados realmente ofrecen.]</span>' },
      { h2: 'Qué esperar', body: 'El proveedor evalúa tu caso primero; nosotros gestionamos la agenda, el viaje y el acompañamiento presencial. <span class="ph">[Describe el proceso típico.]</span>' },
    ],
    disclaimer: investigationalES,
  },
  fibroblasts: {
    metaTitle: 'Terapia con Fibroblastos en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con fibroblastos en Cancún, coordinada por Kern Stem Care con clínicas independientes y certificadas. Guía bilingüe, viaje y seguimiento para pacientes de EE.UU. y Canadá.',
    eyebrow: 'Terapia Celular',
    title: 'Fibroblastos',
    lead: 'Un resumen de la terapia con fibroblastos que ofrece nuestra red de aliados. <span class="ph">[Reemplazar con tu introducción.]</span>',
    sections: [
      { h2: 'Qué es', body: 'Los fibroblastos son células que producen colágeno y dan soporte al tejido conectivo, estudiadas en aplicaciones de piel, cicatrización y regeneración. <span class="ph">[Editar descripción.]</span>' },
      { h2: 'Para qué la usan los aliados', body: 'Encajan de forma natural con los programas de estética y piel que ofrecen las clínicas independientes. <span class="ph">[Lista las áreas que tus aliados realmente ofrecen.]</span>' },
      { h2: 'Qué esperar', body: 'Primero una evaluación dirigida por el proveedor; nosotros coordinamos todo alrededor de tu visita. <span class="ph">[Describe el proceso típico.]</span>' },
    ],
    disclaimer: investigationalES,
  },
  about: {
    metaTitle: 'Sobre Nosotros | Kern Stem Care',
    metaDescription: 'Conoce a Kern Stem Care: una agencia de coordinación médica bilingüe en Cancún — no una clínica — que verifica proveedores y guía a pacientes de EE.UU. y Canadá de principio a fin.',
    eyebrow: 'Sobre Kern Stem Care',
    title: 'Tu único punto de contacto de confianza en México',
    lead: 'Kern Stem Care es la agencia; la atención médica la brindan proveedores independientes y certificados. <span class="ph">[Reemplazar con tu historia.]</span>',
    sections: [
      { h2: 'Quiénes somos', body: 'Una agencia de coordinación médica con sede en Cancún, que guía a pacientes de Estados Unidos y Canadá. No somos una clínica y no brindamos tratamiento médico. <span class="ph">[Editar.]</span>' },
      { h2: 'Qué hacemos', body: 'Verificamos proveedores, canalizamos tu caso y gestionamos viaje, hospedaje, transporte y citas — un coordinador bilingüe desde la primera llamada hasta el seguimiento. <span class="ph">[Editar.]</span>' },
      { h2: 'Nuestra red', body: 'Te conectamos solo con clínicas, médicos y laboratorios certificados por la autoridad sanitaria de México (COFEPRIS). <span class="ph">[Describe tu proceso de evaluación y aliados.]</span>' },
    ],
  },
  process: {
    metaTitle: 'Atención Regenerativa para Pacientes de EE.UU. y Canadá | Kern Stem Care',
    metaDescription: 'Cómo coordina Kern Stem Care la atención regenerativa para pacientes de EE.UU. y Canadá: evaluación, clínica certificada, viaje, tratamiento y seguimiento con un coordinador bilingüe.',
    eyebrow: 'Cómo Funciona',
    title: 'Proceso para pacientes internacionales',
    lead: 'Desde tu primer mensaje hasta el seguimiento en casa, así funciona el proceso. <span class="ph">[Editar el resumen.]</span>',
    steps: [
      { title: 'Consulta Gratis', body: 'Comparte tu historial. Canalizamos tu caso al proveedor aliado adecuado, que lo revisa y te explica opciones realistas.' },
      { title: 'Plan, Cotización e Itinerario', body: 'El proveedor envía un plan médico; nosotros armamos tu cotización transparente y tu itinerario de viaje.' },
      { title: 'Viaje y Atención en Cancún', body: 'Coordinamos vuelos, hospedaje y transporte. Recibes la atención en la clínica aliada; te acompañamos en todo momento.' },
      { title: 'Seguimiento en Casa', body: 'Ayudamos a coordinar el seguimiento remoto y los cuidados posteriores con el proveedor al volver a casa.' },
    ],
    sections: [
      { h2: 'Viaje y logística', body: 'El Aeropuerto Internacional de Cancún (CUN) tiene vuelos directos desde la mayoría de las ciudades de EE.UU. y Canadá. Ofrecemos guía de vuelos, traslado del aeropuerto y hospedaje cerca de la clínica aliada. <span class="ph">[Agrega tiempos de viaje y qué incluye.]</span>' },
      { h2: 'Costos y pagos', body: 'Recibes una cotización por escrito y transparente antes de comprometerte. Los honorarios médicos los fija y los cobra el proveedor; nuestra tarifa de coordinación y los costos de viaje se detallan por separado. <span class="ph">[Explica tu modelo de tarifa.]</span>' },
    ],
  },
  testimonials: {
    metaTitle: 'Testimonios | Kern Stem Care',
    metaDescription: 'Historias reales de pacientes, compartidas con consentimiento por escrito. Los resultados no son típicos y varían. Conoce cómo Kern Stem Care acompaña a quienes viajan a Cancún.',
    eyebrow: 'Historias de Pacientes',
    title: 'Pacientes reales, historias reales',
    lead: 'Coloca tus videos editados o historias escritas en los espacios de abajo. <span class="ph">[Editar introducción.]</span>',
    cards: [
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 EE.UU. · Ortopédico', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', tag: '🇨🇦 Canadá · Neurológico', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 EE.UU. · Bienestar', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', tag: '🇨🇦 Canadá · Autoinmune', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇺🇸 EE.UU. · Ortopédico', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', tag: '🇨🇦 Canadá · Ortopédico', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
    ],
    disclaimer:
      '<strong>Aviso sobre testimonios:</strong> Los testimonios reflejan experiencias individuales y no son una promesa de resultados. Los pacientes mostrados dieron consentimiento por escrito para compartir su historia. Los resultados no son típicos y varían de persona a persona.',
  },
  contact: {
    metaTitle: 'Contacto | Kern Stem Care',
    metaDescription: 'Solicita tu evaluación gratuita y sin compromiso. Un coordinador bilingüe de Kern Stem Care te responde en menos de 24 horas para guiar tus opciones de atención en Cancún.',
    eyebrow: 'Comenzar',
    title: 'Solicite su evaluación gratuita, sin compromiso',
    lead: 'Un coordinador le contactará en menos de 24 horas. <span class="ph">[Editar.]</span>',
  },
};

export const pagesContent: Record<Lang, PagesSet> = { en, es };
