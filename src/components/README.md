# Component Library Quick Reference

## Import Components

```astro
---
// Import individual components
import { Button, Card, Hero, Header, Footer } from '@/components';

// Or import types
import type { ButtonProps, HeroProps } from '@/components';
---
```

## Component Quick Links

| Component | File | Purpose |
|-----------|------|---------|
| **Button** | `Button.astro` | Primary, secondary, ghost buttons |
| **Card** | `Card.astro` | Content containers with variants |
| **ServiceCard** | `ServiceCard.astro` | Service display with icons |
| **TestimonialCard** | `TestimonialCard.astro` | Client testimonials |
| **Header** | `Header.astro` | Site navigation header |
| **Footer** | `Footer.astro` | Site footer with links |
| **Hero** | `Hero.astro` | Page hero sections |
| **ContactForm** | `ContactForm.astro` | Contact/lead capture form |

## Common Patterns

### Page Layout

```astro
<Header />
<main>
  <Hero variant="primary" title="Page Title" />
  <section><!-- Content --></section>
</main>
<Footer />
```

### Service Grid

```astro
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  <ServiceCard
    title="Service Name"
    description="Description"
    icon="users"
    href="/service"
  />
</div>
```

### CTA Section

```astro
<section class="bg-navy-900 text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl mb-6">Ready to Get Started?</h2>
    <Button variant="secondary" href="/contact" size="lg">
      Book Discovery Call
    </Button>
  </div>
</section>
```

## Design Tokens

```css
/* Colors */
Navy:  #1A2D4D (Primary)
Coral: #F27A5E (Accent)

/* Spacing (4px base) */
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

/* Container */
max-width: 1280px (xl container)
padding: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)
```

## Props Reference

### Button

```astro
<Button
  variant="primary|secondary|ghost"
  size="sm|md|lg"
  href="/path"
  type="button|submit|reset"
  disabled={false}
  fullWidth={false}
>
  Text
</Button>
```

### Hero

```astro
<Hero
  variant="primary|secondary|minimal"
  alignment="left|center"
  title="Required Title"
  subtitle="Optional Subtitle"
  description="Optional Description"
  ctaPrimary="Button Text"
  ctaPrimaryHref="/path"
  image="/image.jpg"
  credentials={['Badge 1', 'Badge 2']}
/>
```

### ServiceCard

```astro
<ServiceCard
  title="Service Name"
  description="Description text"
  icon="users|briefcase|heart|chart|star"
  features={['Feature 1', 'Feature 2']}
  href="/service-page"
  cta="Learn More"
/>
```

## Accessibility Reminders

- Always provide `alt` text for images
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Include ARIA labels for icon-only buttons
- Ensure 4.5:1 color contrast for text
- Make all interactive elements keyboard accessible
- Test with screen readers

## Performance Tips

- Use `loading="lazy"` for below-fold images
- Optimize images to WebP format
- Keep bundle size minimal (most components have 0 JS)
- Use Astro's built-in optimizations
- Avoid layout shifts (specify width/height)

## Common Issues

### Component not found
```bash
# Check import path
import { Button } from '@/components';  # ✅ Correct
import Button from '@/components/Button.astro';  # ❌ Old way
```

### Styling not applied
```bash
# Ensure Tailwind is configured
# Check astro.config.mjs for @astrojs/tailwind
```

### TypeScript errors
```bash
# Import types
import type { ButtonProps } from '@/components';
```

---

For full documentation, see [COMPONENT-LIBRARY.md](../../COMPONENT-LIBRARY.md)
