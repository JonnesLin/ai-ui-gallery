import type { ComponentSize, ComponentVariant, ThemeName } from '../_themes/types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ComponentVariant;
  /** Size of the button */
  size?: ComponentSize;
  /** Theme to apply. Defaults to 'minimalist' */
  theme?: ThemeName;
  /** Shows loading spinner and disables button */
  loading?: boolean;
  /** Makes button take full width of container */
  fullWidth?: boolean;
  /** Icon to show on the left side */
  leftIcon?: ReactNode;
  /** Icon to show on the right side */
  rightIcon?: ReactNode;
}
