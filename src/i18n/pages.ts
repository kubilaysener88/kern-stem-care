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
  /** Emoji icon. Omit when the card uses `image` instead. */
  icon?: string;
  /** Path under /public. When set, the card shows this photo instead of the emoji. */
  image?: string;
  /** Alt text — required whenever `image` is set. */
  alt?: string;
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
  /** Path under /public, shown as the page-hero background photo. */
  heroImage?: string;
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
  steps: { title: string; body: string; image?: string }[];
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
export interface EstimatePage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  steps: { title: string; body: string }[];
  form: {
    labelFirst: string;
    labelLast: string;
    labelEmail: string;
    labelPhone: string;
    labelCountry: string;
    labelBirthdate: string;
    addonsTitle: string;
    addonTransport: string;
    addonHotel: string;
    labelGender: string;
    genderOptions: string[];
    labelWeight: string;
    weightUnits: string[];
    labelHeight: string;
    heightUnits: string[];
    conditionCategoriesTitle: string;
    conditionCategories: string[];
    labelCondition: string;
    conditionPlaceholder: string;
    labelId: string;
    idHint: string;
    labelFiles: string;
    filesHint: string;
    labelConsent: string;
    submit: string;
    fineprint: string;
  };
  whyTitle: string;
  whyBody: string;
  disclaimer: string;
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
  estimate: EstimatePage;
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
      'Compare the regenerative therapies we help international patients access in Cancún — stem cells, exosomes, fibroblasts and freeze-dried placenta — through independent, licensed clinics and labs.',
    eyebrow: 'What We Coordinate',
    title: 'Services',
    lead: "Regenerative therapy in Cancún, Mexico is only as strong as the team behind it — and that's exactly what we take on. We vet and verify every independent, government-licensed (COFEPRIS) clinic and laboratory we coordinate with, from stem cell therapy to exosomes, then facilitate every step from your first call to your follow-up at home.",
    cards: [
      { image: '/assets/services/stem-cells.webp', alt: 'Microscopic render of stem cells', slug: 'stem-cells', title: 'Stem Cells', body: 'Cells that renew themselves and develop into other cell types. The most extensively studied of the therapies we coordinate.' },
      { image: '/assets/services/exosomes.webp', alt: 'Microscopic render of exosome vesicles', slug: 'exosomes', title: 'Exosomes', body: 'Cell-released vesicles carrying signaling molecules. A cell-free approach, and a newer field with evidence still developing.' },
      { image: '/assets/services/fibroblasts.webp', alt: 'Microscopic render of fibroblast cells and collagen fibers', slug: 'fibroblasts', title: 'Fibroblasts', body: 'Collagen-producing cells that build connective tissue. The most narrowly focused, concentrated on skin and wound applications.' },
      { image: '/assets/services/placenta.webp', alt: 'Vial of freeze-dried (lyophilized) human placenta', slug: 'placenta', title: 'Freeze-Dried Placenta', body: 'A freeze-dried placental-tissue preparation, given as subdermal injections. The least established of the therapies we coordinate.' },
    ],
    disclaimer: investigationalEN,
  },
  stemCells: {
    metaTitle: 'Stem Cell Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Considering stem cell therapy in Cancún? Kern Stem Care coordinates evaluation, licensed-clinic treatment, travel and follow-up for international patients. Free evaluation.',
    eyebrow: 'Cellular Therapy',
    title: 'Stem Cells',
    lead: 'What stem cell therapy involves, what it is currently studied for, and how we coordinate your access to it through independent, licensed clinics in Cancún.',
    heroImage: '/assets/services/stem-cells.webp',
    sections: [
      { h2: 'What are stem cells?', body: 'Stem cells are the body\'s building blocks. They can renew themselves and develop into other cell types — bone, cartilage, skin, or muscle, among others — and your body uses them constantly to replace cells that wear out or become damaged. Of the cellular therapies coordinated in our network, they are the most extensively studied, with decades of published research behind them. The specific cell source is confirmed by the treating physician and varies by partner laboratory.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in supporting the body\'s own repair processes, particularly in tissue repair and in modulating inflammation. It is important to be clear about the status of this work: for most specific conditions, stem cell therapy remains investigational rather than an approved standard of care. The evidence is still developing, individual responses vary, and no outcome can be guaranteed — by us or by any provider.' },
      { h2: 'Ideal for those who:', body: '<ul><li><strong>Live with joint or orthopedic pain</strong> — cartilage wear, tendon and joint discomfort, or loss of mobility.</li><li><strong>Are recovering from a sports injury</strong> — active patients and athletes looking to heal soft tissue.</li><li><strong>Want to strengthen their immune system</strong> — to feel more energetic and resilient.</li><li><strong>Want to slow aging and regain vitality</strong> — energy, wellbeing, and quality of life.</li><li><strong>Are older adults</strong> — who want to preserve their mobility, independence, and quality of life.</li></ul><p>If you recognize yourself in any of these, the treating physician will confirm it with you during your evaluation.</p>' },
    ],
    disclaimer: investigationalEN,
  },
  exosomes: {
    metaTitle: 'Exosome Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Exosome therapy in Cancún, coordinated end-to-end by Kern Stem Care with independent, licensed clinics. Bilingual guidance and a free evaluation for international patients.',
    eyebrow: 'Cellular Therapy',
    title: 'Exosomes',
    lead: 'What exosome therapy involves, where the research currently stands, and how we coordinate your access to it through independent, licensed clinics in Cancún.',
    heroImage: '/assets/services/exosomes.webp',
    sections: [
      { h2: 'What are exosomes?', body: 'Exosomes are microscopic vesicles released by cells that carry signaling molecules from one cell to another — essentially the messages cells use to communicate. What distinguishes them from the other therapies is that they contain no living cells: exosome preparations are studied as a cell-free approach, which is why they are sometimes described as carrying the signal without the cell that produced it.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in cell-to-cell communication and in the signaling involved in tissue repair. This is a more recent field than stem cell research, and the evidence base is correspondingly smaller and still developing. Exosome preparations are not approved for the treatment of specific diseases, and no outcome can be guaranteed. Your physician will review with you what current research does and does not show.' },
      { h2: 'Ideal for those who:', body: '<ul><li><strong>Want to boost their recovery</strong> — often alongside other cellular therapies.</li><li><strong>Want to improve their skin quality</strong> — glow, texture, and rejuvenation.</li><li><strong>Want to support their immune wellness</strong> — to feel more resilient and energetic.</li><li><strong>Want to slow aging and gain vitality</strong> — energy and overall wellbeing.</li></ul><p>If you recognize yourself in any of these, the treating physician will confirm it with you during your evaluation.</p>' },
    ],
    disclaimer: investigationalEN,
  },
  fibroblasts: {
    metaTitle: 'Fibroblast Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Fibroblast therapy in Cancún, coordinated by Kern Stem Care with independent, licensed clinics. Bilingual guidance, travel and follow-up for international patients.',
    eyebrow: 'Cellular Therapy',
    title: 'Fibroblasts',
    lead: 'What fibroblast therapy involves, which applications it is studied for, and how we coordinate your access to it through independent, licensed clinics in Cancún.',
    heroImage: '/assets/services/fibroblasts.webp',
    sections: [
      { h2: 'What are fibroblasts?', body: 'Fibroblasts are the cells that produce collagen and build the connective tissue that gives skin its structure and firmness. They are the working cells of the dermis: when skin is injured, fibroblasts are largely responsible for rebuilding the tissue underneath. Of the four therapies coordinated in our network, this is the most narrowly focused — its research is concentrated in skin and wound applications rather than systemic conditions.' },
      { h2: 'How could they help you?', body: 'Research focuses on their role in collagen production and in the repair of skin and connective tissue. Because the field is concentrated on localized applications, fibroblast therapy is generally studied for the skin itself rather than for internal or systemic conditions. It is not approved as a treatment for specific diseases, individual responses vary, and no outcome can be guaranteed.' },
      { h2: 'Ideal for those who:', body: '<ul><li><strong>Want to improve their skin quality</strong> — firmness, texture, and facial rejuvenation.</li><li><strong>Have scars or wounds</strong> — and want to support the skin\'s natural repair processes.</li><li><strong>Are looking for an anti-aging approach</strong> — often combined with other therapies.</li></ul><p>If your interest is in joint, orthopedic, or systemic concerns, the physician will discuss a different therapy with you. If you recognize yourself in any of these, they will confirm it with you during your evaluation.</p>' },
    ],
    disclaimer: investigationalEN,
  },
  placenta: {
    metaTitle: 'Freeze-Dried Placenta Therapy in Cancún, Mexico | Kern Stem Care',
    metaDescription: 'Freeze-dried (lyophilized) placental-tissue therapy in Cancún, coordinated by Kern Stem Care with independent, licensed clinics. Bilingual guidance for international patients.',
    eyebrow: 'Regenerative Therapy',
    title: 'Freeze-Dried Placenta',
    lead: 'What freeze-dried placenta therapy involves, how it is administered, and how we coordinate your access to it through independent, licensed clinics in Cancún.',
    heroImage: '/assets/services/placenta.webp',
    sections: [
      { h2: 'What is freeze-dried placenta?', body: 'Freeze-dried (lyophilized) placenta is a placental-tissue preparation studied for its content of growth factors and signaling molecules involved in regenerative processes. Lyophilization removes the water from the tissue so it can be stored stably and reconstituted before use. Unlike the other therapies we coordinate, it is not administered by infusion: it is placed as subdermal injections in the lower abdomen. The specific tissue source varies by partner laboratory and is confirmed by the treating physician.' },
      { h2: 'How could it help you?', body: 'Research interest centres on the growth factors and signaling molecules the tissue contains. Of the therapies coordinated in our network, this is the least established: the published evidence is thinner than for stem cells or exosomes, and it is explored for general wellness support rather than for any specific diagnosis. It is not approved as a treatment for any condition, individual responses vary, and no outcome can be guaranteed.' },
      { h2: 'Ideal for those who:', body: '<ul><li><strong>Are looking for metabolic support</strong> — wellness related to metabolism and energy levels.</li><li><strong>Want to balance their hormones</strong> — programs oriented to hormonal wellbeing.</li><li><strong>Want to regain vitality and longevity</strong> — often combined with other therapies.</li></ul><p>These are areas of exploration, not established indications. If you recognize yourself in any of these, the treating physician will confirm it with you during your evaluation.</p>' },
    ],
    disclaimer: investigationalEN,
  },
  about: {
    metaTitle: 'About | Kern Stem Care',
    metaDescription: 'Meet Kern Stem Care: a bilingual medical-coordination agency in Cancún — not a clinic — that vets providers and guides international patients — including the U.S. and Canada — from first call to follow-up.',
    eyebrow: 'About Kern Stem Care',
    title: 'Your single, trusted point of contact in Mexico',
    lead: 'Kern Stem Care is your coordination agency for regenerative and stem cell therapy in Cancún, Mexico. We verify, we coordinate, and we stay with you at every stage — every clinic, physician, and laboratory in our network passes our verification before you ever meet them.',
    sections: [
      { h2: 'Who we are', body: "Kern Stem Care is a medical coordination agency operated by Kern Corsa Medical Group, S.A. de C.V., a company legally registered in Cancún, Mexico. Choosing where to have a treatment in another country is one of the biggest decisions you'll make — and that's exactly where our value lies: we vet every clinic, physician, and laboratory in our network, coordinate every stage, and guide patients from the United States and Canada from start to finish. The medical care is delivered by those independent, accredited providers — and we work alongside them under our own quality standards, so every patient gets that added layer: the verification, oversight, and support you wouldn't have on your own." },
      { h2: 'What we do', body: "Coordinating your trip is the easy part. The real work is done before you arrive. We vet our partner clinics in Cancún, confirm that every vial holds the correct stem cell count for your treatment, and verify that the right technology is in place to improve how it's applied. So when you land, the details that shape your stem cell therapy are already handled — you arrive to care that's ready for you, not just an appointment on a calendar." },
      { h2: 'Our network', body: "Not every clinic makes it into our network. A clinic, physician, or laboratory becomes a partner only after it meets our verification criteria — starting with a valid license from Mexico’s health authority (COFEPRIS), and including the credentials, standards, and quality checks we complete before we connect a single patient. From vetting each provider to coordinating every step, this is how Kern Stem Care gives international patients a safer path to stem cell and regenerative therapy in Cancún, Mexico — through a network we stand behind." },
    ],
  },
  process: {
    metaTitle: 'Regenerative Care for International Patients | Kern Stem Care',
    metaDescription: 'How Kern Stem Care coordinates regenerative care for international patients: evaluation, licensed clinic, travel, treatment and follow-up — one bilingual coordinator throughout.',
    eyebrow: 'How It Works',
    title: 'Process for international patients',
    lead: "Your step-by-step guide as an international patient: from your first message with a bilingual coordinator, through a free consultation and transparent quote, to travel and care coordinated with independent, licensed providers in Cancún — plus follow-up support once you're home.",
    steps: [
      { title: 'Free Consultation', body: 'Share your history. We match your case to the right partner provider, who reviews it and explains realistic options.', image: '/assets/journey/pre-consulta.jpg' },
      { title: 'Plan, Quote & Itinerary', body: 'The provider sends a medical plan; we build your transparent quote and travel itinerary around it.', image: '/assets/journey/consulta.jpg' },
      { title: 'Travel & Care in Cancún', body: 'We coordinate flights, lodging, and transport. You receive care at our partner clinic; we stay with you throughout.', image: '/assets/journey/welcome.jpg' },
      { title: 'Follow-Up at Home', body: 'We help coordinate remote check-ins and aftercare with the provider once you return home.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
    sections: [
      { h2: 'Travel & logistics', body: 'Cancún International (CUN) is a major hub with direct flights from cities across the Americas, Europe, and beyond — including most major U.S. and Canadian cities. Nonstop flights run about 2 hours from Miami or Houston, and around 4 hours from New York or Toronto. We provide flight guidance, airport pickup, and lodging near the partner clinic, so travel logistics are one less thing to plan.' },
      { h2: 'Costs & payments', body: "You receive one transparent, itemized quote before committing — medical, travel, and coordination costs clearly broken down. You pay Kern Stem Care directly, and we handle payment to your medical provider and other partners on your behalf, so you're never juggling multiple invoices in a foreign currency." },
    ],
  },
  testimonials: {
    metaTitle: 'Testimonials | Kern Stem Care',
    metaDescription: 'Real patient stories, shared with written consent. Results are not typical and vary by person. See how Kern Stem Care supports patients traveling to Cancún.',
    eyebrow: 'Patient Stories',
    title: 'Real patients, real stories',
    lead: 'Real stories from real patients who traveled to Cancún for stem cell and regenerative therapy, shared with their written consent. Every journey is different — results vary and are not typical — but each story shows what coordinated care with Kern Stem Care actually looks like.',
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
  estimate: {
    metaTitle: 'Get Your Personalized Price Estimate | Kern Stem Care',
    metaDescription:
      'Share your case details and get a personalized, itemized price estimate for stem cell therapy in Cancún — reviewed by a licensed physician, no obligation.',
    eyebrow: 'Free, No-Obligation Estimate',
    title: 'Get Your Personalized Price Estimate',
    lead: "Fill out the form below and our coordination team will prepare your personalized, itemized price estimate for stem cell and regenerative therapy in Cancún, Mexico — reviewed by a licensed physician before it reaches you. It only takes a few minutes.",
    steps: [
      { title: 'Tell us about your case', body: 'Share your basic info, your condition, and any recent lab studies or medical records you have.' },
      { title: 'Our medical team reviews it', body: "A licensed physician at one of our partner clinics reviews your information to see what's realistic for your case." },
      { title: 'Receive your itemized estimate', body: 'We send you a clear, written estimate — medical, travel, and coordination costs broken down separately — usually within 24 hours.' },
    ],
    form: {
      labelFirst: 'First name',
      labelLast: 'Last name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelCountry: 'Country',
      labelBirthdate: 'Date of birth',
      addonsTitle: 'Additional services',
      addonTransport: 'Airport-to-hotel transport',
      addonHotel: 'Hotel room for 3 nights',
      labelGender: 'Gender',
      genderOptions: ['Female', 'Male', 'Other', 'Prefer not to say'],
      labelWeight: 'Weight',
      weightUnits: ['kg', 'lb'],
      labelHeight: 'Height',
      heightUnits: ['cm', 'in'],
      conditionCategoriesTitle: 'Which best describes your condition or goal?',
      conditionCategories: ['Joint & Orthopedic', 'Sports Injury & Recovery', 'Immune Wellness & Support', 'Anti-Aging & Longevity', 'Senior Health & Wellness', 'Aesthetic & Skin', 'Metabolic & Hormonal Support', 'Placenta Implant Therapy', 'Personalized / Not sure yet'],
      labelCondition: 'Tell us about your condition or goal',
      conditionPlaceholder: 'e.g. knee osteoarthritis, an autoimmune condition, anti-aging…',
      labelId: 'Government ID or passport (to verify your identity)',
      idHint: 'Used only to confirm your identity before your evaluation — stored securely and never shared without your consent.',
      labelFiles: 'Lab studies or medical records (optional)',
      filesHint: 'PDF, JPG, or PNG — you can also send these later by email if you prefer.',
      labelConsent:
        "I consent to Kern Stem Care's coordination team reviewing this information and identification document to prepare my estimate. This is not medical advice and does not create a doctor-patient relationship.",
      submit: 'Submit My Information',
      fineprint:
        'This is an estimate request, not a medical diagnosis, treatment plan, or guarantee of price or outcome. Your final protocol and cost are confirmed by the treating physician during your evaluation.',
    },
    whyTitle: 'Why do we ask for weight and height?',
    whyBody:
      "Stem cell dosing is calculated by your treating physician based on body weight — sharing it upfront helps us prepare a more accurate initial estimate. Your final protocol is always confirmed by the physician during your evaluation, not by this form.",
    disclaimer:
      '<strong>Important:</strong> Kern Stem Care is a medical coordination agency, not a clinic, and does not provide medical treatment or advice. This estimate is prepared with guidance from independent, licensed partner physicians but is not a final quote, diagnosis, or guarantee — your treating physician confirms your protocol and final cost during your evaluation. Many regenerative therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational.',
  },
};

const es: PagesSet = {
  services: {
    metaTitle: 'Terapias Regenerativas en Cancún, México | Kern Stem Care',
    metaDescription:
      'Compara las terapias regenerativas a las que ayudamos a acceder en Cancún — células madre, exosomas, fibroblastos y placenta liofilizada — con clínicas y laboratorios independientes y certificados.',
    eyebrow: 'Qué Coordinamos',
    title: 'Servicios',
    lead: 'Una terapia regenerativa en Cancún, México es tan sólida como el equipo que la respalda — y de eso justo nos encargamos. Verificamos y validamos cada clínica y laboratorio independiente con licencia gubernamental (COFEPRIS) con el que coordinamos, desde la terapia con células madre hasta los exosomas, y luego facilitamos cada paso, desde tu primera llamada hasta tu seguimiento en casa.',
    cards: [
      { image: '/assets/services/stem-cells.webp', alt: 'Representación microscópica de células madre', slug: 'stem-cells', title: 'Células Madre', body: 'Células que se renuevan y se transforman en otros tipos celulares. La más estudiada de las terapias que coordinamos.' },
      { image: '/assets/services/exosomes.webp', alt: 'Representación microscópica de vesículas de exosomas', slug: 'exosomes', title: 'Exosomas', body: 'Vesículas liberadas por las células que transportan moléculas de señalización. Un enfoque libre de células y un campo más reciente, con evidencia en desarrollo.' },
      { image: '/assets/services/fibroblasts.webp', alt: 'Representación microscópica de fibroblastos y fibras de colágeno', slug: 'fibroblasts', title: 'Fibroblastos', body: 'Células productoras de colágeno que construyen el tejido conectivo. La más acotada, centrada en aplicaciones de piel y cicatrización.' },
      { image: '/assets/services/placenta.webp', alt: 'Frasco de placenta humana liofilizada', slug: 'placenta', title: 'Placenta Liofilizada', body: 'Una preparación de tejido placentario liofilizado, aplicada mediante inyecciones subdérmicas. La menos consolidada de las terapias que coordinamos.' },
    ],
    disclaimer: investigationalES,
  },
  stemCells: {
    metaTitle: 'Terapia con Células Madre en Cancún, México | Kern Stem Care',
    metaDescription: '¿Piensas en terapia con células madre en Cancún? Kern Stem Care coordina evaluación, tratamiento en clínicas certificadas, viaje y seguimiento para pacientes internacionales.',
    eyebrow: 'Terapia Celular',
    title: 'Células Madre',
    lead: 'En qué consiste la terapia con células madre, para qué se estudia actualmente y cómo coordinamos tu acceso a ella con clínicas independientes y certificadas en Cancún.',
    heroImage: '/assets/services/stem-cells.webp',
    sections: [
      { h2: '¿Qué son las células madre?', body: 'Las células madre son los ladrillos con los que se construye el cuerpo. Pueden renovarse a sí mismas y transformarse en otros tipos de células —hueso, cartílago, piel o músculo, entre otras— y tu cuerpo las usa constantemente para reemplazar las células que se desgastan o se dañan. De las terapias celulares que coordinamos, son las más estudiadas, con décadas de investigación publicada. El origen específico de las células lo confirma el médico tratante y varía según el laboratorio aliado.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel para apoyar los procesos naturales de reparación del cuerpo, en particular en la reparación de tejidos y en la modulación de la inflamación. Es importante ser claros sobre el estado de este trabajo: para la mayoría de las condiciones específicas, la terapia con células madre sigue siendo de carácter investigacional y no un tratamiento aprobado de referencia. La evidencia está en desarrollo, cada persona responde distinto y ningún resultado puede garantizarse — ni por nosotros ni por ningún proveedor.' },
      { h2: 'Ideal para quienes:', body: '<ul><li><strong>Sufren dolor articular u ortopédico</strong> — desgaste de cartílago, molestias en tendones y articulaciones, o pérdida de movilidad.</li><li><strong>Se recuperan de una lesión deportiva</strong> — pacientes activos y atletas que buscan sanar tejidos blandos.</li><li><strong>Quieren reforzar su sistema inmunológico</strong> — para sentirse con más energía y defensas.</li><li><strong>Buscan frenar el envejecimiento y recuperar vitalidad</strong> — energía, bienestar y calidad de vida.</li><li><strong>Son adultos mayores</strong> — que desean conservar su movilidad, independencia y calidad de vida.</li></ul><p>Si te identificas con alguno de estos casos, el médico tratante lo confirmará contigo durante tu evaluación.</p>' },
    ],
    disclaimer: investigationalES,
  },
  exosomes: {
    metaTitle: 'Terapia con Exosomas en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con exosomas en Cancún, coordinada de principio a fin por Kern Stem Care con clínicas independientes y certificadas. Evaluación gratuita para pacientes internacionales.',
    eyebrow: 'Terapia Celular',
    title: 'Exosomas',
    lead: 'En qué consiste la terapia con exosomas, en qué punto está la investigación y cómo coordinamos tu acceso a ella con clínicas independientes y certificadas en Cancún.',
    heroImage: '/assets/services/exosomes.webp',
    sections: [
      { h2: '¿Qué son los exosomas?', body: 'Los exosomas son vesículas microscópicas que las células liberan para transportar moléculas de señalización de una célula a otra: son, en esencia, los mensajes que las células usan para comunicarse. Lo que los distingue de las otras terapias es que no contienen células vivas; las preparaciones de exosomas se estudian como un enfoque libre de células, por eso a veces se describen como la señal sin la célula que la produjo.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel en la comunicación entre células y en la señalización involucrada en la reparación de tejidos. Es un campo más reciente que el de las células madre, por lo que la base de evidencia es menor y sigue en desarrollo. Las preparaciones de exosomas no están aprobadas para tratar enfermedades específicas y ningún resultado puede garantizarse. Tu médico revisará contigo qué muestra y qué no muestra la investigación actual.' },
      { h2: 'Ideal para quienes:', body: '<ul><li><strong>Buscan potenciar su recuperación</strong> — a menudo en combinación con otras terapias celulares.</li><li><strong>Quieren mejorar la calidad de su piel</strong> — luminosidad, textura y rejuvenecimiento.</li><li><strong>Quieren apoyar su bienestar inmunológico</strong> — para sentirse con más defensas y energía.</li><li><strong>Buscan frenar el envejecimiento y ganar vitalidad</strong> — energía y bienestar general.</li></ul><p>Si te identificas con alguno de estos casos, el médico tratante lo confirmará contigo durante tu evaluación.</p>' },
    ],
    disclaimer: investigationalES,
  },
  fibroblasts: {
    metaTitle: 'Terapia con Fibroblastos en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con fibroblastos en Cancún, coordinada por Kern Stem Care con clínicas independientes y certificadas. Guía bilingüe, viaje y seguimiento para pacientes internacionales.',
    eyebrow: 'Terapia Celular',
    title: 'Fibroblastos',
    lead: 'En qué consiste la terapia con fibroblastos, en qué aplicaciones se estudia y cómo coordinamos tu acceso a ella con clínicas independientes y certificadas en Cancún.',
    heroImage: '/assets/services/fibroblasts.webp',
    sections: [
      { h2: '¿Qué son los fibroblastos?', body: 'Los fibroblastos son las células que producen colágeno y construyen el tejido conectivo que da estructura y firmeza a la piel. Son las células que trabajan en la dermis: cuando la piel se lesiona, los fibroblastos son en buena medida los responsables de reconstruir el tejido que hay debajo. De las cuatro terapias que coordinamos, esta es la más acotada — su investigación se concentra en aplicaciones de piel y cicatrización, más que en condiciones sistémicas.' },
      { h2: '¿Cómo podrían ayudarte?', body: 'La investigación se centra en su papel en la producción de colágeno y en la reparación de la piel y el tejido conectivo. Como el campo se concentra en aplicaciones localizadas, la terapia con fibroblastos se estudia en general para la piel misma, más que para condiciones internas o sistémicas. No está aprobada como tratamiento de enfermedades específicas, cada persona responde distinto y ningún resultado puede garantizarse.' },
      { h2: 'Ideal para quienes:', body: '<ul><li><strong>Quieren mejorar la calidad de su piel</strong> — firmeza, textura y rejuvenecimiento facial.</li><li><strong>Tienen cicatrices o heridas</strong> — y buscan apoyar los procesos naturales de reparación de la piel.</li><li><strong>Buscan un enfoque antienvejecimiento</strong> — con frecuencia combinado con otras terapias.</li></ul><p>Si tu interés está en temas articulares, ortopédicos o sistémicos, el médico te planteará una terapia distinta. Si te identificas con alguno de estos casos, lo confirmará contigo durante tu evaluación.</p>' },
    ],
    disclaimer: investigationalES,
  },
  placenta: {
    metaTitle: 'Terapia con Placenta Liofilizada en Cancún, México | Kern Stem Care',
    metaDescription: 'Terapia con tejido placentario liofilizado en Cancún, coordinada por Kern Stem Care con clínicas independientes y certificadas. Guía bilingüe para pacientes internacionales.',
    eyebrow: 'Terapia Regenerativa',
    title: 'Placenta Liofilizada',
    lead: 'En qué consiste la terapia con placenta liofilizada, cómo se administra y cómo coordinamos tu acceso a ella con clínicas independientes y certificadas en Cancún.',
    heroImage: '/assets/services/placenta.webp',
    sections: [
      { h2: '¿Qué es la placenta liofilizada?', body: 'La placenta liofilizada (secada en frío) es una preparación de tejido placentario estudiada por su contenido de factores de crecimiento y moléculas de señalización involucradas en procesos regenerativos. La liofilización retira el agua del tejido para que pueda conservarse de forma estable y reconstituirse antes de su uso. A diferencia de las otras terapias que coordinamos, no se administra por infusión: se aplica mediante inyecciones subdérmicas en el abdomen bajo. El origen específico del tejido varía según el laboratorio aliado y lo confirma el médico tratante.' },
      { h2: '¿Cómo podría ayudarte?', body: 'El interés de la investigación se centra en los factores de crecimiento y las moléculas de señalización que contiene el tejido. De las terapias que coordinamos, esta es la menos consolidada: la evidencia publicada es más escasa que la de células madre o exosomas, y se explora como apoyo general al bienestar, no para un diagnóstico específico. No está aprobada como tratamiento de ninguna condición, cada persona responde distinto y ningún resultado puede garantizarse.' },
      { h2: 'Ideal para quienes:', body: '<ul><li><strong>Buscan apoyo metabólico</strong> — bienestar relacionado con el metabolismo y los niveles de energía.</li><li><strong>Quieren equilibrar sus hormonas</strong> — programas orientados al bienestar hormonal.</li><li><strong>Buscan recuperar vitalidad y longevidad</strong> — con frecuencia combinada con otras terapias.</li></ul><p>Estas son áreas de exploración, no indicaciones establecidas. Si te identificas con alguno de estos casos, el médico tratante lo confirmará contigo durante tu evaluación.</p>' },
    ],
    disclaimer: investigationalES,
  },
  about: {
    metaTitle: 'Sobre Nosotros | Kern Stem Care',
    metaDescription: 'Conoce a Kern Stem Care: una agencia de coordinación médica bilingüe en Cancún — no una clínica — que verifica proveedores y guía a pacientes internacionales — incluyendo EE.UU. y Canadá — de principio a fin.',
    eyebrow: 'Sobre Kern Stem Care',
    title: 'Tu único punto de contacto de confianza en México',
    lead: 'Kern Stem Care es tu agencia de coordinación para terapias regenerativas y con células madre en Cancún, México. Verificamos, coordinamos y te acompañamos en cada etapa — cada clínica, médico y laboratorio de nuestra red pasa por nuestra verificación antes de que los conozcas.',
    sections: [
      { h2: 'Quiénes somos', body: 'Kern Stem Care es una agencia de coordinación médica operada por Kern Corsa Medical Group, S.A. de C.V., una empresa legalmente constituida en Cancún, México. Elegir dónde realizarte un tratamiento en otro país es una de las decisiones más importantes que tomarás — y ahí está nuestro valor: verificamos cada clínica, médico y laboratorio de nuestra red, coordinamos cada etapa y acompañamos a pacientes de Estados Unidos y Canadá de principio a fin. La atención médica la brindan esos proveedores independientes y acreditados, y trabajamos en conjunto con ellos bajo nuestras normas de calidad para que cada paciente reciba ese plus: la verificación, la supervisión y el acompañamiento que no encontrarías por tu cuenta.' },
      { h2: 'Qué hacemos', body: 'Coordinar tu viaje es lo fácil. El verdadero trabajo está hecho antes de que llegues. Verificamos nuestras clínicas asociadas en Cancún, confirmamos que cada vial contenga el conteo correcto de células madre para tu tratamiento, y revisamos que la tecnología adecuada esté disponible para mejorar su aplicación. Así, cuando aterrizas, los detalles que definen tu terapia con células madre ya están resueltos — llegas a una atención lista para ti, no solo a una cita en el calendario.' },
      { h2: 'Nuestra red', body: 'No cualquier clínica entra a nuestra red. Una clínica, médico o laboratorio se convierte en aliado solo después de cumplir nuestros criterios de verificación — empezando por una licencia vigente de la autoridad sanitaria de México (COFEPRIS), e incluyendo las credenciales, los estándares y los controles de calidad que completamos antes de conectar a un solo paciente. Desde verificar a cada proveedor hasta coordinar cada paso, así es como Kern Stem Care ofrece a pacientes internacionales un camino más seguro hacia la terapia con células madre y regenerativa en Cancún, México — a través de una red que respaldamos.' },
    ],
  },
  process: {
    metaTitle: 'Atención Regenerativa para Pacientes Internacionales | Kern Stem Care',
    metaDescription: 'Cómo coordina Kern Stem Care la atención regenerativa para pacientes internacionales: evaluación, clínica certificada, viaje, tratamiento y seguimiento con un coordinador bilingüe.',
    eyebrow: 'Cómo Funciona',
    title: 'Proceso para pacientes internacionales',
    lead: 'Tu guía paso a paso como paciente internacional: desde tu primer mensaje con un coordinador bilingüe, pasando por una consulta gratuita y una cotización transparente, hasta el viaje y la atención coordinados con proveedores independientes y certificados en Cancún — más el acompañamiento al volver a casa.',
    steps: [
      { title: 'Consulta Gratis', body: 'Comparte tu historial. Canalizamos tu caso al proveedor aliado adecuado, que lo revisa y te explica opciones realistas.', image: '/assets/journey/pre-consulta.jpg' },
      { title: 'Plan, Cotización e Itinerario', body: 'El proveedor envía un plan médico; nosotros armamos tu cotización transparente y tu itinerario de viaje.', image: '/assets/journey/consulta.jpg' },
      { title: 'Viaje y Atención en Cancún', body: 'Coordinamos vuelos, hospedaje y transporte. Recibes la atención en la clínica aliada; te acompañamos en todo momento.', image: '/assets/journey/welcome.jpg' },
      { title: 'Seguimiento en Casa', body: 'Ayudamos a coordinar el seguimiento remoto y los cuidados posteriores con el proveedor al volver a casa.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
    sections: [
      { h2: 'Viaje y logística', body: 'El Aeropuerto Internacional de Cancún (CUN) es un hub importante con vuelos directos desde ciudades de toda América, Europa y más — incluyendo la mayoría de las ciudades de EE.UU. y Canadá. Los vuelos directos toman cerca de 2 horas desde Miami o Houston, y alrededor de 4 horas desde Nueva York o Toronto. Ofrecemos guía de vuelos, traslado del aeropuerto y hospedaje cerca de la clínica aliada, para que la logística del viaje sea una preocupación menos.' },
      { h2: 'Costos y pagos', body: 'Recibes una sola cotización transparente y desglosada antes de comprometerte, con los costos médicos, de viaje y de coordinación claramente detallados. Pagas directamente a Kern Stem Care, y nosotros nos encargamos de pagar a tu proveedor médico y a los demás aliados en tu nombre, para que no tengas que lidiar con múltiples facturas en una moneda extranjera.' },
    ],
  },
  testimonials: {
    metaTitle: 'Testimonios | Kern Stem Care',
    metaDescription: 'Historias reales de pacientes, compartidas con consentimiento por escrito. Los resultados no son típicos y varían. Conoce cómo Kern Stem Care acompaña a quienes viajan a Cancún.',
    eyebrow: 'Historias de Pacientes',
    title: 'Pacientes reales, historias reales',
    lead: 'Historias reales de pacientes que viajaron a Cancún para recibir terapia con células madre y medicina regenerativa, compartidas con su consentimiento por escrito. Cada camino es distinto — los resultados varían y no son típicos — pero cada historia muestra cómo es en la práctica la atención coordinada con Kern Stem Care.',
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
  estimate: {
    metaTitle: 'Obtén tu Cotización Personalizada | Kern Stem Care',
    metaDescription:
      'Comparte los detalles de tu caso y obtén una cotización personalizada para terapia con células madre en Cancún — revisada por un médico certificado, sin compromiso.',
    eyebrow: 'Cotización Gratuita, Sin Compromiso',
    title: 'Obtén tu Cotización Personalizada',
    lead: 'Llena el formulario a continuación y nuestro equipo de coordinación preparará tu cotización personalizada y detallada para terapia con células madre y medicina regenerativa en Cancún, México — revisada por un médico certificado antes de llegar a ti. Solo toma unos minutos.',
    steps: [
      { title: 'Cuéntanos sobre tu caso', body: 'Comparte tu información básica, tu condición y cualquier estudio de laboratorio o expediente médico reciente que tengas.' },
      { title: 'Nuestro equipo médico lo revisa', body: 'Un médico certificado de una de nuestras clínicas aliadas revisa tu información para ver qué es realista para tu caso.' },
      { title: 'Recibe tu cotización detallada', body: 'Te enviamos una cotización clara y por escrito — con los costos médicos, de viaje y de coordinación desglosados por separado — normalmente en menos de 24 horas.' },
    ],
    form: {
      labelFirst: 'Nombre',
      labelLast: 'Apellido',
      labelEmail: 'Correo',
      labelPhone: 'Teléfono',
      labelCountry: 'País',
      labelBirthdate: 'Fecha de nacimiento',
      addonsTitle: 'Servicios adicionales',
      addonTransport: 'Transporte del aeropuerto al hotel',
      addonHotel: 'Habitación de hotel por 3 noches',
      labelGender: 'Género',
      genderOptions: ['Femenino', 'Masculino', 'Otro', 'Prefiero no decir'],
      labelWeight: 'Peso',
      weightUnits: ['kg', 'lb'],
      labelHeight: 'Altura',
      heightUnits: ['cm', 'in'],
      conditionCategoriesTitle: '¿Qué describe mejor tu condición u objetivo?',
      conditionCategories: ['Articular y Ortopédico', 'Lesiones Deportivas y Recuperación', 'Bienestar y Soporte Inmune', 'Antienvejecimiento y Longevidad', 'Salud y Bienestar en Adultos Mayores', 'Estética y Piel', 'Soporte Metabólico y Hormonal', 'Terapia de Implante de Placenta', 'Personalizado / Aún no estoy seguro'],
      labelCondition: 'Cuéntanos sobre tu condición u objetivo',
      conditionPlaceholder: 'ej. osteoartritis de rodilla, una condición autoinmune, antienvejecimiento…',
      labelId: 'Identificación oficial o pasaporte (para verificar tu identidad)',
      idHint: 'Se usa solo para confirmar tu identidad antes de tu evaluación — se guarda de forma segura y nunca se comparte sin tu consentimiento.',
      labelFiles: 'Estudios de laboratorio o expediente médico (opcional)',
      filesHint: 'PDF, JPG o PNG — también puedes enviarlos después por correo si prefieres.',
      labelConsent:
        'Doy mi consentimiento para que el equipo de coordinación de Kern Stem Care revise esta información y mi documento de identificación para preparar mi cotización. Esto no es un consejo médico ni crea una relación médico-paciente.',
      submit: 'Enviar mi Información',
      fineprint:
        'Esta es una solicitud de cotización, no un diagnóstico médico, un plan de tratamiento ni una garantía de precio o resultado. Tu protocolo final y costo los confirma el médico tratante durante tu evaluación.',
    },
    whyTitle: '¿Por qué pedimos peso y altura?',
    whyBody:
      'La dosis de células madre la calcula tu médico tratante con base en el peso corporal — compartirlo desde ahora nos ayuda a preparar una cotización inicial más precisa. Tu protocolo final siempre lo confirma el médico durante tu evaluación, no este formulario.',
    disclaimer:
      '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación médica, no una clínica, y no brinda tratamiento ni consejo médico. Esta cotización se prepara con la guía de médicos aliados independientes y certificados, pero no es una cotización final, diagnóstico ni garantía — tu médico tratante confirma tu protocolo y costo final durante tu evaluación. Muchas terapias regenerativas no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación.',
  },
};

export const pagesContent: Record<Lang, PagesSet> = { en, es };
