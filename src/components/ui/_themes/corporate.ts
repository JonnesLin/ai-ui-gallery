import type { ThemeConfig } from './types';

export const corporateTheme: ThemeConfig = {
  name: 'corporate',
  displayName: 'Corporate',

  pageBackground: 'bg-slate-50',

  base: {
    background: 'bg-white',
    text: 'text-slate-800',
    border: 'border border-slate-200',
    shadow: 'shadow-sm',
    radius: 'rounded-md',
  },

  variants: {
    primary: {
      background: 'bg-blue-700',
      text: 'text-white',
      border: 'border border-blue-700',
      shadow: 'shadow-sm',
      hover: 'hover:bg-blue-800',
      active: 'active:bg-blue-900',
    },
    secondary: {
      background: 'bg-slate-600',
      text: 'text-white',
      border: 'border border-slate-600',
      hover: 'hover:bg-slate-700',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-blue-700',
      border: 'border-none',
      hover: 'hover:bg-slate-100',
    },
    danger: {
      background: 'bg-red-700',
      text: 'text-white',
      border: 'border border-red-700',
      hover: 'hover:bg-red-800',
    },
    success: {
      background: 'bg-green-700',
      text: 'text-white',
      border: 'border border-green-700',
      hover: 'hover:bg-green-800',
    },
    warning: {
      background: 'bg-amber-600',
      text: 'text-white',
      border: 'border border-amber-600',
      hover: 'hover:bg-amber-700',
    },
  },

  sizes: {
    xs: 'px-2.5 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg',
  },

  states: {
    hover: 'transition-colors duration-150',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-70',
  },
};
