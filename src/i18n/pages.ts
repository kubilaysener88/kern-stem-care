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
  slug: 'stem-cells' | 'exosomes' | 'fibroblasts' | 'placenta';
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
  placenta: SimplePage;
  about: SimplePage;
  process: ProcessPage;
  testimonials: TestimonialsPage;
  contact: ContactPage;
}

const investigationalEN =
  '<strong>Important:</strong> Kern Stem Care is a coordination agency and does not provide medical treatment or advice. These therapies are offered by independent, licensed providers. Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Individual results vary; no outcome or cure is guaranteed.';
const investigationalES =
  '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación y no brinda tratamiento ni consejo médico. Estas terapias las ofrecen proveedores independientes y certificados. Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Los resultados individuales varían; no se garantiza ningún resultado ni cura.';

/**
 * The five-step path is the same for every therapy — it describes how Kern
 * coordinates, not what the clinic applies. Defined once here and rendered on
 * each service detail page so the wording can never drift between them.
 */
export interface JourneyStep {
  title: string;
  body: string;
}
export interface PathToTreatmentContent {
  h2: string;
  lead: string;
  steps: JourneyStep[];
  ctaLabel: string;
}

export const pathToTreatment: Record<Lang, PathToTreatmentContent> = {
  en: {
    h2: 'Your Path to Treatment',
    lead: 'Five steps, from your first conversation to your follow-up back home. A coordinator stays with you through all of them.',
    steps: [
      {
        title: 'Speak with an advisor',
        body: 'A coordinator answers your questions, explains the process, and tells you which lab studies you will need for your video consultation.',
      },
      {
        title: 'Send your medical records',
        body: 'Your studies let us prepare a personalized appointment, so every minute of the consultation goes toward structuring your treatment.',
      },
      {
        title: 'Attend your video consultation',
        body: 'A specialist physician reviews your case and defines the protocol you need. The medical decision is always theirs, never ours.',
      },
      {
        title: 'Arrive in Cancún',
        body: 'Our team meets you at the airport and takes you to your hotel and to the clinic. You never have to think about logistics on the day of your treatment.',
      },
      {
        title: 'Return home',
        body: 'We follow your progress after the procedure and stay in contact with you and with the provider.',
      },
    ],
    ctaLabel: 'Talk to an advisor',
  },
  es: {
    h2: 'Tu Camino al Tratamiento',
    lead: 'Cinco pasos, desde tu primera conversación hasta tu seguimiento de regreso en casa. Un coordinador te acompaña en todos ellos.',
    steps: [
      {
        title: 'Habla con un asesor',
        body: 'Un coordinador responde tus dudas, te explica el proceso y te indica qué estudios de laboratorio necesitarás para tu videoconsulta.',
      },
      {
        title: 'Envía tus estudios médicos',
        body: 'Tus estudios nos permiten preparar una cita personalizada, para que cada minuto de la consulta se dedique a estructurar tu tratamiento.',
      },
      {
        title: 'Recibe tu videoconsulta',
        body: 'Un médico especialista revisa tu caso y define el protocolo que necesitas. La decisión médica siempre es suya, nunca nuestra.',
      },
      {
        title: 'Llegada a Cancún',
        body: 'Nuestro equipo te recibe en el aeropuerto y te lleva a tu hotel y a la clínica. No tienes que ocuparte de la logística el día de tu aplicación.',
      },
      {
        title: 'Regreso a casa',
        body: 'Damos seguimiento a tu evolución después del procedimiento y mantenemos contacto contigo y con el proveedor.',
      },
    ],
    ctaLabel: 'Hablar con un asesor',
  },
};

const en: PagesSet = {
  services: {
    metaTitle: 'Regenerative Therapies in Cancún, Mexico | Kern Stem Care',
    metaDescription:
      'Compare the cellular therapies we help U.S. and Canadian patients access in Cancún — stem cells, exosomes and fibroblasts — through independent, licensed clinics and labs.',
    eyebrow: 'What We Coordinate',
    title: 'Services',
    lead: 'We coordinate access to the core regenerative therapies offered by independent, licensed partner clinics and laboratories in Cancún. Choose a therapy to learn more. <span class="ph">[Edit this overview.]</span>',
    cards: [
      { icon: '🧬', slug: 'stem-cells', title: 'Stem Cells', body: 'Cells studied for their role in tissue repair and regeneration — the central pillar of every protocol in our network. <span class="ph">[Edit summary.]</span>' },
      { icon: '✨', slug: 'exosomes', title: 'Exosomes', body: 'Cell-released vesicles studied for their role in cell-to-cell signaling and regenerative processes. <span class="ph">[Edit summary.]</span>' },
      { icon: '🧫', slug: 'fibroblasts', title: 'Fibroblasts', body: 'Collagen-producing cells studied in skin, wound, and regenerative applications. <span class="ph">[Edit summary.]</span>' },
      { icon: '🌱', slug: 'placenta', title: 'Freeze-Dried Placenta', body: 'A lyophilized placental-tissue preparation studied for its growth factors and signaling molecules involved in regeneration. <span class="ph">[Edit summary.]</span>' },
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
      { h2: 'What are stem cells?', body: 'Stem cells are the body\'s building blocks. They can renew themselves and develop into other cell types — bone, cartilage, skin, or muscle, among others — and your body uses them constantly to replace cells that wear out or become damaged. Of the cellular therapies coordinated in our network, they are the most extensively studied, with decades of published research behind them. The specific cell source is confirmed by the treating physician and varies by partner laboratory.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in supporting the body\'s own repair processes, particularly in tissue repair and in modulating inflammation. It is important to be clear about the status of this work: for most specific conditions, stem cell therapy remains investigational rather than an approved standard of care. The evidence is still developing, individual responses vary, and no outcome can be guaranteed — by us or by any provider.' },
      { h2: 'What is it studied for?', body: 'Independent clinics in our network apply stem cell protocols within programs such as:<br><br><strong>Joint and orthopedic</strong> — cartilage wear, tendon and joint discomfort, and mobility.<br><strong>Sports injury and recovery</strong> — soft-tissue recovery in active patients and athletes.<br><strong>Immune wellness</strong> — programs supporting immune health and resilience.<br><strong>Anti-aging and longevity</strong> — vitality-oriented wellness programs.<br><strong>Senior health</strong> — mobility and quality-of-life programs for older adults.<br><br>Whether any of these applies to your situation is determined by the treating physician during your evaluation, not by us.' },
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
      { h2: 'What are exosomes?', body: 'Exosomes are microscopic vesicles released by cells that carry signaling molecules from one cell to another — essentially the messages cells use to communicate. What distinguishes them from the other therapies is that they contain no living cells: exosome preparations are studied as a cell-free approach, which is why they are sometimes described as carrying the signal without the cell that produced it.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in cell-to-cell communication and in the signaling involved in tissue repair. This is a more recent field than stem cell research, and the evidence base is correspondingly smaller and still developing. Exosome preparations are not approved for the treatment of specific diseases, and no outcome can be guaranteed. Your physician will review with you what current research does and does not show.' },
      { h2: 'What is it studied for?', body: 'Independent clinics in our network apply exosome protocols within programs such as:<br><br><strong>Regenerative and recovery programs</strong> — often alongside other cellular therapies rather than on their own.<br><strong>Aesthetic and skin</strong> — skin quality and rejuvenation programs.<br><strong>Immune wellness</strong> — general wellness and resilience support.<br><strong>Anti-aging and longevity</strong> — vitality-oriented programs.<br><br>Whether any of these applies to your situation is determined by the treating physician during your evaluation, not by us.' },
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
      { h2: 'What are fibroblasts?', body: 'Fibroblasts are the cells that produce collagen and build the connective tissue that gives skin its structure and firmness. They are the working cells of the dermis: when skin is injured, fibroblasts are largely responsible for rebuilding the tissue underneath. Of the four therapies coordinated in our network, this is the most narrowly focused — its research is concentrated in skin and wound applications rather than systemic conditions.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in collagen production and in the repair of skin and connective tissue. Because the field is concentrated on localized applications, fibroblast therapy is generally studied for the skin itself rather than for internal or systemic conditions. It is not approved as a treatment for specific diseases, individual responses vary, and no outcome can be guaranteed.' },
      { h2: 'What is it studied for?', body: 'Independent clinics in our network apply fibroblast protocols within programs such as:<br><br><strong>Aesthetic and skin</strong> — skin quality, firmness, and rejuvenation.<br><strong>Wound and scar applications</strong> — support for skin repair processes.<br><strong>Anti-aging programs</strong> — often combined with other therapies rather than used alone.<br><br>If your interest is in joint, orthopedic, or systemic concerns, the physician will likely discuss a different therapy with you. Suitability is determined during your medical evaluation, not by us.' },
    ],
    disclaimer: investigationalEN,
  },
  placenta: {
    metaTitle: 'Freeze-Dried Placenta Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Freeze-dried (lyophilized) placental-tissue therapy in Cancún, coordinated by Kern Stem Care with independent, licensed clinics. Bilingual guidance for U.S. & Canada patients.',
    eyebrow: 'Regenerative Therapy',
    title: 'Freeze-Dried Placenta',
    lead: 'An overview of the freeze-dried placenta therapy offered by our partner network. <span class="ph">[Replace with your own introduction.]</span>',
    sections: [
      { h2: 'What is freeze-dried placenta?', body: 'Freeze-dried (lyophilized) placenta is a placental-tissue preparation studied for its content of growth factors and signaling molecules involved in regenerative processes. Lyophilization removes the water from the tissue so it can be stored stably and reconstituted before use. Unlike the other therapies we coordinate, it is not administered by infusion: it is placed as subdermal injections in the lower abdomen. The specific tissue source varies by partner laboratory and is confirmed by the treating physician.' },
      { h2: 'How could it help you?', body: 'Research interest centres on the growth factors and signaling molecules the tissue contains. Of the therapies coordinated in our network, this is the least established: the published evidence is thinner than for stem cells or exosomes, and it is explored for general wellness support rather than for any specific diagnosis. It is not approved as a treatment for any condition, individual responses vary, and no outcome can be guaranteed.' },
      { h2: 'What is it studied for?', body: 'Independent clinics in our network explore it within programs such as:<br><br><strong>Metabolic support</strong> — general metabolic and energy-related wellness.<br><strong>Hormonal balance</strong> — wellness programs oriented to hormonal wellbeing.<br><strong>Vitality and longevity</strong> — often combined with other therapies rather than used alone.<br><br>These are areas of exploration, not established indications. Whether any of it applies to your situation is determined by the treating physician during your evaluation, not by us.' },
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
    lead: 'Coordinamos el acceso a las terapias regenerativas centrales — ofrecidas por clínicas y laboratorios aliados, independientes y certificados, en Cancún. Elige una terapia para saber más. <span class="ph">[Editar este resumen.]</span>',
    cards: [
      { icon: '🧬', slug: 'stem-cells', title: 'Células Madre', body: 'Células estudiadas por su papel en la reparación y regeneración de tejidos — el pilar central de cada protocolo de nuestra red. <span class="ph">[Editar resumen.]</span>' },
      { icon: '✨', slug: 'exosomes', title: 'Exosomas', body: 'Vesículas liberadas por las células, estudiadas por su papel en la señalización entre células y los procesos regenerativos. <span class="ph">[Editar resumen.]</span>' },
      { icon: '🧫', slug: 'fibroblasts', title: 'Fibroblastos', body: 'Células productoras de colágeno, estudiadas en aplicaciones de piel, cicatrización y regeneración. <span class="ph">[Editar resumen.]</span>' },
      { icon: '🌱', slug: 'placenta', title: 'Placenta Liofilizada', body: 'Una preparación de tejido placentario liofilizado, estudiada por sus factores de crecimiento y moléculas de señalización relacionadas con la regeneración. <span class="ph">[Editar resumen.]</span>' },
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
      { h2: '¿Qué son las células madre?', body: 'Las células madre son los ladrillos con los que se construye el cuerpo. Pueden renovarse a sí mismas y transformarse en otros tipos de células —hueso, cartílago, piel o músculo, entre otras— y tu cuerpo las usa constantemente para reemplazar las células que se desgastan o se dañan. De las terapias celulares que coordinamos, son las más estudiadas, con décadas de investigación publicada. El origen específico de las células lo confirma el médico tratante y varía según el laboratorio aliado.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel para apoyar los procesos naturales de reparación del cuerpo, en particular en la reparación de tejidos y en la modulación de la inflamación. Es importante ser claros sobre el estado de este trabajo: para la mayoría de las condiciones específicas, la terapia con células madre sigue siendo de carácter investigacional y no un tratamiento aprobado de referencia. La evidencia está en desarrollo, cada persona responde distinto y ningún resultado puede garantizarse — ni por nosotros ni por ningún proveedor.' },
      { h2: '¿Para qué se estudia?', body: 'Las clínicas independientes de nuestra red aplican protocolos con células madre en programas como:<br><br><strong>Articular y ortopédico</strong> — desgaste de cartílago, molestias en tendones y articulaciones, y movilidad.<br><strong>Lesiones deportivas y recuperación</strong> — recuperación de tejidos blandos en pacientes activos y atletas.<br><strong>Bienestar inmunológico</strong> — programas de apoyo a la salud inmune.<br><strong>Antienvejecimiento y longevidad</strong> — programas orientados a la vitalidad.<br><strong>Salud del adulto mayor</strong> — programas de movilidad y calidad de vida.<br><br>Si alguno de estos aplica a tu situación lo determina el médico tratante durante tu evaluación, no nosotros.' },
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
      { h2: '¿Qué son los exosomas?', body: 'Los exosomas son vesículas microscópicas que las células liberan para transportar moléculas de señalización de una célula a otra: son, en esencia, los mensajes que las células usan para comunicarse. Lo que los distingue de las otras terapias es que no contienen células vivas; las preparaciones de exosomas se estudian como un enfoque libre de células, por eso a veces se describen como la señal sin la célula que la produjo.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel en la comunicación entre células y en la señalización involucrada en la reparación de tejidos. Es un campo más reciente que el de las células madre, por lo que la base de evidencia es menor y sigue en desarrollo. Las preparaciones de exosomas no están aprobadas para tratar enfermedades específicas y ningún resultado puede garantizarse. Tu médico revisará contigo qué muestra y qué no muestra la investigación actual.' },
      { h2: '¿Para qué se estudia?', body: 'Las clínicas independientes de nuestra red aplican protocolos con exosomas en programas como:<br><br><strong>Programas regenerativos y de recuperación</strong> — con frecuencia junto a otras terapias celulares, más que de forma aislada.<br><strong>Estética y piel</strong> — programas de calidad de la piel y rejuvenecimiento.<br><strong>Bienestar inmunológico</strong> — apoyo general al bienestar.<br><strong>Antienvejecimiento y longevidad</strong> — programas orientados a la vitalidad.<br><br>Si alguno de estos aplica a tu situación lo determina el médico tratante durante tu evaluación, no nosotros.' },
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
      { h2: '¿Qué son los fibroblastos?', body: 'Los fibroblastos son las células que producen colágeno y construyen el tejido conectivo que da estructura y firmeza a la piel. Son las células que trabajan en la dermis: cuando la piel se lesiona, los fibroblastos son en buena medida los responsables de reconstruir el tejido que hay debajo. De las cuatro terapias que coordinamos, esta es la más acotada — su investigación se concentra en aplicaciones de piel y cicatrización, más que en condiciones sistémicas.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel en la producción de colágeno y en la reparación de la piel y el tejido conectivo. Como el campo se concentra en aplicaciones localizadas, la terapia con fibroblastos se estudia en general para la piel misma, más que para condiciones internas o sistémicas. No está aprobada como tratamiento de enfermedades específicas, cada persona responde distinto y ningún resultado puede garantizarse.' },
      { h2: '¿Para qué se estudia?', body: 'Las clínicas independientes de nuestra red aplican protocolos con fibroblastos en programas como:<br><br><strong>Estética y piel</strong> — calidad, firmeza y rejuvenecimiento de la piel.<br><strong>Cicatrices y heridas</strong> — apoyo a los procesos de reparación de la piel.<br><strong>Programas antienvejecimiento</strong> — con frecuencia combinados con otras terapias, más que de forma aislada.<br><br>Si tu interés está en temas articulares, ortopédicos o sistémicos, es probable que el médico te plantee una terapia distinta. La idoneidad se determina durante tu evaluación médica, no por nosotros.' },
    ],
    disclaimer: investigationalES,
  },
  placenta: {
    metaTitle: 'Terapia con Placenta Liofilizada en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con tejido placentario liofilizado en Cancún, coordinada por Kern Stem Care con clínicas independientes y certificadas. Guía bilingüe para pacientes de EE.UU. y Canadá.',
    eyebrow: 'Terapia Regenerativa',
    title: 'Placenta Liofilizada',
    lead: 'Un resumen de la terapia con placenta liofilizada que ofrece nuestra red de aliados. <span class="ph">[Reemplazar con tu introducción.]</span>',
    sections: [
      { h2: '¿Qué es la placenta liofilizada?', body: 'La placenta liofilizada (secada en frío) es una preparación de tejido placentario estudiada por su contenido de factores de crecimiento y moléculas de señalización involucradas en procesos regenerativos. La liofilización retira el agua del tejido para que pueda conservarse de forma estable y reconstituirse antes de su uso. A diferencia de las otras terapias que coordinamos, no se administra por infusión: se aplica mediante inyecciones subdérmicas en el abdomen bajo. El origen específico del tejido varía según el laboratorio aliado y lo confirma el médico tratante.' },
      { h2: '¿Cómo podría ayudarte?', body: 'El interés de la investigación se centra en los factores de crecimiento y las moléculas de señalización que contiene el tejido. De las terapias que coordinamos, esta es la menos consolidada: la evidencia publicada es más escasa que la de células madre o exosomas, y se explora como apoyo general al bienestar, no para un diagnóstico específico. No está aprobada como tratamiento de ninguna condición, cada persona responde distinto y ningún resultado puede garantizarse.' },
      { h2: '¿Para qué se estudia?', body: 'Las clínicas independientes de nuestra red la exploran en programas como:<br><br><strong>Apoyo metabólico</strong> — bienestar relacionado con el metabolismo y la energía.<br><strong>Equilibrio hormonal</strong> — programas de bienestar orientados al bienestar hormonal.<br><strong>Vitalidad y longevidad</strong> — con frecuencia combinada con otras terapias, más que de forma aislada.<br><br>Son áreas de exploración, no indicaciones establecidas. Si algo de esto aplica a tu situación lo determina el médico tratante durante tu evaluación, no nosotros.' },
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
