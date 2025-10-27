# Creating Placeholder Images

**Guide for generating temporary placeholder images during development**

---

## Option 1: CSS-Based Placeholders (Recommended)

Use colored div backgrounds in components while images are being prepared.

### Example Implementation

```astro
<!-- Instead of -->
<img src="/images/projects/cottage.jpg" alt="Cottage" />

<!-- Use this temporarily -->
<div class="placeholder-image" data-placeholder="Cottage Renovation">
  <span class="placeholder-text">Image Coming Soon</span>
</div>

<style>
  .placeholder-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #021f59 0%, #0a3d7a 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .placeholder-text {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem;
  }

  .placeholder-text::before {
    content: attr(data-placeholder);
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }
</style>
```

---

## Option 2: SVG Placeholders

Create inline SVG placeholders with text.

### Logo Placeholder

```astro
<!-- public/images/logo/logo.svg -->
<svg width="180" height="107" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="107" fill="#021f59"/>
  <text x="90" y="53" font-family="Arial, sans-serif" font-size="20"
        fill="#ffffff" text-anchor="middle" alignment-baseline="middle">
    AB BUILDING
  </text>
  <text x="90" y="75" font-family="Arial, sans-serif" font-size="12"
        fill="#F27A5E" text-anchor="middle" alignment-baseline="middle">
    Cornwall Builders
  </text>
</svg>
```

### Project Placeholder Template

```astro
<!-- Generic project image placeholder -->
<svg width="1200" height="900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#021f59;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a3d7a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#grad1)"/>
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="48"
        fill="#ffffff" text-anchor="middle" alignment-baseline="middle">
    Project Image
  </text>
  <text x="600" y="500" font-family="Arial, sans-serif" font-size="24"
        fill="#F27A5E" text-anchor="middle" alignment-baseline="middle">
    1200 × 900px
  </text>
</svg>
```

---

## Option 3: Online Placeholder Services

Use external services for quick placeholders:

### Placeholder.com
```html
<img src="https://via.placeholder.com/800x600/021f59/FFFFFF?text=Service+Image"
     alt="Service placeholder" />
```

### DummyImage.com
```html
<img src="https://dummyimage.com/1200x900/021f59/F27A5E.jpg&text=Project+Photo"
     alt="Project placeholder" />
```

### Unsplash Source (High-Quality)
```html
<!-- Cornwall/building themed images -->
<img src="https://source.unsplash.com/800x600/?cornwall,building"
     alt="Cornwall building" />
<img src="https://source.unsplash.com/800x600/?stone,masonry"
     alt="Stone masonry" />
```

---

## Option 4: Node Script Generator

Create a Node.js script to generate placeholder images:

```javascript
// scripts/generate-placeholders.js
import sharp from 'sharp';
import { mkdir } from 'fs/promises';

const colors = {
  navy: '#021f59',
  coral: '#F27A5E',
  gray: '#f8f9fa'
};

async function createPlaceholder(path, width, height, text) {
  const svg = `
    <svg width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="${colors.navy}"/>
      <text x="50%" y="50%"
            font-family="Arial"
            font-size="32"
            fill="${colors.coral}"
            text-anchor="middle"
            dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path);
}

// Generate placeholders
const placeholders = [
  ['public/images/logo/logo.png', 180, 107, 'AB Building'],
  ['public/images/backgrounds/hero-background.jpg', 1920, 1080, 'Hero Background'],
  ['public/images/backgrounds/working-together.jpg', 800, 600, 'Working Together'],
  ['public/images/projects/placeholder-project.jpg', 1200, 900, 'Project Image'],
];

for (const [path, width, height, text] of placeholders) {
  await mkdir(path.substring(0, path.lastIndexOf('/')), { recursive: true });
  await createPlaceholder(path, width, height, text);
  console.log(`✓ Created ${path}`);
}
```

Run with:
```bash
npm install sharp
node scripts/generate-placeholders.js
```

---

## Option 5: ImageMagick CLI

If you have ImageMagick installed:

```bash
# Logo placeholder
magick -size 180x107 xc:"#021f59" \
  -gravity center \
  -pointsize 24 \
  -fill white \
  -annotate +0+0 "AB Building" \
  public/images/logo/logo.png

# Hero background
magick -size 1920x1080 \
  gradient:"#021f59-#0a3d7a" \
  -gravity center \
  -pointsize 72 \
  -fill white \
  -annotate +0+0 "Hero Background" \
  public/images/backgrounds/hero-background.jpg

# Project image
magick -size 1200x900 \
  gradient:"#021f59-#0a3d7a" \
  -gravity center \
  -pointsize 48 \
  -fill "#F27A5E" \
  -annotate +0+0 "Project Image" \
  public/images/projects/placeholder-project.jpg
```

---

## Recommended Approach

**For Development**:
1. Use CSS-based placeholders (no file needed)
2. Add data attributes for context
3. Style with brand colors

**For Testing**:
1. Generate simple SVG placeholders
2. Use correct dimensions
3. Include size labels

**For Demo/Preview**:
1. Use Unsplash for realistic images
2. Or extract low-res from old site
3. Replace before production

---

## Component Pattern

Create a reusable placeholder component:

```astro
---
// src/components/ImagePlaceholder.astro
interface Props {
  width: number;
  height: number;
  text?: string;
  aspectRatio?: string;
}

const { width, height, text = 'Image Coming Soon', aspectRatio } = Astro.props;
const style = aspectRatio ? `aspect-ratio: ${aspectRatio}` : `height: ${height}px`;
---

<div class="image-placeholder" style={style}>
  <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#021f59" />
        <stop offset="100%" style="stop-color:#0a3d7a" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)" />
    <text
      x="50%"
      y="50%"
      font-family="system-ui"
      font-size="24"
      fill="#F27A5E"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      {text}
    </text>
  </svg>
</div>

<style>
  .image-placeholder {
    width: 100%;
    background: linear-gradient(135deg, #021f59, #0a3d7a);
    border-radius: 8px;
    overflow: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
```

Usage:
```astro
<ImagePlaceholder width={800} height={600} text="Service Image" />
<ImagePlaceholder width={1200} height={900} aspectRatio="4/3" text="Project Photo" />
```

---

## Development Workflow

1. **Start with CSS placeholders** (fastest, no files)
2. **Generate SVG placeholders** when needed for layout testing
3. **Use Unsplash** for realistic preview
4. **Extract from old site** for accurate preview
5. **Replace with final images** before production
6. **Remove placeholder code** after migration complete

---

## Production Checklist

Before deploying:
- [ ] All placeholder images removed
- [ ] All CSS placeholders replaced
- [ ] All external service URLs removed
- [ ] All real images optimized
- [ ] No "Coming Soon" text visible
- [ ] All alt text properly set

---

**Remember**: Placeholders are for development only. Never deploy placeholders to production!
