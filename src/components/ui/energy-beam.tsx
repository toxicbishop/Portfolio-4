"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { CSSProperties } from "react"
import { useEffect, useMemo, useRef, useState } from "react"

interface EnergyBeamProps {
  projectId?: string
  className?: string
  mouseEffect?: boolean
  particles?: boolean
}

declare global {
  interface Window {
    UnicornStudio?: {
      init: (projectId?: string) => void
    }
  }
}

type ParticleStyle = CSSProperties & {
  "--particle-x": string
  "--particle-y": string
  "--particle-drift-x": string
  "--particle-drift-y": string
  "--particle-size": string
  "--particle-delay": string
  "--particle-duration": string
  "--particle-opacity": string
}

function seededParticle(index: number): ParticleStyle {
  const wave = Math.sin(index * 12.9898) * 43758.5453
  const seed = wave - Math.floor(wave)
  const secondSeed = (Math.cos(index * 78.233) * 24634.6345) % 1
  const safeSecondSeed = Math.abs(secondSeed)

  return {
    "--particle-x": `${(seed * 100).toFixed(2)}%`,
    "--particle-y": `${(safeSecondSeed * 100).toFixed(2)}%`,
    "--particle-drift-x": `${(Math.sin(index * 1.7) * 42).toFixed(2)}px`,
    "--particle-drift-y": `${(Math.cos(index * 1.3) * 34).toFixed(2)}px`,
    "--particle-size": `${(1 + seed * 2.4).toFixed(2)}px`,
    "--particle-delay": `${(seed * -8).toFixed(2)}s`,
    "--particle-duration": `${(5 + safeSecondSeed * 7).toFixed(2)}s`,
    "--particle-opacity": `${(0.28 + seed * 0.55).toFixed(2)}`,
  }
}

export default function EnergyBeam({
  projectId = "hRFfUymDGOHwtFe7evR2",
  className = "",
  mouseEffect = true,
  particles = true,
}: EnergyBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const reducedMotion = useReducedMotion()

  const particleStyles = useMemo(
    () => Array.from({ length: 72 }, (_, index) => seededParticle(index + 1)),
    []
  )

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-energy-beam="unicorn-studio"]'
    )

    const initialize = () => {
      try {
        window.UnicornStudio?.init(projectId)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to initialize Unicorn Studio:", error)
      }
    }

    if (window.UnicornStudio) {
      initialize()
      return
    }

    const script = existingScript ?? document.createElement("script")
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js"
    script.async = true
    script.dataset.energyBeam = "unicorn-studio"
    script.addEventListener("load", initialize)
    script.addEventListener("error", () => {
      console.error("Failed to load Unicorn Studio script")
    })

    if (!existingScript) {
      document.head.appendChild(script)
    }

    return () => {
      script.removeEventListener("load", initialize)
    }
  }, [projectId])

  useEffect(() => {
    if (!mouseEffect || reducedMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    const handleMouseLeave = () => setMousePos(null)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseEffect, reducedMotion])

  return (
    <div className={`relative h-screen w-full overflow-hidden bg-black ${className}`}>
      {particles && !reducedMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particleStyles.map((style, index) => (
            <span
              aria-hidden="true"
              className="energy-particle"
              key={index}
              style={style}
            />
          ))}
        </div>
      )}

      <div
        ref={containerRef}
        data-us-project={projectId}
        className="relative z-[1] h-full w-full opacity-90"
      />

      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.62))]" />

      {mouseEffect && !reducedMotion && mousePos && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed z-[3] size-72 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.18)_0%,rgba(255,255,255,0.09)_34%,transparent_70%)] blur-sm"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
        />
      )}

      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-1/2 rounded-full bg-cyan-300"
              animate={reducedMotion ? undefined : { x: ["-100%", "220%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
