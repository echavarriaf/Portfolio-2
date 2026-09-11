"use client";

import { useEffect, useState } from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import useActiveSection from "@/hooks/useActiveSection";

const navItems = [
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "work",
    label: "Work",
    href: "#work",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "capabilities",
    label: "Skills",
    href: "#capabilities",
  },
];

const sectionIds = [
  "home",
  "about",
  "work",
  "experience",
  "capabilities",
  "contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  const shouldReduceMotion = useReducedMotion();

  const activeSection =
    useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isContactActive =
    activeSection === "contact";

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
          paddingTop: isScrolled ? 10 : 16,
          paddingBottom: isScrolled ? 10 : 16,
        }}
        transition={{
          duration: 0.3,
        }}
        className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8"
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled
              ? "rgba(5, 5, 5, 0.88)"
              : "rgba(5, 5, 5, 0.42)",

            borderColor: isScrolled
              ? "rgba(255, 255, 255, 0.13)"
              : "rgba(255, 255, 255, 0.08)",
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex min-h-14 items-center justify-between rounded-2xl border px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5"
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

            <span
              aria-hidden="true"
              className="ml-0.5 text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              .
            </span>

            <span className="sr-only">
              . Home
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive
                      ? "location"
                      : undefined
                  }
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full border border-white/[0.07] bg-white/[0.05]"
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </a>
              );
            })}

            <motion.a
              href="#contact"
              aria-current={
                isContactActive
                  ? "location"
                  : undefined
              }
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
              className={`ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isContactActive
                  ? "bg-sky-400 text-black shadow-[0_0_35px_rgba(56,189,248,0.15)]"
                  : "bg-white text-black hover:bg-sky-400"
              }`}
            >
              Contact

              <ArrowIcon />
            </motion.a>
          </div>

          {/* Mobile / Tablet */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() =>
              setIsOpen((current) => !current)
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.08] lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen
                  ? "scale-x-0 opacity-0"
                  : "scale-x-100 opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                isOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
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
            marginTop: isOpen ? 10 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden lg:hidden"
        >
          <div className="rounded-2xl border border-white/10 bg-[#070707]/95 p-3 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      isActive
                        ? "location"
                        : undefined
                    }
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-sky-400"
                      />
                    )}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                aria-current={
                  isContactActive
                    ? "location"
                    : undefined
                }
                className={`mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                  isContactActive
                    ? "bg-sky-400 text-black"
                    : "bg-white text-black hover:bg-sky-400"
                }`}
              >
                Contact

                <ArrowIcon />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

function ArrowIcon() {
  return (
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
  );
}