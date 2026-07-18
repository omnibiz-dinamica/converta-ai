import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { wa } from "@/lib/contact";

type Plan = {
  name: string;
  priceEUR: string;
  yearlyEUR: string;
  priceBRL: string;
  target: string;
  employees: string;
  users: string;
  reports: string;
  support: string;
  api: boolean;
  whiteLabel: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    priceEUR: "€29",
    yearlyEUR: "€290/ano (2 meses grátis)",
    priceBRL: "R$ 99",
    target: "Pequenas empresas",
    employees: "Até 5 funcionários",
    users: "1 utilizador",
    reports: "Relatórios básicos",
    support: "Suporte por email",
    api: false,
    whiteLabel: "—",
  },
  {
    name: "Professional",
    priceEUR: "€59",
    yearlyEUR: "€590/ano (2 meses grátis)",
    priceBRL: "R$ 179",
    target: "Empresas médias",
    employees: "Até 20 funcionários",
    users: "5 utilizadores",
    reports: "Relatórios avançados",
    support: "Suporte prioritário",
    api: false,
    whiteLabel: "—",
    popular: true,
  },
  {
    name: "Business",
    priceEUR: "€99",
    yearlyEUR: "€990/ano (2 meses grátis)",
    priceBRL: "R$ 299",
    target: "Empresas grandes",
    employees: "Até 75 funcionários",
    users: "20 utilizadores",
    reports: "Relatórios completos",
    support: "Suporte prioritário",
    api: true,
    whiteLabel: "—",
  },
  {
    name: "Enterprise",
    priceEUR: "desde €199",
    yearlyEUR: "Anual sob proposta",
    priceBRL: "a partir de R$ 599",
    target: "Grandes redes",
    employees: "Funcionários ilimitados",
    users: "Utilizadores ilimitados",
    reports: "Relatórios completos",
    support: "Suporte dedicado",
    api: true,
    whiteLabel: "Marca branca opcional",
  },
];

const modules = [
  { name: "Base OmniBiz", price: "Incluída em todos os planos", highlight: true },
  { name: "CRM", price: "+€15/mês" },
  { name: "Frota", price: "+€20/mês" },
  { name: "Financeiro", price: "+€20/mês" },
  { name: "WhatsApp com IA", price: "+€39/mês" },
  { name: "BI & Dashboards avançados", price: "+€25/mês" },
  { name: "Automações com IA", price: "+€49/mês" },
];

const launchOffers = [
  { icon: "🎁", title: "1º mês grátis", desc: "Comece sem pagar o primeiro mês em qualquer plano." },
  { icon: "🧪", title: "30 dias de teste", desc: "Teste completo sem necessidade de cartão." },
  { icon: "💸", title: "-50% por 3 meses", desc: "Metade do preço nos primeiros 3 meses." },
];

const baseIncluded = ["Gestão de funcionários", "Planeamento", "Folha de ponto", "App móvel"];

export function PricingSection() {
  const ctaHref = wa("Olá! Quero um orçamento OmniBiz.");

  return (
    <section id="precos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Precificação OmniBiz
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Planos simples para <span className="text-gradient">crescer por módulos</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Comece pequeno, cresça por módulos e mantenha custos previsíveis. Preços para
            Portugal, Bélgica e Espanha — com tabela equivalente para o Brasil.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative flex flex-col rounded-3xl border p-6 shadow-card transition-smooth ${
                p.popular
                  ? "border-primary/60 bg-gradient-card ring-2 ring-primary/30"
                  : "border-border bg-gradient-card hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-glow-primary">
                  <Sparkles className="h-3 w-3" /> Recomendado
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.target}</p>

              <div className="mt-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{p.priceEUR}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{p.yearlyEUR}</p>
                <p className="mt-2 text-xs font-medium text-accent">Brasil: {p.priceBRL}/mês</p>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm">
                <FeatureLi ok>{p.employees}</FeatureLi>
                <FeatureLi ok>{p.users}</FeatureLi>
                {baseIncluded.map((b) => (
                  <FeatureLi key={b} ok>
                    {b}
                  </FeatureLi>
                ))}
                <FeatureLi ok>{p.reports}</FeatureLi>
                <FeatureLi ok>{p.support}</FeatureLi>
                <FeatureLi ok={p.api}>{p.api ? "API incluída" : "Sem API"}</FeatureLi>
                <FeatureLi ok={p.whiteLabel !== "—"}>
                  {p.whiteLabel !== "—" ? p.whiteLabel : "Sem marca branca"}
                </FeatureLi>
              </ul>

              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-bounce hover:scale-[1.02] ${
                  p.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-primary"
                    : "border border-border bg-background/60 text-foreground hover:border-primary/40"
                }`}
              >
                {p.name === "Enterprise" ? "Pedir proposta" : "Começar agora"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/40">
                <tr className="border-b border-border">
                  <th className="px-5 py-4 font-semibold text-foreground">Comparativo</th>
                  {plans.map((p) => (
                    <th key={p.name} className="px-5 py-4 font-semibold text-foreground">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <Row label="Preço (EUR/mês)" values={plans.map((p) => p.priceEUR)} />
                <Row label="Brasil (BRL/mês)" values={plans.map((p) => p.priceBRL)} />
                <Row label="Funcionários" values={plans.map((p) => p.employees)} />
                <Row label="Utilizadores" values={plans.map((p) => p.users)} />
                <Row label="Relatórios" values={plans.map((p) => p.reports)} />
                <Row label="Suporte" values={plans.map((p) => p.support)} />
                <Row label="API" values={plans.map((p) => (p.api ? "✓" : "—"))} />
                <Row label="Marca branca" values={plans.map((p) => p.whiteLabel)} />
              </tbody>
            </table>
          </div>
        </div>

        {/* Modules */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Módulos adicionais
          </h3>
          <p className="mt-2 text-muted-foreground">
            Ative apenas o que precisa. Escale conforme o negócio cresce.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.name}
                className={`flex items-center justify-between rounded-2xl border p-4 transition-smooth ${
                  m.highlight
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-background/40 hover:border-primary/30"
                }`}
              >
                <span className="text-sm font-semibold text-foreground">{m.name}</span>
                <span className={`text-sm ${m.highlight ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {m.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Launch offer */}
        <div className="mt-16 rounded-3xl border border-accent/30 bg-accent/5 p-8 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Oferta de lançamento
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Escolha como quer começar
              </h3>
            </div>
            <p className="text-sm text-muted-foreground sm:max-w-sm">
              Três formas de experimentar o OmniBiz sem compromisso. Sem descontos permanentes.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {launchOffers.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-background/60 p-5 transition-smooth hover:border-accent/40"
              >
                <div className="text-2xl">{o.icon}</div>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">{o.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-2xl">
              O plano anual reduz cancelamento e melhora previsibilidade. Os valores podem ser
              reajustados uma vez por ano conforme índice oficial ou salário mínimo do país de
              faturação, com aviso mínimo de 30 dias.
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
            >
              👉 Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureLi({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      {ok ? (
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      ) : (
        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
      )}
      <span className={ok ? "text-foreground" : "text-muted-foreground line-through"}>{children}</span>
    </li>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-b border-border/60 last:border-0">
      <td className="px-5 py-3 font-medium text-foreground">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="px-5 py-3">
          {v}
        </td>
      ))}
    </tr>
  );
}
