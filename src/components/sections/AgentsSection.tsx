import { wa } from "@/lib/contact";

const benefits = [
  {
    icon: "⚡",
    title: "Respostas automáticas",
    desc: "Atendimento com disponibilidade ampliada e respostas consistentes.",
  },
  {
    icon: "💬",
    title: "WhatsApp, Instagram, Facebook",
    desc: "Integração nativa com as principais plataformas de comunicação.",
  },
  {
    icon: "🎯",
    title: "Qualificação de leads",
    desc: "O agente identifica, qualifica e direciona leads automaticamente.",
  },
  {
    icon: "💰",
    title: "Redução de custos",
    desc: "Diminua custos operacionais sem perder qualidade no atendimento.",
  },
  {
    icon: "📈",
    title: "Escala sem equipa extra",
    desc: "Atenda mais conversas em simultâneo sem aumentar a equipa.",
  },
];

export function AgentsSection() {
  return (
    <section id="agentes-ia" className="relative overflow-hidden py-24 sm:py-32">
      {/* Glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.06]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Esquerda - Conteúdo */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Parceria Estratégica · IA · Em destaque
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Atendimento inteligente que{" "}
              <span className="text-gradient-accent">nunca dorme</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Em parceria com empresa especializada em IA, oferecemos agentes inteligentes que
              automatizam o atendimento da sua empresa nas redes sociais — com qualidade, velocidade
              e disponibilidade ampliada.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-4 transition-smooth hover:border-primary/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-lg shadow-glow-primary">
                    {b.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{b.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={wa("Quero um Agente Inteligente para minha empresa")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
            >
              👉 Quero um Agente Inteligente
            </a>
          </div>

          {/* Direita - Mockup chat */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-cta opacity-25 blur-3xl"
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-gradient-card shadow-elegant">
              {/* Header chat */}
              <div className="flex items-center gap-3 border-b border-border bg-background/40 px-5 py-4">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-cta shadow-glow-primary">
                  <span className="font-display text-lg font-bold text-background">D</span>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">Dinâmica Solução</div>
                  <div className="flex items-center gap-1.5 text-xs text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    online agora
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </div>

              {/* Mensagens */}
              <div className="space-y-3 px-5 py-6 text-sm">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                  Olá! Gostaria de saber mais sobre automação de processos.
                </div>

                <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 font-medium text-primary-foreground shadow-glow-primary">
                  Olá! 👋 Sou o assistente da Dinâmica Solução. Posso ajudar com automação. Qual
                  é o sector da sua empresa?
                </div>

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-foreground">
                  Somos do setor de logística.
                </div>

                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 font-medium text-primary-foreground shadow-glow-primary">
                  Ótimo! Podemos analisar o fluxo de atendimento e encaminhar para um especialista.
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse" />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    />
                  </span>
                  Agente respondendo…
                </div>
              </div>

              {/* Input fake */}
              <div className="border-t border-border bg-background/40 px-5 py-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground">
                  Escreva uma mensagem…
                </div>
              </div>
            </div>

            {/* Selo */}
            <div className="absolute -right-3 top-6 rotate-6 rounded-2xl border border-accent/40 bg-gradient-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-glow-accent animate-float">
              IA · Respostas rápidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
