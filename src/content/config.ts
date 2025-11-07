import { defineCollection, z } from 'astro:content';

// Services collection schema
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    features: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

// Testimonials collection schema
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    date: z.date(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

// Projects/Portfolio collection schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    location: z.string().optional(),
    completionDate: z.date().optional(),
    featured: z.boolean().default(false),
    images: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  services: servicesCollection,
  testimonials: testimonialsCollection,
  projects: projectsCollection,
};
