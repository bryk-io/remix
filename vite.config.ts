/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['app/**/*.test.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      // To support absolute import paths for components:
      //   `import Counter from '~/lib/Counter.svelte';`
      '~': path.resolve('./app'),
    },
  },
});
