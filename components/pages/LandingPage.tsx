'use client';

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/landing/HeroSection";
import { ExpertiseSection } from "@/components/sections/landing/ExpertiseSection";
import { CoursesSection } from "@/components/sections/landing/CoursesSection";
import { LeadershipSection } from "@/components/sections/landing/LeadershipSection";
import { TrainersSection } from "@/components/sections/landing/TrainersSection";
import { TestimonialsSection } from "@/components/sections/landing/TestimonialsSection";
import { ClientsSection } from "@/components/sections/landing/ClientsSection";
import { FeaturedProgramsSection } from "@/components/sections/landing/FeaturedProgramsSection";
import { CTASection } from "@/components/sections/landing/CTASection";
import { FAQSection } from "@/components/sections/landing/FAQSection";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Header />

      <main className="pt-16">
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ExpertiseSection />
        <CoursesSection />
        <LeadershipSection />
        <TrainersSection />
        <TestimonialsSection />
        <ClientsSection />
        <FeaturedProgramsSection />
        <CTASection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}