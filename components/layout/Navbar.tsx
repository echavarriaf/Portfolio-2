"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: -25,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <motion.div
        animate={{
          paddingTop: isScrolled ? 12 : 20,
          paddingBottom: isScrolled ? 12 : 20,
        }}
        transition={{
          duration: 0.3,
        }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled
              ? "rgba(5, 5, 5, 0.78)"
              : "rgba(5, 5, 5, 0.35)",
            borderColor: isScrolled
              ? "rgba(255, 255, 255, 0.13)"
              : "rgba(255, 255, 255, 0.08)",
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex items-center justify-between rounded-2xl border px-5 py-3.5 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group relative flex items-center text-lg font-bold tracking-[-0.04em]"
          >
            <span className="transition-colors duration-300 group-hover:text-sky-300">
              FE
            </span>

            <span className="ml-0.5 text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5">
              .
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-sky-400"
            >
              Contact

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.08] md:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </motion.nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 12 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="rounded-2xl border border-white/10 bg-[#070707]/90 p-3 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-sky-400"
              >
                Contact

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}