import { forwardRef } from 'react';
import { cn } from '../_shared/utils';
import type { BreadcrumbSeparatorProps } from './Breadcrumb.types';

export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={cn('inline-flex items-center', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
