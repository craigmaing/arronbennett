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
      serialize(item) {
        // Homepage - highest priority
        if (item.url === 'https://arronbennettbuilding.co.uk/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Important service/contact pages
        else if (
          item.url.includes('/services/') ||
          item.url.includes('/contact-us/') ||
          item.url.includes('/about-us/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Project listing page
        else if (item.url.endsWith('/our-projects/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Individual project pages
        else if (item.url.includes('/our-projects/') && !item.url.endsWith('/our-projects/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Legal pages
        else if (
          item.url.includes('/privacy-policy/') ||
          item.url.includes('/terms-and-conditions/') ||
          item.url.includes('/service-terms/') ||
          item.url.includes('/terms-of-use/')
        ) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        // Thank you page
        else if (item.url.includes('/thank-you/')) {
          item.priority = 0.2;
          item.changefreq = 'yearly';
        }
        // Default for any other pages
        else {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }

        item.lastmod = new Date();
        return item;
      }
    })
  ],

  redirects: {
    '/about': '/about-us'
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false
      }
    }
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
