import React from 'react';
import { motion } from 'framer-motion';

const founder = {
    name: "Ar.Deepu D lakshmi M.Arch",
    role: "Principal Architect / Founder",
    image: "/images/Ar.Deepu D lakshmi M.Arch.png",
    firm: "ARCHI DEE SIGNS"
};

const leadershipTeam = [
    { name: "Er.Gouse", role: "CHIEF ENGINEER", image: "/images/Er.Gouse.png" },
    { name: "Dr. V.Sundrarajulu", role: "STRUCTURAL", image: "/images/Dr. V.Sundrarajulu.png" },
    { name: "Er.Senthil kumar", role: "MEP", image: "/images/Er.Senthil kumar.png" },
    { name: "Er.Sree kumar", role: "HVAC", image: "/images/Er.Sree kumar.png" },
    { name: "Mr.Sadiq Pms", role: "LANDSCAPE", image: "/images/Mr.Sadiq Pms.png" },
    { name: "Mr.Rajan bathija", role: "LIGHTSCAPE", image: "/images/Mr.Rajan bathija.png" }
];

const row2Team = [
    { name: "Dr.AR,Thirunavukkkarasu", role: "AQUACULTURIST", image: "/images/Dr.AR,Thirunavukkkarasu.png" },
    { name: "Mr.Rajesh", role: "MANAGER", image: "/images/Mr.Rajesh.png" },
    { name: "Ar.JIJU", role: "ARCHITECT", image: "/images/Ar.JIJU.png" },
    { name: "Ar.Saranya", role: "ARCHITECT", image: "/images/Ar.Saranya.png" },
    { name: "Dr.MK.Shivaa", role: "HORTICULTURIST", image: "/images/Dr.MK.Shivaa.png" },
    { name: "Mr.Prasath", role: "INTERIOR DESIGN", image: "/images/Mr.Prasath.png" },
    { name: "Mr.Charan", role: "INTERIOR DESIGN", image: "/images/Mr.Charan.png" },
    { name: "Er.Naveen Roy", role: "SITE ENGINEER", image: "/images/Er.Naveen Roy.png" }
];

const Team = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                        Our Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Meet Our Team
                    </h2>
                </div>

                {/* First Team Slide Layout (Slide 16) */}
                <div className="mb-24">
                    <h3 className="text-lg font-serif font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-200 pb-3">
                        Leadership & Consultants
                    </h3>
                    
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        
                        {/* Left Spotlight: Ar. Deepu D Lakshmi (Founder Showcase) */}
                        <div className="lg:w-4/12 w-full flex">
                            <motion.div
                                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl p-8 flex flex-col justify-between items-center text-center w-full"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 mb-6 p-1 border border-gray-100">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover object-top rounded-xl"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-serif font-bold text-gray-900 leading-snug">
                                        {founder.name}
                                    </h4>
                                    <p className="text-[#C8A97E] text-xs uppercase tracking-wider font-semibold font-sans">
                                        {founder.role}
                                    </p>
                                    <span className="text-[10px] text-[#C8A97E] font-bold tracking-widest block font-sans">
                                        {founder.firm}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Grid: 6 Consultants (3 Columns x 2 Rows) */}
                        <div className="lg:w-8/12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {leadershipTeam.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.6 }}
                                >
                                    <div className="aspect-[3/4] overflow-hidden bg-gray-50 p-1">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top rounded-xl"
                                        />
                                    </div>
                                    <div className="p-4 text-center border-t border-gray-50">
                                        <h4 className="text-sm font-serif font-bold text-gray-900 mb-1 leading-snug">
                                            {member.name}
                                        </h4>
                                        <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold font-sans">
                                            {member.role}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Second Row: Associate Architects & Specialists (Slide 17) */}
                <div>
                    <h3 className="text-lg font-serif font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-200 pb-3">
                        Design Associates & Project Engineers
                    </h3>
                    
                    {/* Row 2a: First 4 members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {row2Team.slice(0, 4).map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.6 }}
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-gray-50 p-1">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top rounded-xl"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="text-sm font-serif font-bold text-gray-900 mb-1 leading-snug">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold font-sans">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2b: Next 4 members */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {row2Team.slice(4).map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.6 }}
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-gray-50 p-1">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top rounded-xl"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="text-sm font-serif font-bold text-gray-900 mb-1 leading-snug">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold font-sans">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;