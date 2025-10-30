/**
 * Comprehensive Project Gallery Data
 * Using all 213+ categorized gallery images
 * Two-level gallery: Overview cards -> Project details
 */

export interface ProjectImage {
  src: string;
  alt: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  category: 'stone-masonry' | 'renovations' | 'new-builds' | 'landscaping' | 'roofing' | 'kitchens' | 'traditional' | 'general';
  location: string;
  description: string;
  images: ProjectImage[];
  featured: boolean;
  year: number;
  completionTime?: string;
}

export const projectCategories = {
  'stone-masonry': 'Stone Masonry',
  'renovations': 'Extensions & Renovations',
  'new-builds': 'New Builds',
  'landscaping': 'Landscaping',
  'roofing': 'Roofing',
  'kitchens': 'Kitchens',
  'traditional': 'Heritage & Traditional',
  'general': 'General Building'
} as const;

// Helper to generate image arrays from numbered sequences
function createImageArray(prefix: string, start: number, end: number, baseName: string): ProjectImage[] {
  const images: ProjectImage[] = [];
  for (let i = start; i <= end; i++) {
    const num = String(i).padStart(3, '0');
    images.push({
      src: `/images/gallery/${prefix}-${num}.jpg`,
      alt: `${baseName} - progress view ${i - start + 1}`,
      order: i - start + 1
    });
  }
  return images;
}

export const projects: Project[] = [
  // EXTENSIONS & RENOVATIONS PROJECTS (23 images total)
  {
    id: 'modern-home-extension',
    title: 'Modern Home Extension',
    category: 'renovations',
    location: 'Cornwall',
    description: 'Contemporary single-storey extension featuring large glazing and open-plan living space. Complete transformation adding valuable living space while respecting the original property character.',
    images: createImageArray('extensions', 1, 8, 'Modern extension'),
    featured: true,
    year: 2023,
    completionTime: '4 months'
  },
  {
    id: 'traditional-stone-extension',
    title: 'Traditional Stone Extension',
    category: 'renovations',
    location: 'Cornwall',
    description: 'Sympathetic extension to period property using traditional Cornish stone and matching materials. Carefully designed to blend seamlessly with existing structure while adding modern living space.',
    images: createImageArray('extensions', 9, 15, 'Traditional extension'),
    featured: false,
    year: 2023,
    completionTime: '5 months'
  },
  {
    id: 'kitchen-extension-renovation',
    title: 'Kitchen Extension & Renovation',
    category: 'renovations',
    location: 'Cornwall',
    description: 'Complete kitchen extension with internal reconfiguration creating bright, modern cooking and dining space. Features underfloor heating, bi-fold doors, and contemporary finishes.',
    images: createImageArray('extensions', 16, 23, 'Kitchen extension'),
    featured: false,
    year: 2023,
    completionTime: '4 months'
  },

  // STONE MASONRY PROJECTS (22 images total)
  {
    id: 'traditional-stone-boundary-wall',
    title: 'Traditional Stone Boundary Wall',
    category: 'stone-masonry',
    location: 'Cornwall',
    description: 'Hand-built Cornish stone boundary wall using traditional dry stone walling techniques. Features locally sourced granite demonstrating skilled craftsmanship preserving heritage building methods.',
    images: createImageArray('masonry', 1, 8, 'Stone wall construction'),
    featured: true,
    year: 2023,
    completionTime: '6 weeks'
  },
  {
    id: 'garden-retaining-wall',
    title: 'Garden Retaining Wall',
    category: 'stone-masonry',
    location: 'Cornwall',
    description: 'Structural retaining wall built to create level garden terraces. Combines functional engineering with aesthetic stonework to enhance outdoor living spaces and manage ground levels.',
    images: createImageArray('masonry', 9, 15, 'Retaining wall'),
    featured: false,
    year: 2023,
    completionTime: '5 weeks'
  },
  {
    id: 'stone-wall-restoration',
    title: 'Period Stone Wall Restoration',
    category: 'stone-masonry',
    location: 'Cornwall',
    description: 'Restoration of historic stone boundary walls using period-appropriate techniques and materials. Careful reconstruction maintaining character and integrity of original structure.',
    images: createImageArray('masonry', 16, 22, 'Wall restoration'),
    featured: false,
    year: 2023,
    completionTime: '7 weeks'
  },

  // NEW BUILDS PROJECTS (20 images total)
  {
    id: 'detached-new-build-home',
    title: 'Detached New Build Home',
    category: 'new-builds',
    location: 'Cornwall',
    description: 'Complete new build from groundworks to final finishes. Modern family home featuring four bedrooms, contemporary design, and high specification throughout. Built to exceed current building regulations.',
    images: createImageArray('newbuilds', 1, 10, 'New build home'),
    featured: true,
    year: 2023,
    completionTime: '11 months'
  },
  {
    id: 'garage-outbuilding-construction',
    title: 'Garage & Outbuilding',
    category: 'new-builds',
    location: 'Cornwall',
    description: 'Purpose-built detached garage and storage building featuring traditional pitched roof design. Quality construction with practical workspace and secure vehicle storage.',
    images: createImageArray('newbuilds', 11, 20, 'Garage construction'),
    featured: false,
    year: 2023,
    completionTime: '3 months'
  },

  // LANDSCAPING PROJECTS (22 images total)
  {
    id: 'patio-retaining-wall-project',
    title: 'Patio & Retaining Wall',
    category: 'landscaping',
    location: 'Cornwall',
    description: 'Comprehensive landscaping project creating multiple level garden terraces with quality paving and structural retaining walls. Transformed sloping garden into usable outdoor living spaces.',
    images: createImageArray('landscaping', 1, 8, 'Patio and retaining wall'),
    featured: true,
    year: 2023,
    completionTime: '6 weeks'
  },
  {
    id: 'driveway-landscaping',
    title: 'Driveway & Front Garden',
    category: 'landscaping',
    location: 'Cornwall',
    description: 'Complete driveway and front garden transformation with quality block paving, drainage solutions, and decorative stonework. Enhances curb appeal and property value.',
    images: createImageArray('landscaping', 9, 15, 'Driveway installation'),
    featured: false,
    year: 2023,
    completionTime: '4 weeks'
  },
  {
    id: 'garden-transformation',
    title: 'Garden Transformation',
    category: 'landscaping',
    location: 'Cornwall',
    description: 'Complete garden redesign featuring decking, stone features, planting areas and outdoor entertainment space. Creates beautiful and functional outdoor environment for family living.',
    images: createImageArray('landscaping', 16, 22, 'Garden redesign'),
    featured: false,
    year: 2023,
    completionTime: '5 weeks'
  },

  // ROOFING PROJECTS (17 images total)
  {
    id: 'roof-truss-new-build',
    title: 'Roof Truss Installation',
    category: 'roofing',
    location: 'Cornwall',
    description: 'Complete roof structure for new build featuring engineered trusses, traditional slate finish, and quality carpentry throughout. Built to withstand Cornwall\'s coastal weather conditions.',
    images: createImageArray('roofing', 1, 9, 'Roof truss installation'),
    featured: true,
    year: 2023,
    completionTime: '6 weeks'
  },
  {
    id: 'roof-restoration-repair',
    title: 'Roof Restoration & Repair',
    category: 'roofing',
    location: 'Cornwall',
    description: 'Comprehensive roof restoration on period property including re-slating, timber repairs, and upgraded weatherproofing. Preserving traditional appearance while improving performance.',
    images: createImageArray('roofing', 10, 17, 'Roof restoration'),
    featured: false,
    year: 2023,
    completionTime: '8 weeks'
  },

  // KITCHEN PROJECTS (20 images total)
  {
    id: 'modern-kitchen-renovation',
    title: 'Modern Kitchen Renovation',
    category: 'kitchens',
    location: 'Cornwall',
    description: 'Complete kitchen renovation featuring contemporary units, integrated appliances, and quality worktops. Maximized storage and workspace in stylish modern design with attention to detail.',
    images: createImageArray('kitchens', 1, 10, 'Modern kitchen'),
    featured: false,
    year: 2023,
    completionTime: '5 weeks'
  },
  {
    id: 'traditional-kitchen-refit',
    title: 'Traditional Kitchen Refit',
    category: 'kitchens',
    location: 'Cornwall',
    description: 'Traditional style kitchen featuring Shaker cabinets, Belfast sink, and classic finishes. Combines timeless design with modern functionality creating warm, family-friendly cooking space.',
    images: createImageArray('kitchens', 11, 20, 'Traditional kitchen'),
    featured: false,
    year: 2023,
    completionTime: '5 weeks'
  },

  // TRADITIONAL/HERITAGE WORK (15 images total)
  {
    id: 'period-property-restoration',
    title: 'Period Property Restoration',
    category: 'traditional',
    location: 'Cornwall',
    description: 'Sensitive restoration of listed building using traditional methods and materials. Careful preservation of historic features while discreetly upgrading services and weatherproofing.',
    images: createImageArray('traditional', 1, 8, 'Property restoration'),
    featured: false,
    year: 2023,
    completionTime: '9 months'
  },
  {
    id: 'traditional-cornish-techniques',
    title: 'Traditional Cornish Building',
    category: 'traditional',
    location: 'Cornwall',
    description: 'Demonstration of traditional Cornish building techniques including dry stone walling, granite quoins, and lime pointing. Preserving local heritage skills and architectural character.',
    images: createImageArray('traditional', 9, 15, 'Traditional building'),
    featured: false,
    year: 2023,
    completionTime: '6 weeks'
  },

  // GENERAL BUILDING WORK (20 images total)
  {
    id: 'property-maintenance-works',
    title: 'Property Maintenance & Repairs',
    category: 'general',
    location: 'Cornwall',
    description: 'General building maintenance and repair works including structural repairs, weatherproofing, and property improvements. Reliable service keeping properties in excellent condition.',
    images: createImageArray('general', 1, 10, 'Maintenance work'),
    featured: false,
    year: 2024,
    completionTime: 'Various'
  },
  {
    id: 'general-construction-projects',
    title: 'General Construction Projects',
    category: 'general',
    location: 'Cornwall',
    description: 'Various building and construction works demonstrating versatility and skill across different project types. Quality workmanship and attention to detail in every job undertaken.',
    images: createImageArray('general', 11, 20, 'Construction work'),
    featured: false,
    year: 2024,
    completionTime: 'Various'
  }
];

// Helper functions
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllCategories(): string[] {
  const categories = projects.map(p => p.category);
  return Array.from(new Set(categories));
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getTotalImageCount(): number {
  return projects.reduce((total, project) => total + project.images.length, 0);
}
