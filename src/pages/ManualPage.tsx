import { PageShell } from "@/components/layout/PageShell";
import { wa } from "@/lib/contact";
import type { PageMeta } from "@/lib/pages";
import { SUITE_PATH } from "@/lib/pages";
import { usePageMeta } from "@/lib/pageMeta";
import "@/styles/manual.css";

type ManualPageProps = {
  /** Nome curto do manual, usado na navegação estrutural. */
  crumb: string;
  meta: PageMeta;
  /** HTML do manual (conteúdo estático do próprio repositório). */
  html: string;
};

const HELP_URL = wa("Olá! Preciso de ajuda com o OmniBiz Suite.");

export function ManualPage({ crumb, meta, html }: ManualPageProps) {
  usePageMeta(meta);

  const link = "transition-smooth hover:text-primary";

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <nav
          aria-label="Navegação estrutural"
          className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          <a href="/" className={link}>
            Início
          </a>
          <span aria-hidden>/</span>
          <a href={SUITE_PATH} className={link}>
            OmniBiz Suite
          </a>
          <span aria-hidden>/</span>
          <a href={`${SUITE_PATH}#manuais`} className={link}>
            Manuais
          </a>
          <span aria-hidden>/</span>
          <span aria-current="page" className="font-semibold text-foreground">
            {crumb}
          </span>
        </nav>
      </div>

      <div className="manual">
        {/* Conteúdo estático do próprio repositório (não vem de utilizadores). */}
        <div className="wrap" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-gradient-card p-7 shadow-card sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Ficou com alguma dúvida?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fale com a nossa equipa ou veja os outros manuais do OmniBiz Suite.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${SUITE_PATH}#manuais`}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:border-primary/50 hover:bg-card"
              >
                Todos os manuais
              </a>
              <a
                href={HELP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
              >
                💬 Falar connosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
