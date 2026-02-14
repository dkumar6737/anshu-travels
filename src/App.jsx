import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FloatingActions from './components/FloatingActions';
import { motion } from 'framer-motion';
import { Award, Shield, Heart, Map, Car } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
    <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-slate-600">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-accent rounded-lg text-white shadow-md shadow-accent/20">
            <Car size={24} />
          </div>
          <span className="text-2xl font-bold font-outfit text-slate-900">Anshu<span className="text-accent">Travels</span></span>
        </div>
        <p className="leading-relaxed">
          Providing premium taxi and travel services since 1988. Committed to punctuality, safety, and your comfort.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h4>
        <ul className="space-y-4">
          <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Our Fleet</a></li>
          <li><a href="#stats" className="hover:text-accent transition-colors">Routes & Pricing</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-slate-900">Services</h4>
        <ul className="space-y-4">
          <li><a href="#services" className="hover:text-accent transition-colors">Airport Transfers</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Outstation Trips</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Shared Cabs</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Corporate Travel</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-slate-900">Contact Info</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">A:</span> Pune-Mumbai Highway, Station Road, Pune.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">P:</span> +91 70615 13811
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">E:</span> info@anshutils.com
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto px-8 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
      <p>© 2025 Anshu Travels. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const AboutPreview = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
            alt="Travel Experience"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 p-8 glass-card">
          <div className="text-4xl font-bold font-outfit text-accent mb-1">35+</div>
          <div className="text-sm font-semibold text-slate-400">Years of Experience</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">A Legacy of <span className="text-accent">Trust & Excellence</span></h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Founded on the principles of safety and punctuality, Anshu Travels has grown from a single car to a leading fleet serving thousands of happy travelers monthly.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-success/20 text-success rounded-lg"><Shield size={24} /></div>
            <div>
              <h4 className="font-bold">Verified Drivers</h4>
              <p className="text-sm text-slate-500">Expertise you can trust.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-amber-500/20 text-amber-500 rounded-lg"><Award size={24} /></div>
            <div>
              <h4 className="font-bold">Award Winning</h4>
              <p className="text-sm text-slate-500">Times Choice Winner.</p>
            </div>
          </div>
        </div>

        <button className="px-8 py-3 outline outline-1 outline-white/20 hover:bg-white/5 rounded-full transition-all flex items-center gap-2 group">
          Read Full Story
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-all" />
        </button>
      </motion.div>
    </div>
  </section>
);

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutPreview />
      <FloatingActions />

      {/* Short Stats Section */}
      <section id="stats" className="py-20 bg-accent text-white">
        <div className="container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">5L+</div>
            <p className="font-semibold uppercase text-xs tracking-widest opacity-70">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">150+</div>
            <p className="font-semibold uppercase text-xs tracking-widest opacity-70">Own Fleet</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">37+</div>
            <p className="font-semibold uppercase text-xs tracking-widest opacity-70">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">24/7</div>
            <p className="font-semibold uppercase text-xs tracking-widest opacity-70">Instant Support</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
