import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
    { number: '01', title: 'Architecture' },
    { number: '02', title: 'Interior Design' },
    { number: '03', title: 'Landscape' },
    { number: '04', title: 'Project Management' }
];

const AboutUs = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header - Top Left */}
                <motion.div
                    className="mb-20 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#888] uppercase tracking-[0.2em] text-sm block mb-2 font-medium">About Us</span>
                    <h2 className="text-4xl md:text-5xl text-gray-900 font-light font-serif">
                        Welcome to <span className="font-bold">Archi Dee SiGns</span>
                    </h2>
                    <div className="absolute top-0 left-64 w-12 h-12 border border-gray-300 rounded-full hidden md:block"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 relative">

                    {/* Left Side - Text Card overlapping Border */}
                    <div className="lg:w-1/2 relative z-20">
                        {/* Gold Border Frame */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-[#C8A97E] z-0 hidden lg:block"></div>

                        {/* White Card */}
                        <motion.div
                            className="bg-white p-6 sm:p-12 md:p-16 relative z-10 shadow-2xl rounded-2xl lg:rounded-none"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight font-serif">
                                A Legacy of <br className="hidden sm:inline" />
                                Design Excellence
                            </h3>
                            <p className="text-gray-900 leading-relaxed mb-6 font-normal text-sm sm:text-base">
                                Archi Dee SiGns is a multidisciplinary architecture, landscape, and planning practice committed to creating innovative, sustainable, and transformative environments. Backed by a multidisciplinary team of 57+ professionals under the leadership of Ar. Deepu D Lakshmi, we offer comprehensive design solutions since 2014.
                            </p>
                            <p className="text-gray-900 leading-relaxed mb-8 sm:mb-10 font-normal text-sm sm:text-base">
                                Our philosophy integrates creativity, technical expertise, and strategic thinking to deliver spaces that are aesthetically distinctive, environmentally responsible, and economically sustainable.
                            </p>
                            <Link
                                to="/about"
                                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C8A97E] text-white font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-gray-900 transition-all duration-300 rounded sm:rounded-none"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side - Image & Features */}
                    <div className="lg:w-1/2 flex flex-col justify-between">
                        <motion.div
                            className="h-[280px] sm:h-[400px] lg:h-[500px] w-full mb-8 sm:mb-12"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/image3.png"
                                alt="Modern Architecture - Morais City"
                                className="w-full h-full object-cover transition-all duration-700 rounded-lg shadow-lg"
                            />
                        </motion.div>

                        {/* Features List (01, 02, 03, 04) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <span className="text-[#C8A97E] text-2xl font-serif block mb-2">{feature.number}</span>
                                    <h4 className="text-gray-900 text-lg font-medium leading-tight font-sans">{feature.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

