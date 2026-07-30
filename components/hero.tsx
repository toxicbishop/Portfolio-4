"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { GithubLogo, LinkedinLogo, At, InstagramLogo, ArrowDown } from "@phosphor-icons/react";


export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const portraitY = useTransform(scrollY, [0, 800], [0, 100]);
  const textY = useTransform(scrollY, [0, 800], [0, -60]);
  const watermarkY = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="min-h-dvh flex items-center px-6 md:px-10 pt-24 pb-12 relative overflow-hidden">
      <motion.div
        style={{ y: watermarkY, opacity }}
        className="absolute top-20 left-[45%] font-display text-[13vw] leading-none text-forest/5 pointer-events-none select-none z-0"
      >
        PRANAV
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-0 items-center relative z-10">
        <motion.div
          style={{ y: portraitY }}
          className="md:col-span-5 relative h-full min-h-[60vh] md:min-h-[70vh]"
        >
          <div className="portrait-frame rounded-tr-[3rem] rounded-bl-[3rem] glow-border">
            <Image
              src="/profile-avatar.jpg"
              alt="Pranav Arun"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 40vw"
            />

          </div>

        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="md:col-span-7 md:pl-12 lg:pl-20 mt-8 md:mt-0"
        >
          <motion.p
            {...fade(0.15)}
            className="font-mono text-xs text-muted tracking-widest uppercase mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            {...fade(0.2)}
            className="font-display text-[4rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] tracking-tight text-gradient -ml-0.5"
          >
            Pranav Arun
          </motion.h1>
          <motion.p
            {...fade(0.3)}
            className="text-base md:text-lg text-muted leading-relaxed max-w-[40ch] mt-6 mb-8"
          >
            Full-stack developer and AI/ML engineer who builds products at the
            intersection of engineering depth and design intuition.
          </motion.p>
          <motion.div
            {...fade(0.4)}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mustard text-ink text-sm font-medium hover:bg-mustard/90 active:scale-[0.97] transition-all hover-glow"
            >
              View work <ArrowDown size={14} />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 text-ink text-sm font-medium hover:bg-ink/5 active:scale-[0.97] transition-all"
            >
              Get in touch
            </button>
          </motion.div>
          <motion.div
            {...fade(0.5)}
            className="flex items-center gap-4 mt-8"
          >
            <a href="https://github.com/toxicbishop" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors block" aria-label="GitHub">
              <GithubLogo size={18} />
            </a>
            <a href="https://www.linkedin.com/in/pranav-arun" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors block" aria-label="LinkedIn">
              <LinkedinLogo size={18} />
            </a>
            <a href="https://www.instagram.com/toxicbishop_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors block" aria-label="Instagram">
              <InstagramLogo size={18} />
            </a>
            <a href="mailto:pranavarun19@gmail.com" className="text-muted hover:text-ink transition-colors block" aria-label="Email">
              <At size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
