export default function FlatFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-none p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign Up</h1>
          <p className="text-lg text-gray-600">Create your free account</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <div className="bg-blue-500 text-white px-5 py-3 -mx-8 md:-mx-12">
              <h2 className="text-lg font-bold uppercase tracking-wide">Basic Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-500 text-white px-5 py-3 -mx-8 md:-mx-12">
              <h2 className="text-lg font-bold uppercase tracking-wide">Account Setup</h2>
            </div>

            <div className="mt-6">
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Choose username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="••••••••"
              />
              <div className="mt-3 p-4 bg-blue-100">
                <p className="text-xs font-bold text-gray-800 mb-2">PASSWORD REQUIREMENTS:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white text-xs font-bold text-gray-700">8+ chars</span>
                  <span className="px-3 py-1 bg-white text-xs font-bold text-gray-700">Uppercase</span>
                  <span className="px-3 py-1 bg-white text-xs font-bold text-gray-700">Number</span>
                  <span className="px-3 py-1 bg-white text-xs font-bold text-gray-700">Symbol</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-green-500 text-white px-5 py-3 -mx-8 md:-mx-12">
              <h2 className="text-lg font-bold uppercase tracking-wide">Additional Info</h2>
            </div>

            <div className="mt-6">
              <label htmlFor="bio" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                About You
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 transition-all resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="space-y-4 p-5 bg-gray-100">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-6 h-6 border-0 rounded-none text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 bg-white"
                />
                <label htmlFor="terms" className="ml-4 text-sm font-medium text-gray-800">
                  I agree to the Terms of Service and Privacy Policy <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-6 h-6 border-0 rounded-none text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 bg-white"
                />
                <label htmlFor="newsletter" className="ml-4 text-sm font-medium text-gray-800">
                  Subscribe to our newsletter for updates and offers
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-10 py-4 bg-gray-300 text-gray-800 font-bold hover:bg-gray-400 transition-all uppercase tracking-wider rounded-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:from-blue-600 hover:to-purple-700 transition-all uppercase tracking-wider rounded-none"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
