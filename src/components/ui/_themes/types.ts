/**
 * Available theme names that have full implementations.
 * Each theme must have a corresponding ThemeConfig in the themes object.
 *
 * To add a new theme:
 * 1. Create the theme file (e.g., cyberpunk.ts)
 * 2. Add the theme name to this union type
 * 3. Export and register in index.ts
 * 4. The build-time validation will catch any mismatches
 */
export type ThemeName =
  | 'minimalist'
  | 'glassmorphism'
  | 'neumorphism'
  | 'dark'
  | 'gradient'
  | 'flat'
  | 'material'
  | 'luxury'
  | 'corporate'
  | 'cyberpunk'
  | 'pastel'
  | 'futuristic'
  | 'monochrome'
  | 'brutalist'
  | 'retro'
  | 'playful'
  | 'nature'
  | 'sketch'
  | 'neon'
  | '3d';

export interface ThemeConfig {
  name: ThemeName;
  displayName: string;

  // 页面背景
  pageBackground: string;

  // 基础样式
  base: {
    background: string;
    text: string;
    border: string;
    shadow: string;
    radius: string;
  };

  // 变体样式
  variants: {
    primary: ThemeVariant;
    secondary: ThemeVariant;
    ghost: ThemeVariant;
    danger: ThemeVariant;
    success: ThemeVariant;
    warning: ThemeVariant;
  };

  // 尺寸
  sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  // 状态样式
  states: {
    hover: string;
    active: string;
    focus: string;
    disabled: string;
    loading: string;
  };
}

export interface ThemeVariant {
  background: string;
  text: string;
  border: string;
  shadow?: string;
  hover: string;
  active?: string;
}

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'warning';
