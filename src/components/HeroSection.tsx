"use client";

import React from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { ATELIER_LOCATION } from "@/data/jewelryData";
import { Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { setIsVideoModalOpen } = useShop();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[680px] lg:h-[780px] flex flex-col justify-between overflow-hidden bg-[#3b2315] text-white pt-6 pb-8 sm:pb-12"
    >
      {/* Background Hero Jewelry Artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ring.jpg"
          alt="ÉLÉOR Haute Joaillerie Masterpiece Ring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mix-blend-lighten opacity-80 scale-100 sm:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Warm golden and chocolate ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a170d]/90 via-[#3a2012]/60 to-[#22120a]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-amber-600/15 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Top Monumental Headline: "Jewelry" */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        <h1 className="font-serif text-[clamp(3.8rem,13vw,10.5rem)] leading-[0.9] tracking-[-0.03em] text-[#FFF9F2] drop-shadow-md font-light select-none">
          Jewelry
        </h1>
      </div>

      {/* Main Mid/Lower Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Description + CTA + Video Preview Inset */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <p className="text-xs sm:text-sm text-[#F5EBE1] font-light leading-relaxed max-w-sm drop-shadow-xs">
              Our curated collection of fine jewelry is designed to captivate and
              celebrate the unique essence of every individual.
            </p>

            <div>
              <a
                href="#arrivals"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#9E3831] hover:bg-[#8B1D24] text-white text-xs tracking-[0.14em] uppercase font-medium rounded-xs shadow-md transition-all luxury-btn"
              >
                Open Store
              </a>
            </div>

            {/* Inset Video Preview Card */}
            <div className="pt-1">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative w-full sm:w-64 h-32 sm:h-36 rounded-xs overflow-hidden cursor-pointer shadow-xl border border-white/20 bg-black/40 backdrop-blur-xs transition-transform duration-500 hover:scale-[1.02]"
              >
                <Image
                  src="/images/hero-model.jpg"
                  alt="Model wearing handmade fine jewelry"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                {/* Frosted Play Icon Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#131416] shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 text-[10px] tracking-wider text-white/90 font-light flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atelier Craftsmanship Film</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Spacer for Desktop centering */}
          <div className="hidden lg:block lg:col-span-3 min-h-[120px]" />

          {/* Right Column: Floating 50% Promo Card & Address */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-5">
            {/* Promo Card: "Only today - 50% OFF" */}
            <div
              onClick={() => {
                const arrivalSection = document.getElementById("arrivals");
                arrivalSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-64 bg-[#8B1D24] text-white p-4 sm:p-5 rounded-xs shadow-2xl cursor-pointer hover:bg-[#78171E] transition-all duration-300 hover:shadow-red-950/40 hover:-translate-y-1 group border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-base sm:text-lg tracking-wide font-normal">
                  Only today - 50% OFF
                </span>
                <div className="w-7 h-7 rounded-full bg-white text-[#8B1D24] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bracelet Preview Thumbnail */}
              <div className="relative w-full h-20 sm:h-24 rounded-xs overflow-hidden bg-black/30 border border-white/10">
                <Image
                  src="/images/hero-bracelet-deal.jpg"
                  alt="Gold Bracelet Preview 50% Off"
                  fill
                  sizes="(max-width: 640px) 100vw, 250px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Atelier Address Watermark */}
            <div className="text-left lg:text-right text-[11px] sm:text-xs text-[#EBDBC9]/80 font-light tracking-wide max-w-xs">
              <p>{ATELIER_LOCATION}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
