import React from 'react';
import { motion } from 'framer-motion';

// Client logos from public/images
const clientLogos = [
    { name: 'Morais Group', src: '/images/.webp' },
    { name: 'HICET', src: '/images/.webp' },
    { name: 'Ideal Resorts', src: '/images/.webp' },
    { name: 'Coral Beach', src: '/images/.webp' },
    { name: 'Vijaya Dhayaa', src: '/images/.webp' },
    { name: 'Divine Blessings', src: '/images/.webp' },
    { name: 'DSCET', src: '/images/.webp' },
    { name: 'Mangal & Mangal', src: '/images/.webp' },
    { name: 'LuLu Mall', src: '/images/.webp' },
    { name: 'Aasa Holding', src: '/images/.webp' },
    { name: 'Eppinger', src: '/images/.webp' },
    { name: 'Sigaram Holdings', src: '/images/.webp' },
    { name: 'KPR Mill', src: '/images/.webp' },
    { name: 'CS Grand', src: '/images/.webp' },
    { name: 'Chitra Dynasty', src: '/images/.webp' },
    { name: 'Magizhvanam', src: '/images/.webp' },
    { name: 'Pothys', src: '/images/.webp' },
    { name: 'RC Constructions', src: '/images/.webp' },
    { name: 'Chennai Silks', src: '/images/.webp' },
    { name: 'Adityaram Group', src: '/images/.webp' }
];

// Duplicate logos array to make a seamless infinite loop
const doubleLogos = [...clientLogos, ...clientLogos, ...clientLogos];

const Clients = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Full Width Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                        Our Network
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Our Prestigious Clients
                    </h2>
                </div>
            </div>

            {/* Infinite Horizontal Auto-play Ticker Container */}
            <div className="w-full relative overflow-hidden flex py-4 select-none group">
                
                {/* Smooth Carousel Track */}
                <div 
                    className="flex min-w-full shrink-0 gap-16 items-center justify-around animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]"
                    style={{
                        animationName: 'marquee-loop',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDuration: '40s'
                    }}
                >
                    {doubleLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Injecting keyframe styles directly in the component so it works seamlessly */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes marquee-loop {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-33.33%); }
                    }
                `}} />
            </div>
        </section>
    );
};

export default Clients;