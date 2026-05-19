import logoIcon from "@/assets/logo-icon.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <img
          src={logoIcon}
          alt="Dinâmica Solução"
          className="h-9 w-9 object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Dinâmica Solução<span className="text-primary">.</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tecnologia Inteligente
        </span>
      </div>
    </div>
  );
}
