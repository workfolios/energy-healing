# Kathy Curr Energy Healing Website

Production website for Kathy Curr Energy Healing, built as a React 19 application with Vite, Tailwind CSS, React Router, Motion, React Helmet Async, and Formspree.

## Local Development

Requirements: Node.js 22 or a current supported LTS release.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:3000`.

## Validation

```bash
npm run check
```

This command runs TypeScript validation, creates the production Vite bundle, and prerenders every public route into static HTML in `dist/`.

The static build includes:

- Route-specific titles and meta descriptions
- Canonical URLs
- Open Graph and Twitter metadata
- Organization, WebSite, WebPage, Person, Service, and breadcrumb JSON-LD where applicable
- Hydratable page content for all public routes
- A noindex custom `404.html`
- A canonical sitemap for the currently published website URL

## Static Route Output

The build generates static HTML for:

- `/`
- `/about/`
- `/services/`
- `/what-to-expect/`
- `/podcast/`
- `/community/`
- `/faq/`
- `/contact/`
- `/policies/`

Each route is emitted as a directory-level `index.html`, allowing static hosts to return a successful page response without relying on a 404 fallback for valid routes. React hydrates the prerendered markup in the browser.

## Deployment Configuration

The currently published and SEO-governing website URL is:

```text
https://workfolios.github.io/energy-healing/
```

Current deployment variables:

- `VITE_BASE_PATH=/energy-healing/`
- `VITE_SITE_URL=https://workfolios.github.io/energy-healing`

`VITE_SITE_URL` controls canonical URLs, sitemap entries, structured-data identifiers, social metadata, and absolute image URLs. It must continue to match the publicly accessible website until a custom domain has been purchased, connected, and verified.

The included GitHub Pages workflow builds and publishes the site from the `main` branch. GitHub Pages is configured to use **GitHub Actions** as its source.

## Live Deployment

- Published website: `https://workfolios.github.io/energy-healing/`
- Deployment workflow: `.github/workflows/deploy-pages.yml`
- Production branch: `main`

The deployment smoke test verifies that all public routes return successful responses, contain prerendered page content, use the current GitHub Pages canonical URL, include JSON-LD, and expose a noindex 404 page.

## Search Engine Operations

After material content or metadata changes:

1. Verify `https://workfolios.github.io/energy-healing/robots.txt` and `https://workfolios.github.io/energy-healing/sitemap.xml` are accessible.
2. Add or confirm the URL-prefix property `https://workfolios.github.io/energy-healing/` in Google Search Console.
3. Submit `https://workfolios.github.io/energy-healing/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
4. Use URL Inspection to validate the homepage, Services, About, and Contact pages.
5. Request recrawling after significant title, service, location, or structured-data updates.
6. Test JSON-LD with Google Rich Results Test and Schema.org Validator.

When a custom domain is purchased and connected, update `VITE_SITE_URL`, the canonical sitemap source, the workflow verification URLs, and search-engine properties in one controlled migration. Do not point SEO signals to a custom domain before it is publicly active.

Do not add a street address to structured data unless Kathy has approved that address for public display. The current schema uses service regions and the publicly stated Huron, South Dakota location without publishing a street address.

## Contact Form

The smart contact form submits directly to Formspree endpoint `mrenjbda`. No API key or server process is required in the repository.
