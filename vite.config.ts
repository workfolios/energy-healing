import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const normalizeBasePath = (value: string | undefined) => {
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');

  return {
    base: normalizeBasePath(env.VITE_BASE_PATH),
    plugins: [react(), tailwindcss()],
    build: {
      target: 'es2022',
      sourcemap: false,
    },
  };
});
