import { motion } from 'motion/react';
import { Search, CalendarCheck, CarFront } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    title: "Select Your Car",
    description: "Browse our premium fleet and choose the car that fits your style and needs."
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Book Online",
    description: "Fill in your details and dates. Confirm your booking instantly via WhatsApp."
  },
  {
    icon: <CarFront size={32} />,
    title: "Pick Up & Drive",
    description: "Collect your sanitized car from our location and enjoy the freedom of the road."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3">
            How It <span className="text-gold-500">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center text-gold-500 mb-6 relative z-10 shadow-xl">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-black font-bold flex items-center justify-center text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
