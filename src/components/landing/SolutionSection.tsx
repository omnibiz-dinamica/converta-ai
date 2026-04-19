const WA = "https://wa.me/5500000000000?text=Quero%20parar%20de%20perder%20clientes";

const bullets = [
  { icon: "⚡", text: "Respostas instantâneas 24/7" },
  { icon: "💬", text: "WhatsApp, Instagram e site integrados" },
  { icon: "🎯", text: "Qualificação automática de leads" },
  { icon: "📈", text: "Aumento direto na conversão" },
  { icon: "🔥", text: "Nunca mais perca um cliente" },
];

export function SolutionSection() {
  return (
    <section id="solucao" className="relative bg-surface-elevated/50 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              A solução
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Automatize seu atendimento e{" "}
              <span className="text-gradient">transforme conversas em clientes</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Enquanto você dorme, seu sistema responde, qualifica e vende.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
            >
              👉 Quero parar de perder clientes
            </a>
          </div>

          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li
                key={b.text}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 transition-smooth hover:border-primary/50 hover:shadow-glow-primary"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-xl shadow-glow-primary">
                  {b.icon}
                </span>
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground sm:text-lg">{b.text}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-2 h-5 w-5 text-primary opacity-0 transition-smooth group-hover:opacity-100"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
