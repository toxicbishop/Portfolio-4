# Animation Enhancement Plan for Energy-Core Portfolio

## Current State Analysis

The portfolio currently uses:
- Tailwind CSS with `tw-animate-css` for basic entrance animations
- CSS transitions for hover effects
- External Unicorn Studio library for background EnergyBeam effect

## Enhancement Goals

Based on user feedback, focus on **visual enhancements** using:
- **Framer Motion** (primary choice for React animations)
- **GSAP** (for complex timeline-based animations)
- **Three.js/WebGL** (for advanced background effects if desired)

## Implementation Plan

### Phase 1: Setup

1. **Install Dependencies**
   ```bash
   npm install framer-motion
   # Optional: npm install gsap three @react-three/fiber @react-three/drei
   ```

2. **Create Animation Utilities**
   - Create `/src/animations/` directory
   - Add reusable variants, presets, and motion configurations
   - Add reduced motion preferences handling

### Phase 2: Component Enhancements

#### A. Hero Section (`src/app/page.tsx`)
- Replace basic `animate-in` classes with Framer Motion variants
- Implement staggered text reveal for headline
- Add subtle floating animation to decorative elements
- Enhance cursor interaction with EnergyBeam

#### B. Skills Section
- Replace `hover:-translate-y-1` with 3D tilt effect using Framer Motion
- Add gentle pulsating animation to skill icons on idle
- Implement staggered fade-in for skill categories
- Add hover depth effect with layered shadows

#### C. Projects Section
- Add scroll-triggered animations using Framer Motion's `whileInView`
- Enhance project card hover with rotation + scale + shadow lift
- Implement image loading skeletons with smooth transitions
- Add subtle parallax effect to project images

#### D. Navigation & UI Elements
- Replace basic button transitions with Framer Motion variants
- Add ripple/ink ripple effect on button clicks
- Enhance social icon hover with 3D rotation
- Add smooth scroll behavior to navigation links

#### E. Background Effects
- Enhance EnergyBeam component with additional particle effects
- Consider adding subtle background gradient animation
- Implement mouse-tracking light effect that follows cursor

### Phase 3: Performance & Accessibility

1. **Performance Optimizations**
   - Use `layoutId` for shared layout animations
   - Implement `presence` modes for efficient mount/unmount
   - Use `useReducedMotion` hook to respect user preferences
   - Optimize SVG/icon animations to prevent layout thrashing

2. **Accessibility Considerations**
   - Respect `prefers-reduced-motion` media query
   - Ensure animations don't convey essential information alone
   - Provide adequate timing for animation completion
   - Avoid triggering photosensitive epilepsy

### Phase 4: Specific Component Updates

#### Button Component (`src/components/ui/button.tsx`)
- Replace `class-variance-authority` variants with Framer Motion variants
- Add press animation with scale feedback
- Implement hover lift effect
- Add focus ring animation

#### EnergyBeam Component (`src/components/ui/energy-beam.tsx`)
- Add optional particle overlay system
- Implement mouse-responsive light effects
- Add performance controls for low-end devices
- Consider WebGL-based alternatives for complex effects

### Implementation Steps:
...