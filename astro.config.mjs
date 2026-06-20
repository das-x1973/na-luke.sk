// @ts-check
import { defineConfig } from 'astro/config';

// Static family-farm site. No SSR needed — pure static output.
export default defineConfig({
  site: 'http://localhost:4321',
});
