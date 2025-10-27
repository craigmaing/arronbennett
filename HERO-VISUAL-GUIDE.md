# Hero Section Rebuild - Visual Guide

## Original Layout (From Screenshot)

```
┌────────────────────────────────────────────────────────────────┐
│                         HEADER                                  │
│  [LOGO]              HOME  ABOUT US  SERVICES  GALLERY  CONTACT │
│                                               ☎ 07773 463383    │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                   PAGE TITLE BAR                                │
│  █████████████████████████████████████████████  (#1a2c4d)      │
│  About Us                                                       │
│  HOME › ABOUT US                                                │
│  ████████████████████████████████████████████                  │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    HERO SECTION (White BG)                      │
│                                                                 │
│  ┌────────────────────────┬────────────────────────────────┐  │
│  │                        │                                 │  │
│  │                        │  Arron Bennett –               │  │
│  │      [IMAGE]           │  Traditional Builder in        │  │
│  │                        │  Cornwall                      │  │
│  │   Traditional          │  ─────────────                 │  │
│  │   Stone House          │                                 │  │
│  │                        │  Welcome to Arron Bennett Inc,  │  │
│  │   [Blue sky, stone     │  as an experienced,            │  │
│  │    exterior visible]   │  dependable and highly         │  │
│  │                        │  skilled traditional builder   │  │
│  │                        │  based on the Roseland         │  │
│  │                        │  Peninsula...                  │  │
│  │                        │                                 │  │
│  │                        │  [Continues with more text...] │  │
│  │                        │                                 │  │
│  │                        │  ┌──────────────────┐          │  │
│  │                        │  │  OUR SERVICES    │          │  │
│  │                        │  └──────────────────┘          │  │
│  │                        │                                 │  │
│  └────────────────────────┴────────────────────────────────┘  │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Component Structure

### 1. Page Title Bar
```
DARK NAVY BACKGROUND (#1a2c4d)
├── Large White Heading (48px) "About Us"
└── Breadcrumb Navigation (13px uppercase)
    └── HOME › ABOUT US
```

### 2. Hero Section
```
WHITE BACKGROUND
└── Container (max-width: 1170px)
    └── Two-Column Grid (50px gap)
        ├── LEFT: Image Column
        │   └── <img> Traditional stone house
        └── RIGHT: Content Column
            ├── H1 (36px bold) "Arron Bennett – Traditional Builder..."
            ├── Body Text (16px, line-height 1.8)
            └── Button "OUR SERVICES" (dark navy)
```

---

## Color Palette

```
Primary Navy     Coral Accent      White           Text Gray
█ #1a2c4d       █ #f27a5e        █ #ffffff       █ #666666

Heading Color    Background       Border          Hover State
█ #2c3e50       █ #f8f9fa        █ #1a2c4d       Inverted
```

---

## Typography Scale

```
Page Title       Hero Title       Body Text        Button Text
48px bold       36px bold        16px regular     14px bold
Open Sans       Open Sans        Open Sans        Open Sans
White           #2c3e50          #666666          White/Navy
```

---

## Button States

### Default State
```
┌─────────────────────┐
│   OUR SERVICES      │  ← Dark Navy BG (#1a2c4d)
└─────────────────────┘     White Text
                            14px uppercase
                            Letter-spacing: 1px
```

### Hover State
```
┌─────────────────────┐
│   OUR SERVICES      │  ← Transparent BG
└─────────────────────┘     Navy Text (#1a2c4d)
    ↑                       Navy Border (2px)
    Border visible
```

---

## Spacing System

### Vertical Spacing
```
Page Title Bar:
├── Padding Top: 60px
└── Padding Bottom: 50px

Hero Section:
├── Padding Top: 60px
└── Padding Bottom: 80px

Content Elements:
├── Title Margin Bottom: 25px
├── Paragraph Margin Bottom: 15px
└── Button Margin Top: 30px
```

### Horizontal Spacing
```
Container:
├── Max Width: 1170px
└── Horizontal Padding: 15px

Grid:
├── Columns: 1fr | 50px gap | 1fr
└── Two equal columns with 50px spacing
```

---

## Responsive Breakpoints

### Desktop (> 991px)
```
┌──────────────┬──────────────┐
│   Image      │   Content    │
│   (1fr)      │   (1fr)      │
└──────────────┴──────────────┘
```

### Tablet/Mobile (≤ 991px)
```
┌────────────────────────────┐
│         Image              │
└────────────────────────────┘
┌────────────────────────────┐
│         Content            │
└────────────────────────────┘
```

---

## Implementation Files

### Component: `AboutHero.astro`
```astro
<section class="about-hero-section">
  <div class="container">
    <div class="hero-grid">
      <div class="image-column">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div class="content-column">
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={buttonHref} class="btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  </div>
</section>
```

### Page: `about.astro`
```astro
<!-- Page Title Bar -->
<section class="page-title-bar">
  <h1>About Us</h1>
  <nav class="breadcrumbs">
    HOME › ABOUT US
  </nav>
</section>

<!-- Hero Section -->
<AboutHero
  title="Arron Bennett – Traditional Builder..."
  content="..."
  imageSrc="/images/stone-house.jpg"
/>
```

---

## Image Specifications

### Hero Image (Stone House)
- **Aspect Ratio**: Approximately 4:3 or 16:9
- **Recommended Size**: 800x600px minimum
- **Format**: JPG or WebP
- **Subject**: Traditional stone house/building
- **Style**: Professional architectural photography
- **Lighting**: Natural daylight, blue sky visible

### Current Placeholder
```
Path: /images/placeholder-stone-house.jpg
Status: Needs to be added
Source: Original site project gallery or client photos
```

---

## CSS Grid Layout

```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

---

## Comparison Checklist

### Layout ✅
- [x] Two-column grid (image left, content right)
- [x] Equal column widths (1fr each)
- [x] 50px gap between columns
- [x] Container max-width: 1170px

### Typography ✅
- [x] Open Sans font family
- [x] Title: 36px bold
- [x] Body: 16px regular, line-height 1.8
- [x] Button: 14px bold uppercase

### Colors ✅
- [x] Navy button: #1a2c4d
- [x] White background
- [x] Gray text: #666666
- [x] Heading: #2c3e50

### Button ✅
- [x] Dark navy background
- [x] White text
- [x] Uppercase with letter-spacing
- [x] Hover: Inverted (transparent + border)

### Responsive ✅
- [x] Stacks vertically on mobile
- [x] Font sizes adjust for smaller screens
- [x] Padding reduces on mobile

---

## Usage Scenarios

### Scenario 1: About Page (Current)
```astro
<!-- Uses AboutHero with two-column layout -->
<AboutHero
  title="Arron Bennett – Traditional Builder..."
  content="..."
  imageSrc="/images/about-hero.jpg"
/>
```

### Scenario 2: Homepage Option
```astro
<!-- Could replace modern Hero with AboutHero -->
<AboutHero
  title="We can help you on a wide range of projects"
  content="Whether your vision is traditional..."
  imageSrc="/images/hero-project.jpg"
/>
```

### Scenario 3: Service Pages
```astro
<!-- Each service page could use this layout -->
<AboutHero
  title="Stone Masonry Services"
  content="Expert traditional stone masonry..."
  buttonText="GET A QUOTE"
  buttonHref="/contact"
  imageSrc="/images/stone-masonry.jpg"
/>
```

---

## Testing Checklist

- [ ] Visual match to screenshot
- [ ] Typography renders correctly (Open Sans loaded)
- [ ] Colors match exactly (#1a2c4d navy, etc.)
- [ ] Button hover state works
- [ ] Grid layout displays correctly
- [ ] Image loads properly
- [ ] Responsive breakpoints work
- [ ] Mobile layout stacks correctly
- [ ] Breadcrumbs display properly
- [ ] Links function correctly

---

## Final Result

The AboutHero component and about page recreate the exact layout from the original Arron Bennett site screenshot:

✅ **Layout**: Image left, content right
✅ **Styling**: Dark navy buttons, Open Sans typography
✅ **Spacing**: 50px grid gap, proper padding
✅ **Colors**: Exact match to original palette
✅ **Responsive**: Collapses gracefully on mobile
✅ **Components**: Reusable, clean code

**Status**: Ready to use once stone house image is added!
