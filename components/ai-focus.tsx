"use client";

import { motion, useReducedMotion } from "motion/react";
import { Brain, Gear, Robot, Eye } from "@phosphor-icons/react";

const areas = [
  {
    icon: Brain,
    title: "Large Language Models",
    description:
      "Fine-tuning, prompt engineering, and chain-of-thought reasoning for domain-specific applications.",
  },
  {
    icon: Gear,
    title: "RAG Architectures",
    description:
      "Retrieval-augmented generation pipelines that ground LLM outputs in real, verifiable data sources.",
  },
  {
    icon: Robot,
    title: "AI Agents",
    description:
      "Autonomous agent systems that plan, reason, and execute multi-step tasks with tool-use capabilities.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "CNNs for medical imaging classification, object detection, and real-time visual recognition systems.",
  },
];

export function AiFocus() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-cream overflow-hidden">
      <div className="section-watermark top-0 left-0">AI</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim(0)}>
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2 block">
            AI / ML Focus
          </span>
          <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-ink mb-12">
            Where engineering meets intelligence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              {...anim(0.1 + i * 0.06)}
              className="bg-white rounded-2xl p-6 md:p-8 border border-ink/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0 mt-1">
                  <area.icon size={16} className="text-cream" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...anim(0.3)}
          className="mt-10 p-6 md:p-8 rounded-2xl bg-forest text-cream"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-mustard text-lg">&#9733;</span>
            <span className="font-mono text-[10px] text-cream/50 uppercase tracking-[0.15em]">
              Current exploration
            </span>
          </div>
          <p className="font-display text-xl md:text-2xl leading-snug text-cream/90">
            Building autonomous agent systems that bridge LLM reasoning with
            real-world tool execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
