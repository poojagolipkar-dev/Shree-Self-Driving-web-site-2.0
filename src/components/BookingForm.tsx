import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Car, Phone, User, MessageCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function BookingForm() {
  const { content } = useAdmin();
  const cars = content?.cars || [];

  const [formData, setFormData] = useState({
    pickupDate: '',
    dropoffDate: '',
    car: '',
    name: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to book a car.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Car:* ${formData.car}%0A*Pick-up:* ${formData.pickupDate}%0A*Drop-off:* ${formData.dropoffDate}`;
    window.open(`https://wa.me/919768010603?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 dark:opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] text-sm font-medium">
              Instant Booking
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 dark:text-white mt-3 mb-6">
              Start Your <span className="text-gold-500">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Booking a premium car has never been easier. Fill out the form, and we'll connect you directly via WhatsApp to confirm your ride.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">Flexible Dates</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Choose your pickup and drop-off times that suit your schedule.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-500">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-lg">Instant Confirmation</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Get immediate response and booking confirmation via WhatsApp.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl bg-white dark:bg-transparent"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400 ml-1">Pick-up Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400 ml-1">Drop-off Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="dropoffDate"
                      required
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 ml-1">Select Car</label>
                <div className="relative">
                  <Car className="absolute left-4 top-3.5 text-gray-500" size={20} />
                  <select
                    name="car"
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all appearance-none"
                  >
                    <option value="" className="bg-white dark:bg-black text-gray-500">Choose a car...</option>
                    {cars.map(car => (
                      <option key={car.id} value={car.name} className="bg-white dark:bg-black">{car.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-500" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-gray-500" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
              >
                Book via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
