import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-6"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6">AADRILA TECHNOLOGIES</h3>
                        <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                            Pioneering AI solutions for document security and automation. We help businesses trust their data and accelerate their growth.
                        </p>
                    </div>

                    {/* Contact 1 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <MapPin size={18} className="text-orange-500" /> USA Office
                        </h4>
                        <div className="text-gray-400 space-y-2 text-sm">
                            <p>123 Innovation Dr,</p>
                            <p>Tech Valley, CA 94043</p>
                        </div>
                    </div>

                    {/* Contact 2 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <MapPin size={18} className="text-blue-500" /> India Office
                        </h4>
                        <div className="text-gray-400 space-y-2 text-sm">
                            <p>456 Tech Park, Sector 5,</p>
                            <p>Bangalore, KA 560103</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Aadrila Technologies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
