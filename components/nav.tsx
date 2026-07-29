"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Magnetic } from "@/components/magnetic";

const links = [
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Craft" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-ink hover:text-forest transition-colors"
        >
          Pranav Arun
        </a>
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Magnetic key={link.href}>
              <a
                href={link.href}
                className="block text-sm text-muted hover:text-ink transition-colors px-3 py-1.5"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="md:hidden mt-4 bg-cream border border-ink/10 rounded-xl p-5">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
