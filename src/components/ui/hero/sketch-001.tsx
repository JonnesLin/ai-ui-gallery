export default function SketchHero() {
  return (
    <section className="min-h-screen bg-[#fffef9] relative overflow-hidden flex items-center justify-center px-6">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* Hand-drawn decorations */}
      <svg className="absolute top-20 left-10 w-48 h-48 text-slate-300 hidden lg:block" viewBox="0 0 200 200">
        {/* Squiggly circle */}
        <path
          d="M100,20 C140,25 175,55 178,100 C180,145 148,178 100,180 C52,182 22,148 20,100 C18,52 55,22 100,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5,5"
        />
      </svg>
      <svg className="absolute bottom-20 right-10 w-40 h-40 text-slate-300 hidden lg:block" viewBox="0 0 100 100">
        {/* Arrow */}
        <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M80,40 L90,50 L80,60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Stars */}
      <svg className="absolute top-1/4 right-1/4 w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2 L14,8 L20,8 L15,12 L17,20 L12,15 L7,20 L9,12 L4,8 L10,8 Z" />
      </svg>
      <svg className="absolute bottom-1/3 left-1/4 w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2 L14,8 L20,8 L15,12 L17,20 L12,15 L7,20 L9,12 L4,8 L10,8 Z" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Hand-drawn underline badge */}
        <div className="inline-block mb-8 relative">
          <span className="text-slate-600 font-handwriting text-lg">Welcome to our world!</span>
          <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10">
            <path d="M0,5 Q25,8 50,5 T100,5" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-8 leading-tight relative">
          <span className="relative inline-block">
            Hand
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 10">
              <path d="M0,8 Q20,2 40,8 T80,8 T100,5" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="block mt-4">
            <span className="relative inline-block">
              Crafted
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 10">
                <path d="M5,5 Q25,10 50,5 T95,5" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            {' '}
            <span className="text-slate-400">Ideas</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          Every great project starts with a sketch on paper.
          <br />
          Lets bring your napkin ideas to life, together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-10 py-4 bg-slate-800 text-white font-medium rounded-none transform hover:-rotate-1 transition-transform">
            <span className="relative z-10">Start Sketching</span>
            {/* Hand-drawn border effect */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
              <rect x="2" y="2" width="196" height="56" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="4,2" />
            </svg>
          </button>
          <button className="group relative px-10 py-4 border-2 border-dashed border-slate-300 text-slate-600 font-medium rounded-none hover:border-slate-400 transform hover:rotate-1 transition-all">
            View Portfolio
          </button>
        </div>

        {/* Notebook lines decoration */}
        <div className="mt-20 relative max-w-md mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-red-300" style={{ left: '40px' }} />
          <div className="space-y-4 pl-12">
            <div className="h-px bg-blue-200" />
            <p className="text-left text-slate-400 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
              Note: Great ideas dont need fancy tools
            </p>
            <div className="h-px bg-blue-200" />
            <div className="h-px bg-blue-200" />
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'handwriting';
          src: local('Comic Sans MS'), local('Chalkboard'), local('cursive');
        }
        .font-handwriting {
          font-family: 'handwriting', cursive;
        }
      `}</style>
    </section>
  );
}
