"use client";

import React, { useState } from "react";
import { useShop } from "@/context/ShopContext";
import {
  BRAND_NAME,
  ATELIER_LOCATION,
  ATELIER_PHONE_1,
  ATELIER_EMAIL,
} from "@/data/jewelryData";
import { X, Send, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

export default function ContactModal() {
  const { isContactModalOpen, setIsContactModalOpen, showToast } = useShop();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Bespoke Engagement Ring");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isContactModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast("Inquiry sent to Master Goldsmith concierge");
    setTimeout(() => {
      setIsSubmitted(false);
      setIsContactModalOpen(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setNotes("");
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsContactModalOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FBF8F3] border border-[#E8E0D2] shadow-2xl rounded-xs overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsContactModalOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 text-[#706E6B] hover:text-[#131416] bg-white/80 rounded-full backdrop-blur-xs transition-colors"
          aria-label="Close Contact"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B1D24] font-medium font-mono">
              Concierge Consultation
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#131416] font-normal mt-1">
              Connect with {BRAND_NAME}
            </h3>
            <p className="text-xs sm:text-sm text-[#706E6B] mt-2 font-light">
              Schedule a private salon viewing or commission a custom bespoke creation directly with our master goldsmith.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#131416]">
                Inquiry Received
              </h4>
              <p className="text-xs text-[#706E6B] max-w-sm mx-auto leading-relaxed">
                Thank you, {fullName || "valued patron"}. Our private client advisor will respond within 24 hours to coordinate your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[#706E6B] font-medium mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] text-xs"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-[#706E6B] font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-[#706E6B] font-medium mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] text-xs"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-[#706E6B] font-medium mb-1.5">
                    Interest / Piece
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] text-xs"
                  >
                    <option value="Bespoke Engagement Ring">Bespoke Engagement Ring</option>
                    <option value="Custom High Jewelry Necklace">Custom High Jewelry Necklace</option>
                    <option value="Florentine Textured Bracelets">Florentine Textured Bracelets</option>
                    <option value="Private Atelier Appointment">Private Atelier Appointment</option>
                    <option value="Gemstone Sourcing Inquiry">Gemstone Sourcing Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#706E6B] font-medium mb-1.5">
                  Message / Custom Design Details
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details regarding your timeline, metal preference (18k yellow, white, rose, platinum), or desired gemstone..."
                  className="w-full px-4 py-3 bg-white border border-[#E8E0D2] rounded-xs focus:outline-none focus:border-[#8B1D24] text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8B1D24] hover:bg-[#78171E] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-xs shadow-md flex items-center justify-center space-x-2 transition-all luxury-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Atelier</span>
                </button>
              </div>
            </form>
          )}

          {/* Atelier Contact info footer */}
          <div className="mt-8 pt-6 border-t border-[#E8E0D2] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#706E6B]">
            <div className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#8B1D24] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-tight">{ATELIER_LOCATION}</span>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#8B1D24] shrink-0 mt-0.5" />
              <span className="text-[11px] font-mono leading-tight">{ATELIER_PHONE_1}</span>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#8B1D24] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-tight">Mon - Fri: 8AM - 5PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
