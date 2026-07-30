"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Voting System",
    description:
      "A secure electronic voting system. Contributors: Syed (@Mohammed0572), Supreeth (@supr1795), and Rohith (@Rohithgaloth).",
    tags: ["Web", "System"],
    href: "https://github.com/Mohammed0572/VotingSystem",
    image: "/Projrcts/voting-system.gif",
    feature: true,
  },
  {
    title: "Crypt Vault",
    description:
      "Encrypted credential management system with zero-knowledge architecture and secure sharing.",
    tags: ["Security", "Encryption", "Go"],
    href: "https://github.com/toxicbishop/Crypt-Vault",
    image: "/Projrcts/CRYPTVAULT.png",
    feature: false,
  },
  {
    title: "DSA Study Hub",
    description:
      "Curated collection of data structure and algorithm resources, solutions, and visual explanations.",
    tags: ["DSA", "Education", "TypeScript"],
    href: "https://github.com/toxicbishop/DSA-Study-Hub",
    image: "/Projrcts/DSA-Website-Photo.png",
    feature: false,
  },
  {
    title: "Chain of Thought",
    description:
      "Reasoning framework exploring chain-of-thought prompting strategies for LLMs.",
    tags: ["AI", "LLMs", "Prompt Engineering"],
    href: "https://github.com/toxicbishop/Chain-of-Thought",
    image: "/Projrcts/Dashboard-of-COT.png",
    feature: false,
  },
  {
    title: "Student Marks Management",
    description:
      "Web application for tracking and managing student academic records with visual analytics.",
    tags: ["Web", "Node.js", "Database"],
    href: "https://github.com/toxicbishop/Student-Marks-Management",
    image: "/Projrcts/Student-Marks-Management.png",
    feature: false,
  },
  {
    title: "Brain Tumor Prediction",
    description:
      "ML-based diagnostic tool using convolutional neural networks to classify brain MRI scans.",
    tags: ["ML", "Computer Vision", "Python", "TensorFlow"],
    href: "https://github.com/toxicbishop/Brain-Tumor-Prediction-ML",
    feature: false,
  },
  {
    title: "Finance Policy RAG Agent",
    description:
      "24/7 automated RAG agent for answering finance policy questions — n8n no-code pipeline paired with a Python shadow layer using FastAPI and Streamlit.",
    tags: ["AI", "RAG", "FastAPI", "Streamlit", "n8n"],
    href: "https://github.com/toxicbishop/finance-policy-rag-agent",
    feature: false,
  },
  {
    title: "nanoGPT",
    description:
      "A character-level GPT model built from scratch in PyTorch, exclusively trained to generate text in the style of Shakespeare. Features a modular RAG pipeline.",
    tags: ["AI", "PyTorch", "LLMs", "Python"],
    href: "https://github.com/toxicbishop/nanoGPT",
    feature: false,
  },
  {
    title: "KSSEM College ERP",
    description:
      "Full-stack ERP system for college administration — attendance, grades, scheduling, and student lifecycle management.",
    tags: ["Full-Stack", "Node.js", "Postgres", "React"],
    href: "https://github.com/toxicbishop/KSSEM-College-ERP-System",
    image: "/Projrcts/Clg-ERP-LandingPage.png",
    feature: true,
  },
  {
    title: "VITAL Health App",
    description:
      "A premium, multi-platform health ecosystem (Android) with a minimalist aesthetic. Tracks daily metrics—weight, blood pressure, heart rate—with offline-first persistence and seamless cloud sync via Supabase.",
    tags: ["Flutter", "Android", "Supabase", "Health"],
    href: "https://github.com/toxicbishop/VITAL-Health-App-Flutter",
    feature: false,
  },
  {
    title: "Markdroid",
    description:
      "Android app to convert Markdown files to PDF. Built with Flutter.",
    tags: ["Flutter", "Android", "Markdown", "PDF"],
    href: "https://github.com/toxicbishop/markdroid",
    feature: false,
  },
  {
    title: "Distributed Web Scraper",
    description:
      "Production-grade distributed web scraper utilizing FastAPI, Celery, Playwright, and BeautifulSoup. Features JWT auth, Redis deduplication, PostgreSQL persistence, and AWS S3/CSV export.",
    tags: ["FastAPI", "Python", "Celery", "Redis", "Playwright"],
    href: "https://github.com/toxicbishop/Web-Scraper",
    feature: false,
  },
  {
    title: "Weather ASCII",
    description:
      "A terminal-based weather application that renders immersive ASCII animations of current weather conditions using real-time data from Open-Meteo.",
    tags: ["CLI", "Terminal", "API"],
    href: "https://github.com/toxicbishop/Weather-ascii",
    image: "/Projrcts/weather-terminal.gif",
    feature: false,
  },
];

export function Projects() {
  const reduce = useReducedMotion();
  const feature = projects.filter((p) => p.feature);
  const rest = projects.filter((p) => !p.feature);

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
    <section id="work" className="relative px-6 md:px-10 py-24 md:py-32 bg-cream overflow-hidden">
      <div className="section-watermark top-0 left-0">Work</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...anim(0)}>
          <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2 block">
            Selected projects
          </span>
          <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-tight text-ink mb-12">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-6 gap-5">
          {feature.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(0.1 + i * 0.05)}
              className={`${
                i === 0
                  ? "md:col-span-4 md:row-span-2 min-h-[400px]"
                  : i === 1
                  ? "md:col-span-2 md:row-span-2 min-h-[400px]"
                  : "md:col-span-3 md:row-span-1 min-h-[320px]"
              } group relative bg-forest rounded-4xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-all duration-300 shimmer-card glow-border`}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-4xl text-cream mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-cream/70 leading-relaxed max-w-[45ch] mb-5">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-cream/20 text-cream/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={16} className="text-cream/60 group-hover:text-cream transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {rest.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(0.2 + i * 0.05)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-ink/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shimmer-card"
            >
              {project.image && (
                <div className="relative w-full h-40 overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-cream/10" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-forest/5 text-forest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={14} className="text-muted group-hover:text-ink transition-colors shrink-0" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          {...anim(0.3)}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/toxicbishop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors font-mono"
          >
            View all on GitHub <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
