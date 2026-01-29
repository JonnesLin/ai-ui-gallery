import type { ThemeName } from '../_themes';
import type { EmptyThemeStyles, EmptySize } from './types';

const sizeStyles: Record<EmptySize, { imageSize: string; title: string; description: string; spacing: string }> = {
  sm: {
    imageSize: 'w-16 h-16',
    title: 'text-lg',
    description: 'text-xs',
    spacing: 'mb-4',
  },
  md: {
    imageSize: 'w-24 h-24',
    title: 'text-2xl',
    description: 'text-sm',
    spacing: 'mb-8',
  },
  lg: {
    imageSize: 'w-32 h-32',
    title: 'text-3xl',
    description: 'text-base',
    spacing: 'mb-8',
  },
};

export function getEmptyThemeStyles(theme: ThemeName, size: EmptySize): EmptyThemeStyles {
  const sizeStyle = sizeStyles[size];

  const themeStyles: Record<ThemeName, EmptyThemeStyles> = {
    minimalist: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-gray-300`,
      title: `${sizeStyle.title} font-light text-gray-900 mb-3`,
      description: `text-gray-500 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    dark: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `relative ${sizeStyle.spacing}`,
      imageSize: `relative ${sizeStyle.imageSize} text-gray-600`,
      title: `${sizeStyle.title} font-semibold text-gray-100 mb-3`,
      description: `text-gray-400 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    glassmorphism: {
      container: 'relative flex flex-col items-center max-w-md px-12 py-16 text-center',
      imageWrapper: `w-32 h-32 ${sizeStyle.spacing} bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/40`,
      imageSize: `${sizeStyle.imageSize} text-white`,
      title: `${sizeStyle.title} font-semibold text-white mb-4`,
      description: `text-white/80 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    neumorphism: {
      container: 'flex flex-col items-center max-w-md px-12 py-16 text-center',
      imageWrapper: `w-32 h-32 ${sizeStyle.spacing} bg-gray-100 rounded-full flex items-center justify-center shadow-[inset_8px_8px_16px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.9)]`,
      imageSize: `${sizeStyle.imageSize} text-gray-400`,
      title: `${sizeStyle.title} font-semibold text-gray-800 mb-4`,
      description: `text-gray-600 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    gradient: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-purple-300`,
      title: `${sizeStyle.title} font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3`,
      description: `text-gray-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    brutalist: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-black`,
      title: `${sizeStyle.title} font-black text-black mb-3 uppercase tracking-tight`,
      description: `text-black ${sizeStyle.description} font-bold leading-tight ${sizeStyle.spacing}`,
    },
    retro: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-amber-600`,
      title: `${sizeStyle.title} font-bold text-amber-900 mb-3`,
      description: `text-amber-800 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    cyberpunk: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `relative ${sizeStyle.spacing}`,
      imageSize: `relative ${sizeStyle.imageSize} text-cyan-400`,
      title: `${sizeStyle.title} font-bold text-cyan-400 mb-3 tracking-wide`,
      description: `text-purple-300 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    pastel: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-pink-300`,
      title: `${sizeStyle.title} font-semibold text-pink-600 mb-3`,
      description: `text-pink-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    corporate: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-blue-300`,
      title: `${sizeStyle.title} font-semibold text-blue-900 mb-3`,
      description: `text-gray-600 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    playful: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-yellow-400`,
      title: `${sizeStyle.title} font-bold text-purple-600 mb-3`,
      description: `text-gray-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    luxury: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-amber-400`,
      title: `${sizeStyle.title} font-serif font-light text-gray-900 mb-3 tracking-wide`,
      description: `text-gray-600 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    nature: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-green-400`,
      title: `${sizeStyle.title} font-semibold text-green-900 mb-3`,
      description: `text-green-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    futuristic: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `relative ${sizeStyle.spacing}`,
      imageSize: `relative ${sizeStyle.imageSize} text-blue-400`,
      title: `${sizeStyle.title} font-bold text-white mb-3 tracking-wider`,
      description: `text-gray-400 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    sketch: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-gray-700`,
      title: `${sizeStyle.title} font-handwriting text-gray-900 mb-3`,
      description: `text-gray-700 ${sizeStyle.description} font-handwriting leading-relaxed ${sizeStyle.spacing}`,
    },
    monochrome: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-gray-400`,
      title: `${sizeStyle.title} font-bold text-black mb-3`,
      description: `text-gray-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    neon: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-pink-400`,
      title: `${sizeStyle.title} font-bold text-pink-500 mb-3 tracking-wide`,
      description: `text-purple-300 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    '3d': {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-blue-500`,
      title: `${sizeStyle.title} font-bold text-blue-600 mb-3`,
      description: `text-gray-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    flat: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-blue-400`,
      title: `${sizeStyle.title} font-semibold text-gray-800 mb-3`,
      description: `text-gray-600 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
    material: {
      container: 'flex flex-col items-center max-w-md px-8 text-center',
      imageWrapper: `${sizeStyle.spacing}`,
      imageSize: `${sizeStyle.imageSize} text-blue-300`,
      title: `${sizeStyle.title} font-medium text-gray-900 mb-3`,
      description: `text-gray-700 ${sizeStyle.description} leading-relaxed ${sizeStyle.spacing}`,
    },
  };

  const styles = themeStyles[theme];
  if (!styles) {
    throw new Error(`Empty theme styles not found for theme: ${theme}`);
  }

  return styles;
}
