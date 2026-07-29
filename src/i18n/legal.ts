import type { Lang } from './ui';

/**
 * Privacy Policy, Terms & Conditions and Medical Disclaimer content, per language.
 * These are TEMPLATES / SCAFFOLDS — have a qualified attorney review and replace the
 * text for your jurisdiction (MX/US/CA) before publishing. [bracketed] text and the
 * "[Paste your attorney-reviewed text here.]" markers are where your final copy goes.
 */

export interface LegalSection {
  h2: string;
  body: string; // may contain inline HTML (<span class="ph">, <strong>)
}

export interface LegalDoc {
  slug: 'privacy' | 'terms' | 'medical-disclaimer';
  metaTitle: string;
  h1: string;
  updatedLabel: string;
  templateNoticeLabel: string;
  templateNotice: string;
  intro: string;
  medDisclaimer?: string; // terms only
  sections: LegalSection[];
  backHome: string;
  otherLabel: string;
  rights: string;
  legalEntityPh: string;
}

type LegalSet = { privacy: LegalDoc; terms: LegalDoc; medical: LegalDoc };

const en: LegalSet = {
  privacy: {
    slug: 'privacy',
    metaTitle: 'Privacy Policy | Kern Stem Care',
    h1: 'Privacy Policy',
    updatedLabel: 'Last updated:',
    templateNoticeLabel: 'Template notice:',
    templateNotice:
      ' This is a starting template. Have a qualified attorney review it for your jurisdiction (Mexico, U.S., Canada) before publishing, especially given you handle patient health information.',
    intro:
      'Kern Stem Care (“we,” “us,” “our”) respects your privacy. This policy explains what information we collect through our website and how we use it.',
    sections: [
      { h2: '1. Information we collect', body: 'When you submit a form or contact us, we may collect: your name, email, phone number, country, and the health-related information you choose to share so a coordinator or physician can respond to your request. We also collect standard technical data (IP address, browser type, pages visited) through cookies and analytics tools.' },
      { h2: '2. How we use your information', body: 'We use your information to respond to your inquiry, schedule consultations, arrange travel and treatment logistics, provide follow-up, and improve our website. We do not sell your personal information.' },
      { h2: '3. Health information', body: 'Any health information you provide is treated as confidential and shared only with the medical and coordination staff involved in responding to your request. This website is for information requests only and is not a substitute for a medical consultation or a secure medical records system.' },
      { h2: '4. Cookies and analytics', body: 'We use cookies and tools such as web analytics to understand site usage. You can disable cookies in your browser settings. <span class="ph">[List the specific tools you use, e.g. Google Analytics, Meta Pixel.]</span>' },
      { h2: '5. Sharing with third parties', body: 'We may share information with service providers who help us operate (hosting, CRM, communications, travel partners), and when required by law. These providers are expected to protect your information.' },
      { h2: '6. International transfers', body: 'We are based in Mexico and serve patients in the U.S. and Canada. Your information may be processed in Mexico and other countries. By using this site, you consent to such transfers.' },
      { h2: '7. Your rights', body: 'Depending on your location, you may have rights to access, correct, or delete your data, or object to its processing (for example under Mexico’s data-protection law, Canada’s PIPEDA, or applicable U.S. state laws). To exercise these rights, contact us at <span class="ph">[privacy@kernstemcare.com]</span>.' },
      { h2: '8. Data retention & security', body: 'We retain your information only as long as needed for the purposes described, and use reasonable safeguards to protect it. No method of transmission over the internet is 100% secure.' },
      { h2: '9. Children', body: 'Our website is not directed to children under 18, and we do not knowingly collect their information.' },
      { h2: '10. Changes & contact', body: 'We may update this policy and will post the new date above. Questions? Contact <span class="ph">[privacy@kernstemcare.com]</span> · <span class="ph">[address, City, Mexico]</span>.' },
    ],
    backHome: '← Back to home',
    otherLabel: 'Terms of Use',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  terms: {
    slug: 'terms',
    metaTitle: 'Terms & Conditions | Kern Stem Care',
    h1: 'Terms & Conditions',
    updatedLabel: 'Last updated:',
    templateNoticeLabel: 'Template notice:',
    templateNotice:
      ' Have a qualified attorney adapt these terms to your jurisdiction and services before publishing.',
    intro:
      'Welcome to the Kern Stem Care website. By accessing or using this site, you agree to these Terms of Use. If you do not agree, please do not use the site.',
    medDisclaimer:
      '<strong>Agency & medical disclaimer.</strong> Kern Stem Care is a <strong>medical coordination and travel agency</strong>. We are <strong>not a clinic, hospital, or medical provider</strong>, and we do not provide medical treatment, diagnosis, or advice. All medical care is provided by independent, licensed clinics, physicians, and laboratories. The content on this website is for general informational purposes only. Many regenerative and cellular therapies coordinated through our partners are <strong>not approved by the U.S. FDA or Health Canada</strong> for specific diseases and are considered investigational. Neither we nor our partners guarantee any result or cure. Individual results vary. Always consult a qualified physician before making any medical decision.',
    sections: [
      { h2: '1. Our role as a coordinator', body: 'Kern Stem Care arranges travel, lodging, appointments, and support and connects you with independent medical providers. We act as a facilitator. The medical relationship, treatment, and any associated risks are between you and the provider you choose. You contract medical services directly with that provider.' },
      { h2: '2. No doctor–patient relationship with us', body: 'Using this website, contacting us, or submitting a form does not create a doctor–patient relationship with Kern Stem Care. Any such relationship is formed only with a licensed medical provider after a formal evaluation and written agreement.' },
      { h2: '3. Information requests', body: 'Forms and contact tools are for requesting information and coordination. Submitting a request does not guarantee acceptance by any provider, any pricing, or any outcome.' },
      { h2: '4. Testimonials', body: 'Patient testimonials reflect individual experiences shared with written consent. They are not a promise of results and results are not typical.' },
      { h2: '5. Intellectual property', body: 'All content on this site (text, logos, images, video) is owned by Kern Stem Care <span class="ph">[legal entity]</span> or its licensors and may not be copied or reused without permission.' },
      { h2: '6. Third-party links', body: 'We may link to third-party sites or partners. We are not responsible for their content or practices.' },
      { h2: '7. Limitation of liability', body: 'To the fullest extent permitted by law, Kern Stem Care is not liable for any damages arising from your use of this website or reliance on its content.' },
      { h2: '8. Governing law', body: 'These terms are governed by the laws of <span class="ph">[State], Mexico</span>, without regard to conflict-of-law rules.' },
      { h2: '9. Changes & contact', body: 'We may update these terms and will post the new date above. Questions? Contact <span class="ph">[legal@kernstemcare.com]</span>.' },
    ],
    backHome: '← Back to home',
    otherLabel: 'Privacy Policy',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  medical: {
    slug: 'medical-disclaimer',
    metaTitle: 'Medical Disclaimer | Kern Stem Care',
    h1: 'Medical Disclaimer',
    updatedLabel: 'Last updated:',
    templateNoticeLabel: 'Scaffold notice:',
    templateNotice:
      ' This page is a structured scaffold. Replace each section with your attorney-reviewed wording for Mexico, the U.S. and Canada before publishing. Keep the "agency, not a clinic" framing.',
    intro:
      'Please read this Medical Disclaimer carefully before relying on any information on this website or engaging our coordination services.',
    medDisclaimer:
      '<strong>Kern Stem Care is a medical coordination and travel agency — not a clinic, hospital, or medical provider.</strong> We do not provide medical treatment, diagnosis, or advice. All medical care is delivered by independent, licensed clinics, physicians, and laboratories. Information here is general and educational only.',
    sections: [
      { h2: '1. Agency role, not a clinic', body: 'Kern Stem Care coordinates travel, lodging, appointments and support and connects you with independent, licensed providers. We do not practice medicine. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '2. Not medical advice', body: 'The content on this website is for general informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '3. No doctor–patient relationship', body: 'Using this site, contacting us, or submitting a form does not create a doctor–patient relationship. That relationship is formed only with a licensed provider after a formal evaluation. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '4. Investigational therapies & regulatory status', body: 'Many regenerative and cellular therapies are not approved by the U.S. FDA or Health Canada for specific diseases and are considered investigational. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '5. No guarantee of results', body: 'Neither we nor our partner providers guarantee any outcome or cure. Individual results vary. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '6. Testimonials', body: 'Testimonials reflect individual experiences shared with written consent; results are not typical and will vary from person to person. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '7. Medical emergencies', body: 'This website is not for medical emergencies. If you are experiencing one, call your local emergency number immediately. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '8. Always consult your physician', body: 'Always seek the advice of a qualified physician before making any medical decision or starting any therapy. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
      { h2: '9. Contact', body: 'Questions about this disclaimer? Contact <span class="ph">[legal@kernstemcare.com]</span>. <span class="ph">[Paste your attorney-reviewed text here.]</span>' },
    ],
    backHome: '← Back to home',
    otherLabel: 'Privacy Policy',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
};

const es: LegalSet = {
  privacy: {
    slug: 'privacy',
    metaTitle: 'Política de Privacidad | Kern Stem Care',
    h1: 'Política de Privacidad',
    updatedLabel: 'Última actualización:',
    templateNoticeLabel: 'Aviso de plantilla:',
    templateNotice:
      ' Esta es una plantilla inicial. Pida a un abogado calificado que la revise para su jurisdicción (México, EE.UU., Canadá) antes de publicar, sobre todo porque maneja información de salud de pacientes.',
    intro:
      'Kern Stem Care (“nosotros”) respeta su privacidad. Esta política explica qué información recopilamos a través de nuestro sitio web y cómo la usamos.',
    sections: [
      { h2: '1. Información que recopilamos', body: 'Cuando envía un formulario o nos contacta, podemos recopilar: su nombre, correo, teléfono, país y la información de salud que decida compartir para que un coordinador o médico responda a su solicitud. También recopilamos datos técnicos estándar (dirección IP, tipo de navegador, páginas visitadas) mediante cookies y herramientas de análisis.' },
      { h2: '2. Cómo usamos su información', body: 'Usamos su información para responder a su consulta, agendar citas, coordinar la logística de viaje y tratamiento, dar seguimiento y mejorar nuestro sitio. No vendemos su información personal.' },
      { h2: '3. Información de salud', body: 'Toda información de salud que proporcione se trata como confidencial y se comparte solo con el personal médico y de coordinación involucrado en responder a su solicitud. Este sitio es solo para solicitudes de información y no sustituye una consulta médica ni un sistema seguro de expedientes clínicos.' },
      { h2: '4. Cookies y análisis', body: 'Usamos cookies y herramientas de análisis para entender el uso del sitio. Puede desactivar las cookies en la configuración de su navegador. <span class="ph">[Liste las herramientas específicas que use, p. ej. Google Analytics, Meta Pixel.]</span>' },
      { h2: '5. Compartir con terceros', body: 'Podemos compartir información con proveedores que nos ayudan a operar (hospedaje, CRM, comunicaciones, socios de viaje) y cuando lo exija la ley. Se espera que estos proveedores protejan su información.' },
      { h2: '6. Transferencias internacionales', body: 'Estamos en México y atendemos a pacientes de EE.UU. y Canadá. Su información puede procesarse en México y otros países. Al usar este sitio, usted consiente dichas transferencias.' },
      { h2: '7. Sus derechos', body: 'Según su ubicación, puede tener derecho a acceder, corregir o eliminar sus datos, u oponerse a su tratamiento (por ejemplo, bajo la ley de protección de datos de México, PIPEDA de Canadá, o leyes estatales aplicables de EE.UU.). Para ejercer estos derechos, contáctenos en <span class="ph">[privacy@kernstemcare.com]</span>.' },
      { h2: '8. Conservación y seguridad', body: 'Conservamos su información solo el tiempo necesario para los fines descritos y usamos medidas razonables para protegerla. Ningún método de transmisión por internet es 100% seguro.' },
      { h2: '9. Menores', body: 'Nuestro sitio no está dirigido a menores de 18 años y no recopilamos su información de forma intencional.' },
      { h2: '10. Cambios y contacto', body: 'Podemos actualizar esta política y publicaremos la nueva fecha arriba. ¿Dudas? Contacte a <span class="ph">[privacy@kernstemcare.com]</span> · <span class="ph">[dirección, Ciudad, México]</span>.' },
    ],
    backHome: '← Volver al inicio',
    otherLabel: 'Términos de Uso',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  terms: {
    slug: 'terms',
    metaTitle: 'Términos y Condiciones | Kern Stem Care',
    h1: 'Términos y Condiciones',
    updatedLabel: 'Última actualización:',
    templateNoticeLabel: 'Aviso de plantilla:',
    templateNotice:
      ' Pida a un abogado calificado que adapte estos términos a su jurisdicción y servicios antes de publicar.',
    intro:
      'Bienvenido al sitio web de Kern Stem Care. Al acceder o usar este sitio, usted acepta estos Términos de Uso. Si no está de acuerdo, no utilice el sitio.',
    medDisclaimer:
      '<strong>Aviso de agencia y médico.</strong> Kern Stem Care es una <strong>agencia de coordinación médica y de viajes</strong>. <strong>No somos una clínica, hospital ni proveedor médico</strong> y no brindamos tratamiento, diagnóstico ni consejo médico. Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados. El contenido de este sitio es solo para fines informativos generales. Muchas terapias regenerativas y celulares coordinadas a través de nuestros aliados <strong>no están aprobadas por la FDA de EE.UU. ni por Health Canada</strong> para enfermedades específicas y se consideran de investigación. Ni nosotros ni nuestros aliados garantizamos ningún resultado ni cura. Los resultados individuales varían. Consulte siempre a un médico calificado antes de tomar una decisión médica.',
    sections: [
      { h2: '1. Nuestro rol como coordinador', body: 'Kern Stem Care gestiona viaje, hospedaje, citas y acompañamiento, y le conecta con proveedores médicos independientes. Actuamos como facilitador. La relación médica, el tratamiento y los riesgos asociados son entre usted y el proveedor que elija. Usted contrata los servicios médicos directamente con dicho proveedor.' },
      { h2: '2. Sin relación médico–paciente con nosotros', body: 'Usar este sitio, contactarnos o enviar un formulario no crea una relación médico–paciente con Kern Stem Care. Dicha relación se forma solo con un proveedor médico certificado tras una evaluación formal y un acuerdo por escrito.' },
      { h2: '3. Solicitudes de información', body: 'Los formularios y herramientas de contacto son para solicitar información y coordinación. Enviar una solicitud no garantiza aceptación por ningún proveedor, ningún precio ni ningún resultado.' },
      { h2: '4. Testimonios', body: 'Los testimonios reflejan experiencias individuales compartidas con consentimiento por escrito. No son una promesa de resultados y los resultados no son típicos.' },
      { h2: '5. Propiedad intelectual', body: 'Todo el contenido de este sitio (texto, logos, imágenes, video) es propiedad de Kern Stem Care <span class="ph">[entidad legal]</span> o sus licenciantes y no puede copiarse ni reutilizarse sin permiso.' },
      { h2: '6. Enlaces de terceros', body: 'Podemos enlazar a sitios o socios de terceros. No somos responsables de su contenido ni prácticas.' },
      { h2: '7. Limitación de responsabilidad', body: 'En la máxima medida permitida por la ley, Kern Stem Care no es responsable de daños derivados del uso de este sitio o de la confianza en su contenido.' },
      { h2: '8. Ley aplicable', body: 'Estos términos se rigen por las leyes de <span class="ph">[Estado], México</span>, sin atender a normas de conflicto de leyes.' },
      { h2: '9. Cambios y contacto', body: 'Podemos actualizar estos términos y publicaremos la nueva fecha arriba. ¿Dudas? Contacte a <span class="ph">[legal@kernstemcare.com]</span>.' },
    ],
    backHome: '← Volver al inicio',
    otherLabel: 'Política de Privacidad',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
  medical: {
    slug: 'medical-disclaimer',
    metaTitle: 'Aviso Médico | Kern Stem Care',
    h1: 'Aviso Médico',
    updatedLabel: 'Última actualización:',
    templateNoticeLabel: 'Aviso de plantilla:',
    templateNotice:
      ' Esta página es una estructura base. Reemplace cada sección con la redacción revisada por su abogado para México, EE.UU. y Canadá antes de publicar. Conserve el enfoque de "agencia, no clínica".',
    intro:
      'Lea este Aviso Médico con atención antes de basarse en cualquier información de este sitio o de contratar nuestros servicios de coordinación.',
    medDisclaimer:
      '<strong>Kern Stem Care es una agencia de coordinación médica y de viajes — no una clínica, hospital ni proveedor médico.</strong> No brindamos tratamiento, diagnóstico ni consejo médico. Toda la atención médica la brindan clínicas, médicos y laboratorios independientes y certificados. La información aquí es general y educativa.',
    sections: [
      { h2: '1. Rol de agencia, no clínica', body: 'Kern Stem Care coordina viaje, hospedaje, citas y acompañamiento, y le conecta con proveedores independientes y certificados. No ejercemos la medicina. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '2. No es consejo médico', body: 'El contenido de este sitio es solo para fines informativos y educativos generales y no sustituye el consejo, diagnóstico o tratamiento médico profesional. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '3. Sin relación médico–paciente', body: 'Usar este sitio, contactarnos o enviar un formulario no crea una relación médico–paciente. Dicha relación se forma solo con un proveedor certificado tras una evaluación formal. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '4. Terapias de investigación y estatus regulatorio', body: 'Muchas terapias regenerativas y celulares no están aprobadas por la FDA de EE.UU. ni por Health Canada para enfermedades específicas y se consideran de investigación. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '5. Sin garantía de resultados', body: 'Ni nosotros ni nuestros proveedores aliados garantizamos ningún resultado ni cura. Los resultados individuales varían. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '6. Testimonios', body: 'Los testimonios reflejan experiencias individuales compartidas con consentimiento por escrito; los resultados no son típicos y varían de persona a persona. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '7. Emergencias médicas', body: 'Este sitio no es para emergencias médicas. Si tiene una, llame de inmediato a su número local de emergencias. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '8. Consulte siempre a su médico', body: 'Busque siempre el consejo de un médico calificado antes de tomar cualquier decisión médica o iniciar cualquier terapia. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
      { h2: '9. Contacto', body: '¿Dudas sobre este aviso? Contacte a <span class="ph">[legal@kernstemcare.com]</span>. <span class="ph">[Pegue aquí el texto revisado por su abogado.]</span>' },
    ],
    backHome: '← Volver al inicio',
    otherLabel: 'Política de Privacidad',
    rights: '',
    legalEntityPh: 'Kern Corsa, S.A. de C.V.',
  },
};

export const legalContent: Record<Lang, LegalSet> = { en, es };

/** The three legal pages as footer/nav links, in display order. */
export function legalNav(lang: Lang): { slug: string; label: string }[] {
  const set = legalContent[lang];
  return [set.privacy, set.terms, set.medical].map((d) => ({ slug: d.slug, label: d.h1 }));
}
