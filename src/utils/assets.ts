const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export const SITE_URL = trimTrailingSlash(
  import.meta.env.VITE_SITE_URL || 'https://workfolios.github.io/energy-healing',
);

export const assetUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}${filename.replace(/^\/+/, '')}`;

export const absoluteAssetUrl = (filename: string) =>
  `${SITE_URL}/${filename.replace(/^\/+/, '')}`;
