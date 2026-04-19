const WA = "https://wa.me/5500000000000?text=Olá!%20Quero%20automatizar%20meu%20atendimento.";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            IA + Automação de Atendimento
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Pare de perder clientes por{" "}
            <span className="text-gradient-accent">demora no atendimento</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Automatize seu atendimento, responda em segundos e aumente suas vendas todos os dias com{" "}
            <span className="font-semibold text-foreground">IA</span>.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
            >
              <span>👉 Quero automatizar meu atendimento</span>
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary/50 hover:bg-card"
            >
              💬 Falar com especialista
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Satisfação 100%
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              12+ Projetos ativos
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground">
              ⭐⭐⭐⭐⭐ <span className="text-foreground">Clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
