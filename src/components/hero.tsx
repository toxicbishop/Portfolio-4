"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, Code, Sparkle } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { fadeUp, scaleIn, staggerContainer, heroWord } from "@/animations/variants"

export function Hero() {
  const reducedMotion = useReducedMotion()
  const heroWords = ["Building", "Digital", "Experiences"]

  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-20 lg:py-48 gap-12"
    >
      <div className="flex w-full flex-col items-start text-left max-w-2xl">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-md text-foreground"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={scaleIn}
        >
          <Sparkle weight="fill" className="size-4 text-cyan-500 dark:text-cyan-300" />
          <span>Student</span>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl font-black leading-[1.1] tracking-normal text-foreground md:text-7xl lg:text-8xl"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          {heroWords.map((word, index) => (
            <motion.span
              className="inline-block pr-3"
              key={word}
              variants={heroWord}
              style={{ transformOrigin: "0% 100%" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mb-10 text-lg font-light text-muted-foreground md:text-xl max-w-lg"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.28 }}
        >
          Hi, I&apos;m Pranav Arun. I specialize in building scalable web applications, robust backends, and beautiful user interfaces that solve real-world problems.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.a href="#projects" variants={fadeUp}>
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              View My Work
              <ArrowRight weight="bold" className="ml-2 size-4" />
            </Button>
          </motion.a>
          <motion.a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
          >
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base shadow-lg transition-transform hover:scale-105 active:scale-95 bg-background/50 backdrop-blur-md"
            >
              <Code weight="bold" className="mr-2 size-4" />
              GitHub
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
