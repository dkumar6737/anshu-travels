import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ChevronRight, Search } from 'lucide-react';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('airport');

    const tabs = [
        { id: 'airport', label: 'Airport Transfer' },
        { id: 'outstation', label: 'Outstation' },
        { id: 'local', label: 'Local City' },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background with subtle accents */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available Across Mumbai, Pune & Nashik
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
                        Your Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Travel Partner.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Experience the comfort of "Miles of Smiles" with our premium fleet. Reliable, safe, and punctual cab services for all your needs.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary flex items-center gap-2 group">
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
                    className="glass-card p-6 md:p-8 relative shadow-2xl shadow-slate-200/50"
                >
                    {/* Tabs */}
                    <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${activeTab === tab.id ? 'bg-white text-accent shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 tracking-wide">Pickup Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter City or Area"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:border-accent/40 focus:ring-4 focus:ring-accent/5 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 tracking-wide">Drop Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-success group-focus-within:scale-110 transition-transform" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:border-accent/40 focus:ring-4 focus:ring-accent/5 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 tracking-wide">Date & Time</label>
                                <div className="relative group">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="datetime-local"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:border-accent/40 outline-none transition-all text-slate-600 font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 tracking-wide">Passengers</label>
                                <div className="relative group">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:border-accent/40 outline-none transition-all appearance-none text-slate-600 font-medium">
                                        <option>1-4 Persons (Sedan)</option>
                                        <option>5-7 Persons (SUV)</option>
                                        <option>8+ Persons (Tempo)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-accent text-white font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
                            <Search size={22} />
                            Book Your Trip
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Trust Badges - bottom of hero */}
            <div className="absolute bottom-10 left-0 w-full hidden md:block">
                <div className="container mx-auto px-8 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-slate-900">
                    <div className="flex items-center gap-2 text-xl font-bold">ISO Certified</div>
                    <div className="flex items-center gap-2 text-xl font-bold">24/7 Support</div>
                    <div className="flex items-center gap-2 text-xl font-bold">GPS Tracking</div>
                    <div className="flex items-center gap-2 text-xl font-bold">Times Choice 2024</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
