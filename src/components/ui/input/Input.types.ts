import type { InputHTMLAttributes, ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  theme: ThemeName;
  error?: boolean | string;
  success?: boolean;
  label?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
