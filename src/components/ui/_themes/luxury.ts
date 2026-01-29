import type { ThemeConfig } from './types';

/**
 * Luxury Theme - Premium dark gold aesthetic
 *
 * @description Elegant high-end design with deep backgrounds and amber/gold accents.
 * Perfect for premium products, luxury brands, and sophisticated interfaces.
 *
 * @design
 * - Background: Deep gray with amber undertones
 * - Page: Dark gradient from gray-900 via amber-950 to gray-900
 * - Primary: Gold/Amber gradient
 * - Radius: Rounded-xl (12px)
 * - Shadow: Warm amber glow
 *
 * @accessibility High contrast gold on dark backgrounds
 */
export const luxuryTheme: ThemeConfig = {
  name: 'luxury',
  displayName: 'Luxury',

  pageBackground: 'bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900',

  base: {
    background: 'bg-gray-900/80 backdrop-blur-sm',
    text: 'text-amber-50',
    border: 'border border-amber-900/50',
    shadow: 'shadow-lg shadow-amber-900/20',
    radius: 'rounded-xl',
  },

  variants: {
    primary: {
      background: 'bg-gradient-to-r from-amber-500 to-yellow-500',
      text: 'text-gray-900',
      border: 'border-none',
      shadow: 'shadow-lg shadow-amber-500/30',
      hover: 'hover:from-amber-400 hover:to-yellow-400',
      active: 'active:from-amber-600 active:to-yellow-600',
    },
    secondary: {
      background: 'bg-amber-900/30',
      text: 'text-amber-100',
      border: 'border border-amber-700/50',
      hover: 'hover:bg-amber-900/50 hover:border-amber-600/50',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-amber-300/70',
      border: 'border-none',
      hover: 'hover:text-amber-100 hover:bg-amber-900/30',
    },
    danger: {
      background: 'bg-gradient-to-r from-red-600 to-rose-600',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-red-500/30',
      hover: 'hover:from-red-500 hover:to-rose-500',
      active: 'active:from-red-700 active:to-rose-700',
    },
    success: {
      background: 'bg-gradient-to-r from-emerald-600 to-green-600',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-emerald-500/30',
      hover: 'hover:from-emerald-500 hover:to-green-500',
      active: 'active:from-emerald-700 active:to-green-700',
    },
    warning: {
      background: 'bg-gradient-to-r from-orange-500 to-amber-500',
      text: 'text-gray-900',
      border: 'border-none',
      shadow: 'shadow-lg shadow-orange-500/30',
      hover: 'hover:from-orange-400 hover:to-amber-400',
      active: 'active:from-orange-600 active:to-amber-600',
    },
  },

  sizes: {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  },

  states: {
    hover: 'transition-all duration-300',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-gray-900',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait opacity-75',
  },
};
