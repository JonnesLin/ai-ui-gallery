import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export type StepDirection = 'horizontal' | 'vertical';
export type StepSize = 'sm' | 'md' | 'lg';
export type StepLabelPlacement = 'horizontal' | 'vertical';

export interface StepItem {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  status?: StepStatus;
  disabled?: boolean;
}

export interface StepsProps {
  current: number;
  theme?: ThemeName;
  direction?: StepDirection;
  size?: StepSize;
  labelPlacement?: StepLabelPlacement;
  progressDot?: boolean;
  onChange?: (current: number) => void;
  children: ReactNode;
  className?: string;
}

export interface StepProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  status?: StepStatus;
  disabled?: boolean;
  className?: string;
}

// Internal props injected by the Steps parent — optional on the component
// signature so users can write <Step title="..." /> without providing them.
// The Steps parent guarantees these are always present at render time.
export interface StepInternalProps {
  index?: number;
  isLast?: boolean;
  actualStatus?: StepStatus;
  direction?: StepDirection;
  size?: StepSize;
  labelPlacement?: StepLabelPlacement;
  progressDot?: boolean;
  onClick?: () => void;
  theme?: ThemeName;
}

export interface StepItemInternal extends StepProps, StepInternalProps {}
