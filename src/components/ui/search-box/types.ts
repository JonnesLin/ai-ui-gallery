import type { ThemeName } from '../_themes';

export type SearchBoxSize = 'sm' | 'md' | 'lg';

export interface SearchBoxProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  size?: SearchBoxSize;
  theme: ThemeName;
  loading?: boolean;
  clearable?: boolean;
  suggestions?: string[];
  showSuggestions?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface SearchBoxSuggestion {
  value: string;
  icon?: React.ReactNode;
}
