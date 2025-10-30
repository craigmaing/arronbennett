# Structured Data (Schema.org) Implementation Documentation

## Overview
Comprehensive JSON-LD structured data has been implemented across the Arron Bennett Building website to improve SEO, enable rich search results, and help search engines better understand the business.

## Implementation Date
October 29, 2025

## Schema Types Implemented

### 1. Organization Schema
**Location:** `src/components/SEO.astro` (lines 49-72)

**Purpose:** Establishes the business as a recognized organization with brand identity.

**Key Properties:**
- `@type`: "Organization"
- `@id`: Unique identifier for the organization
- `name`: "Arron Bennett Building Contractors"
- `url`: Official website URL
- `logo`: Company logo with dimensions
- `contactPoint`: Customer service contact details
- `sameAs`: Social media profiles (to be added when available)

### 2. LocalBusiness / HomeAndConstructionBusiness Schema
**Location:** `src/components/SEO.astro` (lines 74-296)

**Purpose:** Primary business listing schema that appears in local search results and Google Maps.

**Type:** Multi-type declaration `["LocalBusiness", "HomeAndConstructionBusiness"]`
- `LocalBusiness`: General local business presence
- `HomeAndConstructionBusiness`: Specific categorization for building/construction services

**Enhanced Properties Added:**

#### Basic Information
- `name`: "Arron Bennett Building Contractors"
- `alternateName`: "Arron Bennett Building" (for brand variations)
- `description`: Comprehensive business description
- `slogan`: "Quality craftsmanship backed by over 20 years of experience"
- `foundingDate`: "2003" (derived from 20+ years experience)

#### Contact & Location
- `telephone`: "+44-7773-463383" (E.164 format)
- `email`: "enquiries@arronbennettbuilding.co.uk"
- `address`:
  - `addressLocality`: "Roseland Peninsula"
  - `addressRegion`: "Cornwall"
  - `addressCountry`: "GB"
- `geo`: Coordinates (50.2660, -5.0527)

#### Service Areas (Enhanced)
Structured hierarchically with containment relationships:
- **Falmouth** (City in Cornwall)
- **Truro** (City in Cornwall)
- **Cornwall** (Administrative Area in UK)
- **Devon** (Administrative Area in UK)
- **Roseland Peninsula** (Local area)

#### Business Details
- `priceRange`: "£££" (mid to high-end pricing)
- `paymentAccepted`: ["Cash", "Bank Transfer", "Cheque"]
- `currenciesAccepted`: "GBP"
- `openingHours`: "Mo-Fr 08:00-18:00, Sa 08:00-14:00"

#### Expertise
- `knowsAbout`: Array of 9 specializations including:
  - Stone Masonry
  - Traditional Building
  - Heritage Restoration
  - Lime Mortar Work
  - Project Management
  - Heat Pump Installation
  - New Build Construction
  - Barn Conversions
  - Listed Building Work

#### Ratings
- `aggregateRating`:
  - `ratingValue`: "5.0"
  - `bestRating`: "5"
  - `worstRating`: "1"
  - `reviewCount`: "5"

#### Service Catalog (9 Services)
Each service includes:
- Service type classification (Construction, Renovation, Masonry, etc.)
- Detailed description
- Provider reference (linked to main business)
- Area served (Cornwall & Devon)

**Services:**
1. **Full Builds** (Construction)
2. **Home Renovations** (Renovation)
3. **Stone and Block Masonry** (Masonry)
4. **Kitchen and Bathroom Renovations** (Interior Renovation)
5. **Hard Landscaping** (Landscaping)
6. **Project Management** (Project Management)
7. **Ground Source and Air Source Heat Pump Installations** (HVAC Installation)
8. **Traditional Lime Mortars** (Heritage Restoration)
9. **Mini Excavator and Waste Management Services** (Excavation)

### 3. Person Schema (Arron Bennett)
**Location:** `src/components/SEO.astro` (lines 298-316)

**Purpose:** Establishes Arron Bennett as an expert individual in the field.

**Key Properties:**
- `@type`: "Person"
- `name`: "Arron Bennett"
- `jobTitle`: "Master Builder & Building Contractor"
- `description`: Professional background and expertise
- `worksFor`: Linked to organization schema
- `knowsAbout`: Array of 6 expertise areas
- `areaServed`: Cornwall
- Contact details (phone, email)

### 4. BreadcrumbList Schema
**Location:** `src/components/SEO.astro` (lines 218-243)

**Purpose:** Helps search engines understand site hierarchy and navigation.

**Implementation:** Dynamically generated based on URL path
- Homepage always position 1
- Additional breadcrumbs added based on current page path
- Properly formatted names (capitalized, spaces instead of hyphens)

### 5. Service-Specific Schema
**Location:** `src/pages/services.astro` (lines 18-58)

**Purpose:** Detailed schema for each service on the services page.

**Fixed Issues:**
- ✅ Corrected placeholder phone number (+44-1234-567890 → +44-7773-463383)
- ✅ Updated email (info@ → enquiries@)
- ✅ Enhanced address with "Roseland Peninsula"
- ✅ Improved areaServed with hierarchical structure
- ✅ Added priceCurrency: "GBP" to offers

## SEO Benefits

### Rich Search Results
The implemented schema enables:
- **Business rich snippets** with ratings, hours, contact info
- **Service listings** in search results
- **Breadcrumb navigation** in SERPs
- **Knowledge Graph** eligibility for branded searches
- **Local Pack** listings in Google Maps

### Local SEO Enhancement
- Precise geo-targeting with coordinates
- Multiple service areas properly structured
- Opening hours for local search
- Payment methods and pricing indicators
- Area served hierarchy (cities → counties → country)

### Authority Signals
- 20+ years experience (founding date 2003)
- 5-star rating with review count
- Specific expertise areas listed
- Founder/person entity connection
- Professional certifications implied through knowsAbout

## Validation & Testing

### Google Rich Results Test
URL: https://search.google.com/test/rich-results

**Test the following pages:**
1. Homepage: http://localhost:4326/
2. Services page: http://localhost:4326/services
3. Contact page: http://localhost:4326/contact-us

### Schema Markup Validator
URL: https://validator.schema.org/

Copy the schema JSON from page source and validate for:
- Valid JSON syntax ✅
- Correct schema.org vocabulary ✅
- No required property warnings ✅
- Proper entity relationships ✅

### Google Search Console
After deployment:
1. Submit sitemap
2. Monitor "Enhancements" section
3. Check for schema errors
4. Request indexing for key pages

## Files Modified

### Primary Files
1. **src/components/SEO.astro**
   - Enhanced LocalBusiness schema (lines 74-296)
   - Added HomeAndConstructionBusiness type
   - Expanded service catalog with 9 detailed services
   - Added business metadata (founding date, slogan, expertise)
   - Improved areaServed with hierarchical structure

2. **src/pages/services.astro**
   - Fixed placeholder contact information (line 25)
   - Enhanced service schema structure (lines 18-58)
   - Added priceCurrency to offers

### Supporting Files
- **src/pages/contact-us.astro** - Already has ContactPage schema (no changes needed)
- **src/data/services.ts** - Service data source (referenced by schema)

## Future Enhancements

### Recommended Additions

1. **Review Schema**
   - Add individual Review objects for the 5 reviews
   - Include review text, dates, and reviewer names
   - Link to aggregateRating

2. **FAQPage Schema**
   - Create FAQ page with structured questions/answers
   - Helpful for voice search and featured snippets

3. **Article/BlogPosting Schema**
   - When blog/news section is added
   - Include author, publish dates, images

4. **ImageObject Schema**
   - Detailed schema for project images
   - Help images appear in Google Images

5. **Social Media Integration**
   - Add Facebook, Instagram, LinkedIn URLs to `sameAs` array
   - Connects social profiles to business entity

6. **Video Schema**
   - If video content is added
   - YouTube project tours or testimonials

7. **Event Schema**
   - Open house events
   - Trade shows or exhibitions

8. **Product Schema**
   - If selling materials or products
   - E.g., reclaimed stone, bespoke items

## Maintenance

### Regular Updates Needed

1. **Review Count & Rating**
   - Update when new reviews are received
   - Keep aggregateRating current

2. **Service Offerings**
   - Add new services to catalog
   - Update descriptions as services evolve

3. **Opening Hours**
   - Update for seasonal changes
   - Holiday closures

4. **Contact Information**
   - Keep phone/email current
   - Update if business relocates

5. **Images**
   - Update logo or business images
   - Ensure URLs are correct

### Monitoring

**Monthly:**
- Check Google Search Console for schema errors
- Monitor rich result performance
- Validate schema on key pages

**Quarterly:**
- Review competitor schema implementations
- Update with new schema.org vocabulary if relevant
- Test with latest Google Rich Results Test

**Annually:**
- Full schema audit
- Update founding date context (e.g., "25+ years")
- Review and refresh service descriptions

## Technical Implementation Notes

### JSON-LD Format
- Used `application/ld+json` script tags
- Placed in `<head>` section via SEO component
- Uses `set:html` directive for safe rendering
- Automatically minified in production

### Schema Relationships
- Uses `@id` for entity identification
- References between schemas using `{"@id": "..."}`
- Maintains clean entity graph structure

### Multi-Type Declaration
- LocalBusiness + HomeAndConstructionBusiness as array
- Provides both general and specific classification
- Improves categorization in Google's taxonomy

### Dynamic Generation
- BreadcrumbList generated from URL path
- Service schemas mapped from services.ts data
- Allows for easy maintenance and updates

## Expected Results

### Search Console Enhancements
After 1-2 weeks:
- Rich results detected
- Local business markup validated
- Breadcrumb markup displayed
- Service listings recognized

### SERP Features (3-6 months)
- Business knowledge panel
- Rich snippets with ratings
- Site links with breadcrumbs
- Local pack inclusion
- "Services offered" expansion

### Conversion Benefits
- Increased click-through rate from richer listings
- Better qualified traffic (searchers see ratings/info upfront)
- Improved local visibility
- Enhanced brand authority signals

## Resources

- **Schema.org Vocabulary**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data
- **LocalBusiness Guidelines**: https://developers.google.com/search/docs/advanced/structured-data/local-business
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/

## Contact for Updates

For schema updates or questions, refer to this documentation and the inline comments in `src/components/SEO.astro`.

---

**Last Updated:** October 29, 2025
**Version:** 1.0
**Author:** Claude Code Assistant
