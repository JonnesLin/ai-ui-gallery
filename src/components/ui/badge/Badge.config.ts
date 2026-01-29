import type { ThemeName } from '../_themes';
import type { BadgeVariant, BadgeColor, BadgeSize, BadgeRounded, BadgeStyleConfig } from './Badge.types';

const sizeStyles: Record<BadgeSize, string> = {
  xs: 'px-1.5 py-px text-[10px]',
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

const roundedStyles: Record<BadgeRounded, string> = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

type ThemeColorConfig = Record<BadgeColor, Record<BadgeVariant, BadgeStyleConfig>>;

const minimalistStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-gray-800',
      text: 'text-white',
      removeButton: 'text-gray-300 hover:text-white',
    },
    soft: {
      container: 'bg-gray-100',
      text: 'text-gray-700',
      removeButton: 'text-gray-400 hover:text-gray-600',
    },
    outlined: {
      container: 'border border-gray-200',
      text: 'text-gray-700',
      removeButton: 'text-gray-400 hover:text-gray-600',
    },
    dot: {
      container: 'border border-gray-200',
      text: 'text-gray-700',
      dot: 'bg-gray-400',
    },
  },
  primary: {
    solid: {
      container: 'bg-blue-600',
      text: 'text-white',
      removeButton: 'text-blue-200 hover:text-white',
    },
    soft: {
      container: 'bg-blue-100',
      text: 'text-blue-700',
      removeButton: 'text-blue-400 hover:text-blue-600',
    },
    outlined: {
      container: 'border border-blue-200',
      text: 'text-blue-700',
      removeButton: 'text-blue-400 hover:text-blue-600',
    },
    dot: {
      container: 'border border-blue-200',
      text: 'text-blue-700',
      dot: 'bg-blue-500',
    },
  },
  success: {
    solid: {
      container: 'bg-green-600',
      text: 'text-white',
      removeButton: 'text-green-200 hover:text-white',
    },
    soft: {
      container: 'bg-green-100',
      text: 'text-green-700',
      removeButton: 'text-green-400 hover:text-green-600',
    },
    outlined: {
      container: 'border border-green-200',
      text: 'text-green-700',
      removeButton: 'text-green-400 hover:text-green-600',
    },
    dot: {
      container: 'border border-green-200',
      text: 'text-green-700',
      dot: 'bg-green-500',
    },
  },
  warning: {
    solid: {
      container: 'bg-amber-500',
      text: 'text-white',
      removeButton: 'text-amber-200 hover:text-white',
    },
    soft: {
      container: 'bg-amber-100',
      text: 'text-amber-700',
      removeButton: 'text-amber-400 hover:text-amber-600',
    },
    outlined: {
      container: 'border border-amber-200',
      text: 'text-amber-700',
      removeButton: 'text-amber-400 hover:text-amber-600',
    },
    dot: {
      container: 'border border-amber-200',
      text: 'text-amber-700',
      dot: 'bg-amber-500',
    },
  },
  error: {
    solid: {
      container: 'bg-red-600',
      text: 'text-white',
      removeButton: 'text-red-200 hover:text-white',
    },
    soft: {
      container: 'bg-red-100',
      text: 'text-red-700',
      removeButton: 'text-red-400 hover:text-red-600',
    },
    outlined: {
      container: 'border border-red-200',
      text: 'text-red-700',
      removeButton: 'text-red-400 hover:text-red-600',
    },
    dot: {
      container: 'border border-red-200',
      text: 'text-red-700',
      dot: 'bg-red-500',
    },
  },
  info: {
    solid: {
      container: 'bg-cyan-600',
      text: 'text-white',
      removeButton: 'text-cyan-200 hover:text-white',
    },
    soft: {
      container: 'bg-cyan-100',
      text: 'text-cyan-700',
      removeButton: 'text-cyan-400 hover:text-cyan-600',
    },
    outlined: {
      container: 'border border-cyan-200',
      text: 'text-cyan-700',
      removeButton: 'text-cyan-400 hover:text-cyan-600',
    },
    dot: {
      container: 'border border-cyan-200',
      text: 'text-cyan-700',
      dot: 'bg-cyan-500',
    },
  },
};

const darkStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-gray-700',
      text: 'text-white',
      removeButton: 'text-gray-400 hover:text-white',
    },
    soft: {
      container: 'bg-gray-800 border border-gray-700',
      text: 'text-gray-300',
      removeButton: 'text-gray-500 hover:text-gray-300',
    },
    outlined: {
      container: 'border border-gray-600',
      text: 'text-gray-400',
      removeButton: 'text-gray-600 hover:text-gray-400',
    },
    dot: {
      container: 'bg-gray-800 border border-gray-700',
      text: 'text-gray-300',
      dot: 'bg-gray-500',
    },
  },
  primary: {
    solid: {
      container: 'bg-blue-600',
      text: 'text-white',
      removeButton: 'text-blue-200 hover:text-white',
    },
    soft: {
      container: 'bg-blue-950 border border-blue-800',
      text: 'text-blue-400',
      removeButton: 'text-blue-600 hover:text-blue-400',
    },
    outlined: {
      container: 'border border-blue-600',
      text: 'text-blue-400',
      removeButton: 'text-blue-600 hover:text-blue-400',
    },
    dot: {
      container: 'bg-blue-950 border border-blue-800',
      text: 'text-blue-400',
      dot: 'bg-blue-500',
    },
  },
  success: {
    solid: {
      container: 'bg-green-600',
      text: 'text-white',
      removeButton: 'text-green-200 hover:text-white',
    },
    soft: {
      container: 'bg-green-950 border border-green-800',
      text: 'text-green-400',
      removeButton: 'text-green-600 hover:text-green-400',
    },
    outlined: {
      container: 'border border-green-600',
      text: 'text-green-400',
      removeButton: 'text-green-600 hover:text-green-400',
    },
    dot: {
      container: 'bg-green-950 border border-green-800',
      text: 'text-green-400',
      dot: 'bg-green-500',
    },
  },
  warning: {
    solid: {
      container: 'bg-amber-500',
      text: 'text-gray-900',
      removeButton: 'text-gray-700 hover:text-gray-900',
    },
    soft: {
      container: 'bg-amber-950 border border-amber-800',
      text: 'text-amber-400',
      removeButton: 'text-amber-600 hover:text-amber-400',
    },
    outlined: {
      container: 'border border-amber-600',
      text: 'text-amber-400',
      removeButton: 'text-amber-600 hover:text-amber-400',
    },
    dot: {
      container: 'bg-amber-950 border border-amber-800',
      text: 'text-amber-400',
      dot: 'bg-amber-500',
    },
  },
  error: {
    solid: {
      container: 'bg-red-600',
      text: 'text-white',
      removeButton: 'text-red-200 hover:text-white',
    },
    soft: {
      container: 'bg-red-950 border border-red-800',
      text: 'text-red-400',
      removeButton: 'text-red-600 hover:text-red-400',
    },
    outlined: {
      container: 'border border-red-600',
      text: 'text-red-400',
      removeButton: 'text-red-600 hover:text-red-400',
    },
    dot: {
      container: 'bg-red-950 border border-red-800',
      text: 'text-red-400',
      dot: 'bg-red-500',
    },
  },
  info: {
    solid: {
      container: 'bg-cyan-600',
      text: 'text-white',
      removeButton: 'text-cyan-200 hover:text-white',
    },
    soft: {
      container: 'bg-cyan-950 border border-cyan-800',
      text: 'text-cyan-400',
      removeButton: 'text-cyan-600 hover:text-cyan-400',
    },
    outlined: {
      container: 'border border-cyan-600',
      text: 'text-cyan-400',
      removeButton: 'text-cyan-600 hover:text-cyan-400',
    },
    dot: {
      container: 'bg-cyan-950 border border-cyan-800',
      text: 'text-cyan-400',
      dot: 'bg-cyan-500',
    },
  },
};

const glassmorphismStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-white/30 backdrop-blur-md border border-white/40 shadow-lg',
      text: 'text-white',
      removeButton: 'text-white/70 hover:text-white hover:bg-white/20',
    },
    soft: {
      container: 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg',
      text: 'text-white',
      removeButton: 'text-white/60 hover:text-white hover:bg-white/20',
    },
    outlined: {
      container: 'backdrop-blur-md border border-white/40 shadow-lg',
      text: 'text-white',
      removeButton: 'text-white/60 hover:text-white hover:bg-white/20',
    },
    dot: {
      container: 'bg-white/20 backdrop-blur-md border border-white/30 shadow-lg',
      text: 'text-white',
      dot: 'bg-white/80',
    },
  },
  primary: {
    solid: {
      container: 'bg-blue-500/40 backdrop-blur-md border border-blue-300/40 shadow-lg shadow-blue-500/20',
      text: 'text-blue-100',
      removeButton: 'text-blue-200 hover:text-white hover:bg-blue-400/30',
    },
    soft: {
      container: 'bg-blue-500/30 backdrop-blur-md border border-blue-300/30 shadow-lg',
      text: 'text-blue-100',
      removeButton: 'text-blue-200 hover:text-white hover:bg-blue-400/30',
    },
    outlined: {
      container: 'backdrop-blur-md border border-blue-400/50',
      text: 'text-blue-100',
      removeButton: 'text-blue-200 hover:text-white hover:bg-blue-400/30',
    },
    dot: {
      container: 'bg-blue-500/30 backdrop-blur-md border border-blue-300/30 shadow-lg',
      text: 'text-blue-100',
      dot: 'bg-blue-400 shadow-lg shadow-blue-400/50',
    },
  },
  success: {
    solid: {
      container: 'bg-green-500/40 backdrop-blur-md border border-green-300/40 shadow-lg shadow-green-500/20',
      text: 'text-green-100',
      removeButton: 'text-green-200 hover:text-white hover:bg-green-400/30',
    },
    soft: {
      container: 'bg-green-500/30 backdrop-blur-md border border-green-300/30 shadow-lg',
      text: 'text-green-100',
      removeButton: 'text-green-200 hover:text-white hover:bg-green-400/30',
    },
    outlined: {
      container: 'backdrop-blur-md border border-green-400/50',
      text: 'text-green-100',
      removeButton: 'text-green-200 hover:text-white hover:bg-green-400/30',
    },
    dot: {
      container: 'bg-green-500/30 backdrop-blur-md border border-green-300/30 shadow-lg',
      text: 'text-green-100',
      dot: 'bg-green-400 shadow-lg shadow-green-400/50',
    },
  },
  warning: {
    solid: {
      container: 'bg-amber-500/40 backdrop-blur-md border border-amber-300/40 shadow-lg shadow-amber-500/20',
      text: 'text-amber-100',
      removeButton: 'text-amber-200 hover:text-white hover:bg-amber-400/30',
    },
    soft: {
      container: 'bg-amber-500/30 backdrop-blur-md border border-amber-300/30 shadow-lg',
      text: 'text-amber-100',
      removeButton: 'text-amber-200 hover:text-white hover:bg-amber-400/30',
    },
    outlined: {
      container: 'backdrop-blur-md border border-amber-400/50',
      text: 'text-amber-100',
      removeButton: 'text-amber-200 hover:text-white hover:bg-amber-400/30',
    },
    dot: {
      container: 'bg-amber-500/30 backdrop-blur-md border border-amber-300/30 shadow-lg',
      text: 'text-amber-100',
      dot: 'bg-amber-400 shadow-lg shadow-amber-400/50',
    },
  },
  error: {
    solid: {
      container: 'bg-red-500/40 backdrop-blur-md border border-red-300/40 shadow-lg shadow-red-500/20',
      text: 'text-red-100',
      removeButton: 'text-red-200 hover:text-white hover:bg-red-400/30',
    },
    soft: {
      container: 'bg-red-500/30 backdrop-blur-md border border-red-300/30 shadow-lg',
      text: 'text-red-100',
      removeButton: 'text-red-200 hover:text-white hover:bg-red-400/30',
    },
    outlined: {
      container: 'backdrop-blur-md border border-red-400/50',
      text: 'text-red-100',
      removeButton: 'text-red-200 hover:text-white hover:bg-red-400/30',
    },
    dot: {
      container: 'bg-red-500/30 backdrop-blur-md border border-red-300/30 shadow-lg',
      text: 'text-red-100',
      dot: 'bg-red-400 shadow-lg shadow-red-400/50',
    },
  },
  info: {
    solid: {
      container: 'bg-cyan-500/40 backdrop-blur-md border border-cyan-300/40 shadow-lg shadow-cyan-500/20',
      text: 'text-cyan-100',
      removeButton: 'text-cyan-200 hover:text-white hover:bg-cyan-400/30',
    },
    soft: {
      container: 'bg-cyan-500/30 backdrop-blur-md border border-cyan-300/30 shadow-lg',
      text: 'text-cyan-100',
      removeButton: 'text-cyan-200 hover:text-white hover:bg-cyan-400/30',
    },
    outlined: {
      container: 'backdrop-blur-md border border-cyan-400/50',
      text: 'text-cyan-100',
      removeButton: 'text-cyan-200 hover:text-white hover:bg-cyan-400/30',
    },
    dot: {
      container: 'bg-cyan-500/30 backdrop-blur-md border border-cyan-300/30 shadow-lg',
      text: 'text-cyan-100',
      dot: 'bg-cyan-400 shadow-lg shadow-cyan-400/50',
    },
  },
};

const brutalistStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    soft: {
      container: 'bg-yellow-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-black',
    },
  },
  primary: {
    solid: {
      container: 'bg-black border-4 border-black',
      text: 'text-yellow-300',
      removeButton: 'text-yellow-300 hover:bg-yellow-300 hover:text-black',
    },
    soft: {
      container: 'bg-blue-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-blue-300',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-blue-500',
    },
  },
  success: {
    solid: {
      container: 'bg-black border-4 border-black',
      text: 'text-green-300',
      removeButton: 'text-green-300 hover:bg-green-300 hover:text-black',
    },
    soft: {
      container: 'bg-green-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-green-300',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-green-500',
    },
  },
  warning: {
    solid: {
      container: 'bg-black border-4 border-black',
      text: 'text-yellow-300',
      removeButton: 'text-yellow-300 hover:bg-yellow-300 hover:text-black',
    },
    soft: {
      container: 'bg-yellow-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-yellow-300',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-yellow-500',
    },
  },
  error: {
    solid: {
      container: 'bg-black border-4 border-black',
      text: 'text-red-300',
      removeButton: 'text-red-300 hover:bg-red-300 hover:text-black',
    },
    soft: {
      container: 'bg-red-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-red-300',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-red-500',
    },
  },
  info: {
    solid: {
      container: 'bg-black border-4 border-black',
      text: 'text-cyan-300',
      removeButton: 'text-cyan-300 hover:bg-cyan-300 hover:text-black',
    },
    soft: {
      container: 'bg-cyan-300 border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-cyan-300',
    },
    outlined: {
      container: 'border-4 border-black',
      text: 'text-black',
      removeButton: 'text-black hover:bg-black hover:text-white',
    },
    dot: {
      container: 'bg-white border-4 border-black',
      text: 'text-black',
      dot: 'bg-cyan-500',
    },
  },
};

const retroStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-amber-700 border-2 border-amber-900',
      text: 'text-amber-100',
      removeButton: 'text-amber-300 hover:text-amber-100',
    },
    soft: {
      container: 'bg-amber-100 border-2 border-amber-700',
      text: 'text-amber-900',
      removeButton: 'text-amber-600 hover:text-amber-900',
    },
    outlined: {
      container: 'border-2 border-amber-700',
      text: 'text-amber-900',
      removeButton: 'text-amber-600 hover:text-amber-900',
    },
    dot: {
      container: 'bg-amber-100 border-2 border-amber-700',
      text: 'text-amber-900',
      dot: 'bg-amber-700',
    },
  },
  primary: {
    solid: {
      container: 'bg-orange-600 border-2 border-orange-800',
      text: 'text-white',
      removeButton: 'text-orange-200 hover:text-white',
    },
    soft: {
      container: 'bg-orange-100 border-2 border-orange-600',
      text: 'text-orange-900',
      removeButton: 'text-orange-500 hover:text-orange-900',
    },
    outlined: {
      container: 'border-2 border-orange-600',
      text: 'text-orange-900',
      removeButton: 'text-orange-500 hover:text-orange-900',
    },
    dot: {
      container: 'bg-orange-100 border-2 border-orange-600',
      text: 'text-orange-900',
      dot: 'bg-orange-600',
    },
  },
  success: {
    solid: {
      container: 'bg-lime-600 border-2 border-lime-800',
      text: 'text-white',
      removeButton: 'text-lime-200 hover:text-white',
    },
    soft: {
      container: 'bg-lime-100 border-2 border-lime-600',
      text: 'text-lime-900',
      removeButton: 'text-lime-500 hover:text-lime-900',
    },
    outlined: {
      container: 'border-2 border-lime-600',
      text: 'text-lime-900',
      removeButton: 'text-lime-500 hover:text-lime-900',
    },
    dot: {
      container: 'bg-lime-100 border-2 border-lime-600',
      text: 'text-lime-900',
      dot: 'bg-lime-600',
    },
  },
  warning: {
    solid: {
      container: 'bg-amber-500 border-2 border-amber-700',
      text: 'text-white',
      removeButton: 'text-amber-200 hover:text-white',
    },
    soft: {
      container: 'bg-amber-100 border-2 border-amber-500',
      text: 'text-amber-900',
      removeButton: 'text-amber-500 hover:text-amber-900',
    },
    outlined: {
      container: 'border-2 border-amber-500',
      text: 'text-amber-900',
      removeButton: 'text-amber-500 hover:text-amber-900',
    },
    dot: {
      container: 'bg-amber-100 border-2 border-amber-500',
      text: 'text-amber-900',
      dot: 'bg-amber-500',
    },
  },
  error: {
    solid: {
      container: 'bg-red-700 border-2 border-red-900',
      text: 'text-white',
      removeButton: 'text-red-200 hover:text-white',
    },
    soft: {
      container: 'bg-red-100 border-2 border-red-700',
      text: 'text-red-900',
      removeButton: 'text-red-500 hover:text-red-900',
    },
    outlined: {
      container: 'border-2 border-red-700',
      text: 'text-red-900',
      removeButton: 'text-red-500 hover:text-red-900',
    },
    dot: {
      container: 'bg-red-100 border-2 border-red-700',
      text: 'text-red-900',
      dot: 'bg-red-700',
    },
  },
  info: {
    solid: {
      container: 'bg-teal-600 border-2 border-teal-800',
      text: 'text-white',
      removeButton: 'text-teal-200 hover:text-white',
    },
    soft: {
      container: 'bg-teal-100 border-2 border-teal-600',
      text: 'text-teal-900',
      removeButton: 'text-teal-500 hover:text-teal-900',
    },
    outlined: {
      container: 'border-2 border-teal-600',
      text: 'text-teal-900',
      removeButton: 'text-teal-500 hover:text-teal-900',
    },
    dot: {
      container: 'bg-teal-100 border-2 border-teal-600',
      text: 'text-teal-900',
      dot: 'bg-teal-600',
    },
  },
};

const playfulStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-gradient-to-r from-purple-400 to-pink-400 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-full',
      text: 'text-purple-800',
      removeButton: 'text-purple-500 hover:text-purple-800',
    },
    outlined: {
      container: 'border-3 border-purple-400 rounded-full',
      text: 'text-purple-700',
      removeButton: 'text-purple-500 hover:text-purple-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-full',
      text: 'text-purple-800',
      dot: 'bg-purple-500 animate-pulse',
    },
  },
  primary: {
    solid: {
      container: 'bg-gradient-to-r from-blue-500 to-purple-500 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-500 rounded-full',
      text: 'text-blue-800',
      removeButton: 'text-blue-500 hover:text-blue-800',
    },
    outlined: {
      container: 'border-3 border-blue-500 rounded-full',
      text: 'text-blue-700',
      removeButton: 'text-blue-500 hover:text-blue-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-500 rounded-full',
      text: 'text-blue-800',
      dot: 'bg-blue-500 animate-pulse',
    },
  },
  success: {
    solid: {
      container: 'bg-gradient-to-r from-green-400 to-emerald-400 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-full',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    outlined: {
      container: 'border-3 border-green-500 rounded-full',
      text: 'text-green-700',
      removeButton: 'text-green-500 hover:text-green-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-full',
      text: 'text-green-800',
      dot: 'bg-green-500 animate-pulse',
    },
  },
  warning: {
    solid: {
      container: 'bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-500 rounded-full',
      text: 'text-yellow-800',
      removeButton: 'text-yellow-600 hover:text-yellow-800',
    },
    outlined: {
      container: 'border-3 border-yellow-500 rounded-full',
      text: 'text-yellow-700',
      removeButton: 'text-yellow-600 hover:text-yellow-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-500 rounded-full',
      text: 'text-yellow-800',
      dot: 'bg-yellow-500 animate-pulse',
    },
  },
  error: {
    solid: {
      container: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-500 rounded-full',
      text: 'text-red-800',
      removeButton: 'text-red-500 hover:text-red-800',
    },
    outlined: {
      container: 'border-3 border-red-500 rounded-full',
      text: 'text-red-700',
      removeButton: 'text-red-500 hover:text-red-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-500 rounded-full',
      text: 'text-red-800',
      dot: 'bg-red-500 animate-pulse',
    },
  },
  info: {
    solid: {
      container: 'bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full',
      text: 'text-white',
      removeButton: 'text-white/80 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-r from-cyan-100 to-blue-100 border-2 border-cyan-500 rounded-full',
      text: 'text-cyan-800',
      removeButton: 'text-cyan-500 hover:text-cyan-800',
    },
    outlined: {
      container: 'border-3 border-cyan-500 rounded-full',
      text: 'text-cyan-700',
      removeButton: 'text-cyan-500 hover:text-cyan-700',
    },
    dot: {
      container: 'bg-gradient-to-r from-cyan-100 to-blue-100 border-2 border-cyan-500 rounded-full',
      text: 'text-cyan-800',
      dot: 'bg-cyan-500 animate-pulse',
    },
  },
};

const natureStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-stone-600',
      text: 'text-white',
      removeButton: 'text-stone-200 hover:text-white',
    },
    soft: {
      container: 'bg-stone-100 border border-stone-300',
      text: 'text-stone-700',
      removeButton: 'text-stone-400 hover:text-stone-700',
    },
    outlined: {
      container: 'border border-stone-400',
      text: 'text-stone-700',
      removeButton: 'text-stone-400 hover:text-stone-700',
    },
    dot: {
      container: 'bg-stone-100 border border-stone-300',
      text: 'text-stone-700',
      dot: 'bg-stone-500',
    },
  },
  primary: {
    solid: {
      container: 'bg-green-700',
      text: 'text-white',
      removeButton: 'text-green-200 hover:text-white',
    },
    soft: {
      container: 'bg-green-100 border border-green-300',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    outlined: {
      container: 'border border-green-500',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    dot: {
      container: 'bg-green-100 border border-green-300',
      text: 'text-green-800',
      dot: 'bg-green-600',
    },
  },
  success: {
    solid: {
      container: 'bg-emerald-600',
      text: 'text-white',
      removeButton: 'text-emerald-200 hover:text-white',
    },
    soft: {
      container: 'bg-emerald-100 border border-emerald-300',
      text: 'text-emerald-800',
      removeButton: 'text-emerald-500 hover:text-emerald-800',
    },
    outlined: {
      container: 'border border-emerald-500',
      text: 'text-emerald-800',
      removeButton: 'text-emerald-500 hover:text-emerald-800',
    },
    dot: {
      container: 'bg-emerald-100 border border-emerald-300',
      text: 'text-emerald-800',
      dot: 'bg-emerald-600',
    },
  },
  warning: {
    solid: {
      container: 'bg-orange-600',
      text: 'text-white',
      removeButton: 'text-orange-200 hover:text-white',
    },
    soft: {
      container: 'bg-orange-100 border border-orange-300',
      text: 'text-orange-800',
      removeButton: 'text-orange-500 hover:text-orange-800',
    },
    outlined: {
      container: 'border border-orange-500',
      text: 'text-orange-800',
      removeButton: 'text-orange-500 hover:text-orange-800',
    },
    dot: {
      container: 'bg-orange-100 border border-orange-300',
      text: 'text-orange-800',
      dot: 'bg-orange-600',
    },
  },
  error: {
    solid: {
      container: 'bg-rose-700',
      text: 'text-white',
      removeButton: 'text-rose-200 hover:text-white',
    },
    soft: {
      container: 'bg-rose-100 border border-rose-300',
      text: 'text-rose-800',
      removeButton: 'text-rose-500 hover:text-rose-800',
    },
    outlined: {
      container: 'border border-rose-500',
      text: 'text-rose-800',
      removeButton: 'text-rose-500 hover:text-rose-800',
    },
    dot: {
      container: 'bg-rose-100 border border-rose-300',
      text: 'text-rose-800',
      dot: 'bg-rose-600',
    },
  },
  info: {
    solid: {
      container: 'bg-sky-600',
      text: 'text-white',
      removeButton: 'text-sky-200 hover:text-white',
    },
    soft: {
      container: 'bg-sky-100 border border-sky-300',
      text: 'text-sky-800',
      removeButton: 'text-sky-500 hover:text-sky-800',
    },
    outlined: {
      container: 'border border-sky-500',
      text: 'text-sky-800',
      removeButton: 'text-sky-500 hover:text-sky-800',
    },
    dot: {
      container: 'bg-sky-100 border border-sky-300',
      text: 'text-sky-800',
      dot: 'bg-sky-600',
    },
  },
};

const sketchStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-stone-700 border-2 border-stone-900',
      text: 'text-white',
      removeButton: 'text-stone-300 hover:text-white',
    },
    soft: {
      container: 'bg-stone-100 border-2 border-stone-700 border-dashed',
      text: 'text-stone-800',
      removeButton: 'text-stone-500 hover:text-stone-800',
    },
    outlined: {
      container: 'border-2 border-stone-700 border-dashed',
      text: 'text-stone-800',
      removeButton: 'text-stone-500 hover:text-stone-800',
    },
    dot: {
      container: 'bg-stone-100 border-2 border-stone-700 border-dashed',
      text: 'text-stone-800',
      dot: 'bg-stone-600',
    },
  },
  primary: {
    solid: {
      container: 'bg-slate-700 border-2 border-slate-900',
      text: 'text-white',
      removeButton: 'text-slate-300 hover:text-white',
    },
    soft: {
      container: 'bg-slate-100 border-2 border-slate-700 border-dashed',
      text: 'text-slate-800',
      removeButton: 'text-slate-500 hover:text-slate-800',
    },
    outlined: {
      container: 'border-2 border-slate-700 border-dashed',
      text: 'text-slate-800',
      removeButton: 'text-slate-500 hover:text-slate-800',
    },
    dot: {
      container: 'bg-slate-100 border-2 border-slate-700 border-dashed',
      text: 'text-slate-800',
      dot: 'bg-slate-600',
    },
  },
  success: {
    solid: {
      container: 'bg-green-700 border-2 border-green-900',
      text: 'text-white',
      removeButton: 'text-green-300 hover:text-white',
    },
    soft: {
      container: 'bg-green-100 border-2 border-green-700 border-dashed',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    outlined: {
      container: 'border-2 border-green-700 border-dashed',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    dot: {
      container: 'bg-green-100 border-2 border-green-700 border-dashed',
      text: 'text-green-800',
      dot: 'bg-green-600',
    },
  },
  warning: {
    solid: {
      container: 'bg-amber-700 border-2 border-amber-900',
      text: 'text-white',
      removeButton: 'text-amber-300 hover:text-white',
    },
    soft: {
      container: 'bg-amber-100 border-2 border-amber-700 border-dashed',
      text: 'text-amber-800',
      removeButton: 'text-amber-500 hover:text-amber-800',
    },
    outlined: {
      container: 'border-2 border-amber-700 border-dashed',
      text: 'text-amber-800',
      removeButton: 'text-amber-500 hover:text-amber-800',
    },
    dot: {
      container: 'bg-amber-100 border-2 border-amber-700 border-dashed',
      text: 'text-amber-800',
      dot: 'bg-amber-600',
    },
  },
  error: {
    solid: {
      container: 'bg-red-700 border-2 border-red-900',
      text: 'text-white',
      removeButton: 'text-red-300 hover:text-white',
    },
    soft: {
      container: 'bg-red-100 border-2 border-red-700 border-dashed',
      text: 'text-red-800',
      removeButton: 'text-red-500 hover:text-red-800',
    },
    outlined: {
      container: 'border-2 border-red-700 border-dashed',
      text: 'text-red-800',
      removeButton: 'text-red-500 hover:text-red-800',
    },
    dot: {
      container: 'bg-red-100 border-2 border-red-700 border-dashed',
      text: 'text-red-800',
      dot: 'bg-red-600',
    },
  },
  info: {
    solid: {
      container: 'bg-cyan-700 border-2 border-cyan-900',
      text: 'text-white',
      removeButton: 'text-cyan-300 hover:text-white',
    },
    soft: {
      container: 'bg-cyan-100 border-2 border-cyan-700 border-dashed',
      text: 'text-cyan-800',
      removeButton: 'text-cyan-500 hover:text-cyan-800',
    },
    outlined: {
      container: 'border-2 border-cyan-700 border-dashed',
      text: 'text-cyan-800',
      removeButton: 'text-cyan-500 hover:text-cyan-800',
    },
    dot: {
      container: 'bg-cyan-100 border-2 border-cyan-700 border-dashed',
      text: 'text-cyan-800',
      dot: 'bg-cyan-600',
    },
  },
};

const neonStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-gray-800 border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]',
      text: 'text-pink-400',
      removeButton: 'text-pink-400 hover:text-pink-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]',
      text: 'text-pink-400',
      removeButton: 'text-pink-400 hover:text-pink-300',
    },
    outlined: {
      container: 'bg-black border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]',
      text: 'text-pink-400',
      removeButton: 'text-pink-400 hover:text-cyan-400',
    },
    dot: {
      container: 'bg-black border-2 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.3)]',
      text: 'text-pink-400',
      dot: 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]',
    },
  },
  primary: {
    solid: {
      container: 'bg-gray-800 border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      text: 'text-cyan-400',
      removeButton: 'text-cyan-400 hover:text-cyan-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]',
      text: 'text-cyan-400',
      removeButton: 'text-cyan-400 hover:text-cyan-300',
    },
    outlined: {
      container: 'bg-black border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      text: 'text-cyan-400',
      removeButton: 'text-cyan-400 hover:text-pink-400',
    },
    dot: {
      container: 'bg-black border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]',
      text: 'text-cyan-400',
      dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]',
    },
  },
  success: {
    solid: {
      container: 'bg-gray-800 border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      text: 'text-green-400',
      removeButton: 'text-green-400 hover:text-green-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]',
      text: 'text-green-400',
      removeButton: 'text-green-400 hover:text-green-300',
    },
    outlined: {
      container: 'bg-black border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      text: 'text-green-400',
      removeButton: 'text-green-400 hover:text-pink-400',
    },
    dot: {
      container: 'bg-black border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]',
      text: 'text-green-400',
      dot: 'bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]',
    },
  },
  warning: {
    solid: {
      container: 'bg-gray-800 border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]',
      text: 'text-yellow-400',
      removeButton: 'text-yellow-400 hover:text-yellow-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)]',
      text: 'text-yellow-400',
      removeButton: 'text-yellow-400 hover:text-yellow-300',
    },
    outlined: {
      container: 'bg-black border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]',
      text: 'text-yellow-400',
      removeButton: 'text-yellow-400 hover:text-pink-400',
    },
    dot: {
      container: 'bg-black border-2 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.3)]',
      text: 'text-yellow-400',
      dot: 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]',
    },
  },
  error: {
    solid: {
      container: 'bg-gray-800 border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]',
      text: 'text-red-400',
      removeButton: 'text-red-400 hover:text-red-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]',
      text: 'text-red-400',
      removeButton: 'text-red-400 hover:text-red-300',
    },
    outlined: {
      container: 'bg-black border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]',
      text: 'text-red-400',
      removeButton: 'text-red-400 hover:text-pink-400',
    },
    dot: {
      container: 'bg-black border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]',
      text: 'text-red-400',
      dot: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]',
    },
  },
  info: {
    solid: {
      container: 'bg-gray-800 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      text: 'text-purple-400',
      removeButton: 'text-purple-400 hover:text-purple-300',
    },
    soft: {
      container: 'bg-gray-950 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
      text: 'text-purple-400',
      removeButton: 'text-purple-400 hover:text-purple-300',
    },
    outlined: {
      container: 'bg-black border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      text: 'text-purple-400',
      removeButton: 'text-purple-400 hover:text-cyan-400',
    },
    dot: {
      container: 'bg-black border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
      text: 'text-purple-400',
      dot: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
    },
  },
};

const threeDStyles: ThemeColorConfig = {
  default: {
    solid: {
      container: 'bg-gradient-to-b from-slate-400 to-slate-600 shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
      text: 'text-white',
      removeButton: 'text-slate-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
      text: 'text-slate-700',
      removeButton: 'text-slate-400 hover:text-slate-700',
    },
    outlined: {
      container: 'border-2 border-slate-400 shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
      text: 'text-slate-700',
      removeButton: 'text-slate-400 hover:text-slate-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
      text: 'text-slate-700',
      dot: 'bg-gradient-to-b from-slate-400 to-slate-600 shadow-[0_2px_4px_rgba(0,0,0,0.3)]',
    },
  },
  primary: {
    solid: {
      container: 'bg-gradient-to-b from-indigo-500 to-indigo-700 shadow-[0_4px_8px_rgba(79,70,229,0.4)]',
      text: 'text-white',
      removeButton: 'text-indigo-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-indigo-100 to-indigo-200 border border-indigo-300 shadow-[0_2px_4px_rgba(79,70,229,0.2)]',
      text: 'text-indigo-800',
      removeButton: 'text-indigo-500 hover:text-indigo-800',
    },
    outlined: {
      container: 'border-2 border-indigo-500 shadow-[0_2px_4px_rgba(79,70,229,0.2)]',
      text: 'text-indigo-700',
      removeButton: 'text-indigo-500 hover:text-indigo-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-indigo-100 to-indigo-200 border border-indigo-300 shadow-[0_2px_4px_rgba(79,70,229,0.2)]',
      text: 'text-indigo-800',
      dot: 'bg-gradient-to-b from-indigo-500 to-indigo-700 shadow-[0_2px_4px_rgba(79,70,229,0.5)]',
    },
  },
  success: {
    solid: {
      container: 'bg-gradient-to-b from-green-500 to-green-700 shadow-[0_4px_8px_rgba(34,197,94,0.4)]',
      text: 'text-white',
      removeButton: 'text-green-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-green-100 to-green-200 border border-green-300 shadow-[0_2px_4px_rgba(34,197,94,0.2)]',
      text: 'text-green-800',
      removeButton: 'text-green-500 hover:text-green-800',
    },
    outlined: {
      container: 'border-2 border-green-500 shadow-[0_2px_4px_rgba(34,197,94,0.2)]',
      text: 'text-green-700',
      removeButton: 'text-green-500 hover:text-green-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-green-100 to-green-200 border border-green-300 shadow-[0_2px_4px_rgba(34,197,94,0.2)]',
      text: 'text-green-800',
      dot: 'bg-gradient-to-b from-green-500 to-green-700 shadow-[0_2px_4px_rgba(34,197,94,0.5)]',
    },
  },
  warning: {
    solid: {
      container: 'bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_4px_8px_rgba(245,158,11,0.4)]',
      text: 'text-white',
      removeButton: 'text-amber-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 shadow-[0_2px_4px_rgba(245,158,11,0.2)]',
      text: 'text-amber-800',
      removeButton: 'text-amber-500 hover:text-amber-800',
    },
    outlined: {
      container: 'border-2 border-amber-500 shadow-[0_2px_4px_rgba(245,158,11,0.2)]',
      text: 'text-amber-700',
      removeButton: 'text-amber-500 hover:text-amber-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 shadow-[0_2px_4px_rgba(245,158,11,0.2)]',
      text: 'text-amber-800',
      dot: 'bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_2px_4px_rgba(245,158,11,0.5)]',
    },
  },
  error: {
    solid: {
      container: 'bg-gradient-to-b from-red-500 to-red-700 shadow-[0_4px_8px_rgba(239,68,68,0.4)]',
      text: 'text-white',
      removeButton: 'text-red-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-red-100 to-red-200 border border-red-300 shadow-[0_2px_4px_rgba(239,68,68,0.2)]',
      text: 'text-red-800',
      removeButton: 'text-red-500 hover:text-red-800',
    },
    outlined: {
      container: 'border-2 border-red-500 shadow-[0_2px_4px_rgba(239,68,68,0.2)]',
      text: 'text-red-700',
      removeButton: 'text-red-500 hover:text-red-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-red-100 to-red-200 border border-red-300 shadow-[0_2px_4px_rgba(239,68,68,0.2)]',
      text: 'text-red-800',
      dot: 'bg-gradient-to-b from-red-500 to-red-700 shadow-[0_2px_4px_rgba(239,68,68,0.5)]',
    },
  },
  info: {
    solid: {
      container: 'bg-gradient-to-b from-cyan-500 to-cyan-700 shadow-[0_4px_8px_rgba(6,182,212,0.4)]',
      text: 'text-white',
      removeButton: 'text-cyan-200 hover:text-white',
    },
    soft: {
      container: 'bg-gradient-to-b from-cyan-100 to-cyan-200 border border-cyan-300 shadow-[0_2px_4px_rgba(6,182,212,0.2)]',
      text: 'text-cyan-800',
      removeButton: 'text-cyan-500 hover:text-cyan-800',
    },
    outlined: {
      container: 'border-2 border-cyan-500 shadow-[0_2px_4px_rgba(6,182,212,0.2)]',
      text: 'text-cyan-700',
      removeButton: 'text-cyan-500 hover:text-cyan-700',
    },
    dot: {
      container: 'bg-gradient-to-b from-cyan-100 to-cyan-200 border border-cyan-300 shadow-[0_2px_4px_rgba(6,182,212,0.2)]',
      text: 'text-cyan-800',
      dot: 'bg-gradient-to-b from-cyan-500 to-cyan-700 shadow-[0_2px_4px_rgba(6,182,212,0.5)]',
    },
  },
};

const themeStyles: Record<ThemeName, ThemeColorConfig> = {
  minimalist: minimalistStyles,
  dark: darkStyles,
  glassmorphism: glassmorphismStyles,
  neumorphism: minimalistStyles,
  gradient: minimalistStyles,
  brutalist: brutalistStyles,
  retro: retroStyles,
  cyberpunk: darkStyles,
  pastel: minimalistStyles,
  corporate: minimalistStyles,
  playful: playfulStyles,
  '3d': threeDStyles,
  flat: minimalistStyles,
  futuristic: darkStyles,
  luxury: minimalistStyles,
  material: minimalistStyles,
  monochrome: minimalistStyles,
  nature: natureStyles,
  neon: neonStyles,
  sketch: sketchStyles,
};

export function getBadgeStyles(
  theme: ThemeName,
  variant: BadgeVariant,
  color: BadgeColor,
  size: BadgeSize,
  rounded: BadgeRounded
): {
  container: string;
  text: string;
  size: string;
  rounded: string;
  dot?: string;
  removeButton?: string;
} {
  const themeConfig = themeStyles[theme];
  if (!themeConfig) {
    throw new Error(`Theme "${theme}" not found for Badge`);
  }

  const colorConfig = themeConfig[color];
  if (!colorConfig) {
    throw new Error(`Color "${color}" not found for Badge`);
  }

  const variantConfig = colorConfig[variant];
  if (!variantConfig) {
    throw new Error(`Variant "${variant}" not found for Badge`);
  }

  return {
    container: variantConfig.container,
    text: variantConfig.text,
    size: sizeStyles[size],
    rounded: roundedStyles[rounded],
    dot: variantConfig.dot,
    removeButton: variantConfig.removeButton,
  };
}
