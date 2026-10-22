import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#D7D1C4] text-[#24231F] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* ── Top Label ── */}
                <div className="mb-8 sm:mb-10">
                    <span className="font-['DM_Sans'] text-[10px] sm:text-[11px] tracking-[2.2px] uppercase text-[#24231F] font-normal">
                        Have a place in mind?
                    </span>
                </div>

                {/* ── Giant CTA Headline with Diagonal Arrow ── */}
                <div className="mb-24 sm:mb-32 lg:mb-40">
                    <Link
                        to="/contact"
                        className="group inline-flex flex-col sm:flex-row items-start sm:items-end justify-between w-full max-w-5xl gap-6 select-none"
                    >
                        <h2 className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] leading-[0.95] tracking-[-0.04em] text-[#24231F] font-['DM_Sans'] font-light">
                            Let's create something<br />
                            <span className="font-['Italiana'] italic font-normal text-[#24231F]">
                                meaningful.
                            </span>
                        </h2>

                        {/* Large Arrow Icon */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#24231F]/30 flex items-center justify-center transition-all duration-500 group-hover:border-[#24231F] group-hover:bg-[#24231F] group-hover:text-[#D7D1C4] text-[#24231F] flex-shrink-0 self-start sm:self-end mb-2">
                            <svg
                                className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                    </Link>
                </div>

                {/* ── Bottom Bar / Footer Metadata Grid ── */}
                <div className="border-t border-[#24231F]/25 pt-10 sm:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start">
                    {/* Brand */}
                    <div className="flex flex-col items-start">
                        <span className="font-['DM_Sans'] font-medium text-[20px] leading-[18px] tracking-[4.4px] text-[#24231F]">
                            DD+
                        </span>
                        <span className="font-['DM_Sans'] font-normal text-[7.5px] leading-[8px] tracking-[2.94px] uppercase mt-1 text-[#24231F]">
                            Architects
                        </span>
                    </div>

                    {/* Locations & Email */}
                    <div className="flex flex-col gap-1 font-['DM_Sans'] text-[11px] leading-[18px] text-[#24231F]">
                        <span className="font-normal">Chennai · Trichy</span>
                        <a
                            href="mailto:md@ddplusarchitects.com"
                            className="hover:underline transition-all text-[#24231F]/90 hover:text-[#24231F]"
                        >
                            md@ddplusarchitects.com
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-6 font-['DM_Sans'] text-[11px] leading-[18px] text-[#24231F]">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:opacity-75 transition-opacity"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:opacity-75 transition-opacity"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="font-['DM_Sans'] text-[11px] leading-[18px] text-[#24231F]/80 lg:text-right">
                        © 2026 DD+ Architects
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
