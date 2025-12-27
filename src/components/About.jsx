import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Eye, Target, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../constants/data';
import combinedCircle from '../images/combined_circle.png';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section id="about" className="bg-white overflow-hidden py-24 relative">
            {/* Background Shape */}
            <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 pointer-events-none opacity-40">
                <img src={combinedCircle} alt="Background Shape" className="w-full h-full object-contain" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* ... existing content ... */}

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-orange-500 font-medium"
                    >
                        Driving innovation involved for a better tomorrow.
                    </motion.p>
                </div>

                {/* Vision & Mission Circles - Custom Layout */}
                <div className="relative h-[400px] mb-32 hidden md:block">
                    {/* Background Curve/Path */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <motion.path
                            d="M 200 100 Q 500 200 800 300"
                            stroke="#bae6fd"
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Our Vision */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute left-[15%] top-10 w-64 h-64 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-8 text-center border-4 border-white z-10"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <Eye size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                        <p className="text-sm text-gray-500">To revolutionize document intelligence through autonomous auditing.</p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute right-[15%] bottom-10 w-64 h-64 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-8 text-center border-4 border-white z-10"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                            <Target size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                        <p className="text-sm text-gray-500">Empowering businesses with seamless, accurate, and fast AI solutions.</p>
                    </motion.div>
                </div>

                {/* Animated Team Section */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet our team</h2>
                        <p className="text-[#D96324] text-sm max-w-2xl mx-auto">
                            With years of industry experience, our team is dedicated to redefining the future of automation.
                        </p>
                    </motion.div>

                    {/* Carousel Controls */}
                    <div className="flex items-center gap-4 mb-8">
                        <button onClick={handlePrev} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={handleNext} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Avatars Row */}
                    <div className="flex justify-center items-center gap-4 md:gap-12 mb-12 h-32 relative w-full max-w-3xl">
                        <AnimatePresence mode='popLayout'>
                            {teamMembers.map((member, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <motion.div
                                        key={member.id}
                                        layout
                                        animate={{
                                            scale: isActive ? 1.4 : 0.8,
                                            opacity: isActive ? 1 : 0.5,
                                            filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                                            zIndex: isActive ? 10 : 1
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className={`relative rounded-full overflow-hidden border-2 cursor-pointer transition-colors duration-300 ${isActive ? 'border-orange-500 shadow-2xl skew-y-0' : 'border-gray-200'}`}
                                        style={{ width: '80px', height: '80px', flexShrink: 0 }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        {/* Active Ring Animation */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-ring"
                                                className="absolute inset-0 rounded-full border-2 border-orange-500"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Member Details Card */}
                    <div className="w-full max-w-3xl relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#3B66BC] rounded-xl p-8 md:p-10 text-white shadow-2xl relative text-center mx-4 md:mx-0"
                            >
                                {/* Triangle Pointer */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#3B66BC] rotate-45 transform origin-center"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-2xl font-bold tracking-wider mb-2">{teamMembers[activeIndex].name}</h3>
                                    <p className="text-orange-300 text-sm mb-6 uppercase tracking-widest font-semibold">{teamMembers[activeIndex].role}</p>

                                    <p className="max-w-2xl mx-auto text-blue-50 leading-relaxed mb-8 italic">
                                        "{teamMembers[activeIndex].quote}"
                                    </p>

                                    <div className="flex justify-center gap-6">
                                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default About;
