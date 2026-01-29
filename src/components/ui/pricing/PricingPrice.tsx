import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { PricingPriceProps } from './types';

const PERIOD_LABELS = {
  monthly: '/month',
  yearly: '/year',
  'one-time': ''
} as const;

export function PricingPrice({
  theme,
  amount,
  currency = '$',
  period = 'monthly',
  originalAmount,
  className
}: PricingPriceProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <div className="flex items-baseline">
        <span className={cn('text-5xl font-bold', themeConfig.base.text)}>
          {currency}{amount}
        </span>
        <span className={cn('text-sm opacity-60 ml-1', themeConfig.base.text)}>
          {PERIOD_LABELS[period]}
        </span>
      </div>
      {originalAmount && originalAmount > amount && (
        <span className={cn('text-sm line-through opacity-50', themeConfig.base.text)}>
          {currency}{originalAmount}
        </span>
      )}
    </div>
  );
}
