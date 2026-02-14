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
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Pricing', href: '#stats' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Give the mobile menu a tiny moment to start closing
        setTimeout(() => {
            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 150); // Sufficient delay for UI to stabilize
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <div
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-2 bg-accent rounded-lg group-hover:rotate-12 transition-transform shadow-md shadow-accent/20">
                        <Car className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-outfit tracking-tight text-slate-900">
                        Anshu<span className="text-accent">Travels</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="flex items-center gap-2 px-5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-all text-slate-900"
                    >
                        <Phone size={18} className="text-accent" />
                        <span className="font-semibold">+91 70615 13811</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900"
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
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-slate-700 hover:text-accent transition-colors"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-slate-100">
                                <button
                                    onClick={(e) => handleNavClick(e, '#hero')}
                                    className="w-full flex justify-center items-center gap-2 py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/20"
                                >
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
