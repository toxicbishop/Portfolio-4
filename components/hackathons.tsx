"use client";

import { motion, useReducedMotion } from "motion/react";

const hackathons = [
  {
    event: "HIRE-4-THON National Level 24-Hour Hackathon",
    date: "Mar 26–27, 2026",
    location: "K. S. School of Engineering & Management (KSSEM)",
    project: {
      name: "Neotic",
      href: "https://github.com/memer0/Neotic"
    },
    description: [
      "Project: Neotic — Enterprise-grade AI reasoning platform bridging complex Chain-of-Thought (CoT) processes",
      "Features — Visualizes internal analytical steps as a dynamic Directed Acyclic Graph (DAG)",
      "Team Neotic (2026) — Developed with Aryan and G Pavan Kumar"
    ],
  },
  {
    event: "Electrohack 3.0 National Level Hackathon",
    date: "Mar 14, 2026",
    location: "K.S. Institute of Technology (KSIT)",
    project: {
      name: "Student Stock Market Analysis",
      href: "https://github.com/toxicbishop/Student-Stock-Market-Analysis"
    },
    description: [
      "Project Built — Real-time virtual stock market simulator and analysis platform",
      "Tech Stack — Built with Next.js, Prisma, Firebase, and Gemini AI",
      "Team — Developed with Mithil and Supreeth"
    ],
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
};

export function Hackathons() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, transform: "translateY(24px)" },
        whileInView: { opacity: 1, transform: "translateY(0px)" },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
      };

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-forest text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          {...anim}
          className="grid md:grid-cols-5 gap-10 md:gap-16"
        >
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] text-mustard uppercase tracking-[0.2em] mb-2 block">
              Competitions
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[0.95] tracking-tight">
              Hackathons
            </h2>
          </div>
          <motion.div
            className="md:col-span-3 space-y-12"
            variants={reduce ? undefined : container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {hackathons.map((h) => (
              <motion.div
                key={h.event}
                variants={reduce ? undefined : item}
                className="relative pl-6 border-l border-cream/10"
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-mustard -translate-x-1.25"
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
                <span className="font-mono text-[11px] text-cream/50 uppercase tracking-wider block mb-1">
                  {h.date} | {h.location}
                </span>
                <h3 className="text-xl md:text-2xl font-display mt-2 mb-1">
                  {h.event}
                </h3>
                <a
                  href={h.project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mustard hover:underline mt-0.5 mb-4 inline-block font-mono"
                >
                  View Project: {h.project.name}
                </a>
                <ul className="space-y-2 mt-2">
                  {h.description.map((point, i) => {
                    const [bold, rest] = point.split(" — ");
                    return (
                      <li key={i} className="text-sm text-cream/70 leading-relaxed flex gap-2">
                        <span className="text-mustard mt-1 shrink-0">›</span>
                        <span><span className="font-medium text-cream">{bold}</span>{rest ? ` — ${rest}` : ""}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
