import type { ReactNode } from "react";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TechBackground } from "./TechBackground";
import { WhatsAppFloat } from "./WhatsAppFloat";

/** Estrutura comum das páginas internas (fora da página inicial). */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <TechBackground />
      <Navbar home={false} activeSystem />
      <main id="top">{children}</main>
      <Footer home={false} />
      <WhatsAppFloat />
      <ChatWidget />
    </div>
  );
}
