"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

export function StarsBackground() {
  const reducedMotion = useReducedMotion()
  const [isMounted, setIsMounted] = useState(false)
  const [layers, setLayers] = useState({ layer1: "", layer2: "", layer3: "" })

  useEffect(() => {
    const generateStars = (count: number) => {
      let shadows = ""
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 2000)
        shadows += `${x}px ${y}px var(--star-color)${i === count - 1 ? "" : ", "}`
      }
      return shadows
    }
    
    setLayers({
      layer1: generateStars(700),
      layer2: generateStars(200),
      layer3: generateStars(100),
    })
    setIsMounted(true)
  }, [])

  if (!isMounted || reducedMotion) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      <style dangerouslySetInnerHTML={{ __html: `
        :root { --star-color: rgba(8, 145, 178, 0.15); } /* faint cyan stars for light mode */
        .dark { --star-color: rgba(255, 255, 255, 0.4); } /* bright stars for dark mode */

        .stars-sm {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${layers.layer1};
          animation: anim-stars 50s linear infinite;
        }
        .stars-sm::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${layers.layer1};
        }
        
        .stars-md {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${layers.layer2};
          animation: anim-stars 100s linear infinite;
        }
        .stars-md::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${layers.layer2};
        }
        
        .stars-lg {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${layers.layer3};
          animation: anim-stars 150s linear infinite;
        }
        .stars-lg::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${layers.layer3};
        }

        @keyframes anim-stars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}} />
      <div className="stars-sm" />
      <div className="stars-md" />
      <div className="stars-lg" />
    </div>
  )
}
