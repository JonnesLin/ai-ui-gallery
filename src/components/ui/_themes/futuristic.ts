import type { ThemeConfig } from './types';

/**
 * Futuristic Theme - Sci-fi interface aesthetics
 *
 * @description Dark theme with holographic blue accents and sleek metallic feel.
 * Features subtle gradients, soft glows, and clean geometric design.
 *
 * @design
 * - Background: Deep space blue (#0f172a)
 * - Page: Gradient from slate-900 to blue-900
 * - Primary: Electric blue with glow
 * - Accent: Violet/Purple highlights
 * - Radius: Rounded (8px)
 * - Shadow: Soft blue glow effects
 *
 * @accessibility Optimized for dark environments with high contrast text
 */
export const futuristicTheme: ThemeConfig = {
  name: 'futuristic',
  displayName: 'Futuristic',

  pageBackground: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',

  base: {
    background: 'bg-slate-800/80 backdrop-blur-sm',
    text: 'text-blue-100',
    border: 'border border-blue-400/30',
    shadow: 'shadow-lg shadow-blue-500/20',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-blue-500',
      text: 'text-white',
      border: 'border border-blue-400',
      shadow: 'shadow-lg shadow-blue-500/40',
      hover: 'hover:bg-blue-400 hover:shadow-blue-400/50',
      active: 'active:bg-blue-600',
    },
    secondary: {
      background: 'bg-transparent',
      text: 'text-violet-300',
      border: 'border border-violet-400/50',
      hover: 'hover:bg-violet-500/10 hover:border-violet-400 hover:text-violet-200',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-blue-300/80',
      border: 'border-none',
      hover: 'hover:text-blue-200 hover:bg-blue-500/10',
    },
    danger: {
      background: 'bg-red-500',
      text: 'text-white',
      border: 'border border-red-400',
      shadow: 'shadow-lg shadow-red-500/30',
      hover: 'hover:bg-red-400 hover:shadow-red-400/40',
      active: 'active:bg-red-600',
    },
    success: {
      background: 'bg-emerald-500',
      text: 'text-white',
      border: 'border border-emerald-400',
      shadow: 'shadow-lg shadow-emerald-500/30',
      hover: 'hover:bg-emerald-400 hover:shadow-emerald-400/40',
      active: 'active:bg-emerald-600',
    },
    warning: {
      background: 'bg-amber-500',
      text: 'text-slate-900',
      border: 'border border-amber-400',
      shadow: 'shadow-lg shadow-amber-500/30',
      hover: 'hover:bg-amber-400 hover:shadow-amber-400/40',
      active: 'active:bg-amber-600',
    },
  },

  sizes: {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
    xl: 'px-10 py-4 text-lg',
  },

  states: {
    hover: 'transition-all duration-300 ease-out',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait text-blue-400/50',
  },
};
