import { cn } from '../_shared/utils';
import type {
  DividerProps,
  DividerOrientation,
  DividerVariant,
  DividerThickness,
  DividerSpacing,
  DividerMode
} from './types';

// Base styles for orientation
const orientationStyles: Record<DividerOrientation, string> = {
  horizontal: 'w-full',
  vertical: 'h-full',
};

// Border mode styles
const borderVariantStyles: Record<DividerOrientation, Record<DividerVariant, string>> = {
  horizontal: {
    solid: 'border-t',
    dashed: 'border-t border-dashed',
    dotted: 'border-t border-dotted',
  },
  vertical: {
    solid: 'border-l',
    dashed: 'border-l border-dashed',
    dotted: 'border-l border-dotted',
  },
};

const borderThicknessStyles: Record<DividerOrientation, Record<DividerThickness, string>> = {
  horizontal: {
    thin: 'border-t',
    medium: 'border-t-2',
    thick: 'border-t-4',
  },
  vertical: {
    thin: 'border-l',
    medium: 'border-l-2',
    thick: 'border-l-4',
  },
};

// Background mode styles
const backgroundThicknessStyles: Record<DividerOrientation, Record<DividerThickness, string>> = {
  horizontal: {
    thin: 'h-px',
    medium: 'h-0.5',
    thick: 'h-1',
  },
  vertical: {
    thin: 'w-px',
    medium: 'w-0.5',
    thick: 'w-1',
  },
};

const spacingStyles: Record<DividerOrientation, Record<DividerSpacing, string>> = {
  horizontal: {
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-8',
  },
  vertical: {
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-8',
  },
};

const labelPositionStyles = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

const labelGapStyles: Record<DividerSpacing, string> = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export function Divider({
  mode = 'border',
  orientation = 'horizontal',
  variant = 'solid',
  thickness = 'thin',
  label,
  labelPosition = 'center',
  spacing = 'md',
  className,
}: DividerProps) {
  const baseStyles = orientationStyles[orientation];
  const spacingStyle = spacingStyles[orientation][spacing];

  // Get line styles based on mode
  const getLineStyles = () => {
    if (mode === 'background') {
      return cn(
        baseStyles,
        backgroundThicknessStyles[orientation][thickness],
        className
      );
    }

    // Border mode
    const variantStyle = borderVariantStyles[orientation][variant];
    const thicknessStyle = borderThicknessStyles[orientation][thickness];
    return cn(
      baseStyles,
      variantStyle,
      thicknessStyle,
      className
    );
  };

  // No label - simple line
  if (!label) {
    return (
      <div
        className={cn(
          getLineStyles(),
          spacingStyle
        )}
      />
    );
  }

  // With label - flex layout
  const isHorizontal = orientation === 'horizontal';
  const flexDirection = isHorizontal ? 'flex-row' : 'flex-col';
  const itemsAlign = isHorizontal ? 'items-center' : 'items-stretch';
  const labelAlign = labelPositionStyles[labelPosition];
  const gapStyle = labelGapStyles[spacing];

  return (
    <div
      className={cn(
        'flex',
        flexDirection,
        itemsAlign,
        labelAlign,
        gapStyle,
        spacingStyle
      )}
    >
      {labelPosition !== 'left' && (
        <div className={getLineStyles()} />
      )}
      <div>{label}</div>
      {labelPosition !== 'right' && (
        <div className={getLineStyles()} />
      )}
    </div>
  );
}
