import type { ThemeConfig } from './types';

/**
 * 3D Theme - Depth, layers, and dimensional shadows
 *
 * @description Indigo-based theme with heavy layered shadows creating depth.
 * Components appear to float above the page with dimensional presence.
 *
 * @design
 * - Background: Indigo-50 page, white components
 * - Primary: Indigo-600 with 3D shadow
 * - Borders: Indigo-200
 * - Radius: Rounded-xl
 * - Shadow: Heavy layered shadows for depth
 *
 * @accessibility Indigo palette with strong contrast on white
 */
export const threeDTheme: ThemeConfig = {
  name: '3d',
  displayName: '3D',

  pageBackground: 'bg-indigo-50',

  base: {
    background: 'bg-white',
    text: 'text-indigo-900',
    border: 'border border-indigo-200',
    shadow: 'shadow-[4px_4px_0px_0px] shadow-indigo-300',
    radius: 'rounded-xl',
  },

  variants: {
    primary: {
      background: 'bg-indigo-600',
      text: 'text-white',
      border: 'border border-indigo-700',
      shadow: 'shadow-[4px_4px_0px_0px] shadow-indigo-800',
      hover: 'hover:bg-indigo-700 hover:shadow-[2px_2px_0px_0px] hover:shadow-indigo-900 hover:translate-x-[2px] hover:translate-y-[2px]',
      active: 'active:bg-indigo-800 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    },
    secondary: {
      background: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border border-indigo-300',
      hover: 'hover:bg-indigo-100 hover:shadow-[2px_2px_0px_0px] hover:shadow-indigo-300',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-indigo-600',
      border: 'border-none',
      hover: 'hover:bg-indigo-50 hover:text-indigo-800',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border border-red-700',
      shadow: 'shadow-[4px_4px_0px_0px] shadow-red-800',
      hover: 'hover:bg-red-700 hover:shadow-[2px_2px_0px_0px] hover:shadow-red-900 hover:translate-x-[2px] hover:translate-y-[2px]',
      active: 'active:bg-red-800 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    },
    success: {
      background: 'bg-emerald-600',
      text: 'text-white',
      border: 'border border-emerald-700',
      shadow: 'shadow-[4px_4px_0px_0px] shadow-emerald-800',
      hover: 'hover:bg-emerald-700 hover:shadow-[2px_2px_0px_0px] hover:shadow-emerald-900 hover:translate-x-[2px] hover:translate-y-[2px]',
      active: 'active:bg-emerald-800 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    },
    warning: {
      background: 'bg-amber-500',
      text: 'text-white',
      border: 'border border-amber-600',
      shadow: 'shadow-[4px_4px_0px_0px] shadow-amber-700',
      hover: 'hover:bg-amber-600 hover:shadow-[2px_2px_0px_0px] hover:shadow-amber-800 hover:translate-x-[2px] hover:translate-y-[2px]',
      active: 'active:bg-amber-700 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    },
  },

  sizes: {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  },

  states: {
    hover: 'transition-all duration-150',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-50',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-60',
  },
};
