import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const servicesData = [
    {
        number: '01',
        title: 'Architecture',
        description: 'Comprehensive architectural solutions from concept development to construction documentation.',
        scope: [
            'Master Planning',
            'Residential Design',
            'Commercial Design',
            'Hospitality & Resort Design',
            'Institutional Projects',
            'Industrial Facilities',
            'Construction Documentation'
        ],
        image: '/images/.webp'
    },
    {
        number: '02',
        title: 'Interior Design',
        description: 'Thoughtfully crafted interiors that elevate user experiences and reinforce brand or lifestyle aspirations.',
        scope: [
            'Residential Interiors',
            'Corporate Offices',
            'Hospitality Interiors',
            'Retail Spaces',
            'Space Planning',
            'Furniture & Material Selection',
            'Turnkey Interior Solutions'
        ],
        image: '/images/.webp'
    },
    {
        number: '03',
        title: 'Project Management Consultancy (PMC)',
        description: 'Professional project management services ensuring quality, cost control, and timely delivery.',
        scope: [
            'Project Planning',
            'Budget Management',
            'Vendor Coordination',
            'Quality Control',
            'Site Supervision',
            'Progress Monitoring'
        ],
        image: '/images/.webp'
    },
    {
        number: '04',
        title: 'Landscape Design',
        description: 'Creating outdoor environments that connect people with nature.',
        scope: [
            'Resort Landscapes',
            'Residential Gardens',
            'Public Spaces',
            'Hardscape Design',
            'Aquascape',
            'Planting Design',
            'Site Development'
        ],
        image: '/images/.webp'
    }
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-28 bg-[#FDFDFD] border-t border-gray-100 relative overflow-hidden">
            {/* Subtle architectural grid lines for rich texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-xs font-bold block mb-4 font-sans">
                        Our Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                        Facilities That Shape The Future
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    
                    {/* Left Column: Interactive Service Selector */}
                    <div className="lg:w-5/12 flex flex-col justify-center space-y-4">
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`w-full text-left p-6 md:p-8 rounded-xl border transition-all duration-500 flex items-center justify-between group ${
                                        isActive 
                                            ? 'bg-white border-[#C8A97E] shadow-xl translate-x-2' 
                                            : 'bg-transparent border-gray-100 hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`text-sm font-sans tracking-wider font-bold transition-colors duration-300 ${
                                            isActive ? 'text-[#C8A97E]' : 'text-gray-400'
                                        }`}>
                                            {service.number}
                                        </span>
                                        <h3 className={`text-lg md:text-xl font-serif font-bold transition-colors duration-300 ${
                                            isActive ? 'text-gray-900' : 'text-gray-600'
                                        }`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${
                                        isActive ? 'bg-[#C8A97E] text-white' : 'bg-gray-50 text-gray-400 group-hover:translate-x-1 group-hover:text-gray-600'
                                    }`}>
                                        <ArrowRight size={18} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Display Showcase Card with Animations */}
                    <div className="lg:w-7/12 flex">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                className="w-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden"
                            >
                                {/* Showcase Image Container */}
                                <div className="h-64 md:h-80 overflow-hidden relative">
                                    <img
                                        src={servicesData[activeIndex].image}
                                        alt={servicesData[activeIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay label */}
                                    <div className="absolute top-6 left-6 bg-[#C8A97E] text-white px-4 py-2 rounded-md shadow text-xs uppercase tracking-widest font-bold font-sans">
                                        {servicesData[activeIndex].title}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                    <div className="mb-8">
                                        <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-8 font-serif font-normal">
                                            {servicesData[activeIndex].description}
                                        </p>

                                        {/* Scope Section */}
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-[#C8A97E] font-bold block mb-4 font-sans">
                                                Scope of Services
                                            </span>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {servicesData[activeIndex].scope.map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-center gap-3 text-sm text-gray-900 font-normal"
                                                    >
                                                        <div className="p-1 rounded bg-gray-50 border border-gray-100 text-[#C8A97E]">
                                                            <Check size={12} className="stroke-[3]" />
                                                        </div>
                                                        <span>{item}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Services;