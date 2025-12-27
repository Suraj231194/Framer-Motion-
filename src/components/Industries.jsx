import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { industriesData } from "../constants/data";

import dotsIndustry1 from "../images/dots_industry_1.png";
import dotsIndustry2 from "../images/dots_industry_2.png";
import blueCircle from "../images/blue_circle.png";

/* ---------------- CHIP ICON ---------------- */
const ChipIcon = ({ Icon }) => (
    <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        {/* Background */}
        <div className="absolute inset-0 rounded-xl border-2 border-orange-200 bg-orange-50/50 backdrop-blur-sm" />

        {/* Decorative Dots */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full" />

        {/* Icon */}
        <div className="relative z-10 text-blue-600">
            <Icon size={32} strokeWidth={1.5} />
        </div>
    </div>
);

/* ---------------- MAIN SECTION ---------------- */
const Industries = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section
            ref={sectionRef}
            id="industries"
            className="relative overflow-hidden bg-white py-20 lg:py-32"
        >
            {/* ================= BACKGROUND ELEMENTS ================= */}

            {/* Blue Gradient Ring (Figma matched) */}
            <motion.div
                style={{ y: yBg }}
                className="absolute -left-[22%] top-1/2 -translate-y-1/2 
                   w-[850px] h-[850px] 
                   -z-10 pointer-events-none opacity-80"
            >
                <img
                    src={blueCircle}
                    alt="Background Ring"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Top Right Dots */}
            <div className="absolute right-10 top-24 hidden lg:block opacity-40 pointer-events-none">
                <img src={dotsIndustry1} alt="Dots" className="w-32" />
            </div>

            {/* Bottom Right Dots */}
            <div className="absolute right-20 bottom-24 hidden lg:block opacity-40 pointer-events-none">
                <img src={dotsIndustry2} alt="Dots" className="w-48" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-14 max-w-xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-[#D96324] font-semibold mb-3 block tracking-wide text-lg"
                    >
                        AI-driven innovation for growth.
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                    >
                        Industries We Empower
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {industriesData.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.15 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            }}
                            className={`bg-white rounded-[2rem] p-8 text-center
                          border border-gray-100
                          shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                          transition-all ${item.offset}`}
                        >
                            <ChipIcon Icon={item.icon} />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
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
