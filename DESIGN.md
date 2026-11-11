# Design spec: reference study

Status: decided and built. Sections 1 to 7 are the study and the proposal; the
decisions below settle the open questions, and section 11 records how the built
site follows or departs from the proposal.

Three references were studied for what transfers (structure, proportion, type
character, colour temperature), not to copy their photos, copy or branding.

| Ref | What it is | What you liked |
|---|---|---|
| **R1** | Monochrome "Save the dates" landing: three pill-shaped photos, oversized display serif | The sophisticated feel |
| **R2** | Planner home page: full-bleed photo hero, nav floating over it, curved bottom edge | Hero photo filling the first screen, floating top nav |
| **R3** | Planner packages page: framed photos overlapping tinted panels, facts in small columns | How pictures and information sit together |

## Decisions (11 November 2026)

1. **Photos in warm colour**, not black and white.
2. **A touch of terracotta stays.** The venue and the destination have a Tuscan
   character, and the website should look and feel like that.
3. **Fonts:** Cormorant Garamond for headings, Bodoni Moda for the names and
   numerals, Jost for reading text.
4. **Ornament:** line drawings of Val'Quirico motifs and botanicals.

## Direction: Tuscany, in Mexico

Val'Quirico is a stone village in the Tuscan style, set in the Mexican
highlands. The site should feel like that place: sun-warmed, old-world, calm,
and unmistakably somewhere, not a generic wedding template.

**What "Tuscan" means here**

| Quality | How the site carries it |
|---|---|
| Stone and stucco | Ivory and linen backgrounds, stone-grey hairlines, mocha and espresso text. No pure white pages, no pure black text. |
| Terracotta roofs and pots | Terracotta `#9E4A2B` in three small places only: the ampersand, the weekend dates, and the active menu marker. Rare enough to feel like a roof tile against a wall, not a brand colour. |
| Olive groves and cypresses | Line drawings in olive green `#6B6F4E`: an olive branch, a pair of cypresses. |
| Arched doorways and lanterns | Arch-topped photos, the curved edge under each top photo, and line drawings of a stone arch and a wall lantern. |
| Golden light | Warm, soft photography with a consistent edit. This is the largest part of the feel and depends on the photos chosen. |
| Unhurried | Generous whitespace, capitals with air between the letters, slow and sparse motion. |

**What keeps it Mexican, not a copy of Italy**

- The marigold (cempasúchil) and the agave among the line drawings.
- The words: rompe-hielo, tornaboda, the place names.
- The seal, which names Val'Quirico, Tlaxcala and México.

**What to avoid**

- Rustic clichés: burlap textures, wine-stain graphics, "trattoria" script fonts, sunflower yellow.
- Terracotta as a large fill (buttons, bands, backgrounds). It stops being a touch.
- Cool greys or blue-tinted photos, which fight the warmth.

---

**How to read the numbers.** Hex values were sampled from the screenshots with a
script, so they are real but slightly shifted by image compression. Sizes,
spacing and radii are estimates measured from small screenshots, scaled to a
1440 px desktop canvas. Font names are look-alike identifications, not confirmed.

---

## 1. Typography

### Observed

| | R1 | R2 | R3 |
|---|---|---|---|
| Display face | Very high-contrast didone serif with hairline strokes and decorative cut-outs in the letters; all caps | Classical old-style serif (Cormorant Garamond-like); all caps | Same as R2 |
| Display weight | Light to regular; the contrast does the work, not the weight | Regular (400), with **semibold** used to pick out words inside a sentence | Regular |
| Display size | Huge: about 110 to 120 px, three stacked lines, line-height near 1.0 | Hero about 40 px; statement paragraph about 28 to 30 px | Page title about 34 px; item titles about 30 px |
| Letter-spacing on display | Tight to normal | Wide, about 0.04 to 0.06em | Wide, about 0.04 to 0.06em |
| Sans face | Light geometric sans (Montserrat or Jost-like) | Geometric sans (Montserrat-like) | Same as R2 |
| Nav | 10 to 11 px, caps, tracking about 0.12em, regular | 10 to 11 px, caps, tracking about 0.1em | Same; current item in bold |
| Small labels | Dates in 10 px caps sans above a 16 to 18 px serif caps title | "With love," in small sans above a handwritten signature | Field labels in bold 12 px sans, values in regular |
| Body | Almost none | 13 to 14 px sans, line-height about 1.7, two columns | 13 px sans, numbered list |
| Numerals | Giant outlined didone numerals ("01.") overlapping the photo edge | None | None |

### Shared
- **Serif for anything with feeling, sans for anything functional.** No exceptions in any of the three.
- **Capitals carry the elegance.** Display type is uppercase everywhere; so are nav and labels.
- **Light weights only.** Nothing heavier than semibold appears, and semibold is used for emphasis, not for headings.
- **Tiny nav.** All three use 10 to 11 px tracked caps. This is a large part of the "expensive" feel.

### Differs
- R1 is display-led: one phrase at enormous size is the whole composition. R2 and R3 are moderate, with serif sizes mostly between 28 and 40 px.
- R1's serif is fashion-editorial (extreme contrast). R2 and R3's is bookish and softer.
- R2 mixes weights inside a serif sentence. R1 and R3 don't.

### Proposed for this site

| Role | Spec |
|---|---|
| Display serif | A high-contrast serif used in caps. Candidates, all free: **Cormorant Garamond** (closest to R2/R3), **Bodoni Moda** (closest to R1's contrast), **Italiana** (single weight, very R1). Recommendation: Cormorant Garamond for headings sitewide, plus Bodoni Moda only for the names and the big numerals. |
| Sans | **Jost** or **Montserrat**, weights 300, 400, 500, 600. |
| Hero names | Caps, weight 300 to 400, `clamp(3.5rem, 11vw, 9rem)`, line-height 0.95, tracking 0.01em |
| H1 (inner pages) | Caps, 400, `clamp(2rem, 4vw, 3.25rem)`, tracking 0.05em |
| H2 | Caps, 400, `clamp(1.5rem, 2.6vw, 2.125rem)`, tracking 0.05em |
| H3 / item title | Caps, 500, 1.125 to 1.25rem, tracking 0.06em |
| Statement paragraph | Serif caps, 400 with 600 for two or three key words, about 1.75rem, line-height 1.35, centred, max 28 characters wide per line on desktop |
| Body | Sans 400, 1rem (16 px; the references' 13 px is too small for phones), line-height 1.7 |
| Nav and labels | Sans 500, 0.6875 to 0.75rem, caps, tracking 0.14em |
| Field label / value | Label sans 600, value sans 400, both 0.875rem |
| Decorative numerals | Display serif, 300, `clamp(3rem, 7vw, 6rem)`, outlined or at 60% opacity |

**Trilingual caution.** All-caps headings are longer in Portuguese and Spanish,
and accents (Á, Ç, Ñ, Õ) need line-height of at least 1.1 so they are not
clipped. Any chosen display font must be checked for these characters. Long
headings such as "VESTIMENTA Y CLIMA" need a smaller clamp on phones.

---

## 2. Colour

### Observed (sampled)

| | R1 | R2 | R3 |
|---|---|---|---|
| Page background | `#FEFEFE` / `#F8F7F7` | `#FAF6F3` | `#FAF6F3` |
| Panel tint | none | none | `#F1EDE8` |
| Hairline / soft grey | `#D6D6D6` | `#D3D0CE` | `#DEDAD4`, `#C4B8AF` |
| Text / dark | `#4A4A4A`, `#6B6B6B` | `#84705F` (4.5:1 on its background, borderline) | `#705A4E` (6.0:1) |
| Button | none | White fill, dark text, on the photo | Solid `#705A4E` family, light text |
| Accent colour | none | none | none |
| Photos | Black and white | Warm, desaturated, golden | Warm, desaturated |

### Shared
- **Near-white page, one dark tone, no accent colour at all.** Colour comes from the photographs.
- **Low-contrast greys and taupes for structure** (hairlines, panels), never a saturated fill.
- **Photos are graded to match the palette**: all black and white (R1) or all warm and muted (R2, R3).

### Differs
- R1 is cool and neutral (pure greys). R2 and R3 are warm (cream and taupe-brown).
- R3 adds a second surface tone (the beige panels). R1 and R2 are single-surface.

### Proposed palette
Warm like R2/R3, with R1's restraint. Terracotta stays, but demoted from the
main action colour to a rare accent, so it ties to Val'Quirico without breaking
the neutral feel.

| Token | Hex | Use | Contrast on Ivory |
|---|---|---|---|
| Ivory | `#FAF6F3` | Page background | |
| Linen | `#F1EDE8` | Tinted panels behind photos | |
| Stone | `#DEDAD4` | Hairlines, dividers | decorative |
| Taupe | `#C4B8AF` | Line illustrations, disabled | decorative |
| Mocha | `#705A4E` | Solid buttons, secondary text | 6.0:1 |
| Espresso | `#3A2E27` | Headings and body text | about 12.6:1 |
| White | `#FFFFFF` | Photo frames, text and buttons on photos | |
| Terracotta | `#9E4A2B` | Rare accent only: active nav underline, the ampersand | 5.3:1 |

The contrast figures for Espresso and Terracotta on Ivory are calculated from
the current site's very similar cream; they must be re-run with the contrast
script before this palette is locked. R2's own text colour (`#84705F`) is too
light for body text and is not adopted.

**Text on photos** needs a dark gradient behind it (about 35 to 45% black at the
text, fading out) to stay readable. R2 relies on a naturally dark area of its
photo; that cannot be assumed for every hero image.

---

## 3. Spacing and layout grid

### Observed

| | R1 | R2 | R3 |
|---|---|---|---|
| Canvas | Single screen, landscape | Long page | Long page |
| Side margins | About 8% of width | About 6 to 7% | About 8% |
| Content width | Full | About 86% | About 84% |
| Columns | Asymmetric: type takes about 4 of 12, photos about 8 of 12, three equal columns | Centred single column, then 2 text columns, then offset photos | Stacked items; each item is photo (about 8 of 12) plus panel (about 4 of 12), then a 3-part facts row |
| Vertical rhythm | Generous; elements float | About 90 to 120 px between sections | About 80 to 100 px between items |
| Alignment | Left-aligned type, grid-aligned photos | Centred | Left with deliberate offsets |
| Hero | Not a photo hero | Photo fills the first screen (about 62% of the visible page), text centred low | Short photo band (about 22%) with centred title and breadcrumb |

### Shared
- **Whitespace is the main luxury signal.** Every element has clear air around it.
- **A strict underlying grid with a few deliberate breaks** (R1's numerals over the photo edge, R3's panel sliding behind the photo, R2's offset photo pair).
- **Thin vertical lines as connectors** (R1 under each pill, R2 under the flower).

### Differs
- R1 is a poster: one screen, asymmetric. R2 is centred and symmetrical. R3 is modular and repeating.
- Hero height: none, full screen, short band.

### Proposed
- **Grid:** 12 columns, max content width 1200 px, gutters 24 px, side margins `clamp(20px, 6vw, 96px)`. Phone: 4 columns, 20 px margins, 16 px gutters.
- **Spacing scale (8 px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- **Section padding:** 96 to 128 px desktop, 64 px phone. Hero and the statement block get 160 px.
- **Home hero (from R2):** photo fills 100% of the first screen (`100svh`, minimum 560 px), names and date centred in the lower third, one button.
- **Inner page hero (from R3):** short photo band, 38 to 45% of the screen height, page title centred.
- **Hero bottom edge (from R2/R3):** the ivory page rises into the photo as a shallow convex curve, about 40 px deep on desktop and 20 px on phone.
- **Photo and info module (from R3):** photo spans 7 to 8 columns; a Linen panel of 4 to 5 columns sits behind and beside it, offset down by 48 to 64 px; the title sits on the panel; facts sit below in 2 or 3 small label/value columns. On phones this stacks: photo, title, facts.
- **Trio module (from R1):** three pill photos in equal columns with a numeral, a hairline, a small date label and a serif title under each. Natural fit for Friday, Saturday, Sunday. On phones it becomes a horizontal swipe row or a vertical stack.

---

## 4. Corner radius

| | R1 | R2 | R3 |
|---|---|---|---|
| Photos | Full pill (radius = half the width), aspect about 1:1.85 | Square, 0 | Square, 0 |
| Buttons | none | Square, 0 | Square, 0 |
| Panels | Page card about 12 px (presentation mock-up only) | 0 | 0; one quarter-circle decorative block |
| Section edges | Straight | Curved hero bottom | Curved hero bottom |

**Shared:** no medium rounding anywhere. Shapes are either perfectly square or fully curved. The usual 8 to 16 px "app" radius never appears.

**Differs:** R1's curve is in the photos; R2/R3's curve is in the section edge.

**Proposed:**
- Buttons, inputs, panels, framed photos: **0 px** (2 px maximum on inputs for softness).
- Feature photos: **full pill** or **arch** (round top, square bottom). The arch already used on this site stays, as it matches Val'Quirico's doorways and R1's language.
- Section transitions: the convex curve described above.
- Nothing in between.

---

## 5. Borders and shadows

| | R1 | R2 | R3 |
|---|---|---|---|
| Photo frame | None; the photo is cropped by its shape | White border about 6 to 8 px, like a print mat | White border about 6 to 8 px |
| Shadow | None on content | Very faint, soft shadow under framed photos | Same |
| Lines | 1 px vertical hairlines, about 60 px tall | 1 px vertical hairline | None; panels do the dividing |
| Buttons | none | No border, solid white | No border, solid mocha |
| Cards | none | none | Tinted panels, no border, no shadow |

**Shared:** depth is close to flat. Separation comes from space, tone and overlap, not from boxes, outlines or drop shadows.

**Differs:** R1 has no frames at all; R2/R3 treat photos as matted prints.

**Proposed:**
- **Framed photo:** 8 px white border (6 px on phones), shadow `0 8px 30px rgba(58, 46, 39, 0.08)`.
- **Shaped photo (pill or arch):** no border, no shadow.
- **Hairlines:** 1 px Stone. Vertical connector lines 48 to 72 px tall.
- **Panels:** Linen fill, no border, no shadow.
- **Buttons:** solid Mocha with Ivory text, or solid White with Espresso text on photos. An outline button (1 px Espresso) for secondary actions. No shadows.
- **Inputs:** 1 px Mocha border, Ivory fill. This is one place the references give no guidance and readability has to win.

---

## 6. Iconography

| | R1 | R2 | R3 |
|---|---|---|---|
| Functional icons | One thin arrow next to "Direction" | None | None |
| Decoration | A rotating circular text badge ("You are invited") around a small flower | A fine line-drawn flower above a vertical hairline; a handwritten signature | Fine line-drawn botanical sprigs on the panels; a small line monogram on a quarter-circle |
| Logo | Tiny serif monogram | Serif wordmark, centred in the nav | Same |

**Shared:** almost no interface icons. Text labels do the work. Ornament, where present, is a single-weight hairline drawing, about 1 px stroke, with no fill.

**Differs:** R1's ornament is typographic (the circular badge). R2/R3's is botanical.

**Proposed:**
- **No icon set.** Keep text labels. Allowed glyphs: a thin arrow, a plus for the FAQ, the three flags.
- **Line illustrations** at 1 px stroke in Taupe or Mocha, used sparingly on Linen panels. Subjects taken from the place rather than generic florals: an arch, a lantern, a cobblestone pattern, a marigold (cempasúchil), an agave. These would need to be drawn or sourced; none exist yet.
- **Circular text badge** with the date and place around the monogram, as a quiet seal near the hero or footer.
- **Signature:** "With love," followed by the couple's names in a script face or their real handwriting as an image.
- **Flags:** stay as they are, but should sit slightly smaller and quieter inside the tracked-caps nav.

---

## 7. Motion feel

Static screenshots cannot show motion, so this section is inferred from the
style, not observed.

**Character:** slow, soft and sparse, like turning a page. Nothing bounces,
nothing slides far, nothing loops for attention.

| Element | Motion |
|---|---|
| Hero photo | Fades in while settling from 106% to 100% scale over about 1.4 s |
| Hero text | Each line fades up 12 px, staggered by 80 ms, 700 ms each |
| Floating nav | Transparent over the photo; fades to an Ivory background with Espresso text once the page is scrolled past the hero, 250 ms |
| Sections on scroll | Fade up 16 px, 600 ms, once only |
| Shaped photos | Reveal by unmasking from the bottom, 900 ms |
| Hairlines | Draw from top to bottom, 600 ms |
| Framed photo and its panel | Panel arrives 100 ms after the photo, so the overlap reads as two layers |
| Circular badge | One rotation every 20 to 30 s |
| Buttons and links | Colour change only, 200 ms; arrows shift 4 px |

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, plain ease for colour.
- **Hover effects** only on devices with a pointer.
- **Reduced motion:** all of the above switch off; content is simply visible.
- **Implementation:** CSS and a small scroll observer, as now. No animation library is needed, which protects page speed.

---

## 8. Summary: shared and different

### Shared across all three
1. Near-white background, one dark tone, no accent colour.
2. Uppercase light-weight serif for display; tiny tracked-caps sans for navigation and labels.
3. Generous whitespace and a strict grid with a few deliberate overlaps.
4. Radius is all or nothing: square, or fully curved.
5. Flat surfaces. No outlined cards, almost no shadow.
6. Almost no icons; hairline ornament only.
7. Photography is the colour and the emotion, graded consistently.

### Where they differ

| Axis | R1 | R2 | R3 |
|---|---|---|---|
| Temperature | Cool grey | Warm cream | Warm cream |
| Type scale | Extreme | Moderate | Moderate |
| Composition | Asymmetric poster | Centred, symmetrical | Modular, offset |
| Hero | Type-led, no photo hero | Full-screen photo | Short photo band |
| Photo treatment | Pill-shaped, unframed, black and white | Framed print, warm | Framed print on tinted panel, warm |
| Ornament | Typographic badge | Botanical line art, signature | Botanical line art |
| Density | One idea per screen | Low | Medium (real information) |

### What to take from each
- **R1:** the display-serif drama for the names, the pill or arch photo trio with numerals for the three-day weekend, hairline connectors, the circular badge.
- **R2:** full-screen photo hero with the nav floating over it, the curved transition into the page, the centred statement paragraph with weighted words, the signature.
- **R3:** the photo-plus-panel module with small label/value facts, for Venue, Stay, Things to do and Travel, plus the short photo band as the inner-page header.

---

## 9. What this would change on the current site

| Area | Now | Under this spec |
|---|---|---|
| Home hero | Split: names on the left, arch photo on the right | Full-screen photo with names over it |
| Navigation | Solid bar, two rows on desktop | Transparent over the hero, solid after scrolling |
| Headings | Fraunces, sentence case | High-contrast serif, uppercase, tracked |
| Body font | Instrument Sans | Jost or Montserrat |
| Colour | Terracotta buttons and RSVP band, dark dusk bands | Neutral ivory, mocha and espresso; terracotta only as a small accent; dusk bands removed or reduced to the footer |
| Photos | Arch or plain rectangles | Arch or pill for features; white-framed prints on linen panels for information pages |
| Buttons | Pill-shaped | Square |
| Inner page headers | Text with optional arch photo | Short photo band with centred title |

## 10. Risks and open questions

1. **The look depends on photos.** All three references are carried by strong, consistently graded photography. With placeholders the new design will look emptier than the current one. The hero photo in particular must be good, wide enough for desktop, and have a calm area for the text.
2. **Performance.** A full-screen hero photo becomes the largest element the page loads. It needs to be compressed, sized per device and prioritised to keep loading fast on phones.
3. **Small type.** The references' 10 to 13 px text is below a comfortable size for phones and older guests. This spec raises body text to 16 px and keeps tiny caps for short labels only.
4. **All-caps in three languages.** Longer Portuguese and Spanish headings and accented capitals need testing at every size.
5. **Text over photos** must pass contrast checks with the gradient in place, for every hero image chosen.
6. **Decisions:** settled, see "Decisions" at the top.

---

## 11. As built

The site now follows this spec. Where the build differs from the proposal:

| Topic | Proposal | Built | Why |
|---|---|---|---|
| Line-drawing colour | Taupe or mocha | Olive `#6B6F4E` | Reads as Tuscan and separates ornament from text. |
| Text colour | Espresso, to be verified | Espresso `#3A2E27`, 12.2:1 on ivory; mocha 6.0:1; terracotta 5.6:1 | Measured with the contrast script. All pass. |
| Scroll motion | Fade-up on every section | Removed | One orchestrated hero entrance and one reveal (the weekend arches) feel calmer than motion everywhere. |
| Header on desktop | Solid after scrolling | Solid after the top photo; also slides away while scrolling down and returns on scrolling up | Two rows are needed to fit nine links in all three languages; hiding it on the way down gives the page back. |
| Trio photo shape | Pill or arch | Arch | Matches the doorways of Val'Quirico. |
| Page numbers 01 to 09 | Not specified | Removed | Pages are not a sequence. Only the three days carry numerals (05, 06, 07). |
| Signature | Script face or handwriting image | Cormorant Garamond italic | No fourth font. Replace with a scan of real handwriting if wanted. |
| Body text size | 16 px | 17 px | Jost runs small. |
| Line drawings | Drawn or sourced | Six simple drawings made for this site: olive, cypress, lantern, arch, marigold, agave | They are plain hairline sketches. A commissioned illustrator would do better. |
| Circular badge speed | One turn per 20 to 30 s | One turn per 60 s | Slower is quieter. |

Not yet done: the hero and banner text has only been checked over placeholders,
not over real photos; it must be re-checked once photos are added.
