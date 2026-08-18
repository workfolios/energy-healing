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
  ogImage?: string;
  imageAlt?: string;
};

const SITE_NAME = 'Kathy Curr Energy Healing';
const LEGAL_NAME = "Kathy's Energy Healing, LLC";
const DEFAULT_IMAGE = 'KEH_PrimarySymbol_ArchTree_Charcoal_v04_clean.png';
const DEFAULT_IMAGE_ALT = 'Kathy Curr Energy Healing arched tree logo';

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    fullTitle: 'Reiki & Angel Guidance in Huron, SD | Kathy Curr',
    description:
      'Kathy Curr offers in-person Reiki in Huron, South Dakota, plus in-person or virtual angel guidance with limited regional availability across SD, ND, and MN.',
    breadcrumb: 'Home',
  },
  '/about': {
    fullTitle: 'Kathy Curr | Reiki Practitioner in Huron, SD',
    description:
      'Meet Kathy Curr, a certified Level II Reiki practitioner and retired special education educator in Huron, South Dakota, offering Reiki and angel guidance.',
    breadcrumb: 'Meet the Practitioner',
    ogImage: 'KEH_Photo_Headshot_Avatar_Square_WarmIvory_v04.webp',
    imageAlt: 'Portrait of Kathy Curr, Reiki and angel guidance practitioner',
  },
  '/services': {
    fullTitle: 'Reiki & Angel Guidance Services | Huron, SD',
    description:
      'Compare adult and youth Reiki treatments and angel guidance sessions with Kathy Curr, including pricing, session formats, and service-area availability.',
    breadcrumb: 'Services',
  },
  '/what-to-expect': {
    fullTitle: 'What to Expect From Reiki & Angel Guidance | Kathy Curr',
    description:
      'Learn what happens before, during, and after Reiki treatments and angel guidance sessions with Kathy Curr, including preparation and session expectations.',
    breadcrumb: 'What to Expect',
  },
  '/podcast': {
    fullTitle: 'Kathy Curr Podcast Guest Appearances | Energy Healing',
    description:
      "Watch and listen to Kathy Curr's podcast guest appearances about energy healing, intuition, emotional triggers, and spiritual guidance.",
    breadcrumb: 'Podcasts',
  },
  '/community': {
    fullTitle: 'Community, Mentorship & Collaboration | Kathy Curr',
    description:
      'Explore mentorship, podcast and media appearances, editorial work, and community collaboration opportunities with Kathy Curr.',
    breadcrumb: 'Community',
  },
  '/faq': {
    fullTitle: 'Reiki & Angel Guidance FAQ | Kathy Curr',
    description:
      'Find answers about Reiki and angel guidance with Kathy Curr, including youth participation, virtual availability, scheduling, service areas, and policies.',
    breadcrumb: 'FAQ',
  },
  '/contact': {
    fullTitle: 'Contact Kathy Curr | Reiki & Angel Guidance',
    description:
      'Contact Kathy Curr about Reiki in Huron, angel guidance, regional availability, podcast appearances, mentorship, or collaborative projects.',
    breadcrumb: 'Contact',
  },
  '/policies': {
    fullTitle: "Policies & Disclaimers | Kathy's Energy Healing",
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

  const webPage: Record<string, unknown> = {
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
  };

  if (normalizedPath === '/about') {
    webPage.mainEntity = { '@id': personId };
  }

  const graph: Record<string, unknown>[] = [webPage];

  if (normalizedPath === '/') {
    graph.push(
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: "Kathy's Energy Healing",
        publisher: { '@id': organizationId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: LEGAL_NAME,
        alternateName: SITE_NAME,
        url: `${SITE_URL}/`,
        description: routeMetadata['/'].description,
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
      mainEntityOfPage: { '@id': webPageId },
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
  ogImage,
  imageAlt,
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
  const resolvedOgImage = ogImage || pageMetadata?.ogImage || DEFAULT_IMAGE;
  const resolvedImageAlt = imageAlt || pageMetadata?.imageAlt || DEFAULT_IMAGE_ALT;
  const socialImage = /^https?:\/\//.test(resolvedOgImage)
    ? resolvedOgImage
    : absoluteAssetUrl(resolvedOgImage);
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
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={resolvedImageAlt} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData).replace(/</g, '\\u003c')}
      </script>
    </Helmet>
  );
};

export default SEO;
