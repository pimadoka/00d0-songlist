import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        replaceAttrValues: {
          'black': 'currentColor',
        },
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
})
