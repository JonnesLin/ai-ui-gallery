import type { ThemeConfig } from './types';

/**
 * Retro Theme - Warm vintage aesthetics
 *
 * @description Amber and orange tones evoking nostalgic, vintage design.
 * Warm shadows, rounded corners, and a cozy color palette.
 *
 * @design
 * - Background: Warm amber-50
 * - Primary: Amber-600
 * - Borders: Amber-300
 * - Radius: Rounded-lg
 * - Shadow: Warm amber-tinted shadows
 *
 * @accessibility Warm palette maintains readable contrast
 */
export const retroTheme: ThemeConfig = {
  name: 'retro',
  displayName: 'Retro',

  pageBackground: 'bg-amber-50',

  base: {
    background: 'bg-amber-100',
    text: 'text-amber-900',
    border: 'border border-amber-300',
    shadow: 'shadow-md shadow-amber-200/50',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-amber-600',
      text: 'text-white',
      border: 'border border-amber-700',
      hover: 'hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-300/50',
      active: 'active:bg-amber-800',
    },
    secondary: {
      background: 'bg-amber-50',
      text: 'text-amber-800',
      border: 'border border-amber-400',
      hover: 'hover:bg-amber-200 hover:border-amber-500',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-amber-700',
      border: 'border-none',
      hover: 'hover:bg-amber-100 hover:text-amber-900',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border border-red-700',
      shadow: 'shadow-md shadow-red-200/50',
      hover: 'hover:bg-red-700',
      active: 'active:bg-red-800',
    },
    success: {
      background: 'bg-green-600',
      text: 'text-white',
      border: 'border border-green-700',
      shadow: 'shadow-md shadow-green-200/50',
      hover: 'hover:bg-green-700',
      active: 'active:bg-green-800',
    },
    warning: {
      background: 'bg-orange-500',
      text: 'text-white',
      border: 'border border-orange-600',
      shadow: 'shadow-md shadow-orange-200/50',
      hover: 'hover:bg-orange-600',
      active: 'active:bg-orange-700',
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
    focus: 'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-amber-50',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-60',
  },
};
