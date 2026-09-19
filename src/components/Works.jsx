import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

// 3D tilt effect hook
const useTilt = () => {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -8;
        const rotateY = ((x - cx) / cx) * 8;
        setStyle({
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
            transition: 'transform 0.1s ease',
        });
    };

    const onMouseLeave = () => {
        setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)', transition: 'transform 0.5s ease' });
    };

    return { ref, style, onMouseMove, onMouseLeave };
};

const TiltCard = ({ work, index }) => {
    const { ref, style, onMouseMove, onMouseLeave } = useTilt();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            ref={ref}
            style={{ ...style, transformStyle: 'preserve-3d' }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="group relative overflow-hidden aspect-[3/4] cursor-pointer bg-rich-charcoal"
        >
            <Link to={`/portfolio/${work.slug}`} className="block w-full h-full">
                {/* Image */}
                <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Dark gradient always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <span className="text-royal-gold text-[10px] uppercase tracking-[0.3em] mb-2 block">{work.category}</span>
                    <h3 className="text-lg font-serif font-semibold text-gray-900 leading-snug">{work.title}</h3>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 p-2.5 bg-black/50 backdrop-blur-sm rounded-full text-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-10">
                    <ArrowUpRight size={16} />
                </div>
            </Link>
        </motion.div>
    );
};



const Works = () => {
    const displayedWorks = portfolioItems.slice(0, 6);

    return (
        <section id="portfolio" className="py-32 bg-gray-50">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="section-line" />
                            <span className="text-royal-gold uppercase tracking-[0.4em] text-sm font-medium">Selected Work</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
                            Our<br /><span className="text-gradient-gold">Portfolio</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <Link
                            to="/portfolio"
                            className="group flex items-center gap-3 text-gray-500 hover:text-royal-gold transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
                        >
                            View All Projects
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                {/* 3D tilt grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {displayedWorks.map((work, index) => (
                        <TiltCard key={work.id} work={work} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
