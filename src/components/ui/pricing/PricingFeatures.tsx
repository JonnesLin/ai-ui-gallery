import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { PricingFeaturesProps } from './types';

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PricingFeatures({
  theme,
  features,
  popular = false,
  className
}: PricingFeaturesProps) {
  const themeConfig = getTheme(theme);

  const iconColor = popular
    ? themeConfig.variants.primary.text
    : cn('opacity-60', themeConfig.base.text);

  return (
    <ul className={cn('space-y-3', className)}>
      {features.map((feature) => (
        <li
          key={feature}
          className={cn('flex items-center text-sm', themeConfig.base.text)}
        >
          <CheckIcon className={cn('w-5 h-5 mr-3 flex-shrink-0', iconColor)} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
