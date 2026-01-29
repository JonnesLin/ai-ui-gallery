export * from './types';
export { minimalistTheme } from './minimalist';
export { darkTheme } from './dark';
export { glassmorphismTheme } from './glassmorphism';
export { neumorphismTheme } from './neumorphism';
export { gradientTheme } from './gradient';
export { flatTheme } from './flat';
export { materialTheme } from './material';
export { luxuryTheme } from './luxury';
export { corporateTheme } from './corporate';
export { cyberpunkTheme } from './cyberpunk';
export { pastelTheme } from './pastel';
export { futuristicTheme } from './futuristic';
export { monochromeTheme } from './monochrome';
export { brutalistTheme } from './brutalist';
export { retroTheme } from './retro';
export { playfulTheme } from './playful';
export { natureTheme } from './nature';
export { sketchTheme } from './sketch';
export { neonTheme } from './neon';
export { threeDTheme } from './three-d';

import { minimalistTheme } from './minimalist';
import { darkTheme } from './dark';
import { glassmorphismTheme } from './glassmorphism';
import { neumorphismTheme } from './neumorphism';
import { gradientTheme } from './gradient';
import { flatTheme } from './flat';
import { materialTheme } from './material';
import { luxuryTheme } from './luxury';
import { corporateTheme } from './corporate';
import { cyberpunkTheme } from './cyberpunk';
import { pastelTheme } from './pastel';
import { futuristicTheme } from './futuristic';
import { monochromeTheme } from './monochrome';
import { brutalistTheme } from './brutalist';
import { retroTheme } from './retro';
import { playfulTheme } from './playful';
import { natureTheme } from './nature';
import { sketchTheme } from './sketch';
import { neonTheme } from './neon';
import { threeDTheme } from './three-d';
import type { ThemeConfig, ThemeName } from './types';

/**
 * All available themes indexed by name.
 * This record must contain exactly one entry for each ThemeName.
 */
export const themes: Record<ThemeName, ThemeConfig> = {
  minimalist: minimalistTheme,
  dark: darkTheme,
  glassmorphism: glassmorphismTheme,
  neumorphism: neumorphismTheme,
  gradient: gradientTheme,
  flat: flatTheme,
  material: materialTheme,
  luxury: luxuryTheme,
  corporate: corporateTheme,
  cyberpunk: cyberpunkTheme,
  pastel: pastelTheme,
  futuristic: futuristicTheme,
  monochrome: monochromeTheme,
  brutalist: brutalistTheme,
  retro: retroTheme,
  playful: playfulTheme,
  nature: natureTheme,
  sketch: sketchTheme,
  neon: neonTheme,
  '3d': threeDTheme,
};

/**
 * List of all available theme names for validation and iteration.
 */
export const themeNames: ThemeName[] = Object.keys(themes) as ThemeName[];

/**
 * Build-time validation to ensure all themes are implemented.
 * This function runs at module load time and throws immediately
 * if there's a mismatch between ThemeName type and implementations.
 */
function validateThemeCompleteness(): void {
  const requiredThemes: ThemeName[] = [
    'minimalist',
    'glassmorphism',
    'neumorphism',
    'dark',
    'gradient',
    'flat',
    'material',
    'luxury',
    'corporate',
    'cyberpunk',
    'pastel',
    'futuristic',
    'monochrome',
    'brutalist',
    'retro',
    'playful',
    'nature',
    'sketch',
    'neon',
    '3d',
  ];

  const implementedThemes = new Set(Object.keys(themes));
  const missingThemes = requiredThemes.filter(
    (theme) => !implementedThemes.has(theme)
  );

  if (missingThemes.length > 0) {
    throw new Error(
      `[Theme System] Missing theme implementations: ${missingThemes.join(', ')}. ` +
      `Implemented: ${Array.from(implementedThemes).join(', ')}`
    );
  }
}

// Run validation at module load time
validateThemeCompleteness();

/**
 * Get a theme configuration by name.
 * Throws an error if the theme doesn't exist - no silent fallbacks.
 *
 * @param name - The theme name to retrieve
 * @returns The theme configuration
 * @throws Error if theme is not found
 */
export function getTheme(name: ThemeName): ThemeConfig {
  const theme = themes[name];
  if (!theme) {
    throw new Error(
      `[Theme System] Theme "${name}" not found. ` +
      `Available themes: ${Object.keys(themes).join(', ')}`
    );
  }
  return theme;
}
