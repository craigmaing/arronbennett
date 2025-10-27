# Lighthouse Testing Guide
## Arron Bennett Building - Performance & SEO Audits

---

## Pre-Testing Checklist

### Before Running Lighthouse

- [ ] Build the site for production (`npm run build`)
- [ ] Preview production build (`npm run preview`)
- [ ] Test on localhost first, then staging, then production
- [ ] Clear browser cache
- [ ] Close other tabs and applications
- [ ] Use incognito mode

---

## Running Lighthouse Audits

### Method 1: Chrome DevTools (Recommended for Development)

1. Open Chrome/Edge browser
2. Navigate to the page to test
3. Open DevTools (F12 or Ctrl+Shift+I)
4. Click "Lighthouse" tab
5. Select categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
6. Device: Desktop and Mobile (run separate tests)
7. Click "Analyze page load"

### Method 2: PageSpeed Insights (Recommended for Production)

1. Go to https://pagespeed.web.dev/
2. Enter URL: `https://arronbennettbuilding.co.uk`
3. Click "Analyze"
4. Review Mobile and Desktop tabs
5. Check "Origin Summary" for 28-day average

### Method 3: Lighthouse CI (Automated)

```bash
# Install Lighthouse CI globally
npm install -g @lhci/cli

# Run Lighthouse CI
lhci autorun --collect.url=http://localhost:4321
```

### Method 4: CLI (Command Line)

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://arronbennettbuilding.co.uk --view

# Save report
lighthouse https://arronbennettbuilding.co.uk --output html --output-path ./lighthouse-report.html

# Mobile test
lighthouse https://arronbennettbuilding.co.uk --preset=mobile --view
```

---

## Target Scores

### Desktop Targets

| Category | Target | Minimum Acceptable |
|----------|--------|-------------------|
| Performance | 98-100 | 95+ |
| Accessibility | 98-100 | 95+ |
| Best Practices | 98-100 | 95+ |
| SEO | 100 | 100 |

### Mobile Targets

| Category | Target | Minimum Acceptable |
|----------|--------|-------------------|
| Performance | 95-98 | 90+ |
| Accessibility | 98-100 | 95+ |
| Best Practices | 98-100 | 95+ |
| SEO | 100 | 100 |

---

## Core Web Vitals Targets

### Field Data (Real User Metrics)

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | <2.5s | 2.5s - 4.0s | >4.0s |
| FID | <100ms | 100ms - 300ms | >300ms |
| CLS | <0.1 | 0.1 - 0.25 | >0.25 |

### Lab Data (Lighthouse Metrics)

| Metric | Target | Good | Poor |
|--------|--------|------|------|
| First Contentful Paint | <1.0s | <1.8s | >3.0s |
| Speed Index | <2.0s | <3.4s | >5.8s |
| Largest Contentful Paint | <1.5s | <2.5s | >4.0s |
| Time to Interactive | <2.5s | <3.8s | >7.3s |
| Total Blocking Time | <150ms | <300ms | >600ms |
| Cumulative Layout Shift | <0.05 | <0.1 | >0.25 |

---

## Page-by-Page Testing Schedule

### Priority Pages (Test First)

1. **Homepage** (`/`)
   - Highest authority page
   - Most traffic
   - First impression

2. **Main Services Page** (`/services`)
   - High conversion potential
   - Links to all service pages

3. **Individual Service Pages**
   - `/services/stone-masonry`
   - `/services/kitchen-renovations`
   - `/services/home-renovations`

4. **Contact Page** (`/contact`)
   - Conversion page
   - Form functionality

5. **Projects Gallery** (`/projects`)
   - Image-heavy page
   - Performance critical

### Testing Frequency

| Page Type | Desktop | Mobile | Frequency |
|-----------|---------|--------|-----------|
| Homepage | ✅ | ✅ | Weekly |
| Service Pages | ✅ | ✅ | Bi-weekly |
| Projects | ✅ | ✅ | Monthly |
| Contact | ✅ | ✅ | Monthly |
| About | ✅ | ✅ | Monthly |

---

## Interpreting Results

### Performance Score Breakdown

**Metrics Weighting:**
- First Contentful Paint: 10%
- Speed Index: 10%
- Largest Contentful Paint: 25%
- Time to Interactive: 10%
- Total Blocking Time: 30%
- Cumulative Layout Shift: 15%

**Score Ranges:**
- 90-100: Green (Good)
- 50-89: Orange (Needs Improvement)
- 0-49: Red (Poor)

### Common Issues & Fixes

#### Performance Issues

**Issue: Low LCP (Largest Contentful Paint)**
- **Cause:** Large hero images, unoptimized fonts
- **Fix:**
  - Optimize hero image (WebP, <150KB)
  - Preload critical images
  - Use font-display: swap
  - Inline critical CSS

**Issue: High TBT (Total Blocking Time)**
- **Cause:** Large JavaScript bundles, render-blocking scripts
- **Fix:**
  - Code splitting
  - Defer non-critical JS
  - Remove unused JavaScript
  - Use Astro islands

**Issue: High CLS (Cumulative Layout Shift)**
- **Cause:** Images without dimensions, web fonts, dynamic content
- **Fix:**
  - Add width/height to all images
  - Use font-display: swap
  - Reserve space for ads/embeds
  - Avoid inserting content above existing

#### SEO Issues

**Issue: Missing Meta Description**
- **Fix:** Add description prop to SEO component

**Issue: Images Missing Alt Text**
- **Fix:** Use OptimizedImage component, follow ALT-TEXT-GUIDELINES.md

**Issue: Links Not Crawlable**
- **Fix:** Use `<a>` tags, not click handlers

**Issue: Mobile Viewport Not Set**
- **Fix:** Already implemented in BaseLayout

#### Accessibility Issues

**Issue: Low Color Contrast**
- **Fix:** Use WCAG AAA compliant colors (4.5:1 ratio minimum)

**Issue: Missing Form Labels**
- **Fix:** Add proper `<label>` elements

**Issue: Images Missing Alt**
- **Fix:** Follow ALT-TEXT-GUIDELINES.md

#### Best Practices Issues

**Issue: Mixed Content (HTTP/HTTPS)**
- **Fix:** Ensure all resources use HTTPS

**Issue: Console Errors**
- **Fix:** Check browser console, fix JavaScript errors

**Issue: No HTTPS**
- **Fix:** Configure SSL certificate (auto on Netlify/Vercel)

---

## Opportunities for Improvement

### Performance Opportunities

**Lighthouse Suggests:**

1. **Eliminate render-blocking resources**
   - Inline critical CSS ✅ (Implemented)
   - Defer non-critical CSS
   - Async load fonts

2. **Properly size images**
   - Use responsive images ✅ (OptimizedImage component)
   - Serve images in WebP ✅ (Implemented)
   - Lazy load below-fold images ✅ (Implemented)

3. **Reduce unused JavaScript**
   - Code splitting ✅ (Astro automatic)
   - Remove dead code
   - Use Astro islands ✅ (Implemented)

4. **Minify CSS/JS**
   - Build process handles this ✅ (astro.config.mjs)

5. **Enable text compression**
   - Hosting provider handles this ✅ (Netlify/Vercel)

6. **Serve static assets with efficient cache policy**
   - Configure cache headers ✅ (netlify.toml)

7. **Reduce server response times**
   - Static site = instant ✅ (Astro SSG)

8. **Avoid enormous network payloads**
   - Total page size <350KB target
   - Code splitting ✅
   - Lazy loading ✅

### Diagnostics

**Review these metrics:**

- **Minimize main-thread work:** <2000ms target
- **Reduce JavaScript execution time:** <1000ms target
- **Minimize request counts:** <50 requests target
- **Minimize transfer size:** <350KB target
- **Image element size:** Appropriate dimensions
- **Serve images in next-gen formats:** WebP/AVIF ✅
- **Efficiently encode images:** 80% quality target ✅
- **Preload LCP image:** Hero image preload
- **Largest element:** Should be <2.5s

---

## Testing Workflow

### 1. Local Development Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Open http://localhost:4321 in Chrome
# Run Lighthouse in DevTools
```

### 2. Staging Environment Testing

```bash
# Deploy to staging (Netlify branch deploy)
netlify deploy --dir=dist

# Run Lighthouse on staging URL
lighthouse https://deploy-preview-123--arronbennett.netlify.app --view
```

### 3. Production Testing

```bash
# After deployment to production
# Run PageSpeed Insights
# Run Lighthouse CLI
# Check Search Console Core Web Vitals
```

### 4. Continuous Monitoring

**Set up Lighthouse CI with GitHub Actions:**

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build site
        run: npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:4321
            http://localhost:4321/services
            http://localhost:4321/projects
            http://localhost:4321/contact
          uploadArtifacts: true
```

---

## Documentation of Results

### Baseline (WordPress)

**Expected Current Scores:**

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | 60-70 | 50-60 |
| Accessibility | 80-85 | 80-85 |
| Best Practices | 75-80 | 75-80 |
| SEO | 85-90 | 85-90 |

**Core Web Vitals (Current):**
- LCP: 3-4s (Poor)
- FID: 200-300ms (Needs Improvement)
- CLS: 0.15-0.25 (Needs Improvement)

### Target (Astro)

**Expected Scores:**

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | 98-100 | 95-98 |
| Accessibility | 98-100 | 98-100 |
| Best Practices | 98-100 | 98-100 |
| SEO | 100 | 100 |

**Core Web Vitals (Target):**
- LCP: <1.5s (Good) ✅
- FID: <50ms (Good) ✅
- CLS: <0.05 (Good) ✅

### Score Log Template

```markdown
## Lighthouse Audit - [Date]

**Page:** [URL]
**Device:** Desktop / Mobile
**Environment:** Local / Staging / Production

### Scores

| Category | Score | Change |
|----------|-------|--------|
| Performance | 98 | +28 |
| Accessibility | 100 | +15 |
| Best Practices | 100 | +20 |
| SEO | 100 | +10 |

### Core Web Vitals

| Metric | Value | Status | Change |
|--------|-------|--------|--------|
| LCP | 1.2s | Good | -2.2s |
| TBT | 120ms | Good | -480ms |
| CLS | 0.04 | Good | -0.11 |

### Opportunities

1. [Opportunity 1]: [Impact]
2. [Opportunity 2]: [Impact]

### Passed Audits

- ✅ [Audit 1]
- ✅ [Audit 2]

### Issues

- ❌ [Issue 1]: [Fix needed]

### Actions Taken

- [Action 1]
- [Action 2]

---
```

---

## Troubleshooting Common Issues

### Score Lower Than Expected

**Check:**
1. Are you testing production build? (`npm run build` + `npm run preview`)
2. Is browser cache cleared?
3. Are you in incognito mode?
4. Are browser extensions disabled?
5. Is network throttling disabled?

### Inconsistent Scores

**Reasons:**
- Network variability
- CPU throttling settings
- Background processes
- Different test environments
- Server response times

**Solution:**
- Run 3-5 tests, take median score
- Use controlled environment (Lighthouse CI)
- Test at same time of day
- Use same network conditions

### Mobile Scores Lower Than Desktop

**Expected:** Mobile scores are typically 5-10 points lower
- Slower CPU simulation
- Slower network (3G/4G)
- Smaller viewport

**If gap is >15 points:**
- Check mobile-specific images
- Review responsive CSS
- Test on real devices
- Check mobile-specific JavaScript

---

## Real User Monitoring

### Google Search Console

**Check Core Web Vitals:**
1. Go to https://search.google.com/search-console
2. Select "Experience" → "Core Web Vitals"
3. Review "Mobile" and "Desktop" tabs
4. Check URL issues
5. Monitor "Good URLs" percentage (target: 100%)

### Chrome User Experience Report (CrUX)

**View 28-day averages:**
1. PageSpeed Insights shows CrUX data
2. "Discover what your real users are experiencing"
3. Green = Good
4. Orange = Needs Improvement
5. Red = Poor

### Google Analytics 4

**Web Vitals Report:**
1. Configure GA4 with Web Vitals library
2. Create custom reports for LCP, FID, CLS
3. Track by page, device, location
4. Set up alerts for degradation

---

## Success Criteria

### Launch Checklist

**Before going live, ensure:**

- [ ] Homepage: 95+ performance, 100 SEO
- [ ] All service pages: 90+ performance, 100 SEO
- [ ] Projects page: 90+ performance (image-heavy)
- [ ] Contact page: 95+ performance
- [ ] Mobile scores: 90+ across all pages
- [ ] Core Web Vitals: All "Good"
- [ ] No accessibility issues
- [ ] All images have alt text
- [ ] Forms are functional and accessible
- [ ] No console errors
- [ ] HTTPS configured
- [ ] Sitemap accessible
- [ ] robots.txt configured

### Ongoing Monitoring

**Weekly:**
- [ ] Run Lighthouse on homepage (desktop + mobile)
- [ ] Check Search Console Core Web Vitals
- [ ] Review any new issues

**Monthly:**
- [ ] Full site audit (all key pages)
- [ ] Review CrUX data
- [ ] Check for regressions
- [ ] Document scores
- [ ] Optimize based on findings

**Quarterly:**
- [ ] Comprehensive audit
- [ ] Compare to competitors
- [ ] Update documentation
- [ ] Implement new optimizations

---

## Resources

### Tools

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse CLI:** https://github.com/GoogleChrome/lighthouse
- **WebPageTest:** https://www.webpagetest.org/
- **GTmetrix:** https://gtmetrix.com/
- **Search Console:** https://search.google.com/search-console

### Documentation

- **Lighthouse Scoring:** https://web.dev/performance-scoring/
- **Core Web Vitals:** https://web.dev/vitals/
- **SEO Audits:** https://web.dev/lighthouse-seo/
- **Accessibility:** https://web.dev/lighthouse-accessibility/

### Chrome DevTools

- **Performance Panel:** Record page load
- **Coverage Tab:** Find unused CSS/JS
- **Network Panel:** Check resource loading
- **Lighthouse Panel:** Run audits

---

## Next Steps

1. **Run Baseline Tests** (Current WordPress site)
2. **Build Homepage** with SEO component
3. **Run First Astro Tests** (Compare baseline)
4. **Document Results** in this guide
5. **Iterate and Improve** based on findings
6. **Deploy to Production**
7. **Set Up Continuous Monitoring**

---

**Testing Status:** Ready for implementation
**Target Scores:** 95+ Performance, 100 SEO
**Expected Timeline:** Achieve targets within 2 weeks of content completion

---

**Last Updated:** October 2025
**Version:** 1.0
**Owner:** Performance & SEO Team
