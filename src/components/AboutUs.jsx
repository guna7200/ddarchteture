import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id="about" className="relative w-full bg-[#F0EEE8] py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-[#24231F]/10">
            <div className="max-w-[1400px] mx-auto">
                {/* ── Section Label ── */}
                <div className="flex items-center gap-4 mb-16 sm:mb-20">
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#77736A] font-normal">
                        01
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#24231F] font-normal">
                        About Us
                    </span>
                    <span className="w-12 h-[1px] bg-[#24231F]/50 inline-block ml-1" />
                </div>

                {/* ── Content Grid: Left Title + Right Narrative ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Big Headline */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.05] tracking-[-0.035em] text-[#24231F] font-['DM_Sans'] font-light">
                            Beyond buildings,<br />
                            we design{' '}
                            <span className="font-['Italiana'] italic font-normal text-[#24231F]">
                                belonging.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right: Paragraph */}
                    <motion.div
                        className="lg:col-span-5 pt-2 lg:pt-3"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-['DM_Sans'] font-light text-[14px] sm:text-[15px] leading-[25px] sm:leading-[27px] text-[#68645B]">
                            DD+ Architect is a multidisciplinary architecture, landscape, and planning firm dedicated to shaping distinctive spaces and transformative environments. Led by Ar. Deepu D Lakshmi, our team of 57+ professionals has been delivering comprehensive design solutions since 2014, combining creative vision with technical excellence.
                        </p>
                        <p className="font-['DM_Sans'] font-light text-[14px] sm:text-[15px] leading-[25px] sm:leading-[27px] text-[#68645B] mt-5">
                            Our approach brings together design innovation, strategic planning, and environmental responsibility to create spaces that are architecturally distinguished, contextually responsive, and economically sustainable. From landmark developments to thoughtfully crafted environments, we strive to create enduring value through design.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
