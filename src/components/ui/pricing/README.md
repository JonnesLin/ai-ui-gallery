# Pricing Component System

Clean, composable pricing components integrated with the theme system.

## Components

### PricingCard
Container for pricing plan.

```tsx
<PricingCard theme="minimalist" popular featured disabled>
  {children}
</PricingCard>
```

**Props:**
- `theme: ThemeName` - Theme name
- `featured?: boolean` - Show featured styling
- `popular?: boolean` - Show popular styling
- `disabled?: boolean` - Show disabled state
- `className?: string` - Additional classes
- `children: React.ReactNode` - Card content

### PricingHeader
Plan name and description.

```tsx
<PricingHeader
  theme="minimalist"
  name="Pro"
  description="Best for growing teams"
  popular
/>
```

**Props:**
- `theme: ThemeName` - Theme name
- `name: string` - Plan name
- `description?: string` - Plan description
- `popular?: boolean` - Show popular badge
- `featured?: boolean` - Show featured badge
- `className?: string` - Additional classes

### PricingPrice
Price display with period.

```tsx
<PricingPrice
  theme="minimalist"
  amount={29}
  currency="$"
  period="monthly"
  originalAmount={49}
/>
```

**Props:**
- `theme: ThemeName` - Theme name
- `amount: number` - Price amount
- `currency?: string` - Currency symbol (default: "$")
- `period?: PricingPeriod` - Billing period (default: "monthly")
- `originalAmount?: number` - Original price for discount display
- `className?: string` - Additional classes

**PricingPeriod:** `'monthly' | 'yearly' | 'one-time'`

### PricingFeatures
Feature list with checkmarks.

```tsx
<PricingFeatures
  theme="minimalist"
  features={['Unlimited Projects', 'Priority Support']}
  popular
/>
```

**Props:**
- `theme: ThemeName` - Theme name
- `features: string[]` - List of features
- `popular?: boolean` - Use primary variant styling
- `className?: string` - Additional classes

### PricingTable
Complete pricing table with multiple plans.

```tsx
<PricingTable
  theme="minimalist"
  plans={[
    {
      name: 'Pro',
      amount: 29,
      description: 'For teams',
      features: ['Feature 1', 'Feature 2'],
      popular: true
    }
  ]}
/>
```

**Props:**
- `theme: ThemeName` - Theme name
- `plans: PricingPlan[]` - Array of pricing plans
- `className?: string` - Additional classes

**PricingPlan:**
```ts
{
  name: string
  description?: string
  amount: number
  currency?: string
  period?: PricingPeriod
  originalAmount?: number
  features: string[]
  popular?: boolean
  featured?: boolean
  disabled?: boolean
}
```

## Usage Examples

### Manual Composition

```tsx
import { PricingCard, PricingHeader, PricingPrice, PricingFeatures } from './pricing';

<PricingCard theme="dark" popular>
  <PricingHeader
    theme="dark"
    name="Pro"
    description="For professionals"
    popular
  />

  <div className="my-6">
    <PricingPrice
      theme="dark"
      amount={29}
      period="monthly"
      originalAmount={49}
    />
  </div>

  <PricingFeatures
    theme="dark"
    features={['Unlimited Projects', '50GB Storage', 'Priority Support']}
    popular
    className="mb-8"
  />

  <button>Get Started</button>
</PricingCard>
```

### Using PricingTable

```tsx
import { PricingTable } from './pricing';

const plans = [
  {
    name: 'Basic',
    amount: 9,
    features: ['5 Projects', '2GB Storage']
  },
  {
    name: 'Pro',
    amount: 29,
    features: ['Unlimited Projects', '50GB Storage'],
    popular: true
  }
];

<PricingTable theme="minimalist" plans={plans} />
```

## Theme Integration

All components use the theme system:
- Base styles from `theme.base`
- Popular/featured variants use `theme.variants.primary`
- Regular variants use `theme.variants.secondary`
- Disabled state uses `theme.states.disabled`

## Design Principles

**No Fallbacks**: If theme not found, error is thrown immediately.

**Data Structure First**: Components accept clean props, theme determines styling.

**Single Responsibility**: Each component has one job.

**Composable**: Use individually or together via PricingTable.
