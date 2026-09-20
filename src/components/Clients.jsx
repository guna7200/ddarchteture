import React from 'react';
import { motion } from 'framer-motion';

// Client logos from public/images
const clientLogos = [
    { name: 'Morais Group', src: '/images/image12.jpeg' },
    { name: 'HICET', src: '/images/image13.jpeg' },
    { name: 'Ideal Resorts', src: '/images/image14.jpeg' },
    { name: 'Coral Beach', src: '/images/image15.png' },
    { name: 'Vijaya Dhayaa', src: '/images/image16.png' },
    { name: 'Divine Blessings', src: '/images/image17.png' },
    { name: 'DSCET', src: '/images/image18.jpeg' },
    { name: 'Mangal & Mangal', src: '/images/image19.png' },
    { name: 'LuLu Mall', src: '/images/image20.jpeg' },
    { name: 'Aasa Holding', src: '/images/image21.png' },
    { name: 'Eppinger', src: '/images/image22.png' },
    { name: 'Sigaram Holdings', src: '/images/image23.png' },
    { name: 'KPR Mill', src: '/images/image24.jpeg' },
    { name: 'CS Grand', src: '/images/image25.jpeg' },
    { name: 'Chitra Dynasty', src: '/images/image26.png' },
    { name: 'Magizhvanam', src: '/images/image27.png' },
    { name: 'Pothys', src: '/images/image28.png' },
    { name: 'RC Constructions', src: '/images/image30.jpeg' },
    { name: 'Chennai Silks', src: '/images/image31.png' },
    { name: 'Adityaram Group', src: '/images/image32.png' }
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