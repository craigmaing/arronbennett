// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://arronbennettbuilding.co.uk',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/test-avif/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],

  redirects: {
    '/about': '/about-us',
    '/our-services': '/services'
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        avif: {
          quality: 80
        }
      }
    },
    // Enable AVIF format alongside WebP for better compression
    formats: ['avif', 'webp']
  },

  build: {
    inlineStylesheets: 'auto'
  },

  compressHTML: true,

  experimental: {
    clientPrerender: true
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
