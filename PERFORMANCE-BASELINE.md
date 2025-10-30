# Performance Baseline - LCP Optimization

**Agent**: Performance Optimization Specialist
**Date**: 2025-10-29
**Project**: Arron Bennett Building Website
**Task**: Optimize Largest Contentful Paint (LCP)

---

## Current Performance Metrics

### From Client Report
- **LCP**: 358ms (good, but has optimization potential)
- **Render Delay**: 255ms (primary bottleneck - 71% of LCP time)
- **Resource Load Time**: ~103ms

### LCP Element Identified
Based on code analysis of `src/pages/index.astro`:

**LCP Element**: Hero section background image
```astro
<Image
  src={getProjectImage('new-house-landscaping-feock/A-Bennett-104.jpg')}
  alt="Modern Cornwall building on the Roseland Peninsula..."
  class="w-full h-full object-cover"
  widths={[640, 768, 1024, 1280, 1536, 1920]}
  sizes="100vw"
  loading="eager"
  fetchpriority="high"
  format="avif"
/>
```

**Good**:
- ✅ Already using `loading="eager"`
- ✅ Already using `fetchpriority="high"`
- ✅ Already using AVIF format
- ✅ Responsive image with proper widths

**Issues Identified**:
1. **255ms render delay** - likely caused by:
   - Font loading blocking render (Roboto fonts imported in BaseLayout)
   - CSS processing time
   - No image preloading in `<head>`
   - View Transitions overhead

2. **Font Loading Strategy**:
   ```typescript
   // Current approach in BaseLayout.astro
   import '@fontsource/roboto/400.css';
   import '@fontsource/roboto/500.css';
   import '@fontsource/roboto/600.css';
   import '@fontsource/roboto/700.css';
   ```
   - These imports are render-blocking
   - No `font-display` strategy specified
   - Not preloaded in `<head>`

3. **View Transitions**:
   ```astro
   <ViewTransitions />
   ```
   - May add overhead on initial page load
   - Consider disabling for first paint

4. **No Critical Image Preloading**:
   - Hero image should be preloaded in `<head>` before HTML parser reaches it

---

## Optimization Strategy

### Phase 1: Immediate Quick Wins (Expected: -150ms)

#### 1.1 Preload LCP Image (Expected: -100ms reduction)
Add to `BaseLayout.astro` `<head>`:
```astro
<!-- Preload LCP hero image -->
<link
  rel="preload"
  as="image"
  href="/path/to/hero-image.avif"
  type="image/avif"
  fetchpriority="high"
/>
```

#### 1.2 Optimize Font Loading (Expected: -50ms reduction)
```astro
<!-- Preload critical fonts -->
<link
  rel="preload"
  href="/fonts/roboto-400.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>

<!-- Add font-display: swap to CSS -->
@font-face {
  font-family: 'Roboto';
  font-display: swap;
  ...
}
```

### Phase 2: Advanced Optimizations (Expected: -50ms)

#### 2.1 Defer View Transitions on First Load
```astro
<ViewTransitions fallback="none" />
```

#### 2.2 Optimize Critical CSS
- Ensure hero section styles are in the inlined critical CSS
- Defer non-critical stylesheets

#### 2.3 Resource Hints
```html
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
```

---

## Expected Results

### Target Metrics
- **LCP**: < 250ms (from 358ms) → **-108ms improvement**
- **Render Delay**: < 100ms (from 255ms) → **-155ms improvement**
- **Overall Score**: Maintain Lighthouse 95+ performance

### Breakdown of Expected Improvements
| Optimization | Impact | New LCP |
|-------------|--------|---------|
| Baseline | - | 358ms |
| + Preload LCP image | -100ms | 258ms |
| + Font optimization | -50ms | 208ms |
| + View Transitions defer | -20ms | 188ms |
| **Target** | **-170ms** | **<250ms** ✅ |

---

## Testing Plan

1. **Build and preview site**
   ```bash
   npm run build
   npm run preview
   ```

2. **Run Lighthouse audit** (before changes)
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Save baseline JSON report

3. **Implement optimizations** (in order of impact)

4. **Run Lighthouse audit** (after each change)
   - Verify improvements
   - Check for any regressions in CLS/FID

5. **Validate on real devices**
   - Test on mobile (3G/4G networks)
   - Test on desktop
   - Verify across browsers

---

## Files to Modify

1. **`src/layouts/BaseLayout.astro`**
   - Add image preload
   - Add font preload
   - Optimize font-display
   - Adjust View Transitions

2. **`src/pages/index.astro`**
   - Verify hero image configuration
   - Ensure fetchpriority is maintained

3. **Astro config** (if needed)
   - Review image optimization settings
   - Verify AVIF quality settings

---

## Risk Assessment

### Low Risk
- ✅ Image preloading (standards-based)
- ✅ Font-display: swap (well-supported)
- ✅ fetchpriority (progressive enhancement)

### Medium Risk
- ⚠️ View Transitions modifications (may affect UX on navigation)
- ⚠️ Critical CSS changes (test thoroughly)

### Mitigation
- Test all changes incrementally
- Maintain fallbacks
- Verify across browsers
- Test on real devices

---

## Next Steps

1. ✅ **Baseline documented**
2. ⏳ **Implement Phase 1 optimizations**
3. ⏳ **Test and validate**
4. ⏳ **Implement Phase 2 if needed**
5. ⏳ **Document final results**

---

**Status**: Baseline Complete - Ready for Implementation
**Next Action**: Implement image and font preloading optimizations
