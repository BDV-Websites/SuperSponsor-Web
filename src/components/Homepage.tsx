"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import CompaniesSection from "./CompaniesSection";
import BenefitsSection from "./BenefitsSection";
import WhatYouCanDoSection from "./WhatYouCanDoSection";
import FeaturesSection from "./FeaturesSection";
import PerformanceSection from "./PerformanceSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FaqSection from "./FaqSection";
import BlogSection from "./BlogSection";
import FooterSection from "./FooterSection";

const Homepage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-6 bg-white rounded-xl">
      <Navbar />
      <HeroSection />
      <HeroImage />
      <CompaniesSection />
      <BenefitsSection />
      <WhatYouCanDoSection />
      <FeaturesSection />
      <PerformanceSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
};

export default Homepage;
