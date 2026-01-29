export default function NeonLogin() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <div className="w-20 h-20 border-4 border-cyan-400 rounded-lg rotate-45" style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(34, 211, 238, 0.3)'
            }}></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-pink-500 rounded-lg rotate-45 animate-spin" style={{
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
              animationDuration: '3s'
            }}></div>
          </div>
          <h1 className="text-5xl font-bold mb-3" style={{
            background: 'linear-gradient(to right, #22d3ee, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
          }}>
            ACCESS PORTAL
          </h1>
          <p className="text-cyan-300 text-sm tracking-widest">ENTER AUTHENTICATION CODE</p>
        </div>

        {/* Login Form */}
        <div className="relative">
          {/* Neon Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg opacity-75 blur"></div>

          <div className="relative bg-black border border-cyan-500/50 rounded-lg p-8" style={{
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)'
          }}>
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-cyan-400 text-xs font-semibold mb-2 tracking-wider">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-cyan-100 rounded focus:outline-none focus:border-cyan-400 transition-all"
                    placeholder="user@cyberspace.net"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(34, 211, 238, 0.1)'
                    }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                  }}></div>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-pink-400 text-xs font-semibold mb-2 tracking-wider">
                  SECURITY KEY
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-pink-100 rounded focus:outline-none focus:border-pink-400 transition-all"
                    placeholder="••••••••••"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(236, 72, 153, 0.1)'
                    }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{
                    boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
                    animationDelay: '0.5s'
                  }}></div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-2 border-cyan-500 bg-black rounded focus:ring-0 focus:ring-offset-0 checked:bg-cyan-500"
                    style={{
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)'
                    }}
                  />
                  <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors">REMEMBER ACCESS</span>
                </label>
                <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors tracking-wide">
                  RESET KEY?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-4 px-4 font-bold text-black bg-gradient-to-r from-cyan-400 to-pink-500 rounded relative overflow-hidden group tracking-wider"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)'
                }}
              >
                <span className="relative z-10">INITIALIZE ACCESS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyan-500/30"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-black text-cyan-500/70 tracking-widest">ALTERNATIVE ACCESS</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border-2 border-cyan-500/50 bg-black/50 rounded hover:border-cyan-400 hover:bg-cyan-500/10 transition-all group">
                <svg className="w-5 h-5 mr-2 text-cyan-400 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span className="font-semibold text-cyan-400 text-sm group-hover:text-cyan-300">GOOGLE</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border-2 border-pink-500/50 bg-black/50 rounded hover:border-pink-400 hover:bg-pink-500/10 transition-all group">
                <svg className="w-5 h-5 mr-2 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="font-semibold text-pink-400 text-sm group-hover:text-pink-300">GITHUB</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-cyan-500/70 text-sm tracking-wide">
            NEW USER?{' '}
            <a href="#" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors tracking-wider">
              CREATE ACCOUNT
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
