export default function PastelFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
        <div className="mb-10 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-6 py-2 mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Create Account
            </h1>
          </div>
          <p className="text-purple-600">We're excited to have you join us</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h2 className="text-lg font-semibold text-purple-700">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-purple-600 mb-2">
                  First Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-white/70 border-2 border-purple-200 rounded-xl text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-purple-600 mb-2">
                  Last Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-white/70 border-2 border-purple-200 rounded-xl text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-2">
                Email Address <span className="text-pink-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/70 border-2 border-purple-200 rounded-xl text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-purple-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-white/70 border-2 border-purple-200 rounded-xl text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h2 className="text-lg font-semibold text-purple-700">Account Security</h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-purple-600 mb-2">
                Username <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-xl text-purple-900 placeholder:text-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                placeholder="Choose a unique username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-2">
                Password <span className="text-pink-400">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-xl text-purple-900 placeholder:text-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                placeholder="Create a secure password"
              />
              <div className="mt-3 p-4 bg-white/60 rounded-xl border border-blue-200">
                <p className="text-xs text-purple-600 font-medium mb-2">Password must include:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full text-xs text-purple-700">
                    8+ characters
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full text-xs text-purple-700">
                    One uppercase
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full text-xs text-purple-700">
                    One number
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-600 mb-2">
                Confirm Password <span className="text-pink-400">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-white/70 border-2 border-blue-200 rounded-xl text-purple-900 placeholder:text-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h2 className="text-lg font-semibold text-purple-700">About You</h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-purple-600 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-white/70 border-2 border-pink-200 rounded-xl text-purple-900 placeholder:text-pink-300 focus:outline-none focus:border-pink-400 focus:bg-white transition-all resize-none"
                placeholder="Tell us a little about yourself..."
              />
            </div>

            <div className="space-y-4 bg-white/60 rounded-xl p-5 border border-pink-200">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 border-2 border-purple-300 rounded-md bg-white text-purple-500 focus:ring-2 focus:ring-purple-300 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-purple-700">
                  I agree to the Terms & Conditions and Privacy Policy{' '}
                  <span className="text-pink-400">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 border-2 border-purple-300 rounded-md bg-white text-purple-500 focus:ring-2 focus:ring-purple-300 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-purple-700">
                  Subscribe to our newsletter for tips and updates
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="flex-1 px-8 py-3 rounded-xl border-2 border-purple-300 text-purple-600 font-medium hover:bg-purple-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-3 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-medium hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all shadow-lg"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
