import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=1920",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-black text-white overflow-hidden pt-24 pb-10 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <div className="h-[1px] w-12 bg-gold-500"></div>
                <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-medium">
                  Premium Car Rental
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Freedom to <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Drive Your Way
                </span>
              </h1>

              <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Experience the thrill of self-drive with our premium fleet in Navi Mumbai & Panvel. 
                Luxury, comfort, and performance at your fingertips.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-8 w-full sm:w-auto">
                <a
                  href="#booking"
                  className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 w-full sm:w-auto"
                >
                  Book Now
                  <ChevronRight size={18} />
                </a>
                <a
                  href="#fleet"
                  className="px-8 py-3 bg-white/10 border border-white/20 hover:border-gold-500/50 text-white hover:text-gold-400 font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto"
                >
                  Explore Fleet
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="text-gold-500 fill-gold-500" size={14} />
                  <span className="text-gray-300">4.9 Rating</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="order-2 w-full max-w-md mx-auto mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Luxury Car"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
