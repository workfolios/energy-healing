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
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'KEH_PrimarySymbol_ArchTree_Charcoal_v04_clean.png',
  noIndex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteTitle = 'Kathy Curr | Reiki & Angel Guidance';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Providing compassionate Reiki energy healing treatments and affirming angel guidance advising sessions for grounded, balanced restoration.';
  const defaultKeywords = 'reiki, angel guidance, energy healing, spiritual advisor, intuitive advisor, huron sd, south dakota reiki, distance healing, youth reiki, mentorship';
  const canonicalUrl = canonical || `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
  const socialImage = /^https?:\/\//.test(ogImage) ? ogImage : absoluteAssetUrl(ogImage);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
};

export default SEO;
