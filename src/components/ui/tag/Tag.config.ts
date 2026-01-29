import type { ThemeName } from '../_themes';
import type { TagVariant, TagColor, TagSize, TagRounded } from './Tag.types';

interface TagColorStyles {
  solid: string;
  soft: string;
  outlined: string;
}

interface TagThemeConfig {
  colors: Record<TagColor, TagColorStyles>;
  sizes: Record<TagSize, string>;
  rounded: Record<TagRounded, string>;
  closeButton: {
    base: string;
    hover: string;
  };
}

const minimalistConfig: TagThemeConfig = {
  colors: {
    default: {
      solid: 'bg-gray-900 text-white border-gray-900',
      soft: 'bg-gray-100 text-gray-900 border-gray-200',
      outlined: 'bg-transparent text-gray-900 border-gray-900',
    },
    primary: {
      solid: 'bg-blue-600 text-white border-blue-600',
      soft: 'bg-blue-50 text-blue-700 border-blue-200',
      outlined: 'bg-transparent text-blue-600 border-blue-600',
    },
    success: {
      solid: 'bg-green-600 text-white border-green-600',
      soft: 'bg-green-50 text-green-700 border-green-200',
      outlined: 'bg-transparent text-green-600 border-green-600',
    },
    warning: {
      solid: 'bg-amber-600 text-white border-amber-600',
      soft: 'bg-amber-50 text-amber-700 border-amber-200',
      outlined: 'bg-transparent text-amber-600 border-amber-600',
    },
    error: {
      solid: 'bg-red-600 text-white border-red-600',
      soft: 'bg-red-50 text-red-700 border-red-200',
      outlined: 'bg-transparent text-red-600 border-red-600',
    },
    info: {
      solid: 'bg-sky-600 text-white border-sky-600',
      soft: 'bg-sky-50 text-sky-700 border-sky-200',
      outlined: 'bg-transparent text-sky-600 border-sky-600',
    },
  },
  sizes: {
    xs: 'px-2 py-0.5 text-xs gap-1',
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2',
  },
  rounded: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  closeButton: {
    base: 'ml-1 -mr-1 hover:opacity-70 transition-opacity',
    hover: '',
  },
};

const glassmorphismConfig: TagThemeConfig = {
  colors: {
    default: {
      solid: 'backdrop-blur-md bg-white/30 text-white border-white/40 shadow-lg',
      soft: 'backdrop-blur-md bg-white/20 text-white border-white/30 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-white/50',
    },
    primary: {
      solid: 'backdrop-blur-md bg-blue-500/40 text-white border-blue-300/50 shadow-lg',
      soft: 'backdrop-blur-md bg-blue-500/20 text-white border-blue-300/40 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-blue-300/60',
    },
    success: {
      solid: 'backdrop-blur-md bg-green-500/40 text-white border-green-300/50 shadow-lg',
      soft: 'backdrop-blur-md bg-green-500/20 text-white border-green-300/40 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-green-300/60',
    },
    warning: {
      solid: 'backdrop-blur-md bg-amber-500/40 text-white border-amber-300/50 shadow-lg',
      soft: 'backdrop-blur-md bg-amber-500/20 text-white border-amber-300/40 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-amber-300/60',
    },
    error: {
      solid: 'backdrop-blur-md bg-red-500/40 text-white border-red-300/50 shadow-lg',
      soft: 'backdrop-blur-md bg-red-500/20 text-white border-red-300/40 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-red-300/60',
    },
    info: {
      solid: 'backdrop-blur-md bg-sky-500/40 text-white border-sky-300/50 shadow-lg',
      soft: 'backdrop-blur-md bg-sky-500/20 text-white border-sky-300/40 shadow-lg',
      outlined: 'backdrop-blur-md bg-transparent text-white border-sky-300/60',
    },
  },
  sizes: {
    xs: 'px-2.5 py-1 text-xs gap-1',
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-2.5 text-base gap-2',
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  closeButton: {
    base: 'ml-1 -mr-1 hover:bg-white/20 rounded-full p-0.5 transition-colors',
    hover: '',
  },
};

const materialConfig: TagThemeConfig = {
  colors: {
    default: {
      solid: 'bg-white text-gray-700 border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-gray-50 text-gray-700 border-gray-100 shadow-sm',
      outlined: 'bg-transparent text-gray-700 border-gray-300',
    },
    primary: {
      solid: 'bg-blue-600 text-white border-blue-600 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-blue-50 text-blue-700 border-blue-100 shadow-sm',
      outlined: 'bg-transparent text-blue-600 border-blue-600',
    },
    success: {
      solid: 'bg-green-600 text-white border-green-600 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-green-50 text-green-700 border-green-100 shadow-sm',
      outlined: 'bg-transparent text-green-600 border-green-600',
    },
    warning: {
      solid: 'bg-orange-600 text-white border-orange-600 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-orange-50 text-orange-700 border-orange-100 shadow-sm',
      outlined: 'bg-transparent text-orange-600 border-orange-600',
    },
    error: {
      solid: 'bg-red-600 text-white border-red-600 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-red-50 text-red-700 border-red-100 shadow-sm',
      outlined: 'bg-transparent text-red-600 border-red-600',
    },
    info: {
      solid: 'bg-sky-600 text-white border-sky-600 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]',
      soft: 'bg-sky-50 text-sky-700 border-sky-100 shadow-sm',
      outlined: 'bg-transparent text-sky-600 border-sky-600',
    },
  },
  sizes: {
    xs: 'px-2 py-0.5 text-xs gap-1',
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  closeButton: {
    base: 'ml-1 -mr-1 hover:opacity-70 transition-opacity',
    hover: '',
  },
};

const darkConfig: TagThemeConfig = {
  colors: {
    default: {
      solid: 'bg-gray-700 text-white border-gray-600',
      soft: 'bg-gray-800/50 text-gray-200 border-gray-700',
      outlined: 'bg-transparent text-gray-300 border-gray-600',
    },
    primary: {
      solid: 'bg-blue-600 text-white border-blue-500',
      soft: 'bg-blue-900/30 text-blue-300 border-blue-800',
      outlined: 'bg-transparent text-blue-400 border-blue-600',
    },
    success: {
      solid: 'bg-green-600 text-white border-green-500',
      soft: 'bg-green-900/30 text-green-300 border-green-800',
      outlined: 'bg-transparent text-green-400 border-green-600',
    },
    warning: {
      solid: 'bg-amber-600 text-white border-amber-500',
      soft: 'bg-amber-900/30 text-amber-300 border-amber-800',
      outlined: 'bg-transparent text-amber-400 border-amber-600',
    },
    error: {
      solid: 'bg-red-600 text-white border-red-500',
      soft: 'bg-red-900/30 text-red-300 border-red-800',
      outlined: 'bg-transparent text-red-400 border-red-600',
    },
    info: {
      solid: 'bg-sky-600 text-white border-sky-500',
      soft: 'bg-sky-900/30 text-sky-300 border-sky-800',
      outlined: 'bg-transparent text-sky-400 border-sky-600',
    },
  },
  sizes: {
    xs: 'px-2 py-0.5 text-xs gap-1',
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2',
  },
  rounded: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  closeButton: {
    base: 'ml-1 -mr-1 hover:opacity-70 transition-opacity',
    hover: '',
  },
};

const neumorphismConfig: TagThemeConfig = {
  colors: {
    default: {
      solid: 'bg-gray-200 text-gray-700 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-gray-100 text-gray-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-gray-700 border-gray-300 shadow-none',
    },
    primary: {
      solid: 'bg-blue-200 text-blue-800 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-blue-100 text-blue-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-blue-600 border-blue-300',
    },
    success: {
      solid: 'bg-green-200 text-green-800 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-green-100 text-green-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-green-600 border-green-300',
    },
    warning: {
      solid: 'bg-amber-200 text-amber-800 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-amber-100 text-amber-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-amber-600 border-amber-300',
    },
    error: {
      solid: 'bg-red-200 text-red-800 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-red-100 text-red-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-red-600 border-red-300',
    },
    info: {
      solid: 'bg-sky-200 text-sky-800 border-transparent shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]',
      soft: 'bg-sky-100 text-sky-700 border-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)]',
      outlined: 'bg-transparent text-sky-600 border-sky-300',
    },
  },
  sizes: {
    xs: 'px-2 py-0.5 text-xs gap-1',
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2',
  },
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  },
  closeButton: {
    base: 'ml-1 -mr-1 hover:opacity-70 transition-opacity',
    hover: '',
  },
};

export const tagConfigs: Record<ThemeName, TagThemeConfig> = {
  minimalist: minimalistConfig,
  glassmorphism: glassmorphismConfig,
  material: materialConfig,
  dark: darkConfig,
  neumorphism: neumorphismConfig,
  gradient: minimalistConfig,
  brutalist: minimalistConfig,
  retro: minimalistConfig,
  cyberpunk: darkConfig,
  pastel: minimalistConfig,
  corporate: minimalistConfig,
  playful: minimalistConfig,
  '3d': materialConfig,
  flat: minimalistConfig,
  futuristic: darkConfig,
  luxury: materialConfig,
  monochrome: minimalistConfig,
  nature: minimalistConfig,
  neon: darkConfig,
  sketch: minimalistConfig,
};

export function getTagConfig(theme: ThemeName): TagThemeConfig {
  const config = tagConfigs[theme];
  if (!config) {
    throw new Error(`Tag config for theme "${theme}" not found`);
  }
  return config;
}
