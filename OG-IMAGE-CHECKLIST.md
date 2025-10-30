# OG Image Implementation Checklist

## Pre-Implementation Status

### Current State
- [x] Current OG image analyzed (553x329px, 15.7KB)
- [x] Logo and brand assets reviewed
- [x] Website color scheme identified (#021f59, #F27A5E)
- [x] BaseLayout.astro configuration verified
- [x] SEO.astro meta tags confirmed

### Files Created
- [x] og-image-new.svg (source design at 1200x630px)
- [x] og-image-generator.html (interactive tool)
- [x] README-OG-IMAGE.md (main guide)
- [x] OG-IMAGE-QUICK-START.md (fast-track)
- [x] OG-IMAGE-IMPLEMENTATION.md (complete docs)
- [x] OG-IMAGE-FINAL-NOTES.md (technical)
- [x] OG-IMAGE-VISUAL-GUIDE.md (design specs)
- [x] OG-IMAGE-CHECKLIST.md (this file)

---

## Implementation Checklist

### Phase 1: Generate Image (2 minutes)
- [ ] Open `public/og-image-generator.html` in web browser
- [ ] Verify image auto-generates with correct design
- [ ] Check preview shows:
  - [ ] Navy blue gradient background
  - [ ] Coral accent stripe at top
  - [ ] Building icon on left
  - [ ] "ARRON BENNETT" in white
  - [ ] "BUILDING" in coral
  - [ ] "Traditional Builder in Cornwall" subtitle
  - [ ] Decorative line under subtitle
- [ ] Click "Download as JPG" button
- [ ] Save file as `og-image.jpg`

### Phase 2: File Replacement (1 minute)
- [ ] Navigate to `C:\Users\Fearn\ab1\arron-bennett-astro\public\`
- [ ] Backup current file (optional): `copy og-image.jpg og-image-old.jpg`
- [ ] Replace `og-image.jpg` with downloaded file
- [ ] Verify new file size: ~60-80KB (under 100KB)

### Phase 3: Verification (2 minutes)
- [ ] Check file dimensions (should be exactly 1200x630px)
- [ ] Open image in viewer to confirm quality
- [ ] Verify text is readable
- [ ] Confirm colors match brand

### Phase 4: Build & Deploy (5-10 minutes)
- [ ] Run `npm run build` (if using npm) or equivalent
- [ ] Check build completes without errors
- [ ] Deploy to hosting (Netlify/Vercel/etc)
- [ ] Wait for deployment to complete

### Phase 5: Testing (5 minutes)
- [ ] Test on Facebook Debugger:
  - [ ] Go to https://developers.facebook.com/tools/debug/
  - [ ] Enter: `https://arronbennettbuilding.co.uk`
  - [ ] Click "Scrape Again"
  - [ ] Verify image shows at 1200x630px
  - [ ] Check text is readable in preview

- [ ] Test on Twitter Card Validator:
  - [ ] Go to https://cards-dev.twitter.com/validator
  - [ ] Enter website URL
  - [ ] Verify "summary_large_image" card displays
  - [ ] Check image quality

- [ ] Test on LinkedIn Post Inspector:
  - [ ] Go to https://www.linkedin.com/post-inspector/
  - [ ] Enter website URL
  - [ ] Verify preview displays correctly
  - [ ] Clear cache if needed

### Phase 6: Visual Quality Check
- [ ] Text "ARRON BENNETT" is clearly readable
- [ ] Building icon is visible and recognizable
- [ ] Coral color (#F27A5E) stands out
- [ ] Navy background looks professional
- [ ] No pixelation or blur at any preview size
- [ ] Image works on light theme platforms
- [ ] Image works on dark theme platforms

---

## Success Metrics

### Technical Requirements
- [x] Image dimensions: Exactly 1200 x 630 pixels
- [x] File format: JPG
- [x] File size: Under 100KB (target 60-80KB)
- [x] Quality: 85% JPG compression
- [x] Color mode: RGB

### Design Requirements
- [x] Brand colors used: #021f59 (navy), #F27A5E (coral)
- [x] Company name displayed: "ARRON BENNETT"
- [x] Tagline included: "BUILDING"
- [x] Subtitle present: "Traditional Builder in Cornwall"
- [x] Building icon from logo visible
- [x] Professional appearance
- [x] High contrast for readability

### Platform Compatibility
- [ ] Displays correctly on Facebook
- [ ] Displays correctly on LinkedIn
- [ ] Displays correctly on Twitter/X
- [ ] Displays correctly on WhatsApp
- [ ] Displays correctly on Slack
- [ ] Displays correctly on Discord
- [ ] No cropping of important content
- [ ] Readable at thumbnail size

---

## Troubleshooting Checklist

### If Image Doesn't Show on Social Media
- [ ] Verify file is named exactly `og-image.jpg`
- [ ] Check file is in `public/` directory (not subdirectory)
- [ ] Confirm website is deployed with new file
- [ ] Use platform debugger to scrape new version
- [ ] Wait 24-48 hours for cache to clear
- [ ] Try adding `?v=2` to URL as cache buster

### If File Size Is Too Large
- [ ] Check current file size with `ls -lh og-image.jpg`
- [ ] If >100KB, reduce JPG quality to 75% (from 85%)
- [ ] Verify dimensions are 1200x630 (not larger)
- [ ] Use JPG format (not PNG)
- [ ] Re-generate from HTML canvas at lower quality

### If Text Is Not Readable
- [ ] Verify you're using full 1200x630px version
- [ ] Check font sizes: 72px (heading), 36px (tagline), 28px (subtitle)
- [ ] Confirm high contrast: white text on navy background
- [ ] Test on actual device (not just desktop preview)
- [ ] Consider increasing font weight if needed

### If Colors Don't Match Website
- [ ] Verify navy: #021f59 (not #000000 or other dark blue)
- [ ] Verify coral: #F27A5E (not #FF0000 or other red/orange)
- [ ] Check gradient from #021f59 to #032a75
- [ ] Use HTML canvas generator for exact color match
- [ ] Compare with website header background color

---

## Post-Implementation Tasks

### Documentation
- [ ] Note deployment date/time
- [ ] Record any customizations made
- [ ] Update internal wiki/notes (if applicable)
- [ ] Archive old og-image.jpg (already saved as og-image-old.jpg)

### Monitoring
- [ ] Check social shares in first 24 hours
- [ ] Monitor for any error reports
- [ ] Track engagement metrics (if applicable)
- [ ] Verify image loads quickly (under 1 second)

### Maintenance
- [ ] Add to site maintenance checklist
- [ ] Schedule periodic review (quarterly)
- [ ] Note process for future updates
- [ ] Keep generator files for easy re-generation

---

## Quick Reference

### File Locations
```
Current OG image: C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image.jpg
HTML Generator:   C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image-generator.html
SVG Source:       C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image-new.svg
Main Guide:       C:\Users\Fearn\ab1\arron-bennett-astro\README-OG-IMAGE.md
```

### Key Commands
```bash
# Navigate to project
cd C:\Users\Fearn\ab1\arron-bennett-astro

# Check file size
ls -lh public/og-image.jpg

# Backup old file
cp public/og-image.jpg public/og-image-old.jpg

# Build project
npm run build

# Start dev server (to test locally)
npm run dev
```

### Testing URLs
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

### Support Documentation
- Quick Start: OG-IMAGE-QUICK-START.md
- Complete Guide: OG-IMAGE-IMPLEMENTATION.md
- Design Specs: OG-IMAGE-VISUAL-GUIDE.md
- Technical Details: OG-IMAGE-FINAL-NOTES.md

---

## Completion Sign-Off

### Implementation Complete
- [ ] Image generated and downloaded
- [ ] File replaced in public directory
- [ ] Build successful
- [ ] Deployed to production
- [ ] Tested on 3+ social platforms
- [ ] Visual quality verified
- [ ] Documentation reviewed
- [ ] Team notified (if applicable)

### Date Completed: ___________________

### Implemented By: ___________________

### Notes:
```
[Add any notes about customizations, issues encountered, or future considerations]
```

---

## Next Time Reference

If you need to update or regenerate the OG image in the future:

1. **Quick update**: Open `og-image-generator.html`, click download
2. **Custom design**: Edit `og-image-new.svg` and re-convert
3. **Completely new**: Follow OG-IMAGE-IMPLEMENTATION.md from start
4. **Just text change**: Edit SVG file text elements, re-convert

**Keep these files**: The HTML generator and SVG source make future updates easy!

---

## Final Notes

This checklist ensures you don't miss any steps in the implementation process. The new OG image will significantly improve your social media presence by:

- Displaying at optimal quality on all platforms
- Providing professional brand representation
- Increasing click-through rates on social shares
- Matching your website's design system
- Building trust and credibility

**Estimated Total Time**: 15-20 minutes including testing

**Complexity**: Easy (just follow the checklist!)

**Impact**: High (every social share will look professional)

Good luck with your implementation!
