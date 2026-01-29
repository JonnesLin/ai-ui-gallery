export default function MinimalistFormLayout() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Contact Form</h1>
          <p className="text-sm text-gray-500">Please fill in the required information</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-900 pb-3 border-b border-gray-200">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                  First Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                  Last Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address <span className="text-gray-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-900 pb-3 border-b border-gray-200">Account Details</h2>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                Password <span className="text-gray-400">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                placeholder="Minimum 8 characters"
              />
              <p className="mt-1 text-xs text-gray-500">Must contain at least 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2">
                Confirm Password <span className="text-gray-400">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-900 pb-3 border-b border-gray-200">Additional Information</h2>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400 resize-none"
                placeholder="Your message here..."
              />
            </div>

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
        </form>
      </div>
    </div>
  );
}
