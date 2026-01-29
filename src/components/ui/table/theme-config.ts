import type { ThemeName } from '../_themes/types';
import type { TableVariant, TableSize } from './types';

export interface TableThemeConfig {
  table: {
    base: string;
    variants: Record<TableVariant, string>;
    sizes: Record<TableSize, string>;
  };
  header: {
    base: string;
    cell: string;
  };
  body: {
    base: string;
  };
  row: {
    base: string;
    hover: string;
    selected: string;
    striped: {
      even: string;
      odd: string;
    };
  };
  cell: {
    base: string;
    sizes: Record<TableSize, string>;
    align: {
      left: string;
      center: string;
      right: string;
    };
  };
  loading: {
    overlay: string;
    spinner: string;
  };
}

const minimalistTableTheme: TableThemeConfig = {
  table: {
    base: 'w-full min-w-[640px]',
    variants: {
      simple: '',
      striped: '',
      bordered: 'border border-gray-200',
    },
    sizes: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  header: {
    base: 'border-b border-gray-200',
    cell: 'text-xs font-medium text-gray-400 uppercase tracking-wider',
  },
  body: {
    base: 'divide-y divide-gray-100',
  },
  row: {
    base: 'transition-colors duration-200',
    hover: 'hover:bg-gray-50',
    selected: 'bg-gray-100',
    striped: {
      even: 'bg-white',
      odd: 'bg-gray-50',
    },
  },
  cell: {
    base: 'font-light text-gray-900',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-4',
      lg: 'px-6 py-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  loading: {
    overlay: 'absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center',
    spinner: 'animate-spin h-8 w-8 border-4 border-gray-200 border-t-gray-900 rounded-full',
  },
};

const darkTableTheme: TableThemeConfig = {
  table: {
    base: 'w-full min-w-[640px]',
    variants: {
      simple: '',
      striped: '',
      bordered: 'border border-gray-700',
    },
    sizes: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  header: {
    base: 'border-b border-gray-700 bg-gray-800',
    cell: 'text-xs font-semibold text-gray-300 uppercase tracking-wider',
  },
  body: {
    base: 'divide-y divide-gray-700',
  },
  row: {
    base: 'transition-colors duration-200',
    hover: 'hover:bg-gray-800',
    selected: 'bg-gray-700',
    striped: {
      even: 'bg-gray-900',
      odd: 'bg-gray-800',
    },
  },
  cell: {
    base: 'text-gray-200',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-4',
      lg: 'px-6 py-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  loading: {
    overlay: 'absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center',
    spinner: 'animate-spin h-8 w-8 border-4 border-gray-700 border-t-gray-300 rounded-full',
  },
};

const glassmorphismTableTheme: TableThemeConfig = {
  table: {
    base: 'w-full min-w-[640px]',
    variants: {
      simple: '',
      striped: '',
      bordered: 'border border-white/20',
    },
    sizes: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  header: {
    base: 'border-b border-white/20 backdrop-blur-md bg-white/10',
    cell: 'text-xs font-semibold text-white uppercase tracking-wider',
  },
  body: {
    base: 'divide-y divide-white/10',
  },
  row: {
    base: 'transition-all duration-200 backdrop-blur-sm',
    hover: 'hover:bg-white/10',
    selected: 'bg-white/15',
    striped: {
      even: 'bg-white/5',
      odd: 'bg-white/0',
    },
  },
  cell: {
    base: 'text-white/90',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-4',
      lg: 'px-6 py-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  loading: {
    overlay: 'absolute inset-0 backdrop-blur-sm bg-white/20 flex items-center justify-center',
    spinner: 'animate-spin h-8 w-8 border-4 border-white/30 border-t-white rounded-full',
  },
};

const neumorphismTableTheme: TableThemeConfig = {
  table: {
    base: 'w-full min-w-[640px]',
    variants: {
      simple: '',
      striped: '',
      bordered: 'border border-gray-300 shadow-neumorphism-inset',
    },
    sizes: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  header: {
    base: 'shadow-neumorphism-sm bg-gray-100',
    cell: 'text-xs font-semibold text-gray-700 uppercase tracking-wider',
  },
  body: {
    base: '',
  },
  row: {
    base: 'transition-all duration-300',
    hover: 'hover:shadow-neumorphism-inset',
    selected: 'shadow-neumorphism-inset bg-gray-200',
    striped: {
      even: 'bg-gray-100',
      odd: 'bg-gray-50',
    },
  },
  cell: {
    base: 'text-gray-800',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-4',
      lg: 'px-6 py-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  loading: {
    overlay: 'absolute inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center',
    spinner: 'animate-spin h-8 w-8 border-4 border-gray-300 border-t-gray-600 rounded-full shadow-neumorphism',
  },
};

const flatTableTheme: TableThemeConfig = {
  table: {
    base: 'w-full',
    variants: {
      simple: '',
      striped: '',
      bordered: 'border-2 border-gray-800',
    },
    sizes: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  header: {
    base: 'bg-blue-500',
    cell: 'text-sm font-bold text-white uppercase',
  },
  body: {
    base: '',
  },
  row: {
    base: 'transition-colors duration-200',
    hover: 'hover:bg-blue-50',
    selected: 'bg-blue-100',
    striped: {
      even: 'bg-white',
      odd: 'bg-gray-50',
    },
  },
  cell: {
    base: 'text-gray-800',
    sizes: {
      sm: 'px-3 py-2',
      md: 'px-4 py-4',
      lg: 'px-6 py-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  loading: {
    overlay: 'absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center',
    spinner: 'animate-spin h-8 w-8 border-4 border-blue-200 border-t-blue-500 rounded-full',
  },
};

export const tableThemes: Record<ThemeName, TableThemeConfig> = {
  minimalist: minimalistTableTheme,
  dark: darkTableTheme,
  glassmorphism: glassmorphismTableTheme,
  neumorphism: neumorphismTableTheme,
  flat: flatTableTheme,
  gradient: minimalistTableTheme,
  brutalist: minimalistTableTheme,
  retro: minimalistTableTheme,
  cyberpunk: darkTableTheme,
  pastel: minimalistTableTheme,
  corporate: minimalistTableTheme,
  playful: minimalistTableTheme,
  '3d': neumorphismTableTheme,
  futuristic: darkTableTheme,
  luxury: darkTableTheme,
  material: minimalistTableTheme,
  monochrome: minimalistTableTheme,
  nature: minimalistTableTheme,
  neon: darkTableTheme,
  sketch: minimalistTableTheme,
};

export function getTableTheme(theme: ThemeName): TableThemeConfig {
  const config = tableThemes[theme];
  if (!config) {
    throw new Error(`Table theme configuration for "${theme}" not found`);
  }
  return config;
}
