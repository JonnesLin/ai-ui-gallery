import type { ThemeConfig } from './types';

export const flatTheme: ThemeConfig = {
  name: 'flat',
  displayName: 'Flat',

  pageBackground: 'bg-slate-100',

  base: {
    background: 'bg-white',
    text: 'text-slate-800',
    border: 'border-slate-500',
    shadow: '',
    radius: 'rounded-none',
  },

  variants: {
    primary: {
      background: 'bg-blue-500',
      text: 'text-white',
      border: 'border-4 border-blue-500',
      hover: 'hover:bg-blue-600 hover:border-blue-600',
      active: 'active:bg-blue-700',
    },
    secondary: {
      background: 'bg-purple-500',
      text: 'text-white',
      border: 'border-4 border-purple-500',
      hover: 'hover:bg-purple-600 hover:border-purple-600',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-slate-700',
      border: 'border-4 border-transparent',
      hover: 'hover:bg-slate-100',
    },
    danger: {
      background: 'bg-red-500',
      text: 'text-white',
      border: 'border-4 border-red-500',
      hover: 'hover:bg-red-600 hover:border-red-600',
    },
    success: {
      background: 'bg-green-500',
      text: 'text-white',
      border: 'border-4 border-green-500',
      hover: 'hover:bg-green-600 hover:border-green-600',
    },
    warning: {
      background: 'bg-orange-500',
      text: 'text-white',
      border: 'border-4 border-orange-500',
      hover: 'hover:bg-orange-600 hover:border-orange-600',
    },
  },

  sizes: {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
    xl: 'px-6 py-5 text-xl',
  },

  states: {
    hover: 'transition-colors duration-200',
    active: '',
    focus: 'focus:outline-none',
    disabled: 'opacity-50 cursor-not-allowed bg-slate-200 border-slate-300 text-slate-400',
    loading: 'cursor-wait',
  },
};
