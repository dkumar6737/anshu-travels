import React from 'react';
import { PlaneTakeoff, ShieldCheck, Briefcase, Globe, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <PlaneTakeoff className="w-10 h-10" />,
        title: 'Airport Transfers',
        description: 'Punctual pick-ups and drops to Mumbai, Pune & Nashik airports. Available 24x7x365.',
        color: 'bg-blue-500/10 text-blue-500',
    },
    {
        icon: <Globe className="w-10 h-10" />,
        title: 'Outstation Cabs',
        description: 'Safe and comfortable long-distance travel across India with experienced drivers.',
        color: 'bg-accent/10 text-accent',
    },
    {
        icon: <Briefcase className="w-10 h-10" />,
        title: 'Corporate Rental',
        description: 'Tailored transport solutions for corporate events and employee commuting.',
        color: 'bg-purple-500/10 text-purple-500',
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: 'Shared Cabs',
        description: 'Economical shared airport transfers with door-to-door pick-up and drop service.',
        color: 'bg-success/10 text-success',
    },
    {
        icon: <Clock className="w-10 h-10" />,
        title: 'Local City Tour',
        description: 'Discover the city with our flexible hourly rental packages for local sightseeing.',
        color: 'bg-pink-500/10 text-pink-500',
    },
    {
        icon: <Star className="w-10 h-10" />,
        title: 'Luxury Fleet',
        description: 'Premium vehicles for special occasions or high-profile travel needs.',
        color: 'bg-amber-500/10 text-amber-500',
    }
];

const Services = () => {
    const scrollToHero = () => {
        // const heroSection = document.getElementById('hero');
        // if (heroSection) {
        //     heroSection.scrollIntoView({ behavior: 'smooth' });
        // }
        window.location.href = "/pricing";
    };

    return (
        <section id="services" className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
                    >
                        Our Exclusive <span className="text-accent">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        We offer a wide range of travel services designed for comfort, safety, and reliability.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full bg-white shadow-sm"
                        >
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.color} shadow-sm`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                <button
                                    onClick={scrollToHero}
                                    className="px-6 py-2.5 bg-accent text-white font-bold rounded-lg text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-accent/20"
                                >
                                    Book Now
                                </button>
                                <button className="flex items-center gap-1.5 font-bold text-slate-400 hover:text-accent text-sm transition-all group/btn">
                                    Learn More
                                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Help helper
const ChevronRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default Services;
