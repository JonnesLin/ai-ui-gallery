# Contact Component System

Clean, theme-based contact components that eliminate code duplication.

## Components

### ContactForm

A configurable contact form that adapts to different themes.

```tsx
import { ContactForm } from './contact';
import type { ContactField } from './contact';

const fields: ContactField[] = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'John' },
  { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Doe' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'message', label: 'Message', type: 'textarea', rows: 5 },
];

function MyContact() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form data:', data);
  };

  return (
    <ContactForm
      theme="material"
      fields={fields}
      onSubmit={handleSubmit}
      loading={false}
      submitText="Send Message"
    />
  );
}
```

**Props:**
- `theme`: ThemeName - The theme to apply
- `fields`: ContactField[] - Array of form fields
- `onSubmit`: (data: Record<string, string>) => void - Submit handler
- `loading`: boolean (optional) - Loading state
- `submitText`: string (optional) - Submit button text
- `className`: string (optional) - Additional CSS classes

**Material Theme:**
Material Design theme automatically applies floating labels with peer CSS selectors.

**Error Handling:**
Required fields validation throws an error if missing fields are not provided. No fallbacks.

### ContactInfo

Display contact information cards.

```tsx
import { ContactInfo } from './contact';

<ContactInfo
  theme="flat"
  address="456 Flat Street&#10;Design City, DC 45678&#10;United States"
  email="info@example.com"
  phone="+1 (555) 456-7890"
  hours="Mon - Fri: 9:00 AM - 6:00 PM&#10;Saturday: 10:00 AM - 4:00 PM&#10;Sunday: Closed"
/>
```

**Props:**
- `theme`: ThemeName - The theme to apply
- `email`: string (optional) - Email address
- `phone`: string (optional) - Phone number
- `address`: string (optional) - Physical address (use `&#10;` for line breaks)
- `hours`: string (optional) - Business hours (use `&#10;` for line breaks)
- `className`: string (optional) - Additional CSS classes

### ContactCard

A single contact information card.

```tsx
import { ContactCard } from './contact';

<ContactCard
  theme="material"
  icon="📍"
  title="Office Location"
  content="123 Main Street"
  variant="primary"
/>
```

**Props:**
- `theme`: ThemeName - The theme to apply
- `icon`: string - Icon or emoji
- `title`: string - Card title
- `content`: string | React.ReactNode - Card content
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' (optional)
- `className`: string (optional) - Additional CSS classes

## Field Types

```typescript
type ContactFieldType = 'text' | 'email' | 'tel' | 'textarea';

interface ContactField {
  name: string;           // Field name
  label: string;          // Field label
  type: ContactFieldType; // Input type
  required?: boolean;     // Is required
  placeholder?: string;   // Placeholder text
  rows?: number;          // Rows for textarea
}
```

## Theme Support

All components work with the theme system in `src/components/ui/_themes`:
- minimalist
- glassmorphism
- neumorphism
- dark
- gradient
- brutalist
- retro
- cyberpunk
- pastel
- corporate
- playful
- 3d
- flat
- futuristic
- luxury
- material
- monochrome
- nature
- neon
- sketch

## Migration from Display Files

Old approach (140 lines per theme):
```tsx
export default function FlatContact() {
  return (
    <div>
      {/* 140 lines of hardcoded JSX */}
    </div>
  );
}
```

New approach (30 lines per theme):
```tsx
import { ContactForm, ContactInfo } from './index';
import type { ContactField } from './types';

const fields: ContactField[] = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true },
  // ... more fields
];

export default function FlatContact() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContactForm theme="flat" fields={fields} onSubmit={handleSubmit} />
          </div>
          <ContactInfo
            theme="flat"
            address="456 Flat Street&#10;Design City, DC 45678"
            email="info@flatdesign.com"
            phone="+1 (555) 456-7890"
          />
        </div>
      </div>
    </div>
  );
}
```

## Design Philosophy

This is not about being "nice" or "flexible". This is about eliminating waste:

1. **No Code Duplication**: 20 display files × 140 lines = 2800 lines. Now: 3 components + 20 configs = ~500 lines.

2. **No Fallbacks**: If a theme doesn't exist, it throws. If required fields are missing, it throws. Problems should be obvious, not hidden.

3. **No Special Cases**: Material Design's floating labels are not a special case. They're a rendering strategy controlled by a single boolean check.

4. **Data Structure First**: Form is an array of field configs + theme config. Everything else is just rendering logic.

## Examples

See:
- `/src/components/ui/contact/flat-001.tsx` - Flat theme example
- `/src/components/ui/contact/material-001.tsx` - Material theme with floating labels
