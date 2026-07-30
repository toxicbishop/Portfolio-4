"use client";

import { motion, useReducedMotion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const paraItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function About() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      };

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="section-watermark top-0 right-0 leading-[0.8]">
        About
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim} className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-4 block">
              About
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-forest">
              Engineering with an editorial eye
            </h2>
          </div>
          <motion.div
            className="space-y-5"
            variants={reduce ? undefined : container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={reduce ? undefined : paraItem} className="text-base md:text-lg text-ink/80 leading-relaxed">
              I build full-stack systems, mobile applications, and AI/ML
              pipelines — but what drives me is how it all <em>feels</em> when
              someone uses it. Every API boundary, every model output, every
              transition is a chance to make something that doesn&apos;t just
              work, but resonates.
            </motion.p>
            <motion.p variants={reduce ? undefined : paraItem} className="text-base md:text-lg text-ink/80 leading-relaxed">
              Currently exploring the frontier of LLMs, RAG architectures, and
              computer vision — shipping products that bring machine learning
              out of the notebook and into real workflows.
            </motion.p>
            <motion.p variants={reduce ? undefined : paraItem} className="text-base md:text-lg text-ink/80 leading-relaxed">
              When I&apos;m not shipping code, you&apos;ll find me studying chess
              openings, diving into game design, or curating playlists that
              match the mood of whatever I&apos;m building.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
