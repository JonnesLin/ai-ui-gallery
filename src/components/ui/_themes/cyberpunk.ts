import type { ThemeConfig } from './types';

/**
 * Cyberpunk Theme - Neon-lit dystopian aesthetics
 *
 * @description High-contrast dark theme with vibrant cyan/magenta neon accents.
 * Features glowing effects, sharp edges, and futuristic tech aesthetics.
 *
 * @design
 * - Background: Near-black (#0a0a0f)
 * - Page: Pure black (#000)
 * - Primary: Cyan neon with glow
 * - Accent: Magenta/Pink neon
 * - Radius: Sharp (4px)
 * - Shadow: Neon glow effects
 *
 * @accessibility Optimized for dark environments
 */
export const cyberpunkTheme: ThemeConfig = {
  name: 'cyberpunk',
  displayName: 'Cyberpunk',

  pageBackground: 'bg-black',

  base: {
    background: 'bg-[#0a0a0f]',
    text: 'text-cyan-300',
    border: 'border border-cyan-500/30',
    shadow: 'shadow-lg shadow-cyan-500/20',
    radius: 'rounded',
  },

  variants: {
    primary: {
      background: 'bg-cyan-500',
      text: 'text-black',
      border: 'border border-cyan-400',
      shadow: 'shadow-lg shadow-cyan-500/50',
      hover: 'hover:bg-cyan-400 hover:shadow-cyan-400/60',
      active: 'active:bg-cyan-600',
    },
    secondary: {
      background: 'bg-transparent',
      text: 'text-fuchsia-400',
      border: 'border border-fuchsia-500/50',
      hover: 'hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:text-fuchsia-300',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-cyan-400/70',
      border: 'border-none',
      hover: 'hover:text-cyan-300 hover:bg-cyan-500/10',
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
      text: 'text-black',
      border: 'border border-emerald-400',
      shadow: 'shadow-lg shadow-emerald-500/40',
      hover: 'hover:bg-emerald-400 hover:shadow-emerald-400/60',
      active: 'active:bg-emerald-600',
    },
    warning: {
      background: 'bg-yellow-400',
      text: 'text-black',
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
    focus: 'focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait text-cyan-500/50',
  },
};
