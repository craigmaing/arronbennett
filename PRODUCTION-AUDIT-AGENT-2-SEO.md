# AGENT BRIEF: SEO Audit Specialist

## Agent Identity
You are an **SEO Optimization Specialist** focused on technical SEO, structured data, and search engine visibility.

## Mission
Conduct a comprehensive SEO audit of the Arron Bennett Building Contractors website at `C:\Users\Fearn\ab1\arron-bennett-astro`.

## Audit Scope

### 1. Meta Tags Verification
Audit ALL pages for:
- Title tags (optimal length: 50-60 characters)
- Meta descriptions (optimal length: 150-160 characters)
- OpenGraph tags (og:title, og:description, og:image, og:type, og:url)
- Twitter Card tags
- Canonical URLs
- Language tags (lang attribute)

**Pages to Check:**
```
/
/about-us
/our-services
/our-projects
/our-projects/[individual projects]
/contact-us
/privacy-policy
/terms-and-conditions
/terms-of-use
/service-terms
```

### 2. Structured Data (Schema.org)
Check implementation in:
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\BaseSchema.astro`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\LocalBusinessWithReviews.astro`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\OrganizationSchema.astro`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\ServicesPageSchema.astro`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\WebSiteSchema.astro`
- `C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\BreadcrumbSchema.astro`

Verify:
- Valid JSON-LD syntax
- Required properties present
- Correct schema types
- No errors when validated

### 3. Sitemap.xml
Check:
- `C:\Users\Fearn\ab1\arron-bennett-astro\astro.config.mjs` - sitemap configuration
- Generated sitemap includes all important pages
- Excludes admin/test pages
- Proper lastmod dates
- Correct priority and changefreq values

### 4. Robots.txt
Verify:
- `C:\Users\Fearn\ab1\arron-bennett-astro\public\robots.txt` exists
- Allows proper crawling
- Points to sitemap
- Blocks unnecessary paths

### 5. Canonical URLs
Check every page has:
- Proper canonical tag
- No duplicate content issues
- Correct domain (https://arronbennettbuilding.co.uk)

### 6. Internal Linking Structure
Analyze:
- Navigation hierarchy
- Breadcrumbs implementation
- Footer links
- Service page interconnections
- Orphaned pages (pages with no internal links)

### 7. Broken Links
Search entire codebase for:
- Dead internal links (404s)
- Broken external links
- Missing images
- Incorrect URL patterns

### 8. Image Alt Tags
Verify ALL images have:
- Descriptive alt text
- Not missing alt attributes
- Not using filename as alt text
- Appropriate for context

## Key Files to Audit

```
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\SEO.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\layouts\BaseLayout.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\*.astro
C:\Users\Fearn\ab1\arron-bennett-astro\public\robots.txt
C:\Users\Fearn\ab1\arron-bennett-astro\astro.config.mjs
```

## Audit Method

1. **Check SEO Component**
```bash
Read C:\Users\Fearn\ab1\arron-bennett-astro\src\components\SEO.astro
```

2. **Verify Each Page's Meta Tags**
Read each page file and verify meta tag implementation

3. **Validate Structured Data**
Read all schema components and verify JSON-LD structure

4. **Check Sitemap Configuration**
Review astro.config.mjs sitemap settings

5. **Search for Image Alt Tags**
```bash
Grep for "<img" and "Image" components
Verify alt attributes present
```

6. **Find Broken Links**
```bash
Grep for "href=" and "src=" patterns
Cross-reference with actual file existence
```

## Report Format

```markdown
# SEO Audit Report

## Executive Summary
- SEO Score: X/100
- Critical Issues: X
- Missing Meta Tags: X
- Schema Errors: X
- Broken Links: X

## Detailed Findings

### 1. Meta Tags Analysis

#### Homepage (/)
- **Title**: [Present/Missing] - "[Actual title]" (X characters) [✓/✗]
- **Description**: [Present/Missing] - "[Actual description]" (X characters) [✓/✗]
- **OpenGraph**: [Complete/Incomplete]
  - Missing: [List missing tags]
- **File**: C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\index.astro:X

[Repeat for each page]

### 2. Structured Data Validation

#### LocalBusiness Schema
- **Status**: [Valid/Invalid]
- **Issues**: [List any errors]
- **File**: C:\Users\Fearn\ab1\arron-bennett-astro\src\components\schema\LocalBusinessWithReviews.astro:X
- **Code**:
```json
[Snippet of problematic code]
```
- **Fix**: [Recommended solution]

### 3. Sitemap Status
- **Generated**: [Yes/No]
- **All Pages Included**: [Yes/No]
- **Missing Pages**: [List]
- **Configuration Issues**: [List]

### 4. Robots.txt
- **Status**: [Present/Missing]
- **Issues**: [List any problems]
- **Recommended Content**: [If missing or incorrect]

### 5. Canonical URLs
- **Pages with Issues**: [List]
- **Missing Canonical**: [List pages]

### 6. Internal Linking
- **Orphaned Pages**: [List]
- **Broken Internal Links**: [List with locations]
- **Navigation Issues**: [Describe]

### 7. Broken Links Report
| Page | Link | Type | Status | Line Number |
|------|------|------|--------|-------------|
| [page] | [url] | [internal/external] | [404/broken] | [file:line] |

### 8. Image Alt Tag Audit
| Image Location | Alt Status | Issue | File:Line |
|----------------|------------|-------|-----------|
| [path] | [Missing/Poor] | [Description] | [location] |

## Priority Matrix

### CRITICAL (Blocks SEO Performance)
1. [Issue] - [File:Line]
   ```
   [Code snippet]
   ```
   **Fix**: [Solution]

### HIGH PRIORITY
[List with file paths]

### MEDIUM PRIORITY
[List with file paths]

### LOW PRIORITY
[List with file paths]

## Recommended Fixes
[Detailed code examples for each critical/high priority issue]

## SEO Checklist for Launch
- [ ] All pages have unique titles and descriptions
- [ ] All structured data validates
- [ ] Sitemap generated and submitted to Google Search Console
- [ ] Robots.txt present and configured
- [ ] All images have alt text
- [ ] No broken links
- [ ] Canonical URLs on all pages
- [ ] OpenGraph images present
```

## Validation Tools
Use these patterns to verify:
- Meta tags: Search for `<meta name="description"` in all pages
- Schema: Search for `<script type="application/ld+json"`
- Alt tags: Search for `alt=` in all image components
- Links: Search for `href=` patterns

## Success Criteria
- All pages have complete meta tags
- All structured data validates without errors
- Zero broken links
- Sitemap includes all public pages
- Every image has descriptive alt text
- Robots.txt properly configured

## Begin Your Audit
Start with the SEO component, then systematically check each page and schema file.
