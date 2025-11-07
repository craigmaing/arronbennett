/**
 * Services Data
 * Complete list of all building services offered by Arron Bennett Building
 */

import type { ImageMetadata } from 'astro';
import { getProjectImage, getServiceImage } from './imageRegistry';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  features: string[];
  category: 'building' | 'masonry' | 'renovation' | 'specialist';
  featured: boolean;
}

export const services: Service[] = [
  {
    id: 'full-builds',
    title: 'Full Builds',
    slug: 'full-builds',
    description: 'Bespoke properties using traditional and modern methods. From new builds to barn conversions, we work closely with architects and building control to bring your vision to life.',
    image: getServiceImage('full-builds.jpg'),
    features: [
      'New build homes',
      'Barn conversions',
      'Architect collaboration',
      'Building control compliance',
      'Traditional & modern methods',
      'Project management'
    ],
    category: 'building',
    featured: true
  },
  {
    id: 'renovations',
    title: 'Home Renovations',
    slug: 'renovations',
    description: 'Full restoration and renovation projects combining traditional methods with new technology. We\'re sympathetic to existing buildings while bringing them into the modern age.',
    image: getServiceImage('renovations.jpg'),
    imageAlt: 'Refurbishment Works',
    features: [
      'Full property restoration',
      'Period property expertise',
      'Listed building experience',
      'Modern upgrades',
      'Structural repairs',
      'Character preservation'
    ],
    category: 'renovation',
    featured: true
  },
  {
    id: 'kitchen-bathroom',
    title: 'Bathroom and Kitchen Renovations',
    slug: 'kitchen-bathroom-renovations',
    description: 'Full renovation projects that preserve traditional character while incorporating modern touches and new technology. Transform your living spaces with quality craftsmanship.',
    image: getProjectImage('barn-conversion-kitchen-roseland/A-Bennett-125.jpg'),
    features: [
      'Complete kitchen refits',
      'Luxury bathroom installations',
      'Traditional character retention',
      'Modern fixtures & fittings',
      'Plumbing & electrical work',
      'Custom cabinetry'
    ],
    category: 'renovation',
    featured: true
  },
  {
    id: 'hard-landscaping',
    title: 'Hard Landscaping',
    slug: 'hard-landscaping',
    description: 'Retaining walls, Cornish dry stone walling, block paving for patios, driveways, and entrances. Expert restoration and new landscaping schemes using traditional techniques.',
    image: getProjectImage('new-house-landscaping-feock/A-Bennett-120.jpg'),
    features: [
      'Retaining walls',
      'Cornish dry stone walling',
      'Block paving',
      'Patios & driveways',
      'Garden entrances',
      'Landscape restoration'
    ],
    category: 'masonry',
    featured: false
  },
  {
    id: 'excavation-waste',
    title: 'Mini Excavator and Waste Away Services',
    slug: 'excavation-waste-services',
    description: 'Professional site preparation for construction using industry standard mini excavators. Responsible waste disposal and efficient site management.',
    image: getServiceImage('excavator-waste.jpg'),
    features: [
      'Site preparation',
      'Groundworks',
      'Foundation excavation',
      'Waste removal',
      'Skip hire',
      'Environmentally responsible disposal'
    ],
    category: 'building',
    featured: false
  },
  {
    id: 'stone-masonry',
    title: 'Stone and Block Masonry',
    slug: 'stone-block-masonry',
    description: 'Specialist stone and block masonry including stone cladding, chimneys, boundary walls, retaining walls, Cornish dry stone walling, and granite hedging.',
    image: getServiceImage('stone-masonry.jpg'),
    imageAlt: 'Stone Walling granite/block paving works',
    features: [
      'Stone cladding',
      'Chimney construction',
      'Boundary walls',
      'Retaining walls',
      'Cornish dry stone walling',
      'Granite hedging'
    ],
    category: 'masonry',
    featured: true
  },
  {
    id: 'project-management',
    title: 'Project Management',
    slug: 'project-management',
    description: 'Full project oversight from material ordering to finishing touches. Liaison with clients, contractors, architects, and engineers, keeping you informed throughout.',
    image: getServiceImage('project-management.jpg'),
    features: [
      'Complete project oversight',
      'Material procurement',
      'Contractor coordination',
      'Architect liaison',
      'Regular client updates',
      'Budget management'
    ],
    category: 'building',
    featured: false
  },
  {
    id: 'heat-pumps',
    title: 'Ground Source and Air Source Installations',
    slug: 'heat-pump-installations',
    description: 'Energy-efficient, sustainable heating solutions. Our certified team has extensive knowledge and conducts thorough suitability assessments for your property.',
    image: getServiceImage('heat-pumps.jpg'),
    features: [
      'Ground source heat pumps',
      'Air source heat pumps',
      'Suitability assessments',
      'Certified installations',
      'Energy efficiency',
      'Sustainable heating'
    ],
    category: 'specialist',
    featured: true
  },
  {
    id: 'lime-works',
    title: 'Traditional Lime Mortars',
    slug: 'lime-works',
    description: 'Lime rendering, plastering, lime putties, and repointing for conservation and new traditional builds. Over 20 years of experience working with lime.',
    image: getServiceImage('lime-works.jpg'),
    imageAlt: 'Lime works to old stone barn refurb',
    features: [
      'Lime rendering',
      'Lime plastering',
      'Lime repointing',
      'Conservation work',
      'Traditional builds',
      '20+ years experience'
    ],
    category: 'specialist',
    featured: false
  }
];

export const getFeaturedServices = () => services.filter(s => s.featured);

export const getServicesByCategory = (category: Service['category']) =>
  services.filter(s => s.category === category);

export const getServiceBySlug = (slug: string) =>
  services.find(s => s.slug === slug);

export const getServiceById = (id: string) =>
  services.find(s => s.id === id);
