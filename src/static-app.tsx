import { ChatWidget } from "@/components/chat/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TechBackground } from "@/components/layout/TechBackground";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AboutSection } from "@/components/sections/AboutSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { OfferSection } from "@/components/sections/OfferSection";
import { PainSection } from "@/components/sections/PainSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PricingSection } from "@/components/sections/PricingSection";

export function StaticApp() {
  return (
    <div className="relative min-h-screen bg-background">
      <TechBackground />
      <Navbar />
      <main id="top">
        <Hero />
        <PainSection />
        <SolutionSection />
        <AboutSection />
        <ServicesSection />
        <AgentsSection />
        <ResultsSection />
        <PortfolioSection />
        <ProcessSection />
        <OfferSection />
        <DiagnosticSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </div>
  );
}