"use client";

import React from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/data/jewelryData";
import { X, Trash2, ShoppingBag, Eye } from "lucide-react";

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
    setQuickViewProduct,
  } = useShop();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FBF8F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E0D2] z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E0D2] flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl text-[#131416] tracking-wide">
              Saved Pieces
            </span>
            <span className="text-xs font-mono text-[#706E6B] bg-[#F4EFE6] px-2 py-0.5 rounded-full">
              {savedProducts.length}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-[#706E6B] hover:text-[#131416] transition-colors"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <p className="font-serif text-xl text-[#706E6B]">
                Your wishlist is currently empty
              </p>
              <p className="text-xs text-[#A39E98] max-w-xs mx-auto">
                Click the delicate heart icon on any jewelry piece to save it for future curation.
              </p>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="mt-4 inline-block px-6 py-2.5 bg-[#9E3831] text-white text-xs uppercase tracking-wider rounded-xs luxury-btn"
              >
                Discover Creations
              </button>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E8E0D2] rounded-xs p-4 flex space-x-4 items-center shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setQuickViewProduct(product);
                  }}
                  className="relative w-20 h-20 rounded-xs overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#F4EFE6] cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setQuickViewProduct(product);
                    }}
                    className="font-serif text-sm text-[#131416] font-medium truncate cursor-pointer hover:text-[#8B1D24]"
                  >
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-[#706E6B]">{product.material}</p>
                  <p className="text-xs font-mono text-[#131416] font-semibold mt-1">
                    {formatPrice(product.price)}
                  </p>

                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product.id);
                      }}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-[#131416] hover:bg-[#8B1D24] text-white text-[11px] uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className="p-2 text-[#A39E98] hover:text-[#8B1D24] transition-colors"
                  aria-label="Remove from Wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProducts.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E0D2] flex justify-between items-center">
            <span className="text-xs text-[#706E6B]">
              {savedProducts.length} curated {savedProducts.length === 1 ? "heirloom" : "heirlooms"}
            </span>
            <button
              type="button"
              onClick={() => {
                savedProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
              }}
              className="px-4 py-2 bg-[#8B1D24] text-white text-xs uppercase tracking-wider rounded-xs hover:bg-[#78171E] transition-colors luxury-btn"
            >
              Move All to Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
