import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/animations/useReducedMotion';

interface EnergyBeamProps {
    projectId?: string;
    className?: string;
    /** Enable mouse-reactive light effect */
    mouseEffect?: boolean;
    /** Enable floating particles */
    particles?: boolean;
}

declare global {
    interface Window {
        UnicornStudio?: {
            init: (config?: any) => void;
        };
    }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    projectId = "hRFfUymDGOHwtFe7evR2",
    className = "",
    mouseEffect = true,
    particles = true,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const reducedMotion = useReducedMotion();
    const [particleStyles, setParticleStyles] = useState<Array<{
        left: string;
        top: string;
        animationDelay: number;
        duration: number;
        size: number;
        opacity: number;
    }>>([]);

    // Load Unicorn Studio script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
        script.async = true;

        script.onload = () => {
            if (window.UnicornStudio && containerRef.current) {
                try {
                    console.log('Unicorn Studio loaded, initializing project...');
                    // Try minimal initialization first to see if it works
                    window.UnicornStudio.init(projectId);
                    setIsLoaded(true);
                    console.log('Unicorn Studio initialized successfully');
                } catch (error) {
                    console.error('Failed to initialize Unicorn Studio with projectId:', error);
                    // Try without parameters
                    try {
                        window.UnicornStudio.init();
                        setIsLoaded(true);
                        console.log('Unicorn Studio initialized without params');
                    } catch (error2) {
                        console.error('Failed to initialize Unicorn Studio completely:', error2);
                    }
                }
            } else {
                console.warn('UnicornStudio not available or containerRef missing');
            }
        };

        script.onerror = () => {
            console.error('Failed to load Unicorn Studio script');
        };

        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [projectId]);

    // Mouse move effect for light
    useEffect(() => {
        if (!mouseEffect || reducedMotion) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        const handleMouseLeave = () => setMousePos(null);
        const el = containerRef.current;
        if (el) {
            el.addEventListener('mousemove', handleMouseMove);
            el.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                el.removeEventListener('mousemove', handleMouseMove);
                el.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [mouseEffect, reducedMotion]);

    // Initialize enhanced starfield particles on client only to avoid hydration mismatch
    useEffect(() => {
        if (particles && !reducedMotion) {
            // Create more stars for a starfield effect
            const starCount = 150; // Increased from 3 to 150 stars
            const styles = Array.from({ length: starCount }, (_, i) => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: Math.random() * 10, // Random delay for twinkling
                duration: 3 + Math.random() * 7,    // Random duration 3-10s
                size: 0.5 + Math.random() * 1.5,    // Random size 0.5-2px
                opacity: 0.3 + Math.random() * 0.7  // Random opacity 0.3-1.0
            }));
            setParticleStyles(styles);
        }
    }, [particles, reducedMotion]);

    return (
        <div className={`relative w-full h-screen bg-black overflow-hidden ${className}`}>
            {/* Enhanced starfield background */}
            {particles && particleStyles.length > 0 && (
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    {particleStyles.map((star, index) => (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                left: star.left,
                                top: star.top,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`,
                                opacity: star.opacity,
                                animation: `twinkle-${index} ${star.duration}s ease-in-out ${star.animationDelay}s infinite`
                            }}
                        />
                    ))}
                    <style>{`
                        ${particleStyles.map((star, index) => `
                            @keyframes twinkle-${index} {
                                0%, 100% { opacity: ${star.opacity * 0.3}; }
                                50% { opacity: ${star.opacity}; }
                            }
                        `).join('\n')}
                    `}</style>
                </div>
            )}

            {/* Unicorn Studio canvas */}
            <div
                ref={containerRef}
                data-us-project={projectId}
                className="w-full h-full"
                style={{ zIndex: 1 }}
            />

            {/* Mouse reactive light effect */}
            {mouseEffect && !reducedMotion && mousePos && (
                <motion.div
                    style={{
                        position: 'absolute',
                        left: mousePos.x,
                        top: mousePos.y,
                        width: 200,
                        height: 200,
                        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 3
                    }}
                />
            )}

            {/* Enhanced floating particles (keeping the original floating effect but enhanced) */}
            {particles && !reducedMotion && particleStyles.length > 0 && (
                <>
                    {particleStyles.map(({ left, top, animationDelay }, i) => (
                        <motion.div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: 2 + Math.sin(i) * 2, // Varying sizes between 2-4px
                                height: 2 + Math.sin(i) * 2,
                                background: 'rgba(255,255,255,0.5)',
                                borderRadius: '50%',
                                left: left,
                                top: top,
                                animation: `float${i} ${6 + animationDelay}s ease-in-out infinite`,
                                opacity: 0.7 + Math.sin(i) * 0.3, // Varying opacity
                                zIndex: 2
                            }}
                        />
                    ))}
                    {/* Generate keyframes dynamically based on number of particles */}
                    <style>{`
                        ${particleStyles.map((_, i) => `
                            @keyframes float${i} {
                                0% { transform: translate(0, 0) scale(1); }
                                50% {
                                    transform: translate(
                                        ${Math.sin(i * 2) * 40}px,
                                        ${Math.cos(i * 1.5) * 30}px
                                    ) scale(${1 + Math.sin(i) * 0.2});
                                }
                                100% { transform: translate(0, 0) scale(1); }
                            }
                        `).join('\n')}
                    `}</style>
                </>
            )}

            {/* Loading fallback */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" style={{ zIndex: 10 }}>
                    <div className="text-white/80">Loading energy beam...</div>
                </div>
            )}
        </div>
    );
};

export default EnergyBeam;