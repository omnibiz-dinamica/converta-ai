import { useState } from "react";
import { z } from "zod";
import { EMAIL, LINKEDIN, PHONE_DISPLAY, PHONE_NUMBER, wa } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().min(6, "Telefone inválido").max(30),
  company: z.string().trim().max(100).optional(),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(1000).optional(),
});

const services = [
  "Desenvolvimento de Sistemas",
  "Automação de Processos",
  "Site/Plataforma Web",
  "Agente Inteligente IA",
  "Consultoria Tech",
  "Outro",
];

export function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(raw);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = String(i.path[0]);
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Envia para WhatsApp
    const text = `Olá! Sou ${result.data.name}.
Empresa: ${result.data.company || "—"}
E-mail: ${result.data.email}
Telefone: ${result.data.phone}
Serviço: ${result.data.service}
Mensagem: ${result.data.message || "—"}`;
    window.open(wa(text), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Esquerda - Form */}
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Contacto
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Vamos construir sua <span className="text-gradient">solução?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Conte-nos sobre seu projeto e receba um orçamento personalizado.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-10 space-y-4 rounded-3xl border border-border bg-gradient-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome completo *" name="name" error={errors.name} />
                <Field label="E-mail *" name="email" type="email" error={errors.email} />
                <Field label="WhatsApp / Telefone *" name="phone" error={errors.phone} />
                <Field label="Empresa" name="company" error={errors.company} />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Serviço de interesse *
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                >
                  <option value="" disabled>
                    Selecione um serviço
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Descreva brevemente sua necessidade
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.02] sm:w-auto"
              >
                👉 Enviar e aguardar contato
              </button>

              {sent && (
                <p className="text-sm text-primary">
                  ✅ Recebemos sua mensagem! Abrimos o WhatsApp para concluir o envio.
                </p>
              )}
            </form>
          </div>

          {/* Direita - Info */}
          <div className="lg:pt-16">
            <div className="rounded-3xl border border-border bg-gradient-card p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-foreground">
                Informações de contato
              </h3>
              <ul className="mt-6 space-y-4 text-sm">
                <ContactItem
                  icon="✉️"
                  label="E-mail"
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                />
                <ContactItem
                  icon="💬"
                  label="WhatsApp"
                  value={PHONE_DISPLAY}
                  href={wa("Olá! Vim pelo site dinamicasolucao.com")}
                />
                <ContactItem
                  icon="📞"
                  label="Telefone"
                  value={PHONE_DISPLAY}
                  href={`tel:+${PHONE_NUMBER}`}
                />
                <ContactItem icon="💼" label="LinkedIn" value="dinamicasolucao" href={LINKEDIN} />
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-primary/30 bg-primary/5 p-8">
              <h4 className="font-display text-lg font-bold text-foreground">
                ⚡ Resposta rápida garantida
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nossa equipe analisa cada solicitação individualmente e retorna em até{" "}
                <span className="font-semibold text-foreground">24 horas úteis</span> com uma
                proposta personalizada para o seu projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-smooth hover:border-primary/40"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-lg shadow-glow-primary">
          {icon}
        </span>
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="text-sm font-medium text-foreground transition-smooth group-hover:text-primary">
            {value}
          </div>
        </div>
      </a>
    </li>
  );
}
