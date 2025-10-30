/**
 * Component Library Index
 *
 * Central export file for all Lighthouse Mentoring components.
 * Import components using: import { Button, Card } from '@/components';
 */

// Core UI Components
export { default as Button } from './Button.astro';
export { default as Card } from './Card.astro';

// Specialized Components
export { default as ServiceCard } from './ServiceCard.astro';
export { default as TestimonialCard } from './TestimonialCard.astro';

// Layout Components
export { default as Header } from './Header.astro';
export { default as Footer } from './Footer.astro';
export { default as Hero } from './Hero.astro';

// Form Components
export { default as ContactForm } from './ContactForm.astro';

// Type exports
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  CardProps,
  CardVariant,
  ServiceCardProps,
  TestimonialCardProps,
  HeaderProps,
  FooterProps,
  HeroProps,
  HeroVariant,
  HeroAlignment,
  ContactFormProps,
  NavLink,
  FooterLink,
  FooterColumn,
  SocialLink,
  FormField,
  FormOption,
  ImageProps,
  BadgeProps,
  IconProps,
} from '../types/components';
