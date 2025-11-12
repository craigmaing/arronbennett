// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// DEPLOYMENT & ADAPTER CONFIGURATION
// ===================================
// This site uses static site generation (SSG) with output: 'static'.
// No adapter is required for static deployments as Astro generates plain HTML files.
//
// Per Astro documentation:
// - Adapters are only needed for SSR (server-side rendering) with output: 'server' or output: 'hybrid'
// - Static sites work with any static host (Netlify, Vercel, GitHub Pages, etc.)
// - If SSR is needed in the future, add an adapter like @astrojs/netlify or @astrojs/vercel
//
// Reference: https://docs.astro.build/en/reference/adapter-reference/

// STYLING APPROACH
// ================
// This project uses a hybrid styling strategy for optimal performance:
//
// 1. Tailwind CSS v4 (via @tailwindcss/vite plugin)
//    - Utility-first approach for rapid development
//    - Configured in vite.plugins below
//    - Imported in BaseLayout.astro via @import "tailwindcss"
//    - Modern v4 approach replaces legacy @astrojs/tailwind integration
//
// 2. Scoped CSS (<style> tags in .astro components)
//    - Component-specific styles that don't need global scope
//    - Automatically scoped to prevent conflicts
//    - Used for complex component-specific styling
//
// 3. Critical CSS (inline <style is:inline> in BaseLayout.astro)
//    - Above-the-fold styles for instant rendering
//    - Reduces First Contentful Paint (FCP)
//    - Includes reset, layout, and hero section styles
//
// 4. Legacy CSS (legacy.css)
//    - Preserves original site styling for visual accuracy
//    - Imported globally in BaseLayout.astro
//
// This combination provides:
// - Fast development with Tailwind utilities
// - Component isolation with scoped styles
// - Optimal performance with critical CSS
// - Visual consistency with legacy styles
//
// References:
// - https://docs.astro.build/en/guides/styling/
// - https://tailwindcss.com/docs/installation/framework-guides/astro

// https://astro.build/config
export default defineConfig({
  site: 'https://arronbennettbuilding.co.uk',

  // Explicit output mode for static site generation
  output: 'static',

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
    // STYLESHEET INLINING STRATEGY
    // =============================
    // Changed from 'auto' to 'always' for this small-to-medium site
    //
    // Per Astro docs (https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets):
    // - 'always': All stylesheets are inlined into <style> tags
    // - 'auto': Only stylesheets < 4kb are inlined (default since v3.0)
    // - 'never': All stylesheets are external files
    //
    // Benefits of 'always' for this site:
    // 1. Eliminates additional HTTP requests for CSS files
    // 2. Reduces render-blocking resources
    // 3. Improves First Contentful Paint (FCP) and Time to Interactive (TTI)
    // 4. Site has manageable CSS size, making inlining practical
    //
    // Trade-offs:
    // - Slightly larger HTML files (acceptable for this site size)
    // - No separate CSS file caching (outweighed by HTTP request elimination)
    //
    // This optimization is recommended for sites with:
    // - Small to medium CSS bundles (< 50kb total)
    // - Focus on initial page load performance
    // - Static site generation (SSG) deployment
    inlineStylesheets: 'always'
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
