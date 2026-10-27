import { useEffect } from "react";
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
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SolutionDemoSection } from "@/components/sections/SolutionDemoSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import {
  MANUAL_CLIENTES_PATH,
  MANUAL_ENTRADA_PATH,
  MANUAL_EXTRA_PATH,
  SUITE_PATH,
} from "@/lib/pages";
import { ManualEntradaPage } from "@/pages/ManualEntradaPage";
import { ManualClientesPage } from "@/pages/ManualClientesPage";
import { ManualTrabalhoExtraPage } from "@/pages/ManualTrabalhoExtraPage";
import { OmniBizSuitePage } from "@/pages/OmniBizSuitePage";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * Hostnet serve sempre o mesmo index.html (fallback do .htaccess), por isso o
 * caminho é lido aqui. Qualquer caminho desconhecido mostra a página inicial.
 */
export function StaticApp() {
  const path = normalizePath(window.location.pathname);

  // Como a página é desenhada no cliente, o navegador não encontra a âncora
  // (#precos, #manuais...) ao carregar. Fazemos o scroll depois de desenhar.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60);
    return () => window.clearTimeout(timer);
  }, []);

  if (path === SUITE_PATH) return <OmniBizSuitePage />;
  if (path === MANUAL_EXTRA_PATH) return <ManualTrabalhoExtraPage />;
  if (path === MANUAL_CLIENTES_PATH) return <ManualClientesPage />;
  if (path === MANUAL_ENTRADA_PATH) return <ManualEntradaPage />;

  return <HomePage />;
}

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <TechBackground />
      <Navbar />
      <main id="top">
        <Hero />
        <PainSection />
        <SolutionSection />
        <SolutionDemoSection />
        <AboutSection />
        <ServicesSection />
        <UseCasesSection />
        <AgentsSection />
        <ResultsSection />
        <TestimonialsSection />
        <PortfolioSection />
        <ProcessSection />
        <OfferSection />
        <DiagnosticSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </div>
  );
}
