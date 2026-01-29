import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProductInfoProps } from './types';

export function ProductInfo({
  theme,
  name,
  price,
  originalPrice,
  currency,
  rating,
  reviewCount,
  description,
  badge,
}: ProductInfoProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className="space-y-6">
      <div>
        {badge ? (
          <div
            className={cn(
              'inline-block px-4 py-2 text-sm font-semibold mb-4',
              themeConfig.variants.warning.background,
              themeConfig.variants.warning.text,
              themeConfig.base.radius
            )}
          >
            {badge}
          </div>
        ) : null}

        <h1
          className={cn(
            'text-4xl lg:text-5xl font-bold mb-4',
            themeConfig.base.text
          )}
        >
          {name}
        </h1>

        <p
          className={cn(
            'text-lg leading-relaxed',
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      </div>

      <div className="flex items-baseline gap-4">
        <span
          className={cn(
            'text-4xl font-bold',
            themeConfig.base.text
          )}
        >
          {currency}{price}
        </span>

        {originalPrice ? (
          <span className="text-xl text-gray-500 line-through">
            {currency}{originalPrice}
          </span>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'text-xl',
                i < Math.floor(rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              )}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-gray-600">
          ({reviewCount} reviews)
        </span>
      </div>
    </div>
  );
}
