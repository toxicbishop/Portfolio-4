"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import EnergyBeam from "@/components/ui/energy-beam";
import { ArrowRight, Zap, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Frontend_skill,
  Backend_skill,
  DevTools,
  Socials,
  ProjectsData,
} from "@/constants";
import { motion, MotionProps } from "framer-motion";
import { useReducedMotion } from "@/animations/useReducedMotion";
import { animateSkillCategories, useSkillIconHover, useSkillIconFloat } from "@/animations/gsap";

export default function Home() {
  const reducedMotion = useReducedMotion();

  // Refs for skill categories
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const devtoolsRef = useRef<HTMLDivElement>(null);

  // Animate skill categories with GSAP
  useEffect(() => {
    const elements = [frontendRef.current, backendRef.current, devtoolsRef.current]
      .filter((el): el is HTMLDivElement => el !== null);

    if (elements.length > 0) {
      const cleanup = animateSkillCategories(elements, 0.2);
      return cleanup;
    }
  }, []);

  // Helper to get motion props based on reduced motion preference
  const getMotionProps = <T,>(defaults: T): Partial<MotionProps> => {
    if (reducedMotion) {
      // If reduced motion, set initial and animate to the same final state
      return { initial: undefined as any, animate: undefined as any };
    }
    return {} as Partial<MotionProps>;
  };

  // Helper for hover/tap styles
  const getHoverStyles = () => (reducedMotion ? {} : { scale: 1.05, rotate: 0 });
  const getTapStyles = () => (reducedMotion ? {} : { scale: 0.95 });

  // Float animation variants for skill icons
  const floatVariants = {
    hover: { y: -5, scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
      {/* Background Energy Beam Effect - FIXED to stay in place while scrolling */}
      <div className="fixed inset-0 z-0">
        <EnergyBeam />
      </div>

      {/* Foreground Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold tracking-wider uppercase drop-shadow-sm">Pranav Arun</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <div className="flex gap-4">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform opacity-70 hover:opacity-100"
                >
                  <Image src={social.src} alt={social.name} width={24} height={24} className="invert" />
                </a>
              ))}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="about" className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full py-32">
          <motion.div
            {...getMotionProps({ y: -20, opacity: 0 })}
            initial={reducedMotion ? undefined : { y: -20, opacity: 0 }}
            animate={reducedMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.h1
            {...getMotionProps({ opacity: 0, scale: 0.95 })}
            initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 drop-shadow-lg"
          >
            Building Digital <br className="hidden md:block" /> Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 drop-shadow-md">
            Hi, I&apos;m Pranav Arun. I specialize in building scalable web applications, robust backends, and beautiful user interfaces that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
            <a href="#projects">
              <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 text-base font-semibold group shadow-lg shadow-white/20">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://github.com/toxicbishop" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full bg-black/40 border-white/20 hover:bg-white/10 text-white text-base backdrop-blur-md shadow-lg flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Core Skills</h2>
            <p className="text-white/60 text-lg">Technologies and tools I use to bring ideas to life.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Refs for skill categories */}
            <div ref={frontendRef}>
              {/* Frontend */}
              <div className="rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-colors shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  {Frontend_skill.map((skill, index) => (
                    <motion.div
                      key={skill.skill_name}
                      initial={{ y: 0 }}
                      animate={{
                        y: [0, -10, 0],
                        transition: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={getHoverStyles()}
                      whileTap={getTapStyles()}
                      className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-[90px] h-[90px] shadow-inner"
                    >
                      <Image
                        src={skill.Image}
                        alt={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs font-medium transition-opacity text-white/80">{skill.skill_name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={backendRef}>
              {/* Backend */}
              <div className="rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-colors shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">Backend</h3>
                <div className="flex flex-wrap gap-4">
                  {Backend_skill.map((skill, index) => (
                    <motion.div
                      key={skill.skill_name}
                      initial={{ y: 0 }}
                      animate={{
                        y: [0, -10, 0],
                        transition: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={getHoverStyles()}
                      whileTap={getTapStyles()}
                      className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-[90px] h-[90px] shadow-inner"
                    >
                      <Image
                        src={skill.Image}
                        alt={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs font-medium transition-opacity text-white/80">{skill.skill_name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={devtoolsRef}>
              {/* DevTools */}
              <div className="rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-colors shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">Tools</h3>
                <div className="flex flex-wrap gap-4">
                  {DevTools.map((skill, index) => (
                    <motion.div
                      key={skill.skill_name}
                      initial={{ y: 0 }}
                      animate={{
                        y: [0, -10, 0],
                        transition: {
                          duration: 2 + index * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={getHoverStyles()}
                      whileTap={getTapStyles()}
                      className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-[90px] h-[90px] shadow-inner"
                    >
                      <Image
                        src={skill.Image}
                        alt={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs font-medium transition-opacity text-white/80">{skill.skill_name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Featured Projects</h2>
            <p className="text-white/60 text-lg">Some of the recent work I&apos;ve done.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ProjectsData.map((project) => (
              <motion.div
                key={project.title}
                whileInView={reducedMotion ? {} : { scale: 1.03, opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{project.title}</h3>
                  <p className="text-xs text-white/70 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-white/5 rounded-full text-[10px] font-medium backdrop-blur-md border border-white/10 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.website ? (
                      <>
                        <a href={project.github} target="_blank" rel="noreferrer" className="w-fit">
                          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/15 hover:text-cyan-400 text-white rounded-full text-xs h-8 px-4 transition-colors">
                            GitHub
                          </Button>
                        </a>
                        <a href={project.website} target="_blank" rel="noreferrer" className="w-fit">
                          <Button variant="default" size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full text-xs h-8 px-4 shadow-md shadow-cyan-500/20 transition-all duration-300">
                            Visit Site
                          </Button>
                        </a>
                      </>
                    ) : (
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-fit">
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/15 hover:text-cyan-400 text-white rounded-full text-xs h-8 px-4 transition-colors">
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 py-12 border-t border-white/10 bg-black/40 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400/50" />
              <span className="font-semibold uppercase tracking-wider text-white/70">Pranav Arun</span>
            </div>
            <p>© {new Date().getFullYear()} Pranav Arun. Built with Next.js & Tailwind CSS.</p>
            <div className="flex gap-6">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Image src={social.src} alt={social.name} width={16} height={16} className="invert opacity-50" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}