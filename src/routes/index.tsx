import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AboutSection } from "@/components/landing/AboutSection";
import { PainSection } from "@/components/landing/PainSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AgentsSection } from "@/components/landing/AgentsSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { DiagnosticSection } from "@/components/landing/DiagnosticSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dinâmica Solução — Tecnologia Inteligente, IA e Automação" },
      {
        name: "description",
        content:
          "Desenvolvimento sob medida, automação de processos (RPA), sites e agentes de IA 24/7 no WhatsApp e Instagram. Pare de perder clientes — fale com a Dinâmica Solução.",
      },
      {
        property: "og:title",
        content: "Dinâmica Solução — Automação, IA e Tecnologia sob medida",
      },
      {
        property: "og:description",
        content:
          "Sistemas, automação e agentes de IA que respondem em segundos e vendem 24/7. +30 projetos entregues.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
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
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
