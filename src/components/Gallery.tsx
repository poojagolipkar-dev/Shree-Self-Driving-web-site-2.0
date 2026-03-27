import { motion } from 'motion/react';
import { useAdmin } from '../context/AdminContext';
import { EditableImage } from './Editable';

export default function Gallery() {
  const { content } = useAdmin();
  const gallery = content?.gallery || [];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Visual Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 dark:text-white mt-3">
            Our <span className="text-gold-500">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Glimpses of our premium fleet and the experiences we deliver to our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group"
            >
              <EditableImage
                path={`gallery[${index}]`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={`Gallery image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
