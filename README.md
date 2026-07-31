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
- A canonical production-domain `sitemap.xml`

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

The application supports both a custom domain and GitHub Pages project hosting.

- `VITE_BASE_PATH=/` for the production custom domain.
- `VITE_BASE_PATH=/energy-healing/` for `workfolios.github.io/energy-healing/`.
- `VITE_SITE_URL=https://kathysenergyhealing.com` controls canonical, sitemap, structured-data, and social metadata.

The included GitHub Pages workflow builds and publishes the site from the `main` branch. GitHub Pages is configured to use **GitHub Actions** as its source.

## Live Deployment

- GitHub Pages preview: `https://workfolios.github.io/energy-healing/`
- Deployment workflow: `.github/workflows/deploy-pages.yml`
- Production branch: `main`

The deployment smoke test verifies that all public routes return successful responses, contain prerendered page content, use the correct production canonical URL, include JSON-LD, and expose a noindex 404 page.

## Search Engine Operations

After material content or metadata changes:

1. Confirm the production custom domain resolves to the current deployment.
2. Verify `https://kathysenergyhealing.com/robots.txt` and `https://kathysenergyhealing.com/sitemap.xml` are accessible.
3. Submit the sitemap in Google Search Console and Bing Webmaster Tools.
4. Use URL Inspection to validate the homepage, Services, About, and Contact pages.
5. Request recrawling after significant title, service, location, or structured-data updates.
6. Test JSON-LD with Google Rich Results Test and Schema.org Validator.

Do not add a street address to structured data unless Kathy has approved that address for public display. The current schema uses service regions and the publicly stated Huron, South Dakota location without publishing a street address.

## Contact Form

The smart contact form submits directly to Formspree endpoint `mrenjbda`. No API key or server process is required in the repository.
