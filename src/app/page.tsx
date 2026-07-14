import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import EnergyBeam from "@/components/ui/energy-beam"
import { StarsBackground } from "@/components/ui/stars-background"

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <EnergyBeam />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}
