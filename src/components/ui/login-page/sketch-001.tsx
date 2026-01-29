export default function SketchLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-amber-50 relative">
      {/* Paper Texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
      }} />

      {/* Doodles */}
      <svg className="absolute top-10 left-10 w-20 h-20 text-gray-300" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,5" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-16 h-16 text-gray-300" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4" />
      </svg>
      <svg className="absolute top-1/3 right-20 w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
      </svg>

      {/* Card */}
      <div className="relative w-full max-w-md p-8 bg-white rounded-sm shadow-lg" style={{
        border: '3px solid #374151',
        borderRadius: '4px 16px 4px 16px',
        boxShadow: '6px 6px 0 #d1d5db'
      }}>
        {/* Tape Effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200/80 transform -rotate-2" style={{ boxShadow: '2px 2px 4px rgba(0,0,0,0.1)' }} />

        {/* Logo */}
        <div className="text-center mb-8 mt-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center relative" style={{ border: '3px dashed #6b7280' }}>
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Welcome!
          </h1>
          <p className="text-gray-500 mt-1 italic">Please sign in to continue...</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white transition-all"
              style={{
                border: '2px solid #9ca3af',
                borderRadius: '2px 8px 2px 8px',
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="super secret..."
              className="w-full px-4 py-3 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white transition-all"
              style={{
                border: '2px solid #9ca3af',
                borderRadius: '8px 2px 8px 2px',
                fontFamily: 'Comic Sans MS, cursive, sans-serif'
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center" style={{ borderRadius: '2px 6px 2px 6px' }}>
                <input type="checkbox" className="sr-only peer" />
                <svg className="w-3 h-3 text-gray-600 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-600" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600 underline decoration-wavy" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gray-700 text-white font-bold hover:bg-gray-800 transition-all"
            style={{
              border: '3px solid #374151',
              borderRadius: '4px 12px 4px 12px',
              fontFamily: 'Comic Sans MS, cursive, sans-serif',
              boxShadow: '4px 4px 0 #9ca3af'
            }}
          >
            Sign In!
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 border-t-2 border-dashed border-gray-300" />
          <span className="text-gray-400 text-sm" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>or</span>
          <div className="flex-1 border-t-2 border-dashed border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="py-3 bg-white text-gray-600 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            style={{
              border: '2px solid #d1d5db',
              borderRadius: '6px 2px 6px 2px',
              fontFamily: 'Comic Sans MS, cursive, sans-serif'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button
            className="py-3 bg-white text-gray-600 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            style={{
              border: '2px solid #d1d5db',
              borderRadius: '2px 6px 2px 6px',
              fontFamily: 'Comic Sans MS, cursive, sans-serif'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-8 text-gray-500" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
          New here?{' '}
          <a href="#" className="text-blue-500 font-bold hover:text-blue-600 underline decoration-wavy">
            Sign up!
          </a>
        </p>

        {/* Decorative Arrow */}
        <svg className="absolute -bottom-8 right-10 w-12 h-12 text-gray-400 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  )
}
