import type { ThemeConfig } from './types';

/**
 * Brutalist Theme - Raw, industrial, uncompromising
 *
 * @description Thick black borders, no rounded corners, monospace-inspired.
 * Intentionally raw and unpolished aesthetic that rejects decorative conventions.
 *
 * @design
 * - Background: Pure white
 * - Borders: Thick black (4px)
 * - Typography: Black on white, stark contrast
 * - Radius: None
 * - Shadow: None - brutalism rejects embellishment
 *
 * @accessibility High contrast by nature
 */
export const brutalistTheme: ThemeConfig = {
  name: 'brutalist',
  displayName: 'Brutalist',

  pageBackground: 'bg-white',

  base: {
    background: 'bg-white',
    text: 'text-black',
    border: 'border-4 border-black',
    shadow: '',
    radius: 'rounded-none',
  },

  variants: {
    primary: {
      background: 'bg-black',
      text: 'text-white',
      border: 'border-4 border-black',
      hover: 'hover:bg-white hover:text-black',
      active: 'active:bg-gray-200',
    },
    secondary: {
      background: 'bg-white',
      text: 'text-black',
      border: 'border-4 border-black',
      hover: 'hover:bg-gray-100',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-black',
      border: 'border-none',
      hover: 'hover:bg-black hover:text-white',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border-4 border-black',
      hover: 'hover:bg-red-700',
      active: 'active:bg-red-800',
    },
    success: {
      background: 'bg-green-600',
      text: 'text-white',
      border: 'border-4 border-black',
      hover: 'hover:bg-green-700',
      active: 'active:bg-green-800',
    },
    warning: {
      background: 'bg-yellow-400',
      text: 'text-black',
      border: 'border-4 border-black',
      hover: 'hover:bg-yellow-500',
      active: 'active:bg-yellow-600',
    },
  },

  sizes: {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl',
  },

  states: {
    hover: 'transition-colors duration-100',
    active: '',
    focus: 'focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-70',
  },
};
