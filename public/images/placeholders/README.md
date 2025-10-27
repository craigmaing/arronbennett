# Placeholder Images

## Temporary Placeholders

This directory contains temporary placeholder images for development:

### Available Placeholders
- `placeholder-service.jpg` - Generic service card placeholder (800x600px)
- `placeholder-project.jpg` - Generic project card placeholder (1200x900px)
- `placeholder-hero.jpg` - Generic hero background (1920x1080px)
- `placeholder-avatar.jpg` - Generic testimonial avatar (150x150px)

## Purpose
These placeholders allow development to continue while:
- Waiting for client photography
- Extracting images from old site
- Commissioning professional photography

## Usage in Components
Components should gracefully handle missing images:
- Show placeholder with "Image coming soon" overlay
- Use colored background blocks
- Display relevant icons instead

## Replacement Strategy
1. **Phase 1**: Use solid color blocks (current)
2. **Phase 2**: Add text overlays indicating image type needed
3. **Phase 3**: Replace with actual client photography
4. **Phase 4**: Remove placeholder directory

## Do Not Deploy
⚠️ These placeholders should NOT be included in production build.

## Creating Placeholders
You can generate simple placeholders using:
- Solid color JPGs (brand colors)
- SVG patterns (stone texture, grid)
- Placeholder services (e.g., placeholder.com)

## Brand Color Placeholders
- **Navy**: #021f59
- **Coral**: #F27A5E
- **Gray**: #f8f9fa
