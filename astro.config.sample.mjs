// Sample Astro Configuration for Projects Gallery
// Copy this to astro.config.mjs and customize as needed

import { defineConfig } from 'astro/config';

// Optional integrations for enhanced functionality
// Uncomment and install as needed:
// npm install @astrojs/image
// npm install @astrojs/sitemap
// npm install @astrojs/tailwind

// import image from '@astrojs/image';
// import sitemap from '@astrojs/sitemap';
// import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Site URL for production
  site: 'https://arronbennett.com',

  // Base path if deployed to subdirectory
  // base: '/projects',

  // Output directory
  outDir: './dist',

  // Integrations
  integrations: [
    // Uncomment when ready to use:

    // Image optimization
    // image({
    //   serviceEntryPoint: '@astrojs/image/sharp',
    //   cacheDir: './.cache/image',
    //   logLevel: 'info',
    // }),

    // Sitemap generation
    // sitemap(),

    // Tailwind CSS (if using)
    // tailwind({
    //   config: { applyBaseStyles: false }
    // }),
  ],

  // Build options
  build: {
    // Assets directory
    assets: '_astro',

    // Inline assets smaller than this size
    inlineStylesheets: 'auto',
  },

  // Server options for development
  server: {
    port: 4321,
    host: true, // Listen on all addresses
  },

  // Vite configuration for advanced customization
  vite: {
    build: {
      // Adjust chunk size warnings if needed
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      // Pre-bundle dependencies
      include: [],
    },
  },
});
