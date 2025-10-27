# Component Library Visual Showcase

Visual reference guide for all Lighthouse Mentoring components.

---

## Button Component

### Primary Buttons
```
┌─────────────────┐  ┌──────────────────────┐  ┌───────────────────────────┐
│  Small Primary  │  │   Medium Primary     │  │    Large Primary Button   │
└─────────────────┘  └──────────────────────┘  └───────────────────────────┘
   Navy #1A2D4D         Navy #1A2D4D               Navy #1A2D4D
   White Text           White Text                 White Text
   px-4 py-2            px-6 py-3                  px-8 py-4
```

### Secondary Buttons (Coral)
```
┌─────────────────┐  ┌──────────────────────┐  ┌───────────────────────────┐
│ Small Secondary │  │  Medium Secondary    │  │   Large Secondary Button  │
└─────────────────┘  └──────────────────────┘  └───────────────────────────┘
   Coral #F27A5E        Coral #F27A5E              Coral #F27A5E
   White Text           White Text                 White Text
```

### Ghost Buttons (Outline)
```
┌─────────────────┐  ┌──────────────────────┐  ┌───────────────────────────┐
│  Small Ghost    │  │    Medium Ghost      │  │     Large Ghost Button    │
└─────────────────┘  └──────────────────────┘  └───────────────────────────┘
   Transparent          Transparent                Transparent
   Navy Border          Navy Border                Navy Border
   Navy Text            Navy Text                  Navy Text
```

---

## Card Component

### Default Card
```
┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │                                  │ │
│ │      [Image 16:9 aspect]        │ │
│ │                                  │ │
│ └──────────────────────────────────┘ │
│                                      │
│  Card Title (text-xl font-semibold) │
│                                      │
│  Description text in gray-700       │
│  with leading-relaxed spacing.      │
│                                      │
│  [Slot Content Area]                │
│                                      │
└──────────────────────────────────────┘
  Border: gray-200
  Shadow: sm → lg on hover
  Padding: 1.5rem (p-6)
```

### Service Card (Enhanced)
```
┌──────────────────────────────────────┐
│                                      │
│  Service Card Title                  │
│                                      │
│  Description text with enhanced      │
│  hover effects and lift animation.   │
│                                      │
│  Learn more →                        │
│                                      │
└──────────────────────────────────────┘
  Border: navy-100 (2px)
  Hover: lift -4px, shadow-xl
  Border hover: navy-300
```

---

## ServiceCard Component

```
┌────────────────────────────────────────┐
│  ┌────────┐                            │
│  │  ⚡   │  Icon (coral-600)           │
│  └────────┘  bg-coral-100, 4rem size  │
│                                        │
│  Leadership Coaching                   │
│  (text-2xl font-bold)                  │
│                                        │
│  Transform your leadership approach    │
│  with board-level expertise.           │
│  (text-gray-700 leading-relaxed)       │
│                                        │
│  ✓ Personalized coaching sessions      │
│  ✓ Strategic leadership frameworks     │
│  ✓ Board-level insights                │
│  ✓ Confidential environment            │
│  (coral checkmarks, text-sm)           │
│                                        │
│  Learn More →                          │
│  (coral arrow animation on hover)      │
│                                        │
└────────────────────────────────────────┘
  Padding: 2rem (p-8)
  Border: navy-100 (2px)
  Hover: lift -8px, shadow-2xl
```

### Available Icons
- `users` (👥) - Leadership/Team
- `briefcase` (💼) - Business/Executive
- `heart` (❤️) - Wellbeing/Health
- `chart` (📊) - Growth/Analytics
- `star` (⭐) - Excellence/Premium

---

## TestimonialCard Component

```
┌─────────────────────────────────────────┐
│  "                                       │
│  (Quote icon - coral-400 opacity-50)    │
│                                          │
│  "Craig's coaching completely            │
│  transformed how I approach leadership   │
│  challenges. His board-level             │
│  perspective brought insights I          │
│  couldn't have gained elsewhere."        │
│  (text-lg italic leading-relaxed)        │
│                                          │
│  ★★★★★ (5 stars in yellow-400)          │
│                                          │
│  ────────────────────────────            │
│                                          │
│  ┌──┐  Sarah Johnson                     │
│  │SJ│  CEO at Tech Corporation           │
│  └──┘  (or profile image)                │
│                                          │
└─────────────────────────────────────────┘
  Border: gray-100
  Shadow: md → xl on hover
  Padding: 2rem (p-8)
```

---

## Header Component

### Desktop Layout (≥1024px)
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [LOGO]  Lighthouse    Home  Services  About  Insights  Contact    📞 07773 463383 │
│          Mentoring                                                        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
  Sticky: top-0 z-50
  Background: white with backdrop-blur
  Border-bottom: gray-200
  Height: 5rem (h-20)
  Active link: coral-500 with underline
```

### Mobile Layout (<1024px)
```
┌──────────────────────────────────────┐
│                                      │
│  [LOGO] Lighthouse     ☰  (menu)     │
│                                      │
└──────────────────────────────────────┘
│                                      │
│  Home                                │ ← Slide down menu
│  Services                            │   on hamburger click
│  About                               │
│  Insights                            │
│  Contact                             │
│  ┌──────────────────────────────┐   │
│  │ 📞 Call: 07773 463383       │   │
│  └──────────────────────────────┘   │
└──────────────────────────────────────┘
```

---

## Footer Component

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [LOGO]                Services              Company              Legal    │
│  Lighthouse                                                                │
│  Mentoring             Leadership Coaching   About Craig          Privacy  │
│                        Executive Mentoring   Insights             Terms    │
│  Board-level           Wellbeing Advisory    Contact             Cookies   │
│  leadership            Board Advisory        Book Call                     │
│  coaching...                                                               │
│                                                                            │
│  [Fellow CMI] [FRSPH] [IoD Ambassador]                                     │
│                                                                            │
│  [in]  LinkedIn                                                            │
│                                                                            │
│  ──────────────────────────────────────────────────────────────────────── │
│                                                                            │
│  © 2025 Lighthouse Mentoring                    🇬🇧 UK-based  ✓ Insured   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
  Background: navy-900
  Text: white / gray-300
  Padding: 3-4rem (py-12 lg:py-16)
```

---

## Hero Component

### Primary Variant (Homepage)
```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: Navy gradient (#1A2D4D → #233A5A)                       │
│  Pattern overlay (dots, 5% opacity)                                  │
│                                                                      │
│  LEADERSHIP COACHING                    [Professional photo]         │
│                                         [of Craig Fearn]             │
│  Transform Your Leadership              [Decorative elements]        │
│  with Board-Level Expertise                                          │
│  (text-6xl font-bold white)                                          │
│                                                                      │
│  Over 20 years of board-level experience                             │
│  helping C-suite executives achieve                                  │
│  breakthrough results.                                               │
│  (text-xl gray-200)                                                  │
│                                                                      │
│  [Fellow CMI] [FRSPH] [IoD Ambassador]                               │
│  (White badges with checkmarks)                                      │
│                                                                      │
│  ┌────────────────────┐  ┌────────────────────┐                     │
│  │ Book Discovery Call│  │    Learn More      │                     │
│  └────────────────────┘  └────────────────────┘                     │
│   Coral button              Ghost white outline                     │
│                                                                      │
│  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                 │
│  Wave divider (white)                                                │
└──────────────────────────────────────────────────────────────────────┘
  Height: 28rem desktop (py-28)
  Grid: 2 columns on desktop
```

### Secondary Variant (Light)
```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: gray-50                                                 │
│                                                                      │
│  EXECUTIVE MENTORING                                                 │
│                                                                      │
│  Board-Level Mentoring for Senior Leaders                           │
│  (text-5xl font-bold navy-900)                                       │
│                                                                      │
│  Strategic guidance from experienced board members                   │
│  for complex organizational challenges.                              │
│  (text-xl gray-700)                                                  │
│                                                                      │
│  ┌────────────────────┐                                              │
│  │   Get Started      │                                              │
│  └────────────────────┘                                              │
│   Navy button                                                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Minimal Variant (Clean)
```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: white                                                   │
│                                                                      │
│  About Craig Fearn                                                   │
│  (text-4xl font-bold navy-900)                                       │
│                                                                      │
│  Fellow of CMI, FRSPH, and IoD Wellbeing Ambassador                  │
│  (text-lg gray-700)                                                  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## ContactForm Component

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  Get in Touch                                            │
│  (text-3xl font-bold)                                    │
│                                                          │
│  Fill out the form below and we'll get back to you      │
│  within 24 hours.                                        │
│  (text-gray-600)                                         │
│                                                          │
│  ──────────────────────────────────────────────────      │
│                                                          │
│  Full Name *                                             │
│  ┌────────────────────────────────────────────────┐     │
│  │ John Smith                                     │     │
│  └────────────────────────────────────────────────┘     │
│                                                          │
│  Email Address *                                         │
│  ┌────────────────────────────────────────────────┐     │
│  │ john@company.com                               │     │
│  └────────────────────────────────────────────────┘     │
│                                                          │
│  Phone Number                                            │
│  ┌────────────────────────────────────────────────┐     │
│  │ 07700 000000                                   │     │
│  └────────────────────────────────────────────────┘     │
│                                                          │
│  Message *                                               │
│  ┌────────────────────────────────────────────────┐     │
│  │ Tell us about your needs...                    │     │
│  │                                                │     │
│  │                                                │     │
│  └────────────────────────────────────────────────┘     │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ By submitting this form, you agree to our       │   │
│  │ Privacy Policy.                                  │   │
│  └──────────────────────────────────────────────────┘   │
│  (gray-50 background notice)                             │
│                                                          │
│  ┌────────────────────────────────────────────────┐     │
│  │         Send Message →                         │     │
│  └────────────────────────────────────────────────┘     │
│  (coral-500 full-width button)                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
  Border: gray-200
  Shadow: lg
  Padding: 2.5rem (p-10)
  Rounded: 2xl

  Error State (red border, shake animation):
  ┌────────────────────────────────────────────────┐
  │ [Invalid input]                                │ ← Red border
  └────────────────────────────────────────────────┘
  ⚠ Please enter a valid email address              ← Error text

  Loading State:
  │ Sending... ⟳                                   │ ← Spinner icon
```

---

## Color Palette Reference

### Primary Colors
```
Navy Blues:
█ 900 #1A2D4D  (Primary brand, buttons)
█ 800 #233A5A  (Hover states)
█ 700 #2D4768  (Active states)
█ 100 #E8EDF4  (Light backgrounds)
█  50 #F4F7FB  (Subtle backgrounds)

Coral Accents:
█ 500 #F27A5E  (Primary accent, CTAs)
█ 600 #E66A4E  (Hover states)
█ 400 #F58A6E  (Light accent)
█ 200 #FACFBF  (Very light accent)
█ 100 #FEE7DF  (Subtle backgrounds)
```

### Neutral Grays
```
█ 900 #111827  (Headings)
█ 700 #374151  (Body text)
█ 600 #4B5563  (Muted text)
█ 400 #9CA3AF  (Placeholder text)
█ 300 #D1D5DB  (Borders)
█ 200 #E5E7EB  (Light borders)
█ 100 #F3F4F6  (Light backgrounds)
█  50 #F9FAFB  (Subtle backgrounds)
```

### Status Colors
```
Success: █ #10B981 (green-500)
Warning: █ #F59E0B (yellow-500)
Error:   █ #EF4444 (red-500)
Info:    █ #3B82F6 (blue-500)
```

---

## Typography Scale

```
Hero:        72px / 4.5rem   (text-7xl)
H1:          60px / 3.75rem  (text-6xl)
H2:          48px / 3rem     (text-5xl)
H3:          36px / 2.25rem  (text-4xl)
H4:          30px / 1.875rem (text-3xl)
H5:          24px / 1.5rem   (text-2xl)
H6:          20px / 1.25rem  (text-xl)
Large:       18px / 1.125rem (text-lg)
Body:        16px / 1rem     (text-base)
Small:       14px / 0.875rem (text-sm)
Tiny:        12px / 0.75rem  (text-xs)
```

### Font Families
```
Headings:  'Crimson Pro', Georgia, serif
Body:      'Inter', system-ui, -apple-system, sans-serif
Mono:      'Consolas', 'Monaco', monospace
```

---

## Spacing Scale

```
0.25rem (4px)   → space-1  → gap-1, p-1, m-1
0.5rem  (8px)   → space-2  → gap-2, p-2, m-2
0.75rem (12px)  → space-3  → gap-3, p-3, m-3
1rem    (16px)  → space-4  → gap-4, p-4, m-4
1.25rem (20px)  → space-5  → gap-5, p-5, m-5
1.5rem  (24px)  → space-6  → gap-6, p-6, m-6
2rem    (32px)  → space-8  → gap-8, p-8, m-8
2.5rem  (40px)  → space-10 → gap-10, p-10, m-10
3rem    (48px)  → space-12 → gap-12, p-12, m-12
4rem    (64px)  → space-16 → gap-16, p-16, m-16
5rem    (80px)  → space-20 → gap-20, p-20, m-20
6rem    (96px)  → space-24 → gap-24, p-24, m-24
```

---

## Border Radius

```
Tiny:    2px  → rounded-sm   (badges, tags)
Small:   4px  → rounded      (default)
Medium:  6px  → rounded-md   (inputs)
Large:   8px  → rounded-lg   (buttons, cards)
XLarge:  12px → rounded-xl   (large cards)
2XLarge: 16px → rounded-2xl  (hero images)
Full:    9999px → rounded-full (avatars, pills)
```

---

## Shadow Scale

```
Tiny:     0 1px 2px rgba(0,0,0,0.05)      → shadow-sm
Small:    0 1px 3px rgba(0,0,0,0.1)       → shadow
Medium:   0 4px 6px rgba(0,0,0,0.1)       → shadow-md
Large:    0 10px 15px rgba(0,0,0,0.1)     → shadow-lg
XLarge:   0 20px 25px rgba(0,0,0,0.1)     → shadow-xl
2XLarge:  0 25px 50px rgba(0,0,0,0.25)    → shadow-2xl
```

---

## Breakpoints

```
Mobile:   0px - 639px    (default, mobile-first)
SM:       640px+         (sm:)
MD:       768px+         (md:)  ← Tablet
LG:       1024px+        (lg:)  ← Desktop
XL:       1280px+        (xl:)  ← Large desktop
2XL:      1536px+        (2xl:) ← Extra large
```

### Common Responsive Patterns

```astro
<!-- Mobile: Stack, Desktop: Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Content -->
</div>

<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">
  <!-- Desktop-only content -->
</div>

<!-- Different sizes by breakpoint -->
<h1 class="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

---

## Animation Patterns

### Hover Effects
```css
/* Button lift */
hover:shadow-lg hover:-translate-y-1

/* Card elevation */
hover:shadow-xl hover:-translate-y-2

/* Link underline growth */
hover:after { width: 100% }

/* Icon rotate */
hover:rotate-6
```

### Loading States
```css
/* Spinner */
animate-spin

/* Pulse */
animate-pulse

/* Bounce */
animate-bounce
```

### Transitions
```css
/* Standard */
transition-all duration-200 ease-in-out

/* Slow */
transition-all duration-300 ease-in-out

/* Fast */
transition-all duration-150 ease-in-out
```

---

## Accessibility Features

### Focus States
```
All interactive elements:
focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2
```

### Screen Reader Only
```html
<span class="sr-only">Screen reader text</span>
```

### ARIA Labels
```html
<button aria-label="Close menu">×</button>
<input aria-describedby="email-error" />
<div role="alert" aria-live="polite">Success message</div>
```

---

## Usage Quick Tips

### Import Pattern
```astro
---
import { Button, Card, Hero } from '@/components';
---
```

### Container Pattern
```astro
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

### Section Pattern
```astro
<section class="py-16 lg:py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Section Title</h2>
    <!-- Content -->
  </div>
</section>
```

### Grid Pattern
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

---

**Visual Reference Guide** | Lighthouse Mentoring Component Library
