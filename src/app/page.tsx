"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import DesignerStorySection from "@/components/DesignerStorySection";
import LastArrivalsSection from "@/components/LastArrivalsSection";
import CustomerTestimonialsSection from "@/components/CustomerTestimonialsSection";
import HolidayDiscountBanner from "@/components/HolidayDiscountBanner";
import Footer from "@/components/Footer";

import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import VideoModal from "@/components/VideoModal";
import ContactModal from "@/components/ContactModal";
import Toast from "@/components/Toast";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#FBF8F3] min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Collections Section */}
      <CollectionsSection onSelectCategory={handleSelectCategory} />

      {/* CEO & Designer Story Section */}
      <DesignerStorySection />

      {/* Last Arrivals Section */}
      <LastArrivalsSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Our Satisfied Customers Testimonials */}
      <CustomerTestimonialsSection />

      {/* Discounted Holiday Collection Banner */}
      <HolidayDiscountBanner
        onExplore={() => {
          setSelectedCategory("all");
          const arrivals = document.getElementById("arrivals");
          arrivals?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Footer */}
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <VideoModal />
      <ContactModal />
      <Toast />
    </main>
  );
}
