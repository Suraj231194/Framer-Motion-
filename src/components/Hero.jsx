import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { heroDocuments } from '../constants/data';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroDocuments.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getPosition = (index) => {
        const diff = (index - activeIndex + 3) % heroDocuments.length;
        if (diff === 0) return 'center';
        if (diff === 1) return 'right';
        return 'left';
    };

    const variants = {
        center: {
            x: 0,
            scale: 1,
            zIndex: 30,
            opacity: 1,
            filter: 'blur(0px)',
            rotateY: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        left: {
            x: -260,
            scale: 0.75,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(2px)',
            rotateY: 15,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        right: {
            x: 260,
            scale: 0.75,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(2px)',
            rotateY: -15,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.svg
                    className="absolute w-full h-full opacity-30 text-blue-100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="currentColor" />
                    <path d="M0 30 Q 25 10 50 30 T 100 30 V 100 H 0 Z" fill="transparent" stroke="currentColor" strokeWidth="0.5" />
                </motion.svg>

                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 mix-blend-multiply"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/30 rounded-full blur-3xl -z-10 mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    className="flex-1 max-w-2xl text-center lg:text-left z-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                        <span className="text-[#B45309]">AI-Powered</span> <br />
                        <span className="text-gray-900">Document Automation</span> <br />
                        <span className="text-gray-900">& Fraud Detection</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Button className="px-8 py-3.5 text-base rounded-full bg-[#3B82F6] hover:bg-blue-700 w-full sm:w-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">
                            Get a Demo
                        </Button>
                        <Button variant="outline" className="px-8 py-3.5 text-base rounded-full border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50 w-full sm:w-auto">
                            Explore Solutions
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Animated Carousel */}
                <div className="flex-1 w-full h-[500px] lg:h-[600px] relative flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
                    <AnimatePresence>
                        {heroDocuments.map((doc, index) => {
                            const position = getPosition(index);
                            return (
                                <motion.div
                                    key={doc.id}
                                    className="absolute w-[300px] md:w-[380px] h-[450px] md:h-[550px] rounded-xl shadow-2xl bg-white overflow-hidden border border-gray-100 origin-bottom"
                                    initial={false}
                                    animate={position}
                                    variants={variants}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={doc.src}
                                        alt={doc.alt}
                                        className={`w-full h-full object-cover transition-all duration-500 ${doc.id === 3 ? 'hue-rotate-180' : ''}`}
                                    />
                                    {/* Overlay gradient for depth */}
                                    <motion.div
                                        className="absolute inset-0 bg-white"
                                        animate={{ opacity: position === 'center' ? 0 : 0.4 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Hero;
