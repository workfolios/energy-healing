import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => (
  <section className="bg-ivory min-h-[65vh] flex items-center py-20">
    <SEO
      title="Page Not Found"
      description="The requested Kathy Curr Energy Healing page could not be found."
      noIndex
    />
    <div className="max-w-3xl mx-auto px-6 text-center">
      <p className="text-sage-700 font-bold uppercase tracking-[0.3em] text-sm mb-6">404</p>
      <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Page Not Found</h1>
      <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-10">
        The page may have moved, or the address may be incomplete.
      </p>
      <Link
        to="/"
        className="inline-block bg-stone-900 text-ivory px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  </section>
);

export default NotFound;
