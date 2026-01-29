import type { ThemeName } from '../_themes/types';

export type SectionBackground = 'light' | 'dark' | 'gradient' | 'image';
export type SectionPadding = 'sm' | 'md' | 'lg' | 'xl';

export interface LandingPageProps {
  theme: ThemeName;
  children: React.ReactNode;
}

export interface LandingSectionProps {
  id?: string;
  background: SectionBackground;
  padding: SectionPadding;
  children: React.ReactNode;
  className?: string;
}

export interface LandingHeroProps {
  title: React.ReactNode;
  subtitle: string;
  primaryCTA?: {
    text: string;
    onClick: () => void;
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
  };
  badge?: string;
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface LandingFeaturesProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export interface LandingCTAProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    onClick: () => void;
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}
