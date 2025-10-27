# Image Quick Reference

**Fast lookup for image paths and status**

---

## 🚨 Critical Priority (Need ASAP)

### Logo
```
/images/logo/logo.svg                    ⚠️ NEEDED - 180x107px
/images/logo/logo-white.svg              ⚠️ NEEDED - 180x107px
```

### Hero Images
```
/images/backgrounds/hero-background.jpg  ⚠️ NEEDED - 1920x1080px
/images/backgrounds/working-together.jpg ⚠️ NEEDED - 800x600px
```

### Project Images (45+ total)
```
/images/projects/stone-wall-1.jpg        ⚠️ NEEDED - 1200x900px
/images/projects/cottage-exterior.jpg    ⚠️ NEEDED - 1200x900px
/images/projects/barn-exterior.jpg       ⚠️ NEEDED - 1200x900px
[... and 42 more project images]
```

**See full list in IMAGE-MIGRATION-GUIDE.md**

---

## 📂 Directory Structure

```
public/images/
├── 📁 logo/              ← Company branding (3 files)
├── 📁 services/          ← Service images (9 files) - OPTIONAL
├── 📁 testimonials/      ← Client photos (5 files) - OPTIONAL
├── 📁 projects/          ← Portfolio (45+ files) - CRITICAL
├── 📁 backgrounds/       ← Hero images (4 files) - HIGH PRIORITY
└── 📁 placeholders/      ← Dev placeholders (temporary)
```

---

## ✅ Code References

### Homepage
- Line 43: Schema logo
- Line 68: Header logo prop
- Line 196: Working together image

### Components
- `Header.astro`: Expects logo prop
- `ProjectCard.astro`: Uses project.images[0]
- `TestimonialCard.astro`: Optional image, has fallback

### Data Files
- `projects.ts`: Lines 29-256 define all image paths
- `testimonials.ts`: No image field (optional)
- `services.ts`: No image field (using icons)

---

## 📋 Quick Status

| Category | Files Needed | Priority | Status |
|----------|--------------|----------|--------|
| Logo | 1-3 | P0 | ⚠️ NEEDED |
| Projects | 45+ | P0 | ⚠️ NEEDED |
| Hero BG | 2 | P1 | ⚠️ NEEDED |
| Other BG | 2 | P2 | ⚠️ NEEDED |
| Services | 9 | P2 | 🔵 OPTIONAL |
| Testimonials | 5 | P3 | 🔵 OPTIONAL |

---

## 🎯 Next Actions

1. **Extract logo from old site** → `/images/logo/`
2. **Download project images** → `/images/projects/`
3. **Select hero images** → `/images/backgrounds/`
4. **Test on development server**
5. **Optimize and compress**

---

## 🔗 Full Documentation

For complete details, see:
- **IMAGE-MIGRATION-GUIDE.md** - Complete migration guide
- **public/images/*/README.md** - Directory-specific docs

---

**Need help?** Check the troubleshooting section in IMAGE-MIGRATION-GUIDE.md
