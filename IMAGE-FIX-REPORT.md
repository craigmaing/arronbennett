# Image Path Fix Report - Arron Bennett Site

## Date: 2025-10-24

## Summary
Analysis of image references across the Arron Bennett Astro site to identify broken paths and create a strategy for placeholders.

---

## EXISTING IMAGES IN PUBLIC FOLDER

```
/favicon.svg                           ✓ EXISTS
/logo.svg                              ✓ EXISTS
/images/hero-background.jpg            ✓ EXISTS
/images/services/client-feedback.jpg   ✓ EXISTS
/images/services/discuss-project.jpg   ✓ EXISTS
```

---

## BROKEN IMAGE REFERENCES

### 1. Header Component (Header.astro)
- **Referenced:** `/logo.jpg` (line 41)
- **Status:** BROKEN (only `/logo.svg` exists)
- **Fix:** Change to `/logo.svg`

### 2. Homepage (index.astro)
**Service Cards (lines 16-69):**
- `/images/services/A-Bennett-5.png` - MISSING
- `/images/services/renovations.jpg` - MISSING
- `/images/services/A-Bennett-190.png` - MISSING
- `/images/services/landscaping.jpg` - MISSING
- `/images/services/excavator.jpg` - MISSING
- `/images/services/A-Bennett-125.png` - MISSING
- `/images/services/project-management.jpg` - MISSING
- `/images/services/heat-pumps.jpg` - MISSING
- `/images/services/lime-work.jpg` - MISSING

**Hero Section (line 151):**
- `/images/hero-background.jpg` - ✓ EXISTS

**Working Together Cards (lines 275, 297):**
- `/images/services/discuss-project.jpg` - ✓ EXISTS
- `/images/services/client-feedback.jpg` - ✓ EXISTS

### 3. Services Page (our-services.astro)
**All Service Images Missing:**
- `/images/services/full-builds.jpg` - MISSING
- `/images/services/home-renovations.jpg` - MISSING
- `/images/services/bathroom-kitchen.jpg` - MISSING
- `/images/services/hard-landscaping.jpg` - MISSING
- `/images/services/mini-excavator.jpg` - MISSING
- `/images/services/stone-masonry.jpg` - MISSING
- `/images/services/project-management.jpg` - MISSING
- `/images/services/heat-pumps.jpg` - MISSING
- `/images/services/lime-mortars.jpg` - MISSING

### 4. Projects Page (projects.ts data file)
**All Project Images Missing (45+ images):**
- `/images/projects/stone-wall-1.jpg` through `/images/projects/patio-firepit.jpg`
- Total: 45+ project images referenced but none exist

---

## PLACEHOLDER STRATEGY

### Immediate Actions Required:

#### 1. Logo Fix (CRITICAL)
```astro
<!-- CURRENT (BROKEN) -->
<img src="/logo.jpg" alt="Arron Bennett" />

<!-- FIX TO -->
<img src="/logo.svg" alt="Arron Bennett" />
```

#### 2. Create Placeholder Images
We need to create placeholder images in these categories:

**Service Images (9 needed):**
- `full-builds.jpg` (800x600px)
- `home-renovations.jpg` (800x600px)
- `bathroom-kitchen.jpg` (800x600px)
- `hard-landscaping.jpg` (800x600px)
- `mini-excavator.jpg` (800x600px)
- `stone-masonry.jpg` (800x600px)
- `project-management.jpg` (800x600px)
- `heat-pumps.jpg` (800x600px)
- `lime-mortars.jpg` (800x600px)

**Project Images (45+ needed):**
All images in `/images/projects/` directory - see projects.ts for full list

#### 3. Alternative: Use Existing Images
We could reuse the 2 existing service images as temporary placeholders:
- `client-feedback.jpg`
- `discuss-project.jpg`

---

## RECOMMENDED FIXES

### Option A: Quick Fix (Use Existing Images as Placeholders)
Update all service image paths to use one of the 2 existing images:
```typescript
// index.astro - Update services array
image: '/images/services/client-feedback.jpg'  // Use existing
```

### Option B: Professional Fix (Create Real Placeholders)
1. Create 800x600px placeholder images with text overlays
2. Use a gradient background (navy blue #021f59)
3. Add white text indicating service type
4. Save as optimized JPGs in `/public/images/services/`

### Option C: Use Placeholder Service
Use a service like placeholder.com or unsplash:
```html
<img src="https://placehold.co/800x600/021f59/FFF?text=Full+Builds" />
```

---

## FILES REQUIRING UPDATES

1. **src/components/Header.astro** - Line 41
   - Change `/logo.jpg` → `/logo.svg`

2. **src/pages/index.astro** - Lines 20-69
   - Update all service image paths

3. **src/pages/our-services.astro** - Multiple lines
   - Update all 9 service image paths

4. **src/data/projects.ts** - Entire file
   - Update all 45+ project image paths or create placeholders

---

## DIRECTORY STRUCTURE NEEDED

```
public/
├── images/
│   ├── hero-background.jpg ✓ (exists)
│   ├── services/
│   │   ├── client-feedback.jpg ✓ (exists)
│   │   ├── discuss-project.jpg ✓ (exists)
│   │   ├── full-builds.jpg ✗ (needed)
│   │   ├── home-renovations.jpg ✗ (needed)
│   │   ├── bathroom-kitchen.jpg ✗ (needed)
│   │   ├── hard-landscaping.jpg ✗ (needed)
│   │   ├── mini-excavator.jpg ✗ (needed)
│   │   ├── stone-masonry.jpg ✗ (needed)
│   │   ├── project-management.jpg ✗ (needed)
│   │   ├── heat-pumps.jpg ✗ (needed)
│   │   └── lime-mortars.jpg ✗ (needed)
│   └── projects/
│       └── [45+ images needed]
├── logo.svg ✓ (exists)
└── favicon.svg ✓ (exists)
```

---

## CRITICAL vs NON-CRITICAL

### CRITICAL (Breaks site):
1. **Header logo** - `/logo.jpg` → `/logo.svg` (MUST FIX)

### HIGH PRIORITY (Visible on main pages):
2. Homepage service images (9 images)
3. Services page images (9 images)
4. Hero background (EXISTS - no fix needed)

### MEDIUM PRIORITY (Gallery page):
5. Project gallery images (45+ images)

---

## NEXT STEPS

1. ✓ Identify all broken paths (COMPLETE)
2. ⚠ Fix Header.astro logo path (CRITICAL)
3. ⚠ Create or reassign service images (9 needed)
4. ⚠ Create or reassign project images (45+ needed)
5. ⚠ Test all pages after fixes

---

## ESTIMATED WORK

- **Logo fix:** 1 minute
- **Service image placeholders:** 15 minutes (if creating simple placeholders)
- **Project image placeholders:** 30 minutes (if creating simple placeholders)
- **Using existing images:** 5 minutes (bulk find/replace)

**Total Time:** 20-50 minutes depending on approach

---

## COLOR SCHEME FOR PLACEHOLDERS

If creating placeholder images, use brand colors:
- **Navy Blue:** #021f59 (primary)
- **Coral:** #F27A5E (accent)
- **White:** #FFFFFF (text)
