export default function GradientFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">Join Our Community</h1>
          <p className="text-indigo-100">Create your account and start your journey</p>
        </div>

        <form className="p-8 md:p-12 space-y-8">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-pink-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Account Setup
              </h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Choose a unique username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-pink-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Create a strong password"
              />
              <div className="mt-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <p className="text-xs text-gray-600 font-medium mb-2">Password strength requirements:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">8+ chars</span>
                  <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Uppercase</span>
                  <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Lowercase</span>
                  <span className="px-2 py-1 bg-white rounded text-xs text-gray-600">Number</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-pink-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Tell Us More
              </h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                placeholder="Share a bit about yourself..."
              />
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                  I agree to the <span className="font-medium text-purple-600">Terms of Service</span> and{' '}
                  <span className="font-medium text-purple-600">Privacy Policy</span>{' '}
                  <span className="text-pink-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="updates"
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                />
                <label htmlFor="updates" className="ml-3 text-sm text-gray-700">
                  Send me updates and special offers
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
