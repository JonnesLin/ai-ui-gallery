import type { ThemeConfig } from './types';

/**
 * Minimalist Theme - Clean, typography-focused design
 *
 * @description A clean, restrained theme emphasizing typography and whitespace.
 * Features transparent backgrounds, subtle borders, and minimal visual elements.
 * Ideal for content-heavy interfaces and professional applications.
 *
 * @design
 * - Background: Transparent with white page
 * - Borders: Thin gray-900 borders (1px)
 * - Typography: Gray-900 primary text
 * - Radius: None (sharp corners)
 * - Interactions: Fill on hover
 *
 * @accessibility WCAG AA compliant with high contrast ratios
 */
export const minimalistTheme: ThemeConfig = {
  name: 'minimalist',
  displayName: 'Minimalist',

  pageBackground: 'bg-white',

  base: {
    background: 'bg-transparent',
    text: 'text-gray-900',
    border: 'border border-gray-900',
    shadow: '',
    radius: 'rounded-none',
  },

  variants: {
    primary: {
      background: 'bg-transparent',
      text: 'text-gray-900',
      border: 'border border-gray-900',
      hover: 'hover:bg-gray-900 hover:text-white',
      active: 'active:bg-gray-800',
    },
    secondary: {
      background: 'bg-transparent',
      text: 'text-gray-500',
      border: 'border border-gray-300',
      hover: 'hover:border-gray-900 hover:text-gray-900',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-gray-600',
      border: 'border-none',
      hover: 'hover:text-gray-900',
    },
    danger: {
      background: 'bg-transparent',
      text: 'text-red-600',
      border: 'border border-red-600',
      hover: 'hover:bg-red-600 hover:text-white',
    },
    success: {
      background: 'bg-transparent',
      text: 'text-green-600',
      border: 'border border-green-600',
      hover: 'hover:bg-green-600 hover:text-white',
    },
    warning: {
      background: 'bg-transparent',
      text: 'text-amber-600',
      border: 'border border-amber-600',
      hover: 'hover:bg-amber-600 hover:text-white',
    },
  },

  sizes: {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-12 py-4 text-base',
    xl: 'px-16 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-300',
    active: '',
    focus: 'focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
};
