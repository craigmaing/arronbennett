# Internal Linking Strategy for Arron Bennett Building

## Purpose

Internal linking serves multiple strategic goals:
1. **SEO** - Distributes page authority and helps search engines understand site structure
2. **User Experience** - Guides visitors to relevant content
3. **Conversion** - Directs users toward contact forms and inquiry pages
4. **Topic Clustering** - Establishes topical authority in building services

## Site Architecture Overview

```
Homepage (/)
├── Services (/services)
│   ├── Full Builds (/services/full-builds)
│   ├── Stone Masonry (/services/stone-masonry)
│   ├── Home Renovations (/services/home-renovations)
│   ├── Kitchen Renovations (/services/kitchen-renovations)
│   ├── Bathroom Renovations (/services/bathroom-renovations)
│   ├── Hard Landscaping (/services/hard-landscaping)
│   ├── Project Management (/services/project-management)
│   ├── Renewable Energy (/services/renewable-energy)
│   └── Lime Mortar Work (/services/lime-mortar-work)
├── Projects (/projects)
│   ├── [Individual Project Pages]
│   └── [Filterable Gallery]
├── About (/about)
├── Contact (/contact)
├── Privacy Policy (/privacy-policy)
└── Terms & Conditions (/terms-and-conditions)
```

## Link Hierarchy & Priority

### Tier 1: High Authority Pages (Most Important Links)

**Priority Pages:**
1. Homepage (/)
2. Services Overview (/services)
3. Contact (/contact)

**Link Frequency:** These pages should be linked from every page via:
- Header navigation (sticky)
- Footer
- Contextual links in content

### Tier 2: Service Pages (Primary Conversion Pages)

**All 9 Service Pages:**
- /services/full-builds
- /services/stone-masonry
- /services/home-renovations
- /services/kitchen-renovations
- /services/bathroom-renovations
- /services/hard-landscaping
- /services/project-management
- /services/renewable-energy
- /services/lime-mortar-work

**Link Strategy:**
- Link from homepage (service cards)
- Cross-link related services
- Link from relevant project pages
- Include in footer
- Link from about page where services mentioned

### Tier 3: Supporting Content

- Project gallery pages
- Individual project case studies
- About page
- Blog posts (future)

## Anchor Text Strategy

### 1. Branded Anchors (15-20%)

Use company/brand name:
- "Arron Bennett Building"
- "Arron Bennett"
- "our services"
- "contact us"

**Example:**
```
"At Arron Bennett Building, we specialize in traditional craftsmanship."
```

### 2. Exact Match Keywords (20-25%)

Use target keywords exactly:
- "stone masonry Cornwall"
- "building contractors Cornwall"
- "kitchen renovation"
- "heritage restoration"

**Example:**
```
"Our stone masonry Cornwall services include traditional techniques..."
```

### 3. Partial Match Keywords (30-35%)

Variations of keywords:
- "traditional stone masonry services"
- "professional building contractors"
- "expert kitchen renovations"
- "Cornish heritage restoration work"

**Example:**
```
"We provide professional building contractor services throughout Cornwall."
```

### 4. Natural/Contextual Anchors (25-30%)

Naturally flowing anchor text:
- "learn more about our renovation process"
- "see our completed projects"
- "read more"
- "explore our work"
- "find out how we can help"

**Example:**
```
"To understand our approach to heritage buildings, learn more about our lime mortar work."
```

### 5. Call-to-Action Anchors (5-10%)

Action-oriented:
- "request a quote"
- "book a consultation"
- "discuss your project"
- "contact us today"

**Example:**
```
"Ready to start your renovation? Discuss your project with our team."
```

## Internal Linking Rules

### Rule 1: Every Page Must Have Links

**Minimum Requirements:**
- 3-5 internal links (excluding navigation)
- At least 1 link to a high-priority page
- At least 1 link to a related service page
- 1 CTA link (contact or inquiry)

### Rule 2: Link from Authority to Lower Pages

**Flow of Authority:**
```
Homepage → Service Overview → Individual Services
Homepage → Projects → Individual Projects
Service Pages → Related Services
Service Pages → Relevant Projects
```

### Rule 3: Create Topic Clusters

**Stone Masonry Cluster Example:**
```
Stone Masonry (Hub)
├── Lime Mortar Work (Spoke)
├── Heritage Restoration Projects (Spoke)
├── Full Builds featuring Stone (Spoke)
└── Hard Landscaping with Stone (Spoke)
```

**Implementation:**
- Hub page links to all spokes
- Spokes link back to hub
- Spokes cross-link to related spokes

### Rule 4: Use Descriptive Anchor Text

❌ **Avoid:**
- "Click here"
- "Read more"
- "This page"
- Generic anchors without context

✅ **Use:**
- "Our traditional stone masonry services"
- "See our stone cottage renovation projects"
- "Learn about lime mortar restoration techniques"

### Rule 5: Don't Over-Optimize

**Limits:**
- Max 3-4 links to the same page per page
- Vary anchor text (don't repeat exact matches)
- Keep anchor text natural and contextual
- No keyword stuffing in anchors

## Location-Based Internal Linking

### Strategy

Include location mentions in internal links to boost local SEO:

**Examples:**
- "stone masonry services in Cornwall"
- "building contractors serving Roseland Peninsula"
- "Cornwall kitchen renovation specialists"
- "Penryn home renovation experts"

### Geographic Clusters

**Cornwall Services Hub:**
```
Cornwall Building Services (Hub)
├── Stone Masonry Cornwall (Spoke)
├── Cornwall Kitchen Renovations (Spoke)
├── Roseland Peninsula Projects (Spoke)
└── Penryn Building Work (Spoke)
```

## Service Page Cross-Linking

### Related Services Matrix

| From Service | Link To | Anchor Text Example |
|--------------|---------|---------------------|
| Kitchen Renovations | Stone Masonry | "incorporating traditional stone elements" |
| Kitchen Renovations | Project Management | "full project coordination services" |
| Full Builds | Stone Masonry | "expert stone masonry work" |
| Full Builds | Renewable Energy | "ground source heat pump installation" |
| Stone Masonry | Lime Mortar | "heritage-appropriate lime mortar techniques" |
| Stone Masonry | Heritage Projects | "restoration of period properties" |
| Hard Landscaping | Stone Masonry | "traditional Cornish stone walling" |
| Bathroom Renovations | Kitchen Renovations | "similar renovation services for kitchens" |

### Implementation Example

**On Kitchen Renovations page:**
```astro
<p>
  Many of our kitchen renovation projects incorporate
  <a href="/services/stone-masonry">traditional stone masonry elements</a>,
  bringing authentic Cornish character to modern kitchens. Our team also provides
  <a href="/services/project-management">complete project management</a> to ensure
  your renovation runs smoothly from start to finish.
</p>
```

## Homepage Linking Strategy

The homepage is the highest authority page and should link to:

**Primary Links (Above fold):**
1. All 9 service pages (service cards)
2. Contact page (CTA button)
3. Projects gallery (CTA)

**Secondary Links (Below fold):**
4. About page (company story section)
5. Individual project highlights
6. Testimonial source pages

**Anchor Text Variety:**
- Service card titles (exact match)
- "View our projects" (call-to-action)
- "Get in touch" (call-to-action)
- "Learn more about our approach" (contextual)

## Projects Page Linking

### Strategy

Each project page should link to:
1. **Service it represents** (e.g., "Stone Masonry Service")
2. **Related services** (e.g., "This project also included lime mortar work")
3. **Contact page** with specific CTA
4. **Other similar projects**

### Example Structure

```astro
<!-- Project: Penryn Stone Cottage Restoration -->
<article>
  <p>
    This <a href="/services/stone-masonry">stone masonry restoration project</a>
    in Penryn showcased traditional Cornish building techniques. Using
    <a href="/services/lime-mortar-work">heritage-appropriate lime mortar</a>,
    we carefully restored the 18th-century granite walls.
  </p>

  <footer>
    <a href="/contact">Discuss your heritage restoration project</a>
  </footer>

  <aside>
    <h3>Similar Projects</h3>
    <ul>
      <li><a href="/projects/roseland-cottage">Roseland Peninsula Cottage</a></li>
      <li><a href="/projects/feock-farmhouse">Feock Farmhouse Restoration</a></li>
    </ul>
  </aside>
</article>
```

## Footer Links

### Standard Footer Structure

**Column 1: Services**
- All 9 service pages (brief titles)

**Column 2: Company**
- About
- Projects
- Contact
- Privacy Policy
- Terms & Conditions

**Column 3: Contact Info**
- Phone (clickable tel: link)
- Email (clickable mailto: link)
- Service area (Cornwall, Devon)

**Column 4: Social (if applicable)**
- Facebook
- Instagram
- LinkedIn

## Breadcrumb Navigation

Implement breadcrumbs on all pages except homepage:

```html
Home > Services > Stone Masonry Cornwall
Home > Projects > Penryn Stone Cottage
Home > Contact
```

**Benefits:**
- Improves UX
- Provides additional internal links
- Helps search engines understand hierarchy
- Reduces bounce rate

## Link Monitoring & Maintenance

### Monthly Checklist

- [ ] Check for broken internal links (404s)
- [ ] Verify all service pages have 5+ internal links
- [ ] Review anchor text distribution (not over-optimized)
- [ ] Ensure new content is linked from relevant existing pages
- [ ] Update project links as new projects added
- [ ] Verify breadcrumbs working correctly

### Tools

1. **Screaming Frog SEO Spider** - Crawl for broken links
2. **Google Search Console** - Monitor crawl errors
3. **Ahrefs/Semrush** - Track internal link metrics
4. **Browser Extensions** - Check Link Checker

## Advanced Strategies

### 1. Contextual Deep Linking

Instead of linking to service overview, link directly to relevant section:

```astro
<!-- Instead of /services -->
<a href="/services/stone-masonry#heritage-restoration">
  heritage stone restoration services
</a>
```

### 2. Hub-and-Spoke Model

Create comprehensive hub pages that link out to detailed spoke pages:

**Hub:** "Cornwall Building Services" page
**Spokes:** Each individual service page

### 3. Seasonal Content Linking

Link to seasonal/timely content:
- "Winter property maintenance tips"
- "Spring renovation planning"
- Link back from seasonal content to evergreen services

### 4. FAQ Schema with Internal Links

Use FAQ structured data with internal links to services:

```json
{
  "question": "What stone masonry services do you provide?",
  "answer": "We offer comprehensive stone masonry services including..."
  // Include link in answer HTML
}
```

## Conversion-Focused Linking

### High-Intent Pages

Prioritize links to pages with high conversion potential:
1. Contact page
2. Quote request forms
3. Service inquiry pages
4. Project consultation booking

### Strategic CTA Placement

**On every service page:**
- Above fold: "Request a Quote" → Contact
- Mid-content: "See Our [Service] Projects" → Projects filtered
- Bottom: "Discuss Your Project" → Contact with service pre-filled

## SEO Impact Metrics

### Track These Metrics

1. **Internal Link Count** per page
2. **Anchor Text Distribution** (branded vs. keyword)
3. **Click-Through Rate** on internal links
4. **Pages per Session** (improved by good internal linking)
5. **Bounce Rate** (reduced by relevant internal links)

### Target Metrics

- Average 5-10 contextual internal links per page
- <5% exact match anchor text
- >2.5 pages per session
- <50% bounce rate on service pages

## Implementation Checklist

### Phase 1: Setup
- [ ] Create all service pages
- [ ] Establish URL structure
- [ ] Set up navigation menu
- [ ] Configure footer links
- [ ] Implement breadcrumbs

### Phase 2: Content Linking
- [ ] Add contextual links to all service pages
- [ ] Cross-link related services
- [ ] Link projects to relevant services
- [ ] Add homepage feature links
- [ ] Create topic clusters

### Phase 3: Optimization
- [ ] Vary anchor text appropriately
- [ ] Add location-based links
- [ ] Implement deep linking
- [ ] Add seasonal content links
- [ ] Create hub-and-spoke structure

### Phase 4: Monitoring
- [ ] Set up link tracking
- [ ] Monitor click-through rates
- [ ] Check for broken links monthly
- [ ] Review anchor text distribution
- [ ] Adjust based on performance

## Example Component: Service Link

```astro
---
// ServiceLink.astro - Reusable internal service link component
interface Props {
  href: string;
  service: string;
  context?: string;
}

const { href, service, context = "Learn more about" } = Astro.props;
---

<a
  href={href}
  class="service-link text-primary hover:text-accent transition-colors"
>
  {context} {service}
</a>
```

**Usage:**
```astro
<ServiceLink
  href="/services/stone-masonry"
  service="our traditional stone masonry services"
  context="Explore"
/>
```

---

**Last Updated:** October 2025
**Version:** 1.0
**Owner:** SEO Strategy Team
