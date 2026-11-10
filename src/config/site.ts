/**
 * Site-wide settings. Everything marked TODO is waiting on you.
 * Text shown to guests lives in src/i18n/*.json, not here.
 */
export const site = {
  couple: { a: 'Luis', b: 'Pedro' },

  /** Wedding day, in venue local time (Central Mexico, UTC-6, no daylight saving). */
  weddingStart: '2027-11-06T15:00:00-06:00',
  weddingEnd: '2027-11-06T23:00:00-06:00',
  timeZone: 'America/Mexico_City',

  venue: {
    name: 'Hacienda de Triana',
    area: "Val'Quirico",
    region: 'Tlaxcala, México',
    /** Text used for the map pin and the "open in maps" link.
     *  TODO: replace with the exact Google Maps link or pin for Hacienda de Triana. */
    mapQuery: "Val'Quirico, Santa Águeda, Tlaxcala, México",
  },

  /** true = ask search engines not to list the site (it still works for anyone with the link). */
  noindex: true,

  rsvp: {
    /** TODO: paste the Google Apps Script "Web app" URL here (see README, "RSVP setup"). */
    endpoint: '',
    /** TODO: RSVP deadline as YYYY-MM-DD. Leave '' to show a TODO marker. */
    deadline: '',
  },

  contact: {
    /** TODO: your email address, e.g. 'hello@yourdomain.com' */
    email: '',
    /** TODO: WhatsApp number with country code, digits only, e.g. '5212221234567' */
    whatsapp: '',
  },

  /** TODO: honeymoon fund or registry link. Leave '' to show a TODO marker. */
  registryUrl: '',
} as const;
