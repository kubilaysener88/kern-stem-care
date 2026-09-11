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
  tag?: string;
  name: string;
  meta?: string;
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

export interface PricingPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  tableTitle: string;
  tableHead: { item: string; price: string };
  rows: { item: string; detail: string; price: string }[];
  tableNote: string;
  productNote: string;
  fxNote: string;
  tableCta: string;
  includedTitle: string;
  included: string[];
  excludedTitle: string;
  excluded: string[];
  excludedNote: string;
  driversTitle: string;
  driversLead: string;
  drivers: { q: string; a: string }[];
  paymentTitle: string;
  paymentLead: string;
  payment: { title: string; body: string }[];
  lowTitle: string;
  lowBody: string;
  marketTitle: string;
  marketLead: string;
  marketHead: { provider: string; range: string };
  market: { provider: string; range: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  cta: { title: string; body: string; label: string; href: string };
  disclaimer: string;
}

export interface ChooseClinicPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  stepsTitle: string;
  steps: { title: string; body: string; link?: { label: string; href: string } }[];
  redFlagsTitle: string;
  redFlags: string[];
  worked: { title: string; body: string; ctaLabel: string; ctaHref: string };
  faqTitle: string;
  faq: { q: string; a: string }[];
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
  chooseClinic: ChooseClinicPage;
  pricing: PricingPage;
}

const investigationalEN =
  '<strong>Important:</strong> Kern Stem Care is a coordination agency and does not provide medical treatment or advice. These therapies are offered by independent, licensed providers. Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Individual results vary; no outcome or cure is guaranteed.';
const investigationalES =
  '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación y no brinda tratamiento ni consejo médico. Estas terapias las ofrecen proveedores independientes y con licencia. Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Los resultados individuales varían; no se garantiza ningún resultado ni cura.';

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
        body: 'If you book our transfer, one of our own drivers meets you at the airport and takes you to your hotel and to the clinic — so the day of your treatment is not the day you work out logistics.',
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
        body: 'Si contratas nuestro traslado, uno de nuestros choferes te recibe en el aeropuerto y te lleva a tu hotel y a la clínica — para que el día de tu aplicación no sea el día de resolver logística.',
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
      {
        h2: 'How much is actually administered?',
        body:
          'A joint application uses <strong>56 million cells per joint treated</strong> — always that figure, whatever you weigh — so a two-joint application is 112 million. Body weight enters the calculation only for the anti-aging and general-wellness application, which goes in intravenously at <strong>2 million cells per kilogram</strong>: a 70 kg (154 lb) patient receives around 140 million. Injections can be ultrasound-guided depending on the area being treated. Cell count is the figure most patients are never given, and it is what determines what a price actually buys, so it is worth asking anywhere you compare us. The treating physician confirms the number for your own case in writing at your evaluation, and the laboratory ships every batch with a signed Certificate of Quality. The counts sit next to the figures on our <a href="/en/pricing/">prices page</a>.',
      },
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
      {
        h2: 'How much is actually administered?',
        body:
          'Exosome preparations are measured in particles rather than cells. The counts coordinated in our network are <strong>5 billion</strong>, <strong>15 billion</strong> ultrapurified, and <strong>20 billion</strong>, and each sits next to its figure on our <a href="/en/pricing/">prices page</a>. Which one suits your case, if any does, is confirmed by the treating physician at your evaluation.',
      },
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
      { title: 'Travel & Care in Cancún', body: 'We guide your flight, and lodging and airport transfers are there if you want them. You receive care at our partner clinic; we stay with you throughout.', image: '/assets/journey/welcome.jpg' },
      { title: 'Follow-Up at Home', body: 'We help coordinate remote check-ins and aftercare with the provider once you return home.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
    sections: [
      { h2: 'Travel & logistics', body: 'Cancún International (CUN) is a major hub with direct flights from cities across the Americas, Europe, and beyond — including most major U.S. and Canadian cities. Nonstop flights run about 2 hours from Miami or Houston, and around 4 hours from New York or Toronto. We give you flight guidance as part of coordinating your trip, and we can book the flights for you if you ask — the fare stays yours either way. Airport transfers and lodging near the partner clinic are <strong>optional services with their own cost</strong>, quoted separately from your treatment — take them and travel logistics become one less thing to plan, or arrange your own and nothing about your care changes. The person collecting you at the airport is one of our own drivers, named with their federal licence on <a href="/en/team/logistics-travel/">Logistics &amp; Transportation</a>. For the trip narrated day by day, read <a href="/en/blog/what-to-expect-medical-travel-cancun/">what to expect on a medical travel trip to Cancún</a>.' },
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
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', name: '[Patient first name, State]', summary: '[One-line summary of their story]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', name: '[Patient first name, Province]', summary: '[One-line summary of their story]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', name: '[Patient first name, State]', summary: '[One-line summary of their story]' },
    ],
    disclaimer:
      '<strong>Testimonial disclaimer:</strong> Testimonials reflect individual experiences and are not a promise of results. Patients shown gave written consent to share their stories. Results are not typical and will vary from person to person.',
  },
  contact: {
    metaTitle: 'Contact | Kern Stem Care',
    metaDescription: 'Request a free, no-obligation evaluation. A bilingual Kern Stem Care coordinator replies within 24 hours to guide your regenerative-care options in Cancún.',
    eyebrow: 'Get Started',
    title: 'Request your free, no-obligation evaluation',
    lead: 'A bilingual patient coordinator replies within 24 hours, Monday through Saturday. Tell us what you are dealing with and what you would like to know — the first conversation is free and carries no obligation.',
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
  pricing: {
    metaTitle: 'Stem cell therapy prices in Cancún | Kern Stem Care',
    metaDescription:
      'What each application actually costs in Cancún — the full price list, from $850 to $7,500 USD, what the figure includes, what it does not, and what drives the number up or down.',
    eyebrow: 'Prices',
    title: 'What it costs, before you ask',
    lead: 'The most common question patients ask other patients online is simply "what did you pay?" — and it is usually the hardest one to get answered. Here is our full list. No form, no call, no "contact us for pricing".',
    tableTitle: 'Price per application',
    tableHead: { item: 'Application', price: 'Price (USD)' },
    rows: [
      { item: 'One joint — knee, elbow, shoulder or hip', detail: 'Stem cells, 56 million per joint, injected into the joint. Ultrasound-guided depending on the area.', price: '$2,300' },
      { item: 'Two joints — knees, elbows or shoulders', detail: 'Stem cells, 112 million in total — 56 million per joint treated.', price: '$4,250' },
      { item: 'One area of the face', detail: 'Aesthetic treatment with fibroblasts, the cells that produce collagen, injected into the area being treated.', price: '$850' },
      { item: 'Full face and neck', detail: 'The same fibroblast treatment, covering the whole face and the neck.', price: '$1,500' },
      { item: 'Exosomes — 5 billion', detail: 'A cell-free preparation: the signalling vesicles cells use to communicate, without the cells themselves. Priced by particle count rather than by treated area.', price: '$970' },
      { item: 'Ultrapurified exosomes — 15 billion', detail: 'Three times the particle count of the entry preparation, and ultrapurified.', price: '$2,490' },
      { item: 'Exosomes — 20 billion', detail: 'A standard preparation, not ultrapurified, at the highest particle count we coordinate.', price: '$2,630' },
      { item: 'Placenta implant', detail: 'Freeze-dried placental tissue, placed as subdermal injections in the lower abdomen.', price: '$880' },
      { item: 'Anti-aging / overall well-being', detail: 'Stem cells given intravenously, dosed at 2 million cells per kilogram of body weight — which is why it is a range rather than a figure.', price: '$2,300 – $7,500, by patient weight' },
      { item: 'A serious or complex condition', detail: 'Which therapy, and how many applications, is decided by the treating physician at your evaluation.', price: 'Quoted after evaluation' },
    ],
    tableNote:
      'Serious conditions carry no figure on purpose. The protocol is built for the individual case, and putting a price on it before a physician has seen you would be the opposite of what this site tells you to demand from a clinic.',
    productNote:
      'Each product has its own page if you want to know what is actually being applied: <a href="/en/services/stem-cells/">stem cells</a>, <a href="/en/services/exosomes/">exosomes</a>, <a href="/en/services/fibroblasts/">fibroblasts</a>, and <a href="/en/services/placenta/">freeze-dried placenta</a>.',
    fxNote:
      'Figures are in U.S. dollars and were last reviewed on 10 September 2026. Our own costs are in Mexican pesos, so the dollar figures get revisited when the exchange rate moves materially. What holds for your case is the written quote from your evaluation, which is good for 30 days — not this page.',
    tableCta:
      'If your case is already on this list, you do not need to read the rest of the page to start. Send it to us and the exact figure comes back in writing.',
    includedTitle: 'What the figure includes',
    included: [
      'The medical evaluation and the consultation with the treating physician',
      'The cellular product and its laboratory preparation',
      'The treatment session or sessions at a government-licensed (COFEPRIS) clinic',
      'Coordination: provider matching, appointment scheduling, and a bilingual coordinator throughout your stay',
    ],
    excludedTitle: 'What sits outside it',
    excluded: [
      'Flights and meals — we do not include either. We advise on timings and routes, and we can book the flights for you if you would rather we did; the fare is still yours.',
      'Your hotel. Book it wherever you prefer, or ask us to find a trusted option near the clinic.',
      'Airport transfers, which are an optional add-on priced separately, with our own drivers.',
      'Follow-up once you are home, and any additional applications a physician may recommend later.',
    ],
    excludedNote:
      'Both the hotel and the transfer are optional. Plenty of patients arrange their own, especially those who already know Cancún — it changes nothing about the treatment or the price.',
    driversTitle: 'What moves the number',
    driversLead: 'These are the questions we are asked most often once someone has seen the list.',
    drivers: [
      {
        q: 'Why does one joint cost more than a full face?',
        a: 'Different cells and a different dose. A joint application is stem cells, at 56 million per joint treated. A facial one is fibroblasts — the cells that build collagen in the skin — and the quantity is not comparable. That is why the list runs by application rather than a single per-session rate.',
      },
      {
        q: 'Why is anti-aging a range instead of a figure?',
        a: 'Because it is dosed by body weight. A systemic application is calculated for the patient, so a lighter patient sits near $2,300 and a heavier one nearer $7,500. Your evaluation produces the exact number before you commit to anything.',
      },
      {
        q: 'Why are exosomes priced by particle count and everything else by area?',
        a: 'Because that is the unit the product comes in. An exosome preparation contains no living cells — it is the signalling vesicles on their own — so what you are paying for is a number of particles rather than a treated area. It is also why the 15 billion preparation costs close to the 20 billion one: ultrapurification is an extra processing step rather than a larger quantity, so the counts and the prices do not track each other. Which one suits your case, if any does, is decided by the treating physician at your evaluation.',
      },
      {
        q: 'Does Kern Stem Care add a fee on top?',
        a: 'No. The coordination is inside the figure you see. You pay us, and we pay the provider — there is no second invoice and no commission added at the end.',
      },
      {
        q: 'Is the quote final?',
        a: 'The written quote you receive after your evaluation is the figure, and it holds for 30 days. What can change it inside that window is a physician recommending something different from what you asked about — and you would know that before booking flights.',
      },
    ],
    paymentTitle: 'When you pay, and what happens if the answer is no',
    paymentLead:
      'The order of these steps is the part that protects you, so it is worth setting out plainly.',
    payment: [
      {
        title: 'A physician reviews your case before you travel',
        body: 'Your history and your lab studies go to the treating physician, and you meet them on a video consultation. The answer comes back before you book anything. If you are not a candidate, that is where it ends and it has cost you nothing — no deposit, no ticket, and no flight to Cancún to be turned away at the door.',
      },
      {
        title: 'You pay once you have the green light',
        body: 'In full, in a single payment, by 4pm the day before your application — by bank transfer, in cash, or with a debit or credit card. The deadline is not administrative: it is the cut-off for placing the order with the laboratory.',
      },
      {
        title: 'The laboratory prepares your product and sends it to the clinic',
        body: 'The order goes in, your preparation is made, and it is delivered to the clinic for your appointment. That is why the payment deadline is a time of day rather than just a date — the schedule works backwards from it.',
      },
      {
        title: 'The application is the following afternoon',
        body: 'You rest for the remainder of that day afterwards, which is the other reason patients usually bring someone.',
      },
    ],
    lowTitle: 'Our prices are low for this market. That deserves an answer.',
    lowBody:
      'Patients comparing clinics in Mexico routinely see quotes of $20,000 and up, and a much lower figure invites a fair question: what is missing? The honest answer is that a coordination agency does not carry a clinic\'s overhead and does not mark the provider up — you are seeing the provider\'s price plus our coordination, not a resale. But you should not take that on trust. Check the laboratory\'s sanitary licence number and the treating physician\'s cédula, both of which we publish, and ask any clinic quoting you five figures to do the same.',
    marketTitle: 'What others in Cancún publish',
    marketLead:
      'Ranges other providers published as of September 2026. They are here to show where we sit, not as a judgement of quality — a higher price is not evidence of worse care, and a lower one is not evidence of better.',
    marketHead: { provider: 'Provider', range: 'Published range (USD)' },
    market: [
      { provider: 'Regeneris Therapy', range: '$5,000 – $15,000 · knee $2,500 – $5,500' },
      { provider: 'Cellular Hope Institute', range: '$10,000 – $25,000' },
      { provider: 'GIOSTAR', range: '$6,900 – $18,968' },
      { provider: 'MER Clinic', range: '$3,408 – $5,812' },
      { provider: 'StemLife', range: '$2,500 – $25,000' },
    ],
    faqTitle: 'Common questions',
    faq: [
      {
        q: 'How many cells does an application contain?',
        a: 'A joint application uses 56 million cells per joint treated — always that figure, whatever you weigh — so a two-joint application is 112 million. Body weight enters the calculation only for the anti-aging and general-wellness application, which goes in intravenously at 2 million cells per kilogram: a 70 kg (154 lb) patient receives around 140 million. Those are the protocol figures; the treating physician confirms the number for your own case in writing at your evaluation. The laboratory that prepares them, NAO Biotechnology, ships every batch with a signed Certificate of Quality.',
      },
      {
        q: 'Are the injections ultrasound-guided?',
        a: 'They can be, depending on the area being treated. Ask which applies to your case at your evaluation. It is worth asking anywhere you compare us against — patients online raise it constantly, and a clinic that cannot answer it plainly is telling you something.',
      },
      {
        q: 'Do I pay the clinic or Kern Stem Care?',
        a: 'You pay us, and we pay the provider. One transaction, one itemized quote.',
      },
      {
        q: 'Do I have to pay anything before I get a number?',
        a: 'No. The first consultation is remote and free: you send your history, a partner physician reviews it, and an itemized quote comes back, usually within 24 hours. No deposit, no obligation. Payment comes later, and only once a physician has confirmed you are a candidate — the sequence is set out above.',
      },
      {
        q: 'Is the evaluation in person?',
        a: 'No. It is a video consultation with the treating physician, before you travel, based on your history and the lab studies we tell you to arrange. That order is the point: an evaluation that only happens once you have paid for flights is not much of a gate. What matters is that it is the physician who will treat you, that it works from your studies, and that it can end in a no.',
      },
      {
        q: 'Will my insurance cover any of this?',
        a: 'Plan for it as an out-of-pocket cost. Regenerative therapies are investigational rather than approved standard care for specific diseases, which is the usual reason insurers decline them, and that applies just as much to a clinic at home as to one in Mexico. Ask your own insurer rather than taking our word for it — and ask before you commit to anything. Every patient receives an itemized invoice, so if an insurer or a health-spending account will consider a claim, you will have the paperwork to put in front of them.',
      },
      {
        q: 'How many days do I need to be in Cancún?',
        a: 'Three, for a standard plan: you arrive and settle in on day one, the application is on day two, and you fly home on day three. You rest for the remainder of treatment day. If your medical plan calls for something different, you know that before you book flights.',
      },
      {
        q: 'Can I bring someone with me?',
        a: 'Yes. Patients usually do, and on treatment day it helps — you will be resting afterwards, and having someone for the trip back to the hotel makes the day easier.',
      },
      {
        q: 'Does a lower price mean fewer cells or a lesser product?',
        a: 'Not on its own, and you should not settle for anyone\'s word on it — ours included. The way to answer it is the certificate of quality for your batch and the licence numbers behind the lab and the physician. We publish ours so you can start there.',
      },
    ],
    cta: {
      title: 'Get your own number',
      body: 'Tell us the condition or goal and we come back with an itemized quote, reviewed by a licensed physician, within 24 hours. Free, and with no obligation.',
      label: 'Request your quote →',
      href: '/en/estimate/',
    },
    disclaimer:
      'Kern Stem Care is a medical coordination agency, not a clinic, and does not provide treatment or medical advice. No figure here is a diagnosis or a treatment recommendation. Which therapy suits a patient, and whether any does, is decided by the treating physician during the medical evaluation. Many regenerative therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Results vary from person to person.',
  },
  chooseClinic: {
    metaTitle: 'How to Choose a Stem Cell Clinic in Mexico | Kern Stem Care',
    metaDescription:
      "Five things you can verify yourself before choosing a stem cell clinic in Mexico — the physician's licence, the facility's sanitary document, the batch certificate — with the official government links.",
    eyebrow: 'Verification Guide',
    title: 'How to choose a stem cell clinic in Mexico',
    lead: 'The difference between a legitimate provider and a risky one is almost never the price or how polished the website looks. It is what they can show you in writing — and you can check most of it yourself, in a few minutes, without asking anyone permission.',
    stepsTitle: 'Five things you can verify before you decide',
    steps: [
      {
        title: "Verify the treating physician's licence",
        body: "Ask for the full name and <em>cédula profesional</em> of the <strong>physician who will treat you</strong> — not the coordinator answering your messages. Look it up on Mexico's public professional registry: their name should come back with their qualification. It is free, it takes under a minute, and nobody needs to know you did it.",
        link: { label: 'National registry of professionals (SEP)', href: 'https://www.gob.mx/cedulaprofesional' },
      },
      {
        title: "Ask for the facility's sanitary document",
        body: 'Health establishments in Mexico operate under an <strong>aviso de funcionamiento</strong> or, for higher-risk activities, a <strong>sanitary licence</strong> issued by COFEPRIS. It is worth being straight about one thing: there is no public search where you type a clinic name and its permit appears. That is exactly why the document itself is the evidence. Ask for the PDF and check that the legal name, the address, and the authorised activity match the clinic that will actually treat you.',
        link: { label: 'Sanitary licensing — COFEPRIS', href: 'https://www.gob.mx/cofepris/acciones-y-programas/licenciamiento' },
      },
      {
        title: 'Ask for the certificate of analysis for your batch',
        body: 'For the cells going into you, not a general laboratory brochure. It should document the tissue source, the cell count, viability, and sterility testing. If the laboratory does not issue a certificate for every batch, you already have your answer.',
      },
      {
        title: 'Insist on an evaluation by the treating physician, not the coordinator',
        body: 'Before you pay, and before you book flights you cannot change. It can be a video consultation — what it cannot be is a chat with whoever answers the WhatsApp, or a web form. It should be the physician who will actually treat you, it should work from your history and your lab studies, and it has to be able to end in a no. That is the step where a physician catches the cases a therapy is wrong for, and where a legitimate provider turns a patient away.',
      },
      {
        title: 'Get the itemized quote in writing',
        body: 'What it covers, what it leaves out, and who you pay for each part. A round number over WhatsApp is not a quote. Compare like for like: a lower price that skips the licensed laboratory or the evaluation by a physician is not a discount.',
        link: { label: 'What it costs and what goes into the price', href: '/en/blog/how-much-does-stem-cell-therapy-cost-in-mexico/' },
      },
    ],
    redFlagsTitle: 'Reasons to walk away',
    redFlags: [
      'They promise to cure a disease, or quote you a success percentage.',
      'They quote a treatment before any physician has evaluated you.',
      'They say "COFEPRIS certified" but produce no number and no document.',
      'The price drops if you decide today.',
      'They will not tell you the name of the physician who will treat you.',
      'They suggest you keep this from your doctor at home.',
    ],
    worked: {
      title: 'Start with us',
      body: 'This list is worth nothing if you do not also point it at whoever handed it to you. Our network’s numbers are published: the sanitary licence of the laboratory that prepares the cells, and the <em>cédula profesional</em> of every treating physician, with their full name. Check those before believing anything else we tell you.',
      ctaLabel: 'See what you can verify',
      ctaHref: '/en/about/#our-network',
    },
    faqTitle: 'Common questions',
    faq: [
      {
        q: 'Is stem cell therapy legal in Mexico?',
        a: 'Yes, within Mexico’s regulatory framework and at government-licensed (COFEPRIS) establishments. That is a different question from whether it is approved for your specific condition: many regenerative therapies are considered investigational and are not approved by the U.S. FDA or Health Canada for specific diseases. <a href="/en/blog/is-stem-cell-therapy-legal-in-mexico/">We explain the distinction here</a>.',
      },
      {
        q: 'What if I cannot read the laboratory certificate?',
        a: 'You do not need to interpret it like a specialist. Look for four things: a batch number, where the cells came from, a viability figure, and sterility testing. That it exists, is signed, and matches your batch already tells you most of what you need.',
      },
      {
        q: 'Will they be offended if I ask all this?',
        a: 'A serious provider expects these questions and has the documents ready. How they react to being asked is itself part of the information you are gathering.',
      },
      {
        q: 'You coordinate clinics. Can you be impartial?',
        a: 'We have an obvious interest and would rather say so: we earn when a treatment is coordinated. That is precisely why this guide is written so you can verify anyone, us included, using documents that do not depend on our word. If we ever fail one of the five points above, this page is the argument for not hiring us.',
      },
    ],
    disclaimer:
      '<strong>Important:</strong> Kern Stem Care is a medical coordination agency, not a clinic, and does not provide medical treatment or advice. This guide is general information to help you evaluate providers; it is not a diagnosis, a recommendation of any specific treatment, or a substitute for a medical evaluation. Many regenerative therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational.',
  },
};

const es: PagesSet = {
  services: {
    metaTitle: 'Terapias Regenerativas en Cancún, México | Kern Stem Care',
    metaDescription:
      'Compara las terapias regenerativas a las que ayudamos a acceder en Cancún — células madre, exosomas, fibroblastos y placenta liofilizada — con clínicas y laboratorios independientes y con licencia.',
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
      {
        h2: '¿Cuánto se aplica en realidad?',
        body:
          'Una aplicación articular usa <strong>56 millones de células por articulación tratada</strong> — siempre esa cifra, pese lo que pese el paciente — así que una de dos articulaciones son 112 millones. El peso corporal entra en el cálculo únicamente en la aplicación de antienvejecimiento y bienestar general, que se aplica por vía intravenosa a razón de <strong>2 millones de células por kilogramo</strong>: un paciente de 70 kg (154 lb) recibe alrededor de 140 millones. Las inyecciones pueden ser guiadas por ultrasonido según la zona que se vaya a tratar. El conteo celular es la cifra que casi nunca le dan al paciente, y es la que determina qué compra un precio, así que vale la pena preguntarla en cualquier lugar con el que nos compares. El médico tratante confirma por escrito la de tu caso durante la evaluación, y el laboratorio envía cada lote con su Certificado de Calidad firmado. Los conteos están junto a las cifras en nuestra <a href="/es/precios/">página de precios</a>.',
      },
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
      {
        h2: '¿Cuánto se aplica en realidad?',
        body:
          'Las preparaciones de exosomas se miden en partículas, no en células. Los conteos que coordinamos en nuestra red son <strong>5 mil millones</strong>, <strong>15 mil millones</strong> ultrapurificados y <strong>20 mil millones</strong>, y cada uno aparece con su cifra en nuestra <a href="/es/precios/">página de precios</a>. Cuál corresponde a tu caso, si alguno corresponde, lo confirma el médico tratante en tu evaluación.',
      },
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
    lead: 'Tu guía paso a paso como paciente internacional: desde tu primer mensaje con un coordinador bilingüe, pasando por una consulta gratuita y una cotización transparente, hasta el viaje y la atención coordinados con proveedores independientes y con licencia en Cancún — más el acompañamiento al volver a casa.',
    steps: [
      { title: 'Consulta Gratis', body: 'Comparte tu historial. Canalizamos tu caso al proveedor aliado adecuado, que lo revisa y te explica opciones realistas.', image: '/assets/journey/pre-consulta.jpg' },
      { title: 'Plan, Cotización e Itinerario', body: 'El proveedor envía un plan médico; nosotros armamos tu cotización transparente y tu itinerario de viaje.', image: '/assets/journey/consulta.jpg' },
      { title: 'Viaje y Atención en Cancún', body: 'Te orientamos con el vuelo; el hospedaje y los traslados están ahí si los quieres. Recibes la atención en la clínica aliada; te acompañamos en todo momento.', image: '/assets/journey/welcome.jpg' },
      { title: 'Seguimiento en Casa', body: 'Ayudamos a coordinar el seguimiento remoto y los cuidados posteriores con el proveedor al volver a casa.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
    sections: [
      { h2: 'Viaje y logística', body: 'El Aeropuerto Internacional de Cancún (CUN) es un hub importante con vuelos directos desde ciudades de toda América, Europa y más — incluyendo la mayoría de las ciudades de EE.UU. y Canadá. Los vuelos directos toman cerca de 2 horas desde Miami o Houston, y alrededor de 4 horas desde Nueva York o Toronto. Te damos guía de vuelos como parte de la coordinación de tu viaje, y podemos reservártelos si nos lo pides — el costo del boleto corre por tu cuenta en cualquier caso. El traslado del aeropuerto y el hospedaje cerca de la clínica aliada son <strong>servicios opcionales con costo aparte</strong>, cotizados por separado del tratamiento — si los tomas, la logística del viaje deja de ser tu preocupación; si prefieres organizarlos tú, tu atención no cambia en nada. Quien te recoge en el aeropuerto son nuestros propios choferes, con nombre y licencia federal publicados en <a href="/es/team/logistics-travel/">Logística y Transporte</a>. Si quieres el recorrido narrado día por día, léelo en <a href="/es/blog/que-esperar-viaje-turismo-medico-cancun/">qué esperar en un viaje médico a Cancún</a>.' },
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
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', name: '[Patient first name, State]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'vimeo', videoId: '[VIMEO_ID]', name: '[Patient first name, Province]', summary: '[Resumen de una línea de su historia]' },
      { provider: 'youtube', videoId: '[YOUTUBE_ID]', name: '[Patient first name, State]', summary: '[Resumen de una línea de su historia]' },
    ],
    disclaimer:
      '<strong>Aviso sobre testimonios:</strong> Los testimonios reflejan experiencias individuales y no son una promesa de resultados. Los pacientes mostrados dieron consentimiento por escrito para compartir su historia. Los resultados no son típicos y varían de persona a persona.',
  },
  contact: {
    metaTitle: 'Contacto | Kern Stem Care',
    metaDescription: 'Solicita tu evaluación gratuita y sin compromiso. Un coordinador bilingüe de Kern Stem Care te responde en menos de 24 horas para guiar tus opciones de atención en Cancún.',
    eyebrow: 'Comenzar',
    title: 'Solicita tu evaluación gratuita, sin compromiso',
    lead: 'Un coordinador bilingüe te responde en menos de 24 horas, de lunes a sábado. Cuéntanos qué estás viviendo y qué te gustaría saber — la primera conversación es gratuita y sin compromiso.',
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
      '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación médica, no una clínica, y no brinda tratamiento ni consejo médico. Esta cotización se prepara con la guía de médicos aliados independientes y con licencia, pero no es una cotización final, diagnóstico ni garantía — tu médico tratante confirma tu protocolo y costo final durante tu evaluación. Muchas terapias regenerativas no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación.',
  },
  pricing: {
    metaTitle: 'Precios de terapia con células madre en Cancún | Kern Stem Care',
    metaDescription:
      'Cuánto cuesta cada aplicación en Cancún — la lista completa, de $850 a $7,500 USD, qué incluye la cifra, qué no, y qué la sube o la baja.',
    eyebrow: 'Precios',
    title: 'Cuánto cuesta, antes de que preguntes',
    lead: 'La pregunta que los pacientes más se hacen entre ellos en internet es simplemente "¿tú cuánto pagaste?" — y suele ser la más difícil de que alguien conteste. Aquí está nuestra lista completa. Sin formulario, sin llamada, sin "contáctanos para conocer precios".',
    tableTitle: 'Precio por aplicación',
    tableHead: { item: 'Aplicación', price: 'Precio (USD)' },
    rows: [
      { item: 'Una articulación — rodilla, codo, hombro o cadera', detail: 'Células madre, 56 millones por articulación, aplicadas en la articulación. Con guía por ultrasonido según la zona.', price: '$2,300' },
      { item: 'Dos articulaciones — rodillas, codos u hombros', detail: 'Células madre, 112 millones en total — 56 millones por articulación tratada.', price: '$4,250' },
      { item: 'Una zona del rostro', detail: 'Tratamiento estético con fibroblastos, las células que producen colágeno, aplicados en la zona que se trata.', price: '$850' },
      { item: 'Rostro completo y cuello', detail: 'El mismo tratamiento con fibroblastos, en todo el rostro y el cuello.', price: '$1,500' },
      { item: 'Exosomas — 5 mil millones', detail: 'Una preparación libre de células: las vesículas de señalización que las células usan para comunicarse, sin las células mismas. Se cotiza por número de partículas y no por zona tratada.', price: '$970' },
      { item: 'Exosomas ultrapurificados — 15 mil millones', detail: 'El triple de partículas que la preparación de entrada, y ultrapurificada.', price: '$2,490' },
      { item: 'Exosomas — 20 mil millones', detail: 'Una preparación estándar, no ultrapurificada, con el conteo de partículas más alto que coordinamos.', price: '$2,630' },
      { item: 'Implante de placenta', detail: 'Tejido placentario liofilizado, aplicado en inyecciones subdérmicas en el abdomen bajo.', price: '$880' },
      { item: 'Antienvejecimiento / bienestar general', detail: 'Células madre por vía intravenosa, a razón de 2 millones de células por kilogramo de peso corporal — por eso es un rango y no una cifra.', price: '$2,300 – $7,500, según el peso' },
      { item: 'Una condición grave o compleja', detail: 'Qué terapia, y cuántas aplicaciones, lo decide el médico tratante en tu evaluación.', price: 'Se cotiza tras la evaluación' },
    ],
    tableNote:
      'Las condiciones graves no llevan cifra a propósito. El protocolo se arma para cada caso, y ponerle precio antes de que un médico te vea sería lo contrario de lo que este sitio te pide exigirle a una clínica.',
    productNote:
      'Cada producto tiene su propia página si quieres saber qué es exactamente lo que se aplica: <a href="/es/services/stem-cells/">células madre</a>, <a href="/es/services/exosomes/">exosomas</a>, <a href="/es/services/fibroblasts/">fibroblastos</a> y <a href="/es/services/placenta/">placenta liofilizada</a>.',
    fxNote:
      'Las cifras están en dólares estadounidenses y se revisaron por última vez el 10 de septiembre de 2026. Nuestros costos son en pesos mexicanos, así que las cifras en dólares se revisan cuando el tipo de cambio se mueve de forma significativa. Lo que vale para tu caso es la cotización por escrito de tu evaluación, con vigencia de 30 días, no esta página.',
    tableCta:
      'Si tu caso ya está en esta lista, no necesitas leer el resto de la página para empezar. Mándanoslo y te devolvemos la cifra exacta por escrito.',
    includedTitle: 'Qué incluye la cifra',
    included: [
      'La evaluación médica y la consulta con el médico tratante',
      'El producto celular y su preparación en laboratorio',
      'La sesión o sesiones de tratamiento en una clínica con licencia gubernamental (COFEPRIS)',
      'La coordinación: selección del proveedor, agenda de citas y un coordinador bilingüe durante toda tu estancia',
    ],
    excludedTitle: 'Qué queda fuera',
    excluded: [
      'Los vuelos y las comidas — no incluimos ninguno de los dos. Te asesoramos con horarios y rutas, y podemos reservarte los vuelos si lo prefieres; el costo sigue siendo tuyo.',
      'El hotel. Lo reservas donde prefieras, o nos pides una opción de confianza cerca de la clínica.',
      'El traslado del aeropuerto, que es un servicio opcional con su propio costo, con nuestros choferes.',
      'El seguimiento una vez que vuelves a casa, y las aplicaciones adicionales que un médico llegue a recomendar después.',
    ],
    excludedNote:
      'El hotel y el traslado son opcionales. Muchos pacientes lo resuelven por su cuenta, sobre todo quienes ya conocen Cancún — eso no cambia nada de su tratamiento ni de su precio.',
    driversTitle: 'Qué mueve la cifra',
    driversLead: 'Éstas son las preguntas que más nos hacen en cuanto alguien ve la lista.',
    drivers: [
      {
        q: '¿Por qué una articulación cuesta más que el rostro completo?',
        a: 'Son células distintas y una dosis distinta. Una aplicación articular es de células madre, 56 millones por articulación tratada. Una facial es de fibroblastos — las células que forman el colágeno de la piel — y la cantidad no es comparable. Por eso la lista va por aplicación y no por un precio único de sesión.',
      },
      {
        q: '¿Por qué antienvejecimiento es un rango y no una cifra?',
        a: 'Porque se dosifica según el peso corporal. Una aplicación sistémica se calcula para el paciente, así que alguien de menor peso queda cerca de $2,300 y alguien de mayor peso cerca de $7,500. Tu evaluación produce la cifra exacta antes de que te comprometas a nada.',
      },
      {
        q: '¿Por qué los exosomas se cotizan por número de partículas y lo demás por zona?',
        a: 'Porque ésa es la unidad en la que viene el producto. Una preparación de exosomas no contiene células vivas — son las vesículas de señalización solas — así que lo que pagas es una cantidad de partículas y no una zona tratada. Es también la razón de que la preparación de 15 mil millones cueste casi lo mismo que la de 20 mil millones: la ultrapurificación es un paso adicional de procesamiento, no una cantidad mayor, así que los conteos y los precios no van a la par. Cuál corresponde a tu caso, si alguno corresponde, lo decide el médico tratante en tu evaluación.',
      },
      {
        q: '¿Kern Stem Care cobra algo aparte?',
        a: 'No. La coordinación va dentro de la cifra que ves. Tú nos pagas a nosotros y nosotros al proveedor — no hay segunda factura ni comisión agregada al final.',
      },
      {
        q: '¿La cotización es definitiva?',
        a: 'La cotización por escrito que recibes después de tu evaluación es la cifra, y tiene una vigencia de 30 días. Lo que puede cambiarla dentro de ese plazo es que el médico recomiende algo distinto de lo que preguntaste — y eso lo sabrías antes de comprar vuelos.',
      },
    ],
    paymentTitle: 'Cuándo se paga, y qué pasa si la respuesta es no',
    paymentLead:
      'El orden de estos pasos es lo que te protege, así que vale la pena decirlo sin rodeos.',
    payment: [
      {
        title: 'Un médico revisa tu caso antes de que viajes',
        body: 'Tu historial y tus estudios de laboratorio van al médico tratante, y lo ves en una videoconsulta. La respuesta llega antes de que reserves nada. Si no eres candidato, ahí termina y no te costó nada — sin anticipo, sin boleto y sin volar a Cancún para que te digan que no en la puerta.',
      },
      {
        title: 'Pagas cuando ya tienes el visto bueno',
        body: 'Completo, en un solo pago, antes de las 4 pm del día anterior a tu aplicación — por transferencia, en efectivo, o con tarjeta de débito o crédito. Esa hora no es un trámite: es el corte para hacerle el pedido al laboratorio.',
      },
      {
        title: 'El laboratorio prepara tu producto y lo envía a la clínica',
        body: 'Entra el pedido, se prepara lo tuyo y se entrega en la clínica para tu cita. Por eso la fecha límite de pago es una hora del día y no nada más un día — el calendario corre hacia atrás desde ahí.',
      },
      {
        title: 'La aplicación es la tarde del día siguiente',
        body: 'El resto de ese día lo pasas en reposo, que es la otra razón por la que los pacientes suelen venir acompañados.',
      },
    ],
    lowTitle: 'Nuestros precios son bajos para este mercado. Eso merece una respuesta.',
    lowBody:
      'Quien compara clínicas en México ve con frecuencia cotizaciones de $20,000 para arriba, y una cifra mucho menor invita una pregunta justa: ¿qué le falta? La respuesta honesta es que una agencia de coordinación no carga con los gastos fijos de una clínica y no le pone sobreprecio al proveedor — estás viendo el precio del proveedor más nuestra coordinación, no una reventa. Pero no te lo creas por nuestra palabra. Comprueba el número de licencia sanitaria del laboratorio y la cédula del médico tratante, que publicamos los dos, y pídele lo mismo a cualquier clínica que te cotice cinco cifras.',
    marketTitle: 'Lo que publican otros en Cancún',
    marketLead:
      'Rangos que otros proveedores publicaban en septiembre de 2026. Están aquí para ubicar dónde estamos, no como juicio de calidad — un precio más alto no prueba peor atención, y uno más bajo no prueba mejor.',
    marketHead: { provider: 'Proveedor', range: 'Rango publicado (USD)' },
    market: [
      { provider: 'Regeneris Therapy', range: '$5,000 – $15,000 · rodilla $2,500 – $5,500' },
      { provider: 'Cellular Hope Institute', range: '$10,000 – $25,000' },
      { provider: 'GIOSTAR', range: '$6,900 – $18,968' },
      { provider: 'MER Clinic', range: '$3,408 – $5,812' },
      { provider: 'StemLife', range: '$2,500 – $25,000' },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuántas células trae una aplicación?',
        a: 'Una aplicación articular usa 56 millones de células por articulación tratada — siempre esa cifra, pese lo que pese el paciente — así que una de dos articulaciones son 112 millones. El peso corporal entra en el cálculo únicamente en la aplicación de antienvejecimiento y bienestar general, que se aplica por vía intravenosa a razón de 2 millones de células por kilogramo: un paciente de 70 kg (154 lb) recibe alrededor de 140 millones. Ésas son las cifras del protocolo; el médico tratante te confirma por escrito la de tu caso durante la evaluación. El laboratorio que las prepara, NAO Biotechnology, envía cada lote con su Certificado de Calidad firmado.',
      },
      {
        q: '¿Las inyecciones son guiadas por ultrasonido?',
        a: 'Pueden serlo, según la zona que se vaya a tratar. Pregunta cuál aplica a tu caso en la evaluación. Vale la pena preguntarlo en cualquier lugar con el que nos compares — los pacientes lo plantean constantemente en internet, y una clínica que no lo conteste con claridad te está diciendo algo.',
      },
      {
        q: '¿Le pago a la clínica o a Kern Stem Care?',
        a: 'Nos pagas a nosotros y nosotros al proveedor. Una sola transacción y una cotización desglosada.',
      },
      {
        q: '¿Tengo que pagar algo antes de recibir una cifra?',
        a: 'No. La primera consulta es a distancia y gratuita: nos mandas tu historial, un médico aliado lo revisa y te devolvemos una cotización desglosada, normalmente en menos de 24 horas. Sin anticipo y sin compromiso. El pago viene después, y sólo cuando un médico confirmó que eres candidato — la secuencia está más arriba.',
      },
      {
        q: '¿La evaluación es presencial?',
        a: 'No. Es una videoconsulta con el médico tratante, antes de que viajes, a partir de tu historial y de los estudios de laboratorio que te indicamos. Ese orden es justo el punto: una evaluación que sólo ocurre cuando ya pagaste vuelos no filtra gran cosa. Lo que importa es que sea el médico que te va a tratar, que parta de tus estudios y que pueda terminar en un no.',
      },
      {
        q: '¿Mi seguro médico cubre algo de esto?',
        a: 'Cuenta con que sale de tu bolsillo. Las terapias regenerativas son de investigación y no un tratamiento aprobado de referencia para enfermedades específicas, que es la razón habitual por la que las aseguradoras las rechazan, y eso aplica igual en una clínica de tu país que en una de México. Pregúntale a tu aseguradora en vez de creernos a nosotros — y pregunta antes de comprometerte a nada. Todos los pacientes reciben una factura desglosada, así que si una aseguradora o una cuenta de gastos médicos acepta considerar el reembolso, vas a tener el documento para presentarlo.',
      },
      {
        q: '¿Cuántos días necesito estar en Cancún?',
        a: 'Tres, en un plan estándar: el día uno llegas y te instalas, el día dos es la aplicación y el día tres vuelas de regreso. El resto del día del tratamiento lo pasas en reposo. Si tu plan médico requiere algo distinto, lo sabes antes de comprar vuelos.',
      },
      {
        q: '¿Puedo venir acompañado?',
        a: 'Sí. La mayoría lo hace, y el día del tratamiento ayuda — vas a estar en reposo después, y tener a alguien para el regreso al hotel hace el día más llevadero.',
      },
      {
        q: '¿Un precio más bajo significa menos células o un producto inferior?',
        a: 'Por sí solo no, y no deberías conformarte con la palabra de nadie — la nuestra incluida. La forma de contestarlo es el certificado de calidad de tu lote y los números de licencia del laboratorio y del médico. Publicamos los nuestros para que empieces por ahí.',
      },
    ],
    cta: {
      title: 'Obtén tu propia cifra',
      body: 'Cuéntanos la condición o el objetivo y te devolvemos una cotización desglosada, revisada por un médico con licencia, en menos de 24 horas. Gratis y sin compromiso.',
      label: 'Solicita tu cotización →',
      href: '/es/cotizacion/',
    },
    disclaimer:
      'Kern Stem Care es una agencia de coordinación médica, no una clínica, y no brinda tratamiento ni consejo médico. Ninguna cifra de esta página constituye un diagnóstico ni una recomendación de tratamiento. Qué terapia corresponde a cada paciente, y si alguna corresponde, lo define el médico tratante durante la evaluación médica. Muchas terapias regenerativas no están aprobadas por la FDA de EE.UU. ni por Health Canada para enfermedades específicas y se consideran de investigación. Los resultados varían de una persona a otra.',
  },
  chooseClinic: {
    metaTitle: 'Cómo Elegir una Clínica de Células Madre en México | Kern Stem Care',
    metaDescription:
      'Cinco cosas que puedes verificar tú mismo antes de elegir una clínica de células madre en México — la cédula del médico, el documento sanitario del establecimiento, el certificado del lote — con los enlaces oficiales del gobierno.',
    eyebrow: 'Guía de Verificación',
    title: 'Cómo elegir una clínica de células madre en México',
    lead: 'La diferencia entre un proveedor legítimo y uno riesgoso casi nunca está en el precio ni en lo bonita que se vea su página. Está en lo que te pueden mostrar por escrito — y buena parte lo puedes comprobar tú mismo, en unos minutos, sin pedirle permiso a nadie.',
    stepsTitle: 'Cinco cosas que puedes verificar antes de decidir',
    steps: [
      {
        title: 'Verifica la cédula del médico que te va a tratar',
        body: 'Pide el nombre completo y la <em>cédula profesional</em> del <strong>médico tratante</strong>, no la del coordinador que te contesta los mensajes. Búscalo en el registro público de profesionistas: debe aparecer su nombre con su título. Es gratis, tarda menos de un minuto, y nadie tiene que enterarse de que lo hiciste.',
        link: { label: 'Registro Nacional de Profesionistas (SEP)', href: 'https://www.gob.mx/cedulaprofesional' },
      },
      {
        title: 'Pide el documento sanitario del establecimiento',
        body: 'En México los establecimientos de salud operan con un <strong>aviso de funcionamiento</strong> o, para actividades de mayor riesgo, una <strong>licencia sanitaria</strong> emitida por COFEPRIS. Vale la pena ser franco en algo: no existe un buscador público donde escribas el nombre de una clínica y aparezca su permiso. Justo por eso el documento en sí es la prueba. Pídelo en PDF y revisa que el nombre legal, el domicilio y la actividad autorizada coincidan con la clínica donde de verdad te van a atender.',
        link: { label: 'Licencias sanitarias — COFEPRIS', href: 'https://www.gob.mx/cofepris/acciones-y-programas/licenciamiento' },
      },
      {
        title: 'Pide el certificado de análisis de tu lote',
        body: 'De las células que te van a aplicar a ti, no un folleto general del laboratorio. Debe documentar el origen del tejido, el conteo celular, la viabilidad y las pruebas de esterilidad. Si el laboratorio no emite un certificado por cada lote, ya tienes tu respuesta.',
      },
      {
        title: 'Exige una evaluación con el médico tratante, no con el coordinador',
        body: 'Antes de pagar, y antes de comprar vuelos que no puedas cambiar. Puede ser una videoconsulta — lo que no puede ser es una plática con quien conteste el WhatsApp, ni un formulario. Debe ser el médico que de verdad te va a tratar, debe partir de tu historial y de tus estudios de laboratorio, y tiene que poder terminar en un no. Ése es el paso donde un médico detecta los casos en que una terapia no es adecuada, y donde un proveedor legítimo rechaza a un paciente.',
      },
      {
        title: 'Pide la cotización desglosada por escrito',
        body: 'Qué incluye, qué deja fuera, y a quién le pagas cada parte. Un número redondo por WhatsApp no es una cotización. Compara lo equivalente con lo equivalente: un precio más bajo que se salta el laboratorio con licencia o la evaluación del médico no es un descuento.',
        link: { label: 'Qué cuesta y qué entra en el precio', href: '/es/blog/cuanto-cuesta-la-terapia-con-celulas-madre-en-mexico/' },
      },
    ],
    redFlagsTitle: 'Razones para retirarte',
    redFlags: [
      'Prometen curar una enfermedad, o te dan un porcentaje de éxito.',
      'Te cotizan un tratamiento antes de que un médico te haya evaluado.',
      'Dicen "certificados por COFEPRIS" pero no te dan número ni documento.',
      'El precio baja si decides hoy.',
      'No te dicen el nombre del médico que te va a aplicar el tratamiento.',
      'Te sugieren que no lo comentes con tu médico de casa.',
    ],
    worked: {
      title: 'Empieza por nosotros',
      body: 'Esta lista no sirve de nada si no la aplicas también a quien te la dio. Los números de nuestra red están publicados: la licencia sanitaria del laboratorio que prepara las células, y la <em>cédula profesional</em> de cada médico tratante, con nombre y apellido. Compruébalos antes de creernos cualquier otra cosa.',
      ctaLabel: 'Ver lo que puedes verificar',
      ctaHref: '/es/about/#nuestra-red',
    },
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Es legal la terapia con células madre en México?',
        a: 'Sí, dentro del marco regulatorio mexicano y en establecimientos con licencia gubernamental (COFEPRIS). Esa es una pregunta distinta a si está aprobada para tu condición específica: muchas terapias regenerativas se consideran de investigación y no están aprobadas por la FDA de EE.UU. ni por Health Canada para enfermedades concretas. <a href="/es/blog/es-legal-la-terapia-con-celulas-madre-en-mexico/">Aquí explicamos la diferencia</a>.',
      },
      {
        q: '¿Y si no entiendo el certificado del laboratorio?',
        a: 'No necesitas interpretarlo como especialista. Fíjate en cuatro cosas: que traiga número de lote, que diga de dónde vienen las células, que reporte viabilidad, y que incluya pruebas de esterilidad. Que exista, esté firmado y corresponda a tu lote ya te dice casi todo.',
      },
      {
        q: '¿Se van a molestar si pregunto todo esto?',
        a: 'Un proveedor serio espera estas preguntas y tiene los documentos a la mano. Cómo reaccionan ante la pregunta es, en sí mismo, parte de la información que estás buscando.',
      },
      {
        q: 'Ustedes coordinan clínicas. ¿Pueden ser imparciales?',
        a: 'Tenemos un interés evidente y preferimos decirlo: ganamos cuando se coordina un tratamiento. Precisamente por eso esta guía está escrita para que verifiques a cualquiera, nosotros incluidos, con documentos que no dependen de nuestra palabra. Si algún día fallamos en alguno de los cinco puntos de arriba, esta misma página es el argumento para no contratarnos.',
      },
    ],
    disclaimer:
      '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación médica, no una clínica, y no brinda tratamiento ni consejo médico. Esta guía es información general para ayudarte a evaluar proveedores; no es un diagnóstico, ni una recomendación de ningún tratamiento específico, ni sustituye una evaluación médica. Muchas terapias regenerativas no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación.',
  },
};

export const pagesContent: Record<Lang, PagesSet> = { en, es };

/**
 * Are there any real patient testimonials yet?
 *
 * Until a patient video exists, the testimonials page has nothing on it but
 * "[Patient first name, State]" three times. The nav link, the sitemap entry
 * and the page's own robots directive all read this one value, so the page
 * comes back the moment a real card is added — and cannot come back half-way.
 */
export const HAS_TESTIMONIALS = pagesContent.en.testimonials.cards.some(
  (card) => !card.name.trimStart().startsWith('['),
);
