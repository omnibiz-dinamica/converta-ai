const features = [
  "Projetos personalizados",
  "Foco em usabilidade, eficiência e escalabilidade",
  "Parceria de longo prazo",
  "Tecnologia como vantagem competitiva",
];

const metrics = [
  { value: "PME", label: "como foco" },
  { value: "IA", label: "aplicada a processos" },
  { value: "Sob", label: "medida" },
  { value: "360º", label: "da ideia ao suporte" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Sobre nós
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Parceiros em tecnologia,{" "}
              <span className="text-gradient">não apenas fornecedores</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Na Dinâmica Solução, acreditamos que tecnologia de verdade nasce da compreensão
              profunda da empresa de cada cliente. Não entregamos soluções genéricas —{" "}
              <span className="text-foreground font-semibold">
                construímos ferramentas sob medida
              </span>{" "}
              que geram valor real e duradouro.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary shadow-glow-primary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3 w-3 text-primary-foreground"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/40 hover:-translate-y-1 ${
                  i % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <div className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                  {m.value}
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{m.label}</p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary/15 opacity-0 blur-2xl transition-smooth group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
