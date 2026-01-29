import type { ThemeConfig } from './types';

export const glassmorphismTheme: ThemeConfig = {
  name: 'glassmorphism',
  displayName: 'Glassmorphism',

  pageBackground: 'bg-gradient-to-br from-purple-600 via-violet-600 to-pink-500',

  base: {
    background: 'backdrop-blur-xl bg-white/20',
    text: 'text-white',
    border: 'border border-white/30',
    shadow: 'shadow-lg',
    radius: 'rounded-2xl',
  },

  variants: {
    primary: {
      background: 'backdrop-blur-xl bg-white/20',
      text: 'text-white',
      border: 'border border-white/30',
      shadow: 'shadow-lg',
      hover: 'hover:bg-white/30 hover:shadow-xl hover:scale-105',
    },
    secondary: {
      background: 'backdrop-blur-md bg-white/10',
      text: 'text-white/90',
      border: 'border border-white/20',
      hover: 'hover:bg-white/20 hover:border-white/40',
    },
    ghost: {
      background: 'backdrop-blur-sm bg-transparent',
      text: 'text-white/80',
      border: 'border-none',
      hover: 'hover:bg-white/10 hover:text-white',
    },
    danger: {
      background: 'backdrop-blur-xl bg-red-500/30',
      text: 'text-white',
      border: 'border border-red-300/30',
      hover: 'hover:bg-red-500/40',
    },
    success: {
      background: 'backdrop-blur-xl bg-green-500/30',
      text: 'text-white',
      border: 'border border-green-300/30',
      hover: 'hover:bg-green-500/40',
    },
    warning: {
      background: 'backdrop-blur-xl bg-amber-500/30',
      text: 'text-white',
      border: 'border border-amber-300/30',
      hover: 'hover:bg-amber-500/40',
    },
  },

  sizes: {
    xs: 'px-4 py-1.5 text-xs',
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-300',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-white/50',
    disabled: 'opacity-40 cursor-not-allowed bg-white/5 border-white/10',
    loading: 'cursor-wait text-white/70 bg-white/10',
  },
};
