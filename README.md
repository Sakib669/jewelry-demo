# jewelry-demo — ÉLÉOR Haute Joaillerie

A luxury, editorial fine jewelry atelier web application crafted with **Next.js 16+**, **TypeScript**, **pnpm**, **Tailwind CSS**, and **LocalStorage**, inspired by high-end joaillerie ateliers in Valenza, Italy.

Built following `/stitch-design-taste` and `/gpt-taste` design engineering standards, with complete bespoke imagery, non-infringing storytelling, and fluid responsive design across mobile, tablet, and desktop viewports.

---

## Features

- **Hero Experience**: Monumental serif display typography (`Jewelry`), radiant cocktail ring centerpiece, artisanal story copy, "Open Store" CTA, interactive video preview card opening the Valenza craftsmanship film modal, floating wine-red promotional card ("Only today - 50% OFF"), and atelier address.
- **Our Collections Gallery**: Tri-card category gallery (*Bracelets*, *Rings*, *Earrings*) with serif title badges, top-right "Open Page" tags, and category filter routing.
- **CEO & Atelier Designer**: Master goldsmith narrative, "Contact Me" bespoke concierge button, master portrait, and key numerical metrics (`+300` Projects, `+10` Design Awards, `+15` Open Boutiques).
- **Last Arrivals Showcase**: Curated 4-product carousel with persistent wishlist heart toggles, instant add-to-bag triggers, quick-view inspection modal, category filter pills (*All Creations*, *Bracelets*, *Rings*, *Earrings*, *Necklaces*), dash indicators, and full catalog toggle.
- **Client Testimonials Slider**: Verified collector reviews with 5-star ratings, quotes (*Emily G.*, *Olivia S.*), and purchased heirloom badges.
- **Discounted Holiday Banner**: Deep imperial wine red banner with brilliant solitaire diamond ring and "Explore More" CTA.
- **Noir Luxury Footer**: Atelier address in Grava, Alessandria, Italy, concierge email, opening hours, customer service links, and payment method badges (Visa, Mastercard, Amex, Apple Pay, PayPal).
- **Persistent LocalStorage State**:
  - Persistent Shopping Bag with item counter, quantity adjusters, and subtotal calculation.
  - Promo code engine (`HOLIDAY50` grants 50% privilege discount).
  - Secure checkout with confetti particle celebration.
  - Persistent Saved Wishlist with one-click "Move to Bag".
  - Multi-Currency selector (USD `$`, EUR `€`, GBP `£`).
- **Concierge Booking & Video Modals**:
  - Interactive video modal playing fine jewelry atelier craftsmanship documentary.
  - Bespoke commission consultation inquiry modal.
  - Quick-view product preview with ring sizes and chain lengths.
- **Mobile-First Responsiveness**:
  - Fluid typography via `clamp()`.
  - Responsive single-column collapse for all cards and grids under 768px.
  - Mobile slide-out navigation drawer with touch-friendly 44px+ tap targets.

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router & Turbopack)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Context + `localStorage` persistence
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & FX**: [GSAP](https://greensock.com/gsap/) & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: `Cormorant Garamond` (High-contrast editorial serif) & `Outfit` (Modern sans-serif)

---

## Getting Started

### 1. Install dependencies
```bash
pnpm install
```

### 2. Run the development server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
pnpm build
pnpm start -p 3005
```

---

## Design System Tokens

For full design tokens, visual atmosphere, and anti-pattern bans, see [DESIGN.md](./DESIGN.md).

- **Canvas Warm Parchment**: `#FBF8F3`
- **Deep Midnight Charcoal**: `#131416`
- **Imperial Wine Accent**: `#8B1D24`
- **Terracotta Rose**: `#9E3831`
- **Lustrous Gold**: `#D4AF37`
- **Champagne Hairline Border**: `#E8E0D2`

---

## License

MIT License. Designed and engineered for high-performance luxury e-commerce.
