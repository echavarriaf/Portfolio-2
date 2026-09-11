"use client";

import { motion, useReducedMotion } from "motion/react";

import { contact } from "@/data/contact";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const hasEmail = !contact.email.startsWith("YOUR_");

  const hasGithub = !contact.github.startsWith("YOUR_");

  const hasLinkedin = !contact.linkedin.startsWith("YOUR_");

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-250px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-xs text-sky-400">05</span>

          <span className="h-px w-10 bg-white/10" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </span>
        </motion.div>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <p className="mb-5 text-sm font-medium text-zinc-500">
              Have a problem worth solving?
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,11vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
              <span className="block">Let&apos;s build</span>

              <span className="block text-zinc-500">something that</span>

              <span className="block">
                makes an{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  impact.
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-3"
          >
            <p className="max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
              {contact.availability}
            </p>

            <div className="mt-8">
              {hasEmail ? (
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.03,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-sky-400 min-[430px]:w-auto sm:px-7 sm:py-4"
                >
                  Start a conversation
                  <ArrowUpRightIcon />
                </motion.a>
              ) : (
                <div className="inline-flex max-w-full rounded-full border border-dashed border-white/15 px-5 py-3 font-mono text-[10px] text-zinc-600 sm:px-6 sm:text-xs">
                  Add your email in data/contact.ts
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:rounded-[2rem] md:grid-cols-3 lg:mt-32"
        >
          <ContactLink
            label="Email"
            value={contact.email}
            href={hasEmail ? `mailto:${contact.email}` : undefined}
            external={false}
          />

          <ContactLink
            label="LinkedIn"
            value={hasLinkedin ? "Connect with me" : "Add LinkedIn URL"}
            href={hasLinkedin ? contact.linkedin : undefined}
          />

          <ContactLink
            label="GitHub"
            value={hasGithub ? "Explore my code" : "Add GitHub URL"}
            href={hasGithub ? contact.github : undefined}
          />
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [1, 0.35, 1],
                      scale: [1, 0.85, 1],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
            />

            <p className="text-sm text-zinc-400">
              Available for the right opportunity.
            </p>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            {contact.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
  external = true,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          {label}
        </p>

        <p className="mt-3 break-all text-sm font-medium text-zinc-300">
          {value}
        </p>
      </div>

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          href
            ? "border-white/[0.08] bg-white/[0.03] text-zinc-500 group-hover:border-sky-400/20 group-hover:bg-sky-400/[0.08] group-hover:text-sky-300"
            : "border-white/[0.05] text-zinc-800"
        }`}
      >
        <ArrowUpRightIcon />
      </div>
    </>
  );

  const className =
    "group flex min-h-[125px] items-center justify-between gap-5 bg-[#070707] p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[150px] sm:p-8";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
