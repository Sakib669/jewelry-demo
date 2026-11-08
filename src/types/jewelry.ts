export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: "bracelets" | "rings" | "earrings" | "necklaces";
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  material: string;
  gemstone: string;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  discountPercentage?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  purchasedItem: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  tag: string;
  itemCount: number;
  image: string;
  href: string;
  description: string;
}

export type Currency = "USD" | "EUR" | "GBP";

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // relative to USD
}
