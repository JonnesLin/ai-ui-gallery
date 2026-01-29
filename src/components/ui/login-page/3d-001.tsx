export default function ThreeDLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating 3D Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-3xl transform rotate-45 animate-float" style={{
          boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
          transform: 'perspective(1000px) rotateX(20deg) rotateY(-20deg)'
        }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full animate-float" style={{
          boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-indigo-500/20 transform rotate-12 animate-float" style={{
          boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
          animationDelay: '2s'
        }}></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: perspective(1000px) rotateX(20deg) rotateY(-20deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateX(20deg) rotateY(-20deg) translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-md relative z-10">
        {/* Header with 3D Effect */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative" style={{
            transform: 'perspective(1000px) rotateX(10deg)',
            transformStyle: 'preserve-3d'
          }}>
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-2xl relative" style={{
              boxShadow: '0 30px 60px -15px rgba(168, 85, 247, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
              transform: 'translateZ(20px)'
            }}>
              <div className="absolute inset-2 border-2 border-white/20 rounded-xl"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3" style={{
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)',
            transform: 'perspective(500px) translateZ(10px)'
          }}>
            Welcome Back
          </h1>
          <p className="text-blue-200" style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Sign in to continue your journey
          </p>
        </div>

        {/* 3D Login Card */}
        <div className="relative" style={{
          transform: 'perspective(1000px)',
          transformStyle: 'preserve-3d'
        }}>
          {/* Card Shadow Layer */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl blur-2xl transform translate-y-8"></div>

          {/* Main Card */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl" style={{
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
            transform: 'translateZ(0px)'
          }}>
            <form className="space-y-6">
              {/* Email Input with 3D Effect */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2" style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  Email Address
                </label>
                <div className="relative" style={{ transform: 'translateZ(10px)' }}>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-xl focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="you@example.com"
                    style={{
                      boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-blue-500/5 to-purple-500/0 pointer-events-none"></div>
                </div>
              </div>

              {/* Password Input with 3D Effect */}
              <div>
                <label htmlFor="password" className="block text-white text-sm font-semibold mb-2" style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  Password
                </label>
                <div className="relative" style={{ transform: 'translateZ(10px)' }}>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-xl focus:outline-none focus:border-blue-400 transition-all"
                    placeholder="Enter your password"
                    style={{
                      boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-blue-500/0 pointer-events-none"></div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm" style={{ transform: 'translateZ(5px)' }}>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-white/30 bg-white/5 rounded focus:ring-0 focus:ring-offset-0 checked:bg-purple-500"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  <span className="text-white/90 group-hover:text-white transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors font-medium">
                  Forgot password?
                </a>
              </div>

              {/* 3D Login Button */}
              <button
                type="submit"
                className="w-full py-4 px-4 font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl relative overflow-hidden group"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(168, 85, 247, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.2)',
                  transform: 'translateZ(20px)'
                }}
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>

            {/* Divider with 3D Effect */}
            <div className="relative my-8" style={{ transform: 'translateZ(5px)' }}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" style={{
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">OR CONTINUE WITH</span>
              </div>
            </div>

            {/* Social Login with 3D Cards */}
            <div className="grid grid-cols-2 gap-4" style={{ transform: 'translateZ(10px)' }}>
              <button className="flex items-center justify-center px-4 py-3 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group" style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span className="font-semibold text-white/90 group-hover:text-white">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group" style={{
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="font-semibold text-white/90 group-hover:text-white">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Link with 3D Effect */}
        <div className="text-center mt-8" style={{
          transform: 'perspective(500px) translateZ(5px)'
        }}>
          <p className="text-white/80" style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Don't have an account?{' '}
            <a href="#" className="text-purple-300 font-semibold hover:text-purple-200 transition-colors">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
