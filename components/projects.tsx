"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
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
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
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
          {feature.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(0.1)}
              className="md:col-span-4 md:row-span-2 group relative bg-forest rounded-4xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-all duration-300"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-forest/90 via-forest/50 to-transparent" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-6 right-6 text-cream/10 font-display text-[6rem] leading-none">
                  &#10022;
                </div>
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

          {rest.slice(0, 2).map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(0.15 + i * 0.05)}
              className="md:col-span-2 group relative bg-white rounded-2xl overflow-hidden border border-ink/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {project.image && (
                <div className="relative w-full h-36 overflow-hidden">
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
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
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

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {rest.slice(2).map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(0.2 + i * 0.05)}
              className="group relative bg-white rounded-2xl p-6 border border-ink/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
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
