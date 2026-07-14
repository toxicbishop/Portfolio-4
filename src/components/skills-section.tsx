/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "motion/react"
import { Frontend_skill, Languages, Backend_skill, CloudAndDevOps, Databases, DevTools } from "@/constants"

type Skill = {
  skill_name: string
  Image: string
  width: number
  height: number
}

function SkillMarquee({ skills, direction = "left" }: { skills: Skill[], direction?: "left" | "right" }) {
  return (
    <div className="relative flex w-full overflow-hidden py-4">
      <motion.div
        className="flex w-max items-center gap-8 px-4"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center justify-center size-16 rounded-2xl border border-white/5 bg-white/5 p-4 opacity-50 transition-all hover:opacity-100 hover:bg-white/10">
             <img src={skill.Image} alt={skill.skill_name} width={skill.width} height={skill.height} className="max-h-full max-w-full object-contain invert brightness-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
      <div className="mb-16">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          Arsenal
        </h2>
        <p className="text-lg font-light text-zinc-400 max-w-2xl">
          The languages, frameworks, and architecture deployed to build high-performance systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-75">
        {/* Cell 1: Frontend - Wide span */}
        <div className="md:col-span-8 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 min-h-75">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="p-8 pb-4">
              <h3 className="text-xl font-bold text-white">Frontend Architecture</h3>
              <p className="mt-2 text-sm text-zinc-400">React, Next.js, and fluid interfaces</p>
            </div>
            <div className="mt-auto pb-8">
              <SkillMarquee skills={Frontend_skill} direction="left" />
            </div>
          </div>
        </div>

        {/* Cell 2: Languages - Square span */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 min-h-75">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-linear-to-br from-emerald-950/20 to-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">Languages</h3>
              <p className="mt-2 text-sm text-emerald-200/50">Core programming & scripting</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 p-8 pt-0">
               {Languages.map((skill, i) => (
                 <div key={i} className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                   {skill.skill_name}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Cell 3: Backend - Square span */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 min-h-75">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-linear-to-br from-cyan-950/30 to-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">Backend Systems</h3>
              <p className="mt-2 text-sm text-cyan-200/50">APIs & runtime environments</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 p-8 pt-0">
               {Backend_skill.map((skill, i) => (
                 <div key={i} className="flex items-center justify-center size-14 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-sm p-3 opacity-70 transition-opacity hover:opacity-100">
                    <img src={skill.Image} alt={skill.skill_name} className="max-h-full max-w-full object-contain invert brightness-0" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Cell 4: Databases - Square span */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 min-h-75">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">Databases</h3>
              <p className="mt-2 text-sm text-zinc-400">Data persistence & caching</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 p-8 pt-0">
               {Databases.map((skill, i) => (
                 <div key={i} className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                   {skill.skill_name}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Cell 5: Cloud & Tools - Square span */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 min-h-75">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
             <div className="p-8">
               <h3 className="text-xl font-bold text-white">Cloud & Tools</h3>
               <p className="mt-2 text-sm text-zinc-400">Infrastructure & workflow</p>
             </div>
             <div className="mt-auto flex flex-wrap gap-2 p-8 pt-0">
                {[...CloudAndDevOps, ...DevTools].map((skill, i) => (
                  <div key={i} className="flex items-center justify-center size-12 rounded-xl border border-white/5 bg-white/5 p-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 hover:bg-white/10">
                    <img src={skill.Image} alt={skill.skill_name} className="max-h-full max-w-full object-contain invert brightness-0" />
                  </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
