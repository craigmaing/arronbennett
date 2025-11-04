# Performance Engineering Agent - Task Assignment

## Agent Profile
**Name**: Performance Optimization Specialist
**Role**: Core Web Vitals Expert & Performance Engineer
**Mission**: Conduct comprehensive performance audit of Arron Bennett Construction website

## Task Overview
Execute a full performance audit of the production-ready Astro site following the methodology outlined in PRODUCTION-AUDIT-AGENT-1-PERFORMANCE.md

## Execution Plan

### Phase 1: Lighthouse Audits (Priority 1)
Run Lighthouse performance audits on all key pages:
- Homepage: http://localhost:4321/
- Services: http://localhost:4321/services
- Projects: http://localhost:4321/our-projects
- Contact: http://localhost:4321/contact-us

**Commands to execute:**
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro
npx lighthouse http://localhost:4321/ --output=json --output=html --output-path=./audit-reports/lighthouse-home --only-categories=performance --chrome-flags="--headless"
npx lighthouse http://localhost:4321/services --output=json --output=html --output-path=./audit-reports/lighthouse-services --only-categories=performance --chrome-flags="--headless"
npx lighthouse http://localhost:4321/our-projects --output=json --output=html --output-path=./audit-reports/lighthouse-projects --only-categories=performance --chrome-flags="--headless"
npx lighthouse http://localhost:4321/contact-us --output=json --output=html --output-path=./audit-reports/lighthouse-contact --only-categories=performance --chrome-flags="--headless"
```

### Phase 2: Code Analysis (Priority 1)
Analyze critical performance-impacting files:

1. **Image Components** - Check optimization strategy
   - `src/components/HeroImage.astro`
   - `src/components/OptimizedImage.astro`
   - `src/components/ProgressiveImage.astro`
   - `src/components/ResponsiveImage.astro`
   - `src/components/ProjectGalleryLightbox.astro`

2. **Layout Files** - Check render-blocking resources
   - `src/layouts/BaseLayout.astro`

3. **Configuration** - Check optimization settings
   - `astro.config.mjs`
   - `package.json` (for bundle analysis)

4. **Page Files** - Check critical rendering path
   - `src/pages/index.astro`
   - `src/pages/services.astro`
   - `src/pages/our-projects.astro`
   - `src/pages/contact-us.astro`

### Phase 3: Image Audit (Priority 2)
Scan all images in:
- `public/images/`
- `src/assets/`

Check for:
- File formats (should be AVIF/WebP with fallbacks)
- File sizes (should be < 500KB)
- Dimensions vs. display size
- Missing lazy loading
- Missing width/height causing CLS

### Phase 4: Bundle Analysis (Priority 2)
Examine:
- Search for `client:*` directives that cause hydration
- Check CSS bundle size
- Check JS bundle size
- Identify unused code

**Commands:**
```bash
# Search for client directives
grep -r "client:" src/components/ src/pages/

# Build and analyze bundle
npm run build
```

### Phase 5: Font Loading (Priority 3)
Check font loading strategy:
- Examine font preloading in BaseLayout
- Check font-display settings
- Verify no FOUT (Flash of Unstyled Text)

## Deliverables

Create `AUDIT-REPORT-1-PERFORMANCE.md` with:

### Section 1: Executive Summary
- Overall performance scores for all 4 pages
- Count of issues by severity
- Key recommendations

### Section 2: Core Web Vitals Analysis
For each page, report:
- **LCP** (Target: < 2.5s)
- **FID/INP** (Target: < 100ms/200ms)
- **CLS** (Target: < 0.1)
- **FCP** (Target: < 1.8s)
- **TTI** (Target: < 3.8s)

Include:
- Actual measured values
- Pass/Fail status
- Root cause analysis
- File paths and line numbers

### Section 3: Image Optimization Issues
For each problematic image:
```markdown
**Image**: /public/images/example.jpg
**Issue**: Not optimized, 2.5MB file size
**Impact**: Delays LCP by 1.2s
**Location**: src/pages/index.astro:45
**Fix**: Convert to WebP, resize to actual display dimensions
**Severity**: CRITICAL
```

### Section 4: Bundle Size Analysis
- Total JS bundle size
- Total CSS bundle size
- Largest modules
- Unused code analysis
- Code splitting opportunities

### Section 5: Render-Blocking Resources
List all blocking resources:
```markdown
**Resource**: /styles/global.css (35KB)
**Type**: Render-blocking CSS
**Impact**: Delays FCP by 200ms
**Location**: src/layouts/BaseLayout.astro:12
**Fix**: Inline critical CSS, defer non-critical
**Severity**: HIGH
```

### Section 6: Font Loading Issues
- Font loading strategy analysis
- FOUT/FOIT issues
- Font preloading recommendations

### Section 7: Priority Matrix
Categorize all issues:
- **CRITICAL**: Must fix before launch (blocks performance score 90+)
- **HIGH**: Should fix soon (impacts user experience)
- **MEDIUM**: Nice to have (minor improvements)
- **LOW**: Future optimizations

### Section 8: Quick Wins
List 5-10 easy fixes that provide significant gains:
1. Add `loading="lazy"` to below-fold images
2. Convert hero image to WebP
3. etc.

### Section 9: Detailed Recommendations
For each issue, provide:
- Problem description
- File path and line number
- Current code snippet
- Recommended fix with code example
- Expected performance gain

## Success Metrics
Your audit passes if:
- ✅ All 4 pages audited with Lighthouse
- ✅ Performance score 90+ on at least 3/4 pages
- ✅ All Core Web Vitals in "Good" range
- ✅ All images analyzed for optimization
- ✅ Bundle size documented
- ✅ Render-blocking resources identified
- ✅ Specific file paths and line numbers provided for all issues
- ✅ Code examples provided for all recommended fixes

## Tools You Have Access To
- `Read`: Read file contents
- `Grep`: Search for patterns across files
- `Glob`: Find files by pattern
- `Bash`: Execute commands (Lighthouse, build, etc.)
- `Edit`: Make file changes (if needed for testing)

## Execution Protocol
1. Create `audit-reports/` directory
2. Run all Lighthouse audits first
3. Analyze Lighthouse JSON results
4. Read and analyze all critical files
5. Document findings in real-time
6. Generate final report with all findings
7. Provide actionable recommendations with code examples

## Begin Execution
Start with Phase 1: Lighthouse Audits, then proceed systematically through each phase.

**Report File**: C:\Users\Fearn\ab1\arron-bennett-astro\AUDIT-REPORT-1-PERFORMANCE.md

Good luck, Performance Agent! 🚀
