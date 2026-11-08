"use client";

import React from "react";
import { useShop } from "@/context/ShopContext";
import { Sparkles } from "lucide-react";

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none">
      <div className="bg-[#131416]/95 backdrop-blur-md text-white text-xs px-4 py-3 rounded-full shadow-2xl border border-white/20 flex items-center space-x-2.5">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="font-medium tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
