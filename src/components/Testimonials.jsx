import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonialAvatars = [
    '/images/.webp?v=2',
    '/images/.webp',
    '/images/.webp',
    '/images/.webp',
    '/images/.webp'
];

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Director, Morais Group",
        quote: "They don’t just design buildings—they create experiences. Our business park now feels alive, aligned with our vision."
    },
    {
        name: "Mrs. Aarthi Suresh",
        role: "Villa Owner",
        quote: "They understood our dream home better than we could articulate. Today, our villa is both luxury and comfort—every guest is in awe."
    },
    {
        name: "Dr. R. Meenakshi",
        role: "Campus Administrator",
        quote: "Handling a 200-acre institution is monumental, yet they achieved it with precision, artistry, and foresight."
    },
    {
        name: "Prakash D",
        role: "Founder, Nirvana Wellness Retreat",
        quote: "Our wellness resort is no longer a property—it is an experience. The harmony of design has transformed our brand identity."
    },
    {
        name: "Abdul Rahman",
        role: "Managing Partner, Mangal & Mangal",
        quote: "Their professionalism, creativity, and commitment set a new benchmark in our industry. Our office is now a design reference."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-royal-gold uppercase tracking-widest text-sm">Client Stories</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">What Our Clients Say</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-10 border-t-4 border-royal-gold relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Quote className="text-royal-gold/20 w-16 h-16 absolute top-8 left-8" />
                            <p className="text-gray-500 italic mb-8 relative z-10 leading-relaxed">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                                    <img src={testimonialAvatars[index % testimonialAvatars.length]} alt={item.name} className="w-full h-full object-cover " />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-serif text-lg">{item.name}</h4>
                                    <span className="text-royal-gold text-sm uppercase tracking-widest">{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
