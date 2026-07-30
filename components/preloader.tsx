"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Preloader() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";
    // Force scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  if (!isAnimating) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
      onAnimationComplete={() => {
        setIsAnimating(false);
        document.body.style.overflow = "";
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-cream"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl tracking-[0.15em] uppercase mb-8"
        >
          Pranav Arun
        </motion.span>
        
        <div className="w-48 md:w-64 h-[1px] bg-cream/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-mustard"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
