import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VisionMission = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax displacements
    const y1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const y4 = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    
                    {/* Left Column: Parallax Images Grid (Slide 3 styling) */}
                    <div className="lg:w-1/2 grid grid-cols-12 gap-3 sm:gap-4 min-h-[350px] sm:min-h-[500px]">
                        {/* Top Large Image */}
                        <motion.div 
                            style={{ y: y1 }}
                            className="col-span-12 h-48 sm:h-64 overflow-hidden rounded-lg shadow-lg relative"
                        >
                            <img
                                src="/images/about_vision.jpg"
                                alt="Our Vision - Landscaping & Aquascape"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Bottom Left Small Image */}
                        <motion.div 
                            style={{ y: y2 }}
                            className="col-span-4 h-32 sm:h-48 overflow-hidden rounded-lg shadow-lg relative"
                        >
                            <img
                                src="/images/about_mission.jpg"
                                alt="Our Mission - Architecture"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Bottom Center Wood Entry Image */}
                        <motion.div 
                            style={{ y: y3 }}
                            className="col-span-4 h-32 sm:h-48 overflow-hidden rounded-lg shadow-lg relative"
                        >
                            <img
                                src="/images/image45.jpeg"
                                alt="Interior Living Concept"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Bottom Right Wide Perspective Image */}
                        <motion.div 
                            style={{ y: y4 }}
                            className="col-span-4 h-32 sm:h-48 overflow-hidden rounded-lg shadow-lg relative"
                        >
                            <img
                                src="/images/image65.png"
                                alt="Modern Architectural Facade"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Vision & Mission Text */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Vision Block */}
                            <div className="mb-12">
                                <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-sm font-semibold block mb-3 font-sans">Our Target</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                                    Vision
                                </h2>
                                <p className="text-gray-900 leading-relaxed text-base md:text-base font-light">
                                    To become a leading design and consultancy firm recognized for creating transformative spaces that enrich communities, inspire people, and stand the test of time.
                                </p>
                            </div>

                            {/* Mission Block */}
                            <div>
                                <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-sm font-semibold block mb-3 font-sans">Our Purpose</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                                    Mission
                                </h2>
                                <ul className="space-y-4 text-sm text-gray-900 font-normal">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#C8A97E] mt-1 font-bold">•</span>
                                        <span>Deliver innovative and sustainable design solutions.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#C8A97E] mt-1 font-bold">•</span>
                                        <span>Create spaces that balance aesthetics, functionality, and value.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#C8A97E] mt-1 font-bold">•</span>
                                        <span>Maintain excellence throughout design and execution.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#C8A97E] mt-1 font-bold">•</span>
                                        <span>Foster long-term relationships through trust and transparency.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#C8A97E] mt-1 font-bold">•</span>
                                        <span>Continuously evolve through technology and creative exploration.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
