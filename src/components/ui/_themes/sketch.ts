import type { ThemeConfig } from './types';

/**
 * Sketch Theme - Hand-drawn, notebook-like aesthetic
 *
 * @description Dashed borders and stone tones create a hand-drawn feel.
 * Evokes the look of pen sketches on paper with a casual, approachable style.
 *
 * @design
 * - Background: Stone-50 page, white components
 * - Primary: Stone-700
 * - Borders: Dashed, stone-400
 * - Radius: Rounded-lg (slightly imperfect feel)
 * - Shadow: Minimal, paper-like
 *
 * @accessibility Stone palette provides comfortable reading contrast
 */
export const sketchTheme: ThemeConfig = {
  name: 'sketch',
  displayName: 'Sketch',

  pageBackground: 'bg-stone-50',

  base: {
    background: 'bg-white',
    text: 'text-stone-800',
    border: 'border-dashed border-2 border-stone-400',
    shadow: 'shadow-sm',
    radius: 'rounded-lg',
  },

  variants: {
    primary: {
      background: 'bg-stone-700',
      text: 'text-white',
      border: 'border-dashed border-2 border-stone-800',
      hover: 'hover:bg-stone-800',
      active: 'active:bg-stone-900',
    },
    secondary: {
      background: 'bg-stone-100',
      text: 'text-stone-700',
      border: 'border-dashed border-2 border-stone-400',
      hover: 'hover:bg-stone-200 hover:border-stone-500',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-stone-600',
      border: 'border-none',
      hover: 'hover:bg-stone-100 hover:text-stone-800',
    },
    danger: {
      background: 'bg-red-600',
      text: 'text-white',
      border: 'border-dashed border-2 border-red-700',
      hover: 'hover:bg-red-700',
      active: 'active:bg-red-800',
    },
    success: {
      background: 'bg-green-600',
      text: 'text-white',
      border: 'border-dashed border-2 border-green-700',
      hover: 'hover:bg-green-700',
      active: 'active:bg-green-800',
    },
    warning: {
      background: 'bg-amber-500',
      text: 'text-white',
      border: 'border-dashed border-2 border-amber-600',
      hover: 'hover:bg-amber-600',
      active: 'active:bg-amber-700',
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
    focus: 'focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait opacity-60',
  },
};
