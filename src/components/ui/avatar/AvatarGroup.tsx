import { Children, cloneElement, isValidElement } from 'react';
import { cn } from '../_shared/utils';
import type { AvatarGroupProps } from './Avatar.types';

const spacingClasses = {
  tight: '-space-x-3',
  normal: '-space-x-2',
  loose: '-space-x-1',
};

export function AvatarGroup({
  children,
  max,
  spacing = 'normal',
  theme,
  className,
}: AvatarGroupProps) {
  const childArray = Children.toArray(children);
  const visibleChildren = max ? childArray.slice(0, max) : childArray;
  const remainingCount = max && childArray.length > max ? childArray.length - max : 0;

  const isDarkTheme = theme === 'dark' || theme === 'cyberpunk';
  const ringColor = isDarkTheme ? 'ring-gray-950' : 'ring-white';

  return (
    <div className={cn('flex items-center', spacingClasses[spacing], className)}>
      {visibleChildren.map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }
        return cloneElement(child, {
          key: index,
          className: cn((child.props as { className?: string }).className, 'ring-2', ringColor),
        } as any);
      })}
      {remainingCount > 0 && (
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ring-2',
            ringColor,
            isDarkTheme ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-500'
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
