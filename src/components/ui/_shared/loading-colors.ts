/**
 * Centralized color configuration for loading components.
 * Ensures consistent colors across all loading variants (Spinner, Dots, Bars, Pulse).
 *
 * IMPORTANT: When adding a new theme, update ALL color maps in this file.
 * The getters will throw an error if a theme is missing.
 */

import type { ThemeName } from '../_themes/types';

/**
 * Spinner border colors for each theme.
 * base: The track color (lighter)
 * top: The spinning segment color (darker/accent)
 */
export const spinnerThemeColors: Record<ThemeName, { base: string; top: string }> = {
  // Original 7 themes
  minimalist: { base: 'border-gray-200', top: 'border-t-gray-900' },
  material: { base: 'border-indigo-100', top: 'border-t-indigo-600' },
  dark: { base: 'border-gray-700', top: 'border-t-white' },
  glassmorphism: { base: 'border-white/30', top: 'border-t-white' },
  neumorphism: { base: 'border-gray-300', top: 'border-t-gray-600' },
  flat: { base: 'border-slate-300', top: 'border-t-blue-500' },
  gradient: { base: 'border-white/20', top: 'border-t-white' },
  // Added to reach 13 themes
  luxury: { base: 'border-amber-200', top: 'border-t-amber-600' },
  corporate: { base: 'border-blue-200', top: 'border-t-blue-600' },
  cyberpunk: { base: 'border-cyan-900', top: 'border-t-cyan-400' },
  pastel: { base: 'border-pink-200', top: 'border-t-pink-400' },
  futuristic: { base: 'border-violet-300', top: 'border-t-violet-500' },
  monochrome: { base: 'border-gray-300', top: 'border-t-gray-700' },
  // New batch: 7 themes to reach 20
  brutalist: { base: 'border-gray-400', top: 'border-t-black' },
  retro: { base: 'border-amber-200', top: 'border-t-amber-700' },
  playful: { base: 'border-purple-200', top: 'border-t-purple-500' },
  nature: { base: 'border-green-200', top: 'border-t-green-600' },
  sketch: { base: 'border-stone-300', top: 'border-t-stone-700' },
  neon: { base: 'border-pink-900', top: 'border-t-pink-400' },
  '3d': { base: 'border-indigo-200', top: 'border-t-indigo-600' },
};

/**
 * Dots/Bars/Pulse background colors for each theme.
 */
export const loadingBgColors: Record<ThemeName, string> = {
  // Original 7 themes
  minimalist: 'bg-gray-900',
  material: 'bg-indigo-600',
  dark: 'bg-white',
  glassmorphism: 'bg-white',
  neumorphism: 'bg-gray-600',
  flat: 'bg-blue-500',
  gradient: 'bg-white',
  // Added to reach 13 themes
  luxury: 'bg-amber-600',
  corporate: 'bg-blue-600',
  cyberpunk: 'bg-cyan-400',
  pastel: 'bg-pink-400',
  futuristic: 'bg-violet-500',
  monochrome: 'bg-gray-700',
  // New batch: 7 themes to reach 20
  brutalist: 'bg-black',
  retro: 'bg-amber-700',
  playful: 'bg-purple-500',
  nature: 'bg-green-600',
  sketch: 'bg-stone-700',
  neon: 'bg-pink-400',
  '3d': 'bg-indigo-600',
};

/**
 * Get spinner colors with proper error handling.
 * No fallbacks - throws if theme is not supported.
 *
 * @param color - The color variant ('primary' | 'white' | 'current')
 * @param themeName - The theme name
 * @returns Object with base and top border colors
 * @throws Error if theme is not supported
 */
export function getSpinnerColors(
  color: 'primary' | 'white' | 'current',
  themeName: ThemeName
): { base: string; top: string } {
  if (color === 'white') {
    return { base: 'border-white/30', top: 'border-t-white' };
  }
  if (color === 'current') {
    return { base: 'border-current/30', top: 'border-t-current' };
  }

  const colors = spinnerThemeColors[themeName];
  if (!colors) {
    throw new Error(
      `[Loading] Theme "${themeName}" is not supported for Spinner component. ` +
      `Supported themes: ${Object.keys(spinnerThemeColors).join(', ')}`
    );
  }
  return colors;
}

/**
 * Get loading background color for Dots, Bars, and Pulse components.
 * No fallbacks - throws if theme is not supported.
 *
 * @param color - The color variant ('primary' | 'white' | 'current')
 * @param themeName - The theme name
 * @returns Tailwind background color class
 * @throws Error if theme is not supported
 */
export function getLoadingBgColor(
  color: 'primary' | 'white' | 'current',
  themeName: ThemeName
): string {
  if (color === 'white') return 'bg-white';
  if (color === 'current') return 'bg-current';

  const bgColor = loadingBgColors[themeName];
  if (!bgColor) {
    throw new Error(
      `[Loading] Theme "${themeName}" is not supported for loading components. ` +
      `Supported themes: ${Object.keys(loadingBgColors).join(', ')}`
    );
  }
  return bgColor;
}
