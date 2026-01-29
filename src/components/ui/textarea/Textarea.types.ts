import type { ThemeName } from '../_themes/types';
import type { TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaVariant = 'default' | 'filled' | 'outlined';
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: TextareaSize;
  theme: ThemeName;
  variant?: TextareaVariant;
  resize?: TextareaResize;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  error?: boolean | string;
  label?: string;
  helperText?: string;
  showCount?: boolean;
}
