import type { ThemeConfig } from './types';

export const gradientTheme: ThemeConfig = {
  name: 'gradient',
  displayName: 'Gradient',

  pageBackground: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',

  base: {
    background: 'bg-white/5 backdrop-blur-sm',
    text: 'text-white',
    border: 'border border-white/10',
    shadow: 'shadow-lg',
    radius: 'rounded-3xl',
  },

  variants: {
    primary: {
      background: 'bg-gradient-to-r from-violet-500 to-purple-500',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-purple-500/30',
      hover: 'hover:from-violet-600 hover:to-purple-600',
      active: 'active:from-violet-700 active:to-purple-700',
    },
    secondary: {
      background: 'bg-white/10',
      text: 'text-white',
      border: 'border border-white/20',
      hover: 'hover:bg-white/20 hover:border-white/30',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-white/70',
      border: 'border-none',
      hover: 'hover:text-white hover:bg-white/10',
    },
    danger: {
      background: 'bg-gradient-to-r from-red-500 to-rose-500',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-red-500/30',
      hover: 'hover:from-red-600 hover:to-rose-600',
    },
    success: {
      background: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-emerald-500/30',
      hover: 'hover:from-emerald-600 hover:to-teal-600',
    },
    warning: {
      background: 'bg-gradient-to-r from-orange-500 to-amber-500',
      text: 'text-white',
      border: 'border-none',
      shadow: 'shadow-lg shadow-orange-500/30',
      hover: 'hover:from-orange-600 hover:to-amber-600',
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
    focus: 'focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait opacity-75',
  },
};
