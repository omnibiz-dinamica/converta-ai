const flow = [
  {
    step: "01",
    title: "Mensagem recebida",
    desc: "O cliente entra em contacto pelo WhatsApp, Instagram ou site com uma pergunta real.",
  },
  {
    step: "02",
    title: "Necessidade identificada",
    desc: "O agente interpreta o pedido, recolhe dados essenciais e organiza o contexto.",
  },
  {
    step: "03",
    title: "Lead qualificado",
    desc: "A conversa fica classificada por intenção, serviço, urgência e dados de contacto.",
  },
  {
    step: "04",
    title: "Encaminhamento humano",
    desc: "Quando faz sentido, a equipa recebe o resumo para dar continuidade sem perder contexto.",
  },
];

const leadData = [
  ["Canal", "WhatsApp"],
  ["Interesse", "Automação de atendimento"],
  ["Empresa", "PME de serviços"],
  ["Urgência", "Alta"],
];

export function SolutionDemoSection() {
  return (
    <section id="demonstracao" className="relative bg-surface-elevated/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Demonstração
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Veja como uma conversa pode virar{" "}
              <span className="text-gradient">um pedido qualificado</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Este é um exemplo visual do fluxo. A implementação real é ajustada ao processo, canais
              e equipa da sua empresa.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {flow.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-border bg-gradient-card p-4 shadow-card"
                >
                  <div className="font-display text-sm font-bold text-primary">{item.step}</div>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-cta opacity-20 blur-3xl"
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elegant">
              <div className="border-b border-border bg-background/50 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Exemplo de fluxo
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      Qualificação automática
                    </h3>
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Exemplo
                  </span>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-3 border-b border-border p-5 text-sm lg:border-b-0 lg:border-r">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                    Olá, preciso responder melhor aos pedidos que chegam fora do horário.
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 font-medium text-primary-foreground shadow-glow-primary">
                    Posso ajudar. Qual é o volume médio de contactos por semana?
                  </div>
                  <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                    Cerca de 80. Também queremos enviar para a equipa comercial.
                  </div>
                  <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 font-medium text-primary-foreground shadow-glow-primary">
                    Perfeito. Vou registar o pedido e encaminhar um resumo para análise.
                  </div>
                </div>

                <div className="bg-background/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Resumo para a equipa
                  </p>
                  <div className="mt-4 space-y-3">
                    {leadData.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/60 px-4 py-3"
                      >
                        <span className="text-xs text-muted-foreground">{label}</span>
                        <span className="text-right text-sm font-semibold text-foreground">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm leading-relaxed text-foreground">
                    Pedido pronto para contacto humano, com contexto e prioridade definidos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
