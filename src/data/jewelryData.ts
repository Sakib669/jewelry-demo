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
    image: "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=80&w=1000&auto=format&fit=crop",
    href: "#bracelets",
    description: "Sculptural links, hand-woven cuffs, and delicate gold chains designed to grace every gesture.",
  },
  {
    id: "rings",
    title: "Rings",
    tag: "Open Page",
    itemCount: 22,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    href: "#rings",
    description: "Timeless solitaire diamonds, hammered eternity bands, and bespoke ceremonial heirlooms.",
  },
  {
    id: "earrings",
    title: "Earrings",
    tag: "Open Page",
    itemCount: 18,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=80&w=1000&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    ],
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    quote:
      "\"Absolutely in love with my custom necklace from ÉLÉOR. The attention to detail, tactile weight of the 18k gold, and the quality of the materials surpassed my expectations.\"",
    rating: 5,
    purchasedItem: "Layer Cake Necklace Set",
  },
  {
    id: "t2",
    author: "Olivia S.",
    role: "Art Curator, Zurich",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    quote:
      "\"I have been a patron of this atelier for three years. Each bespoke ring is an architectural sculpture. The customer concierge makes bespoke sizing effortless.\"",
    rating: 5,
    purchasedItem: "Celestial Cocktail Ring",
  },
  {
    id: "t3",
    author: "Marcus V.",
    role: "Architectural Director, Paris",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
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
  portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
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
  heroImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
};
