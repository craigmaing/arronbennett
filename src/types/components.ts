/**
 * Component Types for Lighthouse Mentoring
 * Comprehensive TypeScript interfaces for all components
 */

// Button Component Types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTag = 'button' | 'a';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
  class?: string;
}

// Card Component Types
export type CardVariant = 'default' | 'service' | 'testimonial' | 'feature';

export interface CardProps {
  variant?: CardVariant;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  class?: string;
}

// Service Card Types
export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  href?: string;
  cta?: string;
  class?: string;
}

// Testimonial Card Types
export interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating?: number;
  image?: string;
  class?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeaderProps {
  logo?: string;
  logoAlt?: string;
  phoneNumber?: string;
  navLinks?: NavLink[];
  class?: string;
}

// Footer Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: string;
  logoAlt?: string;
  description?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright?: string;
  class?: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'facebook' | 'instagram';
  href: string;
  ariaLabel?: string;
}

// Hero Component Types
export type HeroVariant = 'primary' | 'secondary' | 'minimal';
export type HeroAlignment = 'left' | 'center';

export interface HeroProps {
  variant?: HeroVariant;
  alignment?: HeroAlignment;
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  image?: string;
  imageAlt?: string;
  credentials?: string[];
  class?: string;
}

// Contact Form Types
export interface ContactFormProps {
  title?: string;
  description?: string;
  submitText?: string;
  successMessage?: string;
  errorMessage?: string;
  formAction?: string;
  class?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: FormOption[];
}

export interface FormOption {
  value: string;
  label: string;
}

// Shared/Utility Types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  class?: string;
}

export interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

export interface IconProps {
  name: string;
  size?: number;
  class?: string;
  ariaLabel?: string;
}
