import { gsap } from "gsap";
import { useEffect, useRef } from "react";

/**
 * Create a staggered animation for skill categories
 * @param refs - Array of refs to skill category containers
 * @param delay - Delay between each category animation
 * @returns Cleanup function to kill the animation
 */
export const animateSkillCategories = (refs: (HTMLDivElement | null)[], delay = 0.3) => {
  const validRefs = refs.filter((ref): ref is HTMLDivElement => ref !== null);

  if (validRefs.length === 0) {
    return () => {};
  }

  const tl = gsap.timeline();

  validRefs.forEach((ref, index) => {
    tl.from(
      ref,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      index * delay
    );
  });

  // Return cleanup function to kill the timeline
  return () => {
    tl.kill();
  };
};

/**
 * Create a pulsing hover effect for skill icons
 * @param iconRef - Ref to the skill icon image
 */
export const useSkillIconHover = (iconRef: React.RefObject<HTMLImageElement>) => {
  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    const handleEnter = () => {
      gsap.to(icon, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    icon.addEventListener("mouseenter", handleEnter);
    icon.addEventListener("mouseleave", handleLeave);

    return () => {
      icon.removeEventListener("mouseenter", handleEnter);
      icon.removeEventListener("mouseleave", handleLeave);
    };
  }, [iconRef]);
};

/**
 * Create a floating animation for skill icons
 * @param iconRef - Ref to the skill icon image
 * @param intensity - How much the icon should float (default: 5px)
 */
export const useSkillIconFloat = (iconRef: React.RefObject<HTMLImageElement>, intensity = 5) => {
  useEffect(() => {
    const icon = iconRef.current;
    if (!icon) return;

    gsap.to(icon, {
      y: intensity,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    return () => {
      gsap.killTweensOf(icon);
    };
  }, [iconRef, intensity]);
};