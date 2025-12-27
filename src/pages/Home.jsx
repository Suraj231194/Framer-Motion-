import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/brand_logo.png';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Products from '../components/Products';
import Blogs from '../components/Blogs';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 relative">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.img
                            src={logo}
                            alt="Aadrila Logo"
                            layoutId="brand-logo"
                            className="w-64 h-auto object-contain"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar showLogo={!isLoading} />
            <main>
                <Hero />
                <Industries />
                <Products />
                <Blogs />
                <About />
                <Contact />
            </main>

        </div>
    );
};

export default Home;
