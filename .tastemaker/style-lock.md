# Style lock: Luis & Pedro wedding site

Established: 2026-11-10. Redirected: 2026-11-11 by the couple, from three style references
(a monochrome "save the dates" landing, a planner home page with a full-bleed hero, and a
planner packages page with framed photos on tinted panels). Full study and decisions: DESIGN.md.

## Direction
- Thesis: Tuscany in Mexico. Stone, stucco, olive and a touch of terracotta; photo-led, neutral, unhurried.
- First viewport: full-bleed photo, names in Bodoni capitals, date, place, one button; header floating over it.
- Risk accepted: the look depends on warm, consistently edited photography that is not in the repo yet.

## Palette (all in src/styles/theme.css)
- Ivory #FAF6F3 (bg) · Linen #F1EDE8 (panels) · White #FFFFFF (frames, fields) · Stone #DEDAD4 (hairlines) · Taupe #C4B8AF
- Espresso #3A2E27 text (12.2:1 on ivory, 11.3:1 on linen) · Mocha #705A4E secondary text and buttons (6.0:1 / 5.5:1)
- Terracotta #9E4A2B accent (5.6:1 on ivory): ampersand, weekend dates, active marker. Never a fill.
- Olive #6B6F4E: line drawings only (decorative).
- Dark mode: not needed, single mode.

## Color contract
- Text-safe: espresso or mocha on ivory, linen, white; terracotta on ivory, linen, white; ivory on mocha; ivory or taupe on espresso; white on the photo scrim.
- UI-safe only: mocha or terracotta on taupe.
- Never: taupe or stone as text on light backgrounds; terracotta as a button or band fill; olive as text.

## Type
- Display (names, numerals): Bodoni Moda Variable 400, capitals.
- Headings: Cormorant Garamond Variable 500, capitals, 0.06em tracking. Italic for the signature.
- Body: Jost Variable 400, 17px, 1.7 line-height. Labels and menu: 11 to 12px, 500, capitals, 0.14em.

## Shape, borders, motion
- Radius: 0, or a full arch. Framed photos: 6 to 8px white border, shadow 0 8px 30px rgb(58 46 39 / 0.08).
- Panels: linen fill, no border. Buttons: square, solid mocha; white on photos; outline for secondary.
- Motion: CSS only. Hero entrance, arch unveil on the weekend trio, header responds to scroll, seal turns once a minute.

## Structure
- Shared frame: floating two-row header (flags, names, RSVP; links below), photo banner with curved edge,
  intro (line drawing, hairline, lead), linen RSVP band with seal, espresso footer.
- Home: hero, statement, countdown, three-day arch trio, getting-there feature, contents, band.
- Inner pages: Feature blocks (framed photo over linen panel with facts) for places; split sections for dense information.

## Assets
- Photography: none shipped; every slot is a labelled placeholder (couple's decision, 2026-11-10).
- Illustration: six hairline SVG drawings made in-house (src/components/Ornament.astro). No icon set; flags are inline SVG.
