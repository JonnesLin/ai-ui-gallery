export default function RetroFormLayout() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-orange-100 rounded-none border-4 border-orange-900 shadow-[8px_8px_0px_0px_rgba(120,53,15,1)] p-8 md:p-12">
        <div className="mb-10 text-center">
          <div className="inline-block bg-orange-900 text-amber-100 px-8 py-3 mb-4 border-4 border-orange-900 shadow-[4px_4px_0px_0px_rgba(217,119,6,1)]">
            <h1 className="text-3xl font-black uppercase tracking-wider">Sign Up Form</h1>
          </div>
          <p className="text-orange-900 font-bold text-lg">Join the Groovy Side</p>
        </div>

        <form className="space-y-8">
          <div className="bg-amber-100 border-4 border-orange-900 p-6 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full border-4 border-orange-900"></div>
              <h2 className="text-xl font-black text-orange-900 uppercase">Your Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="bg-amber-100 border-4 border-orange-900 p-6 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full border-4 border-orange-900"></div>
              <h2 className="text-xl font-black text-orange-900 uppercase">Account Info</h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                placeholder="Pick a cool username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                placeholder="Secret password"
              />
              <div className="mt-3 bg-orange-600 border-4 border-orange-900 p-3">
                <p className="text-xs font-bold text-amber-50 uppercase tracking-wide">
                  Must be 8+ characters, include numbers & symbols
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all"
                placeholder="Type it again"
              />
            </div>
          </div>

          <div className="bg-amber-100 border-4 border-orange-900 p-6 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full border-4 border-orange-900"></div>
              <h2 className="text-xl font-black text-orange-900 uppercase">More About You</h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-black text-orange-900 mb-2 uppercase tracking-wide">
                Tell Your Story
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-3 bg-amber-50 border-4 border-orange-900 text-orange-900 font-bold placeholder:text-orange-400 placeholder:font-normal focus:outline-none focus:bg-white transition-all resize-none"
                placeholder="What's your vibe?"
              />
            </div>

            <div className="space-y-4 bg-orange-600 border-4 border-orange-900 p-5">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-6 h-6 border-4 border-orange-900 rounded-none bg-amber-100 text-orange-900 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm font-bold text-amber-50 uppercase leading-tight">
                  I dig the terms & conditions <span className="text-red-300">*</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-6 h-6 border-4 border-orange-900 rounded-none bg-amber-100 text-orange-900 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="text-sm font-bold text-amber-50 uppercase leading-tight">
                  Send me groovy updates
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button
              type="button"
              className="flex-1 px-8 py-4 bg-amber-100 border-4 border-orange-900 text-orange-900 font-black text-lg uppercase hover:bg-amber-200 transition-all shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-orange-600 border-4 border-orange-900 text-amber-50 font-black text-lg uppercase hover:bg-orange-700 transition-all shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]"
            >
              Sign Me Up!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
