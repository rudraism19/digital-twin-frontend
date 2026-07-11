import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  publicDir: 'public',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    proxy: {
      '/parent': {
        target: 'http://localhost:5174',
        changeOrigin: true
      },
      '/school': {
        target: 'http://localhost:5175',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        advisor: resolve(__dirname, 'advisor.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        login: resolve(__dirname, 'login.html')
      }
    }
  }
});
