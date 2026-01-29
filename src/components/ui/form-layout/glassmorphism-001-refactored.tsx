import { useState } from 'react';
import { Form, FormField } from './index';
import { getFormThemeStyles } from './theme-styles';

export default function GlassmorphismFormLayoutRefactored() {
  const theme = 'glassmorphism';
  const styles = getFormThemeStyles(theme);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    const newErrors: Record<string, string> = {};

    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (password && password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-white/80">Join us today and get started</p>
        </div>

        <Form theme={theme} onSubmit={handleSubmit}>
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className={styles.sectionTitle}>Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField name="firstName" label="First Name" required>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  placeholder="John"
                />
              </FormField>

              <FormField name="lastName" label="Last Name" required>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  placeholder="Doe"
                />
              </FormField>
            </div>

            <FormField
              name="email"
              label="Email Address"
              required
              error={errors.email}
            >
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="john.doe@example.com"
              />
            </FormField>

            <FormField name="phone" label="Phone Number">
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                placeholder="+1 (555) 123-4567"
              />
            </FormField>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className={styles.sectionTitle}>Security</h2>

            <FormField
              name="password"
              label="Password"
              required
              error={errors.password}
              helper={!errors.password ? 'At least 8 characters with numbers and symbols' : undefined}
            >
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                placeholder="••••••••"
              />
            </FormField>

            <FormField
              name="confirmPassword"
              label="Confirm Password"
              required
              error={errors.confirmPassword}
            >
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={styles.input}
                placeholder="••••••••"
              />
            </FormField>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className={styles.sectionTitle}>About You</h2>

            <FormField name="bio" label="Bio">
              <textarea
                id="bio"
                name="bio"
                rows={4}
                className={styles.input + ' resize-none'}
                placeholder="Tell us about yourself..."
              />
            </FormField>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-1 w-5 h-5 rounded bg-white/10 border-white/30 text-pink-500 focus:ring-2 focus:ring-white/50"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-white/90">
                I agree to the Terms of Service and Privacy Policy <span className={styles.requiredMark}>*</span>
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mt-1 w-5 h-5 rounded bg-white/10 border-white/30 text-pink-500 focus:ring-2 focus:ring-white/50"
              />
              <label htmlFor="newsletter" className="ml-3 text-sm text-white/90">
                Subscribe to our newsletter for updates
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-white text-purple-600 font-medium hover:bg-white/90 transition-all shadow-lg"
            >
              Create Account
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
