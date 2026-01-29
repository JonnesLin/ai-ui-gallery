export default function SketchFormLayout() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)' }}>
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 relative" style={{
        borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
        border: '3px solid #333',
        boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
      }}>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block" style={{
            transform: 'rotate(-1deg)',
            borderBottom: '4px solid #f59e0b'
          }}>
            Sign Up Form
          </h1>
          <p className="text-base text-gray-700 mt-4" style={{ transform: 'rotate(0.5deg)' }}>
            Fill in your details below to create an account
          </p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <div className="relative inline-block mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-3 py-1 bg-yellow-200" style={{
                borderRadius: '15px 5px 15px 5px',
                border: '2px solid #333',
                transform: 'rotate(-0.5deg)'
              }}>
                Personal Info
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(-0.5deg)' }}>
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="John"
                  style={{ borderRadius: '10px 5px 10px 5px' }}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(0.5deg)' }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Doe"
                  style={{ borderRadius: '5px 10px 5px 10px' }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(-0.3deg)' }}>
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="john.doe@example.com"
                style={{ borderRadius: '8px 12px 8px 12px' }}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(0.3deg)' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="+1 (555) 000-0000"
                style={{ borderRadius: '12px 8px 12px 8px' }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative inline-block mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-3 py-1 bg-green-200" style={{
                borderRadius: '5px 15px 5px 15px',
                border: '2px solid #333',
                transform: 'rotate(0.5deg)'
              }}>
                Account Security
              </h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(-0.4deg)' }}>
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Pick a cool username"
                style={{ borderRadius: '10px 5px 10px 5px' }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(0.2deg)' }}>
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="••••••••"
                style={{ borderRadius: '5px 10px 5px 10px' }}
              />
              <div className="mt-3 p-3 bg-blue-100 border-2 border-gray-800" style={{ borderRadius: '8px 4px 8px 4px' }}>
                <p className="text-xs font-bold text-gray-800">Password must include:</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1 ml-4">
                  <li>✓ At least 8 characters</li>
                  <li>✓ One uppercase letter</li>
                  <li>✓ One number</li>
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(-0.2deg)' }}>
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="••••••••"
                style={{ borderRadius: '10px 8px 10px 8px' }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative inline-block mb-4">
              <h2 className="text-lg font-bold text-gray-800 px-3 py-1 bg-pink-200" style={{
                borderRadius: '15px 5px 15px 5px',
                border: '2px solid #333',
                transform: 'rotate(-0.5deg)'
              }}>
                More About You
              </h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-bold text-gray-800 mb-2" style={{ transform: 'rotate(0.3deg)' }}>
                Tell us about yourself
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-gray-800 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="I'm a designer who loves..."
                style={{ borderRadius: '12px 8px 12px 8px' }}
              />
            </div>

            <div className="space-y-4 p-4 bg-purple-50 border-2 border-gray-800" style={{ borderRadius: '10px 5px 10px 5px' }}>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 border-2 border-gray-800 rounded text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="ml-3 text-sm font-medium text-gray-800">
                  I agree to the Terms and Privacy Policy <span className="text-red-600">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 border-2 border-gray-800 rounded text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm font-medium text-gray-800">
                  Send me sketchy newsletters
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-10 py-3 border-2 border-gray-800 text-gray-800 font-bold hover:bg-gray-100 transition-all"
              style={{
                borderRadius: '10px 5px 10px 5px',
                transform: 'rotate(-0.5deg)'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 border-2 border-gray-800 text-white font-bold hover:bg-blue-700 transition-all"
              style={{
                borderRadius: '5px 10px 5px 10px',
                transform: 'rotate(0.5deg)',
                boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
