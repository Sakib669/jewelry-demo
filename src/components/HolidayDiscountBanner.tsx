"use client";

import React from "react";
import Image from "next/image";
import { HOLIDAY_PROMO } from "@/data/jewelryData";
import { ArrowRight, Sparkles } from "lucide-react";

interface HolidayDiscountBannerProps {
  onExplore?: () => void;
}

export default function HolidayDiscountBanner({ onExplore }: HolidayDiscountBannerProps) {
  const handleExploreClick = () => {
    if (onExplore) {
      onExplore();
    } else {
      const arrivals = document.getElementById("arrivals");
      arrivals?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="holiday" className="relative w-full bg-[#8B1D24] text-white overflow-hidden py-16 sm:py-24">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_80%_50%] from-[#b32731]/40 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading + Subtitle + White CTA button */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 text-white/80 text-xs tracking-[0.2em] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#F4EFE6]" />
              <span>{HOLIDAY_PROMO.discountTag}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight leading-[1.05]">
              {HOLIDAY_PROMO.title}
            </h2>

            <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed max-w-xl">
              {HOLIDAY_PROMO.subtitle}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleExploreClick}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#131416] hover:bg-[#FBF8F3] text-xs tracking-[0.14em] uppercase font-medium rounded-xs shadow-lg transition-all luxury-btn"
              >
                <span>{HOLIDAY_PROMO.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Diamond Ring Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-96 aspect-square rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-black/20">
              <Image
                src={HOLIDAY_PROMO.heroImage}
                alt="Discounted Holiday Solitaire Diamond Ring"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center scale-110 hover:scale-115 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
