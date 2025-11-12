/**
 * Schema.org Helper Functions
 * Utilities for generating valid Schema.org JSON-LD structured data
 */

import { companyInfo } from '../data/company-info';

// Define Testimonial interface locally to avoid dependency on data file
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  content: string;
  rating: number;
  duration?: string;
  highlights: string[];
  featured: boolean;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(siteUrl: string = companyInfo.url) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'GeneralContractor'],
    '@id': `${siteUrl}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    alternateName: companyInfo.alternateName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#logo`,
      url: companyInfo.logo,
      contentUrl: companyInfo.logo,
      caption: companyInfo.name
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#image`,
      url: companyInfo.image,
      contentUrl: companyInfo.image,
      caption: companyInfo.name
    },
    description: companyInfo.description,
    slogan: companyInfo.slogan,
    foundingDate: companyInfo.foundingDate,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    priceRange: companyInfo.priceRange,
    currenciesAccepted: companyInfo.currenciesAccepted,
    paymentAccepted: companyInfo.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      addressCountry: companyInfo.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.geoCoordinates.latitude,
      longitude: companyInfo.geoCoordinates.longitude
    },
    areaServed: companyInfo.serviceAreas.map(area => ({
      '@type': 'Place',
      name: area
    })),
    openingHoursSpecification: companyInfo.openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days.split('-').map(day => {
          const dayMap: Record<string, string> = {
            'Mo': 'Monday',
            'Tu': 'Tuesday',
            'We': 'Wednesday',
            'Th': 'Thursday',
            'Fr': 'Friday',
            'Sa': 'Saturday',
            'Su': 'Sunday'
          };
          return dayMap[day];
        }),
        opens,
        closes
      };
    }),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.telephone,
      contactType: 'Customer Service',
      email: companyInfo.email,
      areaServed: 'GB',
      availableLanguage: 'English'
    },
    ...(companyInfo.sameAs.length > 0 && { sameAs: companyInfo.sameAs })
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(siteUrl: string = companyInfo.url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: companyInfo.name,
    description: companyInfo.description,
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    inLanguage: 'en-GB'
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
  service: {
    name: string;
    description: string;
    features?: string[];
  },
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    provider: {
      '@id': `${siteUrl}/#organization`
    },
    areaServed: companyInfo.serviceAreas.map(area => ({
      '@type': 'Place',
      name: area
    })),
    ...(service.features && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Features`,
        itemListElement: service.features.map((feature, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feature
          }
        }))
      }
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'GBP'
    }
  };
}

/**
 * Generate Review schema from testimonial
 */
export function generateReviewSchema(
  testimonial: Testimonial,
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${siteUrl}/#review-${testimonial.id}`,
    itemReviewed: {
      '@id': `${siteUrl}/#organization`
    },
    author: {
      '@type': 'Person',
      name: testimonial.name
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: testimonial.content,
    ...(testimonial.project && { description: testimonial.project }),
    ...(testimonial.location && {
      contentLocation: {
        '@type': 'Place',
        name: testimonial.location
      }
    })
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(
  testimonials: Testimonial[],
  siteUrl: string = companyInfo.url
) {
  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = totalRating / testimonials.length;

  return {
    '@type': 'AggregateRating',
    '@id': `${siteUrl}/#aggregateRating`,
    ratingValue: averageRating.toFixed(1),
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1
  };
}

/**
 * Generate complete LocalBusiness schema with reviews
 */
export function generateLocalBusinessSchema(
  testimonials: Testimonial[],
  siteUrl: string = companyInfo.url
) {
  const orgSchema = generateOrganizationSchema(siteUrl);
  const aggregateRating = generateAggregateRatingSchema(testimonials, siteUrl);

  return {
    ...orgSchema,
    aggregateRating,
    review: testimonials.map(t => generateReviewSchema(t, siteUrl))
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  page: {
    title: string;
    description: string;
    url: string;
  },
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.url.startsWith('http') ? page.url : `${siteUrl}${page.url}`,
    url: page.url.startsWith('http') ? page.url : `${siteUrl}${page.url}`,
    name: page.title,
    description: page.description,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@id': `${siteUrl}/#organization`
    },
    inLanguage: 'en-GB'
  };
}

/**
 * Generate ImageObject schema
 */
export function generateImageObjectSchema(
  image: {
    url: string;
    caption: string;
    width?: number;
    height?: number;
  },
  siteUrl: string = companyInfo.url
) {
  const imageUrl = image.url.startsWith('http') ? image.url : `${siteUrl}${image.url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${imageUrl}#image`,
    url: imageUrl,
    contentUrl: imageUrl,
    caption: image.caption,
    ...(image.width && { width: image.width }),
    ...(image.height && { height: image.height })
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(
  pageUrl: string,
  siteUrl: string = companyInfo.url
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}${pageUrl}`,
    url: `${siteUrl}${pageUrl}`,
    name: 'Contact Us',
    description: 'Get in touch with Arron Bennett Building Contractors',
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@id': `${siteUrl}/#organization`
    },
    mainEntity: {
      '@id': `${siteUrl}/#organization`
    }
  };
}

/**
 * Create a complete Schema.org graph
 * Combines multiple schemas into a single @graph array
 */
export function createSchemaGraph(...schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.filter(Boolean)
  };
}
