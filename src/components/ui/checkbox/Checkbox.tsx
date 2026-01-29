import { useEffect, useRef, forwardRef } from 'react';
import { cn } from '../_shared/utils';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      onChange,
      indeterminate = false,
      disabled = false,
      label,
      description,
      className,
      boxClassName,
      labelClassName,
      descriptionClassName,
      renderIcon,
      renderIndeterminate,
      id,
      name,
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const checkboxRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, checkboxRef]);

    const handleClick = () => {
      if (disabled) return;
      onChange?.(!checked);
    };

    const defaultIcon = (
      <svg
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );

    const defaultIndeterminate = <div className="w-2.5 h-0.5 bg-current" />;

    return (
      <label className={cn('flex items-start cursor-pointer group', disabled && 'cursor-not-allowed', className)}>
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          onChange={handleClick}
          disabled={disabled}
          id={id}
          name={name}
          className="sr-only"
        />
        <div
          onClick={handleClick}
          className={cn(
            'flex items-center justify-center flex-shrink-0',
            boxClassName
          )}
        >
          {checked && !indeterminate && (renderIcon ? renderIcon() : defaultIcon)}
          {indeterminate && (renderIndeterminate ? renderIndeterminate() : defaultIndeterminate)}
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-1">
            {label && <span className={labelClassName}>{label}</span>}
            {description && <span className={descriptionClassName}>{description}</span>}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
