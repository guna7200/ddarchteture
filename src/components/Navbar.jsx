import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const siteLogo = '/images/site_logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;
    const isHome = location.pathname === '/';

    const isTransparent = isHome && !isScrolled;

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || !isHome
                    ? 'py-2.5 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
                    : 'py-3.5 bg-transparent'
                    }`}
            >
                <div className="mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center z-10">
                        <div className="bg-white p-1.5 px-3 rounded-xl shadow-md border border-gray-100/70 flex items-center justify-center transition-transform hover:scale-105">
                            <img src={siteLogo} alt="DD+ Architects Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex gap-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-sm uppercase tracking-[0.3em] font-medium transition-colors duration-300 py-1 group ${
                                    isActive(link.path)
                                        ? 'text-[#C8A97E]'
                                        : isTransparent
                                            ? 'text-white hover:text-[#C8A97E]'
                                            : 'text-gray-700 hover:text-[#C8A97E]'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-px bg-[#C8A97E] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`ml-4 px-5 py-2.5 border text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                                isTransparent
                                    ? 'border-white text-white hover:bg-white hover:text-gray-900'
                                    : 'border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white'
                            }`}
                        >
                            Hire Us
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden z-[60] w-10 h-10 flex flex-col justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <span className={`h-px transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-gray-800'} ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'}`} />
                        <span className={`h-px transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-gray-800'} ${isMobileMenuOpen ? 'opacity-0 w-4' : 'w-4'}`} />
                        <span className={`h-px transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-gray-800'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-5'}`} />
                    </button>
                </div>
            </nav>

            {/* ── Full-screen mobile menu overlay ── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 48px) 48px)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col gap-2 items-center w-full px-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                                    className="w-full max-w-sm"
                                >
                                    <Link
                                        to={link.path}
                                        className="group flex items-center justify-between w-full border-b border-gray-200 py-6 text-3xl font-serif font-bold text-gray-900 hover:text-[#C8A97E] transition-colors duration-300"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 text-gray-600 text-sm uppercase tracking-[0.4em]"
                        >
                            Archi Dee Signs
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
