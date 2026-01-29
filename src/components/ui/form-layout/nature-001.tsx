export default function NatureFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-green-200 p-8 md:p-12">
        <div className="mb-10 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-2">Join Our Community</h1>
          <p className="text-green-600">Connect with nature lovers around the world</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-6 bg-green-400 rounded-full"></div>
                <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                <div className="w-2 h-6 bg-green-600 rounded-full"></div>
              </div>
              <h2 className="text-xl font-bold text-green-800">Your Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-green-700 mb-2">
                  First Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-green-700 mb-2">
                  Last Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-green-700 mb-2">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-green-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-2xl text-green-900 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-6 bg-emerald-400 rounded-full"></div>
                <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                <div className="w-2 h-6 bg-emerald-600 rounded-full"></div>
              </div>
              <h2 className="text-xl font-bold text-emerald-800">Account Details</h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-emerald-700 mb-2">
                Username <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-2xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-emerald-700 mb-2">
                Password <span className="text-orange-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-2xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                placeholder="Create password"
              />
              <div className="mt-3 p-4 bg-white rounded-2xl border-2 border-green-200">
                <p className="text-sm font-semibold text-green-700 mb-2">Password Requirements:</p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Include uppercase and lowercase
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    At least one number
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-emerald-700 mb-2">
                Confirm Password <span className="text-orange-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-2xl text-emerald-900 placeholder:text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 border border-teal-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-6 bg-teal-400 rounded-full"></div>
                <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                <div className="w-2 h-6 bg-teal-600 rounded-full"></div>
              </div>
              <h2 className="text-xl font-bold text-teal-800">Tell Your Story</h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-semibold text-teal-700 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-teal-300 rounded-2xl text-teal-900 placeholder:text-teal-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all resize-none"
                placeholder="Share your connection with nature..."
              />
            </div>

            <div className="space-y-4 bg-white rounded-2xl p-5 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 border-2 border-green-400 rounded-lg bg-white text-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm text-green-800 leading-relaxed">
                  I agree to the Terms of Service and Privacy Policy{' '}
                  <span className="text-orange-500">*</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 border-2 border-green-400 rounded-lg bg-white text-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="text-sm text-green-800 leading-relaxed">
                  Subscribe to nature tips and community updates
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="flex-1 px-8 py-4 bg-white border-2 border-green-400 text-green-700 rounded-2xl font-semibold hover:bg-green-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 shadow-lg transition-all"
            >
              Join Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
