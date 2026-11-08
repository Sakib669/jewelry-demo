"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { X, Heart, ShoppingBag, ShieldCheck, Gem, Sparkles } from "lucide-react";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
  } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>("Standard (18k)");
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isSaved = isInWishlist(quickViewProduct.id);

  const ringSizes = ["US 5 / 50", "US 6 / 52", "US 7 / 54", "US 8 / 56"];
  const necklaceLengths = ["16 in / 40 cm", "18 in / 45 cm", "20 in / 50 cm"];
  const standardSizes = ["Standard Atelier Fit"];

  const sizeOptions =
    quickViewProduct.category === "rings"
      ? ringSizes
      : quickViewProduct.category === "necklaces"
      ? necklaceLengths
      : standardSizes;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedSize);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FBF8F3] border border-[#E8E0D2] shadow-2xl rounded-xs overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#706E6B] hover:text-[#131416] bg-white/80 rounded-full backdrop-blur-xs transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto h-72 md:h-full min-h-[320px] bg-[#FAF6F0] border-b md:border-b-0 md:border-r border-[#E8E0D2]">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {quickViewProduct.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#8B1D24] text-white text-[10px] tracking-widest uppercase font-mono rounded-xs">
                New Release
              </span>
            )}
          </div>

          {/* Right: Specifications & Purchasing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8B1D24] font-medium font-mono mb-1">
                {quickViewProduct.category}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#131416] font-normal leading-tight">
                {quickViewProduct.name}
              </h3>

              <div className="mt-3 flex items-baseline space-x-3">
                <span className="font-mono text-xl text-[#131416] font-semibold">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="font-mono text-sm text-[#A39E98] line-through">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#5C5A56] font-light leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Gemstone and Material specs */}
              <div className="mt-5 pt-4 border-t border-[#E8E0D2] space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-[#706E6B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>
                    Material: <strong className="text-[#131416] font-medium">{quickViewProduct.material}</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[#706E6B]">
                  <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>
                    Stone: <strong className="text-[#131416] font-medium">{quickViewProduct.gemstone}</strong>
                  </span>
                </div>
              </div>

              {/* Size selection */}
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-wider text-[#706E6B] font-medium mb-2">
                  Atelier Dimensions / Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-xs border transition-all ${
                        selectedSize === s
                          ? "bg-[#131416] text-white border-[#131416]"
                          : "bg-white text-[#5C5A56] border-[#E8E0D2] hover:border-[#131416]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#E8E0D2]">
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 bg-[#8B1D24] hover:bg-[#78171E] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-xs shadow-md flex items-center justify-center space-x-2 transition-all luxury-btn"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`px-4 py-3 border rounded-xs flex items-center justify-center transition-all ${
                    isSaved
                      ? "bg-[#8B1D24] text-white border-[#8B1D24]"
                      : "bg-white text-[#131416] border-[#E8E0D2] hover:border-[#131416]"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-[#706E6B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Certified Conflict-Free & Hallmarked in Valenza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
