# Design System Reference
## Arron Bennett Building - Canonical Design Tokens

This document defines the official design system for the Arron Bennett Building website. All components and pages must adhere to these standards.

---

## 🎨 COLOR PALETTE

### Primary Colors

#### Navy Blue (Primary Brand Color)
```css
/* Use Tailwind classes, not hex values */
navy-50:  #f0f4f8
navy-100: #d9e2ec
navy-200: #bcccdc
navy-300: #9fb3c8
navy-400: #829ab1
navy-500: #627d98
navy-600: #486581
navy-700: #334e68
navy-800: #243b53
navy-900: #1a2d4d  /* Primary navy */
```

**Usage:**
- `bg-navy-900` - Primary backgrounds, headers
- `text-navy-900` - Primary text color
- `bg-navy-800` - Secondary backgrounds
- `hover:bg-navy-800` - Button hover states

#### Coral (Accent Color - WCAG AAA Compliant)
```css
coral-50:  #fef5f3
coral-100: #fde8e3
coral-200: #fcd1c7
coral-300: #fab3a1
coral-400: #f7906f
coral-500: #a83820  /* Primary coral - WCAG AAA */
coral-600: #8b2e19  /* Hover state */
coral-700: #6d2414
coral-800: #5a1e11
coral-900: #4a180e
```

**Usage:**
- `bg-coral-500` - CTA buttons, accents
- `text-coral-500` - Accent text, links
- `border-coral-500` - Accent borders
- `hover:bg-coral-600` - Button hover states

#### Eggshell (Background)
```css
eggshell: #F0EAD6
```

**Usage:**
- Use custom class `bg-eggshell` for alternating sections

#### Neutral Colors
Use Tailwind's default gray palette:
- `gray-50` through `gray-900`
- `white` for #FFFFFF
- `black` for #000000

---

## 📝 TYPOGRAPHY

### Font Families
```css
font-sans: system-ui, -apple-system, sans-serif
font-serif: Georgia, serif (if needed)
```

### Heading Hierarchy

#### H1 - Page Titles
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900">
```

#### H2 - Section Headings
```html
<h2 class="text-3xl md:text-4xl font-bold text-navy-900">
```

#### H3 - Subsection Headings
```html
<h3 class="text-2xl md:text-3xl font-semibold text-navy-900">
```

#### H4 - Card Titles
```html
<h4 class="text-xl font-semibold text-navy-900">
```

### Body Text
```html
<!-- Standard body text -->
<p class="text-base text-gray-700 leading-relaxed">

<!-- Large body text (introductions) -->
<p class="text-lg text-gray-700 leading-relaxed">

<!-- Small text (captions, metadata) -->
<p class="text-sm text-gray-600">
```

### Links
```html
<a class="text-coral-500 hover:text-coral-600 underline">
```

---

## 📐 SPACING SYSTEM

### Section Spacing
```html
<!-- Standard sections -->
<section class="py-16 lg:py-20">

<!-- Hero sections -->
<section class="py-20 md:py-28 lg:py-36">

<!-- Compact sections -->
<section class="py-12 lg:py-16">
```

### Container Widths
```html
<!-- Main content container -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

<!-- Narrow content (text heavy) -->
<div class="max-w-4xl mx-auto">

<!-- Wide content (galleries) -->
<div class="max-w-7xl mx-auto">
```

### Component Spacing
```html
<!-- Standard gap between elements -->
<div class="gap-4">

<!-- Large gap for sections -->
<div class="gap-8">

<!-- Grid gaps -->
<div class="grid gap-4 lg:gap-8">
```

---

## 🧩 COMPONENT PATTERNS

### Buttons

#### Primary Button (CTA)
```html
<button class="px-8 py-4 bg-coral-500 text-white font-semibold rounded-full hover:bg-coral-600 hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-coral-300">
  Button Text
</button>
```

#### Secondary Button
```html
<button class="px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-navy-300">
  Button Text
</button>
```

#### Ghost Button
```html
<button class="px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-200">
  Button Text
</button>
```

### Cards

#### Standard Card
```html
<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
  <!-- Card content -->
</div>
```

#### Service Card
```html
<div class="bg-white rounded-lg shadow-lg p-8 border-t-4 border-coral-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
  <!-- Service content -->
</div>
```

#### Testimonial Card
```html
<div class="bg-gray-50 rounded-lg p-6 border-l-4 border-coral-500">
  <!-- Testimonial content -->
</div>
```

### Forms

#### Input Fields
```html
<input class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all duration-200">
```

#### Textareas
```html
<textarea class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all duration-200 resize-none">
</textarea>
```

---

## 🎭 INTERACTION STATES

### Hover Effects
- Buttons: `hover:scale-105 hover:shadow-xl`
- Cards: `hover:shadow-xl hover:-translate-y-1`
- Links: `hover:text-coral-600`

### Focus States
- Interactive elements: `focus:outline-none focus:ring-4 focus:ring-coral-300`
- Form fields: `focus:border-coral-500 focus:ring-2 focus:ring-coral-200`

### Transitions
- Standard: `transition-all duration-200`
- Slow: `transition-all duration-300`
- Fast: `transition-all duration-150`

---

## 📱 RESPONSIVE PATTERNS

### Breakpoints
```
sm: 640px   - Mobile landscape
md: 768px   - Tablets
lg: 1024px  - Desktop
xl: 1280px  - Large desktop
2xl: 1536px - Extra large screens
```

### Mobile-First Approach
Always start with mobile styles, then add responsive modifiers:
```html
<div class="text-base md:text-lg lg:text-xl">
```

---

## 🚫 DO NOT USE

The following should be replaced:

### Deprecated Colors
- ❌ `#F27A5E` → Use `coral-500` class
- ❌ `#021F59` → Use `navy-900` class
- ❌ `#FFFFFF` → Use `white` class
- ❌ Any inline styles with color values

### Deprecated Patterns
- ❌ Inline style attributes for colors
- ❌ Custom CSS for standard components
- ❌ Hardcoded hex values
- ❌ Non-standard spacing values

---

## ✅ IMPLEMENTATION CHECKLIST

When building or updating components:

1. [ ] Use Tailwind color classes, not hex values
2. [ ] Follow typography hierarchy exactly
3. [ ] Use standard spacing tokens (4, 8, 12, 16, 20)
4. [ ] Apply consistent border radius (rounded-lg for cards)
5. [ ] Use consistent shadows (shadow-lg for cards)
6. [ ] Include proper hover and focus states
7. [ ] Test responsive behavior at all breakpoints
8. [ ] Ensure WCAG AAA color contrast (especially with coral)

---

## 📊 QUICK REFERENCE

| Element | Classes |
|---------|---------|
| **H1** | `text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900` |
| **H2** | `text-3xl md:text-4xl font-bold text-navy-900` |
| **Body** | `text-base text-gray-700 leading-relaxed` |
| **Section** | `py-16 lg:py-20` |
| **Container** | `container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl` |
| **Primary Button** | `px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600` |
| **Card** | `bg-white rounded-lg shadow-lg p-6` |

---

*Last Updated: October 30, 2024*
*Version: 1.0.0*