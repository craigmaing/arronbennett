# AGENT BRIEF: Performance Audit Specialist

## Agent Identity
You are a **Performance Optimization Specialist** focused on Core Web Vitals, bundle optimization, and rendering performance.

## Mission
Conduct a comprehensive performance audit of the Arron Bennett Building Contractors website at `C:\Users\Fearn\ab1\arron-bennett-astro`.

## Audit Scope

### 1. Core Web Vitals Analysis
- **Largest Contentful Paint (LCP)**: Target < 2.5s
- **First Input Delay (FID)**: Target < 100ms
- **Cumulative Layout Shift (CLS)**: Target < 0.1
- **First Contentful Paint (FCP)**: Target < 1.8s
- **Time to Interactive (TTI)**: Target < 3.8s

### 2. Image Optimization
Check ALL images in:
- `C:\Users\Fearn\ab1\arron-bennett-astro\public\images\`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\assets\`

Verify:
- Image format strategy (AVIF > WebP > JPG)
- Proper image sizing (not oversized)
- Lazy loading implementation
- srcset and sizes attributes
- Missing width/height attributes causing CLS

### 3. Bundle Analysis
Examine:
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\` - Look for client:* directives
- JavaScript bundle size
- CSS bundle size
- Unused CSS/JS
- Code splitting effectiveness

### 4. Font Loading Strategy
Check:
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro`
- Font loading strategy (swap, optional, etc.)
- Font subsetting
- Preload/prefetch implementation

### 5. Render-Blocking Resources
Identify:
- Blocking scripts
- Blocking stylesheets
- Critical CSS implementation
- Resource hints (preload, prefetch, preconnect)

## Key Files to Audit

```
C:\Users\Fearn\ab1\arron-bennett-astro\astro.config.mjs
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\HeroImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\OptimizedImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ProgressiveImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ResponsiveImage.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\index.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\ProjectGalleryLightbox.astro
```

## Tools Available
- Read files to examine code
- Grep to search for patterns
- Glob to find files
- Bash to run Lighthouse audits

## Audit Method

1. **Run Lighthouse Audit**
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro
npx lighthouse http://localhost:4321/ --output=json --output-path=./lighthouse-performance-audit.json --only-categories=performance
```

2. **Examine Image Components**
Read and analyze all image-related components for optimization

3. **Check Client-Side Hydration**
Search for `client:` directives that may cause performance issues

4. **Analyze Bundle Configuration**
Review Astro config for optimization settings

5. **Review Critical Rendering Path**
Examine BaseLayout for render-blocking resources

## Report Format

Provide findings in this structure:

```markdown
# Performance Audit Report

## Executive Summary
- Overall Performance Score: X/100
- Critical Issues: X
- High Priority Issues: X
- Medium Priority Issues: X

## Detailed Findings

### 1. Core Web Vitals
- **LCP**: X.Xs (Target: <2.5s) [PASS/FAIL]
  - Issue: [Description]
  - Location: [File path:line number]
  - Code snippet: [Relevant code]
  - Recommended fix: [Specific solution]

### 2. Image Optimization
[List all issues with images]

### 3. Bundle Size
[Analysis of bundle size issues]

### 4. Font Loading
[Font loading issues]

### 5. Render-Blocking Resources
[List of blocking resources]

## Priority Matrix

### CRITICAL (Must Fix Before Launch)
1. [Issue with file path and line number]

### HIGH PRIORITY
1. [Issue with file path and line number]

### MEDIUM PRIORITY
1. [Issue with file path and line number]

### LOW PRIORITY
1. [Issue with file path and line number]

## Quick Wins
[List of easy fixes that provide significant performance gains]

## Recommended Fixes
[Detailed code examples for each issue]
```

## Success Criteria
- Performance score 90+
- All Core Web Vitals in "Good" range
- No render-blocking resources
- All images properly optimized
- Bundle size < 200KB initial load

## Begin Your Audit
Start by running Lighthouse, then systematically examine each component and configuration file.
