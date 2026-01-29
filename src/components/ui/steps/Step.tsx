import type { StepItemInternal } from './types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function Step({
  title,
  description,
  icon,
  index = 0,
  isLast = false,
  actualStatus = 'wait',
  direction = 'horizontal',
  size = 'md',
  labelPlacement = 'vertical',
  progressDot = false,
  onClick,
  disabled,
  theme = 'minimalist',
  className,
}: StepItemInternal) {
  const themeConfig = getTheme(theme);

  const isHorizontal = direction === 'horizontal';
  const isVertical = direction === 'vertical';
  const isVerticalLabel = labelPlacement === 'vertical';

  const sizeClasses = {
    sm: {
      circle: progressDot ? 'w-2 h-2' : 'w-8 h-8 text-xs',
      text: 'text-xs',
      description: 'text-[10px]',
      gap: 'gap-2',
      connectorHeight: 'h-px',
      connectorWidth: 'w-px',
      connectorTop: progressDot ? 'top-1' : 'top-4',
      verticalConnectorHeight: 'h-12',
    },
    md: {
      circle: progressDot ? 'w-2.5 h-2.5' : 'w-10 h-10 text-sm',
      text: 'text-sm',
      description: 'text-xs',
      gap: 'gap-3',
      connectorHeight: 'h-px',
      connectorWidth: 'w-px',
      connectorTop: progressDot ? 'top-1.5' : 'top-5',
      verticalConnectorHeight: 'h-16',
    },
    lg: {
      circle: progressDot ? 'w-3 h-3' : 'w-12 h-12 text-base',
      text: 'text-base',
      description: 'text-sm',
      gap: 'gap-4',
      connectorHeight: 'h-0.5',
      connectorWidth: 'w-0.5',
      connectorTop: progressDot ? 'top-1.5' : 'top-6',
      verticalConnectorHeight: 'h-20',
    },
  };

  const currentSize = sizeClasses[size];

  const getCircleStyles = () => {
    const baseStyles = cn(
      'rounded-full flex items-center justify-center font-medium transition-all flex-shrink-0 z-10',
      currentSize.circle,
      themeConfig.base.radius,
      disabled && themeConfig.states.disabled
    );

    if (progressDot) {
      if (actualStatus === 'finish') {
        return cn(baseStyles, themeConfig.variants.primary.background, themeConfig.base.border);
      }
      if (actualStatus === 'process') {
        return cn(
          baseStyles,
          themeConfig.variants.primary.background,
          'ring-4',
          theme === 'minimalist' ? 'ring-gray-900/20' : 'ring-current ring-opacity-30'
        );
      }
      if (actualStatus === 'error') {
        return cn(baseStyles, themeConfig.variants.danger.background, themeConfig.variants.danger.border);
      }
      return cn(baseStyles, 'bg-gray-200 dark:bg-gray-700');
    }

    if (actualStatus === 'finish') {
      return cn(
        baseStyles,
        themeConfig.variants.success.background,
        themeConfig.variants.success.text,
        themeConfig.variants.success.border
      );
    }
    if (actualStatus === 'process') {
      return cn(
        baseStyles,
        themeConfig.variants.primary.background,
        themeConfig.variants.primary.text,
        'ring-4',
        theme === 'minimalist' ? 'ring-gray-900/20' : 'ring-current ring-opacity-30'
      );
    }
    if (actualStatus === 'error') {
      return cn(
        baseStyles,
        themeConfig.variants.danger.background,
        themeConfig.variants.danger.text,
        themeConfig.variants.danger.border
      );
    }
    return cn(baseStyles, 'bg-gray-100 dark:bg-gray-800', themeConfig.base.text, 'opacity-50');
  };

  const getConnectorColor = () => {
    if (actualStatus === 'finish') {
      return themeConfig.variants.success.background;
    }
    return 'bg-gray-200 dark:bg-gray-700';
  };

  const getTitleStyles = () => {
    return cn(
      'font-medium transition-colors',
      currentSize.text,
      actualStatus === 'wait' && 'opacity-50',
      actualStatus === 'error' && themeConfig.variants.danger.text,
      (actualStatus === 'process' || actualStatus === 'finish') && themeConfig.base.text
    );
  };

  const getDescriptionStyles = () => {
    return cn(
      'transition-colors mt-1',
      currentSize.description,
      themeConfig.base.text,
      'opacity-60'
    );
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  if (isHorizontal) {
    return (
      <div
        className={cn(
          'flex-1 flex flex-col items-center relative',
          onClick && !disabled && 'cursor-pointer',
          className
        )}
        onClick={handleClick}
      >
        <div className={getCircleStyles()}>
          {!progressDot && (
            <>
              {icon || (actualStatus === 'finish' ? '✓' : actualStatus === 'error' ? '✕' : index + 1)}
            </>
          )}
        </div>

        {!isLast && (
          <div
            className={cn(
              'absolute left-1/2 w-full -z-0 transition-all',
              currentSize.connectorTop,
              currentSize.connectorHeight,
              getConnectorColor()
            )}
          />
        )}

        <div className={cn('mt-3 text-center', currentSize.gap)}>
          <div className={getTitleStyles()}>{title}</div>
          {description && <div className={getDescriptionStyles()}>{description}</div>}
        </div>
      </div>
    );
  }

  if (isVertical) {
    return (
      <div
        className={cn(
          'flex',
          currentSize.gap,
          onClick && !disabled && 'cursor-pointer',
          className
        )}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center">
          <div className={getCircleStyles()}>
            {!progressDot && (
              <>
                {icon || (actualStatus === 'finish' ? '✓' : actualStatus === 'error' ? '✕' : index + 1)}
              </>
            )}
          </div>

          {!isLast && (
            <div
              className={cn(
                'mt-2 transition-all',
                currentSize.connectorWidth,
                currentSize.verticalConnectorHeight,
                getConnectorColor()
              )}
            />
          )}
        </div>

        <div className={cn('pb-16', isLast && 'pb-0')}>
          <div className={getTitleStyles()}>{title}</div>
          {description && <div className={getDescriptionStyles()}>{description}</div>}
        </div>
      </div>
    );
  }

  return null;
}
