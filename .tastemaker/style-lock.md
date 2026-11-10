# Style lock: Luis & Pedro wedding site

Established: 2026-11-10. Source: three reference photos of Val'Quirico supplied by the couple
(stone and stucco lanes in daylight; the plaza at dusk with lantern light), read with
`extract_palette.py`, then tuned by hand against `check_contrast.py --matrix`.

## Direction
- Thesis: a quiet editorial invitation with the textures of a stone village. Cream stucco page,
  espresso text, terracotta for action, sage for small labels, and the dusk sky as the one dark band.
- Signature shape: the arch (photos with a round top), taken from the stone doorways in the references.
- Motion: CSS only. One hero entrance, a light scroll reveal, hover feedback. No GSAP, by choice:
  the brief asks for minimal JavaScript and top Core Web Vitals.

## Palette (all in src/styles/theme.css)
- Background #F6EFE4 · Surface #FCF8F1 · Stone #E9DFD0 · Border #D8CBB9
- Text #2B2019 (14.6:1 on bg) · Muted #6A584A (5.9:1 on bg)
- Primary terracotta #9E4A2B · on-primary #FFF9F0 (5.8:1) · hover #853B20
- Accent sage #5E6F54 (4.7:1 on bg, labels only)
- Dusk #232733 · on-dusk #F6EFE4 · Glow #E9B872 (on dusk only)
- Dark mode: not needed, single mode.

## Color contract
- Text-safe: text on bg/surface/border/glow; muted on bg/surface; primary on bg/surface; on-primary on
  primary; accent on bg/surface; bg/surface/glow/border on dusk.
- UI-safe only: muted/primary/accent on border.
- Never: glow on light backgrounds; primary, accent or muted on dusk; text on primary.

## Type
- Headings: Fraunces Variable (optical size axis), weight 300 to 400.
- Body: Instrument Sans Variable. Labels: 13px, 600, uppercase, 0.14em tracking.

## Structure
- Shared frame: two-row masthead (monogram, flag language switcher, RSVP; link row from 72rem),
  numbered page heroes, 4/8 split sections with hairlines, terracotta RSVP band, dusk footer.
- Home: Editorial Index (statement hero with arch photo, countdown band, three-day strip,
  travel figures, numbered contents list).

## Assets
- Photography: none shipped. Every image slot is a labelled placeholder until the couple adds files
  to src/assets/photos (their decision, 2026-11-10). No illustrations. No icon set; flags are inline SVG.
