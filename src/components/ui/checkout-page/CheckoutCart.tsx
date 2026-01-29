import { useState } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CheckoutCartProps } from './types';

export function CheckoutCart({
  items,
  subtotal,
  tax,
  shipping,
  total,
  currency = '$',
  theme,
  className,
  onApplyPromo,
}: CheckoutCartProps) {
  const themeConfig = getTheme(theme);
  const [promoCode, setPromoCode] = useState('');

  const formatPrice = (price: number) => `${currency}${price.toFixed(2)}`;

  return (
    <div className={cn(themeConfig.base.background, themeConfig.base.radius, themeConfig.base.shadow, 'p-6', className)}>
      <h2 className={cn('text-xl font-semibold mb-6', themeConfig.base.text)}>Order Summary</h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            {item.image ? (
              <img src={item.image} alt={item.name} className={cn('w-16 h-16 object-cover', themeConfig.base.radius)} />
            ) : (
              <div className={cn('w-16 h-16', themeConfig.base.background, themeConfig.base.radius, 'opacity-50')} />
            )}
            <div className="flex-1">
              <h3 className={cn('font-medium', themeConfig.base.text)}>{item.name}</h3>
              {item.description && (
                <p className={cn('text-sm mt-1 opacity-60', themeConfig.base.text)}>{item.description}</p>
              )}
              <div className="flex justify-between items-center mt-2">
                <span className={cn('text-sm opacity-60', themeConfig.base.text)}>Qty: {item.quantity}</span>
                <span className={cn('font-medium', themeConfig.base.text)}>{formatPrice(item.price)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {onApplyPromo && (
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className={cn(
                'flex-1 px-4 py-2 text-sm',
                themeConfig.base.background,
                themeConfig.base.border,
                themeConfig.base.radius,
                themeConfig.base.text,
                themeConfig.states.focus,
                'outline-none transition-all'
              )}
              placeholder="Promo code"
            />
            <button
              onClick={() => onApplyPromo(promoCode)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-all',
                themeConfig.base.radius,
                themeConfig.variants.secondary.background,
                themeConfig.variants.secondary.text,
                themeConfig.variants.secondary.hover
              )}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      <div className={cn('border-t pt-4 space-y-3', themeConfig.base.border)}>
        <div className={cn('flex justify-between opacity-70', themeConfig.base.text)}>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className={cn('flex justify-between opacity-70', themeConfig.base.text)}>
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className={cn('flex justify-between opacity-70', themeConfig.base.text)}>
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className={cn('flex justify-between font-semibold text-lg pt-3 border-t', themeConfig.base.border, themeConfig.base.text)}>
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
