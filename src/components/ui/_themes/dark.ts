import type { ThemeConfig } from './types';

/**
 * Dark Theme - High contrast for low-light environments
 *
 * @description Optimized for dark mode interfaces, dashboards, and development tools.
 * Features zinc-based grays with high-contrast white primary buttons.
 * Excellent for reducing eye strain in low-light conditions.
 *
 * @design
 * - Background: Zinc-900 (#18181b)
 * - Page: Near-black (#0a0a0a)
 * - Primary: White on black (maximum contrast)
 * - Radius: Rounded-lg (8px)
 * - Shadow: Dark shadows with 50% opacity
 *
 * @accessibility WCAG AAA compliant for primary elements
 */
export const darkTheme: ThemeConfig = {
  name: 'dark',
  displayName: 'Dark',

  pageBackground: 'bg-[#0a0a0a]',

  base: {
    background: 'bg-zinc-900',
    text: 'text-zinc-300',
    border: 'border border-zinc-800',
    shadow: 'shadow-lg shadow-black/50',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-white',
      text: 'text-black',
      border: 'border-none',
      hover: 'hover:bg-zinc-200',
      active: 'active:bg-zinc-300',
    },
    secondary: {
      background: 'bg-transparent',
      text: 'text-zinc-300',
      border: 'border border-zinc-700',
      hover: 'hover:bg-zinc-800 hover:border-zinc-600 hover:text-white',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-zinc-400',
      border: 'border-none',
      hover: 'hover:text-white hover:bg-zinc-800/50',
    },
    danger: {
      background: 'bg-rose-600',
      text: 'text-white',
      border: 'border-none',
      hover: 'hover:bg-rose-500',
      active: 'active:bg-rose-700',
    },
    success: {
      background: 'bg-emerald-600',
      text: 'text-white',
      border: 'border-none',
      hover: 'hover:bg-emerald-500',
      active: 'active:bg-emerald-700',
    },
    warning: {
      background: 'bg-amber-600',
      text: 'text-white',
      border: 'border-none',
      hover: 'hover:bg-amber-500',
      active: 'active:bg-amber-700',
    },
  },

  sizes: {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-200',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]',
    disabled: 'opacity-50 cursor-not-allowed bg-zinc-900/50 border-zinc-800/50',
    loading: 'cursor-wait text-zinc-500',
  },
};
