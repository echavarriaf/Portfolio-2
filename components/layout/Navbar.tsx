"use client";

import { useState } from "react";

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">
          <a
            href="#home"
            className="group flex items-center gap-1 text-lg font-bold tracking-tight"
            onClick={closeMenu}
          >
            <span>FE</span>

            <span className="text-sky-400 transition-transform duration-300 group-hover:translate-x-1">
              .
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-sky-400"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-0.5 w-5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "mt-3 max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-sky-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}