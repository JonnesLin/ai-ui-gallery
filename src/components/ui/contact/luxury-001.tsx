export default function LuxuryContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-amber-400">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg font-light">
            Experience excellence in every interaction
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-900/20 rounded-sm p-12">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-slate-700 py-3 focus:border-amber-400 outline-none transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-slate-700 py-3 focus:border-amber-400 outline-none transition-colors text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-slate-700 py-3 focus:border-amber-400 outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <label className="block text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-slate-700 py-3 focus:border-amber-400 outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <label className="block text-amber-400 text-xs uppercase tracking-widest mb-3 font-light">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-slate-700 py-3 focus:border-amber-400 outline-none transition-colors resize-none text-white"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 font-semibold text-sm uppercase tracking-wider hover:from-amber-500 hover:to-amber-400 transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-amber-900/20 rounded-sm p-8">
              <div className="text-amber-400 text-xs uppercase tracking-widest mb-4">Headquarters</div>
              <p className="text-slate-300 font-light leading-relaxed">
                One Luxury Plaza<br />
                Penthouse Suite<br />
                Beverly Hills, CA 90210<br />
                United States
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-amber-900/20 rounded-sm p-8">
              <div className="text-amber-400 text-xs uppercase tracking-widest mb-4">Direct Line</div>
              <p className="text-slate-300 font-light text-lg">+1 (555) 999-8888</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-amber-900/20 rounded-sm p-8">
              <div className="text-amber-400 text-xs uppercase tracking-widest mb-4">Email</div>
              <p className="text-slate-300 font-light">concierge@luxury.estate</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-amber-900/20 rounded-sm p-8">
              <div className="text-amber-400 text-xs uppercase tracking-widest mb-4">Business Hours</div>
              <div className="space-y-2 text-slate-300 font-light text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-amber-900/20 rounded-sm p-8">
              <div className="text-amber-400 text-xs uppercase tracking-widest mb-4">Connect</div>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
                  LinkedIn
                </a>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
