"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const flow = [
  { label: "AI Applications", accent: true },
  { label: "LLMs & Agents", accent: true },
  { label: "RAG Pipelines", accent: true },
  { label: "Computer Vision", accent: true },
  { label: "Full-Stack Systems", accent: false },
  { label: "Mobile (React Native)", accent: false },
  { label: "Backend (Node.js, Go)", accent: false },
  { label: "Infrastructure & Deployment", accent: false },
];

const toolGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "JavaScript"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Postgres", "Redis", "GraphQL"],
  },
  {
    category: "Infra",
    items: ["Docker", "AWS", "Vercel", "Linux"],
  },
];

export function Skills() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <section id="craft" className="relative px-6 md:px-10 py-24 md:py-32 bg-forest overflow-hidden">
      <div className="section-watermark top-0 right-0 text-cream/5">
        Stack
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim(0)}>
          <span className="font-mono text-[10px] text-cream/40 uppercase tracking-[0.2em] mb-2 block">
            Technical craft
          </span>
          <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-cream mb-16">
            Building across the stack
          </h2>
        </motion.div>

        <motion.div {...anim(0.1)} className="mb-20">
          <div className="grid md:grid-cols-4 gap-3 md:gap-4">
            {flow.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className={`flex-1 px-5 py-3.5 rounded-full border text-sm font-medium transition-all ${
                    item.accent
                      ? "bg-mustard text-ink border-mustard"
                      : "border-cream/20 text-cream/80"
                  }`}
                >
                  {item.label}
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="text-cream/30 shrink-0 hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {toolGroups.map((group, i) => (
            <motion.div
              key={group.category}
              {...anim(0.15 + i * 0.05)}
              className="border border-cream/10 rounded-2xl p-5"
            >
              <span className="font-mono text-[10px] text-cream/40 uppercase tracking-[0.15em] block mb-3">
                {group.category}
              </span>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="block text-sm text-cream/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
