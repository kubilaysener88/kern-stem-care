/**
 * Privacy-friendly analytics config.
 *
 * Two providers can run side by side — Plausible (cookieless, GDPR-friendly) and
 * Google Analytics 4 (gtag). Each has its own `enabled` switch. Both only load
 * AFTER the visitor accepts cookies in the consent banner (see CookieConsent.astro),
 * so tracking always respects consent regardless of provider.
 */
export const analytics = {
  plausible: {
    /**
     * Kept FALSE until the domain is registered in Plausible (or self-hosted).
     * While false, no Plausible script loads — no console errors from an
     * unregistered domain, and nothing tracks even after cookie consent.
     */
    enabled: false,
    /** The site/domain you registered in Plausible. */
    domain: 'kernstemcare.com',
    /** Script URL (use a self-hosted or proxied URL if you prefer). */
    src: 'https://plausible.io/js/script.js',
  },
  ga: {
    enabled: true,
    /** GA4 Measurement ID from the "Google tag" install screen (G-XXXXXXXXXX). */
    measurementId: 'G-FJ5KMGCBDS',
  },
};

/** Custom event names sent across the site (keep in sync with the UI). */
export const ANALYTICS_EVENTS = {
  bookConsultation: 'Book Consultation',
  contactSubmit: 'Contact Form Submit',
  testimonialPlay: 'Testimonial Play',
  estimateSubmit: 'Estimate Form Submit',
} as const;
