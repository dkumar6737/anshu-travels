import React, { useState } from 'react';
import { Phone, Instagram, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "+917061513811";
    const whatsappNumber = "917061513811";
    const instagramUsername = "anshutravels";

    const actions = [
        {
            icon: <Phone size={24} />,
            label: 'Call Now',
            href: `tel:${phoneNumber}`,
            color: 'bg-blue-600',
            shadow: 'shadow-blue-500/40'
        },
        {
            icon: <MessageCircle size={24} />,
            label: 'WhatsApp',
            href: `https://wa.me/${whatsappNumber}`,
            color: 'bg-green-500',
            shadow: 'shadow-green-500/40'
        },
        {
            icon: <Instagram size={24} />,
            label: 'Instagram',
            href: `https://instagram.com/${instagramUsername}`,
            color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
            shadow: 'shadow-purple-500/40'
        }
    ];

    return (
        <div className="fixed bottom-8 right-6 z-[999] flex flex-col items-end gap-4">
            {/* Sub Buttons */}
            <AnimatePresence>
                {isOpen && actions.map((action, index) => (
                    <motion.a
                        key={index}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        transition={{ duration: 0.2, delay: (actions.length - index) * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-end group"
                    >
                        <span className="mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl border border-slate-100 hidden md:block">
                            {action.label}
                        </span>
                        <div className={`w-14 h-14 ${action.color} text-white rounded-full flex items-center justify-center shadow-2xl ${action.shadow}`}>
                            {action.icon}
                        </div>
                    </motion.a>
                ))}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 ${isOpen ? 'bg-slate-900 shadow-slate-900/40' : 'bg-accent shadow-accent/40'} text-white rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 relative group`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="flex items-center justify-center"
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Label for Closed State */}
                {!isOpen && (
                    <span className="absolute right-18 bg-accent text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap hidden md:block animate-bounce">
                        Contact Us
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingActions;
