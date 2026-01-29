import type { ReactNode } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerThickness = 'thin' | 'medium' | 'thick';
export type DividerLabelPosition = 'left' | 'center' | 'right';
export type DividerSpacing = 'sm' | 'md' | 'lg';
export type DividerMode = 'border' | 'background';

export interface DividerProps {
  mode?: DividerMode;
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  thickness?: DividerThickness;
  label?: ReactNode;
  labelPosition?: DividerLabelPosition;
  spacing?: DividerSpacing;
  className?: string;
}
