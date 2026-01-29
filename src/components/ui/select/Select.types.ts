export type SelectValue = string | string[];

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps {
  value?: SelectValue;
  defaultValue?: SelectValue;
  onChange?: (value: SelectValue) => void;
  options: SelectOption[] | SelectGroup[];
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  placeholder?: string;
  size?: SelectSize;
  theme?: import('../_themes/types').ThemeName;
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  className?: string;
}

export interface SelectContextValue {
  value: SelectValue;
  multiple: boolean;
  disabled: boolean;
  isOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleOpen: () => void;
  selectOption: (optionValue: string) => void;
  clearValue: () => void;
}
