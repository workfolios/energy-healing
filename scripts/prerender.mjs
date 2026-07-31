import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const distDirectory = path.resolve(projectRoot, 'dist');
const prerenderDirectory = path.resolve(projectRoot, '.prerender');
const templatePath = path.join(distDirectory, 'index.html');
const serverBundlePath = path.join(prerenderDirectory, 'entry-server.js');
const siteUrl = (process.env.VITE_SITE_URL || 'https://workfolios.github.io/energy-healing').replace(/\/+$/, '');

const routes = [
  '/',
  '/about',
  '/services',
  '/what-to-expect',
  '/podcast',
  '/community',
  '/faq',
  '/contact',
  '/policies',
];

const seoBlockPattern =
  /<meta name="seo-prerender-marker" content="start"\s*\/>[\s\S]*?<meta name="seo-prerender-marker" content="end"\s*\/>/;
const rootMarkup = '<div id="root"></div>';

const renderDocument = (template, appHtml, head) => {
  if (!seoBlockPattern.test(template)) {
    throw new Error('The SEO prerender marker block was not found in dist/index.html.');
  }

  if (!template.includes(rootMarkup)) {
    throw new Error('The application root placeholder was not found in dist/index.html.');
  }

  const html = template
    .replace(seoBlockPattern, head)
    .replace(rootMarkup, `<div id="root">${appHtml}</div>`);

  if (!html.includes('<title') || !html.includes('application/ld+json')) {
    throw new Error('Prerendered output is missing required SEO metadata.');
  }

  return html;
};

const outputPathForRoute = (route) => {
  if (route === '/') return templatePath;
  return path.join(distDirectory, route.replace(/^\//, ''), 'index.html');
};

const template = await readFile(templatePath, 'utf8');

try {
  const serverEntry = await import(`${pathToFileURL(serverBundlePath).href}?v=${Date.now()}`);

  if (typeof serverEntry.render !== 'function') {
    throw new Error('The compiled server entry does not export a render function.');
  }

  for (const route of routes) {
    const { appHtml, head } = serverEntry.render(route);
    const outputPath = outputPathForRoute(route);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderDocument(template, appHtml, head), 'utf8');
  }

  const notFound = serverEntry.render('/__not-found__');
  await writeFile(
    path.join(distDirectory, '404.html'),
    renderDocument(template, notFound.appHtml, notFound.head),
    'utf8',
  );

  const sitemapEntries = routes
    .map((route) => {
      const location = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}/`;
      return `  <url><loc>${location}</loc></url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  await writeFile(path.join(distDirectory, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`Prerendered ${routes.length} public routes and a noindex 404 page.`);
} finally {
  await rm(prerenderDirectory, { recursive: true, force: true });
}
