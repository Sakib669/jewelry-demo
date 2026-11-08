"use client";

import React from "react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { ATELIER_STORY } from "@/data/jewelryData";

export default function DesignerStorySection() {
  const { setIsContactModalOpen } = useShop();

  return (
    <section id="designer" className="w-full bg-[#FBF8F3] py-20 sm:py-28 border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Story text and Contact Me button */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#131416] font-normal leading-tight">
              {ATELIER_STORY.title}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#5C5A56] leading-relaxed font-light">
              <p>{ATELIER_STORY.bioParagraph1}</p>
              <p>{ATELIER_STORY.bioParagraph2}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#9E3831] hover:bg-[#8B1D24] text-white text-xs tracking-[0.14em] uppercase font-medium rounded-xs shadow-sm transition-all luxury-btn"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Center Column: Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-xs overflow-hidden bg-[#ECE4D8] border border-[#E8E0D2] shadow-xl">
              <Image
                src={ATELIER_STORY.portrait}
                alt={`${ATELIER_STORY.founderName} - ${ATELIER_STORY.founderTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Key Metrics */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-10 sm:space-y-12 pl-0 lg:pl-6">
            {ATELIER_STORY.metrics.map((metric, idx) => (
              <div key={idx} className="group">
                <div className="font-serif text-4xl sm:text-6xl text-[#131416] font-light tracking-tight flex items-baseline">
                  <span className="text-[#8B1D24] mr-1 text-3xl sm:text-4xl font-normal">+</span>
                  <span>{metric.value.replace("+", "")}</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-[#706E6B] font-light tracking-wide">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
