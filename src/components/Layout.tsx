import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Menu, X, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BackToTop from './BackToTop';
import { assetUrl } from '../utils/assets';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meet the Practitioner', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'What to Expect', path: '/what-to-expect' },
    { name: 'Podcasts', path: '/podcast' },
    { name: 'Community', path: '/community' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-ivory selection:bg-sage-200 selection:text-stone-900">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Navigation */}
      <nav aria-label="Primary navigation" className="fixed w-full bg-ivory/90 backdrop-blur-md z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" aria-label="Kathy Curr Energy Healing home" className="flex items-center gap-3 group">
              <img 
                src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')} 
                alt="" 
                className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-stone-900 tracking-wide group-hover:text-sage-700 transition-colors leading-tight">Kathy Curr</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-stone-600 font-bold border-t border-stone-200 mt-1 pt-1">Energy Healing</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`text-sm tracking-wide transition-all duration-200 border-b-2 pb-1 ${
                    isActive(link.path)
                      ? 'text-sage-700 font-medium border-sage-500 hover:border-sage-600'
                      : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-sage-400 hover:font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact#inquiry-form"
                className="bg-stone-900 text-ivory px-5 py-2 rounded-full text-sm hover:bg-stone-800 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-800 hover:text-sage-700 focus:outline-none"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ivory border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6">
                <div className="space-y-1 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive(link.path) ? 'page' : undefined}
                      className={`block px-3 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive(link.path)
                          ? 'bg-sage-100 text-sage-800'
                          : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-stone-200">
                   <h3 className="px-3 text-[10px] uppercase tracking-[0.25em] text-stone-400 font-bold mb-5">Quick Actions</h3>
                   <div className="grid grid-cols-1 gap-4 px-3 pb-4">
                      <Link 
                        to="/about" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between p-5 bg-white border border-sage-100 rounded-2xl shadow-sm group"
                      >
                        <span className="font-serif text-lg text-stone-900">Meet the Practitioner</span>
                        <span className="text-xl text-sage-700 group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                      <Link 
                        to="/services" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between p-5 bg-white border border-sage-100 rounded-2xl shadow-sm group"
                      >
                        <span className="font-serif text-lg text-stone-900">Explore Services</span>
                        <span className="text-xl text-sage-700 group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                      <Link 
                        to="/contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between p-5 bg-stone-900 rounded-2xl shadow-md group"
                      >
                        <span className="font-serif text-lg text-ivory">Submit Inquiry</span>
                        <span className="text-xl text-ivory group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="flex-grow pt-20 outline-none" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 pt-16 pb-8 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6 md:col-span-1">
              <div className="flex items-center gap-3">
                <img 
                  src={assetUrl('KEH_PrimarySymbol_ArchTree_Charcoal_v04_clean.webp')} 
                  alt="" 
                  className="w-20 h-20 brightness-200 grayscale opacity-90"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <h3 className="font-serif text-2xl text-ivory">Kathy Curr</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Energy Healing</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                Providing compassionate Reiki energy healing treatments and affirming angel guidance advising sessions for grounded, balanced restoration.
              </p>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/people/Kathys-Energy-Healing/61567334924198/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stone-400 hover:text-sage-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=QWeydCFRIsg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stone-400 hover:text-sage-200 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Links and Locations Container */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-xl text-ivory mb-6 border-b border-stone-800 pb-2 inline-block">Explore</h4>
                <ul className="space-y-3 text-sm text-stone-400">
                  <li><Link to="/about" className="hover:text-ivory transition-colors">Meet the Practitioner</Link></li>
                  <li><Link to="/what-to-expect" className="hover:text-ivory transition-colors">What to Expect</Link></li>
                  <li><Link to="/podcast" className="hover:text-ivory transition-colors">Podcasts</Link></li>
                  <li><Link to="/community" className="hover:text-ivory transition-colors">Community</Link></li>
                  <li><Link to="/faq" className="hover:text-ivory transition-colors">FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Specific Services */}
              <div>
                <h4 className="font-serif text-xl text-ivory mb-6 border-b border-stone-800 pb-2 inline-block">Our Services</h4>
                <ul className="space-y-3 text-sm text-stone-400">
                  <li><Link to="/services" className="hover:text-ivory transition-colors font-medium text-stone-300">Overview</Link></li>
                  <li><Link to="/services#adult-reiki" className="hover:text-ivory transition-colors">Adult Reiki</Link></li>
                  <li><Link to="/services#youth-reiki" className="hover:text-ivory transition-colors">Youth Reiki</Link></li>
                  <li><Link to="/services#adult-angel-guidance" className="hover:text-ivory transition-colors">Angel Guidance (Adult)</Link></li>
                  <li><Link to="/services#youth-angel-guidance" className="hover:text-ivory transition-colors">Angel Guidance (Youth)</Link></li>
                </ul>
              </div>

              {/* Contact & Area */}
              <div>
                <h4 className="font-serif text-xl text-ivory mb-6 border-b border-stone-800 pb-2 inline-block">Locations</h4>
                <ul className="space-y-3 text-sm text-stone-400">
                  <li className="text-stone-300 font-medium">Serving the Upper Great Plains:</li>
                  <li className="text-xs text-stone-500 pt-1 leading-relaxed space-y-2 uppercase tracking-wider">
                    <p>East & West River, SD</p>
                    <p>Red River Valley, ND</p>
                    <p>Twin Cities, MN</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <p>&copy; {new Date().getFullYear()} Kathy's Energy Healing, LLC.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/policies" className="hover:text-stone-300 transition-colors">Privacy & Policies</Link>
              <Link to="/policies" className="hover:text-stone-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Layout;
