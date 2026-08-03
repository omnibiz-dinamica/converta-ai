import { Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    category: "Automação e Produtividade",
    quote:
      "O OmniBiz transformou a maneira como gerencio as operações diárias da minha empresa. A automação das rotinas e a facilidade de criar fluxos de trabalho me pouparam dezenas de horas por mês. Agora, consigo focar na estratégia e no crescimento do negócio em vez de ficar preso em tarefas manuais.",
    name: "Carlos S.",
    role: "Diretor de Operações",
    image: "/testimonials/carlos-s.png",
    accent: "primary" as const,
  },
  {
    category: "Controle Financeiro e Centralização",
    quote:
      "Trabalhando de forma independente, o controle dos meus processos precisava ser impecável e sem margem para erros. Com o OmniBiz, consegui centralizar toda a gestão financeira e o acompanhamento de clientes em um único painel. O sistema é robusto, intuitivo e me dá a segurança exata de que preciso para tomar decisões.",
    name: "Mariana F.",
    role: "Consultora e Empreendedora",
    image: "/testimonials/mariana-f.png",
    accent: "accent" as const,
  },
  {
    category: "Integração e Visão Geral",
    quote:
      "Integrar nossos dados sempre foi o nosso maior desafio até implementarmos o OmniBiz. Hoje, temos uma visão completa de tudo o que acontece no negócio, desde o primeiro atendimento até o faturamento. O sistema conectou as pontas soltas da nossa gestão e se tornou uma ferramenta indispensável para o nosso dia a dia.",
    name: "Roberto A.",
    role: "Gerente Comercial",
    image: "/testimonials/roberto-a.png",
    accent: "primary" as const,
  },
];

const highlights = ["Automação prática", "Decisão com dados", "Gestão centralizada"];

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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Depoimentos
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Empresas e profissionais que já sentem o{" "}
              <span className="text-gradient">impacto do OmniBiz</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Relatos de quem passou a organizar processos, centralizar informações e reduzir
              trabalho manual com uma gestão mais inteligente.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              O que os clientes destacam
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {highlights.map((point) => (
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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.role}`}
                  className="h-full w-full object-cover object-top transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`inline-flex w-fit max-w-full rounded-full border px-3 py-1 text-[11px] font-bold uppercase leading-tight tracking-wider ${
                    item.accent === "primary"
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-accent/40 bg-accent/10 text-accent"
                  }`}
                >
                  {item.category}
                </span>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/25" />
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground sm:text-base">
                  “{item.quote}”
                </p>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-base font-bold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
