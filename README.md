# Luis & Pedro · wedding website

A fast, static website in English, Portuguese (Brazil) and Spanish (Mexico).
Built with [Astro](https://astro.build). No database, no server to maintain.

- [Run it on your computer](#run-it-on-your-computer)
- [Where things live](#where-things-live)
- [Edit text](#edit-text)
- [Replace photos](#replace-photos)
- [Update the schedule](#update-the-schedule)
- [Colours and fonts](#colours-and-fonts)
- [RSVP setup](#rsvp-setup) and [viewing RSVPs](#view-and-export-rsvps)
- [Deploy for free](#deploy-for-free)
- [Custom domain](#custom-domain)
- [Privacy (noindex)](#privacy-noindex)
- [Finding every TODO](#finding-every-todo)

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321. The page refreshes as you save files.

To check the final version exactly as it will be published:

```bash
npm run build
```

```bash
npm run preview
```

## Where things live

| What | File |
|---|---|
| All text, per language | `src/i18n/en.json`, `src/i18n/pt-BR.json`, `src/i18n/es-MX.json` |
| Date, venue, contact, RSVP link, registry link | `src/config/site.ts` |
| Schedule times | `src/data/schedule.ts` |
| Colours, fonts, shapes | `src/styles/theme.css` |
| Photos | `src/assets/photos/` |
| Social preview images | `public/og/en.jpg`, `pt.jpg`, `es.jpg` |
| Google Sheet script for RSVPs | `apps-script/Code.gs` |
| Layout and page structure (rarely needed) | `src/layouts`, `src/components`, `src/pages` |

## Edit text

Open the language file and change the text on the right-hand side of each line.
Leave the keys on the left alone, and make the same change in all three files.

```json
"intro": "Three days in a stone village between two volcanoes..."
```

Things you can use inside any text:

| Write | Result |
|---|---|
| `[TODO: something]` | A highlighted reminder on the page. Delete it when you fill the text in. |
| `**bold**` | **bold** |
| `[link text](https://example.com)` | A link |
| `{{date:2027-11-06}}` | The date, written the right way for each language |
| `{{time:15:00}}` | 3:00 PM / 15:00 / 3:00 p.m. |
| `{{mxn:500}}` | An amount in Mexican pesos |
| `{{dist:22}}` | Kilometres, with miles added in English |
| `{{temp:23}}` | Celsius, with Fahrenheit added in English |

Lists (FAQ questions, hotels, places to visit) are the blocks between `[` and `]`.
To add an item, copy one `{ ... }` block, paste it after a comma, and edit it.

Each file has a `_review` line at the top naming the translations worth a second
look from a native speaker.

If the site stops building after an edit, the cause is almost always a missing
comma or quotation mark in a JSON file. The error message gives the line number.

## Replace photos

Put a photo in `src/assets/photos/` with the name shown on the placeholder
(for example `hero.jpg`). That is all: it is cropped, resized and compressed for
you. The full list of names is in `src/assets/photos/README.md`.

The image that appears when the link is shared on WhatsApp or iMessage is
separate: replace `public/og/en.jpg`, `pt.jpg` and `es.jpg` with 1200 x 630 px
images, keeping the same names.

## Update the schedule

Times are in `src/data/schedule.ts`:

```ts
{ id: 'cocktail', day: 'sat', time: null },     // shows a TODO marker
{ id: 'cocktail', day: 'sat', time: '16:00' },  // shows 4:00 PM / 16:00 / 4:00 p.m.
```

Use 24-hour times. Titles, descriptions and places for each event are in the
language files under `schedule.events`. To add an event, add a line in
`schedule.ts` with a new `id` and add an entry with the same `id` to each
language file.

If the ceremony time changes, also update `weddingStart` and `weddingEnd` in
`src/config/site.ts`. The countdown and the calendar files use those.

## Colours and fonts

Everything visual is a variable in `src/styles/theme.css`. Change a value once
and it applies across the site. If you change text or button colours, check the
contrast (for example at https://webaim.org/resources/contrastchecker/): body
text should reach 4.5:1.

To change a font, install another [Fontsource](https://fontsource.org) package,
swap the two `import '@fontsource-variable/...'` lines and the two font-file
lines at the top of `src/layouts/Layout.astro`, then put the new name first in
`--font-heading` or `--font-body`.

## RSVP setup

RSVPs go straight into a Google Sheet that you own. One-time setup, about ten
minutes:

1. Create a new Google Sheet. Name it something like "Wedding RSVPs".
2. In the sheet, open **Extensions > Apps Script**.
3. Delete the sample code, paste in everything from `apps-script/Code.gs`, and save.
   Optional: put your email in `NOTIFY_EMAIL` to get a message for each reply.
4. Click **Deploy > New deployment**. Choose type **Web app**.
   Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and
   approve the permissions Google asks for.
5. Copy the **Web app URL** (it ends in `/exec`).
6. Paste it into `src/config/site.ts`:
   ```ts
   rsvp: { endpoint: 'https://script.google.com/macros/s/.../exec', deadline: '2027-09-01' },
   ```
7. Publish the site and send a test RSVP. A new tab called "RSVPs" appears in
   the sheet with one row per reply.

If you later edit the script, use **Deploy > Manage deployments > Edit > New
version** so the same URL keeps working.

Please send a real test reply after connecting it. The form was tested here
against a simulated endpoint, not against a live Google Sheet.

### View and export RSVPs

Open the Google Sheet. Each reply is a row with the time, names, number of
guests, events, dietary notes, language, travel dates, airport and shuttle
interest. To export: **File > Download > Microsoft Excel (.xlsx)** or
**Comma-separated values (.csv)**. You can sort, filter and add your own
columns (table number, shuttle group) to the right of the existing ones.

### Why this approach

| Option | Good | Less good |
|---|---|---|
| **Google Sheet + Apps Script (used here)** | Free, no monthly limit, works on any host, the form matches the site in all three languages, replies land in a sheet you can export | Ten-minute setup |
| Netlify Forms | No setup | Only works on Netlify, 100 replies a month on the free plan |
| Formspree | Simple | Free plan is limited to about 50 replies a month |
| Tally or Google Forms | Easiest | Embedded form that does not match the design; awkward in three languages |

## Deploy for free

First put the project on GitHub (a private repository is fine):

```bash
git init
```

```bash
git add -A
```

```bash
git commit -m "Wedding site"
```

Then create an empty repository at https://github.com/new and run the two
"push an existing repository" commands GitHub shows you.

### Netlify (recommended)

1. Sign in at https://app.netlify.com with GitHub.
2. **Add new site > Import an existing project**, and pick the repository.
3. Netlify reads `netlify.toml`, so the settings are already filled in
   (build command `npm run build`, publish folder `dist`). Click **Deploy**.
4. Your site is live at `something.netlify.app`. Rename it under
   **Site configuration > Change site name**.

Every push to GitHub republishes the site automatically.

### Vercel

1. Sign in at https://vercel.com with GitHub.
2. **Add New > Project**, import the repository. Vercel detects Astro. Click **Deploy**.

### GitHub Pages

Works, with two caveats: on the free plan the repository must be public, and
the "do not index" header cannot be sent (the page-level tag still is). Follow
Astro's guide: https://docs.astro.build/en/guides/deploy/github/. The site
assumes it lives at the root of a domain, so use a custom domain or a
`username.github.io` repository.

## Custom domain

1. Buy a domain from any registrar (Namecheap, Cloudflare, Porkbun, etc.).
2. **Netlify:** Domain management > Add a domain, then follow the instructions.
   The simplest route is to switch the domain's nameservers to Netlify's.
   **Vercel:** Project > Settings > Domains > Add, then add the DNS records shown.
3. HTTPS certificates are issued automatically, usually within minutes.
4. Tell the site its address so shared links show the right preview: in your
   host's settings add an environment variable `SITE_URL` with the value
   `https://yourdomain.com`, then redeploy. Until then the site uses the
   address Netlify or Vercel gives it, which also works.

To check the WhatsApp preview after deploying, send the link to yourself.
WhatsApp caches previews, so if you change the image later, test with
`?v=2` added to the end of the link.

## Privacy (noindex)

The site asks search engines not to list it, in two ways: a tag on every page
(`noindex: true` in `src/config/site.ts`) and a header sent by Netlify or
Vercel (`netlify.toml`, `vercel.json`). Anyone with the link can still open it,
and link previews still work. This is a request that Google and Bing honour; it
is not a password. Avoid posting the link publicly.

To make the site searchable, set `noindex: false` and remove the
`X-Robots-Tag` blocks from `netlify.toml` and `vercel.json`.

## Languages

- A guest's first visit follows their browser language. English is the fallback.
- The flags in the header switch language, and the choice is remembered on that device.
- Share the short address (`yourdomain.com`) and each guest lands in their own
  language. A link to a specific page, such as `yourdomain.com/pt/travel/`,
  also adapts to the guest's language.

## Finding every TODO

```bash
grep -rn "TODO" src apps-script --include="*.json" --include="*.ts" --include="*.gs"
```

On the site itself, every TODO appears as a highlighted marker, so you can also
just click through the pages.
