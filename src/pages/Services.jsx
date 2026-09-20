import React from 'react';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const servicesList = [
    {
        num: "01",
        title: "Architecture",
        tagline: "Concept to Realization",
        desc: "Crafting meaningful built environments and high-end commercial/residential landmarks. We blend cutting-edge technology with spatial poetry to develop structural legacies.",
        image: "/images/image43.jpeg",
        scopes: ["Conceptual Architectural Design", "Vastu-Compliant Master Planning", "3D Renderings & Walkthroughs", "Structural Engineering Coordination"]
    },
    {
        num: "02",
        title: "Interior Design",
        tagline: "Legacy Spaces",
        desc: "Meticulous, detail-oriented luxury interior layouts that reflect classic majesty and modern convenience. We prioritize premium materials and ergonomic flows.",
        image: "/images/image45.jpeg",
        scopes: ["Residential & Commercial Interiors", "Custom Bespoke Furniture Design", "Material & Color Consultation", "Lighting & Acoustic Planning"]
    },
    {
        num: "03",
        title: "Landscape Design",
        tagline: "Environmental Harmony",
        desc: "Transforming vast expanses of outdoor land into lush, cohesive visual escapes. We integrate natural topography with thematic pathways, pools, and custom flora.",
        image: "/images/image47.png",
        scopes: ["Thematic Resort Landscape Layouts", "Waterbody & Pool Master Planning", "Site Topography & Drainage Grids", "Hardscape & Botanical Selection"]
    },
    {
        num: "04",
        title: "Project Management",
        tagline: "End-to-End Execution",
        desc: "Delivering world-class Project Management Consultancy (PMC) for multi-million budget landmarks. We coordinate contractors and assure strict quality compliance.",
        image: "/images/image48.png",
        scopes: ["Feasibility & Budget Optimization", "Project Timeline & Scheduling", "Contractor & Vendor Coordination", "Site Quality Assurance & Audits"]
    }
];

const Services = () => {
    return (
        <PageTransition>
            <PageHeader title="Our Services" image="/images/image42.jpeg" />
            
            <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    
                    {/* Header */}
                    <div className="text-center mb-24">
                        <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Comprehensive Creative Capabilities
                        </h2>
                    </div>

                    {/* Alternating Row Stack */}
                    <div className="space-y-28">
                        {servicesList.map((srv, idx) => {
                            const isReversed = idx % 2 !== 0;
                            return (
                                <div 
                                    key={srv.num}
                                    className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                                >
                                    {/* Service Image Block */}
                                    <motion.div 
                                        className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 aspect-[4/3] max-h-[450px] relative group"
                                        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <img 
                                            src={srv.image} 
                                            alt={srv.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md text-xs font-bold text-gray-900 tracking-wider uppercase font-sans">
                                            {srv.tagline}
                                        </div>
                                    </motion.div>

                                    {/* Service Content Card Block */}
                                    <motion.div 
                                        className="lg:w-1/2 w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group"
                                        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-200 to-[#C8A97E]" />
                                        
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="font-serif text-3xl font-extrabold text-[#C8A97E]/30 tracking-wider">
                                                    {srv.num}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                                                {srv.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed font-sans text-base font-light">
                                                {srv.desc}
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-gray-100 mt-6">
                                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4 font-sans">
                                                Design & Delivery Scope
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {srv.scopes.map((scope, sIdx) => (
                                                    <div key={sIdx} className="flex items-start gap-3">
                                                        <CheckCircle2 size={16} className="text-[#C8A97E] shrink-0 mt-0.5" />
                                                        <span className="text-xs text-gray-700 font-sans leading-tight">
                                                            {scope}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </PageTransition>
    );
};

export default Services;