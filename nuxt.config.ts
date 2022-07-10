import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  markdown: {
    toc: {
      depth: 3,
      searchDepth: 3,
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
  ssr: false,
});
