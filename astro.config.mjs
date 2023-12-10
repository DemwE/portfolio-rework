import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), compress({
    CSS: true,
    HTML: true,
    JavaScript: true
  }), partytown()],
  site: 'https://demwe.me'
});