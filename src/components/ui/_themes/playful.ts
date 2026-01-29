import type { ThemeConfig } from './types';

/**
 * Playful Theme - Bright, bubbly, and fun
 *
 * @description Vibrant purples and pinks with extra-rounded corners.
 * Colorful shadows and an energetic feel suited for creative applications.
 *
 * @design
 * - Background: Yellow-50 page, white components
 * - Primary: Purple-500
 * - Borders: Colorful accents
 * - Radius: Extra rounded (2xl)
 * - Shadow: Colorful purple-tinted shadows
 *
 * @accessibility Bright palette with sufficient contrast
 */
export const playfulTheme: ThemeConfig = {
  name: 'playful',
  displayName: 'Playful',

  pageBackground: 'bg-yellow-50',

  base: {
    background: 'bg-white',
    text: 'text-purple-900',
    border: 'border-2 border-purple-200',
    shadow: 'shadow-md shadow-purple-200/40',
    radius: 'rounded-2xl',
  },

  variants: {
    primary: {
      background: 'bg-purple-500',
      text: 'text-white',
      border: 'border-2 border-purple-600',
      shadow: 'shadow-lg shadow-purple-300/50',
      hover: 'hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-400/50',
      active: 'active:bg-purple-700',
    },
    secondary: {
      background: 'bg-pink-100',
      text: 'text-pink-700',
      border: 'border-2 border-pink-300',
      hover: 'hover:bg-pink-200 hover:border-pink-400',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-purple-600',
      border: 'border-none',
      hover: 'hover:bg-purple-100 hover:text-purple-800',
    },
    danger: {
      background: 'bg-red-500',
      text: 'text-white',
      border: 'border-2 border-red-600',
      shadow: 'shadow-md shadow-red-300/40',
      hover: 'hover:bg-red-600',
      active: 'active:bg-red-700',
    },
    success: {
      background: 'bg-emerald-500',
      text: 'text-white',
      border: 'border-2 border-emerald-600',
      shadow: 'shadow-md shadow-emerald-300/40',
      hover: 'hover:bg-emerald-600',
      active: 'active:bg-emerald-700',
    },
    warning: {
      background: 'bg-amber-400',
      text: 'text-amber-900',
      border: 'border-2 border-amber-500',
      shadow: 'shadow-md shadow-amber-300/40',
      hover: 'hover:bg-amber-500',
      active: 'active:bg-amber-600',
    },
  },

  sizes: {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-200',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-60',
  },
};
