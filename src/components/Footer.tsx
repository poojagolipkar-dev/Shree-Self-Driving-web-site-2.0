import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-zinc-950 pt-20 pb-10 border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                Shree Self Driving <br className="hidden sm:block" />
                <span className="text-gold-600 dark:text-gold-500">& Car Rental Service</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Premium self-drive car rental service in Navi Mumbai & Panvel. 
              Providing luxury and comfort at affordable rates.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Home</Link></li>
              <li><a href="/#fleet" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Our Fleet</a></li>
              <li><a href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Services</a></li>
              <li><a href="/#booking" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Book Now</a></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Terms & Conditions</Link></li>
              <li><a href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-500 text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Near Kia Motors Showroom, Bhoomi Landmark, Sector 17, Khanda Colony, Panvel, Navi Mumbai - 410206
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a href="tel:9768010603" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                  +91 9768010603
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <a href="mailto:shreeselfdriving@gmail.com" className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white">
                  shreeselfdriving@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669319352226!2d73.1000!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83e6016629b%3A0x622668352610199e!2sShree%20Self%20Driving%20%26%20Car%20Rental%20Service!5e0!3m2!1sen!2sin!4v1709834567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Shree Self Driving & Car Rental Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
