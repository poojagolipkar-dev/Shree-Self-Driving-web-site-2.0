import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';
import { EditableText } from './Editable';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-black min-h-[100dvh]">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/WZMwejHLdr0?autoplay=1&mute=1&loop=1&playlist=WZMwejHLdr0&controls=0&showinfo=0&modestbranding=1&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
        ></iframe>
      </div>
      
      {/* Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Gradient Overlays for extra readability at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>

      {/* Centered Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center pt-24 pb-12 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold-500"
            ></motion.div>
            <EditableText 
              path="hero.badge" 
              className="text-gold-400 uppercase tracking-[0.2em] text-xs md:text-sm font-medium" 
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold-500"
            ></motion.div>
          </div>
          
          <EditableText 
            path="hero.title" 
            tag="h1" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-tight mb-4 md:mb-6 text-gold-gradient" 
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-10 max-w-2xl"
          >
            <EditableText 
              path="hero.description" 
              tag="p" 
              className="text-gray-200 text-base md:text-xl font-light leading-relaxed" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <a
              href="#booking"
              className="px-8 py-3.5 md:py-4 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.4)] text-sm md:text-base w-full sm:w-auto"
            >
              <EditableText path="hero.button1" />
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#fleet"
              className="px-8 py-3.5 md:py-4 bg-white/10 border border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm text-sm md:text-base w-full sm:w-auto"
            >
              <EditableText path="hero.button2" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 md:mt-16 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Star className="text-gold-500 fill-gold-500" size={16} />
              <span>4.9 Google Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div>24/7 Support</div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div>Sanitized Cars</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
