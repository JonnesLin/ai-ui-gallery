import type { ThemeConfig } from './types';

export const materialTheme: ThemeConfig = {
  name: 'material',
  displayName: 'Material',

  pageBackground: 'bg-gray-50',

  base: {
    background: 'bg-white',
    text: 'text-gray-900',
    border: 'border-gray-300',
    shadow: 'shadow-sm',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-indigo-600',
      text: 'text-white',
      border: 'border-2 border-indigo-600',
      shadow: 'shadow-md',
      hover: 'hover:bg-indigo-700 hover:shadow-lg',
      active: 'active:bg-indigo-800',
    },
    secondary: {
      background: 'bg-gray-600',
      text: 'text-white',
      border: 'border-2 border-gray-600',
      hover: 'hover:bg-gray-700',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-indigo-600',
      border: 'border-none',
      hover: 'hover:bg-indigo-50',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border-2 border-red-600',
      hover: 'hover:bg-red-700',
    },
    success: {
      background: 'bg-green-600',
      text: 'text-white',
      border: 'border-2 border-green-600',
      hover: 'hover:bg-green-700',
    },
    warning: {
      background: 'bg-amber-600',
      text: 'text-white',
      border: 'border-2 border-amber-600',
      hover: 'hover:bg-amber-700',
    },
  },

  sizes: {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  },

  states: {
    hover: 'transition-all duration-200',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400',
    loading: 'cursor-wait opacity-70',
  },
};
