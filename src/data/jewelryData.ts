import { Product, CollectionItem, Testimonial } from "@/types/jewelry";

export const BRAND_NAME = "ÉLÉOR";
export const BRAND_TAGLINE = "Haute Joaillerie & Artisanal Goldsmiths";
export const ATELIER_LOCATION = "Via delle Azalee 48, Grava, Alessandria, 15040, Italy";
export const ATELIER_EMAIL = "concierge@eleor-joaillerie.com";
export const ATELIER_PHONE_1 = "+12 3 4567 8900";
export const ATELIER_PHONE_2 = "+12 3 4567 8901";

export const CURRENCIES = {
  USD: { code: "USD", symbol: "$", rate: 1.0 },
  EUR: { code: "EUR", symbol: "€", rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", rate: 0.79 },
} as const;

export const FEATURED_COLLECTIONS: CollectionItem[] = [
  {
    id: "bracelets",
    title: "Bracelets",
    tag: "Open Page",
    itemCount: 16,
    image: "/images/collection-bracelets.jpg",
    href: "#bracelets",
    description: "Sculptural links, hand-woven cuffs, and delicate gold chains designed to grace every gesture.",
  },
  {
    id: "rings",
    title: "Rings",
    tag: "Open Page",
    itemCount: 22,
    image: "/images/collection-rings.jpg",
    href: "#rings",
    description: "Timeless solitaire diamonds, hammered eternity bands, and bespoke ceremonial heirlooms.",
  },
  {
    id: "earrings",
    title: "Earrings",
    tag: "Open Page",
    itemCount: 18,
    image: "/images/collection-earrings.jpg",
    href: "#earrings",
    description: "Baroque pearls, cascading diamond drops, and architectural gold hoops catching ambient light.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1-earrings-heart-locket",
    name: "Earrings Heart Locket",
    slug: "earrings-heart-locket",
    price: 620,
    originalPrice: 750,
    category: "earrings",
    rating: 4.9,
    reviewsCount: 38,
    image: "/images/product-heart-locket.jpg",
    gallery: ["/images/product-heart-locket.jpg"],
    description:
      "Handcrafted in 18k yellow gold, this romantic puffed heart drop features a delicate hidden hinge compartment, celebrating cherished memories with radiant warmth.",
    material: "18k Recycled Yellow Gold",
    gemstone: "Micro-pavé Natural Diamond",
    inStock: true,
    isNew: true,
    isBestseller: true,
  },
  {
    id: "p2-layer-cake-necklace",
    name: "Layer Cake Necklace Set",
    slug: "layer-cake-necklace-set",
    price: 1200,
    originalPrice: 1450,
    category: "necklaces",
    rating: 5.0,
    reviewsCount: 52,
    image: "/images/product-layer-necklace.jpg",
    gallery: ["/images/product-layer-necklace.jpg"],
    description:
      "A harmonious pairing of two hand-assembled curb and rope chains punctuated by a brilliant-cut bezel diamond and interlocking solar rings in solid 18k gold.",
    material: "18k Solid Yellow Gold",
    gemstone: "0.28ct F-VS1 Round Brilliant Diamond",
    inStock: true,
    isNew: true,
    isBestseller: true,
  },
  {
    id: "p3-t1-circle-pendant",
    name: "T1 Circle Pendant",
    slug: "t1-circle-pendant",
    price: 1800,
    originalPrice: 2100,
    category: "necklaces",
    rating: 4.8,
    reviewsCount: 29,
    image: "/images/product-circle-pendant.jpg",
    gallery: ["/images/product-circle-pendant.jpg"],
    description:
      "A continuous pavé halo of sustainably sourced conflict-free diamonds suspended from an elongated anchor link chain. Minimalist geometry elevated to pure art.",
    material: "18k Fairmined Yellow Gold",
    gemstone: "0.65ct Diamond Halo Pavé",
    inStock: true,
    isNew: true,
  },
  {
    id: "p4-gold-bracelet-texture",
    name: "Gold bracelet with texture",
    slug: "gold-bracelet-with-texture",
    price: 800,
    originalPrice: 950,
    category: "bracelets",
    rating: 4.9,
    reviewsCount: 44,
    image: "/images/product-gold-bracelet.jpg",
    gallery: ["/images/product-gold-bracelet.jpg"],
    description:
      "Dual stacked bangles sculpted with ancient Florentine hand-engraved striations, diffusing candlelit shimmer along the wrist with an easy snap clasp.",
    material: "18k Brushed & Chiseled Gold",
    gemstone: "Satin Finish Detailing",
    inStock: true,
    isNew: true,
  },
  {
    id: "p5-celestial-cocktail-ring",
    name: "Celestial Quartz Cocktail Ring",
    slug: "celestial-quartz-cocktail-ring",
    price: 2450,
    originalPrice: 2800,
    category: "rings",
    rating: 5.0,
    reviewsCount: 19,
    image: "/images/hero-ring.jpg",
    gallery: ["/images/hero-ring.jpg"],
    description:
      "A magnificent center champagne smoky quartz surrounded by oval-cut prasiolites set in intricate reticulated filigree gold work.",
    material: "18k Filigree Yellow Gold",
    gemstone: "Champagne Quartz & Prasiolite",
    inStock: true,
    isBestseller: true,
  },
  {
    id: "p6-baroque-pearl-drops",
    name: "Aura Baroque Pearl Drops",
    slug: "aura-baroque-pearl-drops",
    price: 740,
    category: "earrings",
    rating: 4.9,
    reviewsCount: 27,
    image: "/images/collection-earrings.jpg",
    gallery: ["/images/collection-earrings.jpg"],
    description:
      "Organic lustrous freshwater baroque pearls gracefully anchored beneath hand-beaten gold caps. Lightweight and comfortable for day-to-evening allure.",
    material: "18k Gold Plated Sterling Silver",
    gemstone: "Natural Freshwater Baroque Pearl",
    inStock: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Emily G.",
    role: "Verified Collector, Milan",
    avatar: "/images/testimonial-emily.jpg",
    quote:
      "\"Absolutely in love with my custom necklace from ÉLÉOR. The attention to detail, tactile weight of the 18k gold, and the quality of the materials surpassed my expectations.\"",
    rating: 5,
    purchasedItem: "Layer Cake Necklace Set",
  },
  {
    id: "t2",
    author: "Olivia S.",
    role: "Art Curator, Zurich",
    avatar: "/images/testimonial-olivia.jpg",
    quote:
      "\"I have been a patron of this atelier for three years. Each bespoke ring is an architectural sculpture. The customer concierge makes bespoke sizing effortless.\"",
    rating: 5,
    purchasedItem: "Celestial Cocktail Ring",
  },
  {
    id: "t3",
    author: "Antoine & Sophie",
    role: "Private Patrons, Paris",
    avatar: "/images/designer-portrait.jpg",
    quote:
      "\"Commissioned wedding bands for our anniversary. The Florentine brushed texture catches ambient sunlight in a way photos cannot capture. Exquisite heirloom craft.\"",
    rating: 5,
    purchasedItem: "Dual Textured Bangles",
  },
];

export const ATELIER_STORY = {
  title: "CEO and designer",
  founderName: "Antoine de Valois",
  founderTitle: "Master Goldsmith & Creative Director",
  bioParagraph1:
    "Born into four generations of Valenza jewelry masters, Antoine merges renaissance hand-filigree techniques with clean contemporary architecture. Every piece begins with a hand-drawn gouache rendering and responsibly sourced fairmined metals.",
  bioParagraph2:
    "Our studio rejects mass production. Instead, each collection is produced in small, numbered releases where master artisans hand-set every stone under microscopes, ensuring durability across generations.",
  portrait: "/images/designer-portrait.jpg",
  metrics: [
    { value: "+300", label: "Successful projects", detail: "Bespoke high jewelry commissions" },
    { value: "+10", label: "Awards for the best design", detail: "Geneva & Milan Joaillerie Honors" },
    { value: "+15", label: "Open stores", detail: "Ateliers & private salons across Europe" },
  ],
};

export const HOLIDAY_PROMO = {
  title: "Discounted holiday collection",
  subtitle:
    "We have selected for you the best collection for the upcoming holiday with a pleasant discount. Every heirloom arrives wrapped in our signature velvet keepsake casket.",
  discountTag: "Exclusive 25% - 50% Privileged Savings",
  ctaText: "Explore More",
  heroImage: "/images/holiday-diamond-ring.jpg",
};
