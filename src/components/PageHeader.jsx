import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getRandomImage } from '../utils/images';

const PageHeader = ({ title, breadcrumb, image }) => {
    return (
        <section className="page-header relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image || getRandomImage()}
                    alt={title}
                    className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 pt-20 md:pt-28">
                <motion.h1
                    className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-wider"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                <motion.div
                    className="flex justify-center items-center gap-2 text-gray-300 text-sm uppercase tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Link to="/" className="hover:text-royal-gold transition-colors text-white">Home</Link>
                    <span className="text-white">/</span>
                    <span className="text-royal-gold">{breadcrumb || title}</span>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
