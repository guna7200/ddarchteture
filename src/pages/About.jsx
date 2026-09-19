import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';
import PageTransition from '../components/PageTransition';
import { Eye, Target, Compass } from 'lucide-react';

const About = () => {
    return (
        <PageTransition>
            <PageHeader title="About Us" image="/images/.webp?v=2" />

            {/* -- Section 1: Vision, Mission & Purpose (Alternating Image & Content Layout) -- */}
            <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    
                    {/* Header */}
                    <div className="text-center mb-24">
                        <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Crafting Spaces, Shaping Legacies
                        </h2>
                    </div>

                    {/* Stacked Row Layout */}
                    <div className="space-y-24">
                        
                        {/* Vision Block: Left Image, Right Content */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-12">
                            {/* Left Image */}
                            <motion.div 
                                className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 min-h-[350px]"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img 
                                    src="/images/.webp" 
                                    alt="Our Vision Visualizer" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            
                            {/* Right Content */}
                            <motion.div 
                                className="lg:w-1/2 w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-200 to-[#C8A97E]" />
                                <div className="w-14 h-14 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-center justify-center text-[#C8A97E] mb-6">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-sans text-base font-light">
                                    Our vision is to elevate architecture to the level of an art form with enduring significance, creating projects that honor the environment and serve as inspiration for future generations.
                                </p>
                            </motion.div>
                        </div>

                        {/* Mission Block: Left Content, Right Image (Reversed) */}
                        <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12">
                            {/* Right Image */}
                            <motion.div 
                                className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 min-h-[350px]"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img 
                                    src="/images/.webp" 
                                    alt="Our Mission Visualizer" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            
                            {/* Left Content */}
                            <motion.div 
                                className="lg:w-1/2 w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-200 to-[#C8A97E]" />
                                <div className="w-14 h-14 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-center justify-center text-[#C8A97E] mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                    Our Mission
                                </h3>
                                <ul className="text-gray-600 space-y-4 font-sans text-base font-light">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] shrink-0 mt-2.5" />
                                        <span>Create dynamic design environments combining creativity with functionality.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] shrink-0 mt-2.5" />
                                        <span>Maintain integrity and top-notch quality on all levels from brainstorming to realization.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] shrink-0 mt-2.5" />
                                        <span>Create dynamic, adaptable, and long-lasting spaces for a better life.</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Purpose Block: Left Image, Right Content */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-12">
                            {/* Left Image */}
                            <motion.div 
                                className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 min-h-[350px]"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img 
                                    src="/images/.webp" 
                                    alt="Our Purpose Visualizer" 
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            
                            {/* Right Content */}
                            <motion.div 
                                className="lg:w-1/2 w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-200 to-[#C8A97E]" />
                                <div className="w-14 h-14 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-center justify-center text-[#C8A97E] mb-6">
                                    <Compass size={24} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                    Our Purpose
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-sans text-base font-light">
                                    To construct with integrity and to design with purpose. The intersection of human experience with spatial poetry is a place where meaning can be created in every undertaking. We aim to balance environmental responsibility with majestic aesthetics.
                                </p>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </section>

            {/* -- Section 2: Dr. APJ Abdul Kalam Memorial Feature Block (Slide 15 Layout) -- */}
            <section className="py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
                <div className="w-full px-8 md:px-16 lg:px-24 mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                        <img 
                            src="/images/.webp?v=2" 
                            alt="Special Tribute Showcase - Dr. APJ Abdul Kalam Memorial" 
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* -- Section 3: Landscape & Architectural Layout Plans (Slide 14 & 13) -- */}
            <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
                <div className="w-full px-8 md:px-16 lg:px-24 mx-auto">
                    
                    <div className="mb-16">
                        <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                            Landscape Masterpieces
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                            Comprehensive Design Master Plans
                        </h2>
                    </div>

                    <div className="space-y-16">
                        {/* Slide 13: Casa Grand Palace Layout */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                            <img 
                                src="/images/.webp?v=2" 
                                alt="Casa Grand Palace Master Blueprint Plan Layout" 
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>

                        {/* Slide 14: Sai Divine & Cosmo Club Layout Collage */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                            <img 
                                src="/images/.webp?v=2" 
                                alt="Sai Divine Temple & Cosmo Club Landscape Layout Plan" 
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Meet Our Team Section */}
            <Team />
        </PageTransition>
    );
};

export default About;