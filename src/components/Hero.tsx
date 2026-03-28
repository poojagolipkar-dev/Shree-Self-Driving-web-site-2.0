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
      
      {/* Dark Overlay (30% opacity for better visibility) */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Gradient Overlays for extra readability at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10"></div>

      {/* Centered Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold-500 md:w-12"
            ></motion.div>
            <EditableText 
              path="hero.badge" 
              className="text-gold-400 uppercase tracking-[0.2em] text-[10px] md:text-sm font-medium whitespace-nowrap" 
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-gold-500 md:w-12"
            ></motion.div>
          </div>
          
          <EditableText 
            path="hero.title" 
            tag="h1" 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.1] mb-4 md:mb-8 text-gold-gradient px-2" 
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-12 max-w-2xl px-4"
          >
            <EditableText 
              path="hero.description" 
              tag="p" 
              className="text-gray-200 text-sm sm:text-lg md:text-xl font-light leading-relaxed" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center px-4 sm:px-0"
          >
            <a
              href="#booking"
              className="px-6 py-3.5 md:px-8 md:py-4 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.4)] text-sm md:text-base w-full sm:min-w-[200px]"
            >
              <EditableText path="hero.button1" className="whitespace-nowrap" />
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
            <a
              href="#fleet"
              className="px-6 py-3.5 md:px-8 md:py-4 bg-white/10 border border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm text-sm md:text-base w-full sm:min-w-[200px]"
            >
              <EditableText path="hero.button2" className="whitespace-nowrap" />
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
