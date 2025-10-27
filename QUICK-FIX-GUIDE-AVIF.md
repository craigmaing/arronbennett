# Quick Fix Guide: AVIF Image Optimization

## Problem

AVIF images are NOT being generated during build despite configuration being correct.

**Impact:**
- 0 AVIF files (should have 900+)
- Image payloads 60% larger than necessary
- LCP 2-3x slower than target
- Performance scores: 79-83 instead of 95-100

---

## Root Cause

Images are stored in `public/` directory and used with regular `<img>` tags, bypassing Astro's image optimization pipeline.

---

## Solution: 3 Steps

### Step 1: Move Images to `src/`

```bash
# Create images directory in src
mkdir -p src/images/projects

# Move images from public to src
mv public/images/* src/images/

# Keep public/ for truly static assets (favicons, robots.txt)
```

### Step 2: Update Image Imports

**Before (Not Optimized):**
```astro
<img src="/images/hero-building.jpg" alt="Building" />
```

**After (Optimized with AVIF):**
```astro
---
import { Image } from 'astro:assets';
import heroBuilding from '../images/hero-building.jpg';
---

<Image
  src={heroBuilding}
  alt="Building"
  formats={['avif', 'webp', 'jpg']}
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Step 3: Update All Page Templates

Find all `<img>` tags and replace with `<Image>`:

```bash
# Find all image tags
grep -r "<img" src/pages/ src/components/

# Common locations:
# - src/pages/index.astro (hero)
# - src/pages/our-projects/[project].astro (gallery)
# - src/components/ProjectCard.astro (thumbnails)
# - src/components/Hero.astro (hero images)
```

---

## Alternative: Use GalleryImage Component

The site already has an optimized `GalleryImage` component. Use it!

**Component Location:**
```
src/components/GalleryImage.astro
```

**Usage:**
```astro
---
import GalleryImage from '../components/GalleryImage.astro';
import image1 from '../images/projects/roseland-1.jpg';
import image2 from '../images/projects/roseland-2.jpg';
---

<div class="gallery">
  <GalleryImage src={image1} alt="Kitchen renovation" index={0} />
  <GalleryImage src={image2} alt="Bathroom" index={1} />
</div>
```

This component automatically generates:
- AVIF thumbnails (400×300)
- WebP thumbnails
- JPEG fallbacks
- 2x retina versions
- Lazy loading (after first 3 images)

---

## Verification

After making changes, rebuild and check:

```bash
# Build the site
npm run build

# Count AVIF files
find dist -name "*.avif" | wc -l
# Should show 100+ files

# Count WebP files
find dist -name "*.webp" | wc -l
# Should show 100+ files

# Check bundle sizes
du -sh dist/_astro
# Should be significantly smaller
```

---

## Expected Results

### Before Fix:
```
AVIF files: 0
Homepage LCP: 4.7s
Performance: 83/100
Image payload: 646KB
```

### After Fix:
```
AVIF files: 900+
Homepage LCP: 1.8s
Performance: 96/100
Image payload: 250KB (-61%)
```

---

## Priority Pages to Fix

1. **Project Detail Pages** (CRITICAL)
   - `src/pages/our-projects/[project].astro`
   - Currently: 3MB images
   - After fix: 1.2MB (-60%)
   - Impact: LCP 5.2s → 2.5s

2. **Homepage** (HIGH)
   - `src/pages/index.astro`
   - Currently: 646KB images
   - After fix: 250KB (-61%)
   - Impact: LCP 4.7s → 1.8s

3. **Projects Listing** (MEDIUM)
   - `src/pages/our-projects.astro`
   - Currently: 818KB images
   - After fix: 320KB (-61%)
   - Impact: LCP 5.0s → 2.0s

---

## Common Pitfalls

### ❌ Don't Do This:
```astro
// String paths don't work with Image component
<Image src="/images/hero.jpg" alt="..." />
```

### ✅ Do This:
```astro
// Import the image first
import heroImg from '../images/hero.jpg';
<Image src={heroImg} alt="..." />
```

---

## Testing Checklist

After implementation:

- [ ] Build completes without errors
- [ ] AVIF files present in `dist/`
- [ ] Images display correctly in all browsers
- [ ] Fallbacks work (WebP → JPEG)
- [ ] Lighthouse scores improve
- [ ] LCP under 2.5s on all pages
- [ ] No broken images
- [ ] Mobile images load properly

---

## Deploy Optimized Header (Bonus Fix)

While you're fixing images, also deploy the optimized header:

**File:** `src/layouts/BaseLayout.astro`

**Change:**
```diff
- import Header from '../components/Header.astro';
+ import Header from '../components/Header-Optimized.astro';
```

**Impact:** 5-10KB JavaScript savings

---

## Timeline Estimate

**Simple Fix (Priority 1 only):**
- Time: 2-4 hours
- Developer: 1 frontend engineer
- Impact: 60% image size reduction

**Complete Fix (All pages):**
- Time: 6-8 hours
- Developer: 1 frontend engineer
- Impact: 100% image optimization coverage

---

## Need Help?

**Quick test:** Create a test page with proper Image component:

```astro
---
// src/pages/test-avif.astro
import { Image } from 'astro:assets';
import testImg from '../images/hero-building.jpg';
---

<Image
  src={testImg}
  alt="Test"
  formats={['avif', 'webp', 'jpg']}
/>
```

Build and check if AVIF is generated in `dist/`.

---

## Resources

- [Astro Image Documentation](https://docs.astro.build/en/guides/images/)
- [AVIF Browser Support](https://caniuse.com/avif) (97% global support)
- Site's GalleryImage component: `src/components/GalleryImage.astro`

---

**Created**: October 27, 2025
**Priority**: URGENT
**Estimated Impact**: +13-17 Lighthouse points
