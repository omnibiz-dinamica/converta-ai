export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cta shadow-glow-primary">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-background">
            <path
              d="M4 7h16M4 12h10M4 17h16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="18" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Dinâmica<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tecnologia Inteligente
        </span>
      </div>
    </div>
  );
}
