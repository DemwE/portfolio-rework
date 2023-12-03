import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// noinspection JSUnusedGlobalSymbols,JSCheckFunctionSignatures
export default defineConfig({
  integrations: [tailwind()],
});