'use client';

import { useState, useCallback, useId } from 'react';
import { cn } from '../_shared/utils';
import type { SwitchProps, SwitchSize, SwitchColor } from './Switch.types';

const SIZE_CONFIGS: Record<SwitchSize, { track: string; thumb: string; thumbChecked: string }> = {
  sm: {
    track: 'w-10 h-6',
    thumb: 'w-5 h-5 top-0.5',
    thumbChecked: 'left-5',
  },
  md: {
    track: 'w-14 h-8',
    thumb: 'w-6 h-6 top-1',
    thumbChecked: 'left-7',
  },
  lg: {
    track: 'w-20 h-10',
    thumb: 'w-8 h-8 top-1',
    thumbChecked: 'left-11',
  },
};

const COLOR_CONFIGS: Record<SwitchColor, { checked: string; unchecked: string }> = {
  primary: {
    checked: 'bg-blue-500',
    unchecked: 'bg-gray-300',
  },
  success: {
    checked: 'bg-green-500',
    unchecked: 'bg-gray-300',
  },
  warning: {
    checked: 'bg-orange-500',
    unchecked: 'bg-gray-300',
  },
  error: {
    checked: 'bg-red-500',
    unchecked: 'bg-gray-300',
  },
};

export function Switch({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  size = 'md',
  color = 'primary',
  disabled = false,
  label,
  labelPlacement = 'right',
  className,
  id: providedId,
  name,
  'aria-label': ariaLabel,
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const generatedId = useId();
  const id = providedId || generatedId;

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = useCallback(() => {
    if (disabled) return;

    const newChecked = !checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  }, [checked, disabled, isControlled, onChange]);

  const sizeConfig = SIZE_CONFIGS[size];
  const colorConfig = COLOR_CONFIGS[color];

  const trackClasses = cn(
    'relative rounded-full transition-colors duration-200',
    sizeConfig.track,
    checked ? colorConfig.checked : colorConfig.unchecked,
    disabled && 'opacity-50 cursor-not-allowed',
    !disabled && 'cursor-pointer'
  );

  const thumbClasses = cn(
    'absolute rounded-full bg-white transition-all duration-200',
    sizeConfig.thumb,
    checked ? sizeConfig.thumbChecked : 'left-0.5',
    disabled && 'bg-gray-200'
  );

  const labelClasses = cn(
    'text-sm font-medium transition-colors duration-200',
    checked ? 'text-gray-900' : 'text-gray-600',
    disabled && 'opacity-50 cursor-not-allowed',
    !disabled && 'cursor-pointer'
  );

  const switchElement = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      id={id}
      name={name}
      disabled={disabled}
      onClick={handleToggle}
      className={trackClasses}
    >
      <span className={thumbClasses} />
    </button>
  );

  if (!label) {
    return <div className={className}>{switchElement}</div>;
  }

  const labelElement = (
    <label htmlFor={id} className={labelClasses}>
      {label}
    </label>
  );

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      {labelPlacement === 'left' && labelElement}
      {switchElement}
      {labelPlacement === 'right' && labelElement}
    </div>
  );
}
