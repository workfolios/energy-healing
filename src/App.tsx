import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Podcast from './pages/Podcast';
import Policies from './pages/Policies';
import Services from './pages/Services';
import WhatToExpect from './pages/WhatToExpect';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ behavior, block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }

      if (!hash) {
        document.getElementById('main-content')?.focus({ preventScroll: true });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export const routerBasename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/what-to-expect" element={<WhatToExpect />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/community" element={<Community />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollHandler />
      <AppRoutes />
    </BrowserRouter>
  );
}
