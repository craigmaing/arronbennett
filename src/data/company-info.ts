/**
 * Company Information
 * Central source of truth for Arron Bennett Building Contractors business details
 * Used throughout the site and in Schema.org structured data
 */

export const companyInfo = {
  // Basic Information
  name: 'Arron Bennett Building Contractors ltd',
  legalName: 'Arron Bennett Building Contractors ltd',
  alternateName: 'Arron Bennett Building',
  foundingDate: '2004', // Approximate based on "20+ years experience"

  // Contact Details
  telephone: '+447773463383',
  telephoneDisplay: '07773 463383',
  email: 'enquiries@arronbennettbuilding.co.uk',

  // Address
  address: {
    streetAddress: '', // Not publicly listed
    addressLocality: 'Roseland Peninsula',
    addressRegion: 'Cornwall',
    postalCode: '', // Not publicly listed
    addressCountry: 'GB',
    countryName: 'United Kingdom'
  },

  // Service Areas
  serviceAreas: [
    'Roseland Peninsula',
    'Cornwall',
    'Devon',
    'Truro',
    'Falmouth',
    'St Austell',
    'Newquay',
    'Plymouth'
  ],

  // Geographic Coverage
  geoCoordinates: {
    // Approximate center of Roseland Peninsula
    latitude: '50.1891',
    longitude: '-4.9503'
  },

  // Business Details
  businessType: 'GeneralContractor',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Bank Transfer, Card',

  // URLs
  url: 'https://www.arronbennettbuilding.co.uk',
  logo: 'https://www.arronbennettbuilding.co.uk/images/logo.png',
  image: 'https://www.arronbennettbuilding.co.uk/og-image.jpg',

  // Social Media (if available)
  sameAs: [
    // Add social media profiles here when available
    // 'https://www.facebook.com/arronbennettbuilding',
    // 'https://www.instagram.com/arronbennettbuilding',
  ],

  // Business Description
  description: 'Traditional builder on the Roseland Peninsula specialising in stone masonry & project management. Arron Bennett delivers expert craftsmanship on the Roseland Peninsula, Cornwall.',

  // Key Features
  slogan: 'Traditional craftsmanship with modern building methods',

  // Certifications & Memberships
  certifications: [
    'Fully Insured'
  ],

  // Opening Hours (typical construction hours)
  openingHours: [
    'Mo-Fr 08:00-17:00',
    'Sa 09:00-13:00'
  ],

  // Years of Experience
  yearsExperience: 20,

  // Key Services
  servicesOffered: [
    'Full Builds',
    'Home Renovations',
    'Bathroom and Kitchen Renovations',
    'Hard Landscaping',
    'Mini Excavator and Waste Away Services',
    'Stone and Block Masonry',
    'Project Management',
    'Ground Source and Air Source Installations',
    'Traditional Lime Mortars'
  ],

  // Specializations
  specializations: [
    'Stone Masonry',
    'Traditional Lime Mortars',
    'Barn Conversions',
    'Listed Building Renovations',
    'Hard Landscaping',
    'Project Management'
  ],

  // Trust Indicators
  trustIndicators: {
    fullyInsured: true,
    yearsExperience: 20,
    qualityGuaranteed: true,
    traditionalCraftsmanship: true
  }
} as const;

export type CompanyInfo = typeof companyInfo;
