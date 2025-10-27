# Arron Bennett Building - Astro Website

A modern, high-performance website built with Astro for Arron Bennett Building, a specialist in house extensions and building services.

## Project Overview

This project migrates the existing WordPress site to a modern Astro-based static site with improved performance, SEO, and maintainability.

### Key Features

- **Static Site Generation**: Lightning-fast page loads with pre-rendered HTML
- **Modern Tech Stack**: Astro 5.x with TypeScript for type safety
- **Optimized Images**: Sharp for automatic image optimization and responsive images
- **SEO Ready**: Built-in sitemap generation and meta tag management
- **Tailwind CSS**: Utility-first styling with Tailwind v4
- **Content Collections**: Type-safe content management for services, testimonials, and projects

## Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/)
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/)
- **SEO**: [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Project Structure

```
arron-bennett-astro/
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   └── assets/                  # Other static files
├── src/
│   ├── components/              # Reusable Astro components
│   ├── content/                 # Content collections
│   │   ├── services/            # Service pages
│   │   ├── testimonials/        # Customer testimonials
│   │   ├── projects/            # Portfolio projects
│   │   └── config.ts            # Content collection schemas
│   ├── layouts/                 # Page layouts
│   ├── lib/                     # Utility functions
│   ├── pages/                   # Site pages (routes)
│   └── styles/                  # Global styles
│       └── global.css           # Tailwind base styles
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Content Collections

### Services
Located in `src/content/services/`

Schema:
- `title`: Service name
- `description`: Service description
- `icon`: Optional icon identifier
- `order`: Display order
- `featured`: Featured service flag
- `image`: Optional service image

### Testimonials
Located in `src/content/testimonials/`

Schema:
- `name`: Customer name
- `role`: Optional job title
- `company`: Optional company name
- `rating`: 1-5 star rating
- `date`: Testimonial date
- `featured`: Featured testimonial flag
- `image`: Optional customer photo

### Projects
Located in `src/content/projects/`

Schema:
- `title`: Project name
- `description`: Project description
- `category`: Project category
- `location`: Optional location
- `completionDate`: Optional completion date
- `featured`: Featured project flag
- `images`: Array of project images
- `thumbnail`: Optional thumbnail image

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd arron-bennett-astro

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Build
npm run build            # Build for production
npm run preview          # Preview production build locally

# Utilities
npm run astro            # Run Astro CLI commands
```

## Configuration

### Site Configuration
Edit `astro.config.mjs` to configure:
- Site URL
- Sitemap settings
- Image optimization
- Build options

### Styling
Tailwind CSS configuration in `src/styles/global.css`
- Import Tailwind base, components, and utilities
- Custom theme configuration

## Image Optimization

Images are automatically optimized using Sharp:
- Responsive images with srcset
- WebP format conversion
- Lazy loading
- Automatic width/height calculation

Usage in Astro components:
```astro
---
import { Image } from 'astro:assets';
import myImage from '../images/example.jpg';
---

<Image src={myImage} alt="Description" />
```

## SEO Features ✅

### Implemented SEO Components

- **Comprehensive SEO Component** (`/src/components/SEO.astro`)
  - Dynamic meta tags (title, description, canonical)
  - Open Graph tags for Facebook/LinkedIn
  - Twitter Card integration
  - Geo-location tags for local SEO (Cornwall)
  - Author and theme-color meta

- **Schema.org Structured Data** (JSON-LD)
  - Organization schema with contact info
  - LocalBusiness schema with geographic data
  - Person schema (Arron Bennett)
  - BreadcrumbList for navigation
  - Service catalog (9 services)
  - Aggregate ratings from testimonials

- **Automatic Sitemap** at `/sitemap-index.xml`
  - Weekly update frequency
  - Priority indicators
  - Last modified dates
  - Excludes admin areas

- **robots.txt** Configuration
  - Search engine directives
  - Crawl-delay for aggressive bots
  - Sitemap locations
  - Allow/disallow rules

- **View Transitions**
  - Smooth page navigation
  - Improved perceived performance
  - Progressive enhancement

- **Image Optimization** (`/src/components/OptimizedImage.astro`)
  - WebP/AVIF format conversion
  - Lazy loading
  - Alt text validation
  - Responsive images with srcset

### SEO Documentation

- `/docs/SEO-IMPLEMENTATION-SUMMARY.md` - Complete SEO implementation guide
- `/docs/ALT-TEXT-GUIDELINES.md` - Image SEO and accessibility
- `/docs/INTERNAL-LINKING-STRATEGY.md` - Link building strategy
- `/docs/PERFORMANCE-OPTIMIZATION.md` - Performance = SEO guide

### Local SEO Optimization

- Cornwall-focused geo-targeting
- Service area (Cornwall, Devon, Roseland Peninsula)
- Google Business Profile ready
- Local pack optimization

## Migration from WordPress

### Extracted Data Location
Original WordPress content extracted to: `C:\Users\Fearn\ab1\extracted-site\`

### Migration Checklist
- [ ] Convert WordPress pages to Astro pages
- [ ] Migrate media files to `public/images/`
- [ ] Convert testimonials to content collection
- [ ] Convert services to content collection
- [ ] Convert portfolio/projects to content collection
- [ ] Migrate contact forms
- [ ] Set up redirects for old URLs
- [ ] Configure domain and hosting

## Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/` directory.

### Hosting Options
- **Netlify**: Recommended, automatic builds from Git
- **Vercel**: Excellent Astro support
- **Cloudflare Pages**: Fast global CDN
- **GitHub Pages**: Free static hosting

### Environment Variables
Create `.env` file for environment-specific configuration:
```
PUBLIC_SITE_URL=https://arronbennettbuilding.co.uk
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

This is a private project for Arron Bennett Building.

## License

Proprietary - All rights reserved

## Contact

For questions or support regarding this website project, contact the development team.

---

**Built with Astro** - The web framework for content-driven websites.
