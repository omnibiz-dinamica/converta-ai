import { wa } from "@/lib/contact";

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
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Coluna esquerda - texto */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Tecnologia inteligente para a sua empresa
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Automatize o seu atendimento e{" "}
              <span className="text-gradient-accent">pare de perder clientes</span> todos os dias
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0 mx-auto">
              Respostas instantâneas, mais vendas e menos trabalho manual com{" "}
              <span className="font-semibold text-foreground">IA</span>.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start justify-center">
              <a
                href={wa("Olá! Quero automatizar o meu atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
              >
                👉 Quero automatizar o meu atendimento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary/50 hover:bg-card"
              >
                💬 Conhecer serviços
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                Soluções à medida
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                Projetos digitais entregues
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground">
                ⭐⭐⭐⭐⭐ <span className="text-foreground">Experiência em PME</span>
              </div>
            </div>
          </div>

          {/* Coluna direita - visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[2rem] bg-gradient-cta opacity-20 blur-3xl"
              />
              {/* Card principal mockup */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-card p-6 shadow-elegant backdrop-blur">
                {/* Header janela */}
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    dinamicasolucao · agente
                  </span>
                </div>

                {/* "Métricas" flutuantes */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-background/40 p-4">
                    <div className="text-xs text-muted-foreground">Conversas/dia</div>
                    <div className="mt-1 font-display text-2xl font-bold text-gradient">+1.2k</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/40 p-4">
                    <div className="text-xs text-muted-foreground">Tempo resposta</div>
                    <div className="mt-1 font-display text-2xl font-bold text-gradient-accent">
                      &lt; 3s
                    </div>
                  </div>
                </div>

                {/* Conversa */}
                <div className="mt-5 space-y-3">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-sm text-foreground">
                    Olá! Vocês entregam em Lisboa hoje?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-glow-primary">
                    Olá 👋 Sim! Posso reservar agora para entrega ainda hoje. Confirma o Código
                    Postal?
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    Agente respondendo…
                  </div>
                </div>

                {/* Selo flutuante */}
                <div className="absolute -right-3 -top-3 rotate-3 rounded-2xl border border-accent/40 bg-gradient-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-glow-accent animate-float">
                  Atendimento contínuo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
