# Performance Optimization Guide
## Arron Bennett Building - Astro Website

---

## Target Metrics (Lighthouse Scores)

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Performance | 95+ | >90 |
| Accessibility | 95+ | >90 |
| Best Practices | 95+ | >90 |
| SEO | 100 | >95 |

### Core Web Vitals

| Metric | Target | Good | Needs Improvement | Poor |
|--------|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | <1.5s | <2.5s | 2.5s-4s | >4s |
| FID (First Input Delay) | <50ms | <100ms | 100ms-300ms | >300ms |
| CLS (Cumulative Layout Shift) | <0.05 | <0.1 | 0.1-0.25 | >0.25 |
| FCP (First Contentful Paint) | <1.0s | <1.8s | 1.8s-3s | >3s |
| TBT (Total Blocking Time) | <150ms | <200ms | 200ms-600ms | >600ms |
| SI (Speed Index) | <2.0s | <3.4s | 3.4s-5.8s | >5.8s |

---

## 1. Image Optimization

### Current WordPress Issues (Baseline)
- ❌ Multiple image formats (JPEG, PNG)
- ❌ No WebP/AVIF support
- ❌ Inconsistent lazy loading
- ❌ Large file sizes (500KB-2MB per image)
- ❌ No responsive srcset on all images
- ❌ 100+ images loaded on some pages

### Astro Implementation ✅

#### Use OptimizedImage Component

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<!-- Optimized for performance -->
<OptimizedImage
  src="/images/stone-masonry-cornwall.jpg"
  alt="Traditional stone masonry work in Cornwall by Arron Bennett"
  width={800}
  height={600}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

#### Configuration (astro.config.mjs)

```javascript
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
```

#### Image Optimization Checklist

- [ ] Convert all images to WebP format (80% quality)
- [ ] Generate AVIF as fallback for modern browsers
- [ ] Implement responsive images with srcset
- [ ] Lazy load all below-fold images
- [ ] Eager load hero images only
- [ ] Compress images to <100KB where possible
- [ ] Use appropriate dimensions (no oversized images)
- [ ] Add width/height to prevent layout shift

#### Image Size Targets

| Image Type | Max Size | Format | Quality |
|------------|----------|--------|---------|
| Hero Images | 150KB | WebP | 85% |
| Service Cards | 50KB | WebP | 80% |
| Project Gallery | 80KB | WebP | 80% |
| Thumbnails | 20KB | WebP | 75% |
| Icons/Logos | 10KB | SVG/WebP | 90% |

---

## 2. Font Optimization

### Current WordPress Issues
- ❌ 4-5 Google Font families loaded
- ❌ 16+ font weights loaded
- ❌ External CDN requests (render-blocking)
- ❌ No font-display strategy
- ❌ FOIT (Flash of Invisible Text)

### Astro Implementation ✅

#### Self-Hosted Fonts Strategy

**Download and host locally:**
1. Roboto (400, 700 only)
2. Open Sans (400, 600) - if needed

**File structure:**
```
public/
  fonts/
    roboto-v30-latin-regular.woff2
    roboto-v30-latin-700.woff2
```

#### Font Loading CSS

```css
/* Critical CSS in BaseLayout.astro */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Prevent invisible text */
  src: local('Roboto'),
       url('/fonts/roboto-v30-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'),
       url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
}

/* System font fallback */
:root {
  --font-sans: 'Roboto', -apple-system, BlinkMacSystemFont,
               'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
```

#### Preload Critical Fonts

```html
<!-- In BaseLayout.astro <head> -->
<link
  rel="preload"
  href="/fonts/roboto-v30-latin-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

#### Font Optimization Checklist

- [ ] Reduce to 2 font families maximum
- [ ] Use only 2-3 weights per family
- [ ] Self-host all fonts (no CDN)
- [ ] Implement font-display: swap
- [ ] Preload critical fonts
- [ ] Use woff2 format only
- [ ] Subset fonts to Latin characters
- [ ] Remove unused glyphs

---

## 3. CSS Optimization

### Current WordPress Issues
- ❌ Multiple CSS files (194KB+)
- ❌ Duplicate CSS from plugins
- ❌ Unused CSS rules (>60%)
- ❌ No critical CSS inlining
- ❌ Render-blocking stylesheets

### Astro Implementation ✅

#### Tailwind CSS Strategy

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#021f59',
        accent: '#F27A5E',
      },
    },
  },
  // Purge unused styles
  purge: {
    enabled: true,
    content: ['./src/**/*.{astro,html}'],
  },
};
```

#### Critical CSS Inlining

```astro
<!-- In BaseLayout.astro -->
<style is:inline>
  /* Critical above-the-fold CSS */
  :root {
    --color-primary: #021f59;
    --color-accent: #F27A5E;
  }

  body {
    font-family: var(--font-sans);
    line-height: 1.6;
    color: #1a1a1a;
  }

  /* Hero section styles */
  .hero {
    min-height: 60vh;
    background: var(--color-primary);
  }
</style>
```

#### CSS Optimization Checklist

- [ ] Implement Tailwind CSS with purging
- [ ] Inline critical CSS (<14KB)
- [ ] Defer non-critical CSS
- [ ] Remove unused CSS rules
- [ ] Minimize CSS bundle size
- [ ] Use CSS containment for components
- [ ] Avoid @import (use bundler)

---

## 4. JavaScript Optimization

### Current WordPress Issues
- ❌ jQuery (30KB+)
- ❌ 25+ JavaScript libraries
- ❌ Heavy page builders (WPBakery, Revolution Slider)
- ❌ Render-blocking scripts
- ❌ No code splitting

### Astro Implementation ✅

#### Minimal JavaScript Strategy

**Astro's zero-JS by default approach:**
- Server-side rendering (SSR)
- No client-side framework overhead
- JavaScript only when needed (islands)

#### Interactive Components

```astro
---
// ContactForm.astro
import { useState } from 'react';
---

<!-- Only load JS for this component -->
<div client:visible>
  <ContactForm />
</div>
```

#### Script Loading Strategy

```html
<!-- Defer non-critical scripts -->
<script defer src="/js/analytics.js"></script>

<!-- Async for independent scripts -->
<script async src="/js/chat-widget.js"></script>

<!-- Module for modern browsers -->
<script type="module" src="/js/carousel.js"></script>
```

#### JavaScript Checklist

- [ ] Use Astro islands for interactivity
- [ ] No jQuery (use vanilla JS if needed)
- [ ] Defer non-critical scripts
- [ ] Lazy load below-fold components
- [ ] Code split per page
- [ ] Minimize third-party scripts
- [ ] Use client:visible for below-fold
- [ ] Implement Intersection Observer for lazy loading

---

## 5. Resource Hints & Preloading

### Implementation

```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />

<!-- Preconnect to critical origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload critical resources -->
<link rel="preload" href="/fonts/roboto-regular.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/images/hero.webp" as="image" />

<!-- Prefetch next likely page -->
<link rel="prefetch" href="/services" />
```

---

## 6. Caching Strategy

### Static Assets (Netlify/Vercel)

```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

### Service Worker (Optional)

```javascript
// public/sw.js
const CACHE_VERSION = 'v1';
const CACHE_ASSETS = [
  '/',
  '/services',
  '/projects',
  '/contact',
  '/css/main.css',
  '/fonts/roboto-regular.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CACHE_ASSETS))
  );
});
```

---

## 7. Build Optimization

### Astro Build Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  build: {
    inlineStylesheets: 'auto', // Inline small CSS
    split: true, // Code splitting
  },
  compressHTML: true, // Minify HTML
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks
            'vendor': ['react', 'react-dom'],
          },
        },
      },
    },
  },
});
```

---

## 8. View Transitions

### Implementation

```astro
---
import { ViewTransitions } from 'astro:transitions';
---

<head>
  <ViewTransitions />
</head>
```

**Benefits:**
- Smooth page transitions
- Perceived performance improvement
- Reduced layout shift
- Progressive enhancement

---

## 9. Reduce Third-Party Scripts

### Current WordPress Issues
- ❌ Google Analytics (vanilla)
- ❌ Multiple tracking pixels
- ❌ Social media widgets
- ❌ Chat widgets
- ❌ Ad networks

### Optimization Strategy

#### Use Partytown for Analytics

```astro
---
import { Partytown } from '@astrojs/partytown';
---

<head>
  <Partytown />

  <!-- Google Analytics in web worker -->
  <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXX"></script>
</head>
```

**Benefits:**
- Runs in web worker
- No main-thread blocking
- Improved TBT scores

---

## 10. Monitoring & Testing

### Lighthouse CI Integration

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://arronbennettbuilding.co.uk
            https://arronbennettbuilding.co.uk/services
          uploadArtifacts: true
          temporaryPublicStorage: true
```

### Manual Testing Tools

1. **PageSpeed Insights** - https://pagespeed.web.dev/
2. **WebPageTest** - https://www.webpagetest.org/
3. **Chrome DevTools** - Lighthouse tab
4. **GTmetrix** - https://gtmetrix.com/

### Monitoring Checklist

- [ ] Set up Lighthouse CI
- [ ] Monitor Core Web Vitals in GSC
- [ ] Track performance in Google Analytics
- [ ] Weekly Lighthouse audits
- [ ] Monitor bundle sizes
- [ ] Check for regression after updates

---

## 11. Accessibility Performance

### ARIA Landmarks

```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary">
<footer role="contentinfo">
```

### Keyboard Navigation

```css
/* Visible focus states */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Skip to main content */
.skip-link {
  position: absolute;
  left: -9999px;
}

.skip-link:focus {
  left: 0;
  top: 0;
  z-index: 999;
}
```

---

## 12. Performance Budget

### Targets per Page

| Resource | Budget | Current (WP) | Target (Astro) |
|----------|--------|--------------|----------------|
| Total Page Size | 500KB | ~1.2MB | <350KB |
| HTML | 50KB | 229KB | <30KB |
| CSS | 50KB | 194KB | <20KB |
| JavaScript | 100KB | 179KB | <30KB |
| Images | 300KB | 500KB+ | <250KB |
| Fonts | 50KB | 150KB | <40KB |

### Per-Component Budgets

- Hero section: <100KB
- Service cards: <50KB each
- Testimonials: <30KB each
- Project gallery: <200KB (lazy loaded)

---

## 13. Expected Performance Gains

### Lighthouse Score Projections

| Metric | Current (WordPress) | Target (Astro) | Improvement |
|--------|-------------------|----------------|-------------|
| Performance | 60-70 | 95+ | +35 points |
| Accessibility | 80-85 | 95+ | +15 points |
| Best Practices | 75-80 | 95+ | +20 points |
| SEO | 85-90 | 100 | +15 points |

### Core Web Vitals Improvements

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| LCP | 3-4s | <1.5s | -60% |
| FID | 200-300ms | <50ms | -75% |
| CLS | 0.15-0.25 | <0.05 | -80% |
| FCP | 2-3s | <1.0s | -65% |
| TBT | 600ms+ | <150ms | -75% |

---

## 14. Deployment Optimization

### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-lighthouse"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### CDN & Compression

- ✅ Brotli compression (auto on Netlify/Vercel)
- ✅ HTTP/2 push for critical resources
- ✅ Edge caching for static assets
- ✅ Global CDN distribution

---

## 15. Continuous Optimization

### Monthly Review Checklist

- [ ] Run Lighthouse audits on all key pages
- [ ] Review bundle sizes
- [ ] Check for new Core Web Vitals issues
- [ ] Analyze real user metrics (CrUX)
- [ ] Review third-party scripts
- [ ] Check for image optimization opportunities
- [ ] Monitor page load times
- [ ] Review accessibility scores

### Performance Regression Prevention

1. **Automated Lighthouse CI** on every PR
2. **Bundle size checks** (alert if >10% increase)
3. **Performance budgets** enforced in build
4. **Real user monitoring** (RUM) with Google Analytics

---

## Summary: Key Performance Wins

### Astro Advantages Over WordPress

1. **Static Site Generation** - Pre-rendered HTML (no server processing)
2. **Zero JavaScript by Default** - Only load JS when needed
3. **Island Architecture** - Partial hydration for interactivity
4. **Automatic Code Splitting** - Smaller bundles per page
5. **Built-in Image Optimization** - WebP/AVIF with Sharp
6. **View Transitions** - Smooth navigation without SPA overhead
7. **No Plugin Bloat** - Clean, purpose-built code
8. **Modern Build Pipeline** - Vite for fast builds and HMR

### Target Achievement

**Lighthouse Scores: 95+ across all metrics**

**Core Web Vitals:**
- ✅ LCP: <1.5s (60% faster)
- ✅ FID: <50ms (75% faster)
- ✅ CLS: <0.05 (80% better)

**Page Weight: <350KB (70% reduction)**

**Load Time: <2s (65% faster)**

---

**Last Updated:** October 2025
**Version:** 1.0
**Owner:** Performance Engineering Team
