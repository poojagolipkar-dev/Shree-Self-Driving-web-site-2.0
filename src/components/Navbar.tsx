import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link (e.g., /#reviews)
    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // remove '/#'
      
      // If we are already on the home page
      if (location.pathname === '/') {
        e.preventDefault(); // Prevent default navigation
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without reloading or jumping
          window.history.pushState(null, '', `/#${targetId}`);
        }
      }
      // If we are NOT on home page, let the Link component handle navigation to /#id
    }
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Fleet', href: '/#fleet' },
    { name: 'Services', href: '/#features' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Terms', href: '/terms' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Determine if we should show the solid navbar style
  const showSolidNavbar = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidNavbar 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 shadow-lg border-b border-gray-200/50 dark:border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-display font-bold tracking-wide transition-colors duration-300 ${showSolidNavbar ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Shree Self Driving
              </span>
              <span className="text-[10px] sm:text-xs text-gold-500 uppercase tracking-[0.1em] font-medium">
                & Car Rental Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = 
                link.href === '/' 
                  ? location.pathname === '/' && location.hash === ''
                  : link.href.startsWith('/#')
                    ? location.hash === link.href.substring(1)
                    : location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                    isActive
                      ? 'text-gold-600 dark:text-gold-400'
                      : showSolidNavbar 
                        ? 'text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400' 
                        : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-white/10">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  showSolidNavbar
                    ? 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gold-400 hover:bg-gray-200 dark:hover:bg-white/10'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(e as any, '/#booking');
                }}
                className="px-7 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm uppercase tracking-wider rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                showSolidNavbar 
                  ? 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gold-400' 
                  : 'bg-white/10 text-white'
              }`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-2 transition-colors ${
                showSolidNavbar ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 overflow-hidden shadow-xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-2 flex flex-col">
              {navLinks.map((link) => {
                const isActive = 
                  link.href === '/' 
                    ? location.pathname === '/' && location.hash === ''
                    : link.href.startsWith('/#')
                      ? location.hash === link.href.substring(1)
                      : location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-medium py-3 border-b border-gray-100 dark:border-white/5 last:border-0 ${
                      isActive
                        ? 'text-gold-600 dark:text-gold-400'
                        : 'text-gray-800 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2">
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(e as any, '/#booking');
                  }}
                  className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold uppercase tracking-wider rounded-xl shadow-lg"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
