import { motion } from 'motion/react';
import { Fuel, Settings, Users, ArrowRight } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { EditableText, EditableImage } from './Editable';

export default function Fleet() {
  const { content } = useAdmin();
  const cars = content?.cars || [];

  return (
    <section id="fleet" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 dark:text-white mt-3 mb-6">
            Choose Your <span className="text-gold-500">Ride</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From economical hatchbacks to powerful SUVs, our diverse fleet is maintained 
            to the highest standards for your safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car: any, index: number) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-transparent"
            >
              <div className="relative h-56 overflow-hidden">
                <EditableImage
                  path={`cars[${index}].image`}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/30 flex items-center">
                  <span className="text-gold-600 dark:text-gold-400 font-semibold">₹</span>
                  <EditableText path={`cars[${index}].price`} className="text-gold-600 dark:text-gold-400 font-semibold" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 ml-1">/day</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <EditableText path={`cars[${index}].name`} tag="h3" className="text-xl font-semibold text-gray-900 dark:text-white mb-1" />
                    <EditableText path={`cars[${index}].category`} tag="span" className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider border border-gray-300 dark:border-gray-700 px-2 py-0.5 rounded inline-block" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col items-center text-center gap-1">
                    <Settings size={18} className="text-gold-500" />
                    <EditableText path={`cars[${index}].transmission`} tag="span" className="text-xs text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1 border-l border-r border-gray-200 dark:border-gray-800">
                    <Fuel size={18} className="text-gold-500" />
                    <EditableText path={`cars[${index}].fuel`} tag="span" className="text-xs text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <Users size={18} className="text-gold-500" />
                    <div className="flex items-center gap-1">
                      <EditableText path={`cars[${index}].seats`} tag="span" className="text-xs text-gray-600 dark:text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Seats</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`#booking?car=${encodeURIComponent(car.name)}`}
                  className="w-full py-3 bg-gray-100 dark:bg-white/5 hover:bg-gold-500 hover:text-black text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:border-transparent rounded-xl transition-all flex items-center justify-center gap-2 font-medium group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Book Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
