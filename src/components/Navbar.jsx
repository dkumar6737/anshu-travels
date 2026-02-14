import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="p-2 bg-accent rounded-lg group-hover:rotate-12 transition-transform">
                        <Car className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-outfit tracking-tight">
                        Anshu<span className="text-accent">Travels</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link font-medium">
                            {link.name}
                        </a>
                    ))}
                    <button className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all">
                        <Phone size={18} className="text-accent" />
                        <span className="font-semibold">+91 98811 00000</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <button className="w-full flex justify-center items-center gap-2 py-3 bg-accent text-primary font-bold rounded-xl">
                                    <Phone size={20} />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
