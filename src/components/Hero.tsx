import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920", // Mercedes
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1920", // Driving POV
  "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=1920", // Porsche
  "https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&q=80&w=1920", // Road trip
  "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=1920", // BMW
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920", // Car interior
  "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1920", // Interior
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1920", // Sporty
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1920", // Convertible
  "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1920", // Bentley/Luxury
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
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury Car Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-20"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 md:pt-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold-500"
            ></motion.div>
            <span className="text-gold-400 uppercase tracking-[0.2em] text-xs md:text-sm font-medium">
              Premium Car Rental
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
            Freedom to <br />
            <span className="text-gold-gradient">Drive Your Way</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-base md:text-xl mb-8 md:mb-10 font-light leading-relaxed max-w-lg"
          >
            Experience the thrill of self-drive with our premium fleet in Navi Mumbai & Panvel. 
            Luxury, comfort, and performance at your fingertips.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="px-8 py-3.5 md:py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.4)] text-sm md:text-base"
            >
              Book Your Car
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#fleet"
              className="px-8 py-3.5 md:py-4 bg-transparent border border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm text-sm md:text-base"
            >
              Explore Fleet
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 md:mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Star className="text-gold-500 fill-gold-500" size={16} />
              <span>4.9 Google Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div>24/7 Support</div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div>Sanitized Cars</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
