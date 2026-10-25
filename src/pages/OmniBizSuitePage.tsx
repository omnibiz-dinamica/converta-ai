import { PageShell } from "@/components/layout/PageShell";
import { wa } from "@/lib/contact";
import { MANUAL_CLIENTES_PATH, MANUAL_EXTRA_PATH, SUITE_META, suiteJsonLd } from "@/lib/pages";
import { usePageMeta } from "@/lib/pageMeta";

const SUITE_JSON_LD = [suiteJsonLd];

const includedModules = [
  {
    icon: "🏠",
    title: "Base OmniBiz",
    desc: "Painel inicial, dados da empresa, notificações e o perfil de cada utilizador.",
    tags: ["Dashboard", "Empresa", "Notificações"],
  },
  {
    icon: "📅",
    title: "Planeamento e Tarefas",
    desc: "Clientes, tarefas, calendário, recorrências e planeamento operacional.",
    tags: ["Clientes", "Calendário", "Recorrências"],
  },
  {
    icon: "⏱️",
    title: "Folha de ponto",
    desc: "Registo de ponto, gestão das horas e validações operacionais.",
    tags: ["Ponto", "Gestão", "Validações"],
  },
  {
    icon: "👥",
    title: "RH",
    desc: "Funcionários, férias e ausências, e recibos.",
    tags: ["Equipa", "Férias", "Recibos"],
  },
  {
    icon: "🎫",
    title: "Central de suporte",
    desc: "Tickets de suporte organizados por empresa.",
    tags: ["Tickets", "Por empresa"],
  },
  {
    icon: "🤝",
    title: "Trabalho Extra",
    desc: "Convide quem está livre para serviços fora do horário normal. Quem aceitar primeiro fica com a vaga.",
    tags: ["Novidade", "Convites"],
    href: MANUAL_EXTRA_PATH,
    cta: "Ver o manual",
  },
];

const addOns = [
  {
    title: "CRM / Comercial",
    desc: "Contratos e gestão comercial: faturas, compra e venda, stock.",
  },
  { title: "Frota", desc: "Gestão de veículos e cartões." },
  { title: "WhatsApp com IA", desc: "Atendimento e automações por WhatsApp com IA." },
  { title: "BI e dashboards avançados", desc: "Relatórios completos e indicadores avançados." },
  { title: "Automações com IA", desc: "Fluxos inteligentes e automações ligadas." },
];

const extraSteps = [
  "O sistema mostra quem está livre nos dias e horas do serviço, e quem está ocupado, com o motivo.",
  "Os convites chegam ao ecrã do funcionário em tempo real, com as opções Aceitar, Recusar ou Depois.",
  "Quem aceitar primeiro fica com a vaga, e as tarefas são criadas automaticamente.",
  "O gestor recebe um aviso a cada resposta e quando as vagas ficam preenchidas.",
];

const strengths = [
  {
    title: "Dados separados por empresa",
    desc: "Cada empresa vê apenas os seus próprios dados.",
  },
  {
    title: "Perfis de acesso",
    desc: "Administrador, dono, gestor, contabilidade, secretaria e funcionário, cada um com o seu menu e as suas permissões.",
  },
  {
    title: "Avisos no sistema",
    desc: "Notificações para convites, férias, tarefas excluídas e outros eventos importantes.",
  },
  {
    title: "Pronto para o telemóvel",
    desc: "Interface adaptada a ecrãs pequenos, para quem trabalha no terreno.",
  },
];

const manuals = [
  {
    title: "Trabalho Extra",
    desc: "Como escolher a equipa de extras, registar o trabalho, enviar convites e acompanhar as respostas.",
    meta: "5 passos · Para gestores",
    href: MANUAL_EXTRA_PATH,
  },
  {
    title: "Cadastro de clientes",
    desc: "Como preencher a ficha do cliente: contactos, morada, horários, cobrança e equipa responsável.",
    meta: "6 passos · Para gestores",
    href: MANUAL_CLIENTES_PATH,
  },
];

const DEMO_URL = wa("Olá! Quero uma demonstração do OmniBiz Suite.");

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OmniBizSuitePage() {
  usePageMeta(SUITE_META, SUITE_JSON_LD);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Sistema de gestão · OmniBiz Suite
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Toda a sua operação, <span className="text-gradient-accent">num só sistema</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              O OmniBiz Suite reúne tarefas, clientes, folha de ponto, RH e suporte numa plataforma
              simples de usar. Cada empresa tem os seus próprios dados, e cada pessoa vê apenas o
              que lhe diz respeito.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
              >
                👉 Pedir demonstração
              </a>
              <a
                href="#manuais"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary/50 hover:bg-card"
              >
                📘 Ver manuais
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {["Multiempresa", "Perfis de acesso", "Avisos em tempo real"].map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Módulos incluídos */}
      <section id="modulos" className="relative scroll-mt-20 bg-surface-elevated/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Módulos incluídos</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Tudo o que a operação diária <span className="text-gradient">precisa</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A base do OmniBiz Suite cobre o dia a dia das equipas, dos clientes e das horas
              trabalhadas.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedModules.map((m) => (
              <article
                key={m.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-3xl transition-bounce group-hover:bg-gradient-primary group-hover:shadow-glow-primary">
                  {m.icon}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{m.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {m.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {m.href && (
                  <a
                    href={m.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:gap-3"
                  >
                    {m.cta}
                    <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos adicionais */}
      <section id="adicionais" className="relative scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Módulos adicionais</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cresça por <span className="text-gradient">módulos</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ative apenas o que precisa e acrescente mais funcionalidades quando o negócio crescer.
            </p>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <li
                key={a.title}
                className="rounded-2xl border border-border bg-card/70 p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Os valores dependem do plano e dos módulos escolhidos.{" "}
            <a href="/#precos" className="font-semibold text-primary hover:underline">
              Ver planos e preços
            </a>
          </p>
        </div>
      </section>

      {/* Trabalho Extra em destaque */}
      <section
        id="trabalho-extra"
        className="relative scroll-mt-20 bg-surface-elevated/40 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Novidade</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Trabalho Extra: o convite certo, à <span className="text-gradient">pessoa certa</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Quando um cliente pede um serviço fora do horário normal, regista-o no sistema e
              convida a equipa de extras.
            </p>
            <ul className="mt-8 space-y-4">
              {extraSteps.map((step) => (
                <li key={step} className="flex gap-3 text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <a
              href={MANUAL_EXTRA_PATH}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary/50 hover:bg-card"
            >
              Abrir o manual do Trabalho Extra
              <Arrow />
            </a>
          </div>

          {/* Ilustração do convite (dados de exemplo) */}
          <div
            role="img"
            aria-label="Exemplo do convite de trabalho extra que o funcionário recebe no ecrã"
            className="mx-auto w-full max-w-md rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Exemplo · ecrã do funcionário
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display text-lg font-bold text-foreground">
                Trabalho extra disponível
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                2 vagas · os primeiros a aceitar ficam com as vagas.
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">Limpeza pós-obra</p>
              <p className="mt-1 text-sm text-muted-foreground">
                08/11/2026 · 09:00–13:00
                <br />
                09/11/2026 · 09:00–13:00
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Ao aceitar, fica com todos os dias.
              </p>
              <div className="mt-5 flex flex-wrap justify-end gap-2" aria-hidden>
                <span className="rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground">
                  Depois
                </span>
                <span className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground">
                  Recusar
                </span>
                <span className="rounded-lg bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
                  Aceitar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pontos fortes */}
      <section id="seguranca" className="relative scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Pensado para equipas</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cada pessoa vê o que <span className="text-gradient">precisa de ver</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manuais */}
      <section id="manuais" className="relative scroll-mt-20 bg-surface-elevated/40 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Manuais</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Manuais de <span className="text-gradient">utilização</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Guias passo a passo, com imagens dos ecrãs, para as equipas começarem a usar o sistema
              sem dúvidas.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {manuals.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="group flex flex-col rounded-3xl border border-border bg-gradient-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow-primary"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {m.meta}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{m.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {m.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth group-hover:gap-3">
                  Abrir manual
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="relative scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planos para empresas de todos os tamanhos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Escolha o plano pelo número de funcionários e utilizadores, e acrescente módulos quando
            precisar.
          </p>
          <a
            href="/#precos"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary/50 hover:bg-card"
          >
            Ver planos e preços
            <Arrow />
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Quer ver o OmniBiz Suite <span className="text-gradient-accent">a funcionar?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Fale connosco e mostramos o sistema com o exemplo do seu negócio.
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-9 py-5 text-lg font-bold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.05]"
          >
            👉 Pedir demonstração
          </a>
          <p className="mt-5 text-sm text-muted-foreground">
            Atendimento humano · Resposta em até 24 horas úteis
          </p>
        </div>
      </section>
    </PageShell>
  );
}
