"use client";

import React, { useState } from "react";
import { useShop } from "@/context/ShopContext";
import { BRAND_NAME, ATELIER_LOCATION, ATELIER_PHONE_1 } from "@/data/jewelryData";
import { Currency } from "@/types/jewelry";
import { ShoppingBag, Heart, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsContactModalOpen,
    currency,
    setCurrency,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side: Hamburger + Links */}
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#131416] hover:text-[#8B1D24] transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <div className="w-6 flex flex-col space-y-1.5 cursor-pointer">
                  <span className="block h-[1.5px] w-6 bg-current"></span>
                  <span className="block h-[1.5px] w-4 bg-current"></span>
                </div>
              </button>

              <div className="h-4 w-[1px] bg-[#E8E0D2] hidden sm:block" />

              <nav className="hidden md:flex items-center space-x-8 text-[13px] tracking-[0.08em] uppercase text-[#131416]/80 font-medium">
                <a
                  href="#hero"
                  className="hover:text-[#8B1D24] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B1D24] hover:after:w-full after:transition-all"
                >
                  Home
                </a>
                <a
                  href="#collections"
                  className="hover:text-[#8B1D24] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B1D24] hover:after:w-full after:transition-all"
                >
                  About Us
                </a>
                <a
                  href="#arrivals"
                  className="hover:text-[#8B1D24] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#8B1D24] hover:after:w-full after:transition-all"
                >
                  Store
                </a>
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="text-center absolute left-1/2 -translate-x-1/2">
              <a
                href="#hero"
                className="inline-block group focus:outline-none"
                aria-label="ÉLÉOR Home"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] text-[#131416] font-normal group-hover:text-[#8B1D24] transition-colors">
                  {BRAND_NAME}
                </span>
              </a>
            </div>

            {/* Right side: Currency, Wishlist, Contact Us, Cart */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Currency Selector */}
              <div className="hidden lg:flex items-center border border-[#E8E0D2] rounded-full px-2.5 py-1 text-xs text-[#706E6B] space-x-1">
                {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={`px-1.5 py-0.5 rounded-full transition-all text-[11px] font-mono ${
                      currency === c
                        ? "bg-[#131416] text-white font-medium shadow-xs"
                        : "hover:text-[#131416]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-[#131416] hover:text-[#8B1D24] transition-colors focus:outline-none"
                aria-label={`Wishlist (${wishlist.length})`}
              >
                <Heart className="w-5 h-5 stroke-[1.5]" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#8B1D24] text-white text-[10px] font-mono flex items-center justify-center font-medium animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Contact Us button */}
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[12px] tracking-[0.1em] uppercase font-medium text-[#131416] border border-[#131416] rounded-full hover:bg-[#131416] hover:text-white transition-all luxury-btn"
              >
                Contact Us
              </button>

              {/* Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-[#131416] hover:text-[#8B1D24] transition-colors border border-[#E8E0D2] rounded-full hover:border-[#8B1D24] focus:outline-none"
                aria-label={`Shopping Cart (${cartCount})`}
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8B1D24] text-white text-[10px] font-mono flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-sm bg-[#FBF8F3] h-full shadow-2xl flex flex-col justify-between p-8 border-r border-[#E8E0D2]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E0D2]">
                <span className="font-serif text-2xl tracking-[0.25em] text-[#131416]">
                  {BRAND_NAME}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#706E6B] hover:text-[#131416]"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-6">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#131416] hover:text-[#8B1D24] transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
                <a
                  href="#collections"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#131416] hover:text-[#8B1D24] transition-colors flex items-center justify-between"
                >
                  <span>Our Collections</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
                <a
                  href="#designer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#131416] hover:text-[#8B1D24] transition-colors flex items-center justify-between"
                >
                  <span>Atelier & Designer</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
                <a
                  href="#arrivals"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#131416] hover:text-[#8B1D24] transition-colors flex items-center justify-between"
                >
                  <span>Last Arrivals</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
                <a
                  href="#holiday"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-[#8B1D24] hover:text-[#9E3831] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Holiday Collection</span>
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              </nav>

              {/* Currency on mobile */}
              <div className="mt-10 pt-6 border-t border-[#E8E0D2]">
                <p className="text-xs uppercase tracking-widest text-[#706E6B] mb-3">Currency</p>
                <div className="flex space-x-2">
                  {(["USD", "EUR", "GBP"] as Currency[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono border ${
                        currency === c
                          ? "bg-[#131416] text-white border-[#131416]"
                          : "border-[#E8E0D2] text-[#131416]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E0D2] text-xs text-[#706E6B] space-y-2">
              <p className="font-serif text-sm text-[#131416] font-medium">Boutique Atelier</p>
              <p>{ATELIER_LOCATION}</p>
              <p>{ATELIER_PHONE_1}</p>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="w-full mt-4 py-3 bg-[#8B1D24] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-full"
              >
                Inquire With Concierge
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
