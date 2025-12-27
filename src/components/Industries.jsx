import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { industriesData } from '../constants/data';

import dots1 from '../assets/dots_1.png';
import blueCircle from '../assets/blue_circle.png';

const ChipIcon = ({ Icon }) => (
    <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        {/* Circuit/Chip Background Effect */}
        <div className="absolute inset-0 border-2 border-orange-200 rounded-xl bg-orange-50/50 backdrop-blur-sm"></div>

        {/* Nodes/Dots on the border - Decorative */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full box-shadow-glow"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full box-shadow-glow"></div>
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full box-shadow-glow"></div>
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full box-shadow-glow"></div>

        <div className="absolute -top-1 left-1/3 w-1 h-3 bg-white"></div>
        <div className="absolute -top-1 right-1/3 w-1 h-3 bg-white"></div>

        {/* Inner Icon */}
        <div className="relative text-blue-600 z-10">
            <Icon size={32} strokeWidth={1.5} />
        </div>
    </div>
);

const Industries = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden bg-white" id="industries">
            {/* Background Blue Circle */}
            <motion.div
                style={{ y: yBg }}
                className="absolute left-[-15%] top-0 w-[900px] h-[900px] -z-10 pointer-events-none opacity-60"
            >
                <img src={blueCircle} alt="Background Effect" className="w-full h-full object-contain" />
            </motion.div>

            {/* Dot Pattern (Right) */}
            <div className="absolute right-0 top-1/4 z-0 pointer-events-none opacity-40 hidden lg:block">
                <img src={dots1} alt="Dots Pattern" className="w-48 h-auto" />
            </div>

            <div className="container mx-auto px-6">
                <div className="mb-12 max-w-xl relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#D96324] font-semibold mb-3 block tracking-wide text-lg">
                            AI-driven innovation for growth.
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Industries We Empower
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start relative min-h-[400px]">
                    {industriesData.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.4, delay: idx * 0.15 }}
                            className={`bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center transition-all ${item.offset}`}
                        >
                            <ChipIcon Icon={item.icon} />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
