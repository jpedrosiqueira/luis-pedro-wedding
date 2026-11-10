import { site } from '../config/site';
import { type Lang, useT, plain } from '../i18n';

const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const location = `${site.venue.name}, ${site.venue.area}, ${site.venue.region}`;

export function googleCalendarUrl(lang: Lang) {
  const t = useT(lang);
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: t.home.calendar.eventTitle,
    dates: `${stamp(site.weddingStart)}/${stamp(site.weddingEnd)}`,
    details: plain(lang, t.home.calendar.eventDetails),
    location,
    ctz: site.timeZone,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

const escIcs = (s: string) => s.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');

export function icsFile(lang: Lang, url: string) {
  const t = useT(lang);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Luis & Pedro//Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:luis-pedro-wedding-20271106@wedding',
    `DTSTAMP:${stamp('2026-11-10T00:00:00Z')}`,
    `DTSTART:${stamp(site.weddingStart)}`,
    `DTEND:${stamp(site.weddingEnd)}`,
    `SUMMARY:${escIcs(t.home.calendar.eventTitle)}`,
    `DESCRIPTION:${escIcs(plain(lang, t.home.calendar.eventDetails))}`,
    `LOCATION:${escIcs(location)}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n');
}
