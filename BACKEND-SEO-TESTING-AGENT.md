# Backend SEO Testing Agent

## Mission
Comprehensively test all backend SEO implementations following Astro best practices, with a focus on local testing capabilities and production-ready validation.

## Testing Scope

### 1. Content-Security-Policy Header (netlify.toml)
- Verify CSP implementation doesn't block functionality
- Test all resource loading (styles, scripts, images)
- Check browser console for CSP violations
- Validate inline scripts and styles work correctly

### 2. Sitemap.xml Redirect (netlify.toml)
- Confirm redirect chain is working
- Test sitemap accessibility at /sitemap.xml
- Verify XML structure and validity
- Check all URLs are included

### 3. Fixed Double Redirect Chains (netlify.toml)
- Test all redirect paths
- Verify no multiple hops exist
- Check redirect status codes (301 vs 302)
- Validate final destinations

### 4. Review Schema Objects (src/components/SEO.astro)
- Inspect page source for Review schema
- Validate schema markup with Google's Rich Results Test
- Check all required properties present
- Test aggregateRating implementation

### 5. Sitemap Priorities (astro.config.mjs serialize function)
- Build site and examine generated sitemap
- Verify priority values for each page type
- Check changefreq values
- Validate lastmod timestamps

## Testing Methodology

### Phase 1: Build and Preview
```bash
cd arron-bennett-astro
npm run build
npm run preview
```

### Phase 2: File Inspection
1. Read netlify.toml and verify configurations
2. Read astro.config.mjs and analyze sitemap settings
3. Read src/components/SEO.astro for schema implementation
4. Check dist/sitemap.xml after build

### Phase 3: Browser Testing
1. Open preview site in browser
2. Check Console for errors/warnings
3. Test CSP compliance
4. Validate schema in page source
5. Test form submissions and interactions

### Phase 4: Redirect Testing
1. Test sitemap.xml redirect
2. Verify all configured redirects
3. Check redirect chains
4. Validate status codes

## Test Report Format

### Component: [Name]
**Status:** ✅ PASS / ⚠️ WARNING / ❌ FAIL

**Test Results:**
- [Specific test] - Result
- [Specific test] - Result

**Issues Found:**
- [Issue description]
- [Issue description]

**Recommendations:**
- [Recommendation]

## Deliverables
1. Comprehensive test report
2. Pass/fail status for each component
3. Browser console logs
4. Schema validation results
5. Sitemap analysis
6. Recommendations for fixes

## Agent Execution Timeline
- Start: Immediately after receiving task
- Phase 1-2: 15 minutes (Build + File Inspection)
- Phase 3: 10 minutes (Browser Testing)
- Phase 4: 5 minutes (Redirect Testing)
- Report: 10 minutes (Comprehensive Documentation)
- Total: ~40 minutes

## Success Criteria
- All tests pass or have acceptable warnings
- No critical CSP violations
- Schema validates successfully
- Sitemap generates correctly
- Redirects work without chains
- Documentation is complete and actionable
