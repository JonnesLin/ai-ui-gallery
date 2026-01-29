import { Form, FormField } from './index';
import { getFormThemeStyles } from './theme-styles';

export default function MinimalistFormLayoutRefactored() {
  const theme = 'minimalist';
  const styles = getFormThemeStyles(theme);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted', event);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Contact Form</h1>
          <p className="text-sm text-gray-500">Please fill in the required information</p>
        </div>

        <Form theme={theme} onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h2 className={styles.sectionTitle}>Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="firstName" label="First Name" required>
                <input
                  type="text"
                  id="firstName"
                  className={styles.input}
                  placeholder="Enter your first name"
                />
              </FormField>

              <FormField name="lastName" label="Last Name" required>
                <input
                  type="text"
                  id="lastName"
                  className={styles.input}
                  placeholder="Enter your last name"
                />
              </FormField>
            </div>

            <FormField name="email" label="Email Address" required>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="your.email@example.com"
              />
            </FormField>

            <FormField name="phone" label="Phone Number">
              <input
                type="tel"
                id="phone"
                className={styles.input}
                placeholder="+1 (555) 000-0000"
              />
            </FormField>
          </div>

          <div className="space-y-6">
            <h2 className={styles.sectionTitle}>Account Details</h2>

            <FormField
              name="password"
              label="Password"
              required
              helper="Must contain at least 8 characters"
            >
              <input
                type="password"
                id="password"
                className={styles.input}
                placeholder="Minimum 8 characters"
              />
            </FormField>

            <FormField name="confirmPassword" label="Confirm Password" required>
              <input
                type="password"
                id="confirmPassword"
                className={styles.input}
                placeholder="Re-enter your password"
              />
            </FormField>
          </div>

          <div className="space-y-6">
            <h2 className={styles.sectionTitle}>Additional Information</h2>

            <FormField name="message" label="Message">
              <textarea
                id="message"
                rows={4}
                className={styles.input + ' resize-none'}
                placeholder="Your message here..."
              />
            </FormField>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 border-gray-300 rounded-none text-gray-900 focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                I agree to the terms and conditions <span className="text-gray-400">*</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
