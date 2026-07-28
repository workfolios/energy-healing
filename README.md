# Kathy Curr Energy Healing Website

Production website for Kathy Curr Energy Healing, built as a React 19 single-page application with Vite, Tailwind CSS, React Router, Motion, and Formspree.

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

This command runs TypeScript validation and creates the production build in `dist/`. The build also creates `dist/404.html` so direct client-side routes can recover on static hosts that use a 404 fallback, including GitHub Pages.

## Deployment Configuration

The application supports both a custom domain and GitHub Pages project hosting.

- `VITE_BASE_PATH=/` for the production custom domain.
- `VITE_BASE_PATH=/energy-healing/` for `workfolios.github.io/energy-healing/`.
- `VITE_SITE_URL=https://kathysenergyhealing.com` controls canonical and social metadata.

The included GitHub Pages workflow builds and publishes the site from the `main` branch. GitHub Pages is configured to use **GitHub Actions** as its source.

## Live Deployment

- GitHub Pages preview: `https://workfolios.github.io/energy-healing/`
- Deployment workflow: `.github/workflows/deploy-pages.yml`
- Production branch: `main`

## Contact Form

The smart contact form submits directly to Formspree endpoint `mrenjbda`. No API key or server process is required in the repository.
