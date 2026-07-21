const projects = [
  {
    category: "Modelo de projecto",
    title: "Sistema de gestão interna",
    desc: "Plataforma para organizar operações, equipa, tarefas e indicadores num único ambiente ajustado ao processo da empresa.",
    tags: ["React", "Node.js", "PostgreSQL"],
    accent: "primary" as const,
  },
  {
    category: "Modelo de automação",
    title: "Automação de processos administrativos",
    desc: "Fluxos para reduzir tarefas repetitivas, organizar documentos e apoiar equipas com validações mais consistentes.",
    tags: ["RPA", "Python", "APIs"],
    accent: "accent" as const,
  },
  {
    category: "Modelo web",
    title: "Site ou plataforma comercial",
    desc: "Experiência digital com páginas claras, formulário de contacto, integração com WhatsApp e base preparada para SEO.",
    tags: ["Next.js", "Stripe", "AWS"],
    accent: "primary" as const,
  },
  {
    category: "Modelo IA",
    title: "Agente IA para atendimento",
    desc: "Exemplo de agente para responder dúvidas frequentes, recolher dados, qualificar pedidos e encaminhar para atendimento humano.",
    tags: ["IA", "WhatsApp API", "NLP"],
    accent: "accent" as const,
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative bg-surface-elevated/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Portfólio
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Exemplos de soluções que podemos <span className="text-gradient">desenvolver</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Estruturas típicas de projectos para demonstrar possibilidades. Casos reais e métricas
            podem ser adicionados quando houver autorização e dados confirmados.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              {/* "imagem" stylized header */}
              <div
                className={`relative h-44 overflow-hidden ${
                  p.accent === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-background/20 blur-2xl"
                />
                <div className="relative flex h-full items-end p-6">
                  <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
