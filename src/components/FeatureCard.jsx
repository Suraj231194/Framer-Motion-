import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

const icons = {
    Activity,
    ShieldCheck,
    Zap
};

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
    const Icon = icons[icon] || Activity;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 ease-out z-0"></div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                    <Icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
