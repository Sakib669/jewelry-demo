# Design System: ÉLÉOR Fine Jewelry Atelier

## 1. Visual Theme & Atmosphere
An opulent, warm editorial jewelry atelier experience blending Milanese goldsmith heritage with contemporary high-end luxury e-commerce. The aesthetic is warm, illuminated, and tactile — evoking amber champagne reflections, brushed yellow gold, polished gemstones, and creamy silk textures.

- **Density:** 4/10 (Art Gallery Spaciousness & Balanced Editorial Rhythm)
- **Variance:** 7/10 (Offset Asymmetry, Alternating Focal Heights, Varied Card Proportions)
- **Motion:** 6/10 (Fluid GSAP Parallax, Smooth Carousel Physics, Staggered Reveal Choreography)

## 2. Color Palette & Roles
- **Warm Parchment Canvas** (`#FBF8F3`) — Primary background canvas, soft warm stone
- **Deep Midnight Charcoal** (`#131416`) — Dominant text, navigation accents, high-contrast footer
- **Imperial Crimson / Wine Accent** (`#8B1D24`) — Single brand accent for urgent promotions, holiday banners, and primary CTA buttons
- **Terracotta Rose** (`#9E3831`) — Secondary warm callout and active badges
- **Champagne Gold Border** (`#E8E0D2`) — Whispered 1px hairline dividers and luxury card outlines
- **Lustrous Gold** (`#D4AF37`) — Jewel badge reflections, star ratings, and metallic highlights
- **Alabaster Surface** (`#FFFFFF`) — High-clarity product card backgrounds and popover drawers
- **Muted Silt Gray** (`#706E6B`) — Secondary body copy, specs, and understated timestamps

## 3. Typography Rules
- **Display / Headlines:** `Playfair Display` & `Cormorant Garamond` — High-contrast editorial serifs with delicate italic flourishes, tight tracking on bold, relaxed elegance on titles.
- **Body & Subtitles:** `Outfit` / `Geist` — Modern geometric sans-serif for crystal-clear readability, relaxed line-height (1.6), max 65 characters per line.
- **Micro / Numbers / Currency:** Monospace and track-wide tabular numerals for prices, SKU codes, and metrics (`+300`, `+10`, `+15`).
- **Strictly Banned:** `Inter`, `Comic Sans`, generic `Times New Roman`, purple/neon gradients, and emojis.

## 4. Component Stylings
- **Buttons:**
  - *Primary:* Solid terracotta / imperial wine (`#8B1D24` / `#9E3831`), white crisp typography, subtle -1px translateY and box-shadow depth on hover.
  - *Secondary / Ghost:* Transparent with hairline border (`#131416` or `#E8E0D2`), darkening on hover.
  - *Circle Nav Buttons:* 40px rounded pills with subtle arrow vectors, active scale effect.
- **Product Cards:**
  - Crisp alabaster or warm parchment background with 1px border (`#E8E0D2`).
  - Subtle floating action buttons (Wishlist heart, Quick Add to Cart) with spring transitions.
  - Clear typography with product title and tabular price ($XXX).
- **Category Banners:**
  - Full-bleed atmospheric image containers with dark tinted title badges ("Bracelets", "Rings", "Earrings") and "Open Page" tags.
- **Hero Video Preview:**
  - Inset rounded preview card with an illuminated frosted-glass play button trigger.
- **Promotional Badge Cards:**
  - Angled wine-red card with radial shimmer, gold chain preview, and circular arrow CTA.
- **Drawers & Modals:**
  - Slide-in Cart Drawer and Wishlist Drawer from the right edge with backdrop blur (`backdrop-blur-md`).
  - Persistent state in browser `localStorage`.

## 5. Layout Principles
- **AIDA Structure:**
  1. *Attention:* Expansive hero with monumental serif display typography ("Jewelry"), golden gemstone ring centerpiece, video preview badge, and limited-edition promotional pill.
  2. *Interest:* Tri-card "Our Collections" editorial gallery with interactive category links.
  3. *Desire:* Designer & CEO atelier story with master portrait and high-impact numerical milestones (`+300`, `+10`, `+15`).
  4. *Action:* "Last Arrivals" curated 4-item carousel with direct cart actions, followed by "Our satisfied customers" quotes and the "Discounted holiday collection" banner.
- Full container width `max-w-7xl` with intentional asymmetric whitespace.
- Seamless mobile responsiveness collapsing to single-column without horizontal clipping.

## 6. Motion Philosophy
- GSAP `@gsap/react` for smooth entrance reveals and ScrollTrigger effects.
- Micro-interactions on buttons, hearts, and product previews.
- Confetti celebration upon completing mock checkout.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in UI or copy.
- No generic filler text or broken lorem ipsum; all storytelling is authored specifically for fine jewelry craftsmanship.
- No `Inter` font or purple neon AI glow.
- No plain black `#000000`; always refined midnight charcoal `#131416`.
- No horizontal page overflow.
