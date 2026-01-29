export default function NeumorphismFormLayout() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-200 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Registration Form</h1>
          <p className="text-gray-600">Fill in your details below</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">
                  First Name <span className="text-red-400">*</span>
                </label>
                <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Enter first name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                Phone Number
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Account Security</h2>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-3">
                Username <span className="text-red-400">*</span>
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Choose a username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-3">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Minimum 8 characters"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-3">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Re-enter password"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Additional Information</h2>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-3">
                Bio
              </label>
              <div className="rounded-xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-1">
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border-0 text-gray-800 placeholder:text-gray-400 focus:outline-none resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded bg-gray-200 border-0 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-blue-600 focus:ring-0"
                  />
                </div>
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                  I accept the terms and conditions <span className="text-red-400">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-5 h-5 rounded bg-gray-200 border-0 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-blue-600 focus:ring-0"
                  />
                </div>
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                  Subscribe to newsletter
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
            <button
              type="button"
              className="px-8 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gray-200 text-blue-600 font-medium shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
