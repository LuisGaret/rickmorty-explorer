import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        characters: resolve(__dirname, 'src/characters/index.html'),
        episodes: resolve(__dirname, 'src/episodes/index.html'),
        character: resolve(__dirname, 'src/character/index.html'),
      },
    },
    outDir: 'dist',
  },
});
