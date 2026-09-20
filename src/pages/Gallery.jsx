import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// All images converted to WebP format (<200KB)
const galleryImages = Array.from({ length: 36 }, (_, i) => {
    const num = i + 40; // Only numbers between 40 and 75
    const ext = [12,13,14,18,20,24,25,29,30,38,39,41,42,43,45,46,49,50,52,53,55,57,60,64,69,70].includes(num) ? "jpeg" : "png"; return `/images/image${num}.${ext}`;
});

const Gallery = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <PageTransition>
            <PageHeader title="Gallery" image="/images/image1.png" />
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#C8A97E] uppercase tracking-[0.4em] text-sm font-medium block mb-4">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Project <span className="text-[#C8A97E]">Gallery</span></h2>
                    </motion.div>

                    <motion.div
                        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.04 } }
                        }}
                    >
                        {galleryImages.map((imgSrc, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                className="break-inside-avoid overflow-hidden bg-white border border-gray-200 group rounded-lg cursor-pointer mb-4"
                                onClick={() => setLightbox(imgSrc)}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Archi Dee Signs Project ${index + 1}`}
                                    className="w-full object-cover hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal Lightbox Effect rendered at root document body via portal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {lightbox && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                            onClick={() => setLightbox(null)}
                        >
                            <button 
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-[100000]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightbox(null);
                                }}
                            >
                                <X size={36} />
                            </button>
                            <motion.img
                                src={lightbox}
                                alt="Project"
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
        </PageTransition>
    );
};

export default Gallery;
