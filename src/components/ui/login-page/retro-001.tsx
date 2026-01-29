export default function RetroLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-amber-50">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }} />

      {/* Card */}
      <div className="relative w-full max-w-md">
        {/* Decorative Border */}
        <div className="absolute inset-0 border-8 border-double border-amber-900/30 rounded-lg -m-2" />

        <div className="relative bg-amber-100 rounded-lg p-8 shadow-xl">
          {/* Ornamental Top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-amber-100 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-amber-800" />
              <svg className="w-6 h-6 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
              </svg>
              <div className="w-8 h-px bg-amber-800" />
            </div>
          </div>

          {/* Logo */}
          <div className="text-center mb-8 pt-4">
            <h1 className="text-3xl font-serif font-bold text-amber-900 tracking-wide">
              Welcome Back
            </h1>
            <p className="text-amber-700 font-serif italic mt-2">Please sign in to continue</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-serif font-semibold text-amber-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-md text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 font-serif transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-serif font-semibold text-amber-800 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-300 rounded-md text-amber-900 placeholder-amber-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 font-serif transition-all"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-amber-400 rounded text-amber-700 focus:ring-amber-400"
                />
                <span className="text-sm text-amber-700 font-serif">Remember me</span>
              </label>
              <a href="#" className="text-sm text-amber-700 font-serif italic hover:text-amber-900 underline decoration-dotted underline-offset-4">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-800 text-amber-50 font-serif font-semibold rounded-md hover:bg-amber-900 transition-colors shadow-md hover:shadow-lg border-2 border-amber-900"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dotted border-amber-300" />
            <span className="text-amber-600 text-sm font-serif italic">or continue with</span>
            <div className="flex-1 border-t-2 border-dotted border-amber-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-amber-50 border-2 border-amber-300 rounded-md text-amber-800 hover:bg-amber-200 hover:border-amber-400 transition-all flex items-center justify-center gap-2 font-serif">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#B45309" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#B45309" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#B45309" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#B45309" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex-1 py-3 bg-amber-50 border-2 border-amber-300 rounded-md text-amber-800 hover:bg-amber-200 hover:border-amber-400 transition-all flex items-center justify-center gap-2 font-serif">
              <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 pt-6 border-t-2 border-dotted border-amber-300">
            <p className="text-center text-amber-700 font-serif">
              New to our establishment?{' '}
              <a href="#" className="font-semibold text-amber-900 hover:text-amber-700 underline decoration-wavy underline-offset-4">
                Create an account
              </a>
            </p>
          </div>

          {/* Ornamental Bottom */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-800" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="w-2 h-2 rounded-full bg-amber-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
