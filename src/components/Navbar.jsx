import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const heroEl = document.getElementById('home');
            const heroHeight = heroEl ? heroEl.offsetHeight - 120 : window.innerHeight * 3;
            setIsScrolled(window.scrollY > heroHeight);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isTransparent
                    ? 'py-6 bg-transparent border-b border-white/10'
                    : 'py-4 bg-[#F0EEE8]/95 backdrop-blur-md border-b border-[#24231F]/10 shadow-sm'
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
                {/* Brand Logo matching Figma: DD+ ARCHITECTS */}
                <Link to="/" className="flex flex-col items-start group select-none">
                    <span
                        className={`font-['DM_Sans'] font-medium text-[20px] leading-[18px] tracking-[4.4px] transition-colors duration-300 ${
                            isTransparent ? 'text-white' : 'text-[#24231F]'
                        }`}
                    >
                        DD+
                    </span>
                    <span
                        className={`font-['DM_Sans'] font-normal text-[7.5px] leading-[8px] tracking-[2.94px] uppercase mt-1 transition-colors duration-300 ${
                            isTransparent ? 'text-white/80' : 'text-[#24231F]/80'
                        }`}
                    >
                        Architects
                    </span>
                </Link>

                {/* Desktop Nav Links matching Figma */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative py-1 font-['DM_Sans'] font-normal text-[12px] tracking-[0.96px] transition-colors duration-300 ${
                                    isActive
                                        ? isTransparent ? 'text-white' : 'text-[#24231F] font-medium'
                                        : isTransparent ? 'text-white/70 hover:text-white' : 'text-[#68645B] hover:text-[#24231F]'
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className={`absolute bottom-0 left-0 right-0 h-[1px] ${
                                            isTransparent ? 'bg-white' : 'bg-[#24231F]'
                                        }`}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <span
                        className={`block h-[1px] w-6 transition-all duration-300 ${
                            isTransparent ? 'bg-white' : 'bg-[#24231F]'
                        } ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                    />
                    <span
                        className={`block h-[1px] w-4 transition-all duration-300 ${
                            isTransparent ? 'bg-white' : 'bg-[#24231F]'
                        } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`block h-[1px] w-6 transition-all duration-300 ${
                            isTransparent ? 'bg-white' : 'bg-[#24231F]'
                        } ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                    />
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#F0EEE8] border-b border-[#24231F]/15 px-6 py-6 shadow-xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="font-['DM_Sans'] text-sm tracking-widest uppercase text-[#24231F] py-2 border-b border-[#24231F]/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
