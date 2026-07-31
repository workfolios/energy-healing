import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterDisclosure from './FooterDisclosure';

type FooterLink = {
  label: string;
  to: string;
  emphasized?: boolean;
};

const exploreLinks: FooterLink[] = [
  { label: 'Meet the Practitioner', to: '/about' },
  { label: 'What to Expect', to: '/what-to-expect' },
  { label: 'Podcasts', to: '/podcast' },
  { label: 'Community', to: '/community' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks: FooterLink[] = [
  { label: 'Overview', to: '/services', emphasized: true },
  { label: 'Adult Reiki', to: '/services#adult-reiki' },
  { label: 'Youth Reiki', to: '/services#youth-reiki' },
  { label: 'Angel Guidance (Adult)', to: '/services#adult-angel-guidance' },
  { label: 'Angel Guidance (Youth)', to: '/services#youth-angel-guidance' },
];

const serviceLocations = [
  'East & West River, SD',
  'Red River Valley, ND',
  'Twin Cities, MN',
];

const FooterLinkList = ({ links, mobile = false }: { links: FooterLink[]; mobile?: boolean }) => {
  return (
    <ul className={mobile ? 'space-y-1' : 'space-y-3 text-sm'}>
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={`${mobile ? 'block py-2.5 text-sm' : ''} transition-colors hover:text-ivory ${
              link.emphasized ? 'font-medium text-stone-300' : 'text-stone-400'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ServiceAreaList = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <div className={mobile ? 'pb-1' : ''}>
      <p className="text-sm font-medium text-stone-300">Serving the Upper Great Plains:</p>
      <ul className={`${mobile ? 'mt-3 space-y-2 text-sm' : 'mt-4 space-y-3 text-xs tracking-wide'} text-stone-400`}>
        {serviceLocations.map((location) => (
          <li key={location}>{location}</li>
        ))}
      </ul>
    </div>
  );
};

const InlineBackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex min-h-11 items-center gap-2 px-2 py-2 text-sm text-stone-300 transition-colors hover:text-ivory"
    >
      <ArrowUp size={17} aria-hidden="true" />
      <span>Back to top</span>
    </button>
  );
};

const SiteFooter = () => {
  return (
    <footer
      id="site-footer"
      className="site-footer-safe-area border-t border-stone-800 bg-stone-900 pt-5 text-stone-300 md:pt-8 xl:pt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact mobile footer */}
        <div className="md:hidden">
          <nav aria-label="Footer navigation" className="border-b border-stone-800">
            <FooterDisclosure title="Explore">
              <FooterLinkList links={exploreLinks} mobile />
            </FooterDisclosure>
            <FooterDisclosure title="Our Services">
              <FooterLinkList links={serviceLinks} mobile />
            </FooterDisclosure>
            <FooterDisclosure title="Service Areas">
              <ServiceAreaList mobile />
            </FooterDisclosure>
          </nav>

          <div className="grid gap-2 pt-4 text-xs text-stone-400">
            <p>&copy; {new Date().getFullYear()} Kathy&apos;s Energy Healing, LLC.</p>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <Link to="/policies" className="py-2 transition-colors hover:text-ivory">
                Policies &amp; Disclaimers
              </Link>
              <InlineBackToTop />
            </div>
          </div>
        </div>

        {/* Tablet and desktop footer */}
        <div className="hidden md:block">
          <nav aria-label="Footer navigation" className="grid grid-cols-3 gap-8 lg:gap-12">
            <section>
              <h4 className="mb-5 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                Explore
              </h4>
              <FooterLinkList links={exploreLinks} />
            </section>

            <section>
              <h4 className="mb-5 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                Our Services
              </h4>
              <FooterLinkList links={serviceLinks} />
            </section>

            <section>
              <h4 className="mb-5 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                Service Areas
              </h4>
              <ServiceAreaList />
            </section>
          </nav>

          <div className="mt-8 flex items-center justify-between gap-6 border-t border-stone-800 pt-4 text-xs text-stone-400">
            <p>&copy; {new Date().getFullYear()} Kathy&apos;s Energy Healing, LLC.</p>
            <div className="flex flex-wrap items-center justify-end gap-4">
              <Link to="/policies" className="py-2 transition-colors hover:text-ivory">
                Policies &amp; Disclaimers
              </Link>
              <InlineBackToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
