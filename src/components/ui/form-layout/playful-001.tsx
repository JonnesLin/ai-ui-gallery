export default function PlayfulFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform duration-300">
        <div className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full -ml-12 -mb-12"></div>
          <div className="relative">
            <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">Let's Get Started!</h1>
            <p className="text-white/90 text-lg">It'll be fun, we promise!</p>
          </div>
        </div>

        <form className="p-8 md:p-10 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center transform -rotate-6 shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
              <h2 className="text-2xl font-black text-gray-800">Who Are You?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                  First Name <span className="text-pink-500">✱</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-5 py-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-3 border-yellow-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-lg transition-all"
                  placeholder="Your awesome name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                  Last Name <span className="text-pink-500">✱</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-5 py-4 bg-gradient-to-br from-pink-50 to-purple-50 border-3 border-pink-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                  placeholder="Cool last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email Address <span className="text-pink-500">✱</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 bg-gradient-to-br from-purple-50 to-pink-50 border-3 border-purple-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 focus:shadow-lg transition-all"
                placeholder="your.email@awesome.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-3 border-blue-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all"
                placeholder="555-AWESOME"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center transform rotate-6 shadow-lg">
                <span className="text-2xl">🔐</span>
              </div>
              <h2 className="text-2xl font-black text-gray-800">Secret Stuff</h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">
                Pick a Username <span className="text-pink-500">✱</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-5 py-4 bg-gradient-to-br from-green-50 to-emerald-50 border-3 border-green-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-green-400 focus:shadow-lg transition-all"
                placeholder="SuperCoolUser123"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                Create Password <span className="text-pink-500">✱</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-5 py-4 bg-gradient-to-br from-pink-50 to-rose-50 border-3 border-pink-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                placeholder="Make it strong!"
              />
              <div className="mt-3 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border-2 border-yellow-300">
                <p className="text-sm font-bold text-orange-700 mb-2">🎯 Password Power-Ups:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700 shadow-sm">
                    8+ chars
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700 shadow-sm">
                    ABC
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700 shadow-sm">
                    123
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700 shadow-sm">
                    !@#
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">
                Confirm Password <span className="text-pink-500">✱</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-5 py-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-3 border-purple-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 focus:shadow-lg transition-all"
                placeholder="One more time!"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-2xl font-black text-gray-800">Tell Us More!</h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-bold text-gray-700 mb-2">
                Your Story
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-5 py-4 bg-gradient-to-br from-cyan-50 to-blue-50 border-3 border-cyan-300 rounded-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all resize-none"
                placeholder="What makes you awesome? 🌟"
              />
            </div>

            <div className="space-y-4 p-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 rounded-3xl border-3 border-yellow-300">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-6 h-6 border-3 border-pink-400 rounded-lg bg-white text-pink-500 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                />
                <label htmlFor="terms" className="text-sm font-bold text-gray-700 leading-relaxed">
                  I agree to the super cool Terms & Conditions{' '}
                  <span className="text-pink-500">✱</span>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-6 h-6 border-3 border-purple-400 rounded-lg bg-white text-purple-500 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                />
                <label htmlFor="newsletter" className="text-sm font-bold text-gray-700 leading-relaxed">
                  Send me awesome updates and surprises!
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="flex-1 px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-black text-lg hover:bg-gray-300 hover:scale-105 transition-all shadow-lg"
            >
              Maybe Later
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
            >
              Let's Go! 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
