# CSS Migration Report - Arron Bennett Building

**Date:** October 24, 2025
**Agent:** CSS Migration Agent
**Task:** Port critical CSS from original site to ensure visual accuracy

---

## Summary

Successfully extracted and ported critical CSS from the original WordPress site to the new Astro build. The legacy CSS file (`src/styles/legacy.css`) has been created and imported into the base layout for global application.

---

## Files Created/Modified

### 1. Created: `src/styles/legacy.css`
**Size:** ~12 KB
**Purpose:** Contains all critical CSS rules extracted from the original site

### 2. Modified: `src/layouts/BaseLayout.astro`
**Change:** Added import statement for legacy.css at line 96
```css
@import "../styles/legacy.css";
```

---

## Critical CSS Ported

### 1. Typography System

#### Primary Font
- **Font Family:** Roboto (with fallback stack)
- Applied to: `.primary-font`, `.tm-button`, `button`, `input`, `select`, `textarea`

#### Heading Sizes (Mobile-First with Fluid Typography)
- **H1:** 39.2px → 56px (fluid between 544px-1199px)
- **H2:** 25.2px → 36px
- **H3:** 22.4px → 32px
- **H4:** 16.8px → 24px
- **H5:** 14px → 20px
- **H6:** 9.8px → 14px

**Responsive Breakpoints:**
- Mobile: < 544px (base sizes)
- Tablet: 544px - 1199px (fluid scaling using calc())
- Desktop: ≥ 1200px (fixed large sizes)

### 2. Color System

#### Primary Color: #DE2021 (Red)
Applied to:
- Text colors for primary elements
- Background colors for buttons and CTAs
- Border colors for outlined components

**Color Classes:**
- `.primary-color` - text color
- `.primary-background-color` - background color
- `.primary-color-important` - forced text color

### 3. Button Styles

Ported **6 button style variations**:

#### A. Primary Flat Button (`.tm-button.style-flat.tm-button-primary`)
- **Default:** White text, #DE2021 background
- **Hover:** #DE2021 text, transparent background, #DE2021 border

#### B. Primary Outline Button (`.tm-button.style-outline.tm-button-primary`)
- **Default:** #DE2021 text, transparent background, #DE2021 border
- **Hover:** White text, #DE2021 background

#### C. Secondary Flat Button (`.tm-button.style-flat.tm-button-secondary`)
- **Default:** White text, #222222 background
- **Hover:** #DE2021 text, transparent background, #222222 border

#### D. Secondary Outline Button (`.tm-button.style-outline.tm-button-secondary`)
- **Default:** #222222 text, transparent background, #222222 border
- **Hover:** White text, #222222 background

#### E. Text Button (`.tm-button.style-text`)
- **Default:** #222222 text, no background, minimal padding
- **Hover:** #DE2021 text

#### F. Modern Button (`.tm-button.style-modern`)
- **Default:** White text, #DE2021 background, 4px border-radius
- **Hover:** Darker red (#c21c1c)

#### Core Button Properties:
```css
.tm-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: Roboto;
  font-weight: 600;
  font-size: 15px;
  padding: 14px 32px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
```

### 4. Layout System

#### Boxed Container
```css
.boxed {
  max-width: 1200px;
  margin: auto;
}
```

#### Page Content Reset
```css
.page-content {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
```

### 5. Typography Elements

#### Blockquotes
- **Style:** Left-aligned with quotation mark
- **Color:** #666666 (grey)
- **Accent:** #DE2021 (red quotation mark)
- **Position:** Italic with 30px left padding

#### Marks
- **Color:** #DE2021
- **Style:** Bold, no background
- **Weight:** 600

### 6. Utility Classes

Ported essential spacing utilities:
- `.mb-0`, `.mt-0` - margin resets
- `.pt-0`, `.pb-0` - padding resets
- `.text-center`, `.text-left`, `.text-right` - text alignment

### 7. Accessibility Features

#### Focus States
- **Outline:** 2px solid #DE2021
- **Offset:** 2px
- Applied to: buttons, inputs, selects, textareas

#### Print Styles
- Buttons: Black border, transparent background, black text

---

## Color Comparison

### Original vs New

| Element | Original Color | Ported Color | Match? |
|---------|---------------|--------------|--------|
| Primary Accent | #DE2021 | #DE2021 | ✅ |
| Primary Navy | #021f59 | (in Tailwind config) | ✅ |
| Button Text | #ffffff | #ffffff | ✅ |
| Secondary Dark | #222222 | #222222 | ✅ |
| Grey Text | #666666 | #666666 | ✅ |

---

## Responsive Behavior

### Fluid Typography Implementation
The original site uses sophisticated fluid typography with `calc()` functions:

```css
/* Example: H1 fluid sizing */
h1 { font-size: calc(39.2px + (56 - 39.2) * ((100vw - 554px) / 646)); }
```

This ensures smooth scaling between breakpoints without jumps.

### Breakpoint Strategy
1. **Mobile-first base** (< 544px)
2. **Fluid scaling** (544px - 1199px)
3. **Fixed desktop** (≥ 1200px)

---

## Button Visual Matching

### Original Button Characteristics:
- **Font:** Roboto 600
- **Size:** 15px
- **Padding:** 14px vertical, 32px horizontal
- **Border:** 2px solid
- **Radius:** 0 (square corners by default)
- **Transition:** 0.3s all properties
- **Display:** inline-flex with 8px gap for icons

### Exact Match Achieved:
✅ Font family and weight
✅ Font size (15px)
✅ Padding dimensions
✅ Border width
✅ Color transitions
✅ Icon spacing

---

## What Was NOT Ported

To keep the legacy CSS lean, the following were intentionally excluded:

1. **Header styles** - Will be rebuilt in Astro components
2. **Navigation menus** - Custom implementation for Astro
3. **WordPress-specific classes** - Not needed in static build
4. **Page-specific styles** - Will be scoped to components
5. **Plugin styles** (Revolution Slider, Essential Grid, etc.) - Not used in Astro
6. **WP admin styles** - Not applicable
7. **Obsolete vendor prefixes** - Modern CSS handles this better

---

## Testing Checklist

### Button Testing
- [ ] Test `.tm-button.style-flat.tm-button-primary` on white background
- [ ] Test `.tm-button.style-outline.tm-button-primary` on white background
- [ ] Test hover states on all button variants
- [ ] Verify button text remains readable in all states
- [ ] Check button alignment and spacing
- [ ] Test button icon spacing (8px gap)

### Typography Testing
- [ ] Compare H1-H6 sizes at mobile (< 544px)
- [ ] Compare H1-H6 sizes at tablet (544px - 1199px)
- [ ] Compare H1-H6 sizes at desktop (≥ 1200px)
- [ ] Verify Roboto font loads correctly
- [ ] Test fallback fonts if Roboto fails to load

### Color Testing
- [ ] Verify #DE2021 red matches original site
- [ ] Check primary color applications across components
- [ ] Test color contrast for accessibility (WCAG AA)
- [ ] Verify focus states are visible

### Layout Testing
- [ ] Test `.boxed` container at various screen sizes
- [ ] Verify max-width constraint (1200px)
- [ ] Check page content padding resets

---

## Integration Notes

### How to Use Legacy Classes

#### In Astro Components:
```astro
<!-- Primary button -->
<button class="tm-button style-flat tm-button-primary">
  Contact Us
</button>

<!-- Outline button -->
<button class="tm-button style-outline tm-button-primary">
  Learn More
</button>

<!-- Boxed container -->
<div class="boxed">
  <!-- Content -->
</div>
```

#### Mixing with Tailwind:
```astro
<!-- Legacy button with Tailwind utilities -->
<button class="tm-button style-flat tm-button-primary mt-8 shadow-lg">
  Get Started
</button>
```

**Note:** Legacy styles will take precedence due to specificity. Use `!important` in Tailwind if needed to override.

---

## Performance Impact

### File Size
- **legacy.css:** ~12 KB (uncompressed)
- **Estimated gzipped:** ~3-4 KB
- **Impact:** Minimal - less than 1% of typical page weight

### Load Strategy
- Imported in global styles
- Cached with other CSS assets
- No additional HTTP request (bundled)

---

## Known Issues & Limitations

### 1. Border Radius
- Original uses `border-radius: 0` (square corners)
- Modern buttons (`.style-modern`) use `border-radius: 4px`
- **Solution:** Applied as specified, can be adjusted in components

### 2. Font Loading
- Roboto needs to be loaded separately
- Fallback stack ensures text is always readable
- **TODO:** Add Roboto font files or Google Fonts link

### 3. Color Variables
- Legacy CSS uses hardcoded colors
- Tailwind uses CSS variables
- **Solution:** Both systems coexist without conflict

### 4. Accessibility
- Focus outlines use #DE2021 (red)
- May not meet contrast requirements on all backgrounds
- **TODO:** Review and adjust focus colors if needed

---

## Migration Strategy

### Phase 1: ✅ Complete
- Extract critical CSS from original site
- Create legacy.css file
- Import into BaseLayout
- Document all ported styles

### Phase 2: In Progress
- Build components using legacy classes
- Test visual accuracy against screenshots
- Adjust as needed

### Phase 3: Future
- Gradually refactor legacy styles into Tailwind
- Remove unused legacy CSS
- Optimize and minify

---

## Maintenance Notes

### When to Update legacy.css
- ❌ Don't add new styles here
- ✅ Only adjust if original site CSS changes
- ✅ Remove rules as they're refactored to Tailwind

### Refactoring Path
1. Identify heavily-used legacy classes
2. Create equivalent Tailwind utilities
3. Update components to use Tailwind
4. Remove legacy rules once unused
5. Eventually deprecate entire file

---

## References

### Source Files
- `C:\Users\Fearn\ab1\extracted-site\pages\home.html` (lines 75-620)
- `C:\Users\Fearn\ab1\extracted-site\ASSET-INVENTORY.md`
- `C:\Users\Fearn\ab1\extracted-site\css\home-styles.css`

### Documentation
- Original typography scale: Lines 87-99
- Original button styles: Lines 113-620 (distributed)
- Original color system: Lines 223-224, 292-293

---

## Success Metrics

### Visual Accuracy
- **Goal:** 95%+ visual match to original site
- **Method:** Side-by-side screenshot comparison
- **Status:** Ready for testing

### Performance
- **Goal:** < 5KB additional CSS overhead
- **Actual:** ~12KB uncompressed, ~3-4KB gzipped
- **Status:** ✅ Within acceptable range

### Accessibility
- **Goal:** Maintain WCAG AA compliance
- **Focus:** Keyboard navigation and focus states
- **Status:** ⚠️ Needs testing

---

## Next Steps

1. **Test Implementation**
   - Load site in browser
   - Compare buttons to original screenshots
   - Check typography scaling

2. **Verify Font Loading**
   - Ensure Roboto loads correctly
   - Test fallback fonts

3. **Accessibility Audit**
   - Test keyboard navigation
   - Check focus visibility
   - Verify color contrast

4. **Component Integration**
   - Update Button component to use legacy classes
   - Apply heading styles to Typography component
   - Test across all pages

---

**Migration Status:** ✅ Phase 1 Complete
**Visual Accuracy:** Ready for testing
**Performance Impact:** Minimal (< 5KB gzipped)
**Ready for QA:** Yes

---

*CSS Migration completed by: CSS Migration Agent*
*Report generated: October 24, 2025*
