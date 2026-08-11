import type { Lang } from './ui';

/**
 * Full content of the Kern Stem Care home page, per language.
 * Text inside [square brackets] is a PLACEHOLDER for the client's real data —
 * do not invent real values. Keep the "agency, not a clinic" framing and all
 * medical disclaimers intact (see CLAUDE.md).
 */

export interface NavItem {
  href: string;
  label: string;
}
export interface IconCard {
  /** Emoji icon. Omit when the card uses `image` instead. */
  icon?: string;
  /** Path under /public. When set, the card shows this photo instead of the emoji. */
  image?: string;
  /** Alt text — required whenever `image` is set. */
  alt?: string;
  title: string;
  body: string;
  accent?: 'blue' | 'teal' | 'gold' | 'green' | 'teal-border';
  /** When set, the whole card links to /<lang>/services/<slug> ("Learn more"). */
  slug?: 'stem-cells' | 'exosomes' | 'fibroblasts' | 'placenta';
}
export interface Slide {
  emoji: string;
  ph: string;
  caption: string;
}
export interface Stat {
  num: string;
  label: string;
  isPh?: boolean;
}
export interface Step {
  title: string;
  body: string;
}
export interface Coordinator {
  photoPh: string;
  name: string;
  role: string;
  bio: string;
}
export interface Partner {
  icon: string;
  name: string;
  detail: string;
}
export interface Filter {
  key: string;
  label: string;
}
export interface VideoCard {
  seg: string;
  tag: string;
  drop: string;
  name: string;
  meta: string;
  summary: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface Tier {
  eyebrow: string;
  price: string;
  priceIsPh?: boolean;
  priceSuffix?: string;
  desc: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}
export interface FooterCol {
  title: string;
  links: NavItem[];
}

export interface HomeContent {
  brandTagline: string;
  nav: NavItem[];
  ctaConsult: string;
  hero: {
    flagsPre: string;
    flagsMid: string;
    h1: string;
    /** Short pipe-separated value props under the H1 (e.g. "Vetted clinics | …"). */
    tagline?: string;
    p: string;
    pills: string[];
    ctaPrimary: string;
    ctaGhost: string;
    card: {
      title: string;
      subtitle: string;
      labelName: string;
      phName: string;
      labelEmail: string;
      phEmail: string;
      labelCountry: string;
      countryOptions: string[];
      labelCondition: string;
      phCondition: string;
      submit: string;
      fineprint: string;
    };
  };
  roleBanner: string;
  showcase: {
    eyebrow: string;
    h2: string;
    slides: Slide[];
    ctaBook: string;
  };
  trust: Stat[];
  therapies: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: IconCard[];
    note: string;
  };
  about: {
    eyebrow: string;
    h2: string;
    p: string;
    checks: string[];
    cta: string;
    mediaPh: string;
  };
  why: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: IconCard[];
  };
  treatments: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: IconCard[];
    note: string;
  };
  journey: {
    eyebrow: string;
    h2: string;
    steps: Step[];
  };
  team: {
    eyebrow: string;
    h2: string;
    lead: string;
    coordinatorsTitle: string;
    coordinators: Coordinator[];
    partnersTitle: string;
    partnersLead: string;
    partners: Partner[];
  };
  testimonials: {
    eyebrow: string;
    h2: string;
    lead: string;
    filters: Filter[];
    cards: VideoCard[];
    note: string;
  };
  faq: {
    eyebrow: string;
    h2: string;
    items: Faq[];
  };
  membership: {
    eyebrow: string;
    h2: string;
    lead: string;
    tiers: Tier[];
    newsletter: {
      title: string;
      body: string;
      phEmail: string;
      submit: string;
    };
    note: string;
  };
  contact: {
    eyebrow: string;
    h2: string;
    info: { icon: string; title: string; value: string }[];
    form: {
      labelFirst: string;
      labelLast: string;
      labelEmail: string;
      labelPhone: string;
      labelCountry: string;
      countryOptions: string[];
      labelArea: string;
      areaOptions: string[];
      labelMessage: string;
      submit: string;
      fineprint: string;
    };
  };
  footer: {
    blurb: string;
    cols: FooterCol[];
    contactCol: { title: string; links: string[] };
    disclaimer: string;
    privacy: string;
    terms: string;
    rights: string;
    legalEntityPh: string;
  };
  whatsappLabel: string;
}

const en: HomeContent = {
  brandTagline: 'Medical Coordination Agency · Cancún',
  nav: [
    { href: '#about', label: 'About' },
    { href: '#therapies', label: 'Therapies' },
    { href: '#treatments', label: 'What We Coordinate' },
    { href: '#journey', label: 'Patient Journey' },
    { href: '#team', label: 'Team & Partners' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#membership', label: 'Membership' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ],
  ctaConsult: 'Free Consultation',
  hero: {
    flagsPre: 'Coordination agency in Cancún',
    flagsMid: 'Guiding patients from',
    h1: 'Your Trusted Guide to the Best Stem Cell Care in Cancún',
    tagline: 'Vetted clinics | Transparent pricing | Complete care',
    p: "",
    pills: ['🧬 Stem Cells', '✨ Exosomes', '🧫 Fibroblasts'],
    ctaPrimary: 'Request Free Consultation',
    ctaGhost: 'What We Coordinate',
    card: {
      title: 'Get a Free Case Review',
      subtitle: 'A patient coordinator will reach out within 24 hours.',
      labelName: 'Full name',
      phName: 'Jane Doe',
      labelEmail: 'Email',
      phEmail: 'you@email.com',
      labelCountry: 'Country',
      countryOptions: ['United States', 'Canada', 'Mexico', 'Other'],
      labelCondition: 'Condition / area of interest',
      phCondition: 'e.g. knee osteoarthritis',
      submit: 'Send Request',
      fineprint:
        'By submitting you agree to be contacted. This is an information request, not a medical guarantee.',
    },
  },
  roleBanner:
    'ℹ️ <strong>Kern Stem Care is a legally registered medical coordination agency based in Cancún, not a clinic.</strong> All medical care is provided by independent, licensed clinics, physicians, and laboratories in Cancún, Mexico. We coordinate and guide your journey.',
  showcase: {
    eyebrow: 'More Than Healthcare',
    h2: 'Every Moment of Your Care Matters',
    slides: [
      { emoji: '🎥', ph: '[video-1.mp4 / YouTube ID]', caption: 'Stem cell application' },
      { emoji: '📷', ph: '[photo-treatment-1.jpg]', caption: 'Exosome therapy at partner clinic' },
      { emoji: '🎥', ph: '[video-2.mp4 / YouTube ID]', caption: 'Patient journey in Cancún' },
      { emoji: '📷', ph: '[photo-lab-1.jpg]', caption: 'Partner cellular-therapy laboratory' },
      { emoji: '📷', ph: '[photo-treatment-2.jpg]', caption: 'Fibroblast application' },
    ],
    ctaBook: '📅 Contact Us & Book Your Appointment',
  },
  trust: [
    { num: '[XX]+', label: 'Patients guided to care', isPh: true },
    { num: '[XX]', label: 'Partner clinics & physicians in Cancún', isPh: true },
    { num: '[X]', label: 'Partner cellular-therapy labs', isPh: true },
    { num: '🇺🇸 🇨🇦', label: 'Patients from US & Canada' },
  ],
  therapies: {
    eyebrow: 'our treatments',
    h2: 'Our Regenerative Therapies. Care Designed Around You.',
    lead: 'Cellular therapy uses specialized cells — and the signaling molecules they release — that can renew themselves and, under specific conditions, support the body\'s own repair processes. It is an active area of regenerative medicine, studied for tissue repair and inflammation. For most specific diseases it remains investigational rather than an approved standard of care. Kern Stem Care is not a clinic. We are the layer between you and the independent, COFEPRIS-licensed clinics and laboratories in Cancún that deliver these therapies: we vet them before they ever reach you, arrange the logistics, and stay with you from the first call through your follow-up after you return home. Below are the four therapies our partner providers work with, and what each one is actually studied for. Explore each therapy in depth: each one has its own page explaining what it is, what researchers are currently studying it for, and what a protocol typically involves at our partner clinics in Cancún.',
    cards: [
      {
        icon: '🧬',
        title: 'Stem Cells',
        slug: 'stem-cells',
        accent: 'blue',
        body: 'Cells that can renew themselves and develop into other cell types. The most extensively studied of the cellular therapies, researched for its role in tissue repair and in modulating inflammation. The cell source, dose, and route of administration are confirmed by the treating physician during your medical evaluation.',
      },
      {
        icon: '✨',
        title: 'Exosomes',
        slug: 'exosomes',
        accent: 'teal',
        body: 'Microscopic vesicles released by cells that carry signaling molecules between them. Because they contain no living cells, exosomes are studied as a cell-free approach to tissue repair and communication. A newer field than stem cell research, with evidence still developing; your physician will review what is currently known during your evaluation.',
      },
      {
        icon: '🧫',
        title: 'Fibroblasts',
        slug: 'fibroblasts',
        accent: 'gold',
        body: 'Cells that produce collagen and build the connective tissue that gives skin its structure. The most narrowly focused of the four therapies: studied mainly for skin, wound, and aesthetic applications rather than systemic conditions. Your physician will confirm whether this approach fits your case and how the cells are prepared.',
      },
      {
        icon: '🌱',
        title: 'Freeze-Dried Placenta',
        slug: 'placenta',
        accent: 'green',
        body: 'Lyophilized (freeze-dried) placental tissue, naturally rich in growth factors and signaling molecules. Unlike the other three therapies, it is administered as subdermal injections in the lower abdomen. The least established of the four: explored for general support of metabolism, energy, and hormonal balance, and not approved for any specific condition. Your physician will confirm the tissue source, which varies by partner laboratory, and explain what the current evidence does and does not show.',
      },
    ],
    note: '<strong>Note:</strong> These cellular therapies are provided by independent, licensed partner laboratories and clinics. Many such therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Descriptions here are educational and are not a promise of any result.',
  },
  about: {
    eyebrow: 'Stem Cells in Cancún: Why Choose Us',
    h2: 'Your single, trusted point of contact in Mexico',
    p: 'Your stem cell treatment in Cancún can be fully defined before you board the plane. Every clinic, laboratory, and physician in our network passed our review before it reached you, and one bilingual coordinator stays with you from the first call to your follow-up at home. Kern Stem Care is the agency that coordinates; the medical care is delivered by those independent, government-licensed providers.',
    checks: [
      'We connect you only with clinics and labs licensed under Mexican health authority (COFEPRIS)',
      'One bilingual coordinator from first call to follow-up',
      'Travel, lodging, transport, and appointments fully arranged',
      'You contract care directly with the medical provider — we coordinate, transparently',
    ],
    cta: 'Talk to a Coordinator',
    mediaPh: '📷 Replace with photo of your team / Cancún<br><span class="ph">[team-cancun.jpg]</span>',
  },
  why: {
    eyebrow: 'What We Do For You',
    h2: 'An agency that takes the guesswork out of the journey',
    lead: 'Traveling abroad for care is overwhelming on your own. As your coordination agency, we vet the providers, manage the logistics, and stay by your side — so you can focus on your health.',
    cards: [
      {
        image: '/assets/why/aliados-verificados.jpg',
        alt: 'Physician shaking hands with a coordinator inside a clinic',
        title: 'Vetted Partners',
        body: 'We connect you only with licensed clinics, physicians, and labs in Cancún that we have personally worked with.',
      },
      {
        image: '/assets/why/concierge-bilingue.jpg',
        alt: 'Bilingual coordinator wearing a headset while assisting a patient',
        title: 'Bilingual Concierge',
        body: 'One English-speaking coordinator guides you and the providers through every step.',
      },
      {
        image: '/assets/why/logistica-completa.jpg',
        alt: 'Driver welcoming a traveler with luggage at Cancún International Airport',
        title: 'Full Logistics',
        body: 'Flights guidance, airport pickup, lodging, and transport in Cancún — all arranged for you.',
      },
      {
        icon: '🤝',
        title: 'One Point of Contact',
        body: 'From first question to follow-up at home, you deal with us — not a dozen strangers.',
      },
    ],
  },
  treatments: {
    eyebrow: 'What We Coordinate',
    h2: 'Care we help you access through our partner network',
    lead: 'These are the areas of care offered by the independent clinics and physicians we partner with in Cancún — each one built on our four core therapies: stem cells, exosomes, fibroblasts, and placental implants. Every plan begins with a medical evaluation performed by the provider, not by us. We coordinate access, logistics, and support around it.',
    cards: [
      { image: '/assets/treatments/articular-ortopedico.jpg', alt: 'Physician examining a patient\'s knee during a consultation', title: 'Joint & Orthopedic', body: 'Programs focused on joints, tendons, and musculoskeletal comfort and mobility. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/lesiones-deportivas.jpg', alt: 'Tennis player holding a sore elbow on the court', title: 'Sports Injury & Recovery', body: 'Recovery-focused programs for active patients and athletes. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/soporte-inmune.jpg', alt: 'Woman resting her hands over her abdomen outdoors', title: 'Immune Wellness & Support', body: 'Wellness programs supporting immune health and resilience. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/antienvejecimiento.jpg', alt: 'Woman with healthy, luminous skin', title: 'Anti-Aging & Longevity', body: 'Vitality and longevity-oriented wellness programs. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/adulto-mayor.jpg', alt: 'Older couple hiking together at sunset', title: 'Senior Health & Wellness', body: 'Wellness programs tailored to the needs of older adults. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/estetica-piel.jpg', alt: 'Woman receiving a facial aesthetic treatment', title: 'Aesthetic & Skin', body: 'Skin, rejuvenation, and aesthetic wellness — a natural fit for fibroblast applications. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/protocolos-personalizados.jpg', alt: 'Physician reviewing a personalized plan with an older patient', title: 'Personalized Protocols', body: 'Custom evaluations for complex or combined cases. <span class="ph">[Edit description]</span>' },
    ],
    note: '<strong>Important:</strong> Kern Stem Care is a coordination agency and does not provide medical treatment or advice. The therapies above are offered by independent licensed providers. Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Individual results vary. Neither we nor our partners guarantee outcomes or cures; the provider will discuss the current scientific evidence with you during your evaluation.',
  },
  journey: {
    eyebrow: 'How It Works',
    h2: 'Your patient journey, step by step',
    steps: [
      { title: 'Free Consultation', body: 'Share your history with us. We match your case to the right partner provider, who reviews it and explains realistic options.' },
      { title: 'Plan, Quote & Itinerary', body: 'The provider sends a medical plan; we build your transparent quote and travel itinerary around it.' },
      { title: 'Travel & Care in Cancún', body: 'We coordinate flights, lodging, and transport. You receive care at our partner clinic; we stay with you throughout.' },
      { title: 'Follow-Up at Home', body: 'We help coordinate remote check-ins and aftercare with the provider once you return home.' },
    ],
  },
  team: {
    eyebrow: 'Team & Partners',
    h2: 'Your coordination team — and the partners we work with',
    lead: 'You are guided by our patient coordinators. The medical care is delivered by the independent, licensed clinics, physicians, and laboratories in our Cancún network.',
    coordinatorsTitle: 'Our Patient Coordinators',
    coordinators: [
      { photoPh: '📷 [coordinator-1.jpg]', name: '[Name]', role: '[Patient Coordinator]', bio: '[Languages, years helping international patients, role]' },
      { photoPh: '📷 [coordinator-2.jpg]', name: '[Name]', role: '[Logistics & Travel]', bio: '[Languages, experience, role]' },
      { photoPh: '📷 [coordinator-3.jpg]', name: '[Name]', role: '[Founder / Director]', bio: '[Background, why you started the agency]' },
    ],
    partnersTitle: 'Our Cancún Partner Network',
    partnersLead:
      'Independent, COFEPRIS-licensed clinics and laboratories. Add each partner only with their written permission to display their name and logo.',
    partners: [
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Specialty · COFEPRIS license #]' },
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Specialty · COFEPRIS license #]' },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Cellular therapy lab · accreditation]' },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Cellular therapy lab · accreditation]' },
    ],
  },
  testimonials: {
    eyebrow: 'Patient Stories',
    h2: 'Real patients, real videos',
    lead: 'Browse stories by audience segment. Drop your edited video files or embed links into the placeholders below.',
    filters: [
      { key: 'all', label: 'All Stories' },
      { key: 'usa', label: '🇺🇸 U.S. Patients' },
      { key: 'canada', label: '🇨🇦 Canadian Patients' },
      { key: 'ortho', label: 'Orthopedic & Joint' },
      { key: 'neuro', label: 'Neurological' },
      { key: 'auto', label: 'Autoimmune' },
      { key: 'wellness', label: 'Wellness & Anti-Aging' },
    ],
    cards: [
      { seg: 'usa ortho', tag: '🇺🇸 U.S. · Orthopedic', drop: '[embed: video-1.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { seg: 'usa neuro', tag: '🇺🇸 U.S. · Neurological', drop: '[embed: video-2.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { seg: 'canada ortho', tag: '🇨🇦 Canada · Orthopedic', drop: '[embed: video-3.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { seg: 'canada auto', tag: '🇨🇦 Canada · Autoimmune', drop: '[embed: video-4.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { seg: 'usa wellness', tag: '🇺🇸 U.S. · Wellness', drop: '[embed: video-5.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
      { seg: 'canada neuro', tag: '🇨🇦 Canada · Neurological', drop: '[embed: video-6.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condition / program]', summary: '[One-line summary of their story]' },
    ],
    note: '<strong>Testimonial disclaimer:</strong> Testimonials reflect individual experiences and are not a promise of results. Patients shown gave written consent to share their stories. Results are not typical and will vary from person to person.',
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Questions patients ask us most',
    items: [
      { q: 'Is this treatment approved by the FDA or Health Canada?', a: 'Many regenerative therapies are not FDA- or Health Canada-approved for specific diseases and are considered investigational. We are transparent about the regulatory and evidence status of every program during your consultation. <span class="ph">[Customize.]</span>' },
      { q: 'Are you a clinic?', a: 'No. Kern Stem Care is a medical coordination agency legally registered in Cancún, Mexico. We guide you and arrange your travel, lodging, appointments, and support. The medical evaluation and treatment are provided by independent, licensed clinics and physicians in our Cancún network.' },
      { q: 'How do I travel to Cancún from the U.S. or Canada?', a: 'Cancún International (CUN) has direct flights from most major U.S. and Canadian cities. We provide flight guidance, airport pickup, and lodging near the partner clinic. <span class="ph">[Add travel times.]</span>' },
      { q: 'How much does it cost, and who do I pay?', a: 'You receive a transparent written quote before committing. Medical fees are set by and paid to the provider; our coordination fee and travel costs are itemized separately so you always know what you are paying for. <span class="ph">[Explain your fee model.]</span>' },
      { q: 'Are the clinics and labs licensed?', a: "We only connect patients with clinics, physicians, and laboratories licensed under Mexico's health authority (COFEPRIS). We can share each partner's credentials on request. <span class=\"ph\">[Describe your vetting.]</span>" },
      { q: 'What support do I get after returning home?', a: 'We help coordinate remote follow-up with the provider and stay in contact with you. <span class="ph">[Describe your follow-up process.]</span>' },
    ],
  },
  membership: {
    eyebrow: 'Membership',
    h2: 'Become a Kern Stem Care member',
    lead: 'Choose how you want us by your side. Membership covers our coordination, concierge, and follow-up services — the medical treatment is always quoted separately by the provider.',
    tiers: [
      {
        eyebrow: 'Community',
        price: 'Free',
        desc: 'For people exploring their options.',
        features: ['Free case review & consultation', 'Monthly wellness newsletter', 'Educational guides & updates'],
        cta: 'Join Free',
        ctaHref: '#newsletter',
      },
      {
        eyebrow: 'Patient Concierge',
        price: '$[XXX]',
        priceIsPh: true,
        priceSuffix: ' / journey',
        desc: 'Full coordination for one treatment trip.',
        features: ['Everything in Community', 'Dedicated bilingual coordinator', 'Provider matching & appointment booking', 'Travel, lodging & transport arranged', 'On-the-ground support in Cancún'],
        cta: 'Get Started',
        ctaHref: '#contact',
        featured: true,
        badge: 'MOST POPULAR',
      },
      {
        eyebrow: 'VIP Wellness',
        price: '$[XXX]',
        priceIsPh: true,
        priceSuffix: ' / year',
        desc: 'For returning & long-term wellness clients.',
        features: ['Everything in Patient Concierge', 'Priority scheduling & coordination', 'Ongoing follow-up coordination', 'Member rates with partner services <span class="ph">[if offered]</span>'],
        cta: 'Talk to Us',
        ctaHref: '#contact',
      },
    ],
    newsletter: {
      title: 'Join our free newsletter',
      body: 'Wellness tips, patient stories, and updates. Unsubscribe anytime.',
      phEmail: 'you@email.com',
      submit: 'Subscribe',
    },
    note: "<strong>Note:</strong> Membership fees cover Kern Stem Care's coordination and concierge services only. Medical treatment, evaluations, and any therapy costs are set by and paid to the independent provider, and are quoted separately. Membership does not guarantee acceptance for treatment or any medical result.",
  },
  contact: {
    eyebrow: 'Get Started',
    h2: 'Request your free, no-obligation evaluation',
    info: [
      { icon: '📞', title: 'Call / WhatsApp', value: '[+1 toll-free number] · [WhatsApp]' },
      { icon: '✉️', title: 'Email', value: '[patients@kernstemcare.com]' },
      { icon: '📍', title: 'Agency Office', value: '[Street, Cancún, Mexico]' },
      { icon: '🕐', title: 'Patient Line Hours', value: '[Mon–Sat, 8am–8pm CST]' },
    ],
    form: {
      labelFirst: 'First name',
      labelLast: 'Last name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelCountry: 'Country',
      countryOptions: ['United States', 'Canada', 'Mexico', 'Other'],
      labelArea: 'Area of interest',
      areaOptions: ['Joint & Orthopedic', 'Sports Injury & Recovery', 'Immune Wellness & Support', 'Anti-Aging & Longevity', 'Senior Health & Wellness', 'Aesthetic & Skin', 'Metabolic & Hormonal Support', 'Placenta Implant Therapy', 'Personalized / Not sure yet'],
      labelMessage: 'Tell us about your situation',
      submit: 'Request Free Evaluation',
      fineprint: 'We respect your privacy. Your information is used only to respond to your request. This form does not provide medical advice or guarantee treatment.',
    },
  },
  footer: {
    blurb:
      'Legally registered medical coordination agency based in Cancún, guiding patients from the United States and Canada to independent, licensed clinics, physicians, and laboratories.',
    cols: [
      {
        title: 'Explore',
        links: [
          { href: '#about', label: 'About Us' },
          { href: '#treatments', label: 'What We Coordinate' },
          { href: '#team', label: 'Team & Partners' },
          { href: '#testimonials', label: 'Testimonials' },
        ],
      },
      {
        title: 'Patients',
        links: [
          { href: '#journey', label: 'Patient Journey' },
          { href: '#faq', label: 'FAQ' },
          { href: '#contact', label: 'Free Consultation' },
        ],
      },
    ],
    contactCol: { title: 'Contact', links: ['[+1 toll-free]', '[patients@kernstemcare.com]', '[Cancún, Mexico]'] },
    disclaimer:
      '<strong>Important disclaimer:</strong> Kern Stem Care is a medical coordination and travel agency. We are <strong>not a clinic, hospital, or medical provider</strong> and we do not provide medical treatment, diagnosis, or advice. All medical care is delivered by independent, licensed clinics, physicians, and laboratories. The information on this website is for general educational purposes only. Many therapies coordinated are not approved by the U.S. FDA or Health Canada and are considered investigational. We make no guarantee of results or cure. Always consult a qualified physician before making medical decisions.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: 'All rights reserved.',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  whatsappLabel: 'Chat with us',
};

const es: HomeContent = {
  brandTagline: 'Agencia de Coordinación Médica · Cancún',
  nav: [
    { href: '#about', label: 'Nosotros' },
    { href: '#therapies', label: 'Terapias' },
    { href: '#treatments', label: 'Qué Coordinamos' },
    { href: '#journey', label: 'Proceso' },
    { href: '#team', label: 'Equipo y Aliados' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#membership', label: 'Membresía' },
    { href: '#faq', label: 'Preguntas' },
    { href: '#contact', label: 'Contacto' },
  ],
  ctaConsult: 'Consulta Gratis',
  hero: {
    flagsPre: 'Agencia en Cancún',
    flagsMid: 'Guiando a pacientes de',
    h1: 'Tu Guía de Confianza para la Mejor Atención en Células Madre en Cancún',
    tagline: 'Clínicas verificadas | Precios transparentes | Atención completa',
    p: '',
    pills: ['🧬 Células Madre', '✨ Exosomas', '🧫 Fibroblastos'],
    ctaPrimary: 'Solicitar Consulta Gratis',
    ctaGhost: 'Qué Coordinamos',
    card: {
      title: 'Revisión de Caso Gratis',
      subtitle: 'Un coordinador le contactará en menos de 24 horas.',
      labelName: 'Nombre completo',
      phName: 'Jane Doe',
      labelEmail: 'Correo electrónico',
      phEmail: 'you@email.com',
      labelCountry: 'País',
      countryOptions: ['United States', 'Canada', 'Mexico'],
      labelCondition: 'Condición / área de interés',
      phCondition: 'e.g. knee osteoarthritis',
      submit: 'Enviar Solicitud',
      fineprint:
        'Al enviar acepta ser contactado. Esto es una solicitud de información, no una garantía médica.',
    },
  },
  roleBanner:
    'ℹ️ <strong>Kern Stem Care es una agencia de coordinación médica legalmente constituida en Cancún, no una clínica.</strong> Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados en Cancún, México. Nosotros coordinamos y guiamos tu proceso.',
  showcase: {
    eyebrow: 'Más Que Atención Médica',
    h2: 'Cada Momento de Tu Atención Importa',
    slides: [
      { emoji: '🎥', ph: '[video-1.mp4 / YouTube ID]', caption: 'Aplicación de células madre' },
      { emoji: '📷', ph: '[photo-treatment-1.jpg]', caption: 'Terapia con exosomas en clínica aliada' },
      { emoji: '🎥', ph: '[video-2.mp4 / YouTube ID]', caption: 'Experiencia del paciente en Cancún' },
      { emoji: '📷', ph: '[photo-lab-1.jpg]', caption: 'Laboratorio de terapia celular aliado' },
      { emoji: '📷', ph: '[photo-treatment-2.jpg]', caption: 'Aplicación de fibroblastos' },
    ],
    ctaBook: '📅 Contáctanos y Agenda Tu Cita',
  },
  trust: [
    { num: '[XX]+', label: 'Pacientes guiados a su atención', isPh: true },
    { num: '[XX]', label: 'Clínicas y médicos aliados en Cancún', isPh: true },
    { num: '[X]', label: 'Laboratorios de terapia celular aliados', isPh: true },
    { num: '🇺🇸 🇨🇦', label: 'Pacientes de EE.UU. y Canadá' },
  ],
  therapies: {
    eyebrow: 'nuestros tratamientos',
    h2: 'Nuestras Terapias Regenerativas. Atención Diseñada Para Ti.',
    lead: 'La terapia celular utiliza células especializadas — y las moléculas de señalización que estas liberan — capaces de renovarse y, bajo condiciones específicas, apoyar los procesos naturales de reparación del cuerpo. Es un área activa de la medicina regenerativa, estudiada en reparación de tejidos e inflamación. Para la mayoría de las enfermedades específicas sigue siendo de carácter investigacional y no un tratamiento aprobado de referencia. Kern Stem Care no es una clínica. Somos el puente entre tú y las clínicas y laboratorios independientes con licencia COFEPRIS en Cancún que aplican estas terapias: los evaluamos antes de que lleguen a ti, organizamos la logística y te acompañamos desde la primera llamada hasta tu seguimiento al regresar a casa. A continuación, las cuatro terapias con las que trabajan nuestros proveedores aliados y lo que se estudia de cada una. Conoce cada terapia a fondo: cada una tiene su propia página donde explicamos qué es, qué se está estudiando actualmente sobre ella y en qué consiste habitualmente un protocolo en nuestras clínicas aliadas en Cancún.',
    cards: [
      {
        icon: '🧬',
        title: 'Células Madre',
        slug: 'stem-cells',
        accent: 'blue',
        body: 'Células capaces de renovarse y transformarse en otros tipos celulares. La más estudiada de las terapias celulares, investigada por su papel en la reparación de tejidos y en la modulación de la inflamación. La fuente celular, la dosis y la vía de administración las define el médico tratante durante tu evaluación médica.',
      },
      {
        icon: '✨',
        title: 'Exosomas',
        slug: 'exosomes',
        accent: 'teal',
        body: 'Vesículas microscópicas liberadas por las células que transportan moléculas de señalización entre ellas. Al no contener células vivas, los exosomas se estudian como un enfoque libre de células para la reparación y la comunicación entre tejidos. Es un campo más reciente que el de las células madre, con evidencia aún en desarrollo; tu médico revisará contigo lo que se sabe actualmente durante tu evaluación.',
      },
      {
        icon: '🧫',
        title: 'Fibroblastos',
        slug: 'fibroblasts',
        accent: 'gold',
        body: 'Células que producen colágeno y construyen el tejido conectivo que da estructura a la piel. La más acotada de las cuatro terapias: se estudia principalmente en aplicaciones de piel, cicatrización y estética, más que en condiciones sistémicas. Tu médico confirmará si este enfoque es adecuado para tu caso y cómo se preparan las células.',
      },
      {
        icon: '🌱',
        title: 'Placenta Liofilizada',
        slug: 'placenta',
        accent: 'green',
        body: 'Tejido placentario liofilizado, naturalmente rico en factores de crecimiento y moléculas de señalización. A diferencia de las otras tres terapias, se administra mediante inyecciones subdérmicas en el abdomen bajo. La menos consolidada de las cuatro: se explora como apoyo general al metabolismo, la energía y el equilibrio hormonal, y no está aprobada para ninguna condición específica. Tu médico confirmará el origen del tejido, que varía según el laboratorio aliado, y te explicará qué muestra y qué no muestra la evidencia actual.',
      },
    ],
    note: '<strong>Nota:</strong> Estas terapias celulares las brindan laboratorios y clínicas aliadas independientes y certificadas. Muchas de estas terapias no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Las descripciones aquí son educativas y no son una promesa de ningún resultado.',
  },
  about: {
    eyebrow: 'Células Madre en Cancún: Por Qué Elegirnos',
    h2: 'Tu único punto de contacto de confianza en México',
    p: 'Tu tratamiento con células madre en Cancún puede estar definido antes de que subas al avión. Cada clínica, laboratorio y médico de nuestra red pasó por nuestra revisión antes de llegar a ti, y un solo coordinador bilingüe te acompaña desde la primera llamada hasta el seguimiento en casa. Kern Stem Care es la agencia que coordina; la atención médica la brindan esos proveedores independientes con licencia sanitaria oficial.',
    checks: [
      'Te conectamos solo con clínicas y laboratorios certificados por la autoridad sanitaria mexicana (COFEPRIS)',
      'Un coordinador bilingüe desde la primera llamada hasta el seguimiento',
      'Viaje, hospedaje, transporte y citas totalmente gestionados',
      'Tú contratas la atención directamente con el proveedor médico — nosotros coordinamos, con transparencia',
    ],
    cta: 'Hablar con un Coordinador',
    mediaPh: '📷 Reemplazar con foto de tu equipo / Cancún<br><span class="ph">[equipo-cancun.jpg]</span>',
  },
  why: {
    eyebrow: 'Lo Que Hacemos Por Ti',
    h2: 'Una agencia que elimina la incertidumbre del proceso',
    lead: 'Viajar al extranjero por atención médica es abrumador si lo haces solo. Como tu agencia de coordinación, evaluamos a los proveedores, gestionamos la logística y permanecemos a tu lado — para que te concentres en tu salud.',
    cards: [
      { image: '/assets/why/aliados-verificados.jpg', alt: 'Médico dando la mano a una coordinadora dentro de una clínica', title: 'Aliados Verificados', body: 'Te conectamos solo con clínicas, médicos y laboratorios certificados en Cancún con los que ya hemos trabajado.' },
      { image: '/assets/why/concierge-bilingue.jpg', alt: 'Coordinadora bilingüe con auriculares atendiendo a un paciente', title: 'Concierge Bilingüe', body: 'Un coordinador que habla inglés te guía a ti y a los proveedores en cada paso.' },
      { image: '/assets/why/logistica-completa.jpg', alt: 'Chofer recibiendo a una viajera con equipaje en el Aeropuerto Internacional de Cancún', title: 'Logística Completa', body: 'Guía de vuelos, traslado del aeropuerto, hospedaje y transporte en Cancún — todo gestionado por nosotros.' },
      { icon: '🤝', title: 'Un Solo Contacto', body: 'Desde la primera pregunta hasta el seguimiento en casa, tratas con nosotros — no con una docena de desconocidos.' },
    ],
  },
  treatments: {
    eyebrow: 'Qué Coordinamos',
    h2: 'Atención a la que te ayudamos a acceder a través de nuestra red de aliados',
    lead: 'Estas son las áreas de atención que ofrecen las clínicas y médicos independientes con los que trabajamos en Cancún — cada una basada en nuestras cuatro terapias centrales: células madre, exosomas, fibroblastos e implantes de placenta. Cada plan inicia con una evaluación médica realizada por el proveedor, no por nosotros. Coordinamos el acceso, la logística y el acompañamiento.',
    cards: [
      { image: '/assets/treatments/articular-ortopedico.jpg', alt: 'Médico examinando la rodilla de un paciente durante una consulta', title: 'Articular y Ortopédico', body: 'Programas enfocados en articulaciones, tendones y movilidad musculoesquelética. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/lesiones-deportivas.jpg', alt: 'Tenista sujetándose el codo adolorido en la cancha', title: 'Lesiones Deportivas y Recuperación', body: 'Programas de recuperación para pacientes activos y atletas. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/soporte-inmune.jpg', alt: 'Mujer con las manos sobre el abdomen al aire libre', title: 'Bienestar y Soporte Inmune', body: 'Programas de bienestar que apoyan la salud y resiliencia inmune. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/antienvejecimiento.jpg', alt: 'Mujer con piel saludable y luminosa', title: 'Antienvejecimiento y Longevidad', body: 'Programas de bienestar orientados a la vitalidad y la longevidad. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/adulto-mayor.jpg', alt: 'Pareja de adultos mayores caminando juntos al atardecer', title: 'Salud y Bienestar del Adulto Mayor', body: 'Programas de bienestar adaptados a las necesidades de los adultos mayores. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/estetica-piel.jpg', alt: 'Mujer recibiendo un tratamiento estético facial', title: 'Estética y Piel', body: 'Piel, rejuvenecimiento y bienestar estético — encaja de forma natural con las aplicaciones de fibroblastos. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/protocolos-personalizados.jpg', alt: 'Médica revisando un plan personalizado con un paciente mayor', title: 'Protocolos Personalizados', body: 'Evaluaciones a medida para casos complejos o combinados. <span class="ph">[Editar descripción]</span>' },
    ],
    note: '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación y no brinda tratamiento ni consejo médico. Las terapias anteriores las ofrecen proveedores independientes y certificados. Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Los resultados individuales varían. Ni nosotros ni nuestros aliados garantizamos resultados ni curas; el proveedor discutirá contigo la evidencia científica actual durante tu evaluación.',
  },
  journey: {
    eyebrow: 'Cómo Funciona',
    h2: 'Su proceso como paciente, paso a paso',
    steps: [
      { title: 'Consulta Gratis', body: 'Comparte tu historial con nosotros. Lo canalizamos al proveedor aliado adecuado, que lo revisa y te explica opciones realistas.' },
      { title: 'Plan, Cotización e Itinerario', body: 'El proveedor envía un plan médico; nosotros armamos tu cotización transparente y tu itinerario de viaje.' },
      { title: 'Viaje y Atención en Cancún', body: 'Coordinamos vuelos, hospedaje y transporte. Recibes la atención en la clínica aliada; te acompañamos en todo momento.' },
      { title: 'Seguimiento en Casa', body: 'Ayudamos a coordinar el seguimiento remoto y los cuidados posteriores con el proveedor al volver a casa.' },
    ],
  },
  team: {
    eyebrow: 'Equipo y Aliados',
    h2: 'Tu equipo de coordinación — y los aliados con los que trabajamos',
    lead: 'Te acompañan nuestros coordinadores de pacientes. La atención médica la brindan las clínicas, médicos y laboratorios independientes y certificados de nuestra red en Cancún.',
    coordinatorsTitle: 'Nuestros Coordinadores de Pacientes',
    coordinators: [
      { photoPh: '📷 [coordinator-1.jpg]', name: '[Name]', role: '[Coordinador de Pacientes]', bio: '[Idiomas, años ayudando a pacientes internacionales, rol]' },
      { photoPh: '📷 [coordinator-2.jpg]', name: '[Name]', role: '[Logística y Viajes]', bio: '[Idiomas, experiencia, rol]' },
      { photoPh: '📷 [coordinator-3.jpg]', name: '[Name]', role: '[Fundador / Director]', bio: '[Trayectoria, por qué fundaste la agencia]' },
    ],
    partnersTitle: 'Nuestra Red de Aliados en Cancún',
    partnersLead:
      'Clínicas y laboratorios independientes certificados por COFEPRIS. Agrega a cada aliado solo con su permiso por escrito para mostrar su nombre y logo.',
    partners: [
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Especialidad · Cédula COFEPRIS #]' },
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Especialidad · Cédula COFEPRIS #]' },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Laboratorio de terapia celular · acreditación]' },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Laboratorio de terapia celular · acreditación]' },
    ],
  },
  testimonials: {
    eyebrow: 'Historias de Pacientes',
    h2: 'Pacientes reales, videos reales',
    lead: 'Explore historias por segmento de audiencia. Coloque sus archivos de video editados o enlaces en los espacios de abajo.',
    filters: [
      { key: 'all', label: 'Todas' },
      { key: 'usa', label: '🇺🇸 Pacientes de EE.UU.' },
      { key: 'canada', label: '🇨🇦 Pacientes de Canadá' },
      { key: 'ortho', label: 'Ortopédico y Articular' },
      { key: 'neuro', label: 'Neurológico' },
      { key: 'auto', label: 'Autoinmune' },
      { key: 'wellness', label: 'Bienestar y Antiedad' },
    ],
    cards: [
      { seg: 'usa ortho', tag: '🇺🇸 EE.UU. · Ortopédico', drop: '[embed: video-1.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { seg: 'usa neuro', tag: '🇺🇸 EE.UU. · Neurológico', drop: '[embed: video-2.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { seg: 'canada ortho', tag: '🇨🇦 Canadá · Ortopédico', drop: '[embed: video-3.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { seg: 'canada auto', tag: '🇨🇦 Canadá · Autoinmune', drop: '[embed: video-4.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { seg: 'usa wellness', tag: '🇺🇸 EE.UU. · Bienestar', drop: '[embed: video-5.mp4 / YouTube ID]', name: '[Patient first name, State]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
      { seg: 'canada neuro', tag: '🇨🇦 Canadá · Neurológico', drop: '[embed: video-6.mp4 / YouTube ID]', name: '[Patient first name, Province]', meta: '[Condición / programa]', summary: '[Resumen de una línea de su historia]' },
    ],
    note: '<strong>Aviso sobre testimonios:</strong> Los testimonios reflejan experiencias individuales y no son una promesa de resultados. Los pacientes mostrados dieron consentimiento por escrito para compartir su historia. Los resultados no son típicos y varían de persona a persona.',
  },
  faq: {
    eyebrow: 'Preguntas Frecuentes',
    h2: 'Las preguntas más frecuentes',
    items: [
      { q: '¿Está aprobado este tratamiento por la FDA o Health Canada?', a: 'Muchas terapias regenerativas no están aprobadas por la FDA ni Health Canada para enfermedades específicas y se consideran de investigación. Somos transparentes sobre el estatus regulatorio y de evidencia de cada programa durante su consulta. <span class="ph">[Personalizar.]</span>' },
      { q: '¿Ustedes son una clínica?', a: 'No. Kern Stem Care es una agencia de coordinación médica legalmente constituida en Cancún, México. Te guiamos y gestionamos tu viaje, hospedaje, citas y acompañamiento. La evaluación y el tratamiento médico los brindan clínicas y médicos independientes y certificados de nuestra red en Cancún.' },
      { q: '¿Cómo viajo a Cancún desde EE.UU. o Canadá?', a: 'El Aeropuerto Internacional de Cancún (CUN) tiene vuelos directos desde la mayoría de las ciudades de EE.UU. y Canadá. Ofrecemos guía de vuelos, traslado del aeropuerto y hospedaje cerca de la clínica aliada. <span class="ph">[Agregar tiempos.]</span>' },
      { q: '¿Cuánto cuesta y a quién le pago?', a: 'Recibes una cotización por escrito y transparente antes de comprometerte. Los honorarios médicos los fija y los cobra el proveedor; nuestra tarifa de coordinación y los costos de viaje se detallan por separado para que siempre sepas qué pagas. <span class="ph">[Explicar tu modelo de tarifa.]</span>' },
      { q: '¿Las clínicas y laboratorios están certificados?', a: 'Solo conectamos a los pacientes con clínicas, médicos y laboratorios certificados por la autoridad sanitaria de México (COFEPRIS). Podemos compartir las credenciales de cada aliado si lo solicitas. <span class="ph">[Describir tu proceso de evaluación.]</span>' },
      { q: '¿Qué apoyo recibo al volver a casa?', a: 'Ayudamos a coordinar el seguimiento remoto con el proveedor y permanecemos en contacto contigo. <span class="ph">[Describir tu proceso de seguimiento.]</span>' },
    ],
  },
  membership: {
    eyebrow: 'Membresía',
    h2: 'Hazte miembro de Kern Stem Care',
    lead: 'Elige cómo quieres tenernos a tu lado. La membresía cubre nuestros servicios de coordinación, concierge y seguimiento — el tratamiento médico siempre lo cotiza por separado el proveedor.',
    tiers: [
      {
        eyebrow: 'Comunidad',
        price: 'Free',
        desc: 'Para quienes exploran sus opciones.',
        features: ['Revisión de caso y consulta gratis', 'Boletín mensual de bienestar', 'Guías educativas y novedades'],
        cta: 'Unirme Gratis',
        ctaHref: '#newsletter',
      },
      {
        eyebrow: 'Concierge del Paciente',
        price: '$[XXX]',
        priceIsPh: true,
        priceSuffix: ' / viaje',
        desc: 'Coordinación completa para un viaje de tratamiento.',
        features: ['Todo lo de Comunidad', 'Coordinador bilingüe dedicado', 'Selección de proveedor y agenda de citas', 'Viaje, hospedaje y transporte gestionados', 'Apoyo presencial en Cancún'],
        cta: 'Comenzar',
        ctaHref: '#contact',
        featured: true,
        badge: 'MÁS POPULAR',
      },
      {
        eyebrow: 'Bienestar VIP',
        price: '$[XXX]',
        priceIsPh: true,
        priceSuffix: ' / año',
        desc: 'Para clientes recurrentes y de bienestar a largo plazo.',
        features: ['Todo lo de Concierge', 'Agenda y coordinación prioritaria', 'Coordinación de seguimiento continuo', 'Tarifas de miembro con servicios aliados <span class="ph">[si aplica]</span>'],
        cta: 'Hablar con Nosotros',
        ctaHref: '#contact',
      },
    ],
    newsletter: {
      title: 'Suscríbete a nuestro boletín gratis',
      body: 'Consejos de bienestar, historias de pacientes y novedades. Cancela cuando quieras.',
      phEmail: 'you@email.com',
      submit: 'Suscribirme',
    },
    note: '<strong>Nota:</strong> Las cuotas de membresía cubren únicamente los servicios de coordinación y concierge de Kern Stem Care. El tratamiento médico, las evaluaciones y los costos de cualquier terapia los fija y los cobra el proveedor independiente, y se cotizan por separado. La membresía no garantiza aceptación para tratamiento ni ningún resultado médico.',
  },
  contact: {
    eyebrow: 'Comenzar',
    h2: 'Solicite su evaluación gratuita, sin compromiso',
    info: [
      { icon: '📞', title: 'Llamada / WhatsApp', value: '[+1 toll-free number] · [WhatsApp]' },
      { icon: '✉️', title: 'Correo', value: '[patients@kernstemcare.com]' },
      { icon: '📍', title: 'Oficina de la Agencia', value: '[Street, Cancún, Mexico]' },
      { icon: '🕐', title: 'Horario', value: '[Lun–Sáb, 8am–8pm CST]' },
    ],
    form: {
      labelFirst: 'Nombre',
      labelLast: 'Apellido',
      labelEmail: 'Correo',
      labelPhone: 'Teléfono',
      labelCountry: 'País',
      countryOptions: ['United States', 'Canada', 'Mexico', 'Other'],
      labelArea: 'Área de interés',
      areaOptions: ['Joint & Orthopedic', 'Sports Injury & Recovery', 'Immune Wellness & Support', 'Anti-Aging & Longevity', 'Senior Health & Wellness', 'Aesthetic & Skin', 'Metabolic & Hormonal Support', 'Placenta Implant Therapy', 'Personalized / Not sure yet'],
      labelMessage: 'Cuéntenos su situación',
      submit: 'Solicitar Evaluación Gratis',
      fineprint: 'Respetamos su privacidad. Su información se usa solo para responder a su solicitud. Este formulario no brinda consejo médico ni garantiza tratamiento.',
    },
  },
  footer: {
    blurb:
      'Agencia de coordinación médica legalmente constituida en Cancún, que guía a pacientes de Estados Unidos y Canadá hacia clínicas, médicos y laboratorios independientes y certificados.',
    cols: [
      {
        title: 'Explorar',
        links: [
          { href: '#about', label: 'Nosotros' },
          { href: '#treatments', label: 'Qué Coordinamos' },
          { href: '#team', label: 'Equipo y Aliados' },
          { href: '#testimonials', label: 'Testimonios' },
        ],
      },
      {
        title: 'Pacientes',
        links: [
          { href: '#journey', label: 'Proceso' },
          { href: '#faq', label: 'Preguntas' },
          { href: '#contact', label: 'Consulta Gratis' },
        ],
      },
    ],
    contactCol: { title: 'Contacto', links: ['[+1 toll-free]', '[patients@kernstemcare.com]', '[Cancún, Mexico]'] },
    disclaimer:
      '<strong>Aviso importante:</strong> Kern Stem Care es una agencia de coordinación médica y de viajes. <strong>No somos una clínica, hospital ni proveedor médico</strong> y no brindamos tratamiento, diagnóstico ni consejo médico. Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados. La información de este sitio es solo para fines educativos generales. Muchas de las terapias que coordinamos no están aprobadas por la FDA de EE.UU. ni Health Canada y se consideran de investigación. No garantizamos resultados ni cura. Consulte siempre a un médico calificado antes de tomar decisiones médicas.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    rights: 'Todos los derechos reservados.',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  whatsappLabel: 'Escríbenos',
};

export const homeContent: Record<Lang, HomeContent> = { en, es };
