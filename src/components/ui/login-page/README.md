# LoginPage Component System

A flexible, theme-aware login page component system that separates concerns and eliminates code duplication.

## Architecture

The system is decomposed into focused components:

- `LoginPage.tsx` - Main container, handles layout and theme orchestration
- `LoginHeader.tsx` - Logo and title display
- `LoginForm.tsx` - Form inputs and validation
- `LoginFooter.tsx` - Sign up links and footer navigation
- `SocialLogin.tsx` - Social authentication providers
- `types.ts` - Type definitions

## Usage

### Basic Example

```tsx
import { LoginPage } from './login-page';

function MyLoginPage() {
  return (
    <LoginPage
      theme="minimalist"
      title="Welcome back"
      onSubmit={(data) => {
        console.log('Login:', data);
      }}
    />
  );
}
```

### Full Configuration

```tsx
<LoginPage
  theme="glassmorphism"
  layout="split"
  title="Welcome Back"
  subtitle="Sign in to continue your journey"
  onSubmit={(data) => {
    // Handle login submission
    console.log('Email:', data.email);
    console.log('Password:', data.password);
    console.log('Remember me:', data.rememberMe);
  }}
  loading={false}
  error=""
  showRememberMe={true}
  showForgotPassword={true}
  socialLogins={[
    {
      provider: 'google',
      icon: undefined, // Uses default icon
      onClick: () => console.log('Google login'),
    },
    {
      provider: 'github',
      icon: <CustomIcon />, // Or provide custom icon
      onClick: () => console.log('GitHub login'),
    },
  ]}
  signUpLink={{
    text: "Don't have an account?",
    href: '/signup',
    onClick: () => console.log('Navigate to signup'),
  }}
  footerLinks={[
    { text: 'Help', href: '/help' },
    { text: 'Privacy', href: '/privacy' },
    { text: 'Terms', href: '/terms' },
  ]}
/>
```

## Props

### LoginPage Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `theme` | `ThemeName` | Yes | - | Theme name from theme system |
| `layout` | `'centered' \| 'split' \| 'fullwidth'` | No | `'centered'` | Page layout style |
| `title` | `string` | Yes | - | Main heading text |
| `subtitle` | `string` | No | - | Subheading text |
| `logo` | `ReactNode` | No | Auto-generated | Custom logo component |
| `backgroundImage` | `string` | No | - | Background image URL |
| `onSubmit` | `(data: LoginFormData) => void` | Yes | - | Form submission handler |
| `loading` | `boolean` | No | `false` | Loading state |
| `error` | `string` | No | - | Error message to display |
| `showRememberMe` | `boolean` | No | `true` | Show remember me checkbox |
| `showForgotPassword` | `boolean` | No | `true` | Show forgot password link |
| `socialLogins` | `SocialProvider[]` | No | - | Social login providers |
| `signUpLink` | `object` | No | - | Sign up link configuration |
| `footerLinks` | `array` | No | - | Footer navigation links |

### LoginFormData

```typescript
interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

## Available Themes

- `minimalist` - Clean, minimal design
- `glassmorphism` - Frosted glass effect with animated background
- `material` - Google Material Design with floating labels
- `gradient` - Gradient backgrounds and accents
- `dark` - Dark mode optimized
- `neumorphism` - Soft shadows and depth
- Plus 15+ other themes...

## Layout Options

### Centered (default)
Standard login form centered on the page.

### Split
Two-column layout with promotional content on one side.

### Fullwidth
Maximum width layout for special use cases.

## Design Principles

1. **No Fallbacks** - Components throw errors on invalid input rather than silently failing
2. **Theme System Integration** - All styling controlled through theme configuration
3. **Component Composition** - Small, focused components that can be used independently
4. **Type Safety** - Full TypeScript coverage with strict types
5. **Zero Duplication** - No repeated HTML structures across themes

## Migration from Old Components

Old pattern (duplicated structure):
```tsx
export default function MinimalistLoginPage() {
  return (
    <div>
      {/* 100+ lines of duplicated HTML */}
    </div>
  );
}
```

New pattern (data-driven):
```tsx
import { LoginPage } from './LoginPage';

export default function MinimalistLoginPage() {
  return (
    <LoginPage
      theme="minimalist"
      title="Welcome back"
      onSubmit={(data) => console.log(data)}
      socialLogins={[...]}
    />
  );
}
```

## Examples

See these files for complete examples:
- `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/login-page/minimalist-001.tsx`
- `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/login-page/glassmorphism-001.tsx`
- `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/login-page/material-001.tsx`
- `/Users/linjinhong/Documents/MoneyProject/AI-UI-gallery/src/components/ui/login-page/gradient-split-demo.tsx`
