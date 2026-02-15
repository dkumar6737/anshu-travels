import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 5);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', isHash: true, target: 'hero' },
        { name: 'Services', href: '/', isHash: true, target: 'services' },
        { name: 'About', href: '/', isHash: true, target: 'about' },
        { name: 'Pricing', href: '/pricing', isHash: false },
        { name: 'Contact', href: '/', isHash: true, target: 'contact' },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (link.isHash) {
            if (location.pathname !== '/') {
                navigate('/');
                // Small delay to allow home page to mount
                setTimeout(() => {
                    scrollToElement(link.target);
                }, 100);
            } else {
                scrollToElement(link.target);
            }
        } else {
            navigate(link.href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-[background-color,border-color,box-shadow] duration-200 ease-out ${isScrolled || location.pathname !== '/' ? 'bg-white border-b border-slate-200/60 shadow-sm' : 'bg-transparent'} py-3`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link
                    to="/"
                    onClick={(e) => handleNavClick(e, { isHash: true, target: 'hero' })}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-2 bg-accent rounded-lg group-hover:rotate-12 transition-transform shadow-md shadow-accent/20">
                        <Car className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-outfit tracking-tight text-slate-900">
                        Anshu<span className="text-accent">Travels</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`nav-link ${location.pathname === link.href && !link.isHash ? 'text-accent' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={(e) => handleNavClick(e, { isHash: true, target: 'hero' })}
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
                                    className={`text-lg font-bold ${location.pathname === link.href && !link.isHash ? 'text-accent' : 'text-slate-700'} hover:text-accent transition-colors`}
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-slate-100">
                                <button
                                    onClick={(e) => handleNavClick(e, { isHash: true, target: 'hero' })}
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
