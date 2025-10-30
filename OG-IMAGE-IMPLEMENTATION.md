# Open Graph Image Implementation Guide

## Overview
Professional 1200x630px Open Graph image for Arron Bennett Building website, optimized for social media sharing on Facebook, LinkedIn, Twitter, and other platforms.

## Design Specifications

### Dimensions
- **Size**: 1200 x 630 pixels (optimal for all social platforms)
- **Aspect Ratio**: 1.91:1
- **File Format**: JPG (recommended) or PNG
- **Target File Size**: <100KB for fast loading
- **Quality**: 85% JPG compression for optimal balance

### Brand Colors Used
- **Primary Navy**: `#021f59` (from BaseLayout.astro CSS variables)
- **Secondary Navy**: `#032a75` (gradient variation)
- **Accent Coral**: `#F27A5E` (from BaseLayout.astro CSS variables)
- **White**: `#ffffff`
- **Subtle Grid**: `rgba(255, 255, 255, 0.03)`

### Typography
- **Company Name**: Arial Bold, 72px, White, Letter-spacing: 2px
- **Tagline "BUILDING"**: Arial Regular, 36px, Coral (#F27A5E), Letter-spacing: 1px
- **Subtitle**: Arial Light, 28px, White 85% opacity, Letter-spacing: 0.5px

### Layout Elements
1. **Background**: Navy blue gradient with subtle grid pattern
2. **Top Accent**: 8px coral stripe at top edge
3. **Building Icon**: Scaled-up version of logo (2.5x), positioned left
4. **Text Content**: Stacked vertically, aligned left
5. **Decorative Line**: Coral underline below subtitle
6. **Small Logo**: Subtle watermark in bottom-right corner (40% opacity)

## Implementation Steps

### Option 1: Using the HTML Canvas Generator (Recommended)

1. **Open the Generator**
   ```bash
   # Navigate to the generator in your browser
   http://localhost:4321/og-image-generator.html
   # Or open the file directly
   start C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image-generator.html
   ```

2. **Generate and Download**
   - The image will auto-generate when the page loads
   - Click "Download as JPG" button
   - Save the file as `og-image.jpg`

3. **Replace Current File**
   ```bash
   # Backup current OG image
   cd C:\Users\Fearn\ab1\arron-bennett-astro\public
   copy og-image.jpg og-image-old.jpg

   # Replace with new image
   # Move downloaded file to replace og-image.jpg
   ```

### Option 2: Using SVG Conversion

1. **Use the SVG File**
   - File location: `C:\Users\Fearn\ab1\arron-bennett-astro\public\og-image-new.svg`
   - This SVG is exactly 1200x630px

2. **Convert SVG to JPG**

   **Method A: Online Converter**
   - Use https://cloudconvert.com/svg-to-jpg
   - Upload `og-image-new.svg`
   - Set width: 1200, height: 630
   - Quality: 85%
   - Download as `og-image.jpg`

   **Method B: Using Inkscape (if installed)**
   ```bash
   inkscape og-image-new.svg --export-filename=og-image.jpg --export-width=1200 --export-height=630
   ```

   **Method C: Using ImageMagick (if installed)**
   ```bash
   magick convert -density 300 -resize 1200x630 og-image-new.svg og-image.jpg
   ```

3. **Replace Current File**
   ```bash
   cd C:\Users\Fearn\ab1\arron-bennett-astro\public
   copy og-image.jpg og-image-old.jpg
   # Copy your converted JPG as og-image.jpg
   ```

### Option 3: Using a Design Tool

If you prefer to use Figma, Photoshop, or similar:

1. **Create New Document**
   - Dimensions: 1200 x 630 pixels
   - Resolution: 72 DPI (web standard)

2. **Design Specifications**
   - Background: Gradient from #021f59 to #032a75 (top-left to bottom-right)
   - Top Border: 8px high, #F27A5E
   - Import building icon from logo.svg
   - Scale to approximately 87.5 x 87.5 pixels
   - Position at (100px, 180px)

3. **Text Layout**
   - "ARRON BENNETT" at (350px, 280px)
     - Font: Arial Bold 72px, White, 2px letter-spacing
   - "BUILDING" at (350px, 340px)
     - Font: Arial 36px, #F27A5E, 1px letter-spacing
   - "Traditional Builder in Cornwall" at (350px, 400px)
     - Font: Arial Light 28px, White 85%, 0.5px letter-spacing
   - Decorative line from (350px, 430px) to (600px, 430px)
     - 3px thick, #F27A5E

4. **Export Settings**
   - Format: JPG
   - Quality: 85%
   - Target size: <100KB

## Verification Steps

### 1. File Check
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro\public
ls -l og-image.jpg
```
- Should be approximately 1200x630px
- File size should be <100KB
- Format should be JPG

### 2. Visual Inspection
- Open the file in an image viewer
- Verify all text is readable
- Check that colors match brand guidelines
- Ensure no text is cut off at edges
- Confirm building icon is visible and clear

### 3. Social Media Preview Testing
Use these tools to test how the image appears on social platforms:

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Enter your website URL to see how the OG image renders.

## Code Changes (If Needed)

The current implementation in `BaseLayout.astro` already references `/og-image.jpg`:

```typescript
const {
  title,
  description,
  ogImage = '/og-image.jpg',  // ← This is correct
  canonicalURL = Astro.url.href,
  schema,
  noindex = false,
  article
} = Astro.props;
```

**No code changes are required** if you replace the file with the same name (`og-image.jpg`).

## Testing Checklist

- [ ] Image dimensions are exactly 1200 x 630 pixels
- [ ] File size is under 100KB
- [ ] File is saved as `/public/og-image.jpg`
- [ ] Text is readable when scaled to small preview size
- [ ] Colors match brand guidelines (#021f59, #F27A5E)
- [ ] Building icon is visible and recognizable
- [ ] No text is cut off at edges
- [ ] File works on light and dark backgrounds
- [ ] Tested in Facebook Debugger
- [ ] Tested in Twitter Card Validator
- [ ] Tested in LinkedIn Post Inspector
- [ ] Cleared social media caches (if updating existing site)

## Troubleshooting

### Image Not Updating on Social Media
Social platforms cache OG images. To force an update:

1. **Facebook**: Use the Sharing Debugger and click "Scrape Again"
2. **LinkedIn**: Use the Post Inspector and clear cache
3. **Twitter**: Images may take 1-7 days to update

### File Size Too Large
- Increase JPG compression (reduce quality from 85% to 75%)
- Convert to JPG if currently PNG
- Ensure dimensions are exactly 1200x630 (no larger)

### Text Not Readable
- Increase font size if text is too small
- Improve contrast between text and background
- Use bold fonts for better legibility at small sizes

### Image Appears Cropped
- Some platforms crop images slightly differently
- Ensure important content is in the center 80% of the image
- Keep critical text and logos away from edges (50px margin minimum)

## File Comparison

### Current OG Image
- **File**: `og-image.jpg` (current)
- **Size**: 553 x 329 pixels (too small!)
- **File Size**: 15.7 KB
- **Issues**: Below optimal dimensions, may appear blurry on modern displays

### New OG Image
- **File**: `og-image.jpg` (replacement)
- **Size**: 1200 x 630 pixels (optimal)
- **File Size**: ~60-80 KB (estimated)
- **Improvements**:
  - Proper dimensions for all platforms
  - Sharp, high-quality rendering
  - Professional branded design
  - Matches website design system
  - Includes company name and tagline

## Next Steps

1. Generate or convert the image using one of the three methods above
2. Replace the current `og-image.jpg` file in `/public/` directory
3. Test the image dimensions and file size
4. Build and deploy the website
5. Test on social media platforms
6. Clear social media caches if updating existing site

## Design Rationale

### Why This Design?
1. **Professional**: Navy blue conveys trust and professionalism
2. **Brand-Consistent**: Uses exact colors from website design system
3. **Clear Hierarchy**: Company name is most prominent, with supporting text below
4. **Memorable**: Building icon creates instant brand recognition
5. **Readable**: High contrast white text on dark background ensures legibility
6. **Scalable**: Works well at both large and thumbnail sizes
7. **Platform-Optimized**: 1200x630px is the ideal size for all major platforms

### Design Inspiration
- Modern professional services websites
- Construction industry standards
- B2B brand aesthetics
- Clean, minimalist approach with strong typography
- Subtle details (grid pattern, decorative line) add sophistication without clutter

## Support

If you encounter issues or need modifications:
1. Review the troubleshooting section above
2. Verify all dimensions and file specs
3. Test with the HTML canvas generator first (simplest method)
4. Check the SVG source for reference design

The design is intentionally clean and professional to ensure it represents Arron Bennett Building effectively across all social media platforms.
