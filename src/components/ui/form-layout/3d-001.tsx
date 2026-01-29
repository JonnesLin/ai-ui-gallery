export default function ThreeDFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl p-8 md:p-12" style={{
        boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
        transform: 'perspective(1000px) rotateX(2deg)'
      }}>
        <div className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2" style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Create Account
          </h1>
          <p className="text-base text-gray-600">Join us today and start your journey</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg inline-block" style={{
                boxShadow: '0 4px 12px rgba(99,102,241,0.15), inset 0 -2px 4px rgba(0,0,0,0.05)'
              }}>
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                  placeholder="Enter first name"
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                  placeholder="Enter last name"
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                placeholder="your@email.com"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 transition-all"
                placeholder="+1 (555) 000-0000"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg inline-block" style={{
                boxShadow: '0 4px 12px rgba(168,85,247,0.15), inset 0 -2px 4px rgba(0,0,0,0.05)'
              }}>
                Account Security
              </h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                placeholder="Choose a username"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                placeholder="••••••••"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
              <div className="mt-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg" style={{
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05), 0 2px 6px rgba(99,102,241,0.1)'
              }}>
                <p className="text-xs font-semibold text-gray-700 mb-2">Password strength requirements:</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" style={{ boxShadow: '0 1px 3px rgba(34,197,94,0.4)' }}></div>
                    <span className="text-xs text-gray-600">Minimum 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" style={{ boxShadow: '0 1px 3px rgba(34,197,94,0.4)' }}></div>
                    <span className="text-xs text-gray-600">At least one uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" style={{ boxShadow: '0 1px 3px rgba(34,197,94,0.4)' }}></div>
                    <span className="text-xs text-gray-600">At least one number</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                placeholder="••••••••"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-4 py-2 bg-gradient-to-r from-pink-50 to-indigo-50 rounded-lg inline-block" style={{
                boxShadow: '0 4px 12px rgba(236,72,153,0.15), inset 0 -2px 4px rgba(0,0,0,0.05)'
              }}>
                Additional Details
              </h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-2">
                About You
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-pink-500 transition-all resize-none"
                placeholder="Tell us about yourself..."
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            <div className="space-y-4 p-5 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl" style={{
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05), 0 4px 12px rgba(99,102,241,0.1)'
            }}>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 border-2 border-gray-300 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                />
                <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-700">
                  I agree to the Terms of Service and Privacy Policy <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketing"
                  className="mt-1 w-5 h-5 border-2 border-gray-300 rounded text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                />
                <label htmlFor="marketing" className="ml-3 text-sm font-medium text-gray-700">
                  Subscribe to newsletter and promotional emails
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(0,0,0,0.05)'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              style={{
                boxShadow: '0 8px 20px rgba(99,102,241,0.3), 0 4px 10px rgba(168,85,247,0.2), inset 0 -2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
