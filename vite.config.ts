import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', 
    setupFiles: './src/setupTests.ts', 
    coverage: {
      reporter: ['text', 'json', 'html'], 
      provider: 'v8', 
    },
  },
  build: {
    outDir: 'build', 
    emptyOutDir: true, 
  },
});