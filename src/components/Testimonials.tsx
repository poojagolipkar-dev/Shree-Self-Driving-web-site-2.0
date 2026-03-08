import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials as staticTestimonials } from '../data';

interface Review {
  id: string | number;
  name: string;
  rating: number;
  text: string;
  location: string;
  profile_photo_url?: string;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(staticTestimonials);
  const [loading, setLoading] = useState(true);
  const [googleRating, setGoogleRating] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const contentType = response.headers.get("content-type");
        
        if (response.ok && contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews);
            setGoogleRating(data.rating);
            setTotalRatings(data.total_ratings);
          }
        } else {
          console.warn('API returned non-JSON response, falling back to static data.');
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-3">
            Client <span className="text-gold-500">Stories</span>
          </h2>
          {googleRating && (
            <div className="mt-4 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="flex items-center text-gold-500">
                <span className="font-bold text-xl mr-1">{googleRating}</span>
                <Star className="fill-current" size={20} />
              </div>
              <span>based on {totalRatings} Google reviews</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, rotateX: -15, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="glass-card p-8 rounded-2xl relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 text-gold-500/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed flex-grow line-clamp-4">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                {testimonial.profile_photo_url ? (
                  <img 
                    src={testimonial.profile_photo_url} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-gray-900 dark:text-white font-bold border border-gold-500/30">
                    {testimonial.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-gold-600 dark:text-gold-400">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
