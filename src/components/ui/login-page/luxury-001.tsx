export default function LuxuryLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950 relative">
      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-amber-900/10" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L25 18l-5 2.5z' fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

      {/* Card */}
      <div className="relative w-full max-w-md">
        {/* Gold Border Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-xl opacity-75 blur-sm" />

        <div className="relative bg-gray-900 rounded-xl p-10 border border-amber-500/30">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-light text-white tracking-widest uppercase">
              Welcome
            </h1>
            <p className="text-amber-500/80 mt-2 font-light tracking-wider">
              Exclusive Member Access
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-amber-500/80 mb-2 tracking-widest uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-4 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-amber-500/80 mb-2 tracking-widest uppercase">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-4 bg-gray-800/50 border border-amber-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-800 border-amber-500/50 rounded text-amber-500 focus:ring-amber-400/50 focus:ring-offset-0 focus:ring-offset-gray-900"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-gray-900 font-semibold rounded-lg hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 tracking-wider uppercase"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <span className="text-amber-600/60 text-xs tracking-widest uppercase">Or continue with</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 px-4 bg-gray-800/50 border border-amber-500/20 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#D4AF37" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#D4AF37" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#D4AF37" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#D4AF37" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm">Google</span>
            </button>
            <button className="py-3 px-4 bg-gray-800/50 border border-amber-500/20 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-10 text-gray-500">
            Not a member?{' '}
            <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
              Request Access
            </a>
          </p>

          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-amber-500/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-amber-500/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-amber-500/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-amber-500/40" />
        </div>
      </div>
    </div>
  )
}
