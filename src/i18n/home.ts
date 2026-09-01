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
  image?: string;
  video?: string;
  poster?: string;
  /** Crops in on the image (e.g. 1.3 = 130%) to show less of the surrounding
      background. Centered by default. */
  zoom?: number;
}
export interface Stat {
  num: string;
  label: string;
  isPh?: boolean;
}
export interface Step {
  title: string;
  body: string;
  image?: string;
}
export interface Coordinator {
  photoPh: string;
  name: string;
  role: string;
  bio: string;
  slug: string;
  /** Path under /public. When set, shown instead of the `photoPh` placeholder. */
  image?: string;
  /** Path under /public. When set, used as the detail-page hero background instead of `image`. */
  heroImage?: string;
  /** Override the detail page's <h1>/meta title when this entry represents a
      team/department (e.g. "Logistics & Transportation") rather than one
      named person — keeps the H1 and title tag aligned with what the page
      actually covers instead of defaulting to `name`. */
  pageTitle?: string;
  /** Override the detail page's intro paragraph + meta description alongside `pageTitle`. */
  pageLead?: string;
  /** Team/driver photos (with name + role caption) shown in their own section on this member's detail page. */
  teamPhotos?: { src: string; name: string; role?: string }[];
  /** Vehicles (each with its own name + photos) shown in their own section on this member's detail page. */
  vehicles?: { name: string; photos: string[] }[];
}
export interface Partner {
  icon: string;
  name: string;
  detail: string;
  slug: string;
  image?: string;
  photos?: string[];
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
  /** Page (optionally with #anchor) that explains this question in full. */
  href: string;
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
    /** Hero chips under the tagline; each links to its service page. */
    pills: { label: string; slug: 'stem-cells' | 'exosomes' | 'fibroblasts' | 'placenta' }[];
    ctaPrimary: string;
    ctaGhost: string;
    /** Promo card next to the hero copy — links to the price-estimate page. */
    card: {
      title: string;
      subtitle: string;
      bullets: string[];
      ctaLabel: string;
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
    pills: [
      { label: '🧬 Stem Cells', slug: 'stem-cells' },
      { label: '✨ Exosomes', slug: 'exosomes' },
      { label: '🧫 Fibroblasts', slug: 'fibroblasts' },
      { label: '🌱 Freeze-Dried Placenta', slug: 'placenta' },
    ],
    ctaPrimary: 'Get Your Price Estimate',
    ctaGhost: 'What We Coordinate',
    card: {
      title: 'Get Your Personalized Price Estimate',
      subtitle: 'Free, no-obligation — reviewed by a licensed physician.',
      bullets: ['Itemized: medical, travel & coordination', 'Reply within 24 hours', 'No payment or commitment required'],
      ctaLabel: 'Start My Estimate →',
      fineprint: 'This is an information request, not a medical guarantee or final quote.',
    },
  },
  roleBanner:
    'ℹ️ <strong>Kern Stem Care is a legally registered medical coordination agency based in Cancún, not a clinic.</strong> All medical care is provided by independent, licensed clinics, physicians, and laboratories in Cancún, Mexico. We coordinate and guide your journey.',
  showcase: {
    eyebrow: 'More Than Healthcare',
    h2: 'Every Moment of Your Care Matters',
    slides: [
      {
        emoji: '📷',
        ph: '[video-2.mp4 / YouTube ID]',
        caption: 'Pre-treatment evaluation',
        image: '/assets/showcase/ultrasonido-evaluacion.jpg',
        zoom: 1.35,
      },
      {
        emoji: '📷',
        ph: '[photo-lab-1.jpg]',
        caption: 'Partner cellular-therapy laboratory',
        image: '/assets/partners/nao-laboratorio.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-2.jpg]',
        caption: 'Patient during IV treatment',
        image: '/assets/showcase/kubi-iv.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-3.jpg]',
        caption: 'Dermapen facial treatment',
        image: '/assets/showcase/dermapen-treatment.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-4.jpg]',
        caption: 'Facial rejuvenation injection',
        image: '/assets/showcase/facial-injection.jpg',
      },
    ],
    ctaBook: '📅 Contact Us & Book Your Appointment',
  },
  trust: [
    { num: '4', label: 'Partner clinics & physicians in Cancún' },
    { num: '3', label: 'Partner cellular-therapy labs' },
    { num: '🌎', label: 'Patients worldwide — including the U.S. & Canada' },
  ],
  therapies: {
    eyebrow: 'our treatments',
    h2: 'Our Regenerative Therapies. Care Designed Around You.',
    lead: 'Regenerative therapies use specialized cells — and the molecules they release — to support the body\'s own repair processes. We vet the independent, government-licensed (COFEPRIS) clinics and laboratories in Cancún that deliver them, arrange the logistics, and stay with you from the first call through your follow-up at home.',
    cards: [
      {
        image: '/assets/services/stem-cells.webp',
        alt: 'Microscopic render of stem cells',
        title: 'Stem Cells',
        slug: 'stem-cells',
        accent: 'blue',
        body: 'Cells that renew themselves and develop into other cell types. The most extensively studied therapy we coordinate — researched for tissue repair and inflammation.',
      },
      {
        image: '/assets/services/exosomes.webp',
        alt: 'Microscopic render of exosome vesicles',
        title: 'Exosomes',
        slug: 'exosomes',
        accent: 'teal',
        body: 'Microscopic vesicles that carry signaling molecules between cells. A cell-free approach — no living cells — and a newer field, with evidence still developing.',
      },
      {
        image: '/assets/services/fibroblasts.webp',
        alt: 'Microscopic render of fibroblast cells and collagen fibers',
        title: 'Fibroblasts',
        slug: 'fibroblasts',
        accent: 'gold',
        body: 'Cells that produce collagen and build connective tissue. The most narrowly focused: studied mainly for skin, wound, and aesthetic applications rather than systemic conditions.',
      },
      {
        image: '/assets/services/placenta.webp',
        alt: 'Vial of freeze-dried (lyophilized) human placenta',
        title: 'Freeze-Dried Placenta',
        slug: 'placenta',
        accent: 'green',
        body: 'Lyophilized placental tissue, rich in growth factors, given as subdermal injections. The least established of the four — not approved for any specific condition.',
      },
    ],
    note: '<strong>Note:</strong> These therapies are provided by independent, licensed partner laboratories and clinics. Many are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Your treating physician confirms the source, dose, and route of administration — and what the current evidence does and does not show — during your medical evaluation. Descriptions here are educational and are not a promise of any result.',
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
        image: '/assets/why/one-point-of-contact.jpg',
        alt: 'Smiling patient coordinator in scrubs with arms crossed',
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
      { image: '/assets/treatments/articular-ortopedico.jpg', alt: 'Physician examining a patient\'s knee during a consultation', title: 'Joint & Orthopedic', slug: 'stem-cells', body: 'Programs focused on joints, tendons, and musculoskeletal comfort and mobility. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/lesiones-deportivas.jpg', alt: 'Tennis player holding a sore elbow on the court', title: 'Sports Injury & Recovery', slug: 'stem-cells', body: 'Recovery-focused programs for active patients and athletes. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/soporte-inmune.jpg', alt: 'Woman resting her hands over her abdomen outdoors', title: 'Immune Wellness & Support', slug: 'placenta', body: 'Wellness programs supporting immune health and resilience. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/antienvejecimiento.jpg', alt: 'Woman with healthy, luminous skin', title: 'Anti-Aging & Longevity', slug: 'stem-cells', body: 'Vitality and longevity-oriented wellness programs. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/adulto-mayor.jpg', alt: 'Older couple hiking together at sunset', title: 'Senior Health & Wellness', slug: 'stem-cells', body: 'Wellness programs tailored to the needs of older adults. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/estetica-piel.jpg', alt: 'Woman receiving a facial aesthetic treatment', title: 'Aesthetic & Skin', slug: 'fibroblasts', body: 'Skin, rejuvenation, and aesthetic wellness — a natural fit for fibroblast applications. <span class="ph">[Edit description]</span>' },
      { image: '/assets/treatments/protocolos-personalizados.jpg', alt: 'Physician reviewing a personalized plan with an older patient', title: 'Personalized Protocols', body: 'Custom evaluations for complex or combined cases. <span class="ph">[Edit description]</span>' },
    ],
    note: '<strong>Important:</strong> Kern Stem Care is a coordination agency and does not provide medical treatment or advice. The therapies above are offered by independent licensed providers. Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. Individual results vary. Neither we nor our partners guarantee outcomes or cures; the provider will discuss the current scientific evidence with you during your evaluation.',
  },
  journey: {
    eyebrow: 'How It Works',
    h2: 'Your patient journey, step by step',
    steps: [
      { title: 'Free Consultation', body: 'Share your history with us. We match your case to the right partner provider, who reviews it and explains realistic options.', image: '/assets/journey/pre-consulta.jpg' },
      { title: 'Plan, Quote & Itinerary', body: 'The provider sends a medical plan; we build your transparent quote and travel itinerary around it.', image: '/assets/journey/consulta.jpg' },
      { title: 'Travel & Care in Cancún', body: 'We coordinate flights, lodging, and transport. You receive care at our partner clinic; we stay with you throughout.', image: '/assets/journey/welcome.jpg' },
      { title: 'Follow-Up at Home', body: 'We help coordinate remote check-ins and aftercare with the provider once you return home.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
  },
  team: {
    eyebrow: 'Team & Partners',
    h2: 'Your coordination team — and the partners we work with',
    lead: 'You are guided by our patient coordinators. The medical care is delivered by the independent, licensed clinics, physicians, and laboratories in our Cancún network.',
    coordinatorsTitle: 'Our Patient Coordinators',
    coordinators: [
      { photoPh: '📷 [coordinator-1.jpg]', name: '[Name]', role: '[Patient Coordinator]', bio: '[Languages, years helping international patients, role]', slug: 'patient-coordinator' },
      {
        photoPh: '📷 [coordinator-2.jpg]',
        name: 'Raquel Razo',
        role: 'Logistics',
        bio: 'Spanish, English · 12 years of experience · Driver',
        slug: 'logistics-travel',
        image: '/assets/team/driver-1.jpg',
        heroImage: '/assets/team/vehicles/pasat-3.jpg',
        pageTitle: 'Logistics & Transportation',
        pageLead: "Airport pickups, ground transport, and every travel detail in Cancún — coordinated by our dedicated, bilingual logistics team.",
        teamPhotos: [
          { src: '/assets/team/driver-1.jpg', name: 'Raquel Razo', role: 'Spanish, English · 12 years of experience · Driver' },
          { src: '/assets/team/driver-2.jpg', name: 'Anastacio Rodriguez', role: 'Spanish, English · 12 years of experience · Driver' },
        ],
        vehicles: [
          {
            name: 'Vehicle 1',
            photos: [
              '/assets/team/vehicles/pasat-1.jpg',
              '/assets/team/vehicles/pasat-2.jpg',
              '/assets/team/vehicles/pasat-3.jpg',
              '/assets/team/vehicles/pasat-4.jpg',
            ],
          },
          {
            name: 'Vehicle 2',
            photos: ['/assets/team/vehicles/van-1.jpg', '/assets/team/vehicles/van-2.jpg', '/assets/team/vehicles/van-3.jpg'],
          },
        ],
      },
      { photoPh: '📷 [coordinator-3.jpg]', name: '[Name]', role: '[Founder / Director]', bio: '[Background, why you started the agency]', slug: 'founder-director' },
    ],
    partnersTitle: 'Our Cancún Partner Network',
    partnersLead:
      'More than simply creating partnerships, we continuously select, evaluate, and strengthen our network of leading specialists, clinics, and cutting-edge medical protocols, always seeking innovation and excellence for our patients.',
    partners: [
      {
        icon: '🏥',
        name: '[Partner Clinic]',
        detail: '[Specialty · Government (COFEPRIS) license #]',
        slug: 'partner-clinic-1',
        image: '/assets/partners/luigi/luigi-1.jpg',
        photos: [
          '/assets/partners/luigi/luigi-1.jpg',
          '/assets/partners/luigi/luigi-2.jpg',
          '/assets/partners/luigi/luigi-3.jpg',
          '/assets/partners/luigi/luigi-4.jpg',
        ],
      },
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Specialty · Government (COFEPRIS) license #]', slug: 'partner-clinic-2', image: '/assets/partners/clinic-2/clinic-2-1.jpg', photos: ['/assets/partners/clinic-2/clinic-2-1.jpg', '/assets/partners/clinic-2/clinic-2-2.jpg'] },
      {
        icon: '🔬',
        name: '[Partner Laboratory]',
        detail: '[Cellular therapy lab · accreditation]',
        slug: 'partner-lab-1',
        image: '/assets/partners/nao-laboratorio.jpg',
        photos: [
          '/assets/partners/nao/nao-1.jpg',
          '/assets/partners/nao/nao-2.jpg',
          '/assets/partners/nao/nao-3.jpg',
          '/assets/partners/nao/nao-4.jpg',
          '/assets/partners/nao/nao-5.jpg',
          '/assets/partners/nao/nao-6.jpg',
          '/assets/partners/nao/nao-7.jpg',
          '/assets/partners/nao/nao-8.jpg',
          '/assets/partners/nao/nao-9.jpg',
        ],
      },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Cellular therapy lab · accreditation]', slug: 'partner-lab-2' },
    ],
  },
  testimonials: {
    eyebrow: 'Patient Stories',
    h2: 'Real Stories. Real Hope. Real Change.',
    lead: 'Every journey is different. Every story matters. Discover the experiences of patients who chose a different path with <strong>Kern Stem Care</strong>.<br><br><strong>Watch their stories. Feel the difference.</strong>',
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
      { q: 'Can stem cells really help with my back pain?', a: 'Mesenchymal stem cells can help patients with musculoskeletal injuries and conditions. That is why a medical evaluation is essential — it personalizes the treatment to your specific case.', href: '/en/services/stem-cells' },
      { q: 'What are the real risks of stem cell treatments?', a: 'Like any medical procedure, stem cell treatments carry real risks — most commonly temporary pain, swelling, or infection at the treatment site. The more serious risks in this field come from unregulated providers: unverified cell sources, poor lab practices, or clinics operating without licenses. That is exactly what our vetting exists to reduce — we only coordinate with COFEPRIS-licensed clinics and certified labs — and the treating physician reviews the specific risks of your case with you before anything is decided. No legitimate provider will ever tell you a procedure is risk-free.', href: '/en/about#our-network' },
      { q: 'How many days do I need to stay in Cancún for stem cell treatment with Kern Stem Care?', a: 'A typical stay is three days: day one you arrive and settle in, day two is your treatment at the clinic, and day three you fly home. We coordinate your airport pickup, lodging, and appointments so the whole stay runs on one clear itinerary — and if your medical plan calls for anything different, you will know before you book your flights.', href: '/en/process' },
      { q: 'Is it safe to travel to Cancún for this?', a: "Cancún is Mexico's leading international tourist destination, with direct flights of 2 to 4 hours from major U.S. and Canadian cities. We coordinate your airport pickup, lodging, and appointments, and your bilingual coordinator stays with you throughout your stay.", href: '/en/process#travel-logistics' },
      { q: 'Why is stem cell therapy legal in Mexico but not in the United States?', a: 'It is legal in both — under different frameworks. In Mexico, COFEPRIS — the federal health authority — allows access to cellular therapies at licensed clinics and laboratories, while in the U.S. the FDA limits them to clinical trials. It is not a legal loophole: it is a different regulatory framework, and that is why we only coordinate with licensed providers.', href: '/en/blog/is-stem-cell-therapy-legal-in-mexico' },
      { q: "Are Kern Stem Care's partner clinics licensed?", a: "Yes. Our partner clinics hold the licenses required by Mexico's health authority (COFEPRIS), and Kern Stem Care continuously verifies — through independent, external checks — that every license remains current and every requirement is met, so all of our patients receive treatment safely, in legitimate facilities.", href: '/en/about#our-network' },
      { q: 'How do I know where the cells I would receive come from?', a: 'Every legitimate cell batch comes with a Certificate of Analysis (COA) from the laboratory, documenting the tissue source, cell count, viability, and sterility testing. We only work with licensed laboratories that issue it — and you can ask to see it before deciding.', href: '/en/services/stem-cells' },
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
      { icon: '📞', title: 'Call / WhatsApp', value: '+52 998 767 8979' },
      { icon: '✉️', title: 'Email', value: 'kernstemcare@gmail.com' },
      { icon: '📍', title: 'Agency Office', value: 'Retorno Viento, SM 4, Núm. 10, Benito Juárez, Cancún, Q.R., México' },
      { icon: '🕐', title: 'Patient Line Hours', value: 'Mon–Sat, 9am–6pm CST' },
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
      'Legally registered medical coordination agency based in Cancún, guiding patients from around the world — including the United States and Canada — to independent, licensed clinics, physicians, and laboratories.',
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
    contactCol: { title: 'Contact', links: ['+52 998 767 8979', 'kernstemcare@gmail.com', 'Cancún, Q.R., México'] },
    disclaimer:
      '<strong>Important disclaimer:</strong> Kern Stem Care is a medical coordination and travel agency. We are <strong>not a clinic, hospital, or medical provider</strong> and we do not provide medical treatment, diagnosis, or advice. All medical care is delivered by independent, licensed clinics, physicians, and laboratories. The information on this website is for general educational purposes only. Many therapies coordinated are not approved by the U.S. FDA or Health Canada and are considered investigational. We make no guarantee of results or cure. Always consult a qualified physician before making medical decisions.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: 'All rights reserved.',
    legalEntityPh: 'Kern Corsa Medical Group, S.A. de C.V.',
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
    pills: [
      { label: '🧬 Células Madre', slug: 'stem-cells' },
      { label: '✨ Exosomas', slug: 'exosomes' },
      { label: '🧫 Fibroblastos', slug: 'fibroblasts' },
      { label: '🌱 Placenta Liofilizada', slug: 'placenta' },
    ],
    ctaPrimary: 'Obtén tu Cotización',
    ctaGhost: 'Qué Coordinamos',
    card: {
      title: 'Obtén tu Cotización Personalizada',
      subtitle: 'Gratis, sin compromiso — revisada por un médico certificado.',
      bullets: ['Desglosada: médico, viaje y coordinación', 'Respuesta en menos de 24 horas', 'Sin pago ni compromiso requerido'],
      ctaLabel: 'Comenzar mi Cotización →',
      fineprint: 'Esto es una solicitud de información, no una garantía médica ni cotización final.',
    },
  },
  roleBanner:
    'ℹ️ <strong>Kern Stem Care es una agencia de coordinación médica legalmente constituida en Cancún, no una clínica.</strong> Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados en Cancún, México. Nosotros coordinamos y guiamos tu proceso.',
  showcase: {
    eyebrow: 'Más Que Atención Médica',
    h2: 'Cada Momento de Tu Atención Importa',
    slides: [
      {
        emoji: '📷',
        ph: '[video-2.mp4 / YouTube ID]',
        caption: 'Evaluación previa al tratamiento',
        image: '/assets/showcase/ultrasonido-evaluacion.jpg',
        zoom: 1.35,
      },
      {
        emoji: '📷',
        ph: '[photo-lab-1.jpg]',
        caption: 'Laboratorio de terapia celular aliado',
        image: '/assets/partners/nao-laboratorio.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-2.jpg]',
        caption: 'Paciente durante tratamiento intravenoso',
        image: '/assets/showcase/kubi-iv.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-3.jpg]',
        caption: 'Tratamiento facial con dermapen',
        image: '/assets/showcase/dermapen-treatment.jpg',
      },
      {
        emoji: '📷',
        ph: '[photo-treatment-4.jpg]',
        caption: 'Inyección de rejuvenecimiento facial',
        image: '/assets/showcase/facial-injection.jpg',
      },
    ],
    ctaBook: '📅 Contáctanos y Agenda Tu Cita',
  },
  trust: [
    { num: '4', label: 'Clínicas y médicos aliados en Cancún' },
    { num: '3', label: 'Laboratorios de terapia celular aliados' },
    { num: '🌎', label: 'Pacientes de todo el mundo — incluyendo EE.UU. y Canadá' },
  ],
  therapies: {
    eyebrow: 'nuestros tratamientos',
    h2: 'Nuestras Terapias Regenerativas. Atención Diseñada Para Ti.',
    lead: 'Las terapias regenerativas usan células especializadas — y las moléculas que estas liberan — para apoyar los procesos de reparación del propio cuerpo. Verificamos las clínicas y laboratorios independientes con licencia gubernamental (COFEPRIS) en Cancún que las aplican, coordinamos la logística y te acompañamos desde la primera llamada hasta tu seguimiento en casa.',
    cards: [
      {
        image: '/assets/services/stem-cells.webp',
        alt: 'Representación microscópica de células madre',
        title: 'Células Madre',
        slug: 'stem-cells',
        accent: 'blue',
        body: 'Células que se renuevan y se transforman en otros tipos celulares. La terapia más estudiada de las que coordinamos — investigada en reparación de tejidos e inflamación.',
      },
      {
        image: '/assets/services/exosomes.webp',
        alt: 'Representación microscópica de vesículas de exosomas',
        title: 'Exosomas',
        slug: 'exosomes',
        accent: 'teal',
        body: 'Vesículas microscópicas que transportan moléculas de señalización entre células. Un enfoque libre de células — sin células vivas — y un campo más reciente, con evidencia aún en desarrollo.',
      },
      {
        image: '/assets/services/fibroblasts.webp',
        alt: 'Representación microscópica de fibroblastos y fibras de colágeno',
        title: 'Fibroblastos',
        slug: 'fibroblasts',
        accent: 'gold',
        body: 'Células que producen colágeno y construyen el tejido conectivo. La más acotada: se estudia sobre todo en piel, cicatrización y estética, más que en condiciones sistémicas.',
      },
      {
        image: '/assets/services/placenta.webp',
        alt: 'Frasco de placenta humana liofilizada',
        title: 'Placenta Liofilizada',
        slug: 'placenta',
        accent: 'green',
        body: 'Tejido placentario liofilizado, rico en factores de crecimiento, aplicado en inyecciones subdérmicas. La menos consolidada de las cuatro — no está aprobada para ninguna condición específica.',
      },
    ],
    note: '<strong>Nota:</strong> Estas terapias las brindan laboratorios y clínicas aliadas independientes y certificadas. Muchas no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Tu médico tratante confirma el origen, la dosis y la vía de administración — y qué muestra y qué no muestra la evidencia actual — durante tu evaluación médica. Las descripciones aquí son educativas y no son una promesa de ningún resultado.',
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
      { image: '/assets/why/one-point-of-contact.jpg', alt: 'Coordinadora sonriente con bata clínica y brazos cruzados', title: 'Un Solo Contacto', body: 'Desde la primera pregunta hasta el seguimiento en casa, tratas con nosotros — no con una docena de desconocidos.' },
    ],
  },
  treatments: {
    eyebrow: 'Qué Coordinamos',
    h2: 'Atención a la que te ayudamos a acceder a través de nuestra red de aliados',
    lead: 'Estas son las áreas de atención que ofrecen las clínicas y médicos independientes con los que trabajamos en Cancún — cada una basada en nuestras cuatro terapias centrales: células madre, exosomas, fibroblastos e implantes de placenta. Cada plan inicia con una evaluación médica realizada por el proveedor, no por nosotros. Coordinamos el acceso, la logística y el acompañamiento.',
    cards: [
      { image: '/assets/treatments/articular-ortopedico.jpg', alt: 'Médico examinando la rodilla de un paciente durante una consulta', title: 'Articular y Ortopédico', slug: 'stem-cells', body: 'Programas enfocados en articulaciones, tendones y movilidad musculoesquelética. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/lesiones-deportivas.jpg', alt: 'Tenista sujetándose el codo adolorido en la cancha', title: 'Lesiones Deportivas y Recuperación', slug: 'stem-cells', body: 'Programas de recuperación para pacientes activos y atletas. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/soporte-inmune.jpg', alt: 'Mujer con las manos sobre el abdomen al aire libre', title: 'Bienestar y Soporte Inmune', slug: 'placenta', body: 'Programas de bienestar que apoyan la salud y resiliencia inmune. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/antienvejecimiento.jpg', alt: 'Mujer con piel saludable y luminosa', title: 'Antienvejecimiento y Longevidad', slug: 'stem-cells', body: 'Programas de bienestar orientados a la vitalidad y la longevidad. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/adulto-mayor.jpg', alt: 'Pareja de adultos mayores caminando juntos al atardecer', title: 'Salud y Bienestar del Adulto Mayor', slug: 'stem-cells', body: 'Programas de bienestar adaptados a las necesidades de los adultos mayores. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/estetica-piel.jpg', alt: 'Mujer recibiendo un tratamiento estético facial', title: 'Estética y Piel', slug: 'fibroblasts', body: 'Piel, rejuvenecimiento y bienestar estético — encaja de forma natural con las aplicaciones de fibroblastos. <span class="ph">[Editar descripción]</span>' },
      { image: '/assets/treatments/protocolos-personalizados.jpg', alt: 'Médica revisando un plan personalizado con un paciente mayor', title: 'Protocolos Personalizados', body: 'Evaluaciones a medida para casos complejos o combinados. <span class="ph">[Editar descripción]</span>' },
    ],
    note: '<strong>Importante:</strong> Kern Stem Care es una agencia de coordinación y no brinda tratamiento ni consejo médico. Las terapias anteriores las ofrecen proveedores independientes y certificados. Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni Health Canada para enfermedades específicas y se consideran de investigación. Los resultados individuales varían. Ni nosotros ni nuestros aliados garantizamos resultados ni curas; el proveedor discutirá contigo la evidencia científica actual durante tu evaluación.',
  },
  journey: {
    eyebrow: 'Cómo Funciona',
    h2: 'Su proceso como paciente, paso a paso',
    steps: [
      { title: 'Consulta Gratis', body: 'Comparte tu historial con nosotros. Lo canalizamos al proveedor aliado adecuado, que lo revisa y te explica opciones realistas.', image: '/assets/journey/pre-consulta.jpg' },
      { title: 'Plan, Cotización e Itinerario', body: 'El proveedor envía un plan médico; nosotros armamos tu cotización transparente y tu itinerario de viaje.', image: '/assets/journey/consulta.jpg' },
      { title: 'Viaje y Atención en Cancún', body: 'Coordinamos vuelos, hospedaje y transporte. Recibes la atención en la clínica aliada; te acompañamos en todo momento.', image: '/assets/journey/welcome.jpg' },
      { title: 'Seguimiento en Casa', body: 'Ayudamos a coordinar el seguimiento remoto y los cuidados posteriores con el proveedor al volver a casa.', image: '/assets/journey/post-tratamiento.jpg' },
    ],
  },
  team: {
    eyebrow: 'Equipo y Aliados',
    h2: 'Tu equipo de coordinación — y los aliados con los que trabajamos',
    lead: 'Te acompañan nuestros coordinadores de pacientes. La atención médica la brindan las clínicas, médicos y laboratorios independientes y certificados de nuestra red en Cancún.',
    coordinatorsTitle: 'Nuestros Coordinadores de Pacientes',
    coordinators: [
      { photoPh: '📷 [coordinator-1.jpg]', name: '[Name]', role: '[Coordinador de Pacientes]', bio: '[Idiomas, años ayudando a pacientes internacionales, rol]', slug: 'patient-coordinator' },
      {
        photoPh: '📷 [coordinator-2.jpg]',
        name: 'Raquel Razo',
        role: 'Logística',
        bio: 'Español, inglés · 12 años de experiencia · Chofer',
        slug: 'logistics-travel',
        image: '/assets/team/driver-1.jpg',
        heroImage: '/assets/team/vehicles/pasat-3.jpg',
        pageTitle: 'Logística y Transporte',
        pageLead: 'Traslados al aeropuerto, transporte terrestre y cada detalle de viaje en Cancún — coordinados por nuestro equipo bilingüe de logística.',
        teamPhotos: [
          { src: '/assets/team/driver-1.jpg', name: 'Raquel Razo', role: 'Español, inglés · 12 años de experiencia · Chofer' },
          { src: '/assets/team/driver-2.jpg', name: 'Anastacio Rodriguez', role: 'Español, inglés · 12 años de experiencia · Chofer' },
        ],
        vehicles: [
          {
            name: 'Vehículo 1',
            photos: [
              '/assets/team/vehicles/pasat-1.jpg',
              '/assets/team/vehicles/pasat-2.jpg',
              '/assets/team/vehicles/pasat-3.jpg',
              '/assets/team/vehicles/pasat-4.jpg',
            ],
          },
          {
            name: 'Vehículo 2',
            photos: ['/assets/team/vehicles/van-1.jpg', '/assets/team/vehicles/van-2.jpg', '/assets/team/vehicles/van-3.jpg'],
          },
        ],
      },
      { photoPh: '📷 [coordinator-3.jpg]', name: '[Name]', role: '[Fundador / Director]', bio: '[Trayectoria, por qué fundaste la agencia]', slug: 'founder-director' },
    ],
    partnersTitle: 'Nuestra Red de Aliados en Cancún',
    partnersLead:
      'Más que simplemente crear alianzas, seleccionamos, evaluamos y fortalecemos continuamente nuestra red de especialistas líderes, clínicas y protocolos médicos de vanguardia, siempre buscando innovación y excelencia para nuestros pacientes.',
    partners: [
      {
        icon: '🏥',
        name: '[Partner Clinic]',
        detail: '[Especialidad · Cédula gubernamental (COFEPRIS) #]',
        slug: 'partner-clinic-1',
        image: '/assets/partners/luigi/luigi-1.jpg',
        photos: [
          '/assets/partners/luigi/luigi-1.jpg',
          '/assets/partners/luigi/luigi-2.jpg',
          '/assets/partners/luigi/luigi-3.jpg',
          '/assets/partners/luigi/luigi-4.jpg',
        ],
      },
      { icon: '🏥', name: '[Partner Clinic]', detail: '[Especialidad · Cédula gubernamental (COFEPRIS) #]', slug: 'partner-clinic-2', image: '/assets/partners/clinic-2/clinic-2-1.jpg', photos: ['/assets/partners/clinic-2/clinic-2-1.jpg', '/assets/partners/clinic-2/clinic-2-2.jpg'] },
      {
        icon: '🔬',
        name: '[Partner Laboratory]',
        detail: '[Laboratorio de terapia celular · acreditación]',
        slug: 'partner-lab-1',
        image: '/assets/partners/nao-laboratorio.jpg',
        photos: [
          '/assets/partners/nao/nao-1.jpg',
          '/assets/partners/nao/nao-2.jpg',
          '/assets/partners/nao/nao-3.jpg',
          '/assets/partners/nao/nao-4.jpg',
          '/assets/partners/nao/nao-5.jpg',
          '/assets/partners/nao/nao-6.jpg',
          '/assets/partners/nao/nao-7.jpg',
          '/assets/partners/nao/nao-8.jpg',
          '/assets/partners/nao/nao-9.jpg',
        ],
      },
      { icon: '🔬', name: '[Partner Laboratory]', detail: '[Laboratorio de terapia celular · acreditación]', slug: 'partner-lab-2' },
    ],
  },
  testimonials: {
    eyebrow: 'Historias de Pacientes',
    h2: 'Historias reales. Esperanza real. Cambio real.',
    lead: 'Cada camino es diferente. Cada historia importa. Descubre las experiencias de pacientes que eligieron un camino distinto con <strong>Kern Stem Care</strong>.<br><br><strong>Mira sus historias. Siente la diferencia.</strong>',
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
      { q: '¿Las células madre realmente pueden ayudar con mi dolor de espalda?', a: 'Las células madre mesenquimales pueden ayudar a pacientes con lesiones o condiciones musculoesqueléticas. Para ello es importante una evaluación que personalice el tratamiento a tu caso específico.', href: '/es/services/stem-cells' },
      { q: '¿Cuáles son los riesgos reales de los tratamientos con células madre?', a: 'Como todo procedimiento médico, los tratamientos con células madre tienen riesgos reales — los más comunes son dolor temporal, inflamación o infección en la zona tratada. Los riesgos más serios de este campo vienen de proveedores no regulados: fuentes celulares sin verificar, malas prácticas de laboratorio o clínicas sin licencia. Para reducir exactamente eso existe nuestro proceso de verificación — solo coordinamos con clínicas con licencia COFEPRIS y laboratorios certificados — y el médico tratante revisa contigo los riesgos específicos de tu caso antes de decidir nada. Ningún proveedor legítimo te dirá que un procedimiento está libre de riesgos.', href: '/es/about#nuestra-red' },
      { q: '¿Cuántos días de estancia se necesitan para la aplicación de células madre en Cancún con Kern Stem Care?', a: 'Una estancia típica es de tres días: el día uno llegas y te instalas, el día dos es tu tratamiento en la clínica, y el día tres vuelas de regreso a casa. Coordinamos tu traslado del aeropuerto, hospedaje y citas para que toda la estancia corra con un solo itinerario claro — y si tu plan médico requiere algo distinto, lo sabrás antes de comprar tus vuelos.', href: '/es/process' },
      { q: '¿Es seguro viajar a Cancún para esto?', a: 'Cancún es el principal destino turístico internacional de México, con vuelos directos de 2 a 4 horas desde las principales ciudades de EE.UU. y Canadá. Coordinamos traslado del aeropuerto, hospedaje y citas, y tu coordinador bilingüe te acompaña durante toda la estancia.', href: '/es/process#viaje-y-logistica' },
      { q: '¿Por qué la terapia con células madre es legal en México y no en Estados Unidos?', a: 'Sí es legal en ambos marcos, pero distinto: en México, COFEPRIS —la autoridad sanitaria federal— permite el acceso a terapias celulares en clínicas y laboratorios con licencia, mientras que en EE.UU. la FDA las limita a ensayos clínicos. No es un vacío legal: es un marco regulatorio diferente, y por eso solo coordinamos con establecimientos licenciados.', href: '/es/blog/es-legal-la-terapia-con-celulas-madre-en-mexico' },
      { q: '¿Las clínicas socias de Kern Stem Care cuentan con licencias?', a: 'Sí. Nuestras clínicas socias cuentan con las licencias que exige la autoridad sanitaria de México (COFEPRIS), y Kern Stem Care evalúa constantemente, de forma externa e independiente, su vigencia y el cumplimiento de cada requerimiento — con la finalidad de que todos nuestros pacientes reciban su tratamiento de manera segura, en instalaciones legítimas.', href: '/es/about#nuestra-red' },
      { q: '¿Cómo sé de dónde vienen las células que me aplicarían?', a: 'Cada lote legítimo viene con un certificado de análisis (COA) del laboratorio, que documenta el origen del tejido, el conteo celular, la viabilidad y las pruebas de esterilidad. Trabajamos solo con laboratorios licenciados que lo emiten, y puedes pedirlo antes de decidir.', href: '/es/services/stem-cells' },
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
      { icon: '📞', title: 'Llamada / WhatsApp', value: '+52 998 767 8979' },
      { icon: '✉️', title: 'Correo', value: 'kernstemcare@gmail.com' },
      { icon: '📍', title: 'Oficina de la Agencia', value: 'Retorno Viento, SM 4, Núm. 10, Benito Juárez, Cancún, Q.R., México' },
      { icon: '🕐', title: 'Horario', value: 'Lun–Sáb, 9am–6pm CST' },
    ],
    form: {
      labelFirst: 'Nombre',
      labelLast: 'Apellido',
      labelEmail: 'Correo',
      labelPhone: 'Teléfono',
      labelCountry: 'País',
      countryOptions: ['United States', 'Canada', 'Mexico', 'Other'],
      labelArea: 'Área de interés',
      areaOptions: ['Articular y Ortopédico', 'Lesiones Deportivas y Recuperación', 'Bienestar y Soporte Inmune', 'Antienvejecimiento y Longevidad', 'Salud y Bienestar en Adultos Mayores', 'Estética y Piel', 'Soporte Metabólico y Hormonal', 'Terapia de Implante de Placenta', 'Personalizado / Aún no estoy seguro'],
      labelMessage: 'Cuéntenos su situación',
      submit: 'Solicitar Evaluación Gratis',
      fineprint: 'Respetamos su privacidad. Su información se usa solo para responder a su solicitud. Este formulario no brinda consejo médico ni garantiza tratamiento.',
    },
  },
  footer: {
    blurb:
      'Agencia de coordinación médica legalmente constituida en Cancún, que guía a pacientes de todo el mundo — incluyendo Estados Unidos y Canadá — hacia clínicas, médicos y laboratoriosindependientes y certificados.',
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
    contactCol: { title: 'Contacto', links: ['+52 998 767 8979', 'kernstemcare@gmail.com', 'Cancún, Q.R., México'] },
    disclaimer:
      '<strong>Aviso importante:</strong> Kern Stem Care es una agencia de coordinación médica y de viajes. <strong>No somos una clínica, hospital ni proveedor médico</strong> y no brindamos tratamiento, diagnóstico ni consejo médico. Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados. La información de este sitio es solo para fines educativos generales. Muchas de las terapias que coordinamos no están aprobadas por la FDA de EE.UU. ni Health Canada y se consideran de investigación. No garantizamos resultados ni cura. Consulte siempre a un médico calificado antes de tomar decisiones médicas.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    rights: 'Todos los derechos reservados.',
    legalEntityPh: 'Kern Corsa Medical Group, S.A. de C.V.',
  },
  whatsappLabel: 'Escríbenos',
};

export const homeContent: Record<Lang, HomeContent> = { en, es };
