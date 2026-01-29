import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { PricingCard } from './PricingCard';
import { PricingHeader } from './PricingHeader';
import { PricingPrice } from './PricingPrice';
import { PricingFeatures } from './PricingFeatures';
import type { PricingTableProps } from './types';

export function PricingTable({ theme, plans, className }: PricingTableProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('grid gap-6 md:grid-cols-3', className)}>
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          theme={theme}
          featured={plan.featured}
          popular={plan.popular}
          disabled={plan.disabled}
        >
          <PricingHeader
            theme={theme}
            name={plan.name}
            description={plan.description}
            popular={plan.popular}
            featured={plan.featured}
          />

          <div className="my-6">
            <PricingPrice
              theme={theme}
              amount={plan.amount}
              currency={plan.currency}
              period={plan.period}
              originalAmount={plan.originalAmount}
            />
          </div>

          <PricingFeatures
            theme={theme}
            features={plan.features}
            popular={plan.popular}
            className="mb-8"
          />

          <button
            className={cn(
              'w-full py-3 font-semibold',
              themeConfig.base.radius,
              plan.popular || plan.featured
                ? cn(
                    themeConfig.variants.primary.background,
                    themeConfig.variants.primary.text,
                    themeConfig.variants.primary.border,
                    themeConfig.variants.primary.hover
                  )
                : cn(
                    themeConfig.variants.secondary.background,
                    themeConfig.variants.secondary.text,
                    themeConfig.variants.secondary.border,
                    themeConfig.variants.secondary.hover
                  ),
              themeConfig.states.hover,
              plan.disabled && themeConfig.states.disabled
            )}
            disabled={plan.disabled}
          >
            {plan.disabled ? 'Coming Soon' : 'Get Started'}
          </button>
        </PricingCard>
      ))}
    </div>
  );
}
