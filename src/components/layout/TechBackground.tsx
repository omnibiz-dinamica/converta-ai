export function TechBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 85%)",
      }}
    >
      {/* Flowing circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="trace-green" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.68 0.18 145)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.68 0.18 145)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.68 0.18 145)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trace-blue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.62 0.19 250)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.62 0.19 250)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.62 0.19 250)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base trace lines */}
        <g stroke="oklch(0.62 0.19 250)" strokeOpacity="0.18" strokeWidth="1" fill="none">
          <path d="M0 180 L280 180 L320 220 L640 220 L680 260 L1440 260" />
          <path d="M0 420 L200 420 L240 380 L520 380 L560 340 L900 340 L940 380 L1440 380" />
          <path d="M0 640 L360 640 L400 680 L780 680 L820 640 L1440 640" />
          <path d="M180 0 L180 140 L220 180" />
          <path d="M760 0 L760 200 L800 240" />
          <path d="M1200 0 L1200 220 L1240 260" />
          <path d="M420 900 L420 720 L460 680" />
          <path d="M1040 900 L1040 720 L1080 680" />
        </g>

        {/* Animated glowing traces */}
        <g fill="none" strokeWidth="1.5" strokeLinecap="round">
          <path
            d="M0 180 L280 180 L320 220 L640 220 L680 260 L1440 260"
            stroke="url(#trace-green)"
            strokeDasharray="120 400"
            className="animate-circuit-flow"
          />
          <path
            d="M0 420 L200 420 L240 380 L520 380 L560 340 L900 340 L940 380 L1440 380"
            stroke="url(#trace-blue)"
            strokeDasharray="140 400"
            style={{ animationDuration: "8s" }}
            className="animate-circuit-flow"
          />
          <path
            d="M0 640 L360 640 L400 680 L780 680 L820 640 L1440 640"
            stroke="url(#trace-green)"
            strokeDasharray="100 400"
            style={{ animationDuration: "10s" }}
            className="animate-circuit-flow"
          />
        </g>

        {/* Circuit nodes */}
        <g>
          {[
            [280, 180],
            [320, 220],
            [640, 220],
            [680, 260],
            [200, 420],
            [520, 380],
            [900, 340],
            [940, 380],
            [360, 640],
            [400, 680],
            [780, 680],
            [820, 640],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="3" fill="oklch(1 0 0)" />
              <circle
                cx={cx}
                cy={cy}
                r="3"
                fill="none"
                stroke={i % 2 === 0 ? "oklch(0.68 0.18 145)" : "oklch(0.62 0.19 250)"}
                strokeWidth="1.5"
              />
            </g>
          ))}
        </g>

        {/* Chip silhouettes */}
        <g fill="none" stroke="oklch(0.62 0.19 250)" strokeOpacity="0.22" strokeWidth="1">
          <rect x="1080" y="500" width="120" height="120" rx="10" />
          <rect x="1100" y="520" width="80" height="80" rx="4" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`pl-${i}`} x1={1080} y1={520 + i * 16} x2={1060} y2={520 + i * 16} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`pr-${i}`} x1={1200} y1={520 + i * 16} x2={1220} y2={520 + i * 16} />
          ))}

          <rect x="140" y="120" width="90" height="90" rx="8" />
          <rect x="155" y="135" width="60" height="60" rx="3" />
        </g>
      </svg>

      {/* Drifting particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 73) % 100;
          const top = (i * 47) % 100;
          const delay = (i * 1.3) % 8;
          const isGreen = i % 2 === 0;
          return (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full animate-particle-drift"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                background: isGreen ? "oklch(0.68 0.18 145 / 0.7)" : "oklch(0.62 0.19 250 / 0.7)",
                boxShadow: isGreen
                  ? "0 0 8px oklch(0.68 0.18 145 / 0.6)"
                  : "0 0 8px oklch(0.62 0.19 250 / 0.6)",
                animationDelay: `${delay}s`,
                animationDuration: `${14 + (i % 6)}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
