const includes = [
  { icon: "⚙️", title: "Configuração completa", desc: "Setup de ponta a ponta sem você levantar um dedo." },
  { icon: "🤖", title: "IA treinada para seu negócio", desc: "Linguagem, regras e produtos do seu universo." },
  { icon: "🔗", title: "Integração com WhatsApp e canais", desc: "Tudo conectado e funcionando em harmonia." },
  { icon: "📊", title: "Ajustes e otimização", desc: "Acompanhamento contínuo para evoluir resultados." },
];

export function OfferSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            A oferta
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Implementamos seu atendimento inteligente em{" "}
            <span className="text-gradient-accent">poucos dias</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Criamos um sistema personalizado para seu negócio, integrado aos seus canais, pronto
            para atender, qualificar e gerar vendas automaticamente.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {includes.map((it) => (
              <div
                key={it.title}
                className="flex gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-smooth hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-xl shadow-glow-primary">
                  {it.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
