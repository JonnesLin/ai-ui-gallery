import type { ThemeConfig } from './types';

/**
 * Pastel Theme - Soft, gentle, calming design
 *
 * @description A soft, dreamy theme with muted pastel colors.
 * Features rounded corners, gentle shadows, and calming color palette.
 * Ideal for lifestyle, creative, and wellness applications.
 *
 * @design
 * - Background: Soft purple/pink gradients
 * - Borders: Light purple borders
 * - Typography: Purple tones for text
 * - Radius: Fully rounded (pill shape)
 * - Interactions: Subtle color shifts
 *
 * @accessibility WCAG AA compliant with sufficient contrast
 */
export const pastelTheme: ThemeConfig = {
  name: 'pastel',
  displayName: 'Pastel',

  pageBackground: 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50',

  base: {
    background: 'bg-white/70',
    text: 'text-purple-600',
    border: 'border border-purple-200',
    shadow: 'shadow-lg shadow-purple-100/50',
    radius: 'rounded-full',
  },

  variants: {
    primary: {
      background: 'bg-purple-200',
      text: 'text-purple-700',
      border: 'border border-purple-300',
      hover: 'hover:bg-purple-300 hover:shadow-lg hover:shadow-purple-200/50',
      active: 'active:bg-purple-400',
    },
    secondary: {
      background: 'bg-pink-200',
      text: 'text-pink-700',
      border: 'border border-pink-300',
      hover: 'hover:bg-pink-300 hover:shadow-lg hover:shadow-pink-200/50',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-purple-500',
      border: 'border-2 border-purple-300',
      hover: 'hover:bg-purple-100 hover:border-purple-400',
    },
    danger: {
      background: 'bg-red-200',
      text: 'text-red-600',
      border: 'border border-red-300',
      hover: 'hover:bg-red-300 hover:shadow-lg hover:shadow-red-200/50',
    },
    success: {
      background: 'bg-emerald-200',
      text: 'text-emerald-700',
      border: 'border border-emerald-300',
      hover: 'hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-200/50',
    },
    warning: {
      background: 'bg-amber-200',
      text: 'text-amber-700',
      border: 'border border-amber-300',
      hover: 'hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-200/50',
    },
  },

  sizes: {
    xs: 'px-4 py-1 text-xs',
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-14 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-300',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
};
