import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users, ChevronRight, Search } from 'lucide-react';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('airport');

    const tabs = [
        { id: 'airport', label: 'Airport Transfer' },
        { id: 'outstation', label: 'Outstation' },
        { id: 'local', label: 'Local City' },
        { id: 'rental', label: 'Rental Car' },
    ];

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const headerOffset = 80;
            const elementPosition = servicesSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="relative flex flex-col pt-32 pb-20 bg-white">
            {/* Background with subtle accents - handles its own overflow */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:pt-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available Across Mumbai, Pune & Nashik
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
                        Your Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 font-outfit">Travel Partner.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Experience the comfort of "Miles of Smiles" with our premium fleet. Reliable, safe, and punctual cab services for all your needs.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => scrollToServices()}
                            className="btn-primary flex items-center gap-2 group">
                            Explore Services
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-6 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all text-slate-600 font-medium">
                            Watch Video
                        </button>
                    </div>
                </motion.div>

                {/* Right Booking Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card p-6 md:p-10 relative shadow-2xl shadow-slate-200/50 bg-white/70 backdrop-blur-xl border border-white"
                >
                    {/* Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-100/50 rounded-2xl mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === tab.id ? 'bg-white text-accent shadow-md shadow-slate-200' : 'text-slate-400 hover:text-slate-900 hover:bg-white/50'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'rental' ? (
                            <motion.div
                                key="rental-form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                                        <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-sm font-semibold text-slate-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact No.</label>
                                        <input type="tel" placeholder="+91 0000 0000" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-sm font-semibold text-slate-900" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Requirement Message</label>
                                    <textarea rows="2" placeholder="Tell us about your trip..." className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-sm font-semibold text-slate-900 resize-none"></textarea>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Start Date</label>
                                        <input type="date" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent outline-none transition-all text-sm font-semibold text-slate-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">End Date</label>
                                        <input type="date" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent outline-none transition-all text-sm font-semibold text-slate-600" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Start Time</label>
                                        <input type="time" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent outline-none transition-all text-sm font-semibold text-slate-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">End Time</label>
                                        <input type="time" className="w-full bg-white border border-slate-100 rounded-xl py-4 px-5 focus:border-accent outline-none transition-all text-sm font-semibold text-slate-600" />
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-accent text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
                                    <Search size={22} />
                                    Submit Enquiry
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="standard-form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Pickup Location</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Enter City or Area"
                                                className="w-full bg-white border border-slate-100 rounded-xl py-5 pl-12 pr-4 focus:border-accent/40 focus:ring-4 focus:ring-accent/5 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Drop Location</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-success group-focus-within:scale-110 transition-transform" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Destination"
                                                className="w-full bg-white border border-slate-100 rounded-xl py-5 pl-12 pr-4 focus:border-accent/40 focus:ring-4 focus:ring-accent/5 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Date & Time</label>
                                        <div className="relative group">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input
                                                type="datetime-local"
                                                className="w-full bg-white border border-slate-100 rounded-xl py-5 pl-12 pr-4 focus:border-accent/40 outline-none transition-all text-slate-600 font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Passengers</label>
                                        <div className="relative group">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input
                                                type="text"
                                                placeholder="e.g. 4 Persons"
                                                className="w-full bg-white border border-slate-100 rounded-xl py-5 pl-12 pr-4 focus:border-accent/40 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-accent text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
                                    <Search size={22} />
                                    Book Your Trip
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Trust Badges - normalized flow */}
            <div className="mt-20 border-t border-slate-100 pt-12 hidden md:block">
                <div className="container mx-auto px-8 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-slate-900">
                    <div className="flex items-center gap-2 text-xl font-black font-outfit uppercase tracking-widest text-sm">ISO Certified</div>
                    <div className="flex items-center gap-2 text-xl font-black font-outfit uppercase tracking-widest text-sm">24/7 Support</div>
                    <div className="flex items-center gap-2 text-xl font-black font-outfit uppercase tracking-widest text-sm">GPS Tracking</div>
                    <div className="flex items-center gap-2 text-xl font-black font-outfit uppercase tracking-widest text-sm">Times Choice 2024</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
