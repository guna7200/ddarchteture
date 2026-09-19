import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
    { number: '352', label: 'Projects Completed' },
    { number: '567', label: 'Satisfied Clients' },
    { number: '656', suffix: 'M', label: 'Monthly Revenue' },
    { number: '17', label: 'Awards Won' },
];

const Stats = () => {
    return (
        <section className="py-20 bg-royal-gold text-deep-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-5xl md:text-6xl font-serif font-bold mb-2">
                                {stat.number}<span className="text-4xl">{stat.suffix}</span>
                            </h3>
                            <p className="uppercase tracking-widest font-semibold text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
