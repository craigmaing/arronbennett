import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services collection schema
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    image: image().optional(),
    imageAlt: z.string().optional(),
    features: z.array(z.string()).default([]),
    category: z.enum(['building', 'masonry', 'renovation', 'specialist']).default('building'),
    keywords: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Testimonials collection schema
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    project: z.string(),
    rating: z.number().min(1).max(5).default(5),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    duration: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

// Projects/Portfolio collection schema
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    location: z.string(),
    image: image(),
    details: z.array(z.string()),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      order: z.number(),
    })),
  }),
});

export const collections = {
  services: servicesCollection,
  testimonials: testimonialsCollection,
  projects: projectsCollection,
};
