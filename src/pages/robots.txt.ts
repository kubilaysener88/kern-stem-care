import type { APIRoute } from 'astro';

/**
 * Dynamically generated /robots.txt — the Sitemap line is derived from `site`
 * in astro.config.mjs, so it stays in sync with the production domain.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapHref = new URL('sitemap-index.xml', site).href;
  const body = [
    '# https://www.robotstxt.org/robotstxt.html',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapHref}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
