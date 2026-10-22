import React, { useRef, useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

const TOTAL_FRAMES = 224;

const LEVELS = [
    { id: '01', label: 'LEVEL 48', tag: 'INFINITY POOL & SKY LOUNGE', sub: 'Panoramic Terrace' },
    { id: '02', label: 'LEVEL 49', tag: 'BESPOKE LIVING & MASTER SUITE', sub: 'Floor-to-Ceiling Glazing' },
    { id: '03', label: 'LEVEL 50', tag: 'ARCHITECTURAL PENTHOUSE', sub: 'Turnkey Spatial Luxury' },
];

// Helper to format frame path: frame_0001.jpg
const getFrameSrc = (index) => {
    const padIndex = String(index).padStart(4, '0');
    return `/frames/frame_${padIndex}.jpg`;
};

const Hero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);

    const [activeLevelIdx, setActiveLevelIdx] = useState(0);
    const [currentScene, setCurrentScene] = useState(1);
    const [progressPercent, setProgressPercent] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Pin hero across a tall 400vh scroll container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Draw specific frame index onto canvas preserving aspect-ratio (object-fit: cover)
    const renderFrame = (frameIndex) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imagesRef.current[frameIndex];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Calculate aspect cover dimensions
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let renderWidth, renderHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            renderWidth = canvasWidth;
            renderHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - renderHeight) / 2;
        } else {
            renderWidth = canvasHeight * imgRatio;
            renderHeight = canvasHeight;
            offsetX = (canvasWidth - renderWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    // Preload all frames on mount (Apple technique)
    useEffect(() => {
        let loadedCount = 0;
        const images = [];

        // Resize canvas to match display pixel ratio (Retina / 4K / Full HD crispness)
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                }

                // re-render current frame on resize
                const currentFrame = Math.min(
                    Math.max(Math.floor(scrollYProgress.get() * (TOTAL_FRAMES - 1)), 0),
                    TOTAL_FRAMES - 1
                );
                renderFrame(currentFrame);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Preload frames
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFrameSrc(i);
            img.onload = () => {
                loadedCount++;
                if (i === 1) {
                    // Instantly render first frame as soon as loaded
                    renderFrame(0);
                }
                if (loadedCount >= Math.min(TOTAL_FRAMES, 25)) {
                    setIsLoaded(true);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Scroll listener: Ultra-smooth 60 FPS drawing via requestAnimationFrame
    useEffect(() => {
        let currentFrameIndex = 0;
        let animationFrameId;

        const unsubscribe = scrollYProgress.on('change', (p) => {
            setProgressPercent(Math.min(Math.round(p * 100), 100));

            // Target frame based on scroll progress (0 to TOTAL_FRAMES - 1)
            const targetFrame = Math.min(
                Math.max(Math.floor(p * (TOTAL_FRAMES - 1)), 0),
                TOTAL_FRAMES - 1
            );

            // Active level update
            if (p < 0.35) {
                setActiveLevelIdx(0);
            } else if (p < 0.70) {
                setActiveLevelIdx(1);
            } else {
                setActiveLevelIdx(2);
            }

            // Scene indicator (Video 1 vs Video 2)
            setCurrentScene(p < 0.5 ? 1 : 2);

            // Render next frame smoothly
            if (targetFrame !== currentFrameIndex) {
                currentFrameIndex = targetFrame;
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    renderFrame(currentFrameIndex);
                });
            }
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            unsubscribe();
        };
    }, [scrollYProgress]);

    // Handle jumping to level on click
    const handleLevelClick = (idx) => {
        if (!containerRef.current) return;
        const targetScroll = (idx / (LEVELS.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight);
        window.scrollTo({
            top: containerRef.current.offsetTop + targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative h-[400vh] w-full bg-[#0a0a0a] text-white"
        >
            {/* ── Sticky 100vh Fullscreen Viewport ── */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
                
                {/* ── Apple-Style 60FPS Hardware Accelerated HTML5 Canvas (100% Zero Hang, Zero Stutter) ── */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover block will-change-transform"
                    />

                    {/* Subtle aesthetic gradient for luxury UI contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
                </div>

                {/* ── Architectural Hotspot Pins (From Reference Image) ── */}
                <div className="absolute top-[35%] left-[28%] z-20 hidden md:block pointer-events-none">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/30 animate-pulse" />
                        <div className="absolute left-1/2 bottom-full -translate-x-1/2 w-px h-8 bg-white/70" />
                        <div className="absolute left-1/2 -top-14 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded text-[10px] uppercase font-sans tracking-widest text-white whitespace-nowrap shadow-xl">
                            INFINITY VIEW
                        </div>
                    </div>
                </div>

                <div className="absolute top-[28%] right-[32%] z-20 hidden md:block pointer-events-none">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/30 animate-pulse" />
                        <div className="absolute left-1/2 bottom-full -translate-x-1/2 w-px h-10 bg-white/70" />
                        <div className="absolute left-1/2 -top-16 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded text-[10px] uppercase font-sans tracking-widest text-white whitespace-nowrap shadow-xl">
                            PRIVATE TERRACE
                        </div>
                    </div>
                </div>

                {/* ── Right Side Vertical Levels Elevator Indicator (From the Screenshot) ── */}
                <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6">
                    <div className="relative flex flex-col items-center gap-5">
                        {LEVELS.map((lvl, idx) => {
                            const isActive = activeLevelIdx === idx;
                            return (
                                <button
                                    key={lvl.id}
                                    onClick={() => handleLevelClick(idx)}
                                    className="group relative flex items-center justify-end gap-3 cursor-pointer select-none"
                                >
                                    <span
                                        className={`hidden sm:block text-[11px] font-sans uppercase tracking-widest transition-all duration-300 ${
                                            isActive
                                                ? 'text-[#fc7507] font-semibold opacity-100 translate-x-0'
                                                : 'text-white/40 opacity-0 group-hover:opacity-100 translate-x-1'
                                        }`}
                                    >
                                        {lvl.label}
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`text-xs font-mono transition-colors duration-300 ${
                                                isActive ? 'text-white font-bold' : 'text-white/40 group-hover:text-white/80'
                                            }`}
                                        >
                                            {lvl.id}
                                        </span>
                                        <div
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-[#fc7507] ring-4 ring-[#fc7507]/30 scale-125'
                                                    : 'bg-white/30 group-hover:bg-white/60'
                                            }`}
                                        />
                                    </div>
                                </button>
                            );
                        })}

                        {/* Thin vertical track line */}
                        <div className="absolute right-[3px] top-2 bottom-2 w-[1px] bg-white/15 -z-10" />
                    </div>
                </div>

                {/* ── Top Floating Tag matching Figma ── */}
                <div className="relative z-20 pt-28 px-6 sm:px-12 md:px-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="font-['DM_Sans'] text-[10.5px] uppercase tracking-[2.64px] text-white/90 font-normal">
                            Architecture for a slower world
                        </span>
                    </div>

                    <div className="text-[11px] uppercase tracking-widest text-white/70 font-['DM_Sans'] hidden sm:block bg-black/40 backdrop-blur-md border border-white/15 px-3.5 py-1 rounded-full">
                        {LEVELS[activeLevelIdx].sub}
                    </div>
                </div>

                {/* ── Center / Left Editorial Headline from Figma ── */}
                <div className="relative z-20 px-6 sm:px-12 md:px-16 my-auto max-w-4xl pointer-events-none">
                    <h1 className="font-['DM_Sans'] font-light text-[40px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                        We shape space.<br />
                        Space shapes{' '}
                        <span className="font-['Italiana'] italic font-normal text-white">
                            life.
                        </span>
                    </h1>
                    <p className="font-['DM_Sans'] font-light text-[13px] sm:text-[15px] leading-[22px] sm:leading-[25px] text-white/85 max-w-md mt-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                        An award-winning architecture and design practice creating enduring spaces across India and beyond.
                    </p>
                </div>

                {/* ── Bottom Floating Level Display & Timeline Bar (From Reference Screenshot) ── */}
                <div className="relative z-20 pb-8 px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                    {/* Active Level Big Tag on bottom */}
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#fc7507] font-semibold font-['DM_Sans'] block mb-1">
                            {LEVELS[activeLevelIdx].tag}
                        </span>
                        <div className="text-2xl sm:text-4xl md:text-5xl font-['Italiana'] font-normal text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                            {LEVELS[activeLevelIdx].label}
                        </div>
                    </div>

                    {/* Bottom Cinematic Time/Progress Slider */}
                    <div className="w-full sm:w-80 flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[11px] font-['DM_Sans'] text-white/80">
                            <span className="tracking-widest uppercase">Walkthrough</span>
                            <span className="font-mono text-[#fc7507] font-semibold">{progressPercent}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                            <div
                                className="h-full bg-[#fc7507] transition-all duration-75 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-white/50">
                            <span>Scroll to advance</span>
                            <span>Scene 0{currentScene}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
