import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Button from './Button';
import { Check } from 'lucide-react';
import { productsData } from '../constants/data';

const ProductCard = ({ product }) => {
    const isTextLeft = product.layout === 'left';

    // 3D Tilt Logic
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
                <span className="inline-block py-1 px-4 rounded-full bg-[#D96324] text-white text-xs font-bold mb-6 shadow-lg shadow-orange-500/20 uppercase tracking-wider">
                    {product.badge}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {product.title}
                </h3>

                <div className="space-y-4 mb-8">
                    {product.description.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <p className="text-gray-600 leading-relaxed">{item}</p>
                        </div>
                    ))}
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

                    {/* Abstract Content Representation */}
                    <div className="absolute inset-0 flex items-center justify-center p-12" style={{ transform: "translateZ(50px)" }}>
                        {/* Glassmorphism Card */}
                        <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center transition-transform duration-500 shadow-xl">
                            <product.icon size={80} className="text-white/80 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                            {/* Fake UI Lines */}
                            <div className="w-24 h-1 bg-white/20 rounded-full mb-3"></div>
                            <div className="w-16 h-1 bg-white/10 rounded-full mb-8"></div>

                            {/* Glowing Orb/Accent */}
                            <div className={`absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br ${product.visualColor} blur-md opacity-60 animate-pulse`}></div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Products = () => {
    return (
        <section id="products" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-[#D96324] font-semibold mb-2 block tracking-wide uppercase text-sm">
                        features and benefits.
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Products
                    </h2>
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
