import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Car, ArrowRight, Info } from 'lucide-react';

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('local');

    const tabs = [
        { id: 'local', label: 'Local', icon: <MapPin size={20} /> },
        { id: 'outstation', label: 'Out Station', icon: <Car size={20} /> },
        { id: 'pickdrop', label: 'Pick & Drop', icon: <Plane size={20} /> },
    ];

    const localRates = [
        { model: 'Maruti Suzuki Sedan (Swift Dzire)', permit: '4 passenger permit', type: 'Sedan', baseRate: 'Rs 2200', baseKms: '8Hrs/80kms', extraHr: 'Rs 150', extraKm: 'Rs 13' },
    ];

    const outstationRates = [
        { model: 'Maruti Suzuki Sedan (Swift Dzire)', type: 'Sedan', ratePerKm: 'Rs 13', minKms: '250 Kms/Day', driverAllowance: 'Rs 300/Day' },
    ];

    const pickDropRates = [
        { model: 'Maruti Suzuki Sedan (Swift Dzire)', type: 'Sedan', toAirport: 'Rs 1200', fromAirport: 'Rs 1400', station: 'Rs 600' },
    ];

    const getRates = () => {
        if (activeTab === 'local') return localRates;
        if (activeTab === 'outstation') return outstationRates;
        return pickDropRates;
    };

    return (
        <div className="pt-32 pb-24 min-h-[50vh] bg-slate-50/30">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Our Flexible <span className="text-accent">Pricing Plans</span>
                    </motion.h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Transparent pricing with no hidden costs. Choose the plan that fits your travel needs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg ${activeTab === tab.id
                                ? 'bg-accent text-white shadow-accent/20 scale-105'
                                : 'bg-white text-slate-600 hover:bg-slate-50 shadow-slate-200/50'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Table */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
                >
                    <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                            Rates for {tabs.find(t => t.id === activeTab).label} Usage:
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white border-b border-slate-100">
                                    <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Car Models</th>
                                    <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Type</th>
                                    {activeTab === 'local' ? (
                                        <>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">8Hrs/80kms</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Extra Rate/Hr.</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Extra Rate/Km.</th>
                                        </>
                                    ) : activeTab === 'outstation' ? (
                                        <>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Rate Per Km</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Min Kms/Day</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Driver Allowance</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">To Airport</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">From Airport</th>
                                            <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider">To Station</th>
                                        </>
                                    )}
                                    <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-wider text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {getRates().map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="font-bold text-slate-900 group-hover:text-accent transition-colors">
                                                {row.model}
                                            </div>
                                            {row.permit && (
                                                <div className="text-xs text-slate-400 font-medium mt-1">[{row.permit}]</div>
                                            )}
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                {row.type}
                                            </span>
                                        </td>
                                        {activeTab === 'local' ? (
                                            <>
                                                <td className="px-8 py-6 font-bold text-slate-700">{row.baseRate}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.extraHr}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.extraKm}</td>
                                            </>
                                        ) : activeTab === 'outstation' ? (
                                            <>
                                                <td className="px-8 py-6 font-bold text-slate-700">{row.ratePerKm}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.minKms}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.driverAllowance}</td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-8 py-6 font-bold text-slate-700">{row.toAirport}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.fromAirport}</td>
                                                <td className="px-8 py-6 text-slate-600">{row.station}</td>
                                            </>
                                        )}
                                        <td className="px-8 py-6 text-center">
                                            <a
                                                href="tel:+917061513811"
                                                className="inline-block px-6 py-2.5 bg-accent text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all shadow-md shadow-accent/20 active:scale-95"
                                            >
                                                Enquiry
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-100">
                        <div className="flex gap-3 text-slate-500 text-sm leading-relaxed">
                            <Info className="flex-shrink-0 text-accent" size={20} />
                            <div>
                                <p className="font-bold text-slate-700 mb-1">Note:</p>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>Time and Distance will be calculated from our office to our office.</li>
                                    <li>Toll, Parking & Cantonment fees will be charged extra wherever applicable.</li>
                                    <li>Interstate permit taxes (if applicable) will be paid by the customer.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
