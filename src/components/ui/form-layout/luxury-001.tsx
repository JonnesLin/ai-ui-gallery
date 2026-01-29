export default function LuxuryFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded border border-amber-600/30 shadow-[0_0_50px_rgba(217,119,6,0.3)] p-8 md:p-12">
        <div className="mb-10 text-center border-b border-amber-600/30 pb-8">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-amber-500 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-amber-500 mb-3 tracking-wide">Exclusive Membership</h1>
          <p className="text-amber-200/70 text-sm tracking-widest uppercase">Application Form</p>
        </div>

        <form className="space-y-10">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-serif text-amber-400 tracking-wider">Personal Details</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                  First Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                  Last Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Email Address <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-serif text-amber-400 tracking-wider">Account Security</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-3"></div>
            </div>

            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Username <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                placeholder="Choose username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Password <span className="text-amber-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                placeholder="Secure password"
              />
              <div className="mt-4 p-4 bg-amber-950/30 border border-amber-600/20 rounded">
                <p className="text-xs text-amber-300/80 mb-2 uppercase tracking-wide">Security Requirements</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/50 border border-amber-600/30 rounded text-xs text-amber-400">
                    8+ Characters
                  </span>
                  <span className="px-3 py-1 bg-black/50 border border-amber-600/30 rounded text-xs text-amber-400">
                    Uppercase
                  </span>
                  <span className="px-3 py-1 bg-black/50 border border-amber-600/30 rounded text-xs text-amber-400">
                    Numbers
                  </span>
                  <span className="px-3 py-1 bg-black/50 border border-amber-600/30 rounded text-xs text-amber-400">
                    Symbols
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Confirm Password <span className="text-amber-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-serif text-amber-400 tracking-wider">Additional Information</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-3"></div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-amber-300 mb-3 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-5 py-4 bg-black/40 border border-amber-600/40 rounded text-amber-100 placeholder:text-amber-900 focus:outline-none focus:border-amber-500 focus:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all resize-none"
                placeholder="Share your thoughts..."
              />
            </div>

            <div className="space-y-4 p-6 bg-amber-950/20 border border-amber-600/30 rounded">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 bg-black/50 border-2 border-amber-600/50 rounded text-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm text-amber-200/90 leading-relaxed">
                  I accept the terms of service and privacy policy{' '}
                  <span className="text-amber-500">*</span>
                </label>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 bg-black/50 border-2 border-amber-600/50 rounded text-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="text-sm text-amber-200/90 leading-relaxed">
                  Receive exclusive updates and offers
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-8 border-t border-amber-600/30">
            <button
              type="button"
              className="flex-1 px-8 py-4 bg-transparent border-2 border-amber-600/50 text-amber-400 rounded font-semibold uppercase tracking-widest text-sm hover:bg-amber-950/30 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded font-bold uppercase tracking-widest text-sm hover:from-amber-500 hover:to-amber-400 shadow-[0_0_30px_rgba(217,119,6,0.4)] transition-all"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
