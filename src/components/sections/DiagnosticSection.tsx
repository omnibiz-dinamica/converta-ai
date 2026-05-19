import { wa } from "@/lib/contact";

export function DiagnosticSection() {
  return (
    <section id="diagnostico" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-cta p-10 shadow-glow-primary sm:p-16">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, oklch(0.14 0.02 145) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-background/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur">
              🎁 Gratuito · Sem compromisso
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              Receba um diagnóstico gratuito do seu atendimento
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Vamos analisar seu processo atual e mostrar exatamente onde você está perdendo
              clientes — e como resolver.
            </p>
            <a
              href={wa("Quero meu diagnóstico gratuito de atendimento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-foreground shadow-elegant transition-bounce hover:scale-[1.04]"
            >
              👉 Quero meu diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
