export default function PlayfulLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-32 right-20 w-12 h-12 bg-blue-400/40 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-10 h-10 bg-purple-400/40 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.8s' }} />

        {/* Stars */}
        <svg className="absolute top-20 right-10 w-8 h-8 text-yellow-500/60 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
        </svg>
        <svg className="absolute bottom-32 left-20 w-6 h-6 text-white/60 animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
        </svg>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md p-8 rounded-[2rem] bg-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
        {/* Decorative Top Wave */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-4 h-4 bg-red-400 rounded-full" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
          <div className="w-4 h-4 bg-green-400 rounded-full" />
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform cursor-pointer">
            <span className="text-4xl">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </span>
          </div>
          <h1 className="text-3xl font-black text-gray-800">Hey there!</h1>
          <p className="text-gray-500 mt-1 text-lg">Ready to have some fun?</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">Your Email</label>
            <input
              type="email"
              placeholder="awesome@email.com"
              className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all text-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">Secret Password</label>
            <input
              type="password"
              placeholder="Shhh... it's a secret"
              className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-all text-lg"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-6 h-6 bg-gray-200 rounded-lg peer-checked:bg-green-400 transition-colors" />
                <svg className="absolute top-1 left-1 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-800">Remember me!</span>
            </label>
            <a href="#" className="text-sm text-orange-500 font-bold hover:text-orange-600 transition-colors">
              Oops, forgot?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white text-lg font-black rounded-2xl hover:shadow-lg hover:shadow-orange-300/50 transform hover:-translate-y-1 active:translate-y-0 transition-all"
          >
            Let's Go!
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
          <span className="text-gray-400 font-bold">OR</span>
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 px-4 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button className="py-3 px-4 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-8 text-gray-500">
          New friend?{' '}
          <a href="#" className="font-black text-orange-500 hover:text-orange-600 transition-colors">
            Join the party!
          </a>
        </p>
      </div>
    </div>
  )
}
