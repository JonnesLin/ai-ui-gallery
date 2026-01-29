import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CheckoutPageProps } from './types';

export function CheckoutPage({ theme, className, children }: CheckoutPageProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('min-h-screen', themeConfig.pageBackground, className)}>
      <header className={cn('border-b py-6', themeConfig.base.border)}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className={cn('text-2xl sm:text-3xl font-bold', themeConfig.base.text)}>Checkout</h1>
          <p className={cn('mt-2 opacity-60', themeConfig.base.text)}>Complete your purchase</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">{children}</main>
    </div>
  );
}
