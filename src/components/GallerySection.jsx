import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 'casa-terra',
        title: 'Casa Terra',
        category: 'Residential · 2024',
        image: '/carousel_images/Carousal_6.png',
        location: 'Goa, India'
    },
    {
        id: 'palm-court',
        title: 'The Palm Court',
        category: 'Landscape · 2023',
        image: '/carousel_images/Carousal_5.jpg',
        location: 'Chennai, India'
    },
    {
        id: 'stone-sanctuary',
        title: 'The Stone Sanctuary',
        category: 'Hospitality · 2024',
        image: '/carousel_images/Carousal_3.jpg',
        location: 'Trichy, India'
    },
    {
        id: 'atelier-17',
        title: 'Atelier 17',
        category: 'Interior · 2023',
        image: '/carousel_images/Carousal_2.jpg',
        location: 'Bangalore, India'
    },
    {
        id: 'solar-pavilion',
        title: 'Solar Pavilion',
        category: 'Cultural · 2022',
        image: '/carousel_images/Carousal_4.jpg',
        location: 'Hyderabad, India'
    },
    {
        id: 'prana-studio',
        title: 'Prana Studio',
        category: 'Commercial · 2024',
        image: '/carousel_images/Carousal_1.jpg',
        location: 'Kochi, India'
    }
];

// Duplicate dataset 4 times to ensure seamless infinite continuous glide
const displayProjects = [...projects, ...projects, ...projects, ...projects];

const GAP = 24; // gap in px
const NORMAL_SPEED = 48; // pixels per second for continuous gliding

const GallerySection = () => {
    const trackRef = useRef(null);
    const containerRef = useRef(null);

    // Continuous motion state
    const currentXRef = useRef(0);
    const isPausedRef = useRef(false);
    const isDraggingRef = useRef(false);
    const isNudgingRef = useRef(false);

    // Drag tracking
    const dragStartXRef = useRef(0);
    const dragLastXRef = useRef(0);
    const [isDraggingState, setIsDraggingState] = useState(false);
    const [isHoveredState, setIsHoveredState] = useState(false);

    // Measure stride (card width + gap) and single set width (6 cards)
    const getStride = useCallback(() => {
        if (!trackRef.current || !trackRef.current.children[0]) return 370 + GAP;
        return trackRef.current.children[0].offsetWidth + GAP;
    }, []);

    const getSingleSetWidth = useCallback(() => {
        return getStride() * projects.length;
    }, [getStride]);

    // ── Continuous 60FPS Infinite Loop Animation ──
    useEffect(() => {
        let animId;
        let lastTime = performance.now();

        const animateLoop = (time) => {
            const dt = Math.min((time - lastTime) / 1000, 0.1); // clamp delta to prevent jump after backgrounding
            lastTime = time;

            if (!isPausedRef.current && !isDraggingRef.current && !isNudgingRef.current) {
                const moveAmount = NORMAL_SPEED * dt;
                currentXRef.current -= moveAmount;

                const singleWidth = getSingleSetWidth();
                if (singleWidth > 0) {
                    while (currentXRef.current <= -singleWidth) {
                        currentXRef.current += singleWidth;
                    }
                    while (currentXRef.current > 0) {
                        currentXRef.current -= singleWidth;
                    }
                }

                if (trackRef.current) {
                    trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0px, 0px)`;
                }
            }

            animId = requestAnimationFrame(animateLoop);
        };

        animId = requestAnimationFrame(animateLoop);
        return () => cancelAnimationFrame(animId);
    }, [getSingleSetWidth]);

    // Smooth nudge function for Prev / Next arrow buttons
    const nudge = useCallback((direction) => {
        if (isNudgingRef.current) return;
        isNudgingRef.current = true;

        const stride = getStride();
        const delta = direction === 'next' ? -stride : stride;
        const startX = currentXRef.current;
        const targetX = startX + delta;
        const startTime = performance.now();
        const duration = 600; // 600ms smooth spring/cubic glide

        const animateNudge = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            currentXRef.current = startX + delta * ease;

            const singleWidth = getSingleSetWidth();
            if (singleWidth > 0) {
                while (currentXRef.current <= -singleWidth) currentXRef.current += singleWidth;
                while (currentXRef.current > 0) currentXRef.current -= singleWidth;
            }

            if (trackRef.current) {
                trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0px, 0px)`;
            }

            if (progress < 1) {
                requestAnimationFrame(animateNudge);
            } else {
                isNudgingRef.current = false;
            }
        };

        requestAnimationFrame(animateNudge);
    }, [getStride, getSingleSetWidth]);

    // Mouse / Touch Drag Scrubbing
    const handlePointerDown = (e) => {
        isDraggingRef.current = true;
        setIsDraggingState(true);

        const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        dragStartXRef.current = clientX;
        dragLastXRef.current = clientX;
    };

    const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const delta = clientX - dragLastXRef.current;
        dragLastXRef.current = clientX;

        currentXRef.current += delta;

        const singleWidth = getSingleSetWidth();
        if (singleWidth > 0) {
            while (currentXRef.current <= -singleWidth) currentXRef.current += singleWidth;
            while (currentXRef.current > 0) currentXRef.current -= singleWidth;
        }

        if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0px, 0px)`;
        }
    };

    const handlePointerUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDraggingState(false);
    };

    return (
        <section
            id="projects"
            className="relative w-full bg-[#181816] text-[#F0EEE8] py-24 sm:py-32 lg:py-36 px-0 overflow-hidden select-none"
        >
            {/* ── Top Header Area ── */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mb-14 sm:mb-16">
                {/* Section Label */}
                <div className="flex items-center gap-4 mb-14">
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#77736A] font-normal">
                        04
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] tracking-[2px] uppercase text-[#F0EEE8] font-normal">
                        Selected Work
                    </span>
                    <span className="w-12 h-[1px] bg-[#F0EEE8]/30 inline-block ml-1" />
                </div>

                {/* Title + Subtitle + Slide Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[1.05] tracking-[-0.035em] text-[#F0EEE8] font-['DM_Sans'] font-light">
                            Places with<br />
                            a life of their{' '}
                            <span className="font-['Italiana'] italic font-normal text-[#F0EEE8]">
                                own.
                            </span>
                        </h2>
                        <div className="flex items-center gap-4 mt-5">
                            <p className="font-['DM_Sans'] font-normal text-[9.5px] sm:text-[10px] tracking-[1.44px] uppercase text-[#8D8A81]">
                                Drag to scrub · Continuous showcase 2022—2025
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono text-[#D7DF7B] bg-[#24231F] px-3 py-1 rounded-full border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D7DF7B] animate-pulse" />
                                Continuous Flow
                            </span>
                        </div>
                    </div>

                    {/* Previous / Next Nudge Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => nudge('prev')}
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200 focus:outline-none cursor-pointer"
                            aria-label="Previous project"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => nudge('next')}
                            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200 focus:outline-none cursor-pointer"
                            aria-label="Next project"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Continuous Infinite Flow Track ── */}
            <div
                ref={containerRef}
                className={`w-full overflow-hidden ${
                    isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                onMouseEnter={() => {
                    isPausedRef.current = true;
                    setIsHoveredState(true);
                }}
                onMouseLeave={() => {
                    isPausedRef.current = false;
                    setIsHoveredState(false);
                    if (isDraggingRef.current) handlePointerUp();
                }}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
            >
                <div
                    ref={trackRef}
                    className="flex gap-6 will-change-transform"
                    style={{
                        transform: `translate3d(0px, 0px, 0px)`
                    }}
                >
                    {displayProjects.map((project, idx) => {
                        const originalIndex = idx % projects.length;
                        return (
                            <div
                                key={`${project.id}-${idx}`}
                                className="carousel-card flex-shrink-0 w-[280px] sm:w-[330px] lg:w-[370px] group select-none"
                            >
                                <Link
                                    to="/gallery"
                                    onClick={(e) => {
                                        // Prevent click if scrubbing
                                        if (Math.abs(dragLastXRef.current - dragStartXRef.current) > 10) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="block"
                                >
                                    {/* Project Photo Container */}
                                    <div className="w-full h-[380px] sm:h-[430px] lg:h-[460px] overflow-hidden bg-[#24231F] rounded-sm mb-4 relative shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            draggable="false"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                                        {/* Slide Number Badge */}
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/90 border border-white/10">
                                            0{originalIndex + 1}
                                        </div>
                                    </div>

                                    {/* Caption Row */}
                                    <div className="flex items-baseline justify-between pt-1">
                                        <h3 className="font-['Italiana'] text-[24px] sm:text-[26px] text-[#F0EEE8] font-normal tracking-wide transition-colors duration-300 group-hover:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="font-['DM_Sans'] text-[9px] sm:text-[10px] tracking-[1.1px] uppercase text-[#8D8A81] font-normal">
                                            {project.category}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Bottom Controls & Status Bar ── */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-['DM_Sans'] tracking-widest uppercase text-white/40">
                        {isHoveredState ? 'PAUSED (HOVERING)' : 'CONTINUOUS SMOOTH LOOP'}
                    </span>
                    <span className="w-12 h-[1px] bg-white/15" />
                </div>

                <Link
                    to="/gallery"
                    className="font-['DM_Sans'] text-[11px] tracking-[1.2px] uppercase text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                    <span>View All Works</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default GallerySection;