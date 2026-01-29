import type { ThemeName } from '../_themes';

export type PricingPeriod = 'monthly' | 'yearly' | 'one-time';

export interface PricingCardProps {
  theme: ThemeName;
  featured?: boolean;
  popular?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface PricingHeaderProps {
  theme: ThemeName;
  name: string;
  description?: string;
  popular?: boolean;
  featured?: boolean;
  className?: string;
}

export interface PricingPriceProps {
  theme: ThemeName;
  amount: number;
  currency?: string;
  period?: PricingPeriod;
  originalAmount?: number;
  className?: string;
}

export interface PricingFeaturesProps {
  theme: ThemeName;
  features: string[];
  popular?: boolean;
  className?: string;
}

export interface PricingTableProps {
  theme: ThemeName;
  plans: PricingPlan[];
  className?: string;
}

export interface PricingPlan {
  name: string;
  description?: string;
  amount: number;
  currency?: string;
  period?: PricingPeriod;
  originalAmount?: number;
  features: string[];
  popular?: boolean;
  featured?: boolean;
  disabled?: boolean;
}
