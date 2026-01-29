import type { ThemeConfig } from './types';

export const neumorphismTheme: ThemeConfig = {
  name: 'neumorphism',
  displayName: 'Neumorphism',

  pageBackground: 'bg-[#e0e5ec]',

  base: {
    background: 'bg-[#e0e5ec]',
    text: 'text-gray-600',
    border: 'border-none',
    shadow: 'shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]',
    radius: 'rounded-xl',
  },

  variants: {
    primary: {
      background: 'bg-[#e0e5ec]',
      text: 'text-gray-600',
      border: 'border-none',
      shadow: 'shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]',
      hover: 'hover:shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]',
      active: 'active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]',
    },
    secondary: {
      background: 'bg-[#e0e5ec]',
      text: 'text-gray-500',
      border: 'border-none',
      shadow: 'shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]',
      hover: 'hover:shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]',
    },
    ghost: {
      background: 'bg-[#e0e5ec]',
      text: 'text-gray-600',
      border: 'border-none',
      hover: 'hover:shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]',
    },
    danger: {
      background: 'bg-[#e0e5ec]',
      text: 'text-rose-500',
      border: 'border-none',
      shadow: 'shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]',
      hover: 'hover:shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]',
      active: 'active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]',
    },
    success: {
      background: 'bg-[#e0e5ec]',
      text: 'text-emerald-500',
      border: 'border-none',
      shadow: 'shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]',
      hover: 'hover:shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]',
      active: 'active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]',
    },
    warning: {
      background: 'bg-[#e0e5ec]',
      text: 'text-amber-500',
      border: 'border-none',
      shadow: 'shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]',
      hover: 'hover:shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]',
      active: 'active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]',
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
    hover: 'transition-all duration-200',
    active: '',
    focus: 'focus:outline-none',
    disabled: 'opacity-60 cursor-not-allowed shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]',
    loading: 'cursor-wait',
  },
};
