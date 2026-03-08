import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Terms from './components/Terms';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-white selection:bg-gold-500 selection:text-black overflow-x-hidden transition-colors duration-300">
          <SEO />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CallButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
