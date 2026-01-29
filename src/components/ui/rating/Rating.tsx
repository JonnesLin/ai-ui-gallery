'use client';

import { useState, useCallback } from 'react';
import { cn } from '../_shared/utils';
import { RatingStar } from './RatingStar';
import type { RatingProps } from './types';

export function Rating({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  max = 5,
  size = 'md',
  precision = 1,
  readOnly = false,
  disabled = false,
  icon,
  emptyIcon,
  color = '#fbbf24',
  emptyColor = '#d1d5db',
  showValue = false,
  className,
}: RatingProps) {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(0);

  const currentValue = isControlled ? controlledValue : uncontrolledValue;
  const displayValue = hoverValue || currentValue;

  const handleStarClick = useCallback(
    (starValue: number) => {
      if (disabled || readOnly) {
        return;
      }

      if (!isControlled) {
        setUncontrolledValue(starValue);
      }

      if (onChange) {
        onChange(starValue);
      }
    },
    [disabled, readOnly, isControlled, onChange]
  );

  const handleMouseMove = useCallback(
    (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || readOnly) {
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;

      let newValue: number;
      if (precision === 0.5) {
        newValue = percentage < 0.5 ? index + 0.5 : index + 1;
      } else {
        newValue = index + 1;
      }

      setHoverValue(newValue);
    },
    [disabled, readOnly, precision]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverValue(0);
  }, []);

  const calculateFillPercentage = (starIndex: number): number => {
    const diff = displayValue - starIndex;
    if (diff >= 1) {
      return 100;
    }
    if (diff <= 0) {
      return 0;
    }
    return diff * 100;
  };

  const stars = Array.from({ length: max }, (_, i) => i);

  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <div className="inline-flex items-center gap-0.5">
        {stars.map((starIndex) => (
          <RatingStar
            key={starIndex}
            index={starIndex + 1}
            fillPercentage={calculateFillPercentage(starIndex)}
            size={size}
            color={color}
            emptyColor={emptyColor}
            icon={icon}
            emptyIcon={emptyIcon}
            onClick={() => handleStarClick(starIndex + 1)}
            onMouseMove={(e) => handleMouseMove(starIndex, e)}
            onMouseLeave={handleMouseLeave}
            disabled={disabled}
            readOnly={readOnly}
          />
        ))}
      </div>
      {showValue && (
        <span
          className={cn(
            'ml-2 font-medium',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-lg'
          )}
        >
          {displayValue.toFixed(1)}
        </span>
      )}
    </div>
  );
}
