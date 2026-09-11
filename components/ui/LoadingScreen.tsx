type LoadingScreenProps = {
  label?: string;
  description?: string;
};

export default function LoadingScreen({
  label = "Loading",
  description = "Preparing the experience.",
}: LoadingScreenProps) {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#050505] px-5 text-white"
    >
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-[140px]"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        {/* Brand */}
        <div className="flex items-center text-2xl font-bold tracking-[-0.04em]">
          <span>FE</span>

          <span className="ml-0.5 text-sky-400">
            .
          </span>
        </div>

        {/* Loader */}
        <div className="relative mt-12 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

          <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-sky-400 border-r-sky-400/20" />

          <div className="h-2 w-2 animate-pulse rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
        </div>

        {/* Copy */}
        <p className="mt-10 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-400">
          {label}
        </p>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          {description}
        </p>

        {/* Progress visual */}
        <div
          aria-hidden="true"
          className="mt-8 h-px w-full max-w-[240px] overflow-hidden bg-white/[0.07]"
        >
          <div className="h-full w-1/2 animate-pulse bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="mt-6 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400/50 [animation-delay:150ms]" />

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400/20 [animation-delay:300ms]" />
        </div>

        <span className="sr-only">
          {label}. {description}
        </span>
      </div>
    </main>
  );
}