const services = [
  {
    icon: "💻",
    title: "Desenvolvimento de Sistemas",
    desc: "Sistemas personalizados do briefing ao deploy, com arquitetura robusta e interfaces intuitivas que se adaptam ao seu fluxo de trabalho.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: "⚙️",
    title: "Automação de Processos (RPA)",
    desc: "Reduza tarefas repetitivas, minimize erros humanos e liberte a sua equipa para o que realmente importa com automação inteligente.",
    tags: ["RPA", "Python", "APIs"],
  },
  {
    icon: "🌐",
    title: "Sites e Plataformas Web",
    desc: "Sites modernos, rápidos e otimizados para conversão, com design responsivo e uma experiência clara para o utilizador.",
    tags: ["Next.js", "SEO", "UX"],
  },
  {
    icon: "🎓",
    title: "Consultoria Tech",
    desc: "Diagnóstico completo da sua operação e planeamento estratégico de tecnologia para melhorar os seus resultados.",
    tags: ["Estratégia", "Roadmap", "ROI"],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative bg-surface-elevated/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Serviços
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Soluções completas para a sua{" "}
            <span className="text-gradient">transformação digital</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Da estratégia à execução, oferecemos tecnologia prática para a sua empresa evoluir com
            tecnologia.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-smooth group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-3xl transition-bounce group-hover:bg-gradient-primary group-hover:shadow-glow-primary">
                  {s.icon}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {s.desc}
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:gap-3"
              >
                Saiba mais
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
