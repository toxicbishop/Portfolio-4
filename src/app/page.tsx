"use client"

import {
  ArrowRight,
  Code2,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react"
import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

import {
  cardReveal,
  fadeDown,
  fadeUp,
  heroWord,
  scaleIn,
  sectionHeader,
  staggerContainer,
  viewportOnce,
} from "@/animations/variants"
import { Button } from "@/components/ui/button"
import EnergyBeam from "@/components/ui/energy-beam"
import {
  Backend_skill,
  DevTools,
  Frontend_skill,
  ProjectsData,
  Socials,
} from "@/constants"

type Skill = {
  skill_name: string
  Image: string
  width: number
  height: number
}

type Project = (typeof ProjectsData)[number]

const skillGroups = [
  { title: "Frontend", items: Frontend_skill },
  { title: "Backend", items: Backend_skill },
  { title: "Tools", items: DevTools },
]

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const reducedMotion = useFramerReducedMotion()

  return (
    <motion.div
      className="group relative flex size-22.5 items-center justify-center rounded-lg border border-white/10 bg-white/5.5 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] outline-none transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
      initial={reducedMotion ? false : { opacity: 0, y: 18, rotateX: -12 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay: reducedMotion ? 0 : index * 0.035,
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -8,
              rotateX: 9,
              rotateY: -9,
              scale: 1.04,
              boxShadow: "0 18px 44px rgba(34, 211, 238, 0.18)",
            }
      }
      whileTap={reducedMotion ? undefined : { scale: 0.96, rotateX: 0, rotateY: 0 }}
      style={{ transformStyle: "preserve-3d" }}
      tabIndex={0}
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
        transition={{
          delay: index * 0.12,
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={skill.Image}
          alt={skill.skill_name}
          width={skill.width}
          height={skill.height}
          className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
          style={{ width: "auto", height: "auto" }}
        />
      </motion.div>
      <span className="pointer-events-none absolute -bottom-7 left-1/2 max-w-28 -translate-x-1/2 truncate rounded-md border border-white/10 bg-black/80 px-2 py-1 text-xs font-medium text-white/85 opacity-0 shadow-lg backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {skill.skill_name}
      </span>
    </motion.div>
  )
}

function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <motion.div
      className="rounded-lg border border-white/10 bg-black/48 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
      variants={cardReveal}
      whileHover={{
        borderColor: "rgba(103, 232, 249, 0.38)",
        boxShadow: "0 28px 70px rgba(8, 145, 178, 0.15)",
      }}
      style={{ perspective: 900 }}
    >
      <h3 className="mb-6 border-b border-white/10 pb-4 text-2xl font-semibold text-white/90">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {items.map((skill, index) => (
          <SkillCard key={skill.skill_name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = useFramerReducedMotion()

  return (
    <motion.article
      className="group relative aspect-4/3 overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-2xl shadow-black/35 backdrop-blur-xl"
      variants={cardReveal}
      custom={index}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -10,
              rotateX: 3,
              rotateY: index % 2 === 0 ? -3 : 3,
              scale: 1.015,
              borderColor: "rgba(103, 232, 249, 0.36)",
              boxShadow: "0 30px 90px rgba(34, 211, 238, 0.15)",
            }
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.05),rgba(103,232,249,0.16),rgba(255,255,255,0.05))] bg-size-[220%_100%]"
        animate={
          loaded || reducedMotion ? { opacity: 0 } : { opacity: [0.35, 0.85, 0.35] }
        }
        transition={{ duration: 1.1, repeat: loaded ? 0 : Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0"
        whileHover={reducedMotion ? undefined : { scale: 1.08, y: -8 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          onLoad={() => setLoaded(true)}
          className="object-cover opacity-52 transition-opacity duration-500 group-hover:opacity-72"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-6">
        <h3 className="mb-2 text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-white/70">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="w-fit">
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-full border-white/10 bg-white/5 px-4 text-xs text-white hover:bg-white/15 hover:text-cyan-300"
            >
              <Code2 className="size-3.5" />
              GitHub
            </Button>
          </a>
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer" className="w-fit">
              <Button
                variant="default"
                size="sm"
                className="h-8 rounded-full bg-cyan-300 px-4 text-xs font-semibold text-black shadow-md shadow-cyan-500/20 hover:bg-cyan-200"
              >
                <ExternalLink className="size-3.5" />
                Visit
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export default function Home() {
  const reducedMotion = useFramerReducedMotion()
  const heroWords = ["Building", "Digital", "Experiences"]

  return (
    <main className="relative min-h-screen bg-black font-sans text-white selection:bg-white/30">
      <div className="fixed inset-0 z-0">
        <EnergyBeam />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <motion.header
          className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-sm"
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={fadeDown}
        >
          <a href="#about" className="flex items-center gap-2">
            <motion.span
              animate={reducedMotion ? undefined : { rotate: [0, -7, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="size-8 text-cyan-300" />
            </motion.span>
            <span className="text-xl font-bold uppercase tracking-wider drop-shadow-sm">
              Pranav Arun
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            {["About", "Skills", "Projects"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white"
                whileHover={reducedMotion ? undefined : { y: -2 }}
                whileTap={reducedMotion ? undefined : { y: 0 }}
              >
                {item}
              </motion.a>
            ))}
            <div className="flex gap-4">
              {Socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -3, rotateY: 18, scale: 1.12 }
                  }
                  whileTap={reducedMotion ? undefined : { scale: 0.94 }}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </motion.a>
              ))}
            </div>
          </nav>
        </motion.header>

        <section
          id="about"
          className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-32 text-center"
        >
          <motion.div
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-md"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={scaleIn}
          >
            <Sparkles className="size-4 text-cyan-300" />
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.h1
            className="mb-8 text-6xl font-black leading-[1.05] tracking-normal text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 drop-shadow-lg md:text-8xl"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
          >
            {heroWords.map((word, index) => (
              <motion.span
                className="inline-block px-2"
                key={word}
                variants={heroWord}
                style={{ transformOrigin: "50% 85%" }}
              >
                {word}
                {index === 1 ? <br className="hidden md:block" /> : " "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mb-10 max-w-2xl text-lg font-light text-white/80 drop-shadow-md md:text-xl"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.28 }}
          >
            Hi, I&apos;m Pranav Arun. I specialize in building scalable web
            applications, robust backends, and beautiful user interfaces that solve
            real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.a href="#projects" variants={fadeUp}>
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-black shadow-lg shadow-white/20 hover:bg-white/90"
              >
                View My Work
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
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
                className="h-12 rounded-full border-white/20 bg-black/40 px-8 text-base text-white shadow-lg backdrop-blur-md hover:bg-white/10"
              >
                <Code2 className="size-4" />
                GitHub
              </Button>
            </motion.a>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
          <motion.div
            className="mb-16 text-center"
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionHeader}
          >
            <h2 className="mb-4 text-4xl font-bold drop-shadow-md md:text-5xl">
              Core Skills
            </h2>
            <p className="text-lg text-white/60">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} title={group.title} items={group.items} />
            ))}
          </motion.div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24">
          <motion.div
            className="mb-16 text-center"
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionHeader}
          >
            <h2 className="mb-4 text-4xl font-bold drop-shadow-md md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60">Some of the recent work I&apos;ve done.</p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            style={{ perspective: 1200 }}
          >
            {ProjectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </section>

        <footer className="mt-32 border-t border-white/10 bg-black/40 py-12 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/50 md:flex-row">
            <div className="flex items-center gap-2">
              <Zap className="size-5 text-cyan-300/50" />
              <span className="font-semibold uppercase tracking-wider text-white/70">
                Pranav Arun
              </span>
            </div>
            <p>© {new Date().getFullYear()} Pranav Arun. Built with Next.js & Tailwind CSS.</p>
            <div className="flex gap-6">
              {Socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="invert opacity-50"
                  />
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
