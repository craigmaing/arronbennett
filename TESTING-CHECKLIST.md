# Projects Gallery - Testing Checklist

Use this checklist to ensure the gallery is production-ready before deployment.

## Pre-Testing Setup

- [ ] All real project images added to `/public/images/projects/`
- [ ] Images optimized (< 500KB each)
- [ ] Project data updated with accurate information
- [ ] Development server running (`npm run dev`)
- [ ] Browser developer tools open

---

## 1. Functional Testing

### Gallery Page Loading
- [ ] Page loads without errors
- [ ] No console errors or warnings
- [ ] All images load correctly
- [ ] Hero section displays properly
- [ ] CTA section visible

### Filter Functionality
- [ ] **All Projects** button works (default state)
- [ ] **Stone Masonry** filter shows only masonry projects
- [ ] **Renovations** filter shows only renovation projects
- [ ] **New Builds** filter shows only new build projects
- [ ] **Landscaping** filter shows only landscaping projects
- [ ] Active filter button has correct styling
- [ ] Filtered projects animate smoothly
- [ ] Hidden projects don't take up space

### Project Cards
- [ ] All 15 project cards render
- [ ] Images display at correct aspect ratio (4:3)
- [ ] Category badges show correct text
- [ ] Locations display properly
- [ ] Project titles readable
- [ ] Descriptions truncate at 3 lines
- [ ] Year and completion time display
- [ ] Hover effects work (zoom, shadow)

### Lightbox Modal
- [ ] Clicking project card opens lightbox
- [ ] Lightbox displays correct image
- [ ] Project title shows in lightbox
- [ ] Location shows in lightbox
- [ ] Image counter displays (e.g., "Image 1 of 3")
- [ ] Close button works
- [ ] Previous button works
- [ ] Next button works
- [ ] Navigation buttons hide when only 1 image
- [ ] Clicking backdrop closes lightbox
- [ ] Body scroll disabled when lightbox open

### Keyboard Navigation
- [ ] **Tab** key navigates through elements
- [ ] **Enter** key activates filter buttons
- [ ] **Esc** key closes lightbox
- [ ] **← Left arrow** navigates to previous image
- [ ] **→ Right arrow** navigates to next image
- [ ] Focus indicators visible
- [ ] Focus trapped in lightbox when open

### Links & Navigation
- [ ] CTA button links to contact page
- [ ] All internal links work
- [ ] External links open in new tab (if any)
- [ ] Back button works correctly

---

## 2. Responsive Design Testing

### Desktop (1920×1080)
- [ ] Grid shows 3-4 columns
- [ ] Hero section looks balanced
- [ ] Filter bar well-spaced
- [ ] Images sharp and clear
- [ ] Text readable
- [ ] No horizontal scroll

### Laptop (1366×768)
- [ ] Grid shows 3 columns
- [ ] All content visible
- [ ] No layout breaks
- [ ] Hover effects work

### Tablet Portrait (768×1024)
- [ ] Grid shows 2 columns
- [ ] Filter buttons wrap properly
- [ ] Images load correctly
- [ ] Lightbox displays well
- [ ] Touch targets adequate size

### Tablet Landscape (1024×768)
- [ ] Grid shows 2-3 columns
- [ ] Layout adapts smoothly
- [ ] Navigation accessible

### Mobile Portrait (375×667 - iPhone SE)
- [ ] Grid shows 1 column
- [ ] Filter buttons stack/wrap
- [ ] Text readable (not too small)
- [ ] Images load
- [ ] Lightbox works on mobile
- [ ] Touch interactions smooth

### Mobile Landscape (667×375)
- [ ] Content accessible
- [ ] Lightbox usable
- [ ] No awkward cropping

### Large Mobile (414×896 - iPhone 11)
- [ ] Layout scales appropriately
- [ ] All features work
- [ ] Comfortable spacing

### Small Mobile (320×568 - iPhone 5/SE)
- [ ] Page still functional
- [ ] Text readable
- [ ] Buttons tappable
- [ ] Images load

---

## 3. Performance Testing

### Page Load Speed
- [ ] Initial page load < 3 seconds
- [ ] Time to Interactive < 5 seconds
- [ ] No layout shifts (CLS < 0.1)
- [ ] Images lazy load below fold

### Lighthouse Audit
Run Lighthouse in Chrome DevTools:

**Desktop scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

**Mobile scores:**
- [ ] Performance: 85+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Network Conditions
Test with throttling (Chrome DevTools):

**Fast 3G:**
- [ ] Page usable within 5 seconds
- [ ] Filters work smoothly
- [ ] Images load progressively

**Slow 3G:**
- [ ] Page loads (even if slow)
- [ ] Core content visible
- [ ] No JavaScript errors

**Offline:**
- [ ] Graceful error message
- [ ] Basic layout visible

### Image Optimization
- [ ] All images < 500KB
- [ ] Images use correct format (JPEG/WebP)
- [ ] Lazy loading working
- [ ] No duplicate image loads

---

## 4. Accessibility Testing

### Screen Reader (NVDA/JAWS/VoiceOver)
- [ ] Page structure makes sense
- [ ] Headings in logical order
- [ ] Images have meaningful alt text
- [ ] Filter buttons announced correctly
- [ ] Lightbox announces on open/close
- [ ] Navigation buttons labeled
- [ ] No "unlabeled" elements

### Keyboard-Only Navigation
- [ ] Can reach all interactive elements
- [ ] Focus order logical
- [ ] No keyboard traps
- [ ] Skip to content link works
- [ ] Can close modals with keyboard

### Color Contrast
Use WAVE or axe DevTools:
- [ ] Text meets WCAG AA (4.5:1 for normal text)
- [ ] Large text meets WCAG AA (3:1)
- [ ] Interactive elements distinguishable
- [ ] Focus indicators visible

### ARIA Attributes
- [ ] Buttons have aria-label
- [ ] Modal has role="dialog"
- [ ] aria-hidden used correctly
- [ ] Live regions announce changes

### Forms (if applicable)
- [ ] Labels associated with inputs
- [ ] Error messages announced
- [ ] Required fields indicated

---

## 5. Browser Compatibility

### Chrome (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox (Latest)
- [ ] Displays correctly
- [ ] Filtering works
- [ ] Lightbox functions

### Safari (Latest)
- [ ] Layout correct
- [ ] Images load
- [ ] Hover effects work
- [ ] Animations play

### Edge (Latest)
- [ ] Full functionality
- [ ] No rendering issues

### Mobile Safari (iOS 14+)
- [ ] Touch interactions work
- [ ] Scrolling smooth
- [ ] No zoom issues

### Mobile Chrome (Android)
- [ ] All features functional
- [ ] Performance acceptable
- [ ] No layout breaks

### Legacy Browser Testing (Optional)
If supporting older browsers:
- [ ] IE 11: Basic layout works
- [ ] Safari 12: Core features work

---

## 6. SEO & Meta Tags

### Page Title & Description
- [ ] Title tag present and descriptive
- [ ] Meta description present (< 160 chars)
- [ ] Title unique from other pages

### Open Graph Tags
- [ ] og:title set
- [ ] og:description set
- [ ] og:image set (social sharing image)
- [ ] og:url set

### Twitter Cards
- [ ] twitter:card set
- [ ] twitter:title set
- [ ] twitter:description set
- [ ] twitter:image set

### Structured Data
- [ ] Schema.org markup present
- [ ] Validates in Google Rich Results Test
- [ ] BreadcrumbList implemented (if applicable)

### Image SEO
- [ ] All images have alt text
- [ ] Alt text descriptive and unique
- [ ] File names descriptive
- [ ] Image dimensions specified

### Technical SEO
- [ ] Canonical URL set
- [ ] No mixed content warnings (HTTP/HTTPS)
- [ ] Links use descriptive anchor text
- [ ] Page has proper heading hierarchy (H1→H2→H3)

---

## 7. Security & Best Practices

### Security Headers
- [ ] Content-Security-Policy set (if applicable)
- [ ] X-Frame-Options set
- [ ] No sensitive data in console
- [ ] No API keys exposed

### External Resources
- [ ] External scripts from trusted sources
- [ ] Subresource integrity (SRI) used
- [ ] HTTPS everywhere

### Code Quality
- [ ] No console.log statements in production
- [ ] No commented-out code
- [ ] Proper error handling
- [ ] Minified assets in production

---

## 8. Content Review

### Text Content
- [ ] No typos or grammatical errors
- [ ] Project descriptions accurate
- [ ] Locations correct
- [ ] Years and timelines accurate
- [ ] Professional tone maintained

### Image Content
- [ ] All images high quality
- [ ] Images relevant to project
- [ ] Consistent image style
- [ ] No placeholder images remain
- [ ] Copyright compliance

### Brand Consistency
- [ ] Colors match brand guidelines
- [ ] Fonts consistent
- [ ] Logo displayed correctly
- [ ] Tone of voice consistent

---

## 9. Cross-Device Testing

Test on actual devices if possible:

### iOS Devices
- [ ] iPhone 14 Pro / iOS 17
- [ ] iPhone SE / iOS 16
- [ ] iPad Air / iPadOS 17
- [ ] Safari browser

### Android Devices
- [ ] Samsung Galaxy S23
- [ ] Google Pixel 7
- [ ] OnePlus device
- [ ] Chrome browser

### Desktop Devices
- [ ] Windows 11 laptop
- [ ] MacBook Pro (M1/M2)
- [ ] iMac with large display
- [ ] Multiple browsers

---

## 10. Final Pre-Launch Checks

### Code Review
- [ ] Code follows best practices
- [ ] Comments added where needed
- [ ] No TODO comments remain
- [ ] Git commits clean and descriptive

### Documentation
- [ ] README.md up to date
- [ ] Image setup guide reviewed
- [ ] Deployment instructions ready
- [ ] Known issues documented

### Backup & Version Control
- [ ] All files committed to Git
- [ ] Backup of production data
- [ ] Version tagged (e.g., v1.0.0)

### Monitoring Setup
- [ ] Analytics installed (Google Analytics)
- [ ] Error tracking setup (Sentry, etc.)
- [ ] Uptime monitoring configured
- [ ] Performance monitoring active

### Legal & Compliance
- [ ] Privacy policy linked (if collecting data)
- [ ] Cookie consent (if applicable)
- [ ] Terms of service (if needed)
- [ ] Copyright notices correct

---

## Test Results Template

Use this to record your test results:

```
Date: __________
Tester: __________
Browser: __________
Device: __________

✅ PASSED: ___ tests
❌ FAILED: ___ tests
⚠️ WARNING: ___ issues

Critical Issues:
1. _____________________
2. _____________________

Minor Issues:
1. _____________________
2. _____________________

Notes:
_______________________
_______________________
```

---

## Issue Priority Levels

**🔴 Critical (Must fix before launch):**
- Site doesn't load
- Core features broken
- Security vulnerabilities
- Accessibility blockers

**🟡 High (Should fix before launch):**
- Layout breaks on common devices
- Poor performance
- SEO issues
- Broken links

**🟢 Medium (Fix soon after launch):**
- Minor visual issues
- Edge case bugs
- Nice-to-have features

**⚪ Low (Future enhancement):**
- Cosmetic improvements
- Feature requests
- Optimization ideas

---

## Sign-Off

Once all critical and high-priority items are resolved:

- [ ] **Developer Sign-Off**: _____________ Date: _______
- [ ] **Designer Sign-Off**: _____________ Date: _______
- [ ] **Client Review**: _____________ Date: _______
- [ ] **Final Approval**: _____________ Date: _______

---

## Post-Launch Monitoring (First 48 Hours)

- [ ] Check analytics for traffic
- [ ] Monitor error logs
- [ ] Review user feedback
- [ ] Check performance metrics
- [ ] Test all major features again
- [ ] Respond to any bug reports

**🎉 Ready for Launch!**
