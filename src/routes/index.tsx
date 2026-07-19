import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { TechBackground } from "@/components/layout/TechBackground";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dinâmica Solução — Tecnologia Inteligente, IA e Automação" },
      {
        name: "description",
        content:
          "Desenvolvimento sob medida, automação de processos (RPA), sites e agentes de IA 24/7 no WhatsApp e Instagram. +30 projetos entregues.",
      },
      { property: "og:title", content: "Dinâmica Solução — Automação, IA e Tecnologia" },
      {
        property: "og:description",
        content:
          "Sistemas, automação e agentes de IA que respondem em segundos e vendem 24/7.",
      },
      { property: "og:url", content: "https://www.dinamicasolucao.com/" },
    ],
    links: [{ rel: "canonical", href: "https://www.dinamicasolucao.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <TechBackground />
      <Navbar />
      <main>
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
        <PricingSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </div>
  );
}
