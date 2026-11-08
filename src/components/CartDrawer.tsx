"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    formatPrice,
    cartTotal,
    triggerCheckoutCelebration,
    showToast,
  } = useShop();

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "HOLIDAY50") {
      setDiscountPercent(50);
      showToast("50% Holiday Discount Applied!");
    } else if (promoCode.trim().toUpperCase() === "ELEOR10") {
      setDiscountPercent(10);
      showToast("10% Patron Discount Applied!");
    } else {
      showToast("Invalid promo code. Try 'HOLIDAY50'");
    }
  };

  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      triggerCheckoutCelebration();
      setOrderComplete(true);
      setIsCheckingOut(false);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FBF8F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E0D2] z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E0D2] flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl text-[#131416] tracking-wide">
              Your Selection
            </span>
            <span className="text-xs font-mono text-[#706E6B] bg-[#F4EFE6] px-2 py-0.5 rounded-full">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#706E6B] hover:text-[#131416] transition-colors"
            aria-label="Close Shopping Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderComplete ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#8B1D24]/10 text-[#8B1D24] mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#131416]">
                Merci Beaucoup!
              </h3>
              <p className="text-xs text-[#706E6B] leading-relaxed max-w-xs mx-auto">
                Your heirloom commission order has been recorded in our Valenza atelier.
                Our concierge will contact you with tracking details shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderComplete(false);
                  setIsCartOpen(false);
                }}
                className="mt-4 px-6 py-2.5 bg-[#131416] text-white text-xs uppercase tracking-widest rounded-full"
              >
                Return to Gallery
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <p className="font-serif text-xl text-[#706E6B]">
                Your shopping bag is empty
              </p>
              <p className="text-xs text-[#A39E98] max-w-xs mx-auto">
                Explore our fine jewelry collections and select pieces to cherish for lifetimes.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 inline-block px-6 py-2.5 bg-[#9E3831] text-white text-xs uppercase tracking-wider rounded-xs luxury-btn"
              >
                Browse Arrivals
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="bg-white border border-[#E8E0D2] rounded-xs p-3.5 flex space-x-4 items-center shadow-2xs"
                >
                  <div className="relative w-20 h-20 rounded-xs overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#F4EFE6]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm text-[#131416] font-medium truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#706E6B] mt-0.5">
                      {item.selectedSize ? `Size: ${item.selectedSize}` : "18k Solid Gold"}
                    </p>
                    <p className="text-xs font-mono text-[#131416] font-semibold mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-xs border border-[#E8E0D2] flex items-center justify-center text-[#131416] hover:bg-[#F4EFE6]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono font-medium px-1">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-xs border border-[#E8E0D2] flex items-center justify-center text-[#131416] hover:bg-[#F4EFE6]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-[#A39E98] hover:text-[#8B1D24] transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="pt-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. HOLIDAY50)"
                    className="flex-1 px-3 py-2 text-xs bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#131416] text-white text-xs uppercase tracking-wider rounded-xs hover:bg-[#8B1D24] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer with totals */}
        {!orderComplete && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E0D2] space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#706E6B]">
                <span>Subtotal</span>
                <span className="font-mono">{formatPrice(cartTotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#8B1D24] font-medium">
                  <span>Holiday Discount ({discountPercent}%)</span>
                  <span className="font-mono">-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#706E6B]">
                <span>Insured Valenza Courier</span>
                <span className="text-emerald-700 font-medium">Complimentary</span>
              </div>
              <div className="pt-2 border-t border-[#E8E0D2] flex justify-between text-base font-serif text-[#131416] font-semibold">
                <span>Total</span>
                <span className="font-mono">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isCheckingOut}
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#8B1D24] hover:bg-[#78171E] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-xs shadow-md flex items-center justify-center space-x-2 transition-all luxury-btn disabled:opacity-50"
            >
              <span>{isCheckingOut ? "Processing Heirloom Order..." : "Proceed to Secure Checkout"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-[#706E6B] font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Complimentary insured shipping & certificate included</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
