const testimonials = [
  {
    focus: "Atendimento",
    quote:
      "Espaço reservado para um depoimento real sobre melhoria no atendimento, resposta aos clientes e organização dos contactos.",
    profile: "Cliente PME",
    context: "Depoimento pendente de autorização",
    accent: "primary" as const,
  },
  {
    focus: "Processos",
    quote:
      "Espaço reservado para um depoimento real sobre automação de tarefas repetitivas, redução de trabalho manual e maior controlo da operação.",
    profile: "Gestor de operações",
    context: "Depoimento pendente de autorização",
    accent: "accent" as const,
  },
  {
    focus: "Sistemas",
    quote:
      "Espaço reservado para um depoimento real sobre desenvolvimento de sistema personalizado, acompanhamento e evolução da solução.",
    profile: "Empresa em crescimento",
    context: "Depoimento pendente de autorização",
    accent: "primary" as const,
  },
];

const trustPoints = ["Autorização do cliente", "Contexto do projecto", "Sem métricas inventadas"];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Depoimentos
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              A voz dos clientes, publicada com{" "}
              <span className="text-gradient">confiança e autorização</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Esta área está preparada para receber depoimentos reais de clientes da Dinâmica
              Solução. Para manter credibilidade, só publicamos comentários autorizados e sem
              números inventados.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Critério editorial
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.focus}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 ${
                  item.accent === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"
                }`}
              />
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {item.focus}
                </span>
                <span className="font-display text-5xl leading-none text-primary/25">“</span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-foreground sm:text-base">
                {item.quote}
              </p>

              <div className="mt-8 border-t border-border pt-5">
                <p className="font-display text-base font-bold text-foreground">{item.profile}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.context}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
