"use client";

import React from "react";
import EnergyBeam from "@/components/ui/energy-beam";
import { ArrowRight, Zap, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30">
      {/* Background Energy Beam Effect */}
      <div className="absolute inset-0 z-0">
        <EnergyBeam />
      </div>

      {/* Foreground Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-white" />
            <span className="text-xl font-bold tracking-wider uppercase">Energy Core</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Showcase</a>
            <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
              Sign In
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Unleash the power of Unicorn Studio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
            Next Generation <br className="hidden md:block" /> UI Components
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light">
            Integrate incredible WebGL and animated effects directly into your React applications with zero friction and maximum performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 text-base font-semibold group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white text-base">
              <Code2 className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </section>

        {/* Features / Image section */}
        <section className="pb-16 px-6 max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-6">
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Abstract energy flow" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-sm text-white/60">60 FPS WebGL rendering powered by Unicorn Studio for smooth visual fidelity.</p>
            </div>
          </div>
          
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 backdrop-blur-sm md:-translate-y-8">
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" 
              alt="Digital infrastructure" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-sm text-white/60">Easily combine with your existing Next.js layout and Tailwind classes.</p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2670&auto=format&fit=crop" 
              alt="Space and depth" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold mb-2">Infinite Depth</h3>
              <p className="text-sm text-white/60">Create immersive spatial designs that capture your users' attention.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
