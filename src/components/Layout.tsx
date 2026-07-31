import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BackToTop from './BackToTop';
import SiteFooter from './SiteFooter';
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

      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default Layout;
