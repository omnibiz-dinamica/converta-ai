const pains = [
  { icon: "⏳", text: "Demora a responder aos seus clientes" },
  { icon: "📵", text: "Não atende fora do horário comercial" },
  { icon: "🤯", text: "Depende de processos manuais" },
  { icon: "📉", text: "Perde leads por falta de acompanhamento" },
  { icon: "💸", text: "Tem a equipa sobrecarregada com tarefas repetitivas" },
];

export function PainSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
            O problema
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            A sua empresa pode estar a perder oportunidades <br className="hidden sm:block" />
            <span className="text-gradient-accent">todos os dias se:</span>
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <li
              key={p.text}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-smooth hover:border-destructive/40 hover:shadow-elegant"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-2xl">
                {p.icon}
              </span>
              <span className="text-base font-medium text-foreground sm:text-lg">{p.text}</span>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-accent/30 bg-gradient-card p-8 text-center shadow-glow-accent sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"
          />
          <p className="font-display text-2xl font-bold leading-tight text-foreground sm:text-4xl">
            "Cada mensagem sem resposta pode ser uma{" "}
            <span className="text-gradient-accent">oportunidade perdida.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
