import { forwardRef } from 'react';
import { cn } from '../_shared/utils';
import type { BreadcrumbItemProps } from './Breadcrumb.types';

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ href, icon, current = false, className, children, onClick, ...props }, ref) => {
    const Element = href && !current ? 'a' : 'span';

    const itemClasses = cn(
      'inline-flex items-center gap-1.5 transition-colors',
      className
    );

    return (
      <Element
        ref={Element === 'a' ? ref : undefined}
        href={href && !current ? href : undefined}
        aria-current={current ? 'page' : undefined}
        className={itemClasses}
        onClick={!current ? onClick : undefined}
        {...props}
      >
        {icon}
        {children}
      </Element>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
