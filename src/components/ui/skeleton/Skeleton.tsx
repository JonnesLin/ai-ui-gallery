import { cn } from '../_shared/utils';
import type { SkeletonProps } from './Skeleton.types';
import type { ThemeName } from '../_themes/types';

/**
 * Theme-aware background colors for skeleton component.
 * Ensures visibility across both light and dark themes.
 */
const skeletonBgColors: Record<ThemeName, string> = {
  minimalist: 'bg-gray-200',
  material: 'bg-indigo-100',
  dark: 'bg-gray-700',
  glassmorphism: 'bg-white/20',
  neumorphism: 'bg-gray-200',
  flat: 'bg-slate-200',
  gradient: 'bg-white/30',
  luxury: 'bg-amber-100',
  corporate: 'bg-blue-100',
  cyberpunk: 'bg-cyan-900',
  pastel: 'bg-pink-100',
  futuristic: 'bg-slate-700',
  monochrome: 'bg-gray-300',
  brutalist: 'bg-gray-300',
  retro: 'bg-orange-100',
  playful: 'bg-purple-100',
  nature: 'bg-green-100',
  sketch: 'bg-gray-200',
  neon: 'bg-gray-800',
  '3d': 'bg-slate-300',
};

function getSkeletonBgColor(theme: ThemeName): string {
  const bgColor = skeletonBgColors[theme];
  if (!bgColor) {
    throw new Error(
      `[Skeleton] Theme "${theme}" is not supported. ` +
      `Supported themes: ${Object.keys(skeletonBgColors).join(', ')}`
    );
  }
  return bgColor;
}

export function Skeleton({
  width,
  height = 16,
  variant = 'rectangular',
  animation = 'pulse',
  theme = 'minimalist',
  className,
}: SkeletonProps) {
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  const bgColor = getSkeletonBgColor(theme);

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg',
  };

  // Note: 'wave' animation requires custom CSS. Using 'pulse' as safe default.
  const animationClasses = {
    pulse: 'animate-pulse motion-reduce:animate-none',
    wave: 'animate-pulse motion-reduce:animate-none', // Fallback to pulse since wave requires custom keyframes
    none: '',
  };

  return (
    <div
      className={cn(
        bgColor,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{
        width: widthStyle,
        height: heightStyle,
      }}
      aria-hidden="true"
    />
  );
}
