# OG Image Quick Start Guide

## Fastest Method: HTML Canvas Generator

### Step 1: Open the Generator
Open this file in your browser:
```
C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image-generator.html
```

Or if your dev server is running:
```
http://localhost:4321/og-image-generator.html
```

### Step 2: Download the Image
- The image auto-generates when you open the page
- Click the **"Download as JPG"** button
- Save as `og-image.jpg`

### Step 3: Replace the Current File
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro\public

# Backup old file (optional)
copy og-image.jpg og-image-old.jpg

# Replace with your downloaded file
# (Move the downloaded og-image.jpg to this directory)
```

### Step 4: Verify
Check the new file:
```bash
# Should show: 1200x630, ~60-80KB
ls -lh og-image.jpg
```

### Step 5: Test
Build and deploy, then test on:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## What You Get

### Current Image (OLD)
- 553 x 329 pixels (too small!)
- 15.7 KB
- Basic, no branding
- Below optimal size for social media

### New Image (PROFESSIONAL)
- ✅ 1200 x 630 pixels (perfect!)
- ✅ ~60-80 KB (optimized)
- ✅ Professional branded design
- ✅ Company name: "ARRON BENNETT"
- ✅ Tagline: "BUILDING"
- ✅ Subtitle: "Traditional Builder in Cornwall"
- ✅ Brand colors: Navy blue (#021f59) + Coral accent (#F27A5E)
- ✅ Building icon from your logo
- ✅ Clean, modern, professional design

## Design Preview (Text Description)

```
┌─────────────────────────────────────────────┐
│ [8px Coral stripe across top]              │
│                                             │
│  [Building      ARRON BENNETT               │
│   Icon]                                     │
│                 BUILDING                    │
│                                             │
│                 Traditional Builder in      │
│                 Cornwall                    │
│                 ─────────                   │
│                                             │
│                                             │
│                                   [logo]    │
└─────────────────────────────────────────────┘
    Navy blue gradient background
    with subtle grid pattern
```

## Files Created

1. **og-image-new.svg** (3.2 KB)
   - Source SVG at exact 1200x630px dimensions
   - Can be converted to JPG using online tools

2. **og-image-generator.html** (6.8 KB)
   - Interactive HTML canvas generator
   - Auto-generates image on page load
   - Download button for instant JPG export
   - **This is the recommended method!**

3. **OG-IMAGE-IMPLEMENTATION.md**
   - Complete documentation
   - Multiple implementation methods
   - Testing checklist
   - Troubleshooting guide

## That's It!

No code changes needed. Just replace the file and you're done.

The new OG image will:
- Make your site look professional on social media
- Match your brand colors and design system
- Work perfectly on Facebook, LinkedIn, Twitter, WhatsApp, Slack, etc.
- Scale beautifully at all preview sizes
- Load fast (optimized file size)

Questions? Check the full documentation in `OG-IMAGE-IMPLEMENTATION.md`
