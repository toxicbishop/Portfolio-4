import type { Variants } from "framer-motion"

export const viewportOnce = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -120px 0px",
} as const

export const softSpring = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.8,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 42, rotateX: -24 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: softSpring,
  },
}

export const buttonMotion = {
  rest: { y: 0, scale: 1 },
  hover: { y: -2, scale: 1.025 },
  tap: { y: 0, scale: 0.975 },
  focus: { scale: 1.015 },
} as const
