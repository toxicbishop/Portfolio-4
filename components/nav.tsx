"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { id: "work", label: "Work" },
  { id: "craft", label: "Craft" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 bg-cream/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg tracking-tight text-ink hover:text-forest transition-colors"
        >
          Pranav Arun
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block text-sm text-muted hover:text-ink transition-colors px-3 py-1.5 rounded-md hover:bg-ink/5"
            >
              {link.label}
            </button>
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
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setOpen(false); }}
                className="text-left text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
