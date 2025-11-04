/**
 * Mobile & Browser Compatibility Audit Script
 * Tests responsive design, touch targets, and cross-browser compatibility
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const VIEWPORTS = {
  mobile: { width: 375, height: 667, deviceScaleFactor: 2 },
  tablet: { width: 768, height: 1024, deviceScaleFactor: 2 },
  laptop: { width: 1024, height: 768, deviceScaleFactor: 1 },
  desktop: { width: 1920, height: 1080, deviceScaleFactor: 1 }
};

const PAGES = [
  { name: 'Homepage', url: 'http://localhost:4321/' },
  { name: 'About Us', url: 'http://localhost:4321/about-us' },
  { name: 'Services', url: 'http://localhost:4321/services' },
  { name: 'Projects', url: 'http://localhost:4321/our-projects' },
  { name: 'Contact', url: 'http://localhost:4321/contact-us' }
];

const results = {
  timestamp: new Date().toISOString(),
  breakpointTests: [],
  touchTargets: [],
  horizontalScroll: [],
  mobileNavigation: {},
  formUsability: {},
  browserCompatibility: {},
  criticalIssues: [],
  highPriorityIssues: [],
  mediumPriorityIssues: [],
  lowPriorityIssues: []
};

async function checkHorizontalScroll(page) {
  return await page.evaluate(() => {
    const hasHorizontalScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
    return {
      hasScroll: hasHorizontalScroll,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      overflow: hasHorizontalScroll ? document.documentElement.scrollWidth - document.documentElement.clientWidth : 0
    };
  });
}

async function checkTouchTargets(page) {
  return await page.evaluate(() => {
    const MIN_TOUCH_SIZE = 44;
    const elements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    const issues = [];

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width < MIN_TOUCH_SIZE || height < MIN_TOUCH_SIZE) {
        issues.push({
          element: el.tagName,
          class: el.className,
          id: el.id,
          text: el.textContent?.substring(0, 50),
          width: Math.round(width),
          height: Math.round(height),
          meetsMinimum: false
        });
      }
    });

    return issues;
  });
}

async function testMobileNavigation(page) {
  await page.setViewport(VIEWPORTS.mobile);

  const navTest = {
    hamburgerExists: false,
    hamburgerSize: null,
    menuOpens: false,
    menuCloses: false,
    linksClickable: false,
    touchTargetsAdequate: true,
    issues: []
  };

  try {
    // Check for hamburger menu button
    const hamburger = await page.$('button[aria-label*="menu"], button[class*="mobile-menu"], button[class*="hamburger"]');
    navTest.hamburgerExists = !!hamburger;

    if (hamburger) {
      const size = await hamburger.evaluate(el => {
        const rect = el.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      });
      navTest.hamburgerSize = size;

      if (size.width < 44 || size.height < 44) {
        navTest.touchTargetsAdequate = false;
        navTest.issues.push(`Hamburger menu button too small: ${size.width}x${size.height}px (minimum 44x44px)`);
      }

      // Test menu opening
      await hamburger.click();
      await page.waitForTimeout(500);

      const menuVisible = await page.evaluate(() => {
        const menu = document.querySelector('[class*="mobile-menu"], nav[class*="mobile"]');
        return menu && window.getComputedStyle(menu).display !== 'none';
      });
      navTest.menuOpens = menuVisible;

      // Check if menu links are clickable
      const links = await page.$$('nav a, [class*="mobile-menu"] a');
      navTest.linksClickable = links.length > 0;

    } else {
      navTest.issues.push('No mobile hamburger menu found');
    }

  } catch (error) {
    navTest.issues.push(`Error testing navigation: ${error.message}`);
  }

  return navTest;
}

async function testFormUsability(page) {
  await page.goto('http://localhost:4321/contact-us');
  await page.setViewport(VIEWPORTS.mobile);

  const formTest = {
    formExists: false,
    inputTypes: [],
    touchTargets: [],
    autocomplete: [],
    submitButton: null,
    issues: []
  };

  try {
    const form = await page.$('form');
    formTest.formExists = !!form;

    if (form) {
      // Check input types
      const inputs = await page.$$('input');
      for (const input of inputs) {
        const inputInfo = await input.evaluate(el => ({
          type: el.type,
          name: el.name,
          autocomplete: el.autocomplete,
          width: el.getBoundingClientRect().width,
          height: el.getBoundingClientRect().height
        }));

        formTest.inputTypes.push(inputInfo);

        if (inputInfo.height < 44) {
          formTest.issues.push(`Input field "${inputInfo.name}" too small: ${inputInfo.height}px height`);
        }
      }

      // Check submit button
      const submitBtn = await page.$('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        formTest.submitButton = await submitBtn.evaluate(el => ({
          width: el.getBoundingClientRect().width,
          height: el.getBoundingClientRect().height,
          text: el.textContent || el.value
        }));

        if (formTest.submitButton.height < 44) {
          formTest.issues.push(`Submit button too small: ${formTest.submitButton.height}px height`);
        }
      }
    } else {
      formTest.issues.push('No contact form found on contact page');
    }

  } catch (error) {
    formTest.issues.push(`Error testing form: ${error.message}`);
  }

  return formTest;
}

async function testBreakpoints() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log('🚀 Starting Mobile & Browser Compatibility Audit...\n');

  for (const [breakpointName, viewport] of Object.entries(VIEWPORTS)) {
    console.log(`📱 Testing ${breakpointName} (${viewport.width}x${viewport.height})...`);

    for (const pageInfo of PAGES) {
      const page = await browser.newPage();
      await page.setViewport(viewport);

      try {
        await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 30000 });

        // Test horizontal scroll
        const scrollTest = await checkHorizontalScroll(page);

        // Test touch targets
        const touchTargetIssues = await checkTouchTargets(page);

        const testResult = {
          page: pageInfo.name,
          breakpoint: breakpointName,
          viewport: `${viewport.width}x${viewport.height}`,
          horizontalScroll: scrollTest,
          touchTargetIssues: touchTargetIssues.length,
          touchTargetDetails: touchTargetIssues.slice(0, 5), // First 5 issues
          status: scrollTest.hasScroll || touchTargetIssues.length > 0 ? 'ISSUES' : 'PASS'
        };

        results.breakpointTests.push(testResult);

        if (scrollTest.hasScroll) {
          results.horizontalScroll.push({
            page: pageInfo.name,
            breakpoint: breakpointName,
            overflow: scrollTest.overflow
          });

          results.highPriorityIssues.push({
            severity: 'HIGH',
            page: pageInfo.name,
            breakpoint: breakpointName,
            issue: `Horizontal scroll detected (${scrollTest.overflow}px overflow)`,
            fix: 'Use max-width: 100% and proper container constraints'
          });
        }

        if (touchTargetIssues.length > 0) {
          touchTargetIssues.forEach(issue => {
            if (issue.width < 44 || issue.height < 44) {
              results.touchTargets.push({
                page: pageInfo.name,
                breakpoint: breakpointName,
                ...issue
              });

              results.mediumPriorityIssues.push({
                severity: 'MEDIUM',
                page: pageInfo.name,
                breakpoint: breakpointName,
                issue: `Touch target too small: ${issue.element} (${issue.width}x${issue.height}px)`,
                fix: 'Increase padding/minimum dimensions to 44x44px'
              });
            }
          });
        }

        console.log(`  ✓ ${pageInfo.name}: ${testResult.status}`);

      } catch (error) {
        console.error(`  ✗ Error testing ${pageInfo.name}: ${error.message}`);
        results.criticalIssues.push({
          severity: 'CRITICAL',
          page: pageInfo.name,
          breakpoint: breakpointName,
          issue: `Page failed to load: ${error.message}`,
          fix: 'Investigate page loading errors'
        });
      }

      await page.close();
    }
  }

  console.log('\n📱 Testing Mobile Navigation...');
  const page = await browser.newPage();
  await page.goto('http://localhost:4321/');
  results.mobileNavigation = await testMobileNavigation(page);

  if (!results.mobileNavigation.hamburgerExists) {
    results.criticalIssues.push({
      severity: 'CRITICAL',
      issue: 'No mobile hamburger menu found',
      fix: 'Implement responsive mobile navigation'
    });
  }

  if (results.mobileNavigation.issues.length > 0) {
    results.mobileNavigation.issues.forEach(issue => {
      results.highPriorityIssues.push({
        severity: 'HIGH',
        category: 'Mobile Navigation',
        issue: issue,
        fix: 'Review Header.astro component'
      });
    });
  }

  console.log('\n📝 Testing Form Usability...');
  results.formUsability = await testFormUsability(page);

  if (results.formUsability.issues.length > 0) {
    results.formUsability.issues.forEach(issue => {
      results.mediumPriorityIssues.push({
        severity: 'MEDIUM',
        category: 'Form Usability',
        issue: issue,
        fix: 'Review ContactForm.astro component'
      });
    });
  }

  await page.close();
  await browser.close();

  console.log('\n✅ Audit Complete!\n');
}

async function generateReport() {
  const report = `# Mobile & Browser Compatibility Audit Report

**Date**: ${new Date().toLocaleString()}
**Site**: Arron Bennett Building Contractors
**Environment**: http://localhost:4321/

## Executive Summary

- **Total Pages Tested**: ${PAGES.length}
- **Breakpoints Tested**: ${Object.keys(VIEWPORTS).length}
- **Critical Issues**: ${results.criticalIssues.length}
- **High Priority Issues**: ${results.highPriorityIssues.length}
- **Medium Priority Issues**: ${results.mediumPriorityIssues.length}
- **Low Priority Issues**: ${results.lowPriorityIssues.length}

### Overall Assessment
${results.criticalIssues.length === 0 && results.highPriorityIssues.length === 0
  ? '✅ **EXCELLENT** - No critical mobile compatibility issues found'
  : results.criticalIssues.length > 0
    ? '❌ **NEEDS WORK** - Critical issues found that break mobile experience'
    : '⚠️ **GOOD** - Minor issues found, but mobile experience is functional'}

---

## 1. Responsive Breakpoints Analysis

### Breakpoint Testing Results

| Breakpoint | Width | Pages Tested | Issues Found | Status |
|------------|-------|--------------|--------------|--------|
${Object.keys(VIEWPORTS).map(bp => {
  const tests = results.breakpointTests.filter(t => t.breakpoint === bp);
  const issueCount = tests.filter(t => t.status === 'ISSUES').length;
  return `| ${bp} | ${VIEWPORTS[bp].width}px | ${PAGES.length} | ${issueCount} | ${issueCount === 0 ? '✅' : '⚠️'} |`;
}).join('\n')}

### Detailed Breakpoint Issues

${results.breakpointTests.filter(t => t.status === 'ISSUES').map(test => `
#### ${test.page} - ${test.breakpoint} (${test.viewport})

${test.horizontalScroll.hasScroll ? `
**Horizontal Scroll Issue**
- Overflow: ${test.horizontalScroll.overflow}px
- Scroll Width: ${test.horizontalScroll.scrollWidth}px
- Client Width: ${test.horizontalScroll.clientWidth}px
- **Severity**: HIGH
- **Fix**: Ensure all elements use max-width: 100% and proper container constraints
` : ''}

${test.touchTargetIssues > 0 ? `
**Touch Target Issues**: ${test.touchTargetIssues} elements below 44x44px minimum

Sample Issues:
${test.touchTargetDetails.map(issue => `- ${issue.element}: ${issue.width}x${issue.height}px - "${issue.text}"`).join('\n')}
` : ''}
`).join('\n')}

---

## 2. Mobile Navigation Audit

### Hamburger Menu Test Results

- **Hamburger Button Exists**: ${results.mobileNavigation.hamburgerExists ? '✅ Yes' : '❌ No'}
- **Button Size**: ${results.mobileNavigation.hamburgerSize ? `${results.mobileNavigation.hamburgerSize.width}x${results.mobileNavigation.hamburgerSize.height}px` : 'N/A'}
- **Menu Opens**: ${results.mobileNavigation.menuOpens ? '✅ Yes' : '❌ No'}
- **Touch Targets Adequate**: ${results.mobileNavigation.touchTargetsAdequate ? '✅ Yes' : '❌ No'}
- **Links Clickable**: ${results.mobileNavigation.linksClickable ? '✅ Yes' : '❌ No'}

${results.mobileNavigation.issues.length > 0 ? `
### Issues Found

${results.mobileNavigation.issues.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}

**Recommended Fix**: Review \`src/components/Header.astro\` for mobile menu implementation
` : '**Status**: ✅ Mobile navigation is working correctly'}

---

## 3. Touch Targets Audit

### Summary

- **Total Touch Target Issues**: ${results.touchTargets.length}
- **Minimum Size Requirement**: 44x44px
- **Pages with Issues**: ${[...new Set(results.touchTargets.map(t => t.page))].length}

${results.touchTargets.length > 0 ? `
### Touch Target Issues by Page

${[...new Set(results.touchTargets.map(t => t.page))].map(pageName => {
  const pageIssues = results.touchTargets.filter(t => t.page === pageName);
  return `
#### ${pageName} (${pageIssues.length} issues)

| Element | Size | Text Preview | Pass? |
|---------|------|--------------|-------|
${pageIssues.slice(0, 10).map(issue =>
  `| ${issue.element} | ${issue.width}x${issue.height}px | ${(issue.text || '').substring(0, 30)} | ❌ |`
).join('\n')}
${pageIssues.length > 10 ? `\n*...and ${pageIssues.length - 10} more issues*` : ''}
`;
}).join('\n')}

**Recommended Fixes**:
1. Increase button padding: \`padding: 12px 24px\` (minimum ~48px height)
2. Add minimum dimensions: \`min-height: 44px; min-width: 44px\`
3. Increase link tap areas with padding
4. Ensure adequate spacing between interactive elements (minimum 8px)

**Files to Review**:
- \`src/components/Button.astro\`
- \`src/components/ContactForm.astro\`
- \`src/components/Header.astro\`
` : '**Status**: ✅ All touch targets meet minimum size requirements'}

---

## 4. Horizontal Scroll Issues

${results.horizontalScroll.length > 0 ? `
### Pages with Horizontal Scroll

| Page | Breakpoint | Overflow |
|------|-----------|----------|
${results.horizontalScroll.map(issue =>
  `| ${issue.page} | ${issue.breakpoint} | ${issue.overflow}px |`
).join('\n')}

**Common Causes**:
1. Fixed width elements (use max-width instead)
2. Images without proper constraints
3. Text overflow
4. Grid/Flexbox misconfiguration

**Recommended Fixes**:
\`\`\`css
/* Instead of fixed width */
.container {
  width: 1200px; /* ❌ Breaks on mobile */
}

/* Use max-width */
.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
}
\`\`\`
` : '**Status**: ✅ No horizontal scroll issues detected'}

---

## 5. Form Usability on Mobile

### Contact Form Test Results

- **Form Exists**: ${results.formUsability.formExists ? '✅ Yes' : '❌ No'}
- **Input Fields Found**: ${results.formUsability.inputTypes.length}
- **Submit Button**: ${results.formUsability.submitButton ? `${results.formUsability.submitButton.width}x${results.formUsability.submitButton.height}px` : 'Not found'}

${results.formUsability.inputTypes.length > 0 ? `
### Input Field Analysis

| Field Name | Type | Autocomplete | Height | Pass? |
|------------|------|--------------|--------|-------|
${results.formUsability.inputTypes.map(input =>
  `| ${input.name || 'unnamed'} | ${input.type} | ${input.autocomplete || 'none'} | ${Math.round(input.height)}px | ${input.height >= 44 ? '✅' : '❌'} |`
).join('\n')}
` : ''}

${results.formUsability.issues.length > 0 ? `
### Issues Found

${results.formUsability.issues.map((issue, i) => `${i + 1}. ${issue}`).join('\n')}

**Recommended Fixes**:
1. Use correct input types (tel, email) for mobile keyboards
2. Add autocomplete attributes for autofill
3. Increase input field height: \`min-height: 44px\`
4. Ensure submit button is adequately sized

**File to Review**: \`src/components/ContactForm.astro\`
` : '**Status**: ✅ Form is mobile-friendly'}

---

## 6. Browser Compatibility

**Note**: This automated test was run on Chromium-based browser. Manual testing recommended for:
- Firefox
- Safari (iOS and desktop)
- Edge
- Mobile browsers (Chrome Mobile, Safari iOS)

**Recommended Manual Tests**:
- ✓ Test mobile navigation on actual devices
- ✓ Verify form functionality across browsers
- ✓ Check image loading and responsiveness
- ✓ Test touch interactions on tablets
- ✓ Verify landscape orientation support

---

## Priority Matrix

### CRITICAL Issues (${results.criticalIssues.length})

${results.criticalIssues.length > 0 ? results.criticalIssues.map((issue, i) => `
${i + 1}. **${issue.issue}**
   - Page: ${issue.page || 'All'}
   - Breakpoint: ${issue.breakpoint || 'All'}
   - Fix: ${issue.fix}
`).join('\n') : '*None found*'}

### HIGH Priority Issues (${results.highPriorityIssues.length})

${results.highPriorityIssues.length > 0 ? results.highPriorityIssues.slice(0, 10).map((issue, i) => `
${i + 1}. **${issue.issue}**
   - Page: ${issue.page || 'Multiple'}
   - Category: ${issue.category || issue.breakpoint}
   - Fix: ${issue.fix}
`).join('\n') : '*None found*'}

${results.highPriorityIssues.length > 10 ? `\n*...and ${results.highPriorityIssues.length - 10} more high priority issues*\n` : ''}

### MEDIUM Priority Issues (${results.mediumPriorityIssues.length})

${results.mediumPriorityIssues.slice(0, 5).map((issue, i) => `
${i + 1}. **${issue.issue}**
   - Page: ${issue.page || 'Multiple'}
   - Fix: ${issue.fix}
`).join('\n')}

${results.mediumPriorityIssues.length > 5 ? `\n*...and ${results.mediumPriorityIssues.length - 5} more medium priority issues*\n` : ''}

---

## Success Criteria Checklist

- [${results.mobileNavigation.hamburgerExists && results.mobileNavigation.menuOpens ? 'x' : ' '}] Navigation works on all breakpoints
- [${results.touchTargets.length === 0 ? 'x' : ' '}] All buttons/links meet 44x44px minimum
- [${results.formUsability.formExists && results.formUsability.issues.length === 0 ? 'x' : ' '}] Forms are mobile-friendly
- [${results.horizontalScroll.length === 0 ? 'x' : ' '}] No horizontal scroll issues
- [ ] Browser compatibility verified (manual testing required)
- [ ] Landscape orientation tested (manual testing required)

---

## Recommended Next Steps

1. **Fix Critical Issues**: ${results.criticalIssues.length > 0 ? 'Address navigation and loading errors immediately' : 'No critical issues found'}
2. **Fix High Priority Issues**: ${results.highPriorityIssues.length > 0 ? 'Resolve horizontal scroll and major touch target issues' : 'No high priority issues found'}
3. **Fix Medium Priority Issues**: Improve touch target sizes across all components
4. **Manual Testing**: Verify fixes on actual mobile devices and multiple browsers
5. **Performance**: Run Lighthouse mobile audit after fixes

---

## Appendix: Test Configuration

**Breakpoints Tested**:
${Object.entries(VIEWPORTS).map(([name, vp]) => `- ${name}: ${vp.width}x${vp.height}px`).join('\n')}

**Pages Tested**:
${PAGES.map(p => `- ${p.name}: ${p.url}`).join('\n')}

**Test Date**: ${new Date().toLocaleString()}
**Tool**: Puppeteer automated testing
**Environment**: Development (localhost:4321)
`;

  await fs.writeFile('/c/Users/Fearn/ab1/arron-bennett-astro/AUDIT-REPORT-6-MOBILE-BROWSER.md', report, 'utf8');
  console.log('📄 Report generated: AUDIT-REPORT-6-MOBILE-BROWSER.md\n');
}

async function run() {
  try {
    await testBreakpoints();
    await generateReport();

    console.log('Summary:');
    console.log(`- Critical Issues: ${results.criticalIssues.length}`);
    console.log(`- High Priority: ${results.highPriorityIssues.length}`);
    console.log(`- Medium Priority: ${results.mediumPriorityIssues.length}`);
    console.log(`- Horizontal Scroll Issues: ${results.horizontalScroll.length}`);
    console.log(`- Touch Target Issues: ${results.touchTargets.length}`);

  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

run();
