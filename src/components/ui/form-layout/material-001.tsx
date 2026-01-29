export default function MaterialFormLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">Sign Up</h1>
          <p className="text-base text-gray-600">Create your account to continue</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Account Security</h2>

            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <p className="mt-2 text-xs text-gray-600">Must be at least 8 characters</p>
            </div>

            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Additional Information</h2>

            <div className="relative">
              <textarea
                id="bio"
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors text-gray-900 resize-none"
              />
              <label
                htmlFor="bio"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
              >
                About You
              </label>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 rounded border-2 border-gray-400 text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                  I agree to the Terms of Service and Privacy Policy <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 rounded border-2 border-gray-400 text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                  Send me promotional emails and updates
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-3 rounded text-blue-600 font-medium hover:bg-gray-100 transition-all uppercase tracking-wider text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md hover:shadow-lg uppercase tracking-wider text-sm"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
