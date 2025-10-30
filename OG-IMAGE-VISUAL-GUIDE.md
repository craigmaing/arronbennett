# OG Image Visual Design Guide

## ASCII Mockup (1200x630 pixels)

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║ CORAL ACCENT BAR (#F27A5E) - 8px height                                      ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  NAVY BLUE GRADIENT BACKGROUND (#021f59 → #032a75)                          ║
║  with subtle grid pattern overlay                                            ║
║                                                                               ║
║    ┌──────┐                                                                  ║
║    │  /\  │                                                                  ║
║    │ │││ │  │            ARRON BENNETT                                       ║
║    │ │││ │  │            (Arial Bold, 72px, White, Letter-spacing: 2px)     ║
║    │ │││ │  │                                                                ║
║    │ └┴┴┘│                                                                   ║
║    └──────┘               BUILDING                                           ║
║   Building Icon           (Arial Regular, 36px, Coral #F27A5E)              ║
║   (2.5x scale)                                                               ║
║                           Traditional Builder in Cornwall                     ║
║                           (Arial Light, 28px, White 85% opacity)             ║
║                           ──────────────────                                 ║
║                           (Decorative line, 3px, Coral)                      ║
║                                                                               ║
║                                                                               ║
║                                                                               ║
║                                                                               ║
║                                                                          ┌─┐  ║
║                                                                          │ │  ║
║                                                                          └─┘  ║
║                                                                      (Subtle  ║
║                                                                       logo    ║
║                                                                       40%)    ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

## Color Breakdown

### Background
- **Base**: Navy blue gradient
  - Start: `#021f59` (Deep navy)
  - End: `#032a75` (Slightly lighter navy)
  - Direction: Top-left to bottom-right
- **Overlay**: Subtle 40x40px grid pattern
  - Color: `rgba(255, 255, 255, 0.03)` (barely visible, adds texture)

### Accent Elements
- **Top Border**: 8px solid `#F27A5E` (Coral/Orange)
- **"BUILDING" Text**: `#F27A5E` (Coral/Orange)
- **Decorative Line**: 3px solid `#F27A5E` (Coral/Orange)

### Text Colors
- **Company Name**: Pure white `#ffffff`
- **Tagline**: Coral `#F27A5E`
- **Subtitle**: White with 85% opacity `rgba(255, 255, 255, 0.85)`
- **Building Icon**: White `#ffffff`
- **Small Logo**: White `#ffffff` at 40% opacity

## Layout Measurements (1200x630px canvas)

### Positioning
```
┌─────────────────────────────────────┐
│ Accent Bar: y=0, height=8px         │
├─────────────────────────────────────┤
│                                     │
│ Building Icon:                      │
│   x = 100px, y = 180px              │
│   size = 87.5 x 87.5px (scaled)     │
│                                     │
│ Company Name "ARRON BENNETT":       │
│   x = 350px, y = 280px              │
│   font-size = 72px                  │
│                                     │
│ Tagline "BUILDING":                 │
│   x = 350px, y = 340px              │
│   font-size = 36px                  │
│                                     │
│ Subtitle "Traditional Builder...":  │
│   x = 350px, y = 400px              │
│   font-size = 28px                  │
│                                     │
│ Decorative Line:                    │
│   from (350, 430) to (600, 430)     │
│   stroke-width = 3px                │
│                                     │
│ Small Logo Watermark:               │
│   x = 1050px, y = 550px             │
│   size = 25 x 25px                  │
│   opacity = 40%                     │
└─────────────────────────────────────┘
```

## Typography Specifications

### "ARRON BENNETT" (Company Name)
- **Font**: Arial
- **Weight**: Bold (700)
- **Size**: 72px
- **Color**: White `#ffffff`
- **Letter-spacing**: 2px
- **Line-height**: Normal
- **Position**: (350, 280)

### "BUILDING" (Tagline)
- **Font**: Arial
- **Weight**: Regular (400)
- **Size**: 36px
- **Color**: Coral `#F27A5E`
- **Letter-spacing**: 1px
- **Line-height**: Normal
- **Position**: (350, 340)

### "Traditional Builder in Cornwall" (Subtitle)
- **Font**: Arial
- **Weight**: Light (300)
- **Size**: 28px
- **Color**: White 85% `rgba(255, 255, 255, 0.85)`
- **Letter-spacing**: 0.5px
- **Line-height**: Normal
- **Position**: (350, 400)

## Building Icon Details

The building icon is scaled 2.5x from the original logo.svg:

### Original Logo (logo.svg)
- Width: 35px (base structure)
- Height: 35px (main building)
- Roof height: 15px (from y=5 to y=20)
- Total height: ~50px

### Scaled Icon (in OG image)
- Width: 87.5px (35 × 2.5)
- Height: 87.5px
- Roof height: 37.5px
- Total height: ~125px

### Icon Structure
```
    /\        ← Roof (triangle)
   ┌──┐
   │││││      ← Building grid
   │││││         - 4 horizontal lines
   │││││         - 3 vertical lines
   │││││         - Creates brick/window pattern
   └───┘
```

## Social Media Preview Sizes

Your 1200x630px image will be displayed at various sizes:

### Facebook
- **Desktop Feed**: 1200 x 630px (full size!)
- **Mobile Feed**: 600 x 315px (50% scale)
- **Shared Link**: 600 x 315px
- **Messenger**: 400 x 210px

### LinkedIn
- **Desktop Post**: 1200 x 627px (uses full width)
- **Mobile Feed**: 552 x 289px
- **Shared Link**: 1104 x 577px (close to full size)

### Twitter/X
- **Desktop Tweet**: 1200 x 600px (full width, slightly cropped height)
- **Mobile Tweet**: 506 x 253px
- **Link Card**: 800 x 418px

### WhatsApp
- **Chat Preview**: 400 x 210px
- **Tapped Preview**: 800 x 420px

## Design Principles Applied

### 1. High Contrast
- White text on dark navy = maximum readability
- Coral accent provides visual interest
- Even at small sizes, text remains crisp

### 2. Clear Hierarchy
- Company name is largest (72px)
- Tagline is medium (36px)
- Subtitle is smallest but still readable (28px)

### 3. Brand Recognition
- Building icon immediately identifies the business
- Navy and coral colors match website
- Professional, construction-appropriate aesthetic

### 4. Scalability
- Text sizes are large enough to read at 300px width
- Icon is simple and recognizable at any size
- No small details that would blur when scaled

### 5. Professionalism
- Clean layout, not cluttered
- Appropriate for B2B professional services
- Traditional yet modern design
- Subtle textures add depth without distraction

## Comparison: Old vs New

### Current OG Image (OLD)
```
Dimensions: 553 x 329 pixels
File Size: 15.7 KB
Issues:
  - Too small for modern social media
  - Will appear blurry on high-res displays
  - Below Facebook's recommended minimum
  - Missing brand elements
  - Generic appearance
```

### New OG Image (PROFESSIONAL)
```
Dimensions: 1200 x 630 pixels ✓
File Size: ~60-80 KB ✓
Benefits:
  ✓ Optimal size for all platforms
  ✓ Sharp on all devices
  ✓ Branded with company name and logo
  ✓ Matches website design system
  ✓ Professional construction aesthetic
  ✓ High contrast for readability
  ✓ Memorable and distinctive
```

## How It Will Look on Different Platforms

### Facebook Post
```
┌─────────────────────────────┐
│ [Profile Photo] John Smith  │
├─────────────────────────────┤
│ Check out Arron Bennett     │
│ Building in Cornwall!       │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │  [Your OG Image Here]   │ │  ← Prominent, full-width
│ │  ARRON BENNETT          │ │
│ │  BUILDING               │ │
│ └─────────────────────────┘ │
│ arronbennettbuilding.co.uk  │
│ Arron Bennett Building...   │
└─────────────────────────────┘
```

### Twitter/X Card
```
┌─────────────────────────────┐
│ @username                   │
│ Great work by Arron Bennett │
│ Building!                   │
│                             │
│ ┌─────────────────────────┐ │
│ │  [Your OG Image]        │ │  ← Large card format
│ │  ARRON BENNETT          │ │
│ │  BUILDING               │ │
│ └─────────────────────────┘ │
│ arronbennettbuilding.co.uk  │
└─────────────────────────────┘
```

### LinkedIn Share
```
┌───────────────────────────────┐
│ John Smith shared             │
├───────────────────────────────┤
│ ┌───────────────────────────┐ │
│ │   [Your OG Image]         │ │  ← Very prominent
│ │   ARRON BENNETT           │ │  ← on LinkedIn
│ │   BUILDING                │ │
│ └───────────────────────────┘ │
│ Arron Bennett Building...     │
│ Traditional Builder Cornwall  │
│ arronbennettbuilding.co.uk    │
└───────────────────────────────┘
```

## Testing Checklist

When you implement the new image, verify:

- [ ] Text "ARRON BENNETT" is clearly visible
- [ ] Building icon is recognizable
- [ ] Coral accent color pops against navy background
- [ ] Text remains readable at small sizes (check on mobile)
- [ ] No pixelation or blur
- [ ] File loads quickly (under 1 second)
- [ ] Looks professional and trustworthy
- [ ] Matches website branding
- [ ] Works on both light and dark UI themes

## Final Visual Summary

```
═══════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████ CORAL
═══════════════════════════════════════════════════════════════════

                            NAVY BLUE GRADIENT
                        (with subtle grid pattern)

    🏗️                     ARRON BENNETT
   Building                                    White, 72px, Bold
    Icon                   BUILDING
                                               Coral, 36px, Regular

                           Traditional Builder in Cornwall
                           ─────────────────   White 85%, 28px


                                                           logo
═══════════════════════════════════════════════════════════════════
```

This design is:
- ✅ Professional
- ✅ Memorable
- ✅ On-brand
- ✅ Scalable
- ✅ Platform-optimized
- ✅ Ready to convert leads

Your OG image is the first impression potential clients get when your site is shared on social media. This professional design ensures that impression is strong, credible, and consistent with your brand.
