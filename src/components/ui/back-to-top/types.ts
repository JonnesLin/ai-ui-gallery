import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type BackToTopPosition = 'bottom-right' | 'bottom-left' | 'bottom-center';
export type BackToTopSize = 'sm' | 'md' | 'lg';

export interface BackToTopProps {
  /**
   * Theme name from the theme system
   */
  theme: ThemeName;

  /**
   * Scroll offset (in pixels) before the button becomes visible
   * @default 300
   */
  visibleOffset?: number;

  /**
   * Enable smooth scroll behavior
   * @default true
   */
  smooth?: boolean;

  /**
   * Custom icon element
   * @default ChevronUp SVG
   */
  icon?: ReactNode;

  /**
   * Button position on the screen
   * @default 'bottom-right'
   */
  position?: BackToTopPosition;

  /**
   * Button size
   * @default 'md'
   */
  size?: BackToTopSize;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Custom click handler (overrides default scroll behavior)
   */
  onClick?: () => void;

  /**
   * Show text label alongside icon
   */
  label?: string;

  /**
   * Accessibility label
   * @default 'Back to top'
   */
  ariaLabel?: string;
}
