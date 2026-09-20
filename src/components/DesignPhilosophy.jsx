import React from 'react';
import { motion } from 'framer-motion';

const DesignPhilosophy = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left side text details */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-sm font-semibold block mb-2 font-sans">
                                Design Driven
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                                Our Design Philosophy
                            </h2>
                            <p className="text-gray-900 leading-relaxed text-base md:text-lg mb-10 font-normal">
                                At Archidesigns, every project begins with a story. We believe design should respond to its context, culture, climate, and users. Our process integrates creativity, research, and technical expertise to produce environments that are timeless, purposeful, and memorable.
                            </p>

                            {/* Core Principles */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-8 border-b border-gray-200 pb-3">
                                    Our Core Principles
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[#C8A97E] font-bold text-base uppercase tracking-wider mb-2 font-sans">Innovation</h4>
                                        <p className="text-gray-900 text-base font-normal leading-relaxed">Creating distinctive and future-ready solutions.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#C8A97E] font-bold text-base uppercase tracking-wider mb-2 font-sans">Sustainability</h4>
                                        <p className="text-gray-900 text-base font-normal leading-relaxed">Designing environmentally responsible spaces that endure.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#C8A97E] font-bold text-base uppercase tracking-wider mb-2 font-sans">Functionality</h4>
                                        <p className="text-gray-900 text-base font-normal leading-relaxed">Ensuring every space performs efficiently and effectively.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#C8A97E] font-bold text-base uppercase tracking-wider mb-2 font-sans">Excellence</h4>
                                        <p className="text-gray-900 text-base font-normal leading-relaxed">Delivering quality through meticulous planning and execution.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side collage layout matching Slide 4 layout */}
                    <div className="lg:w-1/2 w-full flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-72 overflow-hidden rounded-lg shadow-md"
                        >
                            <img
                                src="/images/image46.jpeg"
                                alt="Modern Architecture curved layout"
                                className="w-full h-full object-cover  transition-all duration-700"
                            />
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-64 overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src="/images/image46.jpeg"
                                    alt="Modern Landscape Pathway"
                                    className="w-full h-full object-cover  transition-all duration-700"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="h-64 overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src="/images/image46.jpeg"
                                    alt="Warm brick entryway"
                                    className="w-full h-full object-cover  transition-all duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DesignPhilosophy;
