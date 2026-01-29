# ProductPage Component System

A modular, theme-aware product page component system built with React and TypeScript.

## Architecture

The system is composed of 5 core components:

1. **ProductPage** - Main container component
2. **ProductGallery** - Product image display
3. **ProductInfo** - Product information (name, price, rating, description)
4. **ProductActions** - Variant selection and add to cart
5. **ProductTabs** - Features and specifications tabs

## Data Structure

All components are driven by a single `ProductData` interface:

```typescript
interface ProductData {
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  description: string;
  variants: ProductVariant[];
  inStock: boolean;
  features?: ProductFeature[];
  specifications?: Record<string, string>;
  relatedProducts?: RelatedProduct[];
  badge?: string;
}
```

## Usage

### Basic Example

```tsx
import { ProductPage } from './ProductPage';
import type { ProductData } from './types';

const productData: ProductData = {
  name: 'Premium Wireless Headphones',
  price: 299,
  currency: '$',
  rating: 4.5,
  reviewCount: 128,
  description: 'Experience premium sound quality...',
  inStock: true,
  variants: [
    {
      name: 'Color',
      options: [
        { id: 'black', label: 'Matte Black', value: '#000000' },
        { id: 'silver', label: 'Silver', value: '#C0C0C0' },
      ],
    },
  ],
};

export default function MyProductPage() {
  return (
    <ProductPage
      theme="flat"
      layout="standard"
      data={productData}
      onAddToCart={() => console.log('Added to cart')}
      onVariantChange={(name, id) => console.log(`${name}: ${id}`)}
    />
  );
}
```

### Props

#### ProductPage

- `theme: ThemeName` - Theme configuration (flat, material, glassmorphism, etc.)
- `layout?: 'standard' | 'wide' | 'full'` - Page layout width
- `data: ProductData` - Product data object
- `onAddToCart?: () => void` - Add to cart callback
- `onVariantChange?: (variantName: string, optionId: string) => void` - Variant change callback

### Themes

The component system supports all themes defined in `src/components/ui/_themes`:

- minimalist
- glassmorphism
- neumorphism
- dark
- gradient
- flat
- material
- and more...

Each theme automatically applies appropriate:
- Background colors
- Text colors
- Border styles
- Shadow effects
- Border radius
- Hover states

## Component Composition

### Using Individual Components

You can compose your own product page using individual components:

```tsx
import { ProductGallery, ProductInfo, ProductActions } from './';

export function CustomProductPage() {
  return (
    <div>
      <ProductGallery theme="flat" />
      <ProductInfo
        theme="flat"
        name="Product Name"
        price={99}
        currency="$"
        rating={4.5}
        reviewCount={50}
        description="Description..."
      />
      <ProductActions
        theme="flat"
        variants={[]}
        inStock={true}
      />
    </div>
  );
}
```

## Demo Data

Pre-configured demo data is available in `demo-data.ts`:

- `demoProductData` - Generic product (headphones)
- `backpackProductData` - Backpack product
- `phoneProductData` - Phone product

## Key Design Decisions

1. **No Fallbacks** - All required data must be provided. Missing data will cause errors.
2. **Theme-Driven** - All styling is controlled through the theme system.
3. **Composable** - Components can be used individually or as a complete system.
4. **Type-Safe** - Full TypeScript support with strict typing.
5. **Single Responsibility** - Each component handles one specific aspect of the product page.

## File Structure

```
product-page/
├── types.ts                    # TypeScript interfaces
├── ProductPage.tsx             # Main page component
├── ProductGallery.tsx          # Gallery component
├── ProductInfo.tsx             # Info component
├── ProductActions.tsx          # Actions component
├── ProductTabs.tsx             # Tabs component
├── demo-data.ts                # Demo product data
├── index.ts                    # Public exports
├── flat-001.tsx                # Flat theme demo
├── material-001.tsx            # Material theme demo
├── glassmorphism-001.tsx       # Glassmorphism theme demo
└── [other theme demos]
```

## Examples

Check the theme-specific files (e.g., `flat-001.tsx`, `material-001.tsx`) for complete working examples.
