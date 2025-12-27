import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Button from './Button';

import { productsData } from '../constants/data';
import gradientCircle from '../images/gradient_circle.png';

const ProductCard = ({ product }) => {
    // ... logic remains same ...
    const isTextLeft = product.layout === 'left';
    // ... 3D Tilt Logic ...
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={`flex flex-col ${isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 mb-32 last:mb-0`}>
            {/* Text Content */}
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: isTextLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="mb-6">
                    <img src={product.brandLogo} alt={product.badge} className="h-12 w-auto object-contain" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {product.title}
                </h3>

                <div className="space-y-6 mb-8 text-left">
                    {/* Features */}
                    {product.features && (
                        <div>
                            <h4 className="text-gray-900 font-bold mb-3">Features:</h4>
                            <div className="space-y-2">
                                {product.features.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <p className="text-gray-600 leading-relaxed text-[15px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Benefits */}
                    {product.benefits && (
                        <div>
                            <h4 className="text-gray-900 font-bold mb-3">Benefits:</h4>
                            <div className="space-y-2">
                                {product.benefits.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <p className="text-gray-600 leading-relaxed text-[15px]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-4">
                    <Button className="rounded-full px-8">Get Started</Button>
                    <Button variant="outline" className="rounded-full px-8">Learn More</Button>
                </div>
            </motion.div>

            {/* Visual Content - 3D Card Style */}
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: isTextLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative rounded-[2rem] overflow-hidden bg-[#0B1120] border border-gray-800 shadow-2xl aspect-[4/3] group perspective-1000"
                >
                    {/* Background Gradients */}
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${product.visualColor} opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/30 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                    {/* Product Image */}
                    <div className="absolute inset-0" style={{ transform: "translateZ(50px)" }}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};



const Products = () => {
    return (
        <section id="products" className="py-24 bg-gray-50/50 relative overflow-hidden">
            {/* Background Gradient Circles */}
            {/* Top Right - Behind DocSim */}
            <div className="absolute -right-[20%] top-[5%] w-[800px] h-[800px] z-0 pointer-events-none opacity-40">
                <img src={gradientCircle} alt="Background Gradient" className="w-full h-full object-contain" />
            </div>

            {/* Middle Left - Behind DocPilot */}
            <div className="absolute -left-[20%] top-[35%] w-[800px] h-[800px] z-0 pointer-events-none opacity-40">
                <img src={gradientCircle} alt="Background Gradient" className="w-full h-full object-contain" />
            </div>

            {/* Bottom Right - Behind Doxtract */}
            <div className="absolute -right-[20%] bottom-[-10%] w-[800px] h-[800px] z-0 pointer-events-none opacity-40">
                <img src={gradientCircle} alt="Background Gradient" className="w-full h-full object-contain" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-[#D96324] font-semibold mb-2 block tracking-wide uppercase text-sm">
                        features and benefits.
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Products
                    </h3>
                </div>

                {/* Products Grid */}
                <div>
                    {productsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;
