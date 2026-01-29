# Checkout Page Components

A flexible, theme-aware checkout page component system built with React and TypeScript.

## Architecture

The checkout page is split into 5 independent components:

- `CheckoutPage` - Main page container with header
- `CheckoutSteps` - Progress indicator for multi-step checkout
- `CheckoutForm` - Dynamic form builder for shipping/payment fields
- `CheckoutCart` - Order summary with line items and totals
- `CheckoutPayment` - Payment method selector and submit button

## Usage

### Basic Example

```tsx
import {
  CheckoutPage,
  CheckoutForm,
  CheckoutCart,
  CheckoutPayment,
} from './checkout-page';

export default function MyCheckout() {
  const formSections = [
    {
      id: 'shipping',
      title: 'Shipping Information',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
      ],
    },
  ];

  const cartItems = [
    {
      id: '1',
      name: 'Product Name',
      price: 99.99,
      quantity: 1,
    },
  ];

  return (
    <CheckoutPage theme="dark">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm sections={formSections} theme="dark" />
          <CheckoutPayment theme="dark" />
        </div>
        <div className="lg:col-span-1">
          <CheckoutCart
            items={cartItems}
            subtotal={99.99}
            tax={8.0}
            shipping={5.0}
            total={112.99}
            theme="dark"
          />
        </div>
      </div>
    </CheckoutPage>
  );
}
```

### With Steps

```tsx
import { CheckoutPage, CheckoutSteps } from './checkout-page';

const steps = [
  { id: 'shipping', title: 'Shipping', number: 1 },
  { id: 'payment', title: 'Payment', number: 2 },
  { id: 'review', title: 'Review', number: 3 },
];

<CheckoutPage theme="minimalist">
  <CheckoutSteps steps={steps} currentStep={0} theme="minimalist" />
  {/* rest of content */}
</CheckoutPage>;
```

## Component Props

### CheckoutPage

| Prop        | Type        | Required | Description                  |
| ----------- | ----------- | -------- | ---------------------------- |
| `theme`     | `ThemeName` | Yes      | Theme configuration to apply |
| `className` | `string`    | No       | Additional CSS classes       |
| `children`  | `ReactNode` | No       | Page content                 |

### CheckoutSteps

| Prop          | Type              | Required | Description                       |
| ------------- | ----------------- | -------- | --------------------------------- |
| `steps`       | `CheckoutStep[]`  | Yes      | Array of step configurations      |
| `currentStep` | `number`          | Yes      | Index of current active step      |
| `theme`       | `ThemeName`       | Yes      | Theme configuration to apply      |
| `className`   | `string`          | No       | Additional CSS classes            |

### CheckoutForm

| Prop        | Type             | Required | Description                  |
| ----------- | ---------------- | -------- | ---------------------------- |
| `sections`  | `FormSection[]`  | Yes      | Array of form sections       |
| `theme`     | `ThemeName`      | Yes      | Theme configuration to apply |
| `className` | `string`         | No       | Additional CSS classes       |

### CheckoutCart

| Prop           | Type                       | Required | Description                      |
| -------------- | -------------------------- | -------- | -------------------------------- |
| `items`        | `CartItem[]`               | Yes      | Array of cart items              |
| `subtotal`     | `number`                   | Yes      | Subtotal amount                  |
| `tax`          | `number`                   | Yes      | Tax amount                       |
| `shipping`     | `number`                   | Yes      | Shipping amount                  |
| `total`        | `number`                   | Yes      | Total amount                     |
| `currency`     | `string`                   | No       | Currency symbol (default: '$')   |
| `theme`        | `ThemeName`                | Yes      | Theme configuration to apply     |
| `className`    | `string`                   | No       | Additional CSS classes           |
| `onApplyPromo` | `(code: string) => void`   | No       | Callback when promo code applied |

### CheckoutPayment

| Prop             | Type                          | Required | Description                      |
| ---------------- | ----------------------------- | -------- | -------------------------------- |
| `methods`        | `PaymentMethod[]`             | No       | Payment method options           |
| `theme`          | `ThemeName`                   | Yes      | Theme configuration to apply     |
| `className`      | `string`                      | No       | Additional CSS classes           |
| `onMethodChange` | `(methodId: string) => void`  | No       | Callback when method changes     |
| `onSubmit`       | `() => void`                  | No       | Callback when form submitted     |

## Type Definitions

### CheckoutStep

```ts
interface CheckoutStep {
  id: string;
  title: string;
  number: number;
}
```

### FormSection

```ts
interface FormSection {
  id: string;
  title: string;
  fields: FormField[];
}

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}
```

### CartItem

```ts
interface CartItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image?: string;
}
```

### PaymentMethod

```ts
interface PaymentMethod {
  id: string;
  name: string;
  selected: boolean;
}
```

## Themes

All components support the following themes:

- `minimalist`
- `dark`
- `glassmorphism`
- `neumorphism`
- `gradient`
- `flat`
- `material`

Each theme provides consistent styling across all components.

## Design Principles

1. **Data-driven**: Components accept data as props, no hardcoded content
2. **Theme-aware**: All styling comes from theme configuration
3. **Composable**: Mix and match components as needed
4. **Type-safe**: Full TypeScript support with strict types
5. **No fallbacks**: Components throw errors for invalid props instead of silently failing

## Examples

See the following files for complete examples:

- `minimalist-001.tsx` - Minimalist theme implementation
- `glassmorphism-002.tsx` - Glassmorphism theme implementation
- `example.tsx` - Complete feature showcase
