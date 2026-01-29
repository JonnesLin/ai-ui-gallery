'use client';

import { useState, useEffect } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { BackToTopProps } from './types';

const DEFAULT_ICON = (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const POSITION_CLASSES = {
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
} as const;

const SIZE_CLASSES = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
} as const;

export function BackToTop({
  theme,
  visibleOffset = 300,
  smooth = true,
  icon = DEFAULT_ICON,
  position = 'bottom-right',
  size = 'md',
  className,
  onClick,
  label,
  ariaLabel = 'Back to top',
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const themeConfig = getTheme(theme);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > visibleOffset;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleOffset]);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  if (!isVisible) {
    return null;
  }

  const baseClasses = cn(
    'fixed z-50',
    'flex items-center justify-center',
    'transition-all duration-300',
    'cursor-pointer',
    POSITION_CLASSES[position],
    SIZE_CLASSES[size],
    themeConfig.base.background,
    themeConfig.base.border,
    themeConfig.base.shadow,
    themeConfig.base.radius,
    themeConfig.states.hover,
    className
  );

  if (label) {
    return (
      <button
        onClick={handleClick}
        className={cn(
          baseClasses,
          'px-4 py-2 gap-2 w-auto h-auto'
        )}
        aria-label={ariaLabel}
      >
        {icon}
        <span className={cn('text-sm font-medium', themeConfig.base.text)}>
          {label}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
