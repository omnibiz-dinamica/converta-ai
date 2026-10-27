import { useEffect, useRef, useState } from "react";
import { MANUAL_GROUPS } from "@/lib/manuals";
import { SUITE_PATH } from "@/lib/pages";
import { Logo } from "./Logo";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Casos", href: "#casos-uso" },
  { label: "Agentes IA", href: "#agentes-ia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Preços", href: "#precos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Contacto", href: "#contato" },
];

// O menu "Sistema" aparece logo a seguir a "Serviços".
const SYSTEM_MENU_AFTER = 2;

type NavbarProps = {
  /** `true` na página inicial (âncoras `#...`); `false` nas outras páginas (`/#...`). */
  home?: boolean;
  /** Destaca o menu "Sistema" quando a página atual pertence a ele. */
  activeSystem?: boolean;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`h-3.5 w-3.5 shrink-0 transition-smooth ${open ? "rotate-90" : ""}`}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "Tutoriais OmniBiz" → pastas (Clientes, Trabalho Extra…) → manuais. */
function TutorialTree({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const row =
    "flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground transition-smooth hover:bg-secondary";

  return (
    <div>
      <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className={row}>
        Tutoriais OmniBiz
        <Chevron open={open} />
      </button>
      {open && (
        <div className="ml-4 border-l border-border pl-2">
          {MANUAL_GROUPS.map((g) => {
            const isOpen = group === g.label;
            return (
              <div key={g.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setGroup(isOpen ? null : g.label)}
                  className={row.replace("text-foreground", "text-foreground/90")}
                >
                  {g.label}
                  <Chevron open={isOpen} />
                </button>
                {isOpen && (
                  <div className="ml-4 border-l border-border pl-2">
                    {g.items.map((m) => (
                      <a
                        key={m.href}
                        href={m.href}
                        onClick={onNavigate}
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                      >
                        {m.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SystemMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-smooth hover:text-foreground ${
          active || open ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Sistema
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`h-3.5 w-3.5 transition-smooth ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-border bg-card p-2 shadow-elegant">
            <a
              href={`${SUITE_PATH}#manuais`}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className="block rounded-xl px-3 py-3 transition-smooth hover:bg-secondary"
            >
              <span className="block text-sm font-semibold text-foreground">OmniBiz Suite</span>
            </a>
            <TutorialTree onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar({ home = true, activeSystem = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Fora da página inicial, as âncoras precisam do prefixo "/".
  const to = (hash: string) => (home ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled || !home
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={home ? "#top" : "/"} className="transition-smooth hover:opacity-80">
          <Logo />
        </a>

        <nav
          className="hidden whitespace-nowrap items-center gap-4 xl:gap-7 lg:flex"
          aria-label="Principal"
        >
          {links.slice(0, SYSTEM_MENU_AFTER).map((l) => (
            <a key={l.href} href={to(l.href)} className={linkClass}>
              {l.label}
            </a>
          ))}
          <SystemMenu active={activeSystem} />
          {links.slice(SYSTEM_MENU_AFTER).map((l) => (
            <a key={l.href} href={to(l.href)} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={to("#contato")}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.03]"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Principal (telemóvel)"
          >
            {links.slice(0, SYSTEM_MENU_AFTER).map((l) => (
              <a
                key={l.href}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}

            <div className="rounded-md px-3 pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Sistema
              </span>
              <a
                href={`${SUITE_PATH}#manuais`}
                onClick={() => setOpen(false)}
                aria-current={activeSystem ? "page" : undefined}
                className={`mt-1 block rounded-md border-l-2 border-primary/50 py-2.5 pl-3 text-sm font-semibold transition-smooth hover:bg-secondary ${
                  activeSystem ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                OmniBiz Suite
              </a>
              <div className="mt-1">
                <TutorialTree onNavigate={() => setOpen(false)} />
              </div>
            </div>

            {links.slice(SYSTEM_MENU_AFTER).map((l) => (
              <a
                key={l.href}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={to("#contato")}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-primary"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
