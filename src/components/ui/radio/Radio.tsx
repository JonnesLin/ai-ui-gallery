import { forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { useRadioGroup } from './RadioGroup';
import type { RadioProps } from './Radio.types';

const sizeMap = {
  sm: {
    outer: 'w-4 h-4',
    inner: 'w-2 h-2',
    text: 'text-sm',
    description: 'text-xs',
  },
  md: {
    outer: 'w-5 h-5',
    inner: 'w-2.5 h-2.5',
    text: 'text-base',
    description: 'text-sm',
  },
  lg: {
    outer: 'w-6 h-6',
    inner: 'w-3 h-3',
    text: 'text-lg',
    description: 'text-base',
  },
};

const colorMap = {
  primary: {
    border: 'border-blue-500',
    bg: 'bg-blue-500',
    ring: 'focus:ring-blue-500',
  },
  success: {
    border: 'border-green-500',
    bg: 'bg-green-500',
    ring: 'focus:ring-green-500',
  },
  warning: {
    border: 'border-amber-500',
    bg: 'bg-amber-500',
    ring: 'focus:ring-amber-500',
  },
  error: {
    border: 'border-red-500',
    bg: 'bg-red-500',
    ring: 'focus:ring-red-500',
  },
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      size = 'md',
      theme: themeName,
      color = 'primary',
      disabled: disabledProp = false,
      label,
      description,
      className,
      ...props
    },
    ref
  ) => {
    const group = useRadioGroup();
    const theme = getTheme(themeName);

    const name = group.name;
    const checked = group.value === value;
    const disabled = disabledProp || group.disabled;

    const handleChange = () => {
      if (!disabled) {
        group.onChange(value);
      }
    };

    const sizeStyles = sizeMap[size];
    const colorStyles = colorMap[color];

    const outerClasses = cn(
      'rounded-full border-2 flex items-center justify-center transition-all duration-200',
      sizeStyles.outer,
      disabled && 'opacity-40 cursor-not-allowed',
      !disabled && 'cursor-pointer',
      checked ? colorStyles.border : cn(theme.base.border, 'hover:border-opacity-60'),
      !disabled && cn('focus-within:outline-none focus-within:ring-2', colorStyles.ring, 'focus-within:ring-offset-2')
    );

    const innerClasses = cn(
      'rounded-full transition-transform duration-200',
      sizeStyles.inner,
      colorStyles.bg,
      checked ? 'scale-100' : 'scale-0'
    );

    const labelClasses = cn(sizeStyles.text, theme.base.text, disabled && 'opacity-40');
    const descriptionClasses = cn(sizeStyles.description, theme.base.text, 'opacity-60', disabled && 'opacity-40');

    const content = (
      <>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
        <div className={outerClasses}>
          <span className={innerClasses} />
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && <span className={labelClasses}>{label}</span>}
            {description && <span className={descriptionClasses}>{description}</span>}
          </div>
        )}
      </>
    );

    return (
      <label
        className={cn(
          'flex items-start gap-3',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          'group',
          className
        )}
      >
        {content}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
