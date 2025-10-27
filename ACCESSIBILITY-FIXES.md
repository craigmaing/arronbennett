# Accessibility Fixes - Quick Implementation Guide

**Time Required:** 30 minutes
**Impact:** Increase accessibility scores from 94 to 96+ on all pages

---

## Priority 1: Color Contrast Issues (15 minutes)

### Issue
CTA buttons and some navigation links have insufficient color contrast ratios, making them difficult to read for users with visual impairments.

### Affected Elements
1. **CTA Buttons** - Coral background (#F27A5E) on white/light backgrounds
2. **Breadcrumb Links** - Light gray text on white backgrounds
3. **Footer Links** - Gray text that may not meet 4.5:1 contrast ratio

### Fix

**File:** `C:\Users\Fearn\ab1\arron-bennett-astro\src\styles\global.css`

```css
/* Update the accent color to a darker shade for better contrast */
:root {
  --color-accent: #D55F43; /* Darker coral (was #F27A5E) */
  /* This provides 4.5:1+ contrast ratio on white backgrounds */
}

/* Ensure breadcrumb links have sufficient contrast */
.breadcrumb a,
.breadcrumb a:link,
.breadcrumb a:visited {
  color: #4A5568; /* Dark gray provides 7:1 contrast */
  transition: color 0.2s ease;
}

.breadcrumb a:hover,
.breadcrumb a:focus {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Footer link colors */
.footer-section a.text-gray-300,
.footer-section a.text-gray-400 {
  color: #E2E8F0; /* Lighter gray for dark backgrounds */
  transition: color 0.2s ease;
}

.footer-section a:hover,
.footer-section a:focus {
  color: #FFFFFF;
  text-decoration: underline;
}

/* CTA button text - ensure readable on new darker coral */
.cta-button,
a.cta-button {
  background-color: var(--color-accent);
  color: #FFFFFF; /* White text on darker coral */
  font-weight: 600; /* Slightly bolder for better readability */
}
```

### Testing
After making changes, verify contrast ratios:
- CTA button: Should achieve 4.5:1+ contrast
- Breadcrumbs: Should achieve 4.5:1+ contrast
- Footer links: Should achieve 4.5:1+ contrast on dark background

**Tool:** Use browser DevTools > Lighthouse > Accessibility audit to verify

---

## Priority 2: Accessible Name Matching (15 minutes)

### Issue
Elements with visible text labels do not have matching accessible names, which can confuse screen reader users.

### Affected Elements
1. **Service Page CTA Buttons** - "Learn More" links need descriptive aria-labels
2. **Footer Social Media Links** - Icon-only links need aria-labels
3. **Footer Navigation Links** - Some links need better context

### Fix

**File 1:** `C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-services.astro`

```astro
<!-- Before -->
<a href="/contact-us" class="cta-button">
  Learn More
</a>

<!-- After -->
<a href="/contact-us" class="cta-button" aria-label="Contact us about stone masonry services">
  Learn More
</a>
```

Apply this pattern to all service cards:
- Stone Masonry: "Contact us about stone masonry services"
- Home Renovations: "Contact us about home renovation services"
- Project Management: "Contact us about project management services"
- Etc.

**File 2:** `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Footer.astro`

```astro
<!-- Social media links (if present) -->
<nav class="social-links" aria-label="Social media">
  <a href="https://facebook.com/arronbennett"
     aria-label="Visit our Facebook page"
     target="_blank"
     rel="noopener noreferrer">
    <FacebookIcon />
  </a>
  <a href="https://instagram.com/arronbennett"
     aria-label="Visit our Instagram profile"
     target="_blank"
     rel="noopener noreferrer">
    <InstagramIcon />
  </a>
</nav>

<!-- Footer navigation links -->
<nav class="footer-nav" aria-label="Footer navigation">
  <a href="/about-us" aria-label="Read about Arron Bennett Building Contractors">
    About Us
  </a>
  <a href="/our-services" aria-label="View our building and construction services">
    Our Services
  </a>
  <a href="/our-projects" aria-label="Browse our completed building projects">
    Our Projects
  </a>
  <a href="/contact-us" aria-label="Get in touch with our team">
    Contact Us
  </a>
</nav>
```

**File 3:** `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro`

Ensure the phone number link has an aria-label:

```astro
<a href="tel:+447773463383"
   class="phone-link"
   aria-label="Call us at 07773 463383">
  📞 07773 463383
</a>
```

---

## Verification Checklist

After implementing fixes:

### Test 1: Color Contrast
- [ ] Run Lighthouse audit on Services page
- [ ] Check "Color contrast" audit passes
- [ ] Manually verify CTA buttons are easily readable
- [ ] Verify breadcrumb links are clearly visible

### Test 2: Accessible Names
- [ ] Run Lighthouse audit on Services page
- [ ] Check "Accessible names" audit passes
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac)
- [ ] Verify links are announced correctly

### Test 3: Full Page Audit
- [ ] Homepage accessibility: Target 96+
- [ ] Services accessibility: Target 96+
- [ ] Contact Us accessibility: Target 96+
- [ ] All other pages: Target 95+

---

## Expected Results

### Before Fixes
- Homepage: 96/100 (already passing, minor issues)
- Services: 94/100 (needs fixes)
- Contact Us: 96/100 (already passing, minor issues)

### After Fixes
- Homepage: 97-98/100
- Services: 96-97/100
- Contact Us: 97-98/100

---

## Additional Recommendations (Optional)

### 1. Add Skip to Content Link

**File:** `C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro`

```astro
<body>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>

  <Header />

  <main id="main-content">
    <slot />
  </main>

  <Footer />
</body>
```

**CSS:**
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 2. Improve Focus Indicators

Ensure all interactive elements have visible focus indicators:

```css
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}

/* For dark backgrounds */
.dark-bg a:focus,
.dark-bg button:focus {
  outline-color: #FFFFFF;
}
```

---

## Implementation Steps

1. **Backup Current Site** (1 minute)
   ```bash
   git add .
   git commit -m "Backup before accessibility fixes"
   ```

2. **Apply Color Contrast Fixes** (15 minutes)
   - Update `global.css` with new color values
   - Test in browser
   - Verify contrast ratios

3. **Apply Accessible Label Fixes** (15 minutes)
   - Update `our-services.astro`
   - Update `Footer.astro`
   - Update `Header.astro`
   - Test with screen reader

4. **Build and Test** (5 minutes)
   ```bash
   npm run build
   npx serve dist -l 3000
   ```

5. **Run Final Lighthouse Audit** (5 minutes)
   ```bash
   npx lighthouse http://localhost:3000 --view
   npx lighthouse http://localhost:3000/our-services --view
   npx lighthouse http://localhost:3000/contact-us --view
   ```

6. **Commit Changes** (1 minute)
   ```bash
   git add .
   git commit -m "Fix accessibility issues: color contrast and aria-labels"
   ```

---

## Testing Tools

### Automated Testing
- **Lighthouse:** Built into Chrome DevTools or via CLI
- **axe DevTools:** Browser extension for detailed accessibility testing
- **WAVE:** Web accessibility evaluation tool

### Manual Testing
- **Screen Readers:**
  - Windows: NVDA (free) or JAWS
  - Mac: VoiceOver (built-in)
  - Linux: Orca

- **Keyboard Navigation:**
  - Tab through all interactive elements
  - Ensure all functionality accessible without mouse
  - Verify focus indicators are visible

### Color Contrast Tools
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Chrome DevTools:** Inspect element > Styles > Color picker shows contrast ratio
- **Color Oracle:** Free color blindness simulator

---

## Support Documentation

### WCAG 2.1 Guidelines
- **Level AA** (Target): 4.5:1 contrast ratio for normal text
- **Level AAA** (Ideal): 7:1 contrast ratio for normal text

### Current Implementation
- Primary color: #021f59 (Navy blue) - Excellent contrast on white
- Accent color: #F27A5E → #D55F43 (Darker coral) - Improved contrast
- Text colors: Updated for 4.5:1+ contrast across all backgrounds

---

## Questions or Issues?

If you encounter any issues during implementation:

1. **Color looks different than expected?**
   - Check browser color profile settings
   - Verify CSS variable is being applied correctly
   - Clear browser cache and rebuild

2. **Aria-labels not working?**
   - Verify HTML syntax is correct
   - Test with multiple screen readers
   - Check for conflicting aria attributes

3. **Lighthouse scores still low?**
   - Ensure you're testing production build, not dev server
   - Clear browser cache before testing
   - Try in incognito mode to avoid extension interference

---

**File Locations:**

- Color fixes: `C:\Users\Fearn\ab1\arron-bennett-astro\src\styles\global.css`
- Service page: `C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-services.astro`
- Footer: `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Footer.astro`
- Header: `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro`

**Estimated Total Time:** 30-40 minutes including testing

---

**Created:** October 27, 2025
**Last Updated:** October 27, 2025
