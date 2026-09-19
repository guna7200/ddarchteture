import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Award } from 'lucide-react';

const projectsData = [
    {
        client: "Falna King Highness' Mr. Abimanu Singh",
        project: "Palace Project (Renovation of 200 years old historical palace)",
        value: "100 Cr",
        location: "Falna, Udaipur, Rajasthan"
    },
    {
        client: "M/s. Sai Divine",
        project: "Sai Divine 9 Coins Temple",
        value: "350 Cr",
        location: "Shirdi"
    },
    {
        client: "M/s. Ramoji Film City",
        project: "India's Largest Oceanarium Project (10 Acres)",
        value: "350 Cr",
        location: "Hyderabad"
    },
    {
        client: "M/s. Aditya Ram Group",
        project: "Palace with 3.5 Acres Landscape (68,000 sqft)",
        value: "Premium",
        location: "ECR Chennai"
    },
    {
        client: "M/s. Sigaram Group of Companies",
        project: "Wellness Resort",
        value: "50 Cr",
        location: "Chennai & Dharmapuri"
    },
    {
        client: "M/s. Hindusthan Group Of Institution",
        project: "Master Plan (169 Acres)",
        value: "Premium",
        location: "Coimbatore"
    },
    {
        client: "M/s. Cosmo Club",
        project: "International Standard Sports Club",
        value: "100 Cr",
        location: "Trichy"
    },
    {
        client: "M/s. Periyar Ulagam",
        project: "India's 2nd Largest Statue (200 fts) with Theme-Based Park (45 Acres)",
        value: "100 Cr",
        location: "Trichy"
    },
    {
        client: "M/s. Morais City",
        project: "Integrated Township Master Plan (360 Acres)",
        value: "Township",
        location: "Trichy"
    },
    {
        client: "M/s. Morais International Business Park",
        project: "Commercial Business Park (1 Million sqft)",
        value: "110 Cr",
        location: "Trichy"
    },
    {
        client: "Mr. Loren Morais",
        project: "Bungalow Project (28,000 sqft with 5 Acres Landscape)",
        value: "Premium",
        location: "Trichy"
    },
    {
        client: "M/s. Morais Memorial",
        project: "Memorial & Chapel",
        value: "1 Cr",
        location: "Trichy"
    },
    {
        client: "M/s. Morais Grand Entry",
        project: "Grand Entry Aquascape",
        value: "2 Cr",
        location: "Trichy"
    }
];

const PrestigiousProjectsList = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                        Our Landmark Achievements
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Prestigious Projects
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left Column: Fixed/Scroll-Sticky Master Plan Preview */}
                    <div className="lg:w-5/12 w-full lg:sticky lg:top-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-4"
                        >
                            <img
                                src="/images/.webp?v=2"
                                alt="Integrated Township Master Plan Layout"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                            <div className="mt-4 flex items-center justify-between text-gray-500 text-xs font-sans">
                                <span>Featured Blueprint</span>
                                <span className="font-semibold text-gray-900">360-Acre Master Plan</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive List of Projects */}
                    <div className="lg:w-7/12 w-full space-y-6">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C8A97E] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: Math.min(index * 0.05, 0.3) }}
                            >
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-[#C8A97E] uppercase tracking-wider block font-sans">
                                        {project.client}
                                    </span>
                                    <h3 className="text-lg font-serif font-bold text-gray-900 leading-snug group-hover:text-[#C8A97E] transition-colors duration-300">
                                        {project.project}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-sans mt-2">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={13} className="text-gray-400" />
                                            {project.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Value Badge */}
                                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                                    <div className="px-3.5 py-1.5 bg-[#F9F9FB] border border-gray-100 rounded-full flex items-center gap-1.5 text-xs font-bold text-gray-900 font-sans group-hover:bg-[#C8A97E]/10 group-hover:border-[#C8A97E]/20 transition-all duration-300">
                                        <Award size={13} className="text-[#C8A97E]" />
                                        <span>Valuation: {project.value}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PrestigiousProjectsList;