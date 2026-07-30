"use client";

import { motion, useReducedMotion } from "motion/react";

const roles = [
  {
    company: "Cognifyz Technologies",
    companyUrl: "https://www.linkedin.com/company/cognifyz-techonologies",
    period: "Mar 2026 — May 2026",
    description: [
      "Software Development — Built and maintained production-grade applications",
      "Machine Learning — Worked on ML models and data-driven solutions",
      "Android Development — Developed mobile applications for the Android platform",
    ],
  },
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
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Experience() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      };

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          {...anim}
          className="grid md:grid-cols-5 gap-10 md:gap-16"
        >
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2 block">
              Experience
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[0.95] tracking-tight text-forest">
              Where I&apos;ve worked
            </h2>
          </div>
          <motion.div
            className="md:col-span-3 space-y-8"
            variants={reduce ? undefined : container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {roles.map((r) => (
              <motion.div
                key={`${r.company}-${r.period}`}
                variants={reduce ? undefined : item}
                className="relative pl-6 border-l border-forest/10"
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-forest -translate-x-1.25"
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                />
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mb-1">
                  {r.period}
                </span>
                {r.companyUrl ? (
                  <a
                    href={r.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-forest hover:underline mt-0.5 mb-2 inline-block"
                  >
                    {r.company}
                  </a>
                ) : (
                  <p className="text-sm text-muted mt-0.5 mb-2">{r.company}</p>
                )}
                {Array.isArray(r.description) ? (
                  <ul className="space-y-1.5 mt-2">
                    {r.description.map((point, i) => {
                      const [bold, rest] = point.split(" — ");
                      return (
                        <li key={i} className="text-sm text-ink/70 leading-relaxed flex gap-2">
                          <span className="text-forest mt-1 shrink-0">›</span>
                          <span><span className="font-medium text-ink">{bold}</span>{rest ? ` — ${rest}` : ""}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-sm text-ink/70 leading-relaxed">{r.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
