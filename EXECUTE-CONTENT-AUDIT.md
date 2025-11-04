# Content Quality Audit Execution - Sub-Agent Task

## Agent Activation

**Agent Type**: Content Quality Specialist Sub-Agent
**Primary Directive**: Execute comprehensive content quality audit per CONTENT-QUALITY-AGENT.md
**Working Directory**: C:\Users\Fearn\ab1\arron-bennett-astro
**Target Site**: http://localhost:4321/
**Output**: AUDIT-REPORT-5-CONTENT.md

## Execution Checklist

### Pre-Audit Setup
- [ ] Verify dev server is running at http://localhost:4321/
- [ ] Review PRODUCTION-AUDIT-AGENT-5-CONTENT.md brief
- [ ] Create screenshots directory: audit-screenshots/content/
- [ ] Open browser DevTools for Network monitoring

### Audit Execution Sequence

#### 1. IMAGE VALIDATION AUDIT (Priority 1)
**Objective**: Find all broken images and 404 errors

**Steps**:
1. Navigate to http://localhost:4321/ (Homepage)
   - Check hero images
   - Check feature images
   - Check about section images
   - Check testimonial images
   - Document all image sources

2. Navigate to /about page
   - Check team photos
   - Check company images
   - Check any embedded images

3. Navigate to /projects page
   - Check project thumbnail images
   - Check project detail images
   - Check gallery images

4. Navigate to /services page
   - Check service icons/images
   - Check process images

5. Navigate to /contact page
   - Check any images/maps

6. Use DevTools Network tab to identify 404s
7. Document all findings in structured format

#### 2. PROJECT DATA ACCURACY AUDIT (Priority 2)
**Objective**: Validate project information completeness

**Steps**:
1. Navigate to /projects page
2. Create inventory of all projects
3. For each project, check:
   - [ ] Title present
   - [ ] Description present (min 100 words)
   - [ ] Location specified
   - [ ] Client name (if applicable)
   - [ ] Date/timeline
   - [ ] Category/type
   - [ ] Minimum 3 images
   - [ ] All data accurate

4. Document incomplete projects
5. Assess severity of missing data

#### 3. NAVIGATION LINK TESTING (Priority 1)
**Objective**: Verify all links work correctly

**Steps**:
1. Test primary navigation:
   - [ ] Home link
   - [ ] About link
   - [ ] Projects link
   - [ ] Services link
   - [ ] Contact link

2. Test footer navigation:
   - [ ] All footer menu links
   - [ ] Social media links
   - [ ] Legal links (privacy, terms)

3. Test CTA buttons:
   - [ ] "Get a Quote" buttons
   - [ ] "View Projects" buttons
   - [ ] "Contact Us" buttons
   - [ ] "Learn More" buttons

4. Test internal page links:
   - [ ] Anchor links to sections
   - [ ] Cross-page references
   - [ ] Breadcrumbs

5. Mobile navigation test:
   - [ ] Hamburger menu works
   - [ ] All mobile links work
   - [ ] No broken navigation

6. Document all broken or incorrect links

#### 4. CONTACT INFORMATION CONSISTENCY (Priority 1)
**Objective**: Ensure contact info matches across site

**Steps**:
1. Extract contact info from each page:
   - Homepage contact section
   - Contact page
   - Footer
   - About page

2. Create comparison matrix:
   ```
   | Page | Phone | Email | Address | Hours |
   |------|-------|-------|---------|-------|
   | Home |       |       |         |       |
   | Contact |    |       |         |       |
   | Footer |     |       |         |       |
   | About |      |       |         |       |
   ```

3. Flag inconsistencies
4. Test clickability:
   - [ ] tel: links work
   - [ ] mailto: links work
   - [ ] Address links to maps

5. Document all findings

#### 5. PLACEHOLDER CONTENT DETECTION (Priority 1 - CRITICAL)
**Objective**: Find all placeholder or dummy content

**Steps**:
1. Search entire site for:
   - "lorem ipsum" (case insensitive)
   - "placeholder"
   - "[insert"
   - "coming soon"
   - "TBD"
   - "TODO"
   - "xxx"

2. Check specific locations:
   - [ ] Page titles
   - [ ] Meta descriptions
   - [ ] Headings
   - [ ] Body content
   - [ ] Image alt text
   - [ ] Form placeholders

3. Document every instance with:
   - Page location
   - Element type
   - Current text
   - Severity (critical if public-facing)

#### 6. GALLERY IMAGE VALIDATION (Priority 2)
**Objective**: Verify gallery functionality

**Steps**:
1. Locate all gallery components
2. Test each gallery:
   - [ ] Images load correctly
   - [ ] Grid layout renders properly
   - [ ] Lightbox/modal opens
   - [ ] Navigation controls work
   - [ ] Images are high quality
   - [ ] Captions display correctly

3. Test mobile gallery behavior
4. Document UX observations
5. Note performance issues

### Post-Audit Documentation

#### Generate Reports:
1. **AUDIT-REPORT-5-CONTENT.md** - Complete audit report
2. **content-issues-critical.md** - Critical issues only
3. **content-issues-tracking.md** - Issue tracking checklist

#### Report Structure Requirements:
- Executive summary with issue counts
- Detailed findings for each audit area
- Severity ratings (Critical/High/Medium/Low)
- Priority recommendations
- Screenshots as evidence
- Production readiness assessment

### Quality Validation

Before finalizing report:
- [ ] All pages tested
- [ ] All images checked
- [ ] All links tested
- [ ] Contact info verified
- [ ] Placeholder search complete
- [ ] Gallery validation done
- [ ] Severity ratings assigned
- [ ] Recommendations clear and actionable
- [ ] Report follows template structure
- [ ] Evidence documented

### Success Criteria

**Audit passes when**:
- Zero broken images found
- All navigation links work
- Contact info consistent
- No placeholder content
- All galleries functional
- Report is comprehensive and actionable

**Production ready when**:
- Zero critical issues
- All high-priority issues addressed
- Medium/low issues documented for post-launch

## Execute Now

Sub-Agent: Begin systematic execution of content quality audit following this checklist. Document all findings in real-time. Generate final report as AUDIT-REPORT-5-CONTENT.md with complete severity assessments and priority recommendations.

**Start with Phase 1: Image Validation Audit**
