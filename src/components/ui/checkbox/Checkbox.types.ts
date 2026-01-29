import type { ReactNode } from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  description?: string;
  className?: string;
  boxClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  renderIcon?: () => ReactNode;
  renderIndeterminate?: () => ReactNode;
  id?: string;
  name?: string;
}

export interface CheckboxGroupProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export interface CheckboxGroupItemProps {
  value: string;
  label?: ReactNode;
  description?: string;
  disabled?: boolean;
  className?: string;
  boxClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  renderIcon?: () => ReactNode;
  renderIndeterminate?: () => ReactNode;
}
