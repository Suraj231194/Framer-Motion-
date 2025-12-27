import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../constants/data';

import dots2 from '../assets/dots_2.png';
import dots3 from '../assets/dots_3.png';

const Blogs = () => {
    return (
        <Section id="blog" className="bg-white py-24 relative overflow-hidden">
            {/* Background Decorative Dots */}
            <div className="absolute top-10 left-10 z-0 pointer-events-none opacity-40 hidden lg:block">
                <img src={dots2} alt="Dots Pattern" className="w-24 h-auto" />
            </div>
            <div className="absolute bottom-10 right-10 z-0 pointer-events-none opacity-40 hidden lg:block">
                <img src={dots3} alt="Dots Pattern" className="w-24 h-auto" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        Blogs
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-1"
                    >
                        <p className="text-[#D96324] text-lg font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p className="text-slate-600 text-lg">
                            Lorem Ipsum has been the industry's standard.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-transparent to-purple-200 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 translate-y-4"></div>
                            {/* Fixed Bottom Gradient Shadow as seen in image */}
                            <div className="absolute -bottom-6 left-4 right-4 h-12 bg-purple-100 blur-xl rounded-full opacity-70 pointer-events-none"></div>

                            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-blue-500 text-sm font-medium mb-4">
                                        {post.date}
                                    </p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center flex-wrap gap-4">
                    <button className="w-12 h-12 rounded-lg bg-[#537CD3] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="w-12 h-12 rounded-lg bg-[#537CD3] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                        <ArrowRight size={24} />
                    </button>
                </div>

            </div>
        </Section>
    );
};

export default Blogs;
