import { Form, FormField } from './index';
import { getFormThemeStyles } from './theme-styles';

export default function DarkFormLayoutHorizontal() {
  const theme = 'dark';
  const styles = getFormThemeStyles(theme);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted', event);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400">Update your account information</p>
        </div>

        <Form theme={theme} layout="horizontal" labelWidth="180px" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className={styles.sectionTitle}>Basic Information</h2>
            </div>

            <FormField name="fullName" label="Full Name" required>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={styles.input}
                placeholder="John Doe"
              />
            </FormField>

            <FormField name="email" label="Email Address" required>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="john@example.com"
              />
            </FormField>

            <FormField name="phone" label="Phone Number">
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                placeholder="+1 (555) 000-0000"
              />
            </FormField>

            <FormField name="bio" label="Bio" helper="Brief description for your profile">
              <textarea
                id="bio"
                name="bio"
                rows={3}
                className={styles.input + ' resize-none'}
                placeholder="Tell us about yourself..."
              />
            </FormField>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className={styles.sectionTitle}>Preferences</h2>
            </div>

            <FormField name="language" label="Language">
              <select id="language" name="language" className={styles.input}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </FormField>

            <FormField name="timezone" label="Timezone">
              <select id="timezone" name="timezone" className={styles.input}>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+8 (China Time)</option>
              </select>
            </FormField>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 mt-8 border-t border-gray-800">
            <button
              type="button"
              className="px-8 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
