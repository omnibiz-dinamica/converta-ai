import { EMAIL, LINKEDIN, PHONE_DISPLAY, PHONE_NUMBER, wa } from "@/lib/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
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

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="rounded-3xl border border-border bg-gradient-card p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-foreground">Informações de contato</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <ContactItem icon="✉️" label="E-mail" value={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactItem icon="💬" label="WhatsApp" value={PHONE_DISPLAY} href={wa("Olá! Vim pelo site dinamicasolucao.com")} />
                <ContactItem icon="📞" label="Telefone" value={PHONE_DISPLAY} href={`tel:+${PHONE_NUMBER}`} />
                <ContactItem icon="💼" label="LinkedIn" value="dinamicasolucao" href={LINKEDIN} />
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-primary/30 bg-primary/5 p-8">
              <h4 className="font-display text-lg font-bold text-foreground">⚡ Resposta rápida garantida</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nossa equipe analisa cada solicitação individualmente e retorna em até{" "}
                <span className="font-semibold text-foreground">24 horas úteis</span> com uma proposta personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-smooth hover:border-primary/40"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-lg shadow-glow-primary">{icon}</span>
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="text-sm font-medium text-foreground transition-smooth group-hover:text-primary">{value}</div>
        </div>
      </a>
    </li>
  );
}
