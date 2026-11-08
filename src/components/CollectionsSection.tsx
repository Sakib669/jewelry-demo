"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FEATURED_COLLECTIONS } from "@/data/jewelryData";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CollectionsSectionProps {
  onSelectCategory?: (category: string) => void;
}

export default function CollectionsSection({ onSelectCategory }: CollectionsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_COLLECTIONS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_COLLECTIONS.length) % FEATURED_COLLECTIONS.length);
  };

  const handleCardClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const arrivals = document.getElementById("arrivals");
    arrivals?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="collections" className="w-full bg-[#FBF8F3] py-20 sm:py-28 border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#131416] font-normal">
            Our collections
          </h2>

          {/* Left/Right Circular Nav Arrows */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn"
              aria-label="Previous Collection"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn"
              aria-label="Next Collection"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Luxury Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_COLLECTIONS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="group relative aspect-4/3 sm:aspect-square w-full rounded-xs overflow-hidden cursor-pointer bg-[#ECE4D8] border border-[#E8E0D2] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

              {/* Top-Right "Open Page" Tag */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
                <span className="inline-block px-4 py-1.5 bg-white/95 text-[#131416] text-[11px] sm:text-xs tracking-[0.06em] font-medium shadow-xs group-hover:bg-[#8B1D24] group-hover:text-white transition-colors duration-300">
                  {item.tag}
                </span>
              </div>

              {/* Bottom-Left Dark Category Title Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10">
                <div className="bg-[#131416]/90 backdrop-blur-xs px-4 py-2 border border-white/10 group-hover:bg-[#131416] transition-colors">
                  <span className="font-serif text-xl sm:text-2xl text-white tracking-wide font-normal">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
