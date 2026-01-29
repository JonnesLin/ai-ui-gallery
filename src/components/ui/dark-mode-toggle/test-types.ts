import type { DarkModeToggleProps, DarkMode, DarkModeVariant, DarkModeSize } from './types';
import type { ThemeName } from '../_themes/types';

// Type tests
const mode: DarkMode = 'light';
const variant: DarkModeVariant = 'switch';
const size: DarkModeSize = 'md';
const theme: ThemeName = 'minimalist';

const props: DarkModeToggleProps = {
  theme,
  mode,
  onChange: (newMode: DarkMode) => {
    console.log(newMode);
  },
  variant,
  size,
  showLabel: true,
  className: 'custom-class',
};

// Should accept all valid values
const allModes: DarkMode[] = ['light', 'dark', 'system'];
const allVariants: DarkModeVariant[] = ['switch', 'button', 'dropdown'];
const allSizes: DarkModeSize[] = ['sm', 'md', 'lg'];

export { props, allModes, allVariants, allSizes };
