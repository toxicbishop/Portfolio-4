"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// --ease-in-out canonical value from animate skill
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as [number, number, number, number];
// --ease-out canonical value
const EASE_OUT = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function Preloader() {
  const [isAnimating, setIsAnimating] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // If reduced motion: skip the whole preloader immediately
    if (reduce) {
      document.body.style.overflow = "";
      setIsAnimating(false);
    }
  }, [reduce]);

  if (!isAnimating) return null;

  return (
    <motion.div
      /*
        Was: y: "-100%" (Motion shorthand — not hardware-accelerated under load)
        Fixed: full transform string per animate skill §4
        Was: ease: [0.76, 0, 0.24, 1] (hand-rolled)
        Fixed: --ease-in-out canonical value (on-screen movement)
      */
      initial={{ transform: "translateY(0%)" }}
      animate={{ transform: "translateY(-100%)" }}
      transition={{ duration: 0.8, delay: 1.8, ease: EASE_IN_OUT }}
      onAnimationComplete={() => {
        setIsAnimating(false);
        document.body.style.overflow = "";
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-cream"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className="flex flex-col items-center"
      >
        <motion.span
          /*
            Was: y: 20 shorthand + ease: "easeOut" (weak built-in)
            Fixed: full transform string + --ease-out canonical value
          */
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
          className="font-display text-4xl md:text-5xl tracking-[0.15em] uppercase mb-8"
        >
          Pranav Arun
        </motion.span>

        <div className="w-48 md:w-64 h-[1px] bg-cream/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-mustard"
            /*
              Progress bar fill: linear is correct here — it's a
              progress indicator per animate skill §5. Kept as-is.
            */
            initial={{ transform: "scaleX(0)", transformOrigin: "left" }}
            animate={{ transform: "scaleX(1)", transformOrigin: "left" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
