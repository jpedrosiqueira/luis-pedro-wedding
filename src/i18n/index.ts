import en from './en.json';
import pt from './pt-BR.json';
import es from './es-MX.json';
import { site } from '../config/site';

/** The three languages. `code` is the URL prefix, `html` the lang attribute. */
export const locales = {
  en: { code: 'en', html: 'en', intl: 'en-US', og: 'en_US', label: 'English', short: 'EN', dict: en },
  pt: { code: 'pt', html: 'pt-BR', intl: 'pt-BR', og: 'pt_BR', label: 'Português', short: 'PT', dict: pt },
  es: { code: 'es', html: 'es-MX', intl: 'es-MX', og: 'es_MX', label: 'Español', short: 'ES', dict: es },
} as const;

export type Lang = keyof typeof locales;
export type Dict = typeof en;
export const langs = Object.keys(locales) as Lang[];
export const defaultLang: Lang = 'en';

export function useT(lang: Lang): Dict {
  return locales[lang].dict as Dict;
}

/** For getStaticPaths in every page under src/pages/[lang]/ */
export function langPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

/** Page slugs, in menu order. The same slugs are used in every language. */
export const pages = [
  { key: 'story', slug: 'story' },
  { key: 'schedule', slug: 'schedule' },
  { key: 'venue', slug: 'venue' },
  { key: 'travel', slug: 'travel' },
  { key: 'stay', slug: 'stay' },
  { key: 'explore', slug: 'things-to-do' },
  { key: 'attire', slug: 'dress-and-weather' },
  { key: 'gifts', slug: 'gifts' },
  { key: 'faq', slug: 'faq' },
] as const;

export function href(lang: Lang, slug = '') {
  return `/${lang}/${slug ? slug + '/' : ''}`;
}

// ---------------------------------------------------------------------------
// Formatting per language
// ---------------------------------------------------------------------------
const tz = site.timeZone;

export function fmtDate(lang: Lang, iso: string, opts: Intl.DateTimeFormatOptions = {}) {
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00-06:00` : iso);
  return new Intl.DateTimeFormat(locales[lang].intl, {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz, ...opts,
  }).format(d);
}

export function fmtTime(lang: Lang, hhmm: string) {
  const d = new Date(`2027-11-06T${hhmm}:00-06:00`);
  return new Intl.DateTimeFormat(locales[lang].intl, { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(d);
}

export function fmtMoney(lang: Lang, amount: number, currency = 'MXN') {
  const s = new Intl.NumberFormat(locales[lang].intl, {
    style: 'currency', currency, maximumFractionDigits: 0, currencyDisplay: 'symbol',
  }).format(amount);
  // In Mexico "$" alone means pesos; make the currency explicit for everyone.
  return lang === 'es' && currency === 'MXN' ? `${s} MXN` : s;
}

function fmtDist(lang: Lang, km: number) {
  const n = new Intl.NumberFormat(locales[lang].intl);
  if (lang === 'en') {
    const mi = km * 0.621371;
    return `${n.format(mi >= 50 ? Math.round(mi / 5) * 5 : Math.round(mi))} miles (${n.format(km)} km)`;
  }
  return `${n.format(km)} km`;
}

function fmtTemp(lang: Lang, c: number) {
  return lang === 'en' ? `${Math.round((c * 9) / 5 + 32)}°F (${c}°C)` : `${c} °C`;
}

/** Replace {{date:…}} {{time:…}} {{mxn:…}} {{dist:…}} {{temp:…}} {{deadline}} with localised values. */
export function fill(lang: Lang, text: string): string {
  return text.replace(/\{\{(\w+)(?::([^}]+))?\}\}/g, (_, kind, arg) => {
    switch (kind) {
      case 'date': return fmtDate(lang, arg);
      case 'time': return fmtTime(lang, arg);
      case 'mxn': return fmtMoney(lang, Number(arg));
      case 'dist': return fmtDist(lang, Number(arg));
      case 'temp': return fmtTemp(lang, Number(arg));
      case 'deadline':
        return site.rsvp.deadline
          ? fmtDate(lang, site.rsvp.deadline, { weekday: undefined })
          : '[TODO: RSVP deadline]';
      default: return '';
    }
  });
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** fill() plus safe HTML: [TODO: …] markers, **bold**, [text](https://link). Use with set:html. */
export function rich(lang: Lang, text: string): string {
  return esc(fill(lang, text))
    .replace(/\[TODO:?\s*([^\]]*)\]/g, '<mark class="todo"><span class="todo__tag">TODO</span> $1</mark>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+|mailto:[^)\s]+|\/[^)\s]*)\)/g, '<a href="$2">$1</a>');
}

/** Plain text version (for meta tags and alt text): TODO markers are removed. */
export function plain(lang: Lang, text: string): string {
  return fill(lang, text).replace(/\[TODO:?\s*([^\]]*)\]/g, '$1').trim();
}
