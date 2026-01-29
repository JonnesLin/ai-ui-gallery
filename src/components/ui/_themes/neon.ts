import type { ThemeConfig } from './types';

/**
 * Neon Theme - Glowing pink/magenta on dark background
 *
 * @description Dark theme with vibrant pink/magenta neon glow effects.
 * Similar energy to cyberpunk but focused on pink/magenta spectrum.
 *
 * @design
 * - Background: Near-black (gray-950)
 * - Primary: Pink-500 with glow
 * - Accent: Pink/magenta neon
 * - Radius: Rounded-lg
 * - Shadow: Neon glow effects (pink-500/20)
 *
 * @accessibility Optimized for dark environments with high-contrast neon
 */
export const neonTheme: ThemeConfig = {
  name: 'neon',
  displayName: 'Neon',

  pageBackground: 'bg-gray-950',

  base: {
    background: 'bg-gray-900',
    text: 'text-pink-300',
    border: 'border border-pink-500/30',
    shadow: 'shadow-lg shadow-pink-500/20',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-pink-500',
      text: 'text-white',
      border: 'border border-pink-400',
      shadow: 'shadow-lg shadow-pink-500/50',
      hover: 'hover:bg-pink-400 hover:shadow-xl hover:shadow-pink-400/60',
      active: 'active:bg-pink-600',
    },
    secondary: {
      background: 'bg-transparent',
      text: 'text-fuchsia-400',
      border: 'border border-fuchsia-500/50',
      hover: 'hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:text-fuchsia-300',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-pink-400/70',
      border: 'border-none',
      hover: 'hover:text-pink-300 hover:bg-pink-500/10',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border border-red-500',
      shadow: 'shadow-lg shadow-red-500/40',
      hover: 'hover:bg-red-500 hover:shadow-red-500/60',
      active: 'active:bg-red-700',
    },
    success: {
      background: 'bg-emerald-500',
      text: 'text-white',
      border: 'border border-emerald-400',
      shadow: 'shadow-lg shadow-emerald-500/40',
      hover: 'hover:bg-emerald-400 hover:shadow-emerald-400/60',
      active: 'active:bg-emerald-600',
    },
    warning: {
      background: 'bg-yellow-400',
      text: 'text-gray-900',
      border: 'border border-yellow-300',
      shadow: 'shadow-lg shadow-yellow-400/40',
      hover: 'hover:bg-yellow-300 hover:shadow-yellow-300/60',
      active: 'active:bg-yellow-500',
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
    focus: 'focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:ring-offset-2 focus:ring-offset-gray-950',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait text-pink-500/50',
  },
};
