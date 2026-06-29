/**
 * Privacy-friendly analytics config (Plausible — cookieless, GDPR-friendly).
 *
 * Setup: add your domain as a site in https://plausible.io (or self-host) and set
 * `domain` below. Until then you can leave `enabled: false`. Analytics only loads
 * AFTER the visitor accepts cookies in the consent banner (see CookieConsent.astro),
 * so it always respects consent. To swap to GA4, see the note in Analytics.astro.
 */
export const analytics = {
  /**
   * Master switch — set false to disable all tracking.
   * Kept FALSE until launch: register the real domain in Plausible (or self-host),
   * then flip this to true. While false, no analytics script loads — no console
   * errors from an unregistered domain, and nothing tracks even after cookie consent.
   */
  enabled: false,
  provider: 'plausible' as const,
  /** The site/domain you registered in Plausible. */
  domain: 'kernstemcare.com',
  /** Script URL (use a self-hosted or proxied URL if you prefer). */
  src: 'https://plausible.io/js/script.js',
};

/** Custom event names sent across the site (keep in sync with the UI). */
export const ANALYTICS_EVENTS = {
  bookConsultation: 'Book Consultation',
  contactSubmit: 'Contact Form Submit',
  testimonialPlay: 'Testimonial Play',
} as const;
