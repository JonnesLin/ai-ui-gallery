import type { ThemeName } from '../_themes';

export interface ProductVariant {
  name: string;
  options: Array<{
    id: string;
    label: string;
    value: string;
  }>;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export interface ProductData {
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  description: string;
  variants: ProductVariant[];
  inStock: boolean;
  features?: ProductFeature[];
  specifications?: Record<string, string>;
  relatedProducts?: RelatedProduct[];
  badge?: string;
}

export type ProductLayout = 'standard' | 'wide' | 'full';

export interface ProductPageProps {
  theme: ThemeName;
  layout?: ProductLayout;
  data: ProductData;
  onAddToCart?: () => void;
  onVariantChange?: (variantName: string, optionId: string) => void;
}

export interface ProductGalleryProps {
  theme: ThemeName;
  images?: string[];
}

export interface ProductInfoProps {
  theme: ThemeName;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  description: string;
  badge?: string;
}

export interface ProductActionsProps {
  theme: ThemeName;
  variants: ProductVariant[];
  inStock: boolean;
  onAddToCart?: () => void;
  onVariantChange?: (variantName: string, optionId: string) => void;
}

export interface ProductTabsProps {
  theme: ThemeName;
  features?: ProductFeature[];
  specifications?: Record<string, string>;
}
