import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Youtube, ArrowUpRight, ChevronUp } from 'lucide-react';
import Marquee from './Marquee';

const siteLogo = '/images/DD_Logo.png';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const socials = [
        { Icon: Instagram, label: 'Instagram', href: '#' },
        { Icon: Facebook, label: 'Facebook', href: '#' },
        { Icon: Twitter, label: 'Twitter / X', href: '#' },
        { Icon: Youtube, label: 'YouTube', href: '#' },
    ];

    return (
        <footer className="relative bg-[#060606] text-white overflow-hidden">

            {/* ── Big CTA section ── */}
            <div className="border-b border-gray-200 py-16 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 relative">
                {/* Gold glow orb */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-royal-gold/6 blur-3xl pointer-events-none rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto flex flex-col items-center text-center"
                >
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <span className="section-line" />
                        <span className="text-royal-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm font-medium">Start a Project</span>
                        <span className="section-line" />
                    </div>

                    <h2 className="text-4xl sm:text-7xl md:text-8xl font-serif font-bold text-white leading-none mb-8 sm:mb-12 tracking-tight">
                        Let's<br />
                        <span className="text-gradient-gold">Talk.</span>
                    </h2>

                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 border border-gray-300 text-white uppercase tracking-widest text-xs sm:text-sm font-medium hover:border-royal-gold hover:text-royal-gold transition-all duration-500 rounded sm:rounded-none"
                    >
                        Get in Touch
                        <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                    </Link>
                </motion.div>
            </div>

            {/* ── Footer links grid ── */}
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-b border-gray-200">
                {/* Brand */}
                <div>
                    <div className="bg-white p-2.5 rounded-xl shadow-md inline-block mb-4 sm:mb-6 border border-gray-100">
                        <img src={siteLogo} alt="DD+ Architects Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-light max-w-xs">
                        Born from Vision. Built with Passion. Designed for Legacy.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-white uppercase tracking-[0.3em] text-sm mb-6 font-medium">Navigation</h4>
                    <ul className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="text-white/90 hover:text-royal-gold transition-colors duration-300 text-sm font-light"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white uppercase tracking-[0.3em] text-sm mb-6 font-medium">Contact</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={14} className="text-royal-gold mt-0.5 shrink-0" />
                            <span className="text-white text-sm font-light leading-snug">Chennai / Trichy</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={14} className="text-royal-gold shrink-0" />
                            <span className="text-white text-sm font-light">archideesigns@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={14} className="text-royal-gold shrink-0" />
                            <span className="text-white text-sm font-light">+91 99426 85322</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="text-white uppercase tracking-[0.3em] text-sm mb-6 font-medium">Follow Us</h4>
                    <div className="flex flex-col gap-3">
                        {socials.map(({ Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="group flex items-center gap-3 text-white/90 hover:text-royal-gold transition-colors duration-300 text-sm font-light"
                            >
                                <Icon size={14} className="shrink-0" />
                                <span>{label}</span>
                                <ArrowUpRight
                                    size={12}
                                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom marquee ── */}
            <div className="py-4 border-b border-gray-200">
                <Marquee
                    text="ARCHI DEE SIGNS — ARCHITECTURE — INTERIOR DESIGN — LANDSCAPE — PROJECT MANAGEMENT — "
                    speed="normal"
                    color="rgba(255,255,255,1)"
                />
            </div>

            {/* ── Copyright bar ── */}
            <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
                <p className="text-white text-sm tracking-widest uppercase">
                    © Archi Dee Designs 2026. All Rights Reserved.
                </p>
                <button
                    onClick={scrollToTop}
                    className="p-2.5 border border-gray-200 text-white hover:border-royal-gold hover:text-royal-gold transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={16} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
