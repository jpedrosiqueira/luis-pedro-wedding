import { defineConfig } from 'astro/config';

// The public address of the site, used for social preview (Open Graph) tags.
// Netlify and Vercel set this automatically. Once you have a custom domain,
// set SITE_URL in your host's environment variables (see README).
const site =
  process.env.SITE_URL ||
  process.env.URL || // Netlify
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://example.com'; // TODO: replace once you have a domain

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
