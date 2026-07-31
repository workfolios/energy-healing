import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { absoluteAssetUrl, SITE_URL } from '../utils/assets';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

type RouteMetadata = {
  title?: string;
  fullTitle?: string;
  description: string;
  breadcrumb: string;
};

const SITE_NAME = 'Kathy Curr Energy Healing';
const LEGAL_NAME = "Kathy's Energy Healing, LLC";
const DEFAULT_IMAGE = 'KEH_PrimarySymbol_ArchTree_Charcoal_v04_clean.png';
const DEFAULT_IMAGE_ALT = 'Kathy Curr Energy Healing arched tree logo';

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    fullTitle: 'Kathy Curr Energy Healing | Reiki & Angel Guidance',
    description:
      'Kathy Curr offers in-person Reiki treatments and in-person or virtual angel guidance sessions across South Dakota, North Dakota, and Minnesota.',
    breadcrumb: 'Home',
  },
  '/about': {
    title: 'Meet the Practitioner',
    description:
      'Meet Kathy Curr, a certified Reiki practitioner and retired special education educator offering grounded Reiki treatments and angel guidance sessions.',
    breadcrumb: 'Meet the Practitioner',
  },
  '/services': {
    title: 'Reiki & Angel Guidance Services',
    description:
      'Explore adult and youth Reiki treatments and angel guidance sessions with Kathy Curr, including pricing, formats, and service-area availability.',
    breadcrumb: 'Services',
  },
  '/what-to-expect': {
    title: 'What to Expect',
    description:
      'Learn what to expect before, during, and after an in-person Reiki treatment or angel guidance session with Kathy Curr.',
    breadcrumb: 'What to Expect',
  },
  '/podcast': {
    title: 'Podcast Guest Appearances',
    description:
      "Watch and listen to Kathy Curr's guest podcast appearances on energy healing, intuition, emotional triggers, and spiritual guidance.",
    breadcrumb: 'Podcasts',
  },
  '/community': {
    title: 'Community & Collaboration',
    description:
      'Explore mentorship, media appearances, editorial work, and community collaboration opportunities with Kathy Curr.',
    breadcrumb: 'Community',
  },
  '/faq': {
    title: 'Reiki & Angel Guidance FAQ',
    description:
      'Find answers about Reiki treatments, angel guidance sessions, youth participation, virtual availability, scheduling, and policies.',
    breadcrumb: 'FAQ',
  },
  '/contact': {
    title: 'Contact & Inquiries',
    description:
      'Contact Kathy Curr about Reiki treatments, angel guidance sessions, podcast appearances, mentorship, or collaborative projects.',
    breadcrumb: 'Contact',
  },
  '/policies': {
    title: 'Policies & Disclaimers',
    description:
      "Review Kathy's Energy Healing, LLC policies, cancellation terms, youth consent requirements, privacy practices, and spiritual-services disclaimers.",
    breadcrumb: 'Policies & Disclaimers',
  },
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
};

const canonicalForPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}/`;
};

const buildStructuredData = (
  pathname: string,
  canonicalUrl: string,
  fullTitle: string,
  description: string,
  socialImage: string,
) => {
  const normalizedPath = normalizePath(pathname);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webPageId = `${canonicalUrl}#webpage`;
  const personId = `${canonicalForPath('/about')}#kathy-curr`;
  const metadata = routeMetadata[normalizedPath];

  const graph: Record<string, unknown>[] = [
    {
      '@type':
        normalizedPath === '/about'
          ? 'AboutPage'
          : normalizedPath === '/contact'
            ? 'ContactPage'
            : 'WebPage',
      '@id': webPageId,
      url: canonicalUrl,
      name: fullTitle,
      description,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: socialImage,
      },
      inLanguage: 'en-US',
    },
  ];

  if (normalizedPath === '/') {
    graph.push(
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: 'Kathy Curr',
        publisher: { '@id': organizationId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: LEGAL_NAME,
        alternateName: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: absoluteAssetUrl(DEFAULT_IMAGE),
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'South Dakota' },
          { '@type': 'AdministrativeArea', name: 'North Dakota' },
          { '@type': 'AdministrativeArea', name: 'Minnesota' },
        ],
      },
    );
  }

  if (normalizedPath !== '/' && metadata) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: metadata.breadcrumb,
          item: canonicalUrl,
        },
      ],
    });
  }

  if (normalizedPath === '/about') {
    graph.push({
      '@type': 'Person',
      '@id': personId,
      name: 'Kathy Curr',
      url: canonicalForPath('/about'),
      image: absoluteAssetUrl('KEH_Photo_Headshot_Avatar_Square_WarmIvory_v04.webp'),
      jobTitle: 'Reiki Practitioner and Angel Guidance Practitioner',
      worksFor: { '@id': organizationId },
      homeLocation: {
        '@type': 'Place',
        name: 'Huron, South Dakota',
      },
      knowsAbout: [
        'Reiki energy healing',
        'Angel guidance',
        'Youth energy work',
        'Spiritual mentorship',
      ],
    });
  }

  if (normalizedPath === '/services') {
    const services = [
      ['Adult Reiki', 'adult-reiki'],
      ['Youth Reiki', 'youth-reiki'],
      ['Adult Angel Guidance', 'adult-angel-guidance'],
      ['Youth Angel Guidance', 'youth-angel-guidance'],
    ];

    services.forEach(([name, anchor]) => {
      graph.push({
        '@type': 'Service',
        '@id': `${canonicalForPath('/services')}#${anchor}`,
        name,
        url: `${canonicalForPath('/services')}#${anchor}`,
        provider: { '@id': organizationId },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'South Dakota' },
          { '@type': 'AdministrativeArea', name: 'North Dakota' },
          { '@type': 'AdministrativeArea', name: 'Minnesota' },
        ],
      });
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  noIndex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);
  const pageMetadata = routeMetadata[normalizedPath];
  const resolvedDescription =
    pageMetadata?.description ||
    description ||
    'Compassionate Reiki treatments and angel guidance sessions with Kathy Curr across the Upper Great Plains.';
  const resolvedTitle = pageMetadata?.title || title;
  const fullTitle =
    pageMetadata?.fullTitle ||
    (resolvedTitle ? `${resolvedTitle} | ${SITE_NAME}` : `${SITE_NAME} | Reiki & Angel Guidance`);
  const canonicalUrl = canonical || canonicalForPath(normalizedPath);
  const socialImage = /^https?:\/\//.test(ogImage) ? ogImage : absoluteAssetUrl(ogImage);
  const structuredData = buildStructuredData(
    normalizedPath,
    canonicalUrl,
    fullTitle,
    resolvedDescription,
    socialImage,
  );

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData).replace(/</g, '\\u003c')}
      </script>
    </Helmet>
  );
};

export default SEO;
