import { forwardRef, Children, isValidElement } from 'react';
import type { ReactElement } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { BreadcrumbProps } from './Breadcrumb.types';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      theme: themeName,
      separator = '/',
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);

    const navClasses = cn(
      'flex items-center gap-2 text-sm',
      theme.base.text,
      className
    );

    const childArray = Children.toArray(children);
    const totalItems = childArray.length;

    let displayChildren = childArray;

    if (maxItems && totalItems > maxItems) {
      const beforeCount = itemsBeforeCollapse;
      const afterCount = itemsAfterCollapse;

      if (beforeCount + afterCount >= totalItems) {
        throw new Error(
          `itemsBeforeCollapse (${beforeCount}) + itemsAfterCollapse (${afterCount}) must be less than total items (${totalItems})`
        );
      }

      const beforeItems = childArray.slice(0, beforeCount);
      const afterItems = childArray.slice(-afterCount);

      const ellipsisElement = (
        <span key="ellipsis" className="text-gray-400">
          ...
        </span>
      );

      displayChildren = [...beforeItems, ellipsisElement, ...afterItems];
    }

    const itemsWithSeparators = displayChildren.reduce<ReactElement[]>((acc, child, index) => {
      if (!isValidElement(child)) {
        return acc;
      }

      if (index > 0) {
        acc.push(
          <BreadcrumbSeparator key={`separator-${index}`}>
            {separator}
          </BreadcrumbSeparator>
        );
      }

      acc.push(child);
      return acc;
    }, []);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={navClasses}
        {...props}
      >
        {itemsWithSeparators}
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
