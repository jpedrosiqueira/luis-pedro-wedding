import type { APIRoute } from 'astro';
import { langPaths, href, type Lang } from '../../i18n';
import { icsFile } from '../../lib/calendar';

export const getStaticPaths = langPaths;

export const GET: APIRoute = ({ params, site }) => {
  const lang = params.lang as Lang;
  return new Response(icsFile(lang, new URL(href(lang), site).href), {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
