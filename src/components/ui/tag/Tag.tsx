import { forwardRef } from 'react';
import { cn } from '../_shared/utils';
import { getTagConfig } from './Tag.config';
import type { TagProps } from './Tag.types';

const CloseIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = 'solid',
      color = 'default',
      size = 'md',
      theme,
      rounded = 'md',
      closable = false,
      onClose,
      icon,
      clickable = false,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const config = getTagConfig(theme);
    const colorStyles = config.colors[color][variant];
    const sizeStyles = config.sizes[size];
    const roundedStyles = config.rounded[rounded];

    const Component = clickable ? 'button' : 'span';

    const baseClasses = cn(
      'inline-flex items-center font-medium',
      'border transition-all',
      colorStyles,
      sizeStyles,
      roundedStyles,
      clickable && 'cursor-pointer hover:opacity-80',
    );

    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onClose) {
        onClose();
      }
    };

    return (
      <Component
        ref={ref as any}
        className={cn(baseClasses, className)}
        onClick={clickable ? onClick : undefined}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className={cn('flex-shrink-0', config.closeButton.base)}
            aria-label="Remove"
          >
            <CloseIcon />
          </button>
        )}
      </Component>
    );
  }
);

Tag.displayName = 'Tag';
