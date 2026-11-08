"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/data/jewelryData";
import { Product } from "@/types/jewelry";
import { Heart, ShoppingBag, ArrowLeft, ArrowRight, Eye, Sparkles } from "lucide-react";

interface LastArrivalsSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function LastArrivalsSection({
  selectedCategory,
  onSelectCategory,
}: LastArrivalsSectionProps) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
    setQuickViewProduct,
  } = useShop();

  const [pageIndex, setPageIndex] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Filter items
  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const pageSize = 4;
  const maxPages = Math.ceil(filteredProducts.length / pageSize) || 1;

  const currentProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  const handleNextPage = () => {
    setPageIndex((prev) => (prev + 1) % maxPages);
  };

  const handlePrevPage = () => {
    setPageIndex((prev) => (prev - 1 + maxPages) % maxPages);
  };

  const categories = [
    { id: "all", label: "All Creations" },
    { id: "bracelets", label: "Bracelets" },
    { id: "rings", label: "Rings" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Necklaces" },
  ];

  return (
    <section id="arrivals" className="w-full bg-[#FBF8F3] py-20 sm:py-28 border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#131416] font-normal">
              Last Arrivals
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#706E6B] font-light leading-relaxed">
              Crafted with precision and passion, these pieces are destined to
              become cherished heirlooms.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                onSelectCategory(cat.id);
                setPageIndex(0);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-300 font-medium whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#131416] text-white shadow-xs"
                  : "bg-white text-[#5C5A56] border border-[#E8E0D2] hover:border-[#131416]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {currentProducts.map((product) => {
            const isSaved = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-white border border-[#E8E0D2] rounded-xs p-4 sm:p-5 shadow-2xs hover:shadow-xl transition-all duration-500"
              >
                {/* Floating Action Buttons: Wishlist & Cart */}
                <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      isSaved
                        ? "bg-[#8B1D24] text-white border-[#8B1D24]"
                        : "bg-white/90 text-[#131416] border-[#E8E0D2] hover:border-[#131416]"
                    }`}
                    aria-label={`Save ${product.name} to wishlist`}
                  >
                    <Heart
                      className={`w-4 h-4 ${isSaved ? "fill-current" : "stroke-[1.5]"}`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }}
                    className="w-8 h-8 rounded-full bg-[#131416] text-white flex items-center justify-center hover:bg-[#8B1D24] transition-colors shadow-xs"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                </div>

                {/* Product Image with Quick View on hover */}
                <div
                  onClick={() => setQuickViewProduct(product)}
                  className="relative aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-5 cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Quick view overlay pill */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/95 text-[#131416] text-[11px] font-medium tracking-wider uppercase rounded-full shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </span>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="mt-auto">
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="font-serif text-base sm:text-lg text-[#131416] group-hover:text-[#8B1D24] transition-colors cursor-pointer leading-snug line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-xs sm:text-sm font-mono text-[#5C5A56] font-medium tracking-tight">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs font-mono text-[#A39E98] line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Carousel Controls Bar */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#E8E0D2]">
          {/* Left: Arrow controls */}
          <div className="flex items-center space-x-3 order-2 sm:order-1">
            <button
              type="button"
              onClick={handlePrevPage}
              className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn"
              aria-label="Previous Page"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextPage}
              className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn"
              aria-label="Next Page"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center: Dash pagination indicators */}
          <div className="flex items-center space-x-2 order-3 sm:order-2">
            {Array.from({ length: maxPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPageIndex(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  pageIndex === idx ? "w-8 bg-[#131416]" : "w-4 bg-[#D6CDC2] hover:bg-[#8B1D24]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right: Product count + All Products Button */}
          <div className="flex items-center space-x-4 order-1 sm:order-3">
            <span className="text-xs sm:text-sm text-[#706E6B] font-mono">
              48 products
            </span>
            <button
              type="button"
              onClick={() => setShowAllProducts((prev) => !prev)}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#9E3831] hover:bg-[#8B1D24] text-white text-xs tracking-[0.1em] uppercase font-medium rounded-xs shadow-xs transition-all luxury-btn"
            >
              {showAllProducts ? "Paginated view" : "All products"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
