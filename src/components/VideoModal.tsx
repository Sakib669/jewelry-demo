"use client";

import React from "react";
import { useShop } from "@/context/ShopContext";
import { X, Sparkles } from "lucide-react";

export default function VideoModal() {
  const { isVideoModalOpen, setIsVideoModalOpen } = useShop();

  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsVideoModalOpen(false)}
      />

      {/* Video Container */}
      <div className="relative w-full max-w-4xl bg-black rounded-sm overflow-hidden z-10 shadow-2xl border border-white/20">
        {/* Header bar */}
        <div className="p-4 bg-zinc-950/90 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-serif text-sm tracking-wider uppercase">
              The Art of Valenza Goldsmithing — ÉLÉOR Atelier
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(false)}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close Film"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            autoPlay
            controls
            playsInline
            loop
            className="w-full h-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-4 bg-zinc-950 text-xs text-zinc-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p>Filmed inside our master studio in Grava, Alessandria, Italy.</p>
          <span className="text-[11px] font-mono text-[#D4AF37]">4K Ultra-Definition Atelier Archive</span>
        </div>
      </div>
    </div>
  );
}
