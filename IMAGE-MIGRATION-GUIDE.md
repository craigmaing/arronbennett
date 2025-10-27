# Image Migration Guide - Arron Bennett Building Website

**Complete guide for migrating and organizing all website images**

---

## Table of Contents
1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Image Inventory](#image-inventory)
4. [Image Requirements](#image-requirements)
5. [Current Code References](#current-code-references)
6. [Migration Checklist](#migration-checklist)
7. [Optimization Guidelines](#optimization-guidelines)

---

## Overview

This guide documents the complete image structure for the Arron Bennett Building website rebuild. The site requires **100+ images** across multiple categories.

### Quick Stats
- **Total Images Needed**: 100+
- **Logo**: 1-3 variants
- **Service Images**: 9 images
- **Testimonial Photos**: 5 images (optional)
- **Project Photos**: 45+ images (15 projects × 3-4 images each)
- **Background Images**: 4 hero/section backgrounds

### Source Reference
Original site assets documented in:
- `C:\Users\Fearn\ab1\extracted-site\ASSET-INVENTORY.md`
- Screenshots available in `C:\Users\Fearn\ab1\extracted-site\screenshots\`

---

## Directory Structure

```
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\
├── logo/                    # Company logos and branding
│   ├── logo.svg            # Primary logo (180x107px)
│   ├── logo-white.svg      # White variant for dark backgrounds
│   ├── logo-icon.svg       # Icon-only version
│   └── README.md
│
├── services/               # Service category images (9 total)
│   ├── full-builds.jpg
│   ├── renovations.jpg
│   ├── kitchen-bathroom.jpg
│   ├── landscaping.jpg
│   ├── excavator.jpg
│   ├── masonry.jpg
│   ├── project-management.jpg
│   ├── renewable-energy.jpg
│   ├── lime-mortars.jpg
│   └── README.md
│
├── testimonials/           # Client profile photos (5 total)
│   ├── shannon.jpg
│   ├── roseland-kitchen.jpg
│   ├── roseland-landscaping.jpg
│   ├── tom-laura.jpg
│   ├── neil-bridle.jpg
│   └── README.md
│
├── projects/               # Portfolio photography (45+ images)
│   ├── stone-wall-1.jpg
│   ├── stone-wall-2.jpg
│   ├── cottage-exterior.jpg
│   ├── [... see full list below ...]
│   └── README.md
│
├── backgrounds/            # Hero and section backgrounds (4 images)
│   ├── hero-background.jpg
│   ├── working-together.jpg
│   ├── about-background.jpg
│   ├── contact-background.jpg
│   └── README.md
│
└── placeholders/           # Temporary development placeholders
    └── README.md
```

---

## Image Inventory

### 1. Logo Images (Priority: CRITICAL)

| Filename | Dimensions | Usage | Status |
|----------|------------|-------|--------|
| `logo.svg` | 180×107px | Header, footer, schema | ⚠️ NEEDED |
| `logo-white.svg` | 180×107px | Dark backgrounds | ⚠️ NEEDED |
| `logo-icon.svg` | Square | Mobile, favicon | ⚠️ NEEDED |

**Current References**:
- `src/pages/index.astro` line 68: `/images/logo.svg`
- `src/pages/index.astro` line 43: `/images/logo.jpg` (schema)
- `src/components/Header.astro`: Logo prop expected

### 2. Service Images (Priority: HIGH)

| Filename | Service | Dimensions | Status |
|----------|---------|------------|--------|
| `full-builds.jpg` | Full Builds | 800×600px | ⚠️ NEEDED |
| `renovations.jpg` | Home Renovations | 800×600px | ⚠️ NEEDED |
| `kitchen-bathroom.jpg` | Kitchen & Bathroom Renovations | 800×600px | ⚠️ NEEDED |
| `landscaping.jpg` | Hard Landscaping | 800×600px | ⚠️ NEEDED |
| `excavator.jpg` | Mini Excavator & Waste Away | 800×600px | ⚠️ NEEDED |
| `masonry.jpg` | Stone & Block Masonry | 800×600px | ⚠️ NEEDED |
| `project-management.jpg` | Project Management | 800×600px | ⚠️ NEEDED |
| `renewable-energy.jpg` | Ground/Air Source Installations | 800×600px | ⚠️ NEEDED |
| `lime-mortars.jpg` | Traditional Lime Mortars | 800×600px | ⚠️ NEEDED |

**Current References**:
- `src/data/services.ts`: Service data structure (no image fields yet)
- `src/components/ServiceCard.astro`: Uses icon-based design (could add image prop)

**Note**: Currently, service cards use SVG icons. Consider adding image support or keeping icon-based design.

### 3. Testimonial Photos (Priority: MEDIUM - Optional)

| Filename | Client | Dimensions | Status |
|----------|--------|------------|--------|
| `shannon.jpg` | Shannon, Penryn | 150×150px | 🔵 OPTIONAL |
| `roseland-kitchen.jpg` | Roseland Client | 150×150px | 🔵 OPTIONAL |
| `roseland-landscaping.jpg` | Roseland Client | 150×150px | 🔵 OPTIONAL |
| `tom-laura.jpg` | Tom and Laura | 150×150px | 🔵 OPTIONAL |
| `neil-bridle.jpg` | Neil Bridle | 150×150px | 🔵 OPTIONAL |

**Current References**:
- `src/data/testimonials.ts`: No image field currently
- `src/components/TestimonialCard.astro` line 82-94: Supports optional image prop with fallback initials

**Fallback Behavior**: Component displays first initial in colored circle if no image provided.

### 4. Project Portfolio Images (Priority: CRITICAL)

**15 projects requiring 45+ total images** (3-4 images each)

#### Stone Masonry Projects (4 projects, 12 images)

| Project ID | Images Required | Status |
|------------|----------------|--------|
| `tregenna-stone-wall` | stone-wall-1.jpg, stone-wall-2.jpg, stone-wall-before.jpg | ⚠️ NEEDED |
| `garden-wall-newquay` | garden-wall-1.jpg, garden-wall-2.jpg, garden-patio.jpg | ⚠️ NEEDED |
| `retaining-wall-looe` | retaining-wall-1.jpg, retaining-wall-2.jpg, retaining-wall-3.jpg | ⚠️ NEEDED |
| `church-restoration` | church-wall-1.jpg, church-wall-2.jpg, church-wall-detail.jpg | ⚠️ NEEDED |

#### Renovation Projects (4 projects, 15 images)

| Project ID | Images Required | Status |
|------------|----------------|--------|
| `cottage-renovation-padstow` | cottage-exterior.jpg, cottage-interior.jpg, cottage-kitchen.jpg, cottage-before.jpg | ⚠️ NEEDED |
| `barn-conversion-bodmin` | barn-exterior.jpg, barn-interior.jpg, barn-kitchen.jpg, barn-before.jpg | ⚠️ NEEDED |
| `extension-truro` | extension-exterior.jpg, extension-interior.jpg, extension-before.jpg | ⚠️ NEEDED |
| `farmhouse-renovation` | farmhouse-1.jpg, farmhouse-2.jpg, farmhouse-interior.jpg, farmhouse-before.jpg | ⚠️ NEEDED |

#### New Build Projects (3 projects, 9 images)

| Project ID | Images Required | Status |
|------------|----------------|--------|
| `eco-home-falmouth` | eco-home-exterior.jpg, eco-home-interior.jpg, eco-home-construction.jpg | ⚠️ NEEDED |
| `new-build-hayle` | coastal-home-1.jpg, coastal-home-2.jpg, coastal-home-interior.jpg | ⚠️ NEEDED |
| `studio-build` | studio-exterior.jpg, studio-interior.jpg, studio-construction.jpg | ⚠️ NEEDED |

#### Landscaping Projects (4 projects, 12 images)

| Project ID | Images Required | Status |
|------------|----------------|--------|
| `courtyard-garden` | courtyard-1.jpg, courtyard-2.jpg, courtyard-plants.jpg | ⚠️ NEEDED |
| `terrace-garden-fowey` | terrace-garden-1.jpg, terrace-garden-2.jpg, terrace-steps.jpg | ⚠️ NEEDED |
| `driveway-entrance` | entrance-1.jpg, entrance-2.jpg, entrance-gates.jpg | ⚠️ NEEDED |
| `patio-seating` | patio-1.jpg, patio-2.jpg, patio-firepit.jpg | ⚠️ NEEDED |

**Current References**:
- `src/data/projects.ts`: Lines 29-256 define all image paths
- `src/components/ProjectCard.astro` line 18: Uses `project.images[0]` for card
- `src/pages/projects.astro`: Displays project gallery grid

### 5. Background Images (Priority: HIGH)

| Filename | Usage | Dimensions | Status |
|----------|-------|------------|--------|
| `hero-background.jpg` | Homepage hero section | 1920×1080px | ⚠️ NEEDED |
| `working-together.jpg` | Homepage "Working Together" section | 800×600px | ⚠️ NEEDED |
| `about-background.jpg` | About page hero | 1920×1080px | ⚠️ NEEDED |
| `contact-background.jpg` | Contact page header | 1920×600px | ⚠️ NEEDED |

**Current References**:
- `src/pages/index.astro` line 196: `/images/working-together.jpg`
- `src/components/Hero.astro`: May reference background images

---

## Image Requirements

### General Specifications

| Category | Dimensions | Format | Quality | Max Size |
|----------|------------|--------|---------|----------|
| **Logos** | 180×107px | SVG/PNG | N/A | 50KB |
| **Service Cards** | 800×600px | JPG/WebP | 80-90% | 200KB |
| **Testimonials** | 150×150px | JPG/WebP | 70-80% | 50KB |
| **Projects** | 1200×900px | JPG/WebP | 85-90% | 400KB |
| **Hero Backgrounds** | 1920×1080px | JPG/WebP | 85-90% | 500KB |
| **Section Backgrounds** | 800×600px | JPG/WebP | 80-85% | 300KB |

### Responsive Requirements

All images should have optimized variants:
- **Desktop**: Full resolution
- **Tablet**: 75% resolution
- **Mobile**: 50% resolution

Use Astro's image optimization:
```astro
import { Image } from 'astro:assets';

<Image
  src={imagePath}
  alt="Description"
  width={800}
  height={600}
  format="webp"
  quality={85}
/>
```

### Alt Text Requirements

Every image must have descriptive alt text:
- **Projects**: "Stone wall restoration at Tregenna Castle, St Ives"
- **Services**: "Traditional Cornish stone masonry work"
- **Testimonials**: "Shannon, satisfied client from Penryn"
- **Logos**: "Arron Bennett Building Contractors logo"

---

## Current Code References

### 1. Homepage (index.astro)

```astro
Line 43:  "image": "/images/logo.jpg",
Line 68:  logo="/images/logo.svg"
Line 196: src="/images/working-together.jpg"
```

### 2. Header Component (Header.astro)

```astro
Expected prop: logo="/images/logo.svg"
logoAlt="Arron Bennett Building"
```

### 3. Hero Component (Hero.astro)

May support background image prop (check component implementation).

### 4. Service Data (services.ts)

Currently no image fields. Consider adding:
```typescript
export interface Service {
  // ... existing fields
  image?: string; // Optional image path
  icon: string;   // SVG icon identifier
}
```

### 5. Testimonial Data (testimonials.ts)

No image field currently defined. Interface exists but not used:
```typescript
export interface Testimonial {
  // ... existing fields
  image?: string; // Add this field
}
```

### 6. Projects Data (projects.ts)

**Lines 29-256**: All project image paths are defined.

Example:
```typescript
images: [
  '/images/projects/stone-wall-1.jpg',
  '/images/projects/stone-wall-2.jpg',
  '/images/projects/stone-wall-before.jpg'
]
```

### 7. Project Card Component (ProjectCard.astro)

```astro
Line 18: const mainImage = project.images[0];
Line 19: <img src={mainImage} alt={project.title} />
```

### 8. Testimonial Card Component (TestimonialCard.astro)

```astro
Lines 82-94: Supports optional image prop with fallback
{image ? (
  <img src={image} alt={`${name} profile picture`} />
) : (
  <div>/* Fallback initial */</div>
)}
```

---

## Migration Checklist

### Phase 1: Critical Path (Week 1)
- [ ] **Logo Files** (3 variants)
  - [ ] Extract logo from old site
  - [ ] Create SVG version
  - [ ] Create white variant
  - [ ] Create icon variant
  - [ ] Update favicon

- [ ] **Hero Background** (1 image)
  - [ ] Select dramatic hero image
  - [ ] Optimize for web
  - [ ] Create responsive variants
  - [ ] Test on homepage

- [ ] **Working Together Image** (1 image)
  - [ ] Professional site/team photo
  - [ ] Optimize dimensions
  - [ ] Add to homepage

### Phase 2: Project Portfolio (Week 1-2)
- [ ] **Extract Project Images from Old Site**
  - [ ] Download all work gallery images
  - [ ] Categorize by project type
  - [ ] Rename to match data structure
  - [ ] Optimize file sizes

- [ ] **Organize Projects** (45+ images)
  - [ ] 4 Stone masonry projects (12 images)
  - [ ] 4 Renovation projects (15 images)
  - [ ] 3 New build projects (9 images)
  - [ ] 4 Landscaping projects (12 images)

- [ ] **Quality Check**
  - [ ] Verify each image quality
  - [ ] Check for duplicates
  - [ ] Ensure proper naming
  - [ ] Validate dimensions

### Phase 3: Service & Background Images (Week 2)
- [ ] **Service Images** (9 images)
  - [ ] Identify best examples for each service
  - [ ] Extract or photograph new images
  - [ ] Optimize and resize
  - [ ] Consider if needed (icon design works well)

- [ ] **Additional Backgrounds** (2 images)
  - [ ] About page background
  - [ ] Contact page background
  - [ ] Optimize for performance

### Phase 4: Testimonial Photos (Week 2-3) - OPTIONAL
- [ ] **Client Photos** (5 images)
  - [ ] Contact clients for permission
  - [ ] Collect and optimize photos
  - [ ] Or use fallback initials (already working)

### Phase 5: Optimization & Testing (Week 3)
- [ ] **Image Optimization**
  - [ ] Convert to WebP format
  - [ ] Generate responsive variants
  - [ ] Implement lazy loading
  - [ ] Add blur placeholders

- [ ] **Performance Testing**
  - [ ] Lighthouse audit
  - [ ] Page load speed test
  - [ ] Mobile performance check
  - [ ] Network throttling test

- [ ] **Accessibility Testing**
  - [ ] Verify all alt text
  - [ ] Check contrast ratios
  - [ ] Test with screen reader
  - [ ] Validate ARIA labels

---

## Optimization Guidelines

### 1. Format Selection

**Use WebP** for:
- Project photos
- Background images
- Service images
- Any photo-realistic content

**Use PNG** for:
- Graphics with transparency
- Icons (if not SVG)
- Screenshots

**Use SVG** for:
- Logos
- Icons
- Simple graphics
- Scalable elements

**Use JPG** as fallback for older browsers

### 2. Compression Targets

```bash
# Example using Sharp (Astro uses this internally)
quality: {
  logo: 100,        # No compression for logos
  projects: 85,     # High quality for portfolio
  backgrounds: 80,  # Good quality for large images
  thumbnails: 75    # Acceptable for small images
}
```

### 3. Responsive Images

Implement srcset for all large images:

```astro
<img
  src="/images/projects/cottage-exterior.jpg"
  srcset="
    /images/projects/cottage-exterior-400w.webp 400w,
    /images/projects/cottage-exterior-800w.webp 800w,
    /images/projects/cottage-exterior-1200w.webp 1200w
  "
  sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Fisherman's cottage renovation in Padstow"
  loading="lazy"
/>
```

### 4. Lazy Loading

Enable for all below-fold images:

```astro
<img
  src="/images/projects/barn-exterior.jpg"
  alt="Traditional barn conversion"
  loading="lazy"
  decoding="async"
/>
```

### 5. Blur Placeholders

Use low-quality image placeholders (LQIP):

```astro
---
import { Image } from 'astro:assets';
import projectImage from '../assets/barn-exterior.jpg';
---

<Image
  src={projectImage}
  alt="Barn conversion"
  format="webp"
  quality={85}
  loading="lazy"
  placeholder="blur"
/>
```

### 6. Performance Budgets

| Page | Total Image Weight | LCP Image | Number of Images |
|------|-------------------|-----------|------------------|
| Homepage | < 2MB | < 300KB | 10-15 |
| Services | < 1.5MB | < 200KB | 8-12 |
| Projects | < 3MB | < 400KB | 15-20 |
| Contact | < 1MB | < 250KB | 5-8 |

### 7. Astro Image Optimization

Use Astro's built-in Image component:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero-background.jpg';
---

<!-- Automatically optimizes, generates WebP, creates responsive variants -->
<Image
  src={heroImage}
  alt="Cornwall stone masonry craftsmanship"
  width={1920}
  height={1080}
  format="webp"
  quality={85}
  loading="eager"  {/* For hero images */}
/>
```

### 8. CDN Configuration

If using a CDN (Netlify, Vercel, Cloudflare):

1. **Enable automatic image optimization**
2. **Set cache headers** (1 year for static images)
3. **Enable Brotli compression**
4. **Implement automatic WebP conversion**

Example Netlify configuration:
```toml
# netlify.toml
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## Extraction from Old Site

### Tools & Methods

#### 1. Browser DevTools
```javascript
// Run in console on old site to get all image URLs
Array.from(document.images)
  .map(img => img.src)
  .filter(src => src.includes('wp-content/uploads'))
  .forEach(url => console.log(url));
```

#### 2. wget Download
```bash
# Download all images from old site
wget -r -l1 -A jpg,jpeg,png,webp,svg \
  --no-parent \
  https://arronbennettbuilding.co.uk/
```

#### 3. HTTrack Website Copier
```bash
# Full site mirror including images
httrack https://arronbennettbuilding.co.uk/ \
  -O "./old-site-backup" \
  "+*.jpg" "+*.png" "+*.svg"
```

### Verification Checklist

After extracting images:
- [ ] Check image quality (not thumbnails)
- [ ] Verify correct dimensions
- [ ] Remove watermarks if present
- [ ] Check for duplicates
- [ ] Validate file names
- [ ] Test image integrity (open each)

---

## Testing Checklist

### Visual Testing
- [ ] Logo displays correctly in header
- [ ] Hero background loads properly
- [ ] Service images show (if implemented)
- [ ] Project gallery displays all images
- [ ] Testimonial avatars or fallbacks work
- [ ] All images have proper alt text

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] No layout shift (CLS < 0.1)
- [ ] Images lazy load properly
- [ ] WebP fallbacks work

### Accessibility Testing
- [ ] All images have alt text
- [ ] Decorative images have empty alt=""
- [ ] Image contrast meets WCAG AA
- [ ] Screen reader announces images correctly
- [ ] Keyboard navigation works

### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari iOS
- [ ] Chrome Android

### Responsive Testing
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Laptop (1024px)
- [ ] Desktop (1920px)
- [ ] 4K (2560px)

---

## Priority Matrix

| Priority | Category | Count | Deadline | Impact |
|----------|----------|-------|----------|--------|
| **P0 - CRITICAL** | Logo | 1-3 | Day 1 | Site unusable without |
| **P0 - CRITICAL** | Project Images | 45+ | Week 1 | Core business showcase |
| **P1 - HIGH** | Hero Background | 1 | Day 2 | First impression |
| **P1 - HIGH** | Working Together | 1 | Day 3 | Homepage key section |
| **P2 - MEDIUM** | Other Backgrounds | 2 | Week 2 | Page completeness |
| **P2 - MEDIUM** | Service Images | 9 | Week 2 | Enhancement (have icons) |
| **P3 - LOW** | Testimonial Photos | 5 | Week 3 | Nice-to-have (have fallback) |

---

## Troubleshooting

### Common Issues

**Issue: Images not loading**
```bash
# Check file permissions
chmod 644 public/images/**/*.{jpg,png,svg,webp}

# Verify directory structure
ls -R public/images/
```

**Issue: Wrong image dimensions**
```bash
# Check image dimensions
identify public/images/projects/cottage-exterior.jpg
# Output: cottage-exterior.jpg JPEG 1200x900 ...
```

**Issue: Large file sizes**
```bash
# Optimize with ImageMagick
mogrify -quality 85 -resize 1200x900 public/images/projects/*.jpg

# Or use Astro's optimization (automatic)
```

**Issue: Missing images in production**
```bash
# Verify images in build output
ls -la dist/images/

# Check Astro config for image optimization
cat astro.config.mjs | grep image
```

---

## Resources

### Documentation
- [Astro Images Guide](https://docs.astro.build/en/guides/images/)
- [WebP Format Info](https://developers.google.com/speed/webp)
- [Image Optimization Best Practices](https://web.dev/fast/)

### Tools
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Image optimization
- [ImageOptim](https://imageoptim.com/) - Mac optimization tool
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### Testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Questions & Support

For questions about image requirements or migration:

1. **Review this guide first**
2. **Check directory README files** (`public/images/*/README.md`)
3. **Examine code references** (search for `/images/` in codebase)
4. **Test with placeholders** (use colored blocks temporarily)

---

**Last Updated**: October 24, 2025
**Status**: Image structure created, awaiting asset migration
**Next Action**: Extract images from old site and organize into directory structure
