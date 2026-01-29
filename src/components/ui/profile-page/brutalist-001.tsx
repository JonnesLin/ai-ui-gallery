export default function BrutalistProfilePage() {
  return (
    <div className="min-h-screen bg-yellow-300 p-4">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="bg-black text-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-40 h-40 bg-red-500 border-4 border-black flex-shrink-0"></div>
            <div className="flex-1">
              <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">ALEX CHEN</h1>
              <p className="text-xl mb-6 uppercase tracking-wide">GRAPHIC DESIGNER / ARTIST</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black border-4 border-black font-black uppercase hover:bg-yellow-300 transition-colors">
                  EDIT PROFILE
                </button>
                <button className="px-8 py-4 bg-red-500 text-white border-4 border-black font-black uppercase hover:bg-red-600 transition-colors">
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-5xl font-black mb-2">567</div>
            <div className="text-xl font-bold uppercase">POSTS</div>
          </div>
          <div className="bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-5xl font-black mb-2">89K</div>
            <div className="text-xl font-bold uppercase">FOLLOWERS</div>
          </div>
          <div className="bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-5xl font-black mb-2">1.2K</div>
            <div className="text-xl font-bold uppercase">FOLLOWING</div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-cyan-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="text-3xl font-black mb-6 uppercase">INFORMATION</h2>
          <div className="space-y-4 text-lg font-bold">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white"></div>
              </div>
              <span className="uppercase">NEW YORK, USA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white"></div>
              </div>
              <span className="uppercase">ALEXCHEN.DESIGN</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white"></div>
              </div>
              <span className="uppercase">CONTACT@ALEXCHEN.DESIGN</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="text-3xl font-black mb-4 uppercase">ABOUT ME</h2>
          <p className="text-xl font-bold leading-relaxed uppercase">
            CREATING BOLD, UNAPOLOGETIC DESIGNS THAT BREAK THE RULES. EXPERIMENTAL ARTIST AND VISUAL DESIGNER.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-pink-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h2 className="text-3xl font-black mb-6 uppercase">SKILLS</h2>
          <div className="flex flex-wrap gap-4">
            {['DESIGN', 'ILLUSTRATION', 'TYPOGRAPHY', 'BRANDING', '3D', 'ANIMATION'].map((skill) => (
              <div key={skill} className="px-6 py-3 bg-black text-white border-4 border-black font-black text-lg uppercase">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Work */}
        <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-black mb-6 uppercase">RECENT WORK</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square border-8 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  i % 3 === 0 ? 'bg-red-500' :
                  i % 3 === 1 ? 'bg-blue-500' :
                  'bg-green-500'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {['INSTAGRAM', 'TWITTER', 'BEHANCE', 'DRIBBBLE'].map((social) => (
            <button
              key={social}
              className="px-8 py-4 bg-black text-white border-4 border-black font-black uppercase hover:bg-white hover:text-black transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              {social}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
