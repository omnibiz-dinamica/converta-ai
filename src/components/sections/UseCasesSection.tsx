const useCases = [
  {
    sector: "Serviços profissionais",
    problem: "Pedidos chegam por vários canais e ficam difíceis de acompanhar.",
    solution: "Centralização de contactos, triagem inicial e encaminhamento para a equipa certa.",
  },
  {
    sector: "Comércio e retalho",
    problem: "A equipa perde tempo com perguntas repetidas sobre produtos, horários e encomendas.",
    solution: "Respostas automáticas, recolha de dados e apoio ao seguimento comercial.",
  },
  {
    sector: "Logística e operações",
    problem: "Processos manuais atrasam respostas, actualizações e validações internas.",
    solution: "Automação de tarefas recorrentes, dashboards e integração entre sistemas.",
  },
  {
    sector: "Empresas em crescimento",
    problem: "Folhas, mensagens e ferramentas soltas já não acompanham o volume da operação.",
    solution: "Sistemas personalizados e módulos que crescem de acordo com a necessidade.",
  },
];

export function UseCasesSection() {
  return (
    <section id="casos-uso" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Casos de uso
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Onde a tecnologia pode gerar{" "}
            <span className="text-gradient-accent">impacto prático</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Exemplos de aplicação para PME que precisam organizar atendimento, processos e dados sem
            depender de soluções genéricas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {useCases.map((item) => (
            <article
              key={item.sector}
              className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="font-display text-xl font-bold text-foreground">{item.sector}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Problema comum
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{item.problem}</p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Possível solução
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
