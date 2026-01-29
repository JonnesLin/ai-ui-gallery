import type { ThemeName } from '../../_themes';
import type { ToastThemeConfig } from '../Toast.types';
import { minimalistToastTheme } from './minimalist';
import { darkToastTheme } from './dark';
import { gradientToastTheme } from './gradient';

export const toastThemes: Partial<Record<ThemeName, ToastThemeConfig>> = {
  minimalist: minimalistToastTheme,
  dark: darkToastTheme,
  gradient: gradientToastTheme,
};

export function getToastTheme(name: ThemeName): ToastThemeConfig {
  const theme = toastThemes[name];
  if (!theme) {
    throw new Error(`Toast theme "${name}" not found. Available themes: ${Object.keys(toastThemes).join(', ')}`);
  }
  return theme;
}
