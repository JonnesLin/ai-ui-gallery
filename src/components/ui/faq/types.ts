import type { ThemeName } from '../_themes';
import type { ReactNode } from 'react';

export type FAQVariant = 'accordion' | 'cards' | 'simple';

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FAQProps {
  theme?: ThemeName;
  variant?: FAQVariant;
  items: FAQItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | number[];
  className?: string;
}

export interface FAQItemProps {
  question: string;
  answer: ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  theme: ThemeName;
  variant: FAQVariant;
  className?: string;
}
