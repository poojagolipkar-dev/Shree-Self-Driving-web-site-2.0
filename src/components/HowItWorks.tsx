import { motion } from 'motion/react';
import { Search, CalendarCheck, CarFront } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { EditableText } from './Editable';

const iconMap = [
  <Search size={32} />,
  <CalendarCheck size={32} />,
  <CarFront size={32} />
];

export default function HowItWorks() {
  const { content } = useAdmin();
  const steps = content?.steps || [];

  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-3">
            How It <span className="text-gold-500">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>

          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center text-gold-500 mb-6 relative z-10 shadow-xl">
                {iconMap[index % iconMap.length]}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-black font-semibold flex items-center justify-center text-sm">
                  {index + 1}
                </div>
              </div>
              <EditableText 
                path={`steps[${index}].title`} 
                tag="h3" 
                className="text-2xl font-semibold text-white mb-3" 
              />
              <EditableText 
                path={`steps[${index}].description`} 
                tag="p" 
                className="text-gray-400 max-w-xs" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
