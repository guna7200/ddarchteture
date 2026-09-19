import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

const previewImages = [
    { src: '/images/.webp', heightClass: 'h-80 md:h-[400px]' },
    { src: '/images/.webp', heightClass: 'h-64 md:h-[300px]' },
    { src: '/images/.webp', heightClass: 'h-96 md:h-[450px]' },
    { src: '/images/.webp', heightClass: 'h-64 md:h-[320px]' },
    { src: '/images/.webp', heightClass: 'h-80 md:h-[380px]' },
    { src: '/images/.webp', heightClass: 'h-72 md:h-[340px]' }
];

const GallerySection = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-xs font-semibold block mb-2 font-sans">
                            Our Portfolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                            Signature Masterpieces
                        </h2>
                    </div>
                    <Link
                        to="/gallery"
                        className="group flex items-center gap-2 px-6 py-3 border border-[#C8A97E] text-[#C8A97E] font-semibold uppercase tracking-wider text-xs hover:bg-[#C8A97E] hover:text-white transition-all duration-300 rounded"
                    >
                        <span>View Full Gallery</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Asymmetric Collage Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {previewImages.map((img, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedImg(img.src)}
                            className="break-inside-avoid relative rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100 cursor-pointer group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                        >
                            <img
                                src={img.src}
                                alt="Signature Masterpiece Layout Preview"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Visual Highlight Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                                    <Maximize2 size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Read More CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-[#C8A97E] text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all duration-300 rounded"
                    >
                        <span>Read More Projects</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

            </div>

            {/* Modal Lightbox Effect rendered at root document body via portal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                            onClick={() => setSelectedImg(null)}
                        >
                            <button 
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-[100000]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImg(null);
                                }}
                            >
                                <X size={36} />
                            </button>
                            <motion.img
                                src={selectedImg}
                                alt="Full-Screen Masterpiece View"
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default GallerySection;