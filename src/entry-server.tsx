import type { ComponentProps } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes, routerBasename } from './App';

type HelmetContext = NonNullable<ComponentProps<typeof HelmetProvider>['context']>;

const routeEntry = (url: string) => {
  if (!routerBasename) return url;
  return url === '/' ? `${routerBasename}/` : `${routerBasename}${url}`;
};

export const render = (url: string) => {
  const helmetContext: HelmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter basename={routerBasename} initialEntries={[routeEntry(url)]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const head = [
    helmet?.title.toString(),
    helmet?.meta.toString(),
    helmet?.link.toString(),
    helmet?.script.toString(),
  ]
    .filter(Boolean)
    .join('\n');

  return { appHtml, head };
};
