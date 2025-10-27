# Image Replacement Checklist

Quick reference guide for replacing placeholder images with actual project photos.

---

## SERVICE IMAGES (Priority 1)

### Required Images (9 total)
Place in: `C:\Users\Fearn\ab1\arron-bennett-astro\public\images\services\`

- [ ] `full-builds.jpg` - Show construction/building work
- [ ] `home-renovations.jpg` - Show renovation projects
- [ ] `bathroom-kitchen.jpg` - Show interior renovation
- [ ] `hard-landscaping.jpg` - Show outdoor patio/driveway
- [ ] `mini-excavator.jpg` - Show machinery/groundwork
- [ ] `stone-masonry.jpg` - Show stone wall work
- [ ] `project-management.jpg` - Show planning/oversight
- [ ] `heat-pumps.jpg` - Show renewable energy systems
- [ ] `lime-mortars.jpg` - Show heritage restoration

**Specs:** 800x600px minimum, .jpg format, optimized for web

---

## FILES TO UPDATE AFTER ADDING SERVICE IMAGES

### 1. Update Homepage
**File:** `src/pages/index.astro` (Lines 21-70)

Search for: `// PLACEHOLDER - replace with`

Replace each placeholder comment and path with actual image path.

### 2. Update Services Page
**File:** `src/pages/our-services.astro` (Lines 143, 156, 184, 196, 224, 236, 264, 276, 304)

Search for: `<!-- PLACEHOLDER: Replace with`

Remove comment and update `src` attribute to actual image path.

---

## PROJECT GALLERY IMAGES (Priority 2)

### Required Images (45+ total)
Place in: `C:\Users\Fearn\ab1\arron-bennett-astro\public\images\projects\`

See `src/data/projects.ts` for complete list of image paths.

Each project needs 3-4 images showing:
- Main view
- Detail shots
- Before/after (where applicable)

**Specs:** 1200x900px minimum, .jpg format, optimized for web

---

## QUICK SEARCH COMMANDS

Find all placeholders:
```bash
# Search for placeholder comments
grep -r "PLACEHOLDER" src/
```

Find specific service:
```bash
# Example: Find full-builds references
grep -r "full-builds" src/
```

---

## VERIFICATION AFTER REPLACEMENT

1. Check images exist:
```bash
ls -la public/images/services/
ls -la public/images/projects/
```

2. Remove placeholder comments from code

3. Test site locally:
```bash
npm run dev
```

4. Check browser console for 404 errors

5. Verify images display on:
   - Homepage
   - Services page
   - Projects gallery page

---

## IMAGE OPTIMIZATION TIPS

Before adding images:
- Resize to exact dimensions needed
- Compress to 80-85% quality
- Use tools like TinyPNG or ImageOptim
- Ensure file names match exactly (case-sensitive)

---

## CURRENT PLACEHOLDER IMAGES

These 2 images are being reused as placeholders:
- `/images/services/client-feedback.jpg`
- `/images/services/discuss-project.jpg`

Once you add the 9 new service images, these can be deleted or kept.

---

## SUPPORT

Questions? Check these files:
- `IMAGE-FIX-REPORT.md` - Full analysis
- `IMAGE-FIX-SUMMARY.md` - What was done
- `src/data/projects.ts` - Project image paths
