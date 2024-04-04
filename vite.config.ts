/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  test: {
    include: ['app/**/*.test.{js,ts,jsx,tsx}'],
    exclude: ['tests/**/*'],
    coverage: {
      provider: 'v8',
      include: ['app/**/*.{js,ts,jsx,tsx}'],
    },
  },
  resolve: {
    alias: {
      // same `paths` as tsconfig.json
      '~': path.resolve('./app'),
    },
  },
});
