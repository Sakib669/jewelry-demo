"use client";

import React from "react";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  ATELIER_LOCATION,
  ATELIER_EMAIL,
  ATELIER_PHONE_1,
  ATELIER_PHONE_2,
} from "@/data/jewelryData";
import { useShop } from "@/context/ShopContext";

export default function Footer() {
  const { setIsCartOpen, setIsWishlistOpen, setIsContactModalOpen } = useShop();

  return (
    <footer className="w-full bg-[#131416] text-[#A6A29D] pt-16 sm:pt-20 pb-10 border-t border-[#262422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#262422]">
          {/* Column 1: Brand Info & Payment Badges (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <span className="font-serif text-3xl tracking-[0.25em] text-white font-normal">
              {BRAND_NAME}
            </span>
            <p className="text-xs text-[#8A8681] leading-relaxed max-w-xs font-light">
              {ATELIER_LOCATION}
            </p>
            <p className="text-xs text-[#D6D2CC] font-mono">
              <a
                href={`mailto:${ATELIER_EMAIL}`}
                className="hover:text-white transition-colors underline underline-offset-4 decoration-[#8B1D24]"
              >
                {ATELIER_EMAIL}
              </a>
            </p>

            {/* Payment Method Badges */}
            <div className="pt-2 flex items-center space-x-2">
              <span className="px-2 py-1 bg-[#262422] text-[10px] font-bold tracking-widest text-[#D4AF37] rounded-xs border border-[#3D3A36]">
                VISA
              </span>
              <span className="px-2 py-1 bg-[#262422] text-[10px] font-bold tracking-wider text-[#FF5F00] rounded-xs border border-[#3D3A36]">
                MC
              </span>
              <span className="px-2 py-1 bg-[#262422] text-[10px] font-bold tracking-wider text-[#006FCF] rounded-xs border border-[#3D3A36]">
                AMEX
              </span>
              <span className="px-2 py-1 bg-[#262422] text-[10px] font-medium tracking-wide text-white rounded-xs border border-[#3D3A36]">
                APPLE PAY
              </span>
              <span className="px-2 py-1 bg-[#262422] text-[10px] font-bold tracking-wider text-[#003087] rounded-xs border border-[#3D3A36]">
                PAYPAL
              </span>
            </div>
          </div>

          {/* Column 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm tracking-widest uppercase text-white font-medium mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Our Collections
                </a>
              </li>
              <li>
                <a href="#designer" className="hover:text-white transition-colors">
                  Atelier Heritage
                </a>
              </li>
              <li>
                <a href="#arrivals" className="hover:text-white transition-colors">
                  Store
                </a>
              </li>
              <li>
                <a href="#holiday" className="hover:text-white transition-colors text-[#D4AF37]">
                  Holiday Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm tracking-widest uppercase text-white font-medium mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-xs font-light">
              <p className="font-mono text-white/90">{ATELIER_PHONE_1}</p>
              <p className="font-mono text-white/90">{ATELIER_PHONE_2}</p>
              <div className="pt-3 text-[11px] text-[#706E6B] leading-relaxed">
                <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday – Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 4: Customer Service (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm tracking-widest uppercase text-white font-medium mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Shopping Bag
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Saved Wishlist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Bespoke Commission
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Certificate of Authenticity
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Privacy Policy & Ethics
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 text-center text-xs text-[#5C5A56] font-light">
          <p>Copyright © 2026 {BRAND_NAME} Atelier. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
