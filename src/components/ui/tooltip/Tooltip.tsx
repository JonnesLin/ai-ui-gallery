import { useState, useRef, useEffect, type ReactElement, cloneElement } from 'react';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { TooltipProps, TooltipPlacement } from './Tooltip.types';

const PLACEMENT_STYLES: Record<TooltipPlacement, string> = {
  'top': 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  'top-start': 'bottom-full left-0 mb-2',
  'top-end': 'bottom-full right-0 mb-2',
  'bottom': 'top-full left-1/2 -translate-x-1/2 mt-2',
  'bottom-start': 'top-full left-0 mt-2',
  'bottom-end': 'top-full right-0 mt-2',
  'left': 'right-full top-1/2 -translate-y-1/2 mr-2',
  'right': 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const ARROW_STYLES: Record<TooltipPlacement, string> = {
  'top': 'top-full left-1/2 -translate-x-1/2',
  'top-start': 'top-full left-4',
  'top-end': 'top-full right-4',
  'bottom': 'bottom-full left-1/2 -translate-x-1/2',
  'bottom-start': 'bottom-full left-4',
  'bottom-end': 'bottom-full right-4',
  'left': 'left-full top-1/2 -translate-y-1/2',
  'right': 'right-full top-1/2 -translate-y-1/2',
};

function getArrowElement(placement: TooltipPlacement, theme: ReturnType<typeof getTheme>): ReactElement {
  const isTop = placement.startsWith('top');
  const isBottom = placement.startsWith('bottom');
  const isLeft = placement === 'left';
  const isRight = placement === 'right';

  const baseClasses = 'absolute w-2 h-2';
  const positionClasses = ARROW_STYLES[placement];

  // Light background themes with subtle borders
  const lightBgThemes = new Set(['minimalist', 'pastel', 'sketch']);
  // Light background themes (neumorphism-like)
  const lightBgNeumorphicThemes = new Set(['neumorphism']);
  // Glass/transparent themes
  const glassThemes = new Set(['glassmorphism']);
  // Dark background themes
  const darkBgThemes = new Set(['dark', 'flat', 'material', 'corporate', 'monochrome', 'brutalist', 'nature', '3d']);
  // Special dark themes with colored borders
  const coloredDarkThemes = new Set(['gradient', 'luxury', 'cyberpunk', 'futuristic', 'retro', 'playful', 'neon']);

  if (lightBgThemes.has(theme.name)) {
    const borderClasses = isTop
      ? 'border-r border-b border-gray-200 rotate-45 -mt-1'
      : isBottom
      ? 'border-l border-t border-gray-200 rotate-45 -mb-1'
      : isLeft
      ? 'border-r border-t border-gray-200 rotate-45 -ml-1'
      : 'border-l border-b border-gray-200 rotate-45 -mr-1';

    return (
      <div className={cn(baseClasses, positionClasses, 'bg-white', borderClasses)} />
    );
  }

  if (lightBgNeumorphicThemes.has(theme.name)) {
    const borderClasses = isTop
      ? 'border-r border-b border-gray-300 rotate-45 -mt-1'
      : isBottom
      ? 'border-l border-t border-gray-300 rotate-45 -mb-1'
      : isLeft
      ? 'border-r border-t border-gray-300 rotate-45 -ml-1'
      : 'border-l border-b border-gray-300 rotate-45 -mr-1';

    return (
      <div className={cn(baseClasses, positionClasses, 'bg-gray-100', borderClasses)} />
    );
  }

  if (glassThemes.has(theme.name)) {
    const borderDirection = isTop
      ? 'border-t-white/20'
      : isBottom
      ? 'border-b-white/20'
      : isLeft
      ? 'border-l-white/20'
      : 'border-r-white/20';

    return (
      <div className={cn('absolute', positionClasses, 'border-8 border-transparent', borderDirection)} />
    );
  }

  if (darkBgThemes.has(theme.name)) {
    const borderDirection = isTop
      ? 'border-t-gray-800'
      : isBottom
      ? 'border-b-gray-800'
      : isLeft
      ? 'border-l-gray-800'
      : 'border-r-gray-800';

    return (
      <div className={cn('absolute', positionClasses, 'border-[6px] border-transparent', borderDirection)} />
    );
  }

  if (coloredDarkThemes.has(theme.name)) {
    const borderDirection = isTop
      ? 'border-t-gray-900'
      : isBottom
      ? 'border-b-gray-900'
      : isLeft
      ? 'border-l-gray-900'
      : 'border-r-gray-900';

    return (
      <div className={cn('absolute', positionClasses, 'border-[6px] border-transparent', borderDirection)} />
    );
  }

  throw new Error(`Theme "${theme.name}" is not supported in Tooltip arrow rendering.`);
}

function getTooltipStyles(theme: ReturnType<typeof getTheme>): string {
  const base = 'px-4 py-2 text-sm whitespace-nowrap';

  const themeStyles: Record<string, string> = {
    minimalist: 'text-gray-900 bg-white border border-gray-200',
    dark: 'text-gray-100 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl shadow-black/50',
    glassmorphism: 'text-white bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-xl',
    neumorphism: 'text-gray-900 bg-gray-100 border border-gray-300 rounded-xl shadow-[8px_8px_16px_rgba(163,163,163,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)]',
    gradient: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg',
    flat: 'bg-gray-800 text-white rounded-md',
    material: 'bg-gray-900 text-white rounded-md shadow-xl',
    luxury: 'bg-amber-950 text-amber-100 border border-amber-700 rounded-lg shadow-lg',
    corporate: 'bg-blue-900 text-white rounded-md shadow-lg',
    cyberpunk: 'bg-black text-cyan-300 border border-cyan-500/50 rounded shadow-[0_0_10px_rgba(34,211,238,0.2)]',
    pastel: 'bg-pink-50 text-pink-900 border border-pink-200 rounded-xl shadow-sm',
    futuristic: 'bg-violet-950 text-violet-200 border border-violet-500/30 rounded-lg shadow-lg',
    monochrome: 'bg-gray-800 text-gray-100 rounded-md shadow-lg',
    brutalist: 'bg-black text-white border-2 border-black',
    retro: 'bg-amber-800 text-amber-50 rounded-lg shadow-lg',
    playful: 'bg-purple-600 text-white rounded-2xl shadow-lg',
    nature: 'bg-green-800 text-green-50 rounded-lg shadow-lg',
    sketch: 'bg-stone-100 text-stone-800 border-2 border-dashed border-stone-400 rounded-lg',
    neon: 'bg-gray-950 text-pink-300 border border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.2)] rounded-lg',
    '3d': 'bg-indigo-900 text-white rounded-lg shadow-xl',
  };

  const style = themeStyles[theme.name];
  if (!style) {
    throw new Error(`Theme "${theme.name}" is not supported in Tooltip component. Supported themes: ${Object.keys(themeStyles).join(', ')}`);
  }

  return cn(base, style);
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  theme = 'minimalist',
  delay = 0,
  arrow = true,
  trigger = 'hover',
  open: controlledOpen,
  onOpenChange,
  className,
}: TooltipProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const themeConfig = getTheme(theme);

  const handleOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (delay > 0) {
      timeoutRef.current = window.setTimeout(() => {
        updateOpen(true);
      }, delay);
    } else {
      updateOpen(true);
    }
  };

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    updateOpen(false);
  };

  const updateOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    updateOpen(!isOpen);
  };

  const triggerProps =
    trigger === 'hover'
      ? { onMouseEnter: handleOpen, onMouseLeave: handleClose }
      : trigger === 'click'
      ? { onClick: handleClick }
      : { onFocus: handleOpen, onBlur: handleClose };

  const tooltipElement = (
    <div
      className={cn(
        'absolute z-50',
        PLACEMENT_STYLES[placement],
        'transition-all duration-200',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        getTooltipStyles(themeConfig),
        className
      )}
    >
      {content}
      {arrow && getArrowElement(placement, themeConfig)}
    </div>
  );

  return (
    <div className="relative inline-block group">
      {cloneElement(children as ReactElement, triggerProps)}
      {tooltipElement}
    </div>
  );
}
