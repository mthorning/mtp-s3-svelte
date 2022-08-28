import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
    },
  },
  plugins: [sveltekit()],
});
