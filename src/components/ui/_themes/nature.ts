import type { ThemeConfig } from './types';

/**
 * Nature Theme - Organic greens and earthy tones
 *
 * @description Green-dominant palette inspired by the natural world.
 * Soft rounded corners, subtle green shadows, and an organic feel.
 *
 * @design
 * - Background: Green-50 page, white components
 * - Primary: Green-600
 * - Borders: Green accents
 * - Radius: Rounded-xl (organic shapes)
 * - Shadow: Green-tinted subtle shadows
 *
 * @accessibility Natural greens with sufficient contrast against white
 */
export const natureTheme: ThemeConfig = {
  name: 'nature',
  displayName: 'Nature',

  pageBackground: 'bg-green-50',

  base: {
    background: 'bg-white',
    text: 'text-green-900',
    border: 'border border-green-200',
    shadow: 'shadow-md shadow-green-200/30',
    radius: 'rounded-xl',
  },

  variants: {
    primary: {
      background: 'bg-green-600',
      text: 'text-white',
      border: 'border border-green-700',
      shadow: 'shadow-md shadow-green-400/30',
      hover: 'hover:bg-green-700 hover:shadow-lg hover:shadow-green-400/40',
      active: 'active:bg-green-800',
    },
    secondary: {
      background: 'bg-green-50',
      text: 'text-green-800',
      border: 'border border-green-300',
      hover: 'hover:bg-green-100 hover:border-green-400',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-green-700',
      border: 'border-none',
      hover: 'hover:bg-green-50 hover:text-green-900',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border border-red-700',
      shadow: 'shadow-md shadow-red-200/30',
      hover: 'hover:bg-red-700',
      active: 'active:bg-red-800',
    },
    success: {
      background: 'bg-emerald-600',
      text: 'text-white',
      border: 'border border-emerald-700',
      shadow: 'shadow-md shadow-emerald-200/30',
      hover: 'hover:bg-emerald-700',
      active: 'active:bg-emerald-800',
    },
    warning: {
      background: 'bg-amber-500',
      text: 'text-white',
      border: 'border border-amber-600',
      shadow: 'shadow-md shadow-amber-200/30',
      hover: 'hover:bg-amber-600',
      active: 'active:bg-amber-700',
    },
  },

  sizes: {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-200',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-50',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-60',
  },
};
