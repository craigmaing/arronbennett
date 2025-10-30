# Image Architecture Documentation

## Overview
The Arron Bennett Astro site uses a dual image management approach to optimize performance while maintaining flexibility.

## Image Registry System (Optimized Images)

### Location
- **Source**: `src/assets/images/projects/**/*.{jpg,jpeg,png,webp}`
- **Registry**: `src/data/imageRegistry.ts`

### What Goes Through Image Registry
All project and content images that benefit from optimization:
- Project gallery images
- Service images
- About page images
- Homepage project showcases
- Any content images displayed in the main body of pages

### How It Works
1. Images are imported dynamically using `import.meta.glob()`
2. The `getProjectImage()` function retrieves images by path
3. Astro's Image component optimizes them at build time
4. Images are converted to AVIF format for optimal performance

### Files Using Image Registry
- ✅ `src/pages/index.astro` - Homepage project images
- ✅ `src/pages/about-us.astro` - About page images
- ✅ `src/pages/services.astro` - Service card images (via data/services.ts)
- ✅ `src/data/services.ts` - All 9 services use getProjectImage()
- ✅ `src/data/projects.ts` - All project data

## Public Directory (Static Assets)

### Location
- **Path**: `public/images/`

### What Stays in Public
Assets that should remain static and don't need optimization:
- Logo files (`/images/logo/ab-building-contractor-1.jpg`)
- Favicons and app icons
- Open Graph/social media preview images
- PDF documents or other non-image assets
- External assets that must maintain specific URLs

### Files Using Public Images
- `src/components/Header.astro` - Logo image (appropriate for branding)
- Meta tags for social sharing

## Content Collections (Deprecated for Images)

### Status
- **Location**: `src/content/services/*.md`
- **Status**: NOT USED - Services page now uses `src/data/services.ts`
- **Note**: These markdown files contain `/images/` paths in frontmatter but are not rendered anywhere in the build

## Benefits of This Architecture

### Performance
- **AVIF Format**: 50% smaller file sizes than JPEG
- **Lazy Loading**: Built-in with Astro Image component
- **Responsive Images**: Automatic srcset generation
- **Build-time Optimization**: No runtime overhead

### Developer Experience
- **Type Safety**: ImageMetadata types for all optimized images
- **Centralized Management**: Single registry file
- **Easy Updates**: Just drop images in projects folder
- **Consistent API**: getProjectImage() function

## Migration Checklist

### Completed
- ✅ Homepage (index.astro) - Using Image component with registry
- ✅ About Us page - Using Image component with registry
- ✅ Services data - All 9 services using getProjectImage()
- ✅ Services page - Updated to use data/services.ts instead of content collection

### Remaining in Public (Intentionally)
- ✅ Logo images - Branding assets that should stay consistent
- ✅ Favicon/icons - Browser requirements
- ✅ OG images - Social media preview images

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
# Images will be optimized and converted to AVIF during build
```

### Preview Production Build
```bash
npm run preview
# Test the optimized build locally
```

## Adding New Images

### For Optimized Images
1. Add image to `src/assets/images/projects/[folder]/`
2. Use in component:
```astro
---
import { Image } from 'astro:assets';
import { getProjectImage } from '../data/imageRegistry';

const myImage = getProjectImage('folder/image.jpg');
---

<Image
  src={myImage}
  alt="Description"
  width={800}
  height={600}
  format="avif"
/>
```

### For Static Assets
1. Add to `public/images/`
2. Reference directly: `src="/images/asset.jpg"`

## Performance Metrics

Expected improvements after AVIF optimization:
- **File Size**: 40-50% reduction
- **LCP (Largest Contentful Paint)**: < 2.5s
- **Overall Page Weight**: 30-40% reduction
- **Lighthouse Score**: 95+ performance