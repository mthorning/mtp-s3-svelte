import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import faroUploader from '@grafana/faro-rollup-plugin';

export default defineConfig({
  plugins: [
    sveltekit(),
    faroUploader({
      appName: 'mattthorningphotography.com',
      endpoint: 'https://faro-api-prod-eu-west-2.grafana.net/faro/api/v1',
      appId: '1668',
      stackId: '1085701',
      apiKey: process.env.FARO,
      gzipContents: true,
    })
  ],
});
