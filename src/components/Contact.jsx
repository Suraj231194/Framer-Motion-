import React from 'react';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-[#D96324] font-medium mb-6">Let's build the future of document processing together.</p>
                            <p className="text-gray-600 leading-relaxed max-w-md">
                                Have questions about our AI solutions? Our team is ready to help you optimize your workflows and ensure security.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email Us</div>
                                    <div className="font-semibold text-gray-900">contact@aadrila.ai</div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Call Us</div>
                                    <div className="font-semibold text-gray-900">+1 (555) 000-0000</div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Visit Us</div>
                                    <div className="font-semibold text-gray-900">123 AI Plaza, Tech City, CA</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form Card */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-gray-50"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-gray-50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-gray-50"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none bg-gray-50"
                                    placeholder="Tell us about your needs..."
                                ></motion.textarea>
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button className="w-full py-4 text-lg rounded-xl shadow-lg shadow-blue-500/30">Send Message</Button>
                            </motion.div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
