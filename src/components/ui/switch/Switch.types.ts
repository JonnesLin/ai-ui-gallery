import type { ReactNode } from 'react';

export type SwitchSize = 'sm' | 'md' | 'lg';

export type SwitchColor = 'primary' | 'success' | 'warning' | 'error';

export type SwitchLabelPlacement = 'left' | 'right';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
  color?: SwitchColor;
  disabled?: boolean;
  label?: ReactNode;
  labelPlacement?: SwitchLabelPlacement;
  className?: string;
  id?: string;
  name?: string;
  'aria-label'?: string;
}

export interface SwitchStyleConfig {
  container: string;
  track: {
    base: string;
    checked: string;
    unchecked: string;
    disabled: string;
  };
  thumb: {
    base: string;
    checked: string;
    unchecked: string;
    disabled: string;
  };
  label: {
    base: string;
    checked: string;
    unchecked: string;
    disabled: string;
  };
}
