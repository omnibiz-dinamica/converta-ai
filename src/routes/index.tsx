import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PainSection } from "@/components/landing/PainSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { DiagnosticSection } from "@/components/landing/DiagnosticSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dinâmica Solução — Automação de Atendimento com IA" },
      {
        name: "description",
        content:
          "Pare de perder clientes por demora. Automatize seu atendimento com IA no WhatsApp, Instagram e site. Venda 24/7 com a Dinâmica Solução.",
      },
      {
        property: "og:title",
        content: "Dinâmica Solução — Automatize seu atendimento com IA",
      },
      {
        property: "og:description",
        content:
          "Responda em segundos, qualifique leads e venda todos os dias com automação inteligente.",
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
        <ServicesSection />
        <ResultsSection />
        <OfferSection />
        <DiagnosticSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
