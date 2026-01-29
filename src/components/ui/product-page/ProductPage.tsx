import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';
import { ProductActions } from './ProductActions';
import { ProductTabs } from './ProductTabs';
import type { ProductPageProps } from './types';

export function ProductPage({
  theme,
  layout = 'standard',
  data,
  onAddToCart,
  onVariantChange,
}: ProductPageProps) {
  const themeConfig = getTheme(theme);

  const maxWidthClass =
    layout === 'full'
      ? 'max-w-full'
      : layout === 'wide'
      ? 'max-w-[1400px]'
      : 'max-w-7xl';

  return (
    <div className={cn('min-h-screen', themeConfig.pageBackground)}>
      <div className={cn(maxWidthClass, 'mx-auto px-4 py-12')}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery theme={theme} />

          <div className="flex flex-col justify-center space-y-8">
            <ProductInfo
              theme={theme}
              name={data.name}
              price={data.price}
              originalPrice={data.originalPrice}
              currency={data.currency}
              rating={data.rating}
              reviewCount={data.reviewCount}
              description={data.description}
              badge={data.badge}
            />

            <ProductActions
              theme={theme}
              variants={data.variants}
              inStock={data.inStock}
              onAddToCart={onAddToCart}
              onVariantChange={onVariantChange}
            />
          </div>
        </div>

        {(data.features || data.specifications) ? (
          <div className="mb-16">
            <ProductTabs
              theme={theme}
              features={data.features}
              specifications={data.specifications}
            />
          </div>
        ) : null}

        {data.relatedProducts && data.relatedProducts.length > 0 ? (
          <div
            className={cn(
              'p-10',
              themeConfig.base.background,
              themeConfig.base.shadow,
              themeConfig.base.radius
            )}
          >
            <h2
              className={cn(
                'text-3xl font-bold mb-8',
                themeConfig.base.text
              )}
            >
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {data.relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    'overflow-hidden transition-shadow',
                    themeConfig.base.background,
                    themeConfig.base.shadow,
                    themeConfig.base.radius,
                    'hover:shadow-lg'
                  )}
                >
                  <div
                    className={cn(
                      'aspect-square',
                      product.image ? '' : 'bg-gray-200'
                    )}
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h3
                      className={cn(
                        'font-bold mb-2',
                        themeConfig.base.text
                      )}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-bold text-lg">
                      {data.currency}{product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
