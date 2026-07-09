import { Variants } from 'framer-motion';

// Fade in variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Slide up
export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Slide down
export const slideDown = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Scale
export const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// Hover scale
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Press effect
export const pressEffect = {
  whileTap: { scale: 0.95 },
};

// 3D tilt (will be used with custom)
export const tilt = {
  whileHover: { rotateX: 10, rotateY: -10 },
  whileTap: { rotateX: 0, rotateY: 0, scale: 0.95 },
};

// Float animation
export const float = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Pulse
export const pulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};