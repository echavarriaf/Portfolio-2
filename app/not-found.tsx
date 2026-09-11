import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-6">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.07] blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Return to homepage"
          className="group mx-auto flex w-fit items-center text-xl font-bold tracking-[-0.04em]"
        >
          <span className="transition-colors duration-300 group-hover:text-sky-300">
            FE
          </span>

          <span className="ml-0.5 text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5">
            .
          </span>
        </Link>

        {/* Error number */}
        <div className="mt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Error
          </p>

          <h1 className="mt-5 bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-[clamp(7rem,30vw,15rem)] font-bold leading-[0.75] tracking-[-0.08em] text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mx-auto mt-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">
            This route went
            <span className="text-zinc-500"> off the map.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or the URL might be incorrect.
          </p>
        </div>

        {/* Fake terminal */}
        <div className="mx-auto mt-10 max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909]/80 text-left shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
            </div>

            <span className="font-mono text-[9px] text-zinc-700">
              route-check.ts
            </span>
          </div>

          <div className="p-5 font-mono text-xs leading-6 sm:p-6">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-sky-300">route</span>{" "}
              <span className="text-zinc-600">=</span>{" "}
              <span className="text-orange-300">
                &quot;requested_page&quot;
              </span>
              <span className="text-zinc-600">;</span>
            </p>

            <p className="mt-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-sky-300">result</span>{" "}
              <span className="text-zinc-600">=</span>{" "}
              <span className="text-yellow-200">findRoute</span>
              <span className="text-zinc-500">(route);</span>
            </p>

            <p className="mt-4 text-red-300/80">→ RouteNotFound: 404</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col justify-center gap-3 min-[430px]:flex-row">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-sky-400"
          >
            Back to home
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path
                d="M19 12H5M5 12L11 6M5 12L11 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/#work"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
          >
            View my work
          </Link>
        </div>

        <p className="mt-16 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
          Felix Echavarria · Software · Automation · Data
        </p>
      </div>
    </main>
  );
}
