import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../assets/hero-bg.jpg';

const HERO_BG = heroBg;

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    // Path length animation based on scroll
    // We want it to draw AS we scroll down. 
    // "start start" = top of container at top of viewport (0)
    // "end start" = bottom of container at top of viewport (1)
    const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <section ref={targetRef} className="relative h-[150vh] flex flex-col items-center bg-gray-900 overflow-hidden">
            {/* Sticky Container for the visual effect */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Image - FIXED and FULL SCREEN */}
                <div
                    className="fixed inset-0 z-0 h-screen w-screen"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={HERO_BG}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Overlay */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-20 text-center text-white px-4 max-w-4xl"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 font-display tracking-tight relative">
                        <span className="sr-only">Grafika</span>
                        {/* SVG Handwriting Effect */}
                        <svg viewBox="0 0 600 150" className="w-full h-auto max-w-[600px] mx-auto overflow-visible">
                            {/* "Grafika" Cursive Path approximated */}
                            <motion.path
                                d="M50,80 C50,80 80,20 120,20 C140,20 150,50 140,80 C130,110 90,120 90,90 C90,60 140,60 170,80 L190,90 M190,90 L190,40 M190,90 Q210,100 230,80 C240,70 240,60 230,60 C210,60 210,90 230,90 L250,90 M270,70 Q280,30 290,20 L270,110 Q280,70 300,70 L320,70 M340,90 L340,40 M340,90 Q360,100 380,80 C390,70 390,60 380,60 C360,60 360,90 380,90 L400,90 M420,20 L420,100 M420,70 L440,60 L450,90 M470,80 C470,80 480,60 490,60 C500,60 500,80 490,90 C480,100 470,100 470,100 L510,100" // Simplified mock path for text
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ pathLength }}
                                className="text-indigo-400 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                            />
                        </svg>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto">
                        Створюй свій унікальний стиль. Друкуй на замовлення.
                    </p>

                    <Link
                        to="/builder"
                        className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
                    >
                        Створити зараз
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
                >
                    <span className="text-sm uppercase tracking-widest block mb-2 text-center">Гортай вниз</span>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </motion.div>
            </div>

            {/* Additional content spacer to allow scrolling - increased to ensure full "writing" time */}
            <div className="h-[100vh] w-full bg-slate-900 z-20 relative">
                {/* This empty space ensures the animation has room to play before the next section covers it */}
            </div>
        </section>
    );
}
