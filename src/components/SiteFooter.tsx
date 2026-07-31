import React from 'react';
import { ArrowUp, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assets';
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

const LocationList = ({ mobile = false }: { mobile?: boolean }) => {
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

const FacebookLink = () => {
  return (
    <a
      href="https://www.facebook.com/people/Kathys-Energy-Healing/61567334924198/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-stone-300 transition-colors hover:bg-stone-800 hover:text-sage-200"
      aria-label="Visit Kathy's Energy Healing on Facebook"
    >
      <Facebook size={20} aria-hidden="true" />
    </a>
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
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-300 transition-colors hover:border-sage-500 hover:bg-stone-800 hover:text-ivory"
    >
      <ArrowUp size={18} aria-hidden="true" />
      <span>Back to top</span>
    </button>
  );
};

const SiteFooter = () => {
  return (
    <footer
      id="site-footer"
      className="site-footer-safe-area border-t border-stone-800 bg-stone-900 pt-8 text-stone-300 md:pt-12 xl:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact mobile footer */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <img
              src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')}
              alt=""
              className="h-12 w-12 opacity-80"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl leading-tight text-ivory">Kathy Curr</h3>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Energy Healing
              </span>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-300">
            Providing compassionate Reiki energy healing treatments and affirming angel guidance sessions for grounded, balanced restoration.
          </p>

          <div className="mt-3">
            <FacebookLink />
          </div>

          <div className="mt-4 border-b border-stone-800">
            <FooterDisclosure title="Explore">
              <FooterLinkList links={exploreLinks} mobile />
            </FooterDisclosure>
            <FooterDisclosure title="Our Services">
              <FooterLinkList links={serviceLinks} mobile />
            </FooterDisclosure>
            <FooterDisclosure title="Locations">
              <LocationList mobile />
            </FooterDisclosure>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-xs text-stone-400">
            <p>&copy; {new Date().getFullYear()} Kathy&apos;s Energy Healing, LLC.</p>
            <Link to="/policies" className="w-fit py-1 transition-colors hover:text-ivory">
              Policies &amp; Disclaimers
            </Link>
            <InlineBackToTop />
          </div>
        </div>

        {/* Tablet and desktop footer */}
        <div className="hidden md:block">
          <div className="xl:grid xl:grid-cols-4 xl:gap-12">
            <section className="flex items-start justify-between gap-12 xl:block">
              <div className="flex shrink-0 items-center gap-3">
                <img
                  src={assetUrl('KEH_PrimarySymbol_ArchTree_Sage_v04_clean.webp')}
                  alt=""
                  className="h-16 w-16 opacity-80"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <h3 className="font-serif text-2xl text-ivory">Kathy Curr</h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                    Energy Healing
                  </span>
                </div>
              </div>

              <div className="max-w-xl xl:mt-6 xl:max-w-xs">
                <p className="text-sm leading-relaxed text-stone-300">
                  Providing compassionate Reiki energy healing treatments and affirming angel guidance sessions for grounded, balanced restoration.
                </p>
                <div className="mt-4">
                  <FacebookLink />
                </div>
              </div>
            </section>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-stone-800 pt-10 xl:col-span-3 xl:mt-0 xl:border-t-0 xl:pt-0">
              <section>
                <h4 className="mb-6 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                  Explore
                </h4>
                <FooterLinkList links={exploreLinks} />
              </section>

              <section>
                <h4 className="mb-6 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                  Our Services
                </h4>
                <FooterLinkList links={serviceLinks} />
              </section>

              <section>
                <h4 className="mb-6 inline-block border-b border-stone-800 pb-2 font-serif text-xl text-ivory">
                  Locations
                </h4>
                <LocationList />
              </section>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-stone-800 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Kathy&apos;s Energy Healing, LLC.</p>
            <div className="flex flex-wrap items-center gap-4 sm:justify-end">
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
