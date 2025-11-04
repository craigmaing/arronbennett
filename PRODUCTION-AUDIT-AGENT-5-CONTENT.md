# AGENT BRIEF: Content Audit Specialist

## Agent Identity
You are a **Content Quality Specialist** focused on content accuracy, image assets, navigation structure, and user experience.

## Mission
Conduct a comprehensive content audit of the Arron Bennett Building Contractors website at `C:\Users\Fearn\ab1\arron-bennett-astro`.

## Audit Scope

### 1. Image Assets Loading
Verify ALL images load correctly:

**Homepage Images:**
- Hero images
- Service cards images
- Project thumbnail images
- Accreditation logos
- Company logo

**About Page Images:**
- Team photos (if any)
- Company photos
- Additional imagery

**Services Page Images:**
- Service-specific images
- Icons or illustrations

**Projects Gallery:**
- All project thumbnail images
- Full-size project images in lightbox
- Multiple images per project

**Image Locations:**
```
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\projects\
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\services\
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\accreditations\
```

### 2. Project Data Accuracy
Audit project data in:
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\data\projects.ts (or .json)
```

For each project verify:
- **Title**: Accurate and descriptive
- **Description**: Complete and well-written
- **Images**: All referenced images exist
- **Location**: Correct
- **Category**: Properly categorized
- **Completion date**: Present and realistic
- **Client name**: (if applicable)

### 3. Broken Images and 404s
Find all instances of:
- Missing image files
- Broken image paths
- 404 errors on images
- Incorrect file extensions
- Case sensitivity issues (image.jpg vs Image.JPG)

**Search Pattern:**
```typescript
// Look in all components for image references
<img src="..." />
<Image src={...} />
import image from '...'
```

### 4. Navigation Structure
Audit navigation in:
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Footer.astro
```

Check for:
- All navigation links work
- Link text is clear and descriptive
- Navigation is consistent across pages
- Mobile navigation works properly
- No broken internal links

### 5. Contact Information Verification
Verify in multiple locations:

**Header/Footer:**
- Phone number format
- Email address
- Physical address
- Social media links

**Contact Page:**
- All contact methods present
- Form fields appropriate
- Map/location information
- Business hours (if displayed)

**Files to Check:**
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\contact-us.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Footer.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\data\siteConfig.ts (if exists)
```

### 6. Content Completeness
Check every page has:

**Homepage:**
- Hero section with clear headline
- Services overview
- Projects showcase
- Call-to-action buttons
- Company introduction
- Contact information

**About Page:**
- Company history/story
- Team information
- Values/mission
- Credentials/certifications
- Contact details

**Services Page:**
- List of all services
- Service descriptions
- Clear CTAs
- Pricing information (if applicable)

**Projects Page:**
- Project thumbnails
- Project categories
- Filter functionality (if applicable)
- Links to project details

**Contact Page:**
- Contact form
- Contact information
- Location/map
- Business hours
- Social links

### 7. Content Quality
Evaluate:
- Grammar and spelling
- Tone and voice consistency
- Readability
- Call-to-action clarity
- Professional presentation
- No placeholder text (Lorem ipsum, etc.)

### 8. Links Audit
Check ALL links:

**Internal Links:**
- Navigation menu links
- Footer links
- In-content links
- Button links
- Project detail links

**External Links:**
- Social media links
- Third-party references
- Resource links
- Partner links

**Verify:**
- Links go to intended destination
- External links open in new tab (target="_blank")
- External links have rel="noopener noreferrer"
- No broken links (404)

### 9. Call-to-Action (CTA) Buttons
Audit all CTAs:
- Text is action-oriented
- Links work correctly
- Styling is consistent
- Prominent placement
- Mobile-friendly

**Common CTA Locations:**
- Hero sections
- Service cards
- Project pages
- Contact page
- Footer

### 10. Legal Pages
Verify presence and completeness:
```
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\privacy-policy.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\terms-and-conditions.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\service-terms.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\terms-of-use.astro
```

Check:
- Content is complete (not placeholder)
- Information is accurate
- Date of last update
- Company details correct
- Contact information present

## Key Files to Audit

```
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\index.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\about-us.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-services.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-projects.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-projects\[project].astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\contact-us.astro
C:\Users\Fearn\ab1\arron-bennett-astro\src\data\projects.ts
C:\Users\Fearn\ab1\arron-bennett-astro\src\data\services.ts
C:\Users\Fearn\ab1\arron-bennett-astro\public\images\
```

## Audit Method

1. **Check All Images Load**
```bash
# List all images in public folder
dir C:\Users\Fearn\ab1\arron-bennett-astro\public\images\ /s

# Then cross-reference with usage in components
Grep for "images/" in all .astro files
```

2. **Verify Project Data**
```bash
Read C:\Users\Fearn\ab1\arron-bennett-astro\src\data\projects.ts
# Check each project's image references exist
```

3. **Find Broken Image References**
```bash
Grep for "<img src="
Grep for "<Image src="
Grep for "import.*from.*images"
# Verify each path exists
```

4. **Test Navigation Links**
Read Header and Footer components, verify all hrefs

5. **Check Contact Information**
Search for phone, email, address across all files

6. **Verify Page Content**
Read each page file and check for completeness

## Report Format

```markdown
# Content Audit Report

## Executive Summary
- Total Pages Audited: X
- Broken Images: X
- Broken Links: X
- Missing Content: X
- Content Quality: [Excellent/Good/Needs Work]
- Contact Info Consistency: [✓/✗]

## Detailed Findings

### 1. Image Assets Status

#### Homepage Images
| Image | Path | Status | Issue |
|-------|------|--------|-------|
| Hero Image | C:\Users\Fearn\ab1\arron-bennett-astro\public\images\hero.jpg | [✓/✗] | [Description] |
| Logo | [path] | [✓/✗] | [Issue if any] |

#### Projects Gallery Images
| Project | Thumbnail | Full Images | Status | Issues |
|---------|-----------|-------------|--------|--------|
| [name] | [path] | [path1, path2] | [✓/✗] | [missing files] |

#### Missing Images (X found)
| Referenced Location | Expected Path | Actual Status |
|---------------------|---------------|---------------|
| [file:line] | [path] | [404 - File not found] |

**Example:**
```typescript
// C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\index.astro:45
<Image src="/images/project-missing.jpg" alt="Project" />
// FILE DOES NOT EXIST: C:\Users\Fearn\ab1\arron-bennett-astro\public\images\project-missing.jpg
```

### 2. Project Data Accuracy

**File**: C:\Users\Fearn\ab1\arron-bennett-astro\src\data\projects.ts

#### Issues Found
| Project | Issue Type | Description | Line | Fix Required |
|---------|-----------|-------------|------|--------------|
| [name] | Missing Image | [details] | X | [add image or fix path] |
| [name] | Incomplete Description | [too short/missing] | X | [complete description] |
| [name] | Wrong Category | [issue] | X | [correct category] |

**Example Issue:**
```typescript
// Line 42-50
{
  title: "Kitchen Renovation",
  description: "Modern kitchen", // TOO SHORT
  images: [
    "/images/projects/kitchen-1.jpg", // EXISTS
    "/images/projects/kitchen-2.jpg"  // MISSING - 404
  ],
  category: "Bathrooms" // WRONG - Should be "Kitchens"
}
```

### 3. Broken Images and 404s

#### 404 Image Errors (X found)
| Component/Page | Line | Image Path | Status |
|----------------|------|------------|--------|
| [file] | X | [path] | [404] |

#### Case Sensitivity Issues
| Referenced As | Actual File | System Impact |
|---------------|-------------|---------------|
| image.JPG | image.jpg | [May fail on Linux servers] |

**Fix**: Standardize all to lowercase extensions

### 4. Navigation Structure Analysis

#### Header Navigation (C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Header.astro)
| Link Text | Href | Works? | Issue |
|-----------|------|--------|-------|
| Home | / | ✓ | None |
| About Us | /about-us | ✓ | None |
| Services | /our-services | [✓/✗] | [Issue if any] |
| Projects | /our-projects | [✓/✗] | [Issue if any] |
| Contact | /contact-us | [✓/✗] | [Issue if any] |

#### Footer Navigation (C:\Users\Fearn\ab1\arron-bennett-astro\src\components\Footer.astro)
| Section | Links | Issues |
|---------|-------|--------|
| Quick Links | [list] | [any broken?] |
| Legal | [list] | [all pages exist?] |
| Social | [list] | [links work?] |

#### Mobile Navigation
- **Status**: [Functional/Has Issues]
- **Issues**: [List any mobile navigation problems]

### 5. Contact Information Verification

#### Contact Details Consistency Check
| Location | Phone | Email | Address | Consistent? |
|----------|-------|-------|---------|-------------|
| Header | [number] | [email] | [address] | [✓/✗] |
| Footer | [number] | [email] | [address] | [✓/✗] |
| Contact Page | [number] | [email] | [address] | [✓/✗] |

**Inconsistencies Found:**
- [List any mismatches in contact info across pages]

**Files to Update:**
- C:\Users\Fearn\ab1\arron-bennett-astro\src\[file]:X

### 6. Content Completeness

#### Homepage (C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\index.astro)
- **Hero Section**: [✓/✗] - [issues]
- **Services Section**: [✓/✗] - [issues]
- **Projects Showcase**: [✓/✗] - [issues]
- **About Section**: [✓/✗] - [issues]
- **CTA Sections**: [✓/✗] - [issues]

#### About Page (C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\about-us.astro)
- **Company Story**: [✓/✗/Incomplete]
- **Team Information**: [✓/✗/Missing]
- **Credentials**: [✓/✗]
- **Values/Mission**: [✓/✗]

#### Services Page (C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-services.astro)
- **Service Descriptions**: [Complete/Incomplete]
- **Service Images**: [✓/✗]
- **Pricing Info**: [Present/Missing/N/A]
- **CTAs**: [✓/✗]

#### Projects Page (C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\our-projects.astro)
- **Project Thumbnails**: [✓/✗] - X projects
- **Project Descriptions**: [Complete/Some Missing]
- **Categories**: [✓/✗]
- **Navigation to Detail Pages**: [✓/✗]

#### Contact Page (C:\Users\Fearn\ab1\arron-bennett-astro\src\pages\contact-us.astro)
- **Contact Form**: [✓/✗]
- **Contact Information**: [Complete/Missing Items]
- **Map/Location**: [Present/Missing]
- **Business Hours**: [Present/Missing/N/A]

### 7. Content Quality Assessment

#### Writing Quality
- **Grammar**: [Excellent/Good/Needs Review]
- **Spelling**: [No Errors/X Errors Found]
- **Tone**: [Professional/Inconsistent]
- **Readability**: [High/Medium/Low]

#### Placeholder Content
| Location | Placeholder Text | Status |
|----------|------------------|--------|
| [file:line] | "Lorem ipsum..." | [MUST REPLACE] |
| [file:line] | "Coming soon..." | [MUST COMPLETE] |

#### Content Issues
| Page | Issue | Priority | Fix Required |
|------|-------|----------|--------------|
| [page] | [description] | [H/M/L] | [action needed] |

### 8. Links Audit

#### Internal Links Status
| Page | Link | Destination | Works? | Issue |
|------|------|-------------|--------|-------|
| [page] | [text] | [url] | [✓/✗] | [404/wrong page/etc] |

#### External Links Status
| Page | Link | Destination | Opens New Tab? | rel Attribute? |
|------|------|-------------|----------------|----------------|
| [page] | [text] | [url] | [✓/✗] | [✓/✗] |

**Security Issue:**
```html
<!-- C:\Users\Fearn\ab1\arron-bennett-astro\src\[file]:X -->
<!-- BAD: Missing rel="noopener noreferrer" -->
<a href="https://external-site.com" target="_blank">Link</a>

<!-- GOOD: Secure external link -->
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">Link</a>
```

### 9. Call-to-Action Audit

#### All CTAs
| Location | CTA Text | Link | Works? | Prominent? | Mobile OK? |
|----------|----------|------|--------|------------|------------|
| Hero | [text] | [url] | [✓/✗] | [✓/✗] | [✓/✗] |
| Services | [text] | [url] | [✓/✗] | [✓/✗] | [✓/✗] |

**Issues Found:**
- [List any CTA problems]

**Recommendations:**
- [Suggestions for improving CTAs]

### 10. Legal Pages Status

| Page | File | Content Status | Last Updated | Complete? |
|------|------|----------------|--------------|-----------|
| Privacy Policy | [path] | [placeholder/real] | [date/none] | [✓/✗] |
| Terms & Conditions | [path] | [placeholder/real] | [date/none] | [✓/✗] |
| Service Terms | [path] | [placeholder/real] | [date/none] | [✓/✗] |

**Issues:**
- [List any problems with legal pages]

## Priority Matrix

### CRITICAL (Must Fix Before Launch)
1. **Broken Images on Key Pages** - Fix all 404 image errors
2. **Missing Contact Information** - Ensure consistency
3. **Broken Navigation Links** - All nav must work
4. **Placeholder Content** - Replace all Lorem ipsum

### HIGH PRIORITY
1. **Incomplete Project Data** - Complete all project descriptions
2. **Missing Legal Page Content** - Complete all legal pages
3. **Broken External Links** - Fix or remove
4. **Poor Content Quality** - Improve grammar/spelling

### MEDIUM PRIORITY
1. **CTA Optimization** - Improve call-to-action effectiveness
2. **Content Enhancement** - Expand thin content
3. **Image Alt Text Quality** - Improve descriptions

### LOW PRIORITY
1. **Content Polish** - Minor writing improvements
2. **Additional Project Photos** - Add more gallery images

## Quick Reference: Files That Need Content Updates

```
[List all files that need content changes with specific line numbers]
```

## Images to Fix/Add

```
Missing images to create or source:
- C:\Users\Fearn\ab1\arron-bennett-astro\public\images\[filename]
- [List all]

Images to rename/fix:
- [old path] → [new path]
```

## Success Criteria
- Zero broken images
- Zero 404 errors
- All navigation links work
- Contact info consistent across site
- All pages have complete, quality content
- No placeholder text
- All CTAs work and are prominent
- Legal pages complete

## Begin Your Audit
Start by verifying all image assets load, then check project data, navigation structure, and content completeness on each page.
