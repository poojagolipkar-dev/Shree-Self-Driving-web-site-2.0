import { motion } from 'motion/react';
import { ShieldCheck, Wallet, Clock, MousePointerClick, Wrench, MapPin } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Sanitized Cars",
    description: "Every car is deeply cleaned and sanitized before delivery for your safety."
  },
  {
    icon: <Wallet size={32} />,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Luxury at best market rates."
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    description: "Round the clock roadside assistance and customer support for peace of mind."
  },
  {
    icon: <MousePointerClick size={32} />,
    title: "Easy Booking",
    description: "Seamless online booking process. Get your car in just a few clicks."
  },
  {
    icon: <Wrench size={32} />,
    title: "Well Maintained",
    description: "Regularly serviced fleet ensuring a smooth and breakdown-free journey."
  },
  {
    icon: <MapPin size={32} />,
    title: "Doorstep Delivery",
    description: "Get your car delivered to your doorstep for maximum convenience."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
            Excellence in Every <span className="text-gold-500">Mile</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/5 hover:border-gold-500/30 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all group shadow-sm dark:shadow-none"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.2 }}
                className="w-16 h-16 rounded-full bg-gray-100 dark:bg-black border border-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-500 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.1)]"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
