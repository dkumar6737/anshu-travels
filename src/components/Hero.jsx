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
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with abstract shapes/gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,#0f172a_100%)]">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available Across Mumbai, Pune & Nashik
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Your Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">Travel Partner.</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Experience the comfort of "Miles of Smiles" with our premium fleet. Reliable, safe, and punctual cab services for all your needs.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary flex items-center gap-2 group">
                            Explore Services
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all">
                            Watch Video
                        </button>
                    </div>
                </motion.div>

                {/* Right Booking Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card p-6 md:p-8 relative"
                >
                    {/* Tabs */}
                    <div className="flex gap-2 p-1 bg-white/5 rounded-xl mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${activeTab === tab.id ? 'bg-accent text-primary shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Pickup Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter City or Area"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Drop Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-success group-focus-within:scale-110 transition-transform" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Date & Time</label>
                                <div className="relative group">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="datetime-local"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-accent/50 outline-none transition-all text-slate-400"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Passengers</label>
                                <div className="relative group">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-accent/50 outline-none transition-all appearance-none text-slate-400">
                                        <option>1-4 Persons (Sedan)</option>
                                        <option>5-7 Persons (SUV)</option>
                                        <option>8+ Persons (Tempo)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-gradient-to-r from-accent to-amber-500 text-primary font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all active:scale-[0.98]">
                            <Search size={22} />
                            Find Best Cabs
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Trust Badges - bottom of hero */}
            <div className="absolute bottom-10 left-0 w-full hidden md:block">
                <div className="container mx-auto px-8 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
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
