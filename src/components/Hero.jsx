import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
import Marquee from './Marquee';

const HEADLINE_WORDS = ['ARCHI', 'DEE', 'SIGNS'];
const SUBTITLE = 'Architecture | Interior Design | Landscape | PMC. Led by Ar. Deepu D Lakshmi (Principal Architect / Founder)';

const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: (i) => ({
        y: '0%',
        opacity: 1,
        transition: {
            delay: 0.6 + i * 0.12,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
});

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-gray-900 flex flex-col"
        >
            {/* ── Background Image — bright, minimal overlay ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/.webp?v=2"
                    alt="Archi Dee Signs Architecture"
                    className="w-full h-full object-cover"
                />
                {/* Very light overlay only at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            {/* ── Top bar ticker ── */}
            <motion.div
                className="relative z-10 border-b border-white/10 py-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
            </motion.div>

            {/* ── Main content ── */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 md:pt-36 pb-8">
                {/* Eyebrow label */}
                <motion.div
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="w-8 h-px bg-[#C8A97E] inline-block" />
                </motion.div>

                {/* Oversized headline — word by word */}
                <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-x-5 gap-y-0 mb-10">
                        {HEADLINE_WORDS.map((word, i) => (
                            <div key={i} className="overflow-hidden py-1">
                                <motion.span
                                    custom={i}
                                    variants={wordVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="inline-block text-5xl mt-5 sm:text-7xl md:text-8xl lg:text-[6rem] font-serif font-bold text-white leading-none tracking-tight drop-shadow-2xl"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subtitle — clearly white with gold highlight */}
                <motion.p
                    variants={fadeUp(1.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-white text-xl md:text-2xl max-w-4xl leading-relaxed font-bold mb-12 drop-shadow-xl"
                >
                    Architecture | Interior Design | Landscape | PMC<br />
                    <span className="text-[#C8A97E] font-medium text-lg md:text-xl">Led by Ar. Deepu D Lakshmi (Principal Architect / Founder)</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeUp(1.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-6 items-center"
                >
                    <Link
                        to="/gallery"
                        className="group flex items-center gap-3 px-8 py-4 bg-[#C8A97E] text-white font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-[#C8A97E] transition-all duration-300"
                    >
                        Discover Work
                        <ArrowDownRight
                            size={16}
                            className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
                        />
                    </Link>
                    <Link
                        to="/contact"
                        className="group flex items-center gap-3 px-8 py-4 border border-white/60 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300"
                    >
                        Get in Touch
                        <ArrowDownRight
                            size={16}
                            className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 opacity-0 group-hover:opacity-100"
                        />
                    </Link>
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className="relative z-10 flex items-center gap-3 px-8 md:px-16 lg:px-24 pb-6"
                variants={fadeUp(1.8)}
                initial="hidden"
                animate="visible"
            >
                <div className="w-px h-12 bg-white/30 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-[#C8A97E]"
                        animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        style={{ height: '40%' }}
                    />
                </div>
                <span className="text-white/70 uppercase tracking-[0.3em] text-[10px]">Scroll</span>
            </motion.div>

            {/* ── Bottom marquee strip — bright white text ── */}
            <div className="relative z-10 border-t border-white/10 py-3 bg-black/20 backdrop-blur-sm">
                <Marquee
                    text="LUXURY ARCHITECTURE — SPATIAL DESIGN — INTERIOR MASTERY — LANDSCAPE POETRY — "
                    speed="normal"
                    color="#ffffff"
                />
            </div>
        </section>
    );
};

export default Hero;
