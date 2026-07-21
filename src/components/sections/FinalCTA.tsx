import { wa } from "@/lib/contact";

const URL = wa("Quero falar com um especialista.");

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Pronto para reduzir tarefas manuais e{" "}
          <span className="text-gradient-accent">responder melhor?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Fale connosco e perceba que processos podem ser automatizados na sua empresa.
        </p>
        <a
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-9 py-5 text-lg font-bold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.05] animate-pulse-glow"
        >
          👉 Falar com especialista
        </a>
        <p className="mt-5 text-sm text-muted-foreground">
          Atendimento humano · Diagnóstico inicial
        </p>
      </div>
    </section>
  );
}
