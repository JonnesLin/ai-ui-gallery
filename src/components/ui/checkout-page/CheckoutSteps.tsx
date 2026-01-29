import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CheckoutStepsProps } from './types';

export function CheckoutSteps({ steps, currentStep, theme, className }: CheckoutStepsProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex items-center gap-3 flex-1">
              <div
                className={cn(
                  'flex items-center justify-center rounded-full transition-all',
                  themeConfig.sizes.md,
                  isActive && themeConfig.variants.primary.background,
                  isActive && themeConfig.variants.primary.text,
                  isCompleted && themeConfig.variants.success.background,
                  isCompleted && themeConfig.variants.success.text,
                  !isActive && !isCompleted && themeConfig.base.background,
                  !isActive && !isCompleted && 'opacity-50'
                )}
              >
                {isCompleted ? '✓' : step.number}
              </div>
              <span
                className={cn(
                  'text-sm font-medium transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-50'
                )}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'h-px flex-1 mx-4 transition-opacity',
                  themeConfig.base.border,
                  isCompleted ? 'opacity-100' : 'opacity-30'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
