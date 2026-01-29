export default function BrutalistFormLayout() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
        <div className="mb-10 border-b-8 border-yellow-400 pb-6">
          <h1 className="text-4xl font-black text-yellow-400 mb-3 uppercase tracking-tight">REGISTRATION</h1>
          <p className="text-lg font-bold text-white uppercase">Fill the form below</p>
        </div>

        <form className="space-y-10">
          <div className="space-y-6">
            <div className="bg-yellow-400 p-4 border-4 border-black">
              <h2 className="text-xl font-black uppercase tracking-tight">01. PERSONAL DATA</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-base font-black text-white mb-3 uppercase">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all uppercase"
                  placeholder="ENTER NAME"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-base font-black text-white mb-3 uppercase">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all uppercase"
                  placeholder="ENTER NAME"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-black text-white mb-3 uppercase">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all"
                placeholder="YOUR@EMAIL.COM"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-black text-white mb-3 uppercase">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all"
                placeholder="+1-555-000-0000"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-400 p-4 border-4 border-black">
              <h2 className="text-xl font-black uppercase tracking-tight">02. ACCOUNT ACCESS</h2>
            </div>

            <div>
              <label htmlFor="username" className="block text-base font-black text-white mb-3 uppercase">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all uppercase"
                placeholder="USERNAME"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-base font-black text-white mb-3 uppercase">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all"
                placeholder="••••••••"
              />
              <div className="mt-3 p-4 bg-yellow-400 border-4 border-black">
                <p className="text-sm font-black uppercase">MIN 8 CHARS / 1 NUMBER / 1 SYMBOL</p>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-base font-black text-white mb-3 uppercase">
                Confirm <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-400 p-4 border-4 border-black">
              <h2 className="text-xl font-black uppercase tracking-tight">03. ABOUT YOU</h2>
            </div>

            <div>
              <label htmlFor="bio" className="block text-base font-black text-white mb-3 uppercase">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="w-full px-4 py-4 bg-white border-4 border-black text-black font-bold placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-yellow-400 transition-all resize-none"
                placeholder="TELL US ABOUT YOURSELF..."
              />
            </div>

            <div className="bg-white border-4 border-black p-6 space-y-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-6 h-6 border-4 border-black rounded-none bg-yellow-400 text-black focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm font-black uppercase leading-tight">
                  I ACCEPT TERMS & CONDITIONS <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-6 h-6 border-4 border-black rounded-none bg-yellow-400 text-black focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="newsletter" className="text-sm font-black uppercase leading-tight">
                  SEND ME UPDATES
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              className="flex-1 px-8 py-4 bg-white border-4 border-black text-black font-black text-lg uppercase hover:bg-gray-200 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-yellow-400 border-4 border-black text-black font-black text-lg uppercase hover:bg-yellow-300 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
