import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const expertiseList = [
    {
        number: '01',
        title: 'Architecture',
        subtitle: 'Residential · Commercial · Hospitality',
        video: '/design_videos/Services-Architecture.mp4',
        poster: '/images/landing_architecture.png',
        link: '/services'
    },
    {
        number: '02',
        title: 'Interior',
        subtitle: 'Spatial Design · Styling · Lifestyle',
        video: encodeURI('/design_videos/Services-Interior Design.mp4'),
        poster: '/images/landing_interior.jpg',
        link: '/services'
    },
    {
        number: '03',
        title: 'Landscape',
        subtitle: 'Softscape · Hardscape · Aquascape',
        video: encodeURI('/design_videos/Service-Landscape Desing.mp4'),
        poster: '/images/landing_landscape.jpg',
        link: '/services'
    },
    {
        number: '04',
        title: 'PMC',
        subtitle: 'Strategy · Coordination · Delivery',
        video: '/design_videos/Services-PMC.mp4',
        poster: '/images/landing_pmc.jpg',
        link: '/services'
    }
];

const VideoCard = ({ item }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure playback starts reliably
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay may be restricted until user interacts, or waiting for buffer
            });
        }
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Auto-playing Video */}
            <video
                ref={videoRef}
                src={item.video}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for readability and cinematic atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85 transition-opacity duration-300 group-hover:to-black/90 pointer-events-none" />
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="relative w-full bg-[#F0EEE8] py-24 sm:py-32 lg:py-36 px-0 overflow-hidden">
            {/* ── Top Header Area ── */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mb-16 sm:mb-20">
                {/* Section Label */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#77736A] font-normal">
                        03
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#24231F] font-normal">
                        Expertise
                    </span>
                    <span className="w-12 h-[1px] bg-[#24231F]/50 inline-block ml-1" />
                </div>

                {/* Heading + Right Paragraph */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                    <motion.div
                        className="lg:col-span-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.05] tracking-[-0.035em] text-[#24231F] font-['DM_Sans'] font-light">
                            From first line<br />
                            to final{' '}
                            <span className="font-['Italiana'] italic font-normal text-[#24231F]">
                                detail.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-4 pb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-['DM_Sans'] font-light text-[13px] sm:text-[14px] leading-[22px] text-[#68645B] max-w-sm">
                            An integrated practice brings clarity to complex projects with consistency to every scale.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── 4 Tall Vertical Video Cards Grid (Flush layout matching Figma) ── */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {expertiseList.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link
                                to={item.link}
                                className="group relative block h-[480px] sm:h-[540px] lg:h-[580px] w-full overflow-hidden bg-[#181816] rounded-sm select-none"
                            >
                                {/* Autoplaying Video Element */}
                                <VideoCard item={item} />

                                {/* Card Header (Top Bar): Number + Arrow Button */}
                                <div className="absolute top-0 left-0 right-0 p-7 sm:p-8 flex items-center justify-between z-10">
                                    <span className="font-['DM_Sans'] text-[11px] text-white/90 font-medium tracking-widest drop-shadow-md">
                                        {item.number}
                                    </span>

                                    {/* Circular Arrow Button (48px) */}
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/55 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black text-white shadow-lg">
                                        <svg
                                            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Card Footer: Title & Subtitle */}
                                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8 z-10">
                                    <h3 className="font-['Italiana'] text-[30px] sm:text-[34px] text-white font-normal leading-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1 drop-shadow-md">
                                        {item.title}
                                    </h3>
                                    <p className="font-['DM_Sans'] text-[9.5px] sm:text-[10px] tracking-[1.2px] uppercase text-white/80 font-normal leading-relaxed drop-shadow-sm">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;