export default function RetroProfilePage() {
  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="max-w-5xl mx-auto py-12">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-orange-400 to-rose-400 rounded-3xl p-1 mb-8 shadow-xl">
          <div className="bg-amber-50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 border-8 border-white shadow-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-3" style={{ fontFamily: 'system-ui' }}>
                  Jessica Martinez
                </h1>
                <p className="text-xl text-amber-900 mb-6 font-bold">Retro Design Enthusiast & Creative Director</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    Edit Profile
                  </button>
                  <button className="px-8 py-3 bg-white border-4 border-orange-500 text-orange-600 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-1 shadow-lg">
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">892</div>
              <div className="text-amber-900 font-bold uppercase text-sm tracking-wider">Vibes</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl p-1 shadow-lg">
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-pink-600 mb-2">34.2k</div>
              <div className="text-amber-900 font-bold uppercase text-sm tracking-wider">Followers</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl p-1 shadow-lg">
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">567</div>
              <div className="text-amber-900 font-bold uppercase text-sm tracking-wider">Following</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl p-1 mb-8 shadow-xl">
          <div className="bg-amber-50 rounded-3xl p-8">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-6">
              ABOUT ME
            </h2>
            <p className="text-lg text-amber-900 leading-relaxed mb-6">
              Bringing back the groovy vibes of the 70s and 80s through modern design.
              Passionate about vintage aesthetics, bold colors, and funky typography.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-amber-900 font-bold">Los Angeles, California</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                </div>
                <span className="text-amber-900 font-bold">retro-jessica.design</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-amber-900 font-bold">jessica@retro.design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-1 mb-8 shadow-xl">
          <div className="bg-amber-50 rounded-3xl p-8">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6">
              INTERESTS
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Vintage Design', 'Typography', 'Photography', 'Vinyl Records', 'Retro Gaming', 'Analog Art'].map((interest) => (
                <span
                  key={interest}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl p-1 shadow-xl">
          <div className="bg-amber-50 rounded-3xl p-8">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              RECENT POSTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all ${
                    i % 6 === 0 ? 'from-yellow-400 to-orange-400' :
                    i % 6 === 1 ? 'from-orange-400 to-pink-400' :
                    i % 6 === 2 ? 'from-pink-400 to-purple-400' :
                    i % 6 === 3 ? 'from-purple-400 to-indigo-400' :
                    i % 6 === 4 ? 'from-cyan-400 to-blue-400' :
                    'from-green-400 to-emerald-400'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
