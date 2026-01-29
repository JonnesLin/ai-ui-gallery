export default function GlassmorphismFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-white/80">Join us today and get started</p>
        </div>

        <form className="space-y-6">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white mb-1">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                  First Name <span className="text-pink-300">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                  Last Name <span className="text-pink-300">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address <span className="text-pink-300">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white mb-1">Security</h2>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password <span className="text-pink-300">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              <p className="mt-2 text-xs text-white/70">At least 8 characters with numbers and symbols</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                Confirm Password <span className="text-pink-300">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white mb-1">About You</h2>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-white mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-5 h-5 rounded bg-white/10 border-white/30 text-pink-500 focus:ring-2 focus:ring-white/50"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-white/90">
                I agree to the Terms of Service and Privacy Policy <span className="text-pink-300">*</span>
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
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
        </form>
      </div>
    </div>
  );
}
