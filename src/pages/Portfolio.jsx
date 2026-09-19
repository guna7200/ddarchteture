import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import { portfolioItems } from '../data/portfolioData';

const categories = ['All', 'Architecture', 'Interior Design', '3D Modeling'];

const bannerImg = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1920';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Dynamically get unique categories from portfolioItems
    const dynamicCategories = ['All', ...new Set(portfolioItems.map(item => item.category))];

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <PageTransition>
            <PageHeader title="Portfolio" image={bannerImg} />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    {/* Header & Filters Layout */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3"
                        >
                            <span className="text-royal-gold uppercase tracking-widest text-sm font-semibold mb-2 block">Our Works</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                                We are competitive in <br /> architecture solutions
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-2/3 flex flex-wrap gap-x-8 gap-y-4 justify-end items-end h-full mt-auto"
                        >
                            {dynamicCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-sm uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 ${activeCategory === category
                                        ? 'text-royal-gold border-royal-gold'
                                        : 'text-gray-500 border-transparent hover:text-[#C8A97E]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Portfolio Grid - 2 Columns */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={item.id}
                                    className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                                >
                                    <Link to={`/portfolio/${item.slug}`} className="block w-full h-full">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-10">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-royal-gold text-sm uppercase tracking-widest mb-2 block">{item.category}</span>
                                                <h3 className="text-2xl font-serif text-gray-900">{item.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>



                </div>
            </section>
        </PageTransition>
    );
};

export default Portfolio;
