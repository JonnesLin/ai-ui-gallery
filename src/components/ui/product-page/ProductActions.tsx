import { useState } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProductActionsProps } from './types';

export function ProductActions({
  theme,
  variants,
  inStock,
  onAddToCart,
  onVariantChange,
}: ProductActionsProps) {
  const themeConfig = getTheme(theme);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const handleVariantSelect = (variantName: string, optionId: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantName]: optionId,
    }));
    onVariantChange?.(variantName, optionId);
  };

  return (
    <div className="space-y-6">
      {variants.map((variant) => (
        <div key={variant.name}>
          <label
            className={cn(
              'text-sm font-semibold mb-3 block',
              themeConfig.base.text
            )}
          >
            {variant.name}
          </label>

          <div className="flex flex-wrap gap-3">
            {variant.options.map((option) => {
              const isSelected = selectedVariants[variant.name] === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleVariantSelect(variant.name, option.id)}
                  className={cn(
                    'px-6 py-3 font-medium transition-all',
                    themeConfig.base.radius,
                    themeConfig.states.hover,
                    themeConfig.states.focus,
                    isSelected
                      ? cn(
                          themeConfig.variants.primary.background,
                          themeConfig.variants.primary.text,
                          themeConfig.variants.primary.border,
                          themeConfig.variants.primary.shadow
                        )
                      : cn(
                          themeConfig.base.background,
                          themeConfig.base.text,
                          'border-2',
                          themeConfig.base.border,
                          themeConfig.variants.ghost.hover
                        )
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        onClick={onAddToCart}
        disabled={!inStock}
        className={cn(
          'w-full py-4 font-bold text-lg transition-all',
          themeConfig.base.radius,
          themeConfig.states.hover,
          themeConfig.states.focus,
          inStock
            ? cn(
                themeConfig.variants.primary.background,
                themeConfig.variants.primary.text,
                themeConfig.variants.primary.hover,
                themeConfig.variants.primary.shadow
              )
            : themeConfig.states.disabled
        )}
      >
        {inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}
