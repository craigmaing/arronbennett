# Alt Text Guidelines for Arron Bennett Building

## Purpose

Alt text (alternative text) serves two critical purposes:
1. **Accessibility** - Screen readers use alt text to describe images to visually impaired users
2. **SEO** - Search engines use alt text to understand image content and context

## Writing Effective Alt Text

### General Principles

1. **Be Descriptive but Concise**
   - Aim for 125 characters or less
   - Describe what's important about the image in context
   - Don't start with "Image of..." or "Picture of..."

2. **Context Matters**
   - Consider the surrounding content
   - Include relevant details for the page's purpose
   - Mention location (Cornwall, Roseland Peninsula) when relevant

3. **Include Keywords Naturally**
   - Use target keywords where they make sense
   - Never stuff keywords
   - Focus on user value first, SEO second

4. **Be Specific**
   - Instead of: "stone wall"
   - Better: "traditional Cornish stone wall with lime mortar pointing"

## Alt Text Formula for Different Image Types

### 1. Service Images

**Format:** `[Service] project in [Location] - [Key Detail]`

**Examples:**
- Good: "Stone masonry renovation in Roseland Peninsula - traditional granite wall restoration"
- Good: "Kitchen renovation in Cornwall showing bespoke cabinetry and natural stone worktops"
- Bad: "Building work"
- Bad: "Image of a renovation project we completed"

### 2. Before/After Images

**Format:** `Before: [Description] | After: [Description] - [Location]`

**Examples:**
- Good: "Before: weathered granite cottage exterior | After: restored traditional stone facade with lime mortar - Penryn, Cornwall"
- Good: "Before: dated kitchen interior | After: modern country kitchen with exposed beams - Cornwall renovation"
- Bad: "Before and after"

### 3. Team/Profile Photos

**Format:** `[Name], [Role] at [Company] - [Context if relevant]`

**Examples:**
- Good: "Arron Bennett, master builder and founder, inspecting traditional stone masonry work in Cornwall"
- Good: "Arron Bennett on site in Roseland Peninsula discussing project specifications"
- Bad: "Arron"
- Bad: "Builder photo"

### 4. Project Gallery Images

**Format:** `[Project Type] in [Location] featuring [Key Visual Element]`

**Examples:**
- Good: "New build stone house in Cornwall featuring traditional masonry and slate roof"
- Good: "Heritage cottage restoration in Roseland showcasing lime mortar repointing"
- Good: "Hard landscaping project with Cornish granite paving and dry stone walls"
- Bad: "Project 123"
- Bad: "Stone building"

### 5. Detail Shots

**Format:** `Close-up of [Specific Detail] - [Technique/Material] in [Project Type]`

**Examples:**
- Good: "Close-up of traditional lime mortar pointing in heritage stone wall restoration"
- Good: "Detail of hand-cut granite quoins in new build cottage - Cornwall craftsmanship"
- Good: "Ground source heat pump installation detail showing professional pipework"
- Bad: "Detail shot"

### 6. Equipment/Process Images

**Format:** `[Equipment/Process] for [Service] project in [Location]`

**Examples:**
- Good: "Mini excavator preparing site for new build foundation in Cornwall"
- Good: "Traditional stone masonry tools used for heritage restoration work"
- Bad: "Excavator"
- Bad: "Tools"

### 7. Testimonial Client Photos

**Format:** `[Client Name], satisfied customer of [Service] project in [Location]`

**Examples:**
- Good: "Shannon from Penryn, satisfied customer of full home renovation project"
- Good: "Tom and Laura from Roseland with their completed barn conversion"
- Bad: "Client"
- Bad: "Happy customer"

### 8. Logo/Branding Images

**Format:** `[Company Name] logo` or `[Company Name] - [Tagline/Description]`

**Examples:**
- Good: "Arron Bennett Building Contractors - Traditional Cornwall builders"
- Good: "Arron Bennett Building logo"
- Bad: "Logo"

## Location-Based SEO Keywords

Always include location when relevant. Priority locations:

1. **Primary:** Cornwall, Roseland Peninsula
2. **Secondary:** Penryn, Feock, Devon
3. **Regional:** Southwest England, Southwest Cornwall

**Example Integration:**
- "Stone cottage renovation in Roseland Peninsula, Cornwall featuring traditional craftsmanship"
- "New build project in Penryn showcasing local Cornish granite"

## Service-Based Keywords to Include

Prioritize these service keywords in alt text (from SEO research):

1. **High Priority:**
   - Stone masonry
   - Building contractor
   - Home renovation
   - Kitchen renovation
   - Bathroom renovation
   - Traditional building methods

2. **Medium Priority:**
   - Hard landscaping
   - Heritage restoration
   - Lime mortar
   - Project management
   - Full build

3. **Specialized:**
   - Ground source heat pump
   - Air source heat pump
   - Mini excavator services
   - Traditional Cornish building

## What NOT to Include in Alt Text

❌ **Avoid:**
- "Image of..." or "Picture of..."
- "Photo showing..."
- Keyword stuffing
- Irrelevant details
- Repetitive information from surrounding text
- File names (e.g., "IMG_1234.jpg")
- Long sentences (>150 characters)

## Empty Alt Text

Use empty alt (`alt=""`) for:
- Purely decorative images
- Images that add no information
- Images already described in surrounding text
- Spacer/separator images
- Background patterns

**Example:** Decorative corner flourish → `alt=""`

## Testing Your Alt Text

Ask yourself:
1. Would someone listening to a screen reader understand the image?
2. Does it add value without seeing the image?
3. Would it make sense if the image failed to load?
4. Does it flow naturally with surrounding content?
5. Have I included relevant location and service details?

## Implementation Checklist

- [ ] Every image has alt text (unless purely decorative)
- [ ] Alt text is 125 characters or less
- [ ] Includes location where relevant (Cornwall, Roseland, etc.)
- [ ] Includes service keywords naturally
- [ ] Is descriptive and specific
- [ ] Makes sense to screen reader users
- [ ] No keyword stuffing
- [ ] No "image of" or "picture of"
- [ ] Validated with accessibility tools

## Component Usage Example

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<!-- Good Example -->
<OptimizedImage
  src="/images/stone-cottage-renovation.jpg"
  alt="Traditional Cornish stone cottage renovation in Roseland Peninsula featuring lime mortar restoration and granite repairs"
  width={800}
  height={600}
/>

<!-- Bad Example -->
<OptimizedImage
  src="/images/IMG_1234.jpg"
  alt="Building"
  width={800}
  height={600}
/>
```

## Regular Audits

Conduct monthly audits:
1. Check all images have alt text
2. Review for keyword opportunities
3. Ensure location mentions are current
4. Test with screen readers
5. Validate against SEO best practices

## Resources

- [W3C Alt Text Guide](https://www.w3.org/WAI/tutorials/images/)
- [WebAIM Alt Text Guidelines](https://webaim.org/techniques/alttext/)
- [Google Image SEO Best Practices](https://developers.google.com/search/docs/appearance/google-images)

---

**Last Updated:** October 2025
**Version:** 1.0
**Owner:** SEO & Accessibility Team
