import type { CookieBannerProps } from './types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function CookieBanner({
  theme: themeName,
  position = 'bottom',
  variant = 'bar',
  title,
  description,
  privacyPolicyUrl,
  onAccept,
  onDecline,
  onCustomize,
  showDecline = false,
  showCustomize = false,
  className,
}: CookieBannerProps) {
  const theme = getTheme(themeName);

  const positionClasses = {
    top: 'top-0 left-0 right-0',
    bottom: 'bottom-0 left-0 right-0',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const variantClasses = {
    bar: 'w-full',
    popup: 'max-w-md rounded-lg',
    floating: 'max-w-4xl rounded-2xl',
  };

  const containerClasses = cn(
    'fixed z-50',
    positionClasses[position],
    variantClasses[variant],
    className
  );

  const contentWrapperClasses = cn(
    theme.base.background,
    theme.base.border,
    theme.base.shadow,
    theme.base.radius,
    'px-6 py-5',
    variant === 'bar' && 'border-t'
  );

  const layoutClasses = cn(
    'flex items-center justify-between gap-5',
    variant === 'bar' ? 'flex-col md:flex-row' : 'flex-col'
  );

  const textClasses = cn(
    theme.base.text,
    'text-sm leading-relaxed',
    variant === 'bar' ? 'text-center md:text-left' : 'text-center'
  );

  const buttonGroupClasses = cn(
    'flex gap-3 shrink-0',
    variant === 'bar' ? '' : 'w-full justify-center'
  );

  return (
    <div className={containerClasses}>
      <div className={contentWrapperClasses}>
        {variant === 'bar' && (
          <div className="max-w-7xl mx-auto">
            <div className={layoutClasses}>
              <div className="flex-1">
                {title && (
                  <h3 className={cn(theme.base.text, 'text-base font-semibold mb-1')}>
                    {title}
                  </h3>
                )}
                <div className={textClasses}>
                  {description}
                  {privacyPolicyUrl && (
                    <>
                      {' '}
                      <a
                        href={privacyPolicyUrl}
                        className={cn(
                          theme.variants.primary.text,
                          'hover:underline'
                        )}
                      >
                        Learn more
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className={buttonGroupClasses}>
                {showCustomize && onCustomize && (
                  <button
                    onClick={onCustomize}
                    className={cn(
                      'px-5 py-2.5 text-sm font-medium',
                      theme.variants.secondary.background,
                      theme.variants.secondary.text,
                      theme.variants.secondary.border,
                      theme.variants.secondary.shadow,
                      theme.base.radius,
                      theme.variants.secondary.hover,
                      theme.states.hover
                    )}
                  >
                    Settings
                  </button>
                )}
                {showDecline && onDecline && (
                  <button
                    onClick={onDecline}
                    className={cn(
                      'px-5 py-2.5 text-sm font-medium',
                      theme.variants.ghost.background,
                      theme.variants.ghost.text,
                      theme.variants.ghost.border,
                      theme.base.radius,
                      theme.variants.ghost.hover,
                      theme.states.hover
                    )}
                  >
                    Decline
                  </button>
                )}
                <button
                  onClick={onAccept}
                  className={cn(
                    'px-5 py-2.5 text-sm font-medium',
                    theme.variants.primary.background,
                    theme.variants.primary.text,
                    theme.variants.primary.border,
                    theme.variants.primary.shadow,
                    theme.base.radius,
                    theme.variants.primary.hover,
                    theme.states.hover
                  )}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}

        {(variant === 'popup' || variant === 'floating') && (
          <div className={layoutClasses}>
            <div className="w-full">
              {title && (
                <h3 className={cn(theme.base.text, 'text-base font-semibold mb-2 text-center')}>
                  {title}
                </h3>
              )}
              <div className={textClasses}>
                {description}
                {privacyPolicyUrl && (
                  <>
                    {' '}
                    <a
                      href={privacyPolicyUrl}
                      className={cn(
                        theme.variants.primary.text,
                        'hover:underline'
                      )}
                    >
                      Learn more
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className={buttonGroupClasses}>
              {showCustomize && onCustomize && (
                <button
                  onClick={onCustomize}
                  className={cn(
                    'px-5 py-2.5 text-sm font-medium',
                    theme.variants.secondary.background,
                    theme.variants.secondary.text,
                    theme.variants.secondary.border,
                    theme.variants.secondary.shadow,
                    theme.base.radius,
                    theme.variants.secondary.hover,
                    theme.states.hover
                  )}
                >
                  Settings
                </button>
              )}
              {showDecline && onDecline && (
                <button
                  onClick={onDecline}
                  className={cn(
                    'px-5 py-2.5 text-sm font-medium',
                    theme.variants.ghost.background,
                    theme.variants.ghost.text,
                    theme.variants.ghost.border,
                    theme.base.radius,
                    theme.variants.ghost.hover,
                    theme.states.hover
                  )}
                >
                  Decline
                </button>
              )}
              <button
                onClick={onAccept}
                className={cn(
                  'px-5 py-2.5 text-sm font-medium',
                  theme.variants.primary.background,
                  theme.variants.primary.text,
                  theme.variants.primary.border,
                  theme.variants.primary.shadow,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
