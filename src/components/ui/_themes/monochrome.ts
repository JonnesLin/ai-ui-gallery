import type { ThemeConfig } from './types';

/**
 * Monochrome Theme - Pure black, white, and gray
 *
 * @description A strictly monochromatic theme using only black, white, and gray.
 * No color accents whatsoever. Clean, high-contrast, and timeless.
 *
 * @design
 * - Background: White with black text
 * - Borders: Black borders (1px)
 * - Typography: Pure black (#000)
 * - Radius: Minimal (rounded-sm)
 * - Interactions: Invert on hover (black bg, white text)
 *
 * @accessibility WCAG AAA compliant with maximum contrast
 */
export const monochromeTheme: ThemeConfig = {
  name: 'monochrome',
  displayName: 'Monochrome',

  pageBackground: 'bg-white',

  base: {
    background: 'bg-white',
    text: 'text-black',
    border: 'border border-black',
    shadow: '',
    radius: 'rounded-sm',
  },

  variants: {
    primary: {
      background: 'bg-black',
      text: 'text-white',
      border: 'border border-black',
      hover: 'hover:bg-white hover:text-black',
      active: 'active:bg-gray-800',
    },
    secondary: {
      background: 'bg-white',
      text: 'text-black',
      border: 'border border-black',
      hover: 'hover:bg-black hover:text-white',
    },
    ghost: {
      background: 'bg-transparent',
      text: 'text-gray-700',
      border: 'border-none',
      hover: 'hover:text-black hover:bg-gray-100',
    },
    danger: {
      background: 'bg-white',
      text: 'text-black',
      border: 'border-2 border-black',
      hover: 'hover:bg-black hover:text-white',
    },
    success: {
      background: 'bg-black',
      text: 'text-white',
      border: 'border border-black',
      hover: 'hover:bg-gray-800',
    },
    warning: {
      background: 'bg-gray-200',
      text: 'text-black',
      border: 'border border-black',
      hover: 'hover:bg-gray-300',
    },
  },

  sizes: {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl',
  },

  states: {
    hover: 'transition-colors duration-200',
    active: '',
    focus: 'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'cursor-wait',
  },
};
