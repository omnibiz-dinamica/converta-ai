const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos a sua empresa, desafios e oportunidades para identificar a melhor solução tecnológica.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definimos arquitetura, cronograma e âmbito detalhado, alinhando expectativas e prioridades.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Entregas incrementais com validações contínuas, garantindo transparência e qualidade.",
  },
  {
    n: "04",
    title: "Evolução",
    desc: "Suporte contínuo, melhorias e evolução para acompanhar o crescimento da sua empresa.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Processo
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Como <span className="text-gradient-accent">trabalhamos</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Um processo claro e colaborativo do primeiro contacto à entrega — e além.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Linha conectora */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="group relative rounded-3xl border border-border bg-gradient-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Número grande */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary font-display text-xl font-bold text-foreground transition-bounce group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow-primary">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                {/* Seta entre passos (desktop) */}
                {i < steps.length - 1 && (
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute -right-3 top-12 hidden h-6 w-6 text-primary lg:block"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
