# Legacy CSS Usage Guide

Quick reference for using the ported CSS classes from the original site.

---

## Button Classes

### Primary Buttons

#### Solid Red Button (Most Common)
```astro
<button class="tm-button style-flat tm-button-primary">
  Contact Us
</button>
```
- White text on red background (#DE2021)
- Hover: Red text with transparent background

#### Outline Red Button
```astro
<button class="tm-button style-outline tm-button-primary">
  Learn More
</button>
```
- Red text with red border
- Hover: White text on red background

### Secondary Buttons

#### Solid Dark Button
```astro
<button class="tm-button style-flat tm-button-secondary">
  Get Quote
</button>
```
- White text on dark background (#222222)
- Hover: Red text with transparent background

#### Outline Dark Button
```astro
<button class="tm-button style-outline tm-button-secondary">
  View Projects
</button>
```
- Dark text with dark border
- Hover: White text on dark background

### Text Buttons (Minimal Style)

```astro
<button class="tm-button style-text">
  Read More →
</button>
```
- No background, minimal padding
- Hover: Changes to red text

### Modern Button (Rounded Corners)

```astro
<button class="tm-button style-modern">
  Get Started
</button>
```
- White text on red background
- 4px border radius
- Darker red on hover

---

## Button with Icons

```astro
<button class="tm-button style-flat tm-button-primary">
  <span class="button-text">Contact Us</span>
  <span class="button-icon">→</span>
</button>
```

The 8px gap between text and icon is automatic.

---

## Typography Classes

### Headings

Use standard HTML heading tags - they're automatically styled:

```astro
<h1>Main Page Title</h1>        <!-- 39.2px → 56px -->
<h2>Section Heading</h2>         <!-- 25.2px → 36px -->
<h3>Subsection Heading</h3>      <!-- 22.4px → 32px -->
<h4>Card Title</h4>              <!-- 16.8px → 24px -->
<h5>Small Heading</h5>           <!-- 14px → 20px -->
<h6>Tiny Heading</h6>            <!-- 9.8px → 14px -->
```

All headings use **Roboto** font and scale fluidly between breakpoints.

---

## Layout Classes

### Boxed Container

```astro
<div class="boxed">
  <!-- Content constrained to 1200px max-width -->
</div>
```

### Page Content

```astro
<div class="page-content">
  <!-- No vertical padding applied -->
</div>
```

---

## Color Classes

### Primary Color (Red)

```astro
<span class="primary-color">Red text</span>
<div class="primary-background-color">Red background</div>
```

**Color value:** `#DE2021`

---

## Typography Elements

### Blockquote

```astro
<blockquote>
  Arron's work exceeded our expectations. The attention to detail was remarkable.
</blockquote>
```

Styled with:
- Grey italic text
- Red quotation mark
- 30px left padding

### Highlighted Text

```astro
<p>We specialize in <mark>traditional stonework</mark> and masonry.</p>
```

Styled with:
- Red text (#DE2021)
- Bold weight (600)
- No background color

---

## Utility Classes

### Spacing

```astro
<div class="mt-0">No top margin</div>
<div class="mb-0">No bottom margin</div>
<div class="pt-0">No top padding</div>
<div class="pb-0">No bottom padding</div>
```

### Text Alignment

```astro
<p class="text-center">Centered text</p>
<p class="text-left">Left-aligned text</p>
<p class="text-right">Right-aligned text</p>
```

---

## Mixing with Tailwind

Legacy classes work alongside Tailwind:

```astro
<!-- Primary button with Tailwind margin and shadow -->
<button class="tm-button style-flat tm-button-primary mt-8 shadow-lg">
  Contact Us
</button>

<!-- Heading with Tailwind spacing -->
<h2 class="mb-6">Our Services</h2>
```

**Note:** Legacy styles have higher specificity. Use `!important` in Tailwind to override if needed.

---

## Responsive Behavior

### Typography
All headings automatically scale between three breakpoints:
- **Mobile** (< 544px): Base sizes
- **Tablet** (544px - 1199px): Fluid scaling
- **Desktop** (≥ 1200px): Large sizes

### Buttons
Buttons maintain consistent sizing across all breakpoints. Consider stacking them vertically on mobile:

```astro
<div class="flex flex-col sm:flex-row gap-4">
  <button class="tm-button style-flat tm-button-primary">Contact</button>
  <button class="tm-button style-outline tm-button-primary">Learn More</button>
</div>
```

---

## Common Patterns

### Hero CTA Buttons

```astro
<div class="flex gap-4">
  <button class="tm-button style-flat tm-button-primary">
    Get a Free Quote
  </button>
  <button class="tm-button style-outline tm-button-primary">
    View Our Work
  </button>
</div>
```

### Contact Form Button

```astro
<button type="submit" class="tm-button style-flat tm-button-primary">
  Send Message
</button>
```

### Text Link Button

```astro
<a href="/services" class="tm-button style-text">
  Explore All Services →
</a>
```

---

## Accessibility Notes

### Focus States
All buttons and form elements have visible focus outlines:
- **Color:** Red (#DE2021)
- **Width:** 2px
- **Offset:** 2px

### Keyboard Navigation
Ensure all interactive elements using `.tm-button` are keyboard accessible:
- Use `<button>` for actions
- Use `<a>` for navigation
- Add proper ARIA labels if needed

---

## Performance Tips

1. **Legacy CSS is cached** - No additional HTTP request
2. **Gzipped size** - Only ~3-4KB
3. **Use sparingly** - Prefer Tailwind for new components
4. **Refactor gradually** - Replace legacy classes over time

---

## Don't Add New Styles

**❌ Don't do this:**
```css
/* Don't add to legacy.css */
.tm-button-new-style {
  /* ... */
}
```

**✅ Do this instead:**
```astro
<!-- Use Tailwind for new styles -->
<button class="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
  New Button
</button>
```

---

## Visual Reference

### Button Styles

```
┌─────────────────────────────────────────┐
│ Primary Flat (Most Common)              │
│  ┌─────────────────────┐                │
│  │ Contact Us          │ ← White on Red │
│  └─────────────────────┘                │
│  Hover: Red on Transparent              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Primary Outline                         │
│  ┏━━━━━━━━━━━━━━━━━━━━━┓                │
│  ┃ Learn More          ┃ ← Red on White │
│  ┗━━━━━━━━━━━━━━━━━━━━━┛                │
│  Hover: White on Red                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Secondary Flat                          │
│  ┌─────────────────────┐                │
│  │ Get Quote           │ ← White on Dark│
│  └─────────────────────┘                │
│  Hover: Red on Transparent              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Text Button (Minimal)                   │
│  Read More →                            │
│  No background, just red text on hover  │
└─────────────────────────────────────────┘
```

---

## Troubleshooting

### Button doesn't look right
**Problem:** Button has wrong colors
**Solution:** Check class order - `.tm-button` must come first

### Typography too small/large
**Problem:** Headings don't scale properly
**Solution:** Ensure parent has correct width (fluid typography needs viewport-relative units)

### Legacy styles override Tailwind
**Problem:** Tailwind utilities don't apply
**Solution:** Use `!important` or increase specificity:
```astro
<button class="tm-button ![bg-blue-500]">Custom</button>
```

---

**Last Updated:** October 24, 2025
**Ported from:** Original Arron Bennett WordPress site
**Migration Status:** Phase 1 Complete
