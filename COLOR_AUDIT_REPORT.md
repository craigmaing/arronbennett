# Color Audit Report - Eggshell Background Implementation

## Executive Summary
The Color Theming Specialist Agent has audited all off-white color usage in the Arron Bennett Building website to prepare for eggshell background implementation.

## Current Color System

### Tailwind v4 Theme (src/styles/global.css)
```css
@theme {
  /* Navy Blue (Primary) */
  --color-navy-50: #f0f4f8;
  --color-navy-900: #1a2d4d;
  
  /* Coral (Accent) - WCAG AAA Compliant */
  --color-coral-500: #a83820;
  --color-coral-600: #8b2e19;
}
```

### Critical CSS (BaseLayout.astro - lines 68-74)
```css
body {
  background: #ffffff;  /* ← NEEDS TO CHANGE TO EGGSHELL */
}
```

## Color Usage Patterns Found

### 1. Page Backgrounds (CHANGE TO EGGSHELL)
- **BaseLayout.astro line 321**: `bg-white` on body element
- **index.astro line 165**: `bg-white` - Services section
- **index.astro line 240**: `bg-gray-50` - Working Together section  ← ALREADY OFF-WHITE
- **index.astro line 412**: `bg-white` - Accreditations section

### 2. Card Backgrounds (KEEP WHITE)
- **index.astro line 276**: `bg-white` - "Discuss your Project" card
- **index.astro line 307**: `bg-white` - "Our Client Feedback" card
- **index.astro line 384**: `bg-white` - Testimonial cards
- **index.astro line 416/427/438/449**: `bg-white` - Accreditation badge cards

### 3. Categorized Changes Needed

#### CHANGE TO EGGSHELL (#F0EAD6):
1. Body background (BaseLayout.astro)
2. Section backgrounds (index.astro and other pages)
3. Large content area backgrounds

#### KEEP WHITE (#ffffff):
1. All card components (maintain visual hierarchy)
2. Button backgrounds
3. Text colors
4. Border colors

## Implementation Strategy

### Phase 1: Add Eggshell to Theme
Update `src/styles/global.css` to add eggshell color token:
```css
@theme {
  /* Custom Color Palette */
  --color-eggshell: #F0EAD6;
  --color-navy-50: #f0f4f8;
  /* ... existing colors ... */
}
```

### Phase 2: Update BaseLayout Critical CSS
Change body background from white to eggshell:
```css
body {
  background: #F0EAD6;  /* Was: #ffffff */
}
```

### Phase 3: Update Section Backgrounds
Replace `bg-white` and `bg-gray-50` section backgrounds with `bg-eggshell`

## Files Requiring Updates

### High Priority (Page Backgrounds)
1. **src/styles/global.css** - Add eggshell color token
2. **src/layouts/BaseLayout.astro** - Update body background (line 74, 321)
3. **src/pages/index.astro** - Update section backgrounds (lines 165, 240, 412)

### Medium Priority (Other Pages)
4. **src/pages/about-us.astro** - Check for section backgrounds
5. **src/pages/our-projects.astro** - Check for section backgrounds
6. **src/pages/services.astro** - Check for section backgrounds
7. **src/pages/contact-us.astro** - Check for section backgrounds

### Low Priority (Components - Verify Only)
8. **src/components/Header.astro** - Likely navy background (no change)
9. **src/components/Footer.astro** - Verify background color
10. Card components - KEEP WHITE for contrast

## Accessibility Verification Plan

### Contrast Ratios to Test
Using WebAIM contrast checker:

1. **Navy text (#1A2D4D) on Eggshell (#F0EAD6)**
   - Expected ratio: ~10.5:1 (excellent)
   - WCAG AAA compliance: ✅

2. **Gray text (#374151) on Eggshell (#F0EAD6)**
   - Expected ratio: ~6.8:1 (very good)
   - WCAG AA compliance: ✅

3. **Coral text (#a83820) on Eggshell (#F0EAD6)**
   - Expected ratio: ~5.2:1 (good)
   - WCAG AA compliance: ✅

## Visual Testing Plan

### Pages to Screenshot (Before/After)
1. Homepage (http://localhost:4334/)
2. About page (http://localhost:4334/about-us)
3. Projects page (http://localhost:4334/our-projects)
4. Contact page (http://localhost:4334/contact-us)

### What to Verify
- ✅ Eggshell background visible throughout
- ✅ White cards stand out with good contrast
- ✅ Text remains readable
- ✅ No broken layouts
- ✅ Visual hierarchy maintained

## Next Steps

1. ✅ Add eggshell color to theme
2. ✅ Update BaseLayout body background
3. ✅ Update section backgrounds selectively
4. ✅ Start dev server and take before screenshots
5. ✅ Apply changes
6. ✅ Take after screenshots
7. ✅ Verify accessibility
8. ✅ Create final documentation

## Agent Notes
- Eggshell (#F0EAD6) is warmer than off-white with yellow/beige undertones
- Will provide excellent contrast with navy text (#1A2D4D)
- White cards will pop beautifully against eggshell backgrounds
- Change is primarily aesthetic - no functionality impact

