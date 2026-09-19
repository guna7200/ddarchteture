import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white relative">
            {/* Background Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-50"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-royal-gold uppercase tracking-widest text-sm mb-4">Get in Touch</h3>
                        <h2 className="text-4xl font-serif text-gray-900 mb-8">Let's Build Your Vision</h2>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            Ready to start your next masterpiece? Contact us for a consultation. We accept a limited number of commissions each year to ensure the highest quality of service.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 border border-royal-gold/30 rounded-full text-royal-gold">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-serif text-lg">Headquarters</h4>
                                    <p className="text-gray-500">504 White St. Dawsonville, GA 30534, New York</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 border border-royal-gold/30 rounded-full text-royal-gold">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-serif text-lg">Phone</h4>
                                    <p className="text-gray-500">+879 864 51 666</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 border border-royal-gold/30 rounded-full text-royal-gold">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-serif text-lg">Email</h4>
                                    <p className="text-gray-500">support@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-royal-gold text-gray-500 hover:text-royal-gold transition-all duration-300 rounded-full">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form className="bg-rich-charcoal p-8 md:p-12 border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block text-gray-500 text-sm uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-800 focus:border-royal-gold text-gray-900 px-4 py-3 outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-sm uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" className="w-full bg-white border border-gray-800 focus:border-royal-gold text-gray-900 px-4 py-3 outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-gray-500 text-sm uppercase tracking-wider mb-2">Project Type</label>
                                <select className="w-full bg-white border border-gray-800 focus:border-royal-gold text-gray-900 px-4 py-3 outline-none transition-colors">
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Interior Design</option>
                                    <option>Landscape</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label className="block text-gray-500 text-sm uppercase tracking-wider mb-2">Message</label>
                                <textarea className="w-full bg-white border border-gray-800 focus:border-royal-gold text-gray-900 px-4 py-3 outline-none transition-colors h-32" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button className="w-full bg-royal-gold text-deep-black font-bold uppercase tracking-widest py-4 hover:bg-[#b8860b] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
