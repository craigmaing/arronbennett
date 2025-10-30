# Comprehensive QA Audit Agent Brief
**Agent Role:** Elite QA & Testing Specialist
**Mission:** Perform complete audit of Arron Bennett Building website
**Deadline:** Single session
**Start:** Now

## Your Authority

You are the lead QA specialist. You have access to:
- Preview server at http://localhost:4321 (currently running)
- Full source code at /c/Users/Fearn/ab1/arron-bennett-astro
- Browser DevTools inspection capabilities
- Build artifacts in /dist directory

## Scope of Work

### 1. Code Quality & Console Errors
- [ ] Navigate to each page and check browser console for errors/warnings
- [ ] Document any JavaScript errors with line numbers and messages
- [ ] Check Network tab for failed requests (404s, timeouts, failed resources)
- [ ] Identify any broken links or missing assets
- [ ] Check for TypeScript compilation errors (review build logs)
- [ ] Test all interactive elements

### 2. All Pages Comprehensive Review (18 pages minimum)

**Pages to audit:**
- Homepage (/)
- /about-us
- /services
- /contact-us
- /our-projects
- /privacy-policy
- /terms-and-conditions
- /terms-of-use
- /thank-you
- /our-services
- All project detail pages (/projects/*)

**For EACH page check:**
- Layout renders correctly (no broken styling)
- All images load properly (check Network tab)
- Forms functional (if applicable)
- All links working (internal and external)
- Mobile responsiveness (test at 375px, 768px, 1024px, 1920px)
- Content accuracy and typos
- SEO elements present (title, meta description, H1-H6 hierarchy)
- Font loading correctly
- No content overflow or misalignment
- Hover states working on interactive elements

### 3. Components Audit
- [ ] Header/Navigation (test mobile hamburger menu)
- [ ] Footer (check all links and layout)
- [ ] Contact Form (submit test if possible, field validation)
- [ ] Service cards (hover effects, layout on different breakpoints)
- [ ] Image galleries (lightbox if applicable, image loading)
- [ ] CTAs and buttons (all variants, hover/active states)
- [ ] Testimonials (carousel if applicable)
- [ ] Trust indicators (badges, logos, certifications)
- [ ] Schema markup validation

### 4. Performance Issues
- [ ] Run Lighthouse audit on each major page (min score 85+)
- [ ] Check Largest Contentful Paint (LCP) - should be < 2.5s
- [ ] Check First Contentful Paint (FCP) - should be < 1.5s
- [ ] Check Cumulative Layout Shift (CLS) - should be < 0.1
- [ ] Check image optimization (AVIF/WebP usage)
- [ ] JavaScript bundle size analysis
- [ ] Unused CSS detection
- [ ] Font loading performance
- [ ] Document any performance bottlenecks

### 5. Accessibility Audit
- [ ] Semantic HTML review (use of nav, main, article, etc.)
- [ ] ARIA labels present where needed
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Color contrast ratios (WCAG AA minimum 4.5:1 for text)
- [ ] Alt text on all images
- [ ] Form labels associated with inputs
- [ ] No keyboard traps
- [ ] Screen reader testing (if available)

### 6. SEO & Meta Tags
- [ ] Title tags (unique, under 60 chars, keyword-relevant)
- [ ] Meta descriptions (unique, under 160 chars)
- [ ] OpenGraph tags present and correct
- [ ] Twitter Card tags
- [ ] Structured data (schema.org) validation
- [ ] Sitemap generation and validity
- [ ] Robots.txt configuration
- [ ] Canonical tags present where needed
- [ ] Internal linking strategy

### 7. Design Consistency
- [ ] Color scheme adherence (navy #1A2D4D, coral #A83820, eggshell #F0EAD6)
- [ ] Typography consistency (font families, sizes, weights)
- [ ] Spacing and alignment (check against design system)
- [ ] Button styles (primary, secondary, variants)
- [ ] Card styling (consistent border radius, shadows, padding)
- [ ] Hover states consistent across similar elements
- [ ] Responsive breakpoint consistency
- [ ] Logo and branding elements

### 8. User Experience Issues
- [ ] Clear, compelling CTAs on each page
- [ ] Intuitive navigation structure
- [ ] Form usability (fields clearly labeled, error messages helpful)
- [ ] Mobile UX (touch targets > 48px, readable text, proper spacing)
- [ ] Loading states visible (spinners, skeleton screens where applicable)
- [ ] Error messages user-friendly and actionable
- [ ] Call-to-action visibility and prominence
- [ ] Page hierarchy and visual flow

### 9. Content Quality
- [ ] No typos or grammatical errors
- [ ] Consistent tone and voice
- [ ] Accurate business information
- [ ] Phone numbers/email properly formatted and clickable
- [ ] Address information correct
- [ ] Service descriptions accurate
- [ ] Project descriptions match images

### 10. Browser Compatibility
- [ ] Test in at least 2 browsers (Chrome preferred + one other)
- [ ] Check rendering consistency
- [ ] Form submission across browsers
- [ ] CSS effects and animations work properly

## Severity Levels

**Critical:** Breaks functionality, prevents access, errors in console
**High:** Poor UX, broken styling, missing content, accessibility violations
**Medium:** Visual inconsistencies, minor layout issues, missing optimizations
**Low:** Polish issues, performance optimization opportunities

## Deliverable Format

Create **COMPREHENSIVE-QA-AUDIT-FINAL-REPORT.md** with:

```markdown
# Comprehensive QA Audit Report - Arron Bennett Building

## Executive Summary
- Total pages audited: X
- Critical issues: X
- High priority issues: X
- Medium priority issues: X
- Low priority issues: X
- Overall site status: PASS/FAIL

## Section 1: Code Quality & Console Errors
### Findings
[List all console errors, network failures, broken assets]

### Issues Found
- [Critical] Issue name - Impact
- [High] Issue name - Impact
- [Medium] Issue name - Impact
- [Low] Issue name - Impact

## Section 2: Pages Review Summary
### Page-by-Page Breakdown
- [Page name] - Status: PASS/FAIL
  - Issues found: X
  - Recommendations: []

## Section 3: Component Audit
[Detailed component testing results]

## Section 4: Performance Metrics
- Homepage Lighthouse: XX/100
- Average LCP: X.Xs
- Average FCP: X.Xs
- Average CLS: X.X
[Include scores for all major pages]

## Section 5: Accessibility Report
[A11y issues and compliance status]

## Section 6: SEO & Meta Tags
[Meta tag audit results]

## Section 7: Design Consistency
[Design system adherence check]

## Section 8: Priority Fixes (In Order)
1. [Critical Issue] - Fix: [Specific action]
2. [High Issue] - Fix: [Specific action]
...

## Section 9: What's Working Well
- [Positive finding 1]
- [Positive finding 2]
...

## Section 10: Recommendations
[Strategic improvements and best practices]
```

## Testing Tools Available

- Browser DevTools (Chrome/Edge built-in)
- Lighthouse (automated via DevTools)
- Manual testing (navigation, form submission, etc.)
- cURL for API/endpoint testing
- File system inspection for configuration review

## Important Notes

1. **Be thorough but strategic** - Focus on issues that impact user experience and business goals
2. **Document everything** - Even "passing" items should be noted
3. **Test realistically** - Use actual user flows, not just quick clicks
4. **Cross-reference** - Check source code to understand why issues exist
5. **Include evidence** - Screenshot paths, file locations, specific line numbers
6. **Prioritize ruthlessly** - What breaks the site? What breaks the business?
7. **Suggest fixes** - Don't just identify problems, explain how to fix them

## Success Criteria

- Audit is thorough and identifies 90%+ of actual issues
- Issues are properly categorized by severity
- Each issue has actionable fix recommendations
- Report is clear and professional
- Includes positive findings and what works well
- Provides strategic recommendations for future improvements

## Timeline

- Start: Now
- Completion: Single session, as comprehensive as possible
- Report delivery: One complete, detailed markdown file

---

**Begin audit now. Document everything. Be thorough. Be strategic.**
