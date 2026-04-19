const services = [
  {
    icon: "🤖",
    title: "Agentes de IA",
    desc: "Atendentes virtuais inteligentes que entendem, respondem e vendem como um humano.",
  },
  {
    icon: "💬",
    title: "Automação de WhatsApp",
    desc: "Fluxos automáticos que atendem 24/7, qualificam leads e fecham vendas.",
  },
  {
    icon: "🔗",
    title: "Integração de Sistemas",
    desc: "Conecte CRM, ERP e ferramentas existentes em um único fluxo inteligente.",
  },
  {
    icon: "🎓",
    title: "Consultoria em IA",
    desc: "Estratégia personalizada para aplicar IA com foco em resultado e ROI.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Serviços
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Soluções pensadas para <span className="text-gradient">escalar seu negócio</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-smooth group-hover:opacity-100"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-3xl transition-bounce group-hover:bg-gradient-primary group-hover:shadow-glow-primary">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
