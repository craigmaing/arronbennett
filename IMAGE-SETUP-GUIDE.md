# Image Setup Guide for Projects Gallery

## Quick Start

This guide will help you prepare and add images for the projects gallery.

## Required Images

The gallery currently references 15 projects with a total of **45+ images**. You'll need to source or create these images based on real project work.

## Image Locations Reference

### Project Images Needed

#### Stone Masonry Projects
```
/images/projects/
├── stone-wall-1.jpg           # Tregenna Castle stone wall
├── stone-wall-2.jpg           # Detail shot
├── stone-wall-before.jpg      # Before restoration
├── garden-wall-1.jpg          # Newquay garden wall
├── garden-wall-2.jpg          # Seating area
├── garden-patio.jpg           # Patio view
├── retaining-wall-1.jpg       # Coastal wall in Looe
├── retaining-wall-2.jpg       # Wall detail
├── retaining-wall-3.jpg       # Drainage system
├── church-wall-1.jpg          # St Just church wall
├── church-wall-2.jpg          # Historic stonework
└── church-wall-detail.jpg     # Mortar detail
```

#### Renovation Projects
```
/images/projects/
├── cottage-exterior.jpg       # Padstow cottage
├── cottage-interior.jpg       # Exposed beams
├── cottage-kitchen.jpg        # Modern kitchen
├── cottage-before.jpg         # Before renovation
├── barn-exterior.jpg          # Bodmin barn conversion
├── barn-interior.jpg          # Timber trusses
├── barn-kitchen.jpg           # Open plan kitchen
├── barn-before.jpg            # Original barn
├── extension-exterior.jpg     # Truro Victorian extension
├── extension-interior.jpg     # Open-plan space
├── extension-before.jpg       # Before extension
├── farmhouse-1.jpg            # Wadebridge farmhouse
├── farmhouse-2.jpg            # Restored features
├── farmhouse-interior.jpg     # Period details
└── farmhouse-before.jpg       # Before restoration
```

#### New Build Projects
```
/images/projects/
├── eco-home-exterior.jpg      # Falmouth eco home
├── eco-home-interior.jpg      # Modern interior
├── eco-home-construction.jpg  # Building process
├── coastal-home-1.jpg         # Hayle coastal home
├── coastal-home-2.jpg         # Glass features
├── coastal-home-interior.jpg  # Sea views
└── studio-exterior.jpg        # Garden studio in Mevagissey
    studio-interior.jpg        # Studio workspace
    studio-construction.jpg    # Building phase
```

#### Landscaping Projects
```
/images/projects/
├── courtyard-1.jpg            # Penzance courtyard
├── courtyard-2.jpg            # Water feature
├── courtyard-plants.jpg       # Mediterranean plants
├── terrace-garden-1.jpg       # Fowey terraced garden
├── terrace-garden-2.jpg       # Multiple levels
├── terrace-steps.jpg          # Granite steps
├── entrance-1.jpg             # Port Isaac entrance
├── entrance-2.jpg             # Curved driveway
├── entrance-gates.jpg         # Wrought iron gates
├── patio-1.jpg                # Perranporth patio
├── patio-2.jpg                # Seating area
└── patio-firepit.jpg          # Fire pit feature
```

## Image Specifications

### Dimensions
- **Minimum width**: 1200px
- **Minimum height**: 900px (4:3 ratio)
- **Maximum file size**: 500KB per image
- **Format**: JPEG (.jpg) preferred

### Quality Guidelines
- **Resolution**: 72-96 DPI (web optimized)
- **Compression**: 80-85% quality
- **Color space**: sRGB
- **No watermarks** (unless part of branding)

## Sourcing Images

### Option 1: Real Project Photos (Recommended)
If you have actual project photos:

1. **Collect photos** from completed projects
2. **Organize by project** and category
3. **Select best shots** (3-4 per project)
4. **Optimize** using tools below

### Option 2: Placeholder Strategy
For immediate development without final images:

#### Free Stock Photo Resources
- **Unsplash** (https://unsplash.com)
  - Search: "stone wall", "house renovation", "new build", "garden"
  - License: Free for commercial use

- **Pexels** (https://pexels.com)
  - Search: "construction", "building", "masonry", "landscaping"
  - License: Free for commercial use

- **Pixabay** (https://pixabay.com)
  - Search: "cottage", "barn conversion", "modern home"
  - License: Free for commercial use

#### Search Terms by Category

**Stone Masonry:**
- "stone wall construction"
- "granite masonry"
- "traditional stonework"
- "retaining wall stone"

**Renovations:**
- "cottage renovation"
- "barn conversion"
- "period property restoration"
- "house extension"

**New Builds:**
- "modern home construction"
- "eco house build"
- "contemporary architecture"
- "new build Cornwall"

**Landscaping:**
- "granite patio"
- "garden terracing"
- "courtyard design"
- "driveway entrance"

### Option 3: Create Placeholder Images
Use solid colors with text overlays:

```html
<!-- Example placeholder -->
<div style="width:1200px; height:900px; background:#e5e5e5;
     display:flex; align-items:center; justify-content:center;">
  <span style="font-size:48px; color:#999;">
    [Stone Wall Project Image]
  </span>
</div>
```

## Image Optimization Process

### 1. Batch Resize (if needed)

**Using ImageMagick (command line):**
```bash
# Install ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick

# Resize all images to max width 1600px
magick mogrify -resize 1600x1200> -quality 85 *.jpg
```

**Using Photoshop:**
1. File → Scripts → Image Processor
2. Set maximum dimensions: 1600x1200
3. Quality: 8-10
4. Convert to sRGB

### 2. Compress Images

**Online Tools (Easiest):**

1. **TinyPNG** (https://tinypng.com)
   - Upload up to 20 images at once
   - Automatic smart compression
   - Download compressed versions

2. **Squoosh** (https://squoosh.app)
   - More control over compression
   - Compare before/after
   - Choose format (JPEG, WebP)

**Desktop Apps:**

- **ImageOptim** (Mac) - Drag and drop, automatic optimization
- **FileOptimizer** (Windows) - Batch processing

### 3. Rename Files

Use consistent naming:
```bash
# Good examples:
tregenna-stone-wall-1.jpg
cottage-exterior-padstow.jpg
eco-home-construction-falmouth.jpg

# Bad examples:
IMG_1234.jpg
DSC_5678.JPG
photo.jpg
```

**Batch Rename Script (PowerShell):**
```powershell
# Rename files with prefix
Get-ChildItem *.jpg | ForEach-Object {
  $newName = "project-" + $_.Name
  Rename-Item $_.FullName $newName
}
```

## Setting Up Images

### Step 1: Create Directory
```bash
mkdir -p public/images/projects
```

### Step 2: Add Images
Copy your optimized images to `public/images/projects/`

### Step 3: Update Project Data (if needed)
If you change image names, update `src/data/projects.ts`:

```typescript
images: [
  '/images/projects/your-actual-filename-1.jpg',
  '/images/projects/your-actual-filename-2.jpg',
]
```

### Step 4: Test
```bash
npm run dev
# Navigate to http://localhost:4321/projects
```

## WebP Format (Advanced)

For better performance, convert images to WebP:

### Using Squoosh (Online)
1. Upload JPEG image
2. Select WebP format
3. Adjust quality (80-85)
4. Download

### Using CLI
```bash
# Install cwebp
# Mac: brew install webp
# Windows: Download from Google

# Convert single image
cwebp -q 85 input.jpg -o output.webp

# Batch convert
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

### Update Astro to Support WebP
```typescript
// src/components/ProjectCard.astro
<picture>
  <source srcset={mainImage.replace('.jpg', '.webp')} type="image/webp">
  <img src={mainImage} alt={project.title} />
</picture>
```

## Image Alt Text Best Practices

Good alt text helps SEO and accessibility:

```typescript
// ❌ Bad
alt="image"
alt="IMG_1234"
alt=""

// ✅ Good
alt="Restored granite stone wall at Tregenna Castle, St Ives"
alt="Modern open-plan kitchen in renovated fisherman's cottage"
alt="Eco-friendly new build home with solar panels in Falmouth"
```

## Troubleshooting

### Images Not Loading?
1. Check file path is correct
2. Verify file exists in `public/images/projects/`
3. Check file extension (case-sensitive on Linux)
4. Clear browser cache

### Images Too Large?
1. Compress using TinyPNG
2. Resize to max 1600px width
3. Use WebP format
4. Check file size < 500KB

### Images Look Pixelated?
1. Use higher quality source images
2. Reduce compression (increase quality %)
3. Check image dimensions meet minimums

### Slow Page Load?
1. Enable lazy loading (already implemented)
2. Convert to WebP format
3. Use image CDN (Cloudinary, Imgix)
4. Implement progressive loading

## Quick Reference Card

```
📁 Location:     public/images/projects/
📏 Dimensions:   1200x900px minimum (4:3 ratio)
💾 File Size:    < 500KB
🎨 Format:       JPEG (.jpg) or WebP (.webp)
📝 Naming:       project-slug-description.jpg
🔧 Tools:        TinyPNG, Squoosh, ImageOptim
🎯 Quality:      80-85% compression
```

## Ready-to-Use Checklist

- [ ] Created `/public/images/projects/` directory
- [ ] Collected/sourced all required images
- [ ] Resized images to correct dimensions
- [ ] Compressed images to < 500KB
- [ ] Renamed files with descriptive names
- [ ] Placed files in correct directory
- [ ] Updated project data if needed
- [ ] Tested gallery in browser
- [ ] Verified all images load
- [ ] Checked mobile responsiveness

---

**Need Help?** Refer to the main `PROJECTS-GALLERY-README.md` for full documentation.
