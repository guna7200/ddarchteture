import React from 'react';
import { motion } from 'framer-motion';

const VideoStats = () => {
    return (
        <section id="compass" className="relative w-full bg-[#24231F] text-[#F0EEE8] py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* ── Section Label ── */}
                <div className="flex items-center gap-4 mb-16 sm:mb-20">
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#77736A] font-normal">
                        02
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#F0EEE8] font-normal">
                        Our Compass
                    </span>
                    <span className="w-12 h-[1px] bg-[#F0EEE8]/30 inline-block ml-1" />
                </div>

                {/* ── Headline in Italiana ── */}
                <motion.div
                    className="max-w-2xl mb-16 sm:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-['Italiana'] text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.08] tracking-tight text-[#F0EEE8] font-normal">
                        One practice.<br className="hidden sm:block" />
                        Two enduring principles.
                    </h2>
                </motion.div>

                {/* ── Two Columns (Mission & Vision) with subtle borders ── */}
                <div className="border-t border-[#F0EEE8]/20 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F0EEE8]/20">
                    {/* Column I: Mission */}
                    <motion.div
                        className="pt-12 sm:pt-14 pb-10 sm:pb-0 md:pr-12 lg:pr-16 flex flex-col justify-between min-h-[380px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            {/* Roman Numeral I in Lime accent */}
                            <span className="font-['Italiana'] text-[18px] text-[#D7DF7B] block mb-12 sm:mb-16">
                                I
                            </span>
                            <h3 className="font-['Italiana'] text-[34px] sm:text-[40px] text-[#F0EEE8] font-normal tracking-wide mb-6">
                                Mission
                            </h3>
                        </div>
                        <p className="font-['DM_Sans'] font-light text-[14px] sm:text-[15px] leading-[25px] sm:leading-[27px] text-[#AAA69C]">
                            To be a leading architecture and design practice recognized for creating transformative spaces that enrich communities, inspire people, and stand the test of time. Through design excellence, innovation, and a commitment to sustainability, we strive to create meaningful environments that balance aesthetics, functionality, and environmental responsibility while delivering lasting value for generations to come.
                        </p>
                    </motion.div>

                    {/* Column II: Vision */}
                    <motion.div
                        className="pt-12 sm:pt-14 pb-4 sm:pb-0 md:pl-12 lg:pl-16 flex flex-col justify-between min-h-[380px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            {/* Roman Numeral II in Lime accent */}
                            <span className="font-['Italiana'] text-[18px] text-[#D7DF7B] block mb-12 sm:mb-16">
                                II
                            </span>
                            <h3 className="font-['Italiana'] text-[34px] sm:text-[40px] text-[#F0EEE8] font-normal tracking-wide mb-6">
                                Vision
                            </h3>
                        </div>
                        <p className="font-['DM_Sans'] font-light text-[14px] sm:text-[15px] leading-[25px] sm:leading-[27px] text-[#AAA69C]">
                            We create innovative, sustainable, and thoughtfully designed spaces that harmonize aesthetics, functionality, and lasting value. Driven by design excellence, we uphold the highest standards throughout every stage of the design process. Built on trust, transparency, and collaboration, our approach embraces evolving technologies and creative expression to deliver meaningful, enduring architectural solutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoStats;
