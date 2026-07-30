"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Magnetic } from "@/components/magnetic";

export function Contact() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="section-watermark top-0 right-0">Hello</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          {...anim}
          className="bg-forest rounded-4xl p-10 md:p-16 text-center md:text-left"
        >
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="font-mono text-[10px] text-cream/40 uppercase tracking-[0.2em] mb-3 block">
              Get in touch
            </span>
            <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-cream mb-4">
              Let&apos;s build something
            </h2>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[40ch] mb-8">
              I&apos;m always open to interesting projects, startup ideas, or
              conversations about AI and engineering.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="mailto:pranavarun19@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mustard text-ink text-sm font-medium hover:bg-mustard/90 active:scale-[0.97] transition-all"
                >
                  Send a message <ArrowRight size={14} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://github.com/toxicbishop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  GitHub
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://gitlab.com/toxicbishop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  GitLab
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/pranav-arun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://x.com/Pranav63076884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  X (Twitter)
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://discord.com/users/701732138269016064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  Discord
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.instagram.com/toxicbishop_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-cream/20 text-cream/80 text-sm font-medium hover:bg-cream/10 active:scale-[0.97] transition-all"
                >
                  Instagram
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
