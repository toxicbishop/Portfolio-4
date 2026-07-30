"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const posts = [
  {
    title: "Chain-of-Thought Prompting: A Practical Guide",
    excerpt: "How structured reasoning prompts improve LLM output reliability — with real benchmarks from my COT dashboard project.",
    date: "2025",
    tag: "AI",
  },
  {
    title: "Building a College ERP from Scratch",
    excerpt: "Architecture decisions, authentication flows, and the unexpected complexity of academic scheduling systems.",
    date: "2025",
    tag: "Engineering",
  },
  {
    title: "Why I Treat UI Design Like Editorial Layout",
    excerpt: "Applying Swiss grid principles and typographic hierarchy to build interfaces that feel intentional, not templated.",
    date: "2024",
    tag: "Design",
  },
];

export function Writing() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <section id="writing" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="section-watermark top-0 left-0">Notes</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim(0)} className="grid md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2 block">
              Writing
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[0.95] tracking-tight text-forest mb-6">
              Notes &amp; thoughts
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Ideas, experiments, and things I&apos;ve learned building at the
              intersection of AI and full-stack engineering.
            </p>
          </div>
          <div className="md:col-span-3 space-y-5">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                {...anim(0.1 + i * 0.06)}
                className="group bg-white rounded-xl p-5 border border-ink/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                        {post.date}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-forest/10 text-forest uppercase tracking-wider">
                        {post.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-ink group-hover:text-forest transition-colors mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted group-hover:text-ink transition-colors shrink-0 mt-1"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
