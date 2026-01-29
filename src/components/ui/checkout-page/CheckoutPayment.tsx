import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CheckoutPaymentProps } from './types';

const DEFAULT_PAYMENT_METHODS = [
  { id: 'visa', name: 'Visa', selected: true },
  { id: 'mastercard', name: 'Mastercard', selected: false },
  { id: 'amex', name: 'American Express', selected: false },
];

export function CheckoutPayment({
  methods = DEFAULT_PAYMENT_METHODS,
  theme,
  className,
  onMethodChange,
  onSubmit,
}: CheckoutPaymentProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex gap-3">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodChange?.(method.id)}
            className={cn(
              'flex-1 p-3 text-sm font-medium transition-all',
              themeConfig.base.radius,
              method.selected
                ? cn(
                    themeConfig.variants.primary.background,
                    themeConfig.variants.primary.text,
                    themeConfig.variants.primary.border,
                    'border-2'
                  )
                : cn(
                    themeConfig.base.background,
                    themeConfig.base.text,
                    themeConfig.base.border,
                    'border opacity-60'
                  )
            )}
          >
            {method.name}
          </button>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className={cn(
          'w-full py-4 font-semibold transition-all',
          themeConfig.base.radius,
          themeConfig.base.shadow,
          themeConfig.variants.primary.background,
          themeConfig.variants.primary.text,
          themeConfig.variants.primary.hover
        )}
      >
        Complete Purchase
      </button>

      <p className={cn('text-center text-xs opacity-50', themeConfig.base.text)}>
        Secure checkout powered by Stripe
      </p>
    </div>
  );
}
