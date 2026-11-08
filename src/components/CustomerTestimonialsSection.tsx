"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/jewelryData";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function CustomerTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#FBF8F3] py-20 sm:py-28 border-b border-[#E8E0D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#131416] font-normal">
            Our satisfied customers
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 z-20 w-11 h-11 rounded-full border border-[#131416]/40 items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn bg-[#FBF8F3]"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Testimonial Cards Showcase */}
          <div className="w-full max-w-4xl px-0 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Active Card */}
              {TESTIMONIALS.slice(currentIndex, currentIndex + 2).concat(
                currentIndex + 1 >= TESTIMONIALS.length ? [TESTIMONIALS[0]] : []
              ).slice(0, 2).map((testi, i) => (
                <div
                  key={`${testi.id}-${i}`}
                  className="bg-white border border-[#E8E0D2] rounded-xs p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[#E8E0D2]">
                      <Image
                        src={testi.avatar}
                        alt={testi.author}
                        fill
                        sizes="60px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex text-[#D4AF37] mb-1">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-[#706E6B] font-light">
                        Purchased: <span className="text-[#131416] font-medium">{testi.purchasedItem}</span>
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-serif text-sm sm:text-base text-[#131416] italic leading-relaxed mb-6 font-light">
                    {testi.quote}
                  </blockquote>

                  <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base text-[#131416] font-medium tracking-wide">
                        {testi.author}
                      </p>
                      <p className="text-[11px] text-[#706E6B] font-light">
                        {testi.role}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8B1D24] font-medium bg-[#8B1D24]/10 px-2.5 py-1 rounded-full">
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute right-0 z-20 w-11 h-11 rounded-full border border-[#131416]/40 items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all luxury-btn bg-[#FBF8F3]"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Nav Arrows */}
        <div className="flex md:hidden justify-center items-center space-x-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#131416] flex items-center justify-center text-[#131416] hover:bg-[#131416] hover:text-white transition-all"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
