export default function NeonFormLayout() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black rounded-xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ textShadow: '0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.4)' }}>
            Sign Up
          </h1>
          <p className="text-cyan-400" style={{ textShadow: '0 0 5px rgba(6,182,212,0.5)' }}>
            Join our neon community today
          </p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              <h2 className="text-lg font-bold text-pink-500" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>
                PERSONAL DATA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-cyan-400 mb-2">
                  First Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-cyan-400 mb-2">
                  Last Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2">
                Email Address <span className="text-pink-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-cyan-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
              <h2 className="text-lg font-bold text-purple-500" style={{ textShadow: '0 0 10px rgba(168,85,247,0.8)' }}>
                SECURITY SETUP
              </h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-cyan-400 mb-2">
                Username <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-purple-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                placeholder="Choose username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-cyan-400 mb-2">
                Password <span className="text-pink-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-purple-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                placeholder="••••••••"
              />
              <div className="mt-3 p-3 bg-gray-900/50 border border-cyan-500/30 rounded">
                <p className="text-xs text-cyan-400 mb-2">PASSWORD STRENGTH REQUIREMENTS:</p>
                <div className="flex gap-2">
                  <div className="h-1 flex-1 bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
                  <div className="h-1 flex-1 bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
                  <div className="h-1 flex-1 bg-pink-500 shadow-[0_0_5px_rgba(236,72,153,0.5)]"></div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-cyan-400 mb-2">
                Confirm Password <span className="text-pink-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-purple-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
              <h2 className="text-lg font-bold text-cyan-500" style={{ textShadow: '0 0 10px rgba(6,182,212,0.8)' }}>
                ADDITIONAL INFO
              </h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-cyan-400 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="space-y-4 p-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 bg-gray-900 border-2 border-cyan-500 rounded text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-cyan-400">
                  I accept the Terms and Conditions <span className="text-pink-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 bg-gray-900 border-2 border-cyan-500 rounded text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-cyan-400">
                  Subscribe to neon newsletter
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all uppercase tracking-wider"
              style={{ textShadow: '0 0 5px rgba(0,0,0,0.5)' }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
