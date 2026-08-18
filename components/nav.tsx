"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  { id: "work", label: "Work" },
  { id: "craft", label: "Craft" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Canonical --ease-out from animate skill
const EASE_OUT = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 bg-cream/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 shadow-sm">
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

      {/*
        Mobile menu: Purpose = Spatial consistency — the panel slides down
        from the nav bar it belongs to, making it clear where it came from.
        Tier: occasional (user opens/closes a few times per visit) → standard animation.
        Tool: Motion AnimatePresence for exit animation support.
        Properties: translateY + opacity only.
        Easing: ease-out on enter (deliberate), faster ease-out on exit (system response).
        Duration: 220ms enter, 150ms exit — within the 150–250ms dropdown budget.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            key="mobile-nav"
            initial={reduce ? { opacity: 1 } : { transform: "translateY(-8px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { transform: "translateY(-6px)", opacity: 0 }}
            transition={{
              duration: reduce ? 0.15 : 0.22,
              ease: EASE_OUT,
            }}
            className="md:hidden mt-2 mb-3 bg-cream border border-ink/10 rounded-xl p-5"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
