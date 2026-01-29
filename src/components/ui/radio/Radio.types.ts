import type { ThemeName } from '../_themes/types';
import type { ReactNode, InputHTMLAttributes } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioColor = 'primary' | 'success' | 'warning' | 'error';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  value: string;
  size?: RadioSize;
  theme: ThemeName;
  color?: RadioColor;
  disabled?: boolean;
  label?: ReactNode;
  description?: string;
  className?: string;
}

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  name: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface RadioGroupContext {
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}
