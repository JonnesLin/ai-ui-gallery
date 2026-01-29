export default function CorporateFormLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-blue-900 px-8 md:px-12 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">Professional Registration</h1>
          <p className="text-blue-100">Please complete all required fields</p>
        </div>

        <form className="p-8 md:p-12 space-y-10">
          <div className="space-y-6">
            <div className="border-l-4 border-blue-900 pl-4">
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
              <p className="text-sm text-gray-500 mt-1">Primary contact details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Your Company LLC"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Your Position"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-900 pl-4">
              <h2 className="text-xl font-semibold text-gray-900">Account Credentials</h2>
              <p className="text-sm text-gray-500 mt-1">Secure login information</p>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                placeholder="Choose username"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Create password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  placeholder="Re-enter password"
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm font-semibold text-blue-900 mb-2">Password Requirements:</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Minimum 8 characters in length</li>
                <li>• At least one uppercase letter (A-Z)</li>
                <li>• At least one lowercase letter (a-z)</li>
                <li>• At least one number (0-9)</li>
                <li>• At least one special character (!@#$%^&*)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-900 pl-4">
              <h2 className="text-xl font-semibold text-gray-900">Additional Information</h2>
              <p className="text-sm text-gray-500 mt-1">Optional details</p>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none"
                placeholder="Enter any additional information..."
              />
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div className="bg-gray-50 rounded-md p-5 space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-0.5 w-5 h-5 border-gray-300 rounded text-blue-900 focus:ring-2 focus:ring-blue-900"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                  I have read and agree to the{' '}
                  <span className="font-semibold text-blue-900">Terms of Service</span> and{' '}
                  <span className="font-semibold text-blue-900">Privacy Policy</span>{' '}
                  <span className="text-red-600">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketing"
                  className="mt-0.5 w-5 h-5 border-gray-300 rounded text-blue-900 focus:ring-2 focus:ring-blue-900"
                />
                <label htmlFor="marketing" className="ml-3 text-sm text-gray-700">
                  I would like to receive marketing communications and product updates
                </label>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              By submitting this form, you acknowledge that your information will be processed in accordance with our data protection policies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-8 py-3 border border-gray-300 rounded-md text-gray-700 font-semibold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition-all shadow-sm"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
