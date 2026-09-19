import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send, Building } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    // Tab selector state to toggle between Chennai and Trichy maps
    const [selectedMap, setSelectedMap] = useState('chennai');

    // Google Maps iframe embeds for the two locations
    const mapEmbeds = {
        chennai: "https://maps.google.com/maps?q=13.0435345,80.2319232&z=17&output=embed",
        trichy: "https://maps.google.com/maps?q=10.8017772,78.681121&z=17&output=embed"
    };

    return (
        <PageTransition>
            <PageHeader title="Contact Us" image="/images/.webp?v=2" />

            <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    
                    {/* Grid Row 1: Address Cards & Map */}
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch mb-24">
                        
                        {/* Left Side Address selection panels */}
                        <div className="lg:w-5/12 w-full flex flex-col justify-between space-y-6">
                            <div>
                                <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                                    Our Offices
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                                    Visit Our Studios
                                </h2>
                            </div>

                            {/* Office Interactive Cards */}
                            <div className="space-y-6">
                                {/* Chennai Tab Button */}
                                <div 
                                    onClick={() => setSelectedMap('chennai')}
                                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                                        selectedMap === 'chennai' 
                                            ? 'border-[#C8A97E] bg-amber-50/20 shadow-lg shadow-amber-500/5' 
                                            : 'border-gray-100 hover:border-gray-300 bg-white'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                        selectedMap === 'chennai' ? 'bg-[#C8A97E] text-white' : 'bg-gray-50 text-gray-500'
                                    }`}>
                                        <Building size={18} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-sm font-sans font-bold text-gray-900">Chennai Head Office</h4>
                                            <span className="text-[9px] uppercase tracking-wider bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded font-sans">
                                                Active Map
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                                            No: 21 Habibullah Road, T Nagar, Chennai - 600017.
                                        </p>
                                    </div>
                                </div>

                                {/* Trichy Tab Button */}
                                <div 
                                    onClick={() => setSelectedMap('trichy')}
                                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                                        selectedMap === 'trichy' 
                                            ? 'border-[#C8A97E] bg-amber-50/20 shadow-lg shadow-amber-500/5' 
                                            : 'border-gray-100 hover:border-gray-300 bg-white'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                        selectedMap === 'trichy' ? 'bg-[#C8A97E] text-white' : 'bg-gray-50 text-gray-500'
                                    }`}>
                                        <Building size={18} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-sm font-sans font-bold text-gray-900">Trichy Studio Office</h4>
                                        </div>
                                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                                            No: 2 Anandam nagar 1st cross, Ammaiyappa Nagar, Trichy - 620017.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Map Display */}
                        <div className="lg:w-7/12 w-full min-h-[380px] bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
                            <iframe 
                                src={mapEmbeds[selectedMap]}
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, minHeight: '380px' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Grid Row 2: Message Form (Left) & visual plan card (Right) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        
                        {/* Left Side: Contact Message Form */}
                        <div className="lg:w-1/2 w-full bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-md flex flex-col justify-between">
                            <div>
                                <div className="mb-10">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                        Send Us A Message
                                    </h2>
                                    <p className="text-xs text-gray-500 font-sans">
                                        Complete the form below and our team will get in touch with you shortly.
                                    </p>
                                </div>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input 
                                            type="text" 
                                            placeholder="Your Name" 
                                            className="w-full bg-white border border-gray-200 p-4 text-xs font-sans text-gray-900 placeholder-gray-400 focus:border-[#C8A97E] outline-none transition-colors rounded-xl shadow-sm" 
                                        />
                                        <input 
                                            type="email" 
                                            placeholder="Your Email" 
                                            className="w-full bg-white border border-gray-200 p-4 text-xs font-sans text-gray-900 placeholder-gray-400 focus:border-[#C8A97E] outline-none transition-colors rounded-xl shadow-sm" 
                                        />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Subject" 
                                        className="w-full bg-white border border-gray-200 p-4 text-xs font-sans text-gray-900 placeholder-gray-400 focus:border-[#C8A97E] outline-none transition-colors rounded-xl shadow-sm" 
                                    />
                                    <textarea 
                                        rows="5" 
                                        placeholder="Your Message" 
                                        className="w-full bg-white border border-gray-200 p-4 text-xs font-sans text-gray-900 placeholder-gray-400 focus:border-[#C8A97E] outline-none transition-colors rounded-xl shadow-sm"
                                    ></textarea>

                                    <div>
                                        <button 
                                            type="submit" 
                                            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C8A97E] text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors duration-300 rounded-xl shadow-md"
                                        >
                                            <span>Send Message</span>
                                            <Send size={14} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Side: Image and Company Info */}
                        <div className="lg:w-1/2 w-full flex flex-col gap-8 justify-between">
                            {/* Visual blueprint plan card */}
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                                <img 
                                    src="/images/.webp" 
                                    alt="Archi Dee Signs Master Landscape Design Plan" 
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>

                            {/* Company Contact info display card below image */}
                            <div className="bg-gray-50/40 p-8 rounded-3xl border border-gray-100">
                                <div className="flex items-center gap-6 mb-6 border-b border-gray-200/55 pb-4">
                                    <div className="w-20 h-20 shrink-0 bg-white p-2 rounded-2xl border border-gray-100 flex items-center justify-center shadow-md">
                                        <img 
                                            src="/images/.webp?v=2" 
                                            alt="DD+ Architects Logo" 
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-serif font-bold text-gray-900 leading-snug">
                                            ARCHI DEE SIGNS
                                        </h2>
                                        <p className="text-[#C8A97E] text-[8px] font-bold uppercase tracking-wider font-sans">
                                            Architecture | Interior | Landscape | PMC
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#C8A97E] shrink-0 shadow-sm">
                                            <Phone size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold font-sans">Phone</p>
                                            <p className="text-[11px] font-sans text-gray-800 font-semibold mt-0.5 leading-snug">
                                                +91 9942685322
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#C8A97E] shrink-0 shadow-sm">
                                            <Mail size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold font-sans">Email</p>
                                            <p className="text-[11px] font-sans text-gray-800 font-semibold mt-0.5 break-all">
                                                archideesigns@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#C8A97E] shrink-0 shadow-sm">
                                            <Globe size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold font-sans">Website</p>
                                            <p className="text-[11px] font-sans text-[#C8A97E] font-semibold mt-0.5 hover:underline">
                                                <a href="https://www.archideesigns.com" target="_blank" rel="noopener noreferrer">
                                                    www.archideesigns.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </PageTransition>
    );
};

export default Contact;