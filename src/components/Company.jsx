import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
const companyImg = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920';

const Company = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-royal-gold uppercase tracking-widest text-sm font-semibold">Our Company</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Creator of Quality Designs</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A3D Modeling is a process of developing practical and pleasing outdoor living space. there are six principles of design that have been used by artists for centuries throughout all art forms, painting and floral design.
                        </p>
                        <div className="flex gap-8 mt-12">
                            <div>
                                <h4 className="text-4xl font-serif text-royal-gold mb-2">3K+</h4>
                                <p className="text-gray-500 uppercase tracking-wider text-sm">Happy Clients</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif text-royal-gold mb-2">14K+</h4>
                                <p className="text-gray-500 uppercase tracking-wider text-sm">Success Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video/Image Content */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer">
                            <img
                                src={companyImg}
                                alt="Company Video"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-royal-gold rounded-full flex items-center justify-center text-gray-900 pl-1 shadow-lg shadow-royal-gold/20 group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Company;
