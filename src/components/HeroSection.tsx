"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { ATELIER_LOCATION } from "@/data/jewelryData";
import { Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { setIsVideoModalOpen, setQuickViewProduct } = useShop();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#6b4933] via-[#7d563c] to-[#a37956] text-white pt-8 pb-10"
    >
      {/* Background Hero Jewelry Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=2000&auto=format&fit=crop"
          alt="ÉLÉOR Fine High Jewelry Masterpiece"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mix-blend-screen opacity-90 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic ambient vignette & warm golden light overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_60%_35%] from-transparent via-[#452818]/60 to-[#2b170c]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25140b] via-transparent to-[#2a170d]/80 pointer-events-none" />
      </div>

      {/* Top Monumental Headline: "Jewelry" */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        <h1 className="font-serif text-[clamp(4.2rem,14vw,11.5rem)] leading-[0.88] tracking-[-0.03em] text-[#FFF7EC] drop-shadow-sm font-light select-none">
          Jewelry
        </h1>
      </div>

      {/* Main Mid/Lower Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Description + CTA + Video Preview Inset */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <p className="text-sm sm:text-base text-[#F5EBE1] font-light leading-relaxed max-w-md drop-shadow-xs">
              Our curated collection of fine jewelry is designed to captivate and
              celebrate the unique essence of every individual.
            </p>

            <div>
              <a
                href="#arrivals"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#9E3831] hover:bg-[#8B1D24] text-white text-xs tracking-[0.14em] uppercase font-medium rounded-xs shadow-md transition-all luxury-btn"
              >
                Open Store
              </a>
            </div>

            {/* Inset Video Preview Card */}
            <div className="pt-2">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative w-64 sm:w-72 h-36 sm:h-40 rounded-sm overflow-hidden cursor-pointer shadow-xl border border-white/20 bg-black/30 backdrop-blur-xs transition-transform duration-500 hover:scale-[1.02]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"
                  alt="Model wearing handmade fine jewelry"
                  fill
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

                {/* Frosted Play Icon Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-[#131416] shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-3 text-[11px] tracking-wider text-white/90 font-light flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atelier Craftsmanship Film</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Spacer for the Centerpiece Ring */}
          <div className="hidden lg:block lg:col-span-3 min-h-[140px]" />

          {/* Right Column: Floating 50% Promo Card & Address */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-6">
            {/* Promo Card: "Only today - 50% OFF" */}
            <div
              onClick={() => {
                const arrivalSection = document.getElementById("arrivals");
                arrivalSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-72 bg-[#8B1D24] text-white p-5 rounded-xs shadow-2xl cursor-pointer hover:bg-[#78171E] transition-all duration-300 hover:shadow-red-950/40 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg tracking-wide font-normal">
                  Only today - 50% OFF
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-[#8B1D24] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bracelet Preview Thumbnail */}
              <div className="relative w-full h-24 rounded-xs overflow-hidden bg-black/20 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1611591475806-c8541a7c3ce9?q=80&w=500&auto=format&fit=crop"
                  alt="Gold Bracelet Preview 50% Off"
                  fill
                  sizes="250px"
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
