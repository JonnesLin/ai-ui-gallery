# Newsletter Component

A headless, flexible newsletter subscription component with built-in form handling and validation.

## Core Design

This component follows a strict separation of concerns:

- **Core Component** (`Newsletter.tsx`): Handles form logic, state, and basic layout structure
- **Display Files** (`*-001.tsx`): Control all visual styling via className props
- **No Fallbacks**: Missing required props throw errors immediately

## Usage

### Basic Example

```tsx
import { Newsletter } from '@/components/ui/newsletter';

function MyNewsletter() {
  const handleSubmit = (email: string) => {
    // Your submission logic
    console.log('Subscribing:', email);
  };

  return (
    <Newsletter
      layout="stacked"
      title="Stay Updated"
      description="Subscribe to our newsletter."
      placeholder="Enter your email"
      buttonText="Subscribe"
      onSubmit={handleSubmit}
    />
  );
}
```

## Props

### Required

- `title: string` - Newsletter heading
- `description: string` - Descriptive text
- `placeholder: string` - Input placeholder
- `buttonText: string` - Submit button text
- `onSubmit: (email: string) => void` - Callback when form submits

### Optional

- `layout?: 'inline' | 'stacked'` - Form layout (default: 'stacked')
- `loading?: boolean` - Show loading state
- `success?: boolean` - Show success message
- `error?: string` - Show error message
- `privacyText?: string` - Privacy notice text

### Style Props

All styling is controlled via these className props:

- `className` - Form element
- `containerClassName` - Outer wrapper
- `titleClassName` - Title heading
- `descriptionClassName` - Description text
- `inputClassName` - Email input
- `buttonClassName` - Submit button
- `successClassName` - Success message
- `errorClassName` - Error message
- `privacyClassName` - Privacy text

## Layout Modes

### Stacked (Default)

Input and button are vertically stacked.

```tsx
<Newsletter layout="stacked" {...props} />
```

### Inline

Input and button are horizontally aligned.

```tsx
<Newsletter layout="inline" {...props} />
```

## Validation

The component requires a valid email input (HTML5 validation). Empty submissions throw an error.

Custom validation should be done in the `onSubmit` callback:

```tsx
const handleSubmit = (email: string) => {
  if (!email.includes('@')) {
    setError('Invalid email');
    return;
  }
  // Process subscription
};
```

## Examples

See the display files for complete styling examples:

- `minimalist-001.tsx` - Clean, minimal design
- `dark-001.tsx` - Dark theme with card layout
- `glassmorphism-001.tsx` - Frosted glass effect
- `neumorphism-001.tsx` - Soft 3D shadows
- `gradient-001.tsx` - Gradient styling with inline layout

## Architecture Notes

This component is **headless** by design. It manages:

1. Email state
2. Form submission
3. Basic layout structure

It does NOT manage:

1. Visual styling (controlled by className props)
2. Theme logic (handled by display components)
3. API calls (handled by onSubmit callback)

This separation ensures the core component remains simple and reusable across any design system.
