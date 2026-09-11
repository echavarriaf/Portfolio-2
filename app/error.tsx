"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-6">
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

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/[0.04] blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <Link
          href="/"
          className="group mx-auto flex w-fit items-center text-xl font-bold tracking-[-0.04em]"
        >
          <span className="transition-colors duration-300 group-hover:text-sky-300">
            FE
          </span>

          <span className="ml-0.5 text-sky-400">
            .
          </span>
        </Link>

        <div className="mt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
            System Error
          </p>

          <h1 className="mt-6 text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-[-0.055em]">
            Something didn&apos;t
            <span className="text-zinc-500">
              {" "}
              compile as planned.
            </span>
          </h1>
        </div>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
          An unexpected error occurred while rendering this part of the
          application. You can try loading it again or return to the homepage.
        </p>

        <div className="mx-auto mt-10 max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909]/80 text-left shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
            </div>

            <span className="font-mono text-[9px] text-zinc-700">
              runtime.ts
            </span>
          </div>

          <div className="p-5 font-mono text-xs leading-6 sm:p-6">
            <p>
              <span className="text-purple-400">try</span>{" "}
              <span className="text-zinc-500">{"{"}</span>
            </p>

            <p className="pl-5 text-zinc-500">
              renderApplication();
            </p>

            <p>
              <span className="text-zinc-500">{"}"}</span>{" "}
              <span className="text-purple-400">catch</span>{" "}
              <span className="text-zinc-500">
                (error) {"{"}
              </span>
            </p>

            <p className="pl-5 text-red-300/80">
              recover();
            </p>

            <p className="text-zinc-500">
              {"}"}
            </p>

            {error.digest && (
              <p className="mt-4 border-t border-white/[0.06] pt-4 text-[10px] text-zinc-700">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 min-[430px]:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-sky-400"
          >
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}