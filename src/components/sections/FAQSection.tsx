const faqs = [
  {
    q: "A Dinâmica Solução trabalha apenas com agentes de IA?",
    a: "Não. Os agentes de IA são uma das soluções. Também desenvolvemos sistemas personalizados, automações de processos, sites, plataformas e consultoria tecnológica.",
  },
  {
    q: "O ChatWidget do site é uma IA real ligada aos meus sistemas?",
    a: "No site, o chat funciona como apoio informativo e encaminhamento. Integrações reais com IA, WhatsApp, CRM ou sistemas internos são definidas caso a caso no projecto.",
  },
  {
    q: "É possível começar com uma solução pequena?",
    a: "Sim. O ideal é começar por um fluxo com impacto claro, validar com a equipa e evoluir por módulos conforme a necessidade da empresa.",
  },
  {
    q: "Os preços finais são sempre iguais aos planos apresentados?",
    a: "Os planos servem como referência comercial. Projectos com integrações, regras específicas, volume elevado ou marca branca podem exigir orçamento personalizado.",
  },
  {
    q: "Como é feito o primeiro diagnóstico?",
    a: "Recolhemos contexto sobre a empresa, canais, tarefas repetitivas, ferramentas usadas e prioridade. Depois indicamos uma proposta de abordagem e próximos passos.",
  },
];

export function FAQSection() {
  return (
    <section id="perguntas" className="relative bg-surface-elevated/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Perguntas frequentes
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Dúvidas comuns antes de pedir um orçamento
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-gradient-card p-5 shadow-card open:border-primary/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-foreground">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-smooth group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
