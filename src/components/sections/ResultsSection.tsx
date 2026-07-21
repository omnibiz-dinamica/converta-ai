const stats = [
  { icon: "📈", value: "Menos", label: "Trabalho manual repetitivo" },
  { icon: "⚡", value: "Segundos", label: "Em vez de horas para responder" },
  { icon: "💰", value: "+Leads", label: "Qualificados com mais contexto" },
  { icon: "🔄", value: "Contínuo", label: "Atendimento com disponibilidade ampliada" },
];

export function ResultsSection() {
  return (
    <section id="resultados" className="relative bg-surface-elevated/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Resultados
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Resultados que impactam diretamente a sua{" "}
            <span className="text-gradient-accent">operação</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 text-center transition-smooth hover:border-primary/40"
            >
              <div className="text-4xl">{s.icon}</div>
              <div className="mt-4 font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                {s.label}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary/20 opacity-0 blur-2xl transition-smooth group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
