export default function MonochromeFormLayout() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl border-4 border-black p-8 md:p-12">
        <div className="mb-10 pb-6 border-b-4 border-black">
          <h1 className="text-4xl font-bold text-black mb-2">Registration Form</h1>
          <p className="text-base text-gray-900">Complete all required fields to register</p>
        </div>

        <form className="space-y-10">
          <div className="space-y-6">
            <div className="bg-black text-white px-4 py-2 font-bold uppercase tracking-wide">
              Personal Information
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  First Name <span className="text-gray-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                  Last Name <span className="text-gray-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Email Address <span className="text-gray-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black text-white px-4 py-2 font-bold uppercase tracking-wide">
              Account Security
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Username <span className="text-gray-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Password <span className="text-gray-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                placeholder="••••••••"
              />
              <div className="mt-3 p-3 bg-gray-100 border-2 border-gray-300">
                <p className="text-xs font-bold text-black mb-2">Password Requirements:</p>
                <ul className="text-xs text-gray-800 space-y-1">
                  <li>• Minimum 8 characters</li>
                  <li>• At least one uppercase letter</li>
                  <li>• At least one number</li>
                  <li>• At least one special character</li>
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Confirm Password <span className="text-gray-600">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black text-white px-4 py-2 font-bold uppercase tracking-wide">
              Additional Details
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                Biography
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors text-black bg-white resize-none"
                placeholder="Tell us about yourself (optional)"
              />
            </div>

            <div className="border-2 border-gray-400 p-4 space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 border-2 border-black rounded-none text-black focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="ml-3 text-sm font-medium text-black">
                  I have read and agree to the Terms of Service and Privacy Policy <span className="text-gray-600">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="updates"
                  className="mt-1 w-5 h-5 border-2 border-black rounded-none text-black focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="updates" className="ml-3 text-sm font-medium text-black">
                  Send me newsletters and product updates
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t-4 border-black">
            <button
              type="button"
              className="px-10 py-4 border-2 border-black text-black font-bold hover:bg-gray-200 transition-all uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all uppercase tracking-wider"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
