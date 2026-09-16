import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

/**
 * Generates the social-share image at public/og-image.jpg (1200×630).
 * Re-run after brand changes: node scripts/gen-og.mjs
 *
 * The mark is composited from the real logo file. It used to be redrawn here in
 * SVG — a rounded tile with two outlined circles — which was an approximation
 * made before the real artwork existed. The site header, the favicon and the
 * Apple touch icon all moved to the real logo; this card never did, so every
 * WhatsApp and social preview carried a mark the brand does not use.
 */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d2a4a"/>
      <stop offset="0.55" stop-color="#13427a"/>
      <stop offset="1" stop-color="#0a6e74"/>
    </linearGradient>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1565c0"/>
      <stop offset="1" stop-color="#0a9396"/>
    </linearGradient>
    <clipPath id="cell"><circle cx="69" cy="90" r="48"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="240" y="135" font-family="Arial, sans-serif" font-size="58" font-weight="800" fill="#ffffff">Kern Stem Care</text>
  <text x="242" y="180" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="3" fill="#9fd0ff">MEDICAL COORDINATION AGENCY · CANCÚN</text>
  <text x="92" y="330" font-family="Arial, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Regenerative care in</text>
  <text x="92" y="408" font-family="Arial, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Cancún, Mexico</text>
  <text x="92" y="478" font-family="Arial, sans-serif" font-size="30" fill="#dce9f6">Guiding patients from the U.S. &amp; Canada — vetted clinics,</text>
  <text x="92" y="518" font-family="Arial, sans-serif" font-size="30" fill="#dce9f6">full logistics, one bilingual coordinator.</text>
  <rect x="92" y="556" width="1016" height="4" rx="2" fill="#0a9396"/>
</svg>`;

const out = fileURLToPath(new URL('../public/og-image.jpg', import.meta.url));
const markSrc = fileURLToPath(new URL('../public/assets/logo/kern-icon-white.png', import.meta.url));

// White version: the card's background is the navy-to-teal gradient, and the
// colour mark's blue arc disappears into it.
const mark = await sharp(markSrc).resize(132, 132, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: mark, left: 90, top: 80 }])
  .jpeg({ quality: 86 })
  .toFile(out);
console.log('Wrote', out);
