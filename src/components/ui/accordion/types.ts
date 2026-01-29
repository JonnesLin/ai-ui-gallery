import type { ThemeName } from '../_themes';
import type { CSSProperties, ReactNode } from 'react';

export type AccordionType = 'single' | 'multiple';

export interface AccordionContextValue {
  type: AccordionType;
  value: Set<string>;
  onItemToggle: (itemValue: string) => void;
  theme: ThemeName;
  collapsible: boolean;
}

export interface AccordionProps {
  type?: AccordionType;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  theme?: ThemeName;
  collapsible?: boolean;
  children: ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface AccordionContentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
