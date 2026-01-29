import Input from './Input';
import type { ThemeName } from '../_themes/types';

/**
 * Example showcase demonstrating all Input component capabilities
 * This file is for reference and testing purposes
 */

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

interface InputExamplesProps {
  theme: ThemeName;
}

export default function InputExamples({ theme }: InputExamplesProps) {
  const backgrounds: Record<ThemeName, string> = {
    minimalist: 'bg-white',
    dark: 'bg-[#0d0d0d]',
    neumorphism: 'bg-[#e0e5ec]',
    glassmorphism: 'bg-gradient-to-br from-purple-600 via-violet-600 to-pink-500',
    gradient: 'bg-white',
    brutalist: 'bg-white',
    retro: 'bg-white',
    cyberpunk: 'bg-black',
    pastel: 'bg-white',
    corporate: 'bg-white',
    playful: 'bg-white',
    '3d': 'bg-white',
    flat: 'bg-white',
    futuristic: 'bg-black',
    luxury: 'bg-white',
    material: 'bg-white',
    monochrome: 'bg-white',
    nature: 'bg-white',
    neon: 'bg-black',
    sketch: 'bg-white',
  };

  return (
    <div className={`min-h-screen p-8 ${backgrounds[theme]}`}>
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            Basic Inputs
          </h2>

          <Input
            theme={theme}
            label="Email Address"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            theme={theme}
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </section>

        {/* Sizes */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            Sizes
          </h2>

          <Input theme={theme} size="xs" placeholder="Extra Small" />
          <Input theme={theme} size="sm" placeholder="Small" />
          <Input theme={theme} size="md" placeholder="Medium (default)" />
          <Input theme={theme} size="lg" placeholder="Large" />
          <Input theme={theme} size="xl" placeholder="Extra Large" />
        </section>

        {/* Variants */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            Variants
          </h2>

          <Input
            theme={theme}
            variant="default"
            label="Default Variant"
            placeholder="Default style"
          />

          <Input
            theme={theme}
            variant="filled"
            label="Filled Variant"
            placeholder="Filled background"
          />

          <Input
            theme={theme}
            variant="outlined"
            label="Outlined Variant"
            placeholder="With border"
          />
        </section>

        {/* With Icons */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            With Icons
          </h2>

          <Input
            theme={theme}
            label="Search"
            placeholder="Search..."
            leftIcon={<SearchIcon />}
          />

          <Input
            theme={theme}
            label="Verified Email"
            type="email"
            defaultValue="verified@example.com"
            success
            rightIcon={<CheckIcon />}
          />

          <Input
            theme={theme}
            label="With Both Icons"
            placeholder="Both sides"
            leftIcon={<SearchIcon />}
            rightIcon={<CheckIcon />}
          />
        </section>

        {/* States */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            States
          </h2>

          <Input
            theme={theme}
            label="Error State"
            type="email"
            defaultValue="invalid-email"
            error="Please enter a valid email address"
          />

          <Input
            theme={theme}
            label="Success State"
            defaultValue="Success!"
            success
            helperText="This field is valid"
          />

          <Input
            theme={theme}
            label="Disabled"
            value="Cannot edit this"
            disabled
            helperText="This field is read-only"
          />
        </section>

        {/* Helper Text */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            Helper Text
          </h2>

          <Input
            theme={theme}
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            helperText="Format: +1 (XXX) XXX-XXXX"
          />

          <Input
            theme={theme}
            label="Username"
            placeholder="Choose a username"
            helperText="Must be 3-20 characters"
          />
        </section>

        {/* Complex Examples */}
        <section className="space-y-6">
          <h2 className={theme === 'dark' || theme === 'glassmorphism' ? 'text-white text-2xl font-bold' : 'text-gray-900 text-2xl font-bold'}>
            Complex Examples
          </h2>

          <Input
            theme={theme}
            label="Search with Error"
            placeholder="Search..."
            leftIcon={<SearchIcon />}
            error="No results found"
          />

          <Input
            theme={theme}
            label="Large Success Input"
            size="lg"
            defaultValue="Completed successfully"
            success
            rightIcon={<CheckIcon />}
            helperText="Operation completed"
          />

          <Input
            theme={theme}
            label="Small Disabled with Icon"
            size="sm"
            value="Locked"
            disabled
            leftIcon={<SearchIcon />}
          />
        </section>
      </div>
    </div>
  );
}
