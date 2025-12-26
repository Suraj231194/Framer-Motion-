import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import Button from './Button';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../constants/data';

const Blogs = () => {
    return (
        <Section id="blog" className="bg-white py-24">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#D96324] font-semibold mb-2 block tracking-wide uppercase text-sm"
                    >
                        Success Stories & Insights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-gray-900 mb-6"
                    >
                        Blogs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        Stay up to date with the latest trends and breakthroughs in the world of AI verification.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-[#D96324] font-medium text-sm group-hover:gap-2 transition-all">
                                    Read More <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <Button variant="outline" className="rounded-full px-8 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600">
                        View All Articles
                    </Button>
                </div>

            </div>
        </Section>
    );
};

export default Blogs;
