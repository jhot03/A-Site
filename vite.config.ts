import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // This adds 404.html correctly
        404: resolve(__dirname, 'index.html'),
      }
    }
  },
  base: "",
});
