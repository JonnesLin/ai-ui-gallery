/**
 * Centralized size token definitions for consistent sizing across components.
 * Use these tokens to ensure visual consistency and reduce code duplication.
 */

import type { ComponentSize } from '../_themes/types';

/**
 * Standard component padding and text size combinations.
 * Used by Button, Input, Select, and other interactive components.
 */
export const componentSizeTokens: Record<ComponentSize, {
  padding: string;
  text: string;
  full: string;
}> = {
  xs: {
    padding: 'px-3 py-1',
    text: 'text-xs',
    full: 'px-3 py-1 text-xs',
  },
  sm: {
    padding: 'px-4 py-2',
    text: 'text-sm',
    full: 'px-4 py-2 text-sm',
  },
  md: {
    padding: 'px-6 py-3',
    text: 'text-base',
    full: 'px-6 py-3 text-base',
  },
  lg: {
    padding: 'px-8 py-4',
    text: 'text-lg',
    full: 'px-8 py-4 text-lg',
  },
  xl: {
    padding: 'px-10 py-5',
    text: 'text-xl',
    full: 'px-10 py-5 text-xl',
  },
} as const;

/**
 * Spinner/circular loader size tokens.
 */
export const spinnerSizeTokens: Record<ComponentSize, string> = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
} as const;

/**
 * Dots loader size tokens.
 */
export const dotsSizeTokens: Record<ComponentSize, string> = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
  xl: 'w-5 h-5',
} as const;

/**
 * Dots loader gap tokens.
 */
export const dotsGapTokens: Record<ComponentSize, string> = {
  xs: 'gap-1',
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-2.5',
  xl: 'gap-3',
} as const;

/**
 * Bars loader height tokens.
 */
export const barsHeightTokens: Record<ComponentSize, string> = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-16',
} as const;

/**
 * Bars loader width tokens.
 */
export const barsWidthTokens: Record<ComponentSize, string> = {
  xs: 'w-1',
  sm: 'w-1.5',
  md: 'w-2',
  lg: 'w-2.5',
  xl: 'w-3',
} as const;

/**
 * Pulse loader size tokens.
 */
export const pulseSizeTokens: Record<ComponentSize, string> = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
} as const;

/**
 * Icon size tokens for buttons and inputs.
 */
export const iconSizeTokens: Record<ComponentSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
} as const;

/**
 * Border radius tokens.
 */
export const radiusTokens = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;

export type RadiusToken = keyof typeof radiusTokens;
