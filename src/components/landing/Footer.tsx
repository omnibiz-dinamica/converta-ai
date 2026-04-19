import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Automatizamos atendimento com IA para empresas que querem vender mais — sem perder
              tempo nem clientes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Solução", "#solucao"],
                ["Serviços", "#servicos"],
                ["Resultados", "#resultados"],
                ["Diagnóstico", "#diagnostico"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-smooth hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-smooth hover:text-primary"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dinamicasolucao.com"
                  className="transition-smooth hover:text-primary"
                >
                  ✉️ contato@dinamicasolucao.com
                </a>
              </li>
              <li>🌐 dinamicasolucao.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dinâmica Solução · Tecnologia Inteligente. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com <span className="text-primary">●</span> automação e IA
          </p>
        </div>
      </div>
    </footer>
  );
}
