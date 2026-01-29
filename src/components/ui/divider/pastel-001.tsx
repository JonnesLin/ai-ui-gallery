export default function PastelDivider() {
  return (
    <div className="w-full min-h-screen bg-[#fef6fb] p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#a78bca] mb-6">Horizontal</h2>

        {/* Soft Pink */}
        <div className="w-full h-1 bg-[#ffc0cb] rounded-full"></div>

        {/* Soft Blue */}
        <div className="w-full h-1 bg-[#b4d7f1] rounded-full"></div>

        {/* Soft Purple */}
        <div className="w-full h-1 bg-[#d4a5d4] rounded-full"></div>

        {/* Soft Green */}
        <div className="w-full h-1 bg-[#b5dda4] rounded-full"></div>

        {/* Rainbow Pastel */}
        <div className="w-full h-1.5 bg-gradient-to-r from-[#ffc0cb] via-[#b4d7f1] via-[#d4a5d4] to-[#b5dda4] rounded-full"></div>

        {/* Dotted */}
        <div className="flex gap-2 justify-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#ffc0cb] rounded-full opacity-60"></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#a78bca] mb-6">With Text</h2>

        {/* Center Text - Soft */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#ffc0cb] rounded-full"></div>
          <span className="text-sm text-[#a78bca] font-medium px-4 py-1.5 bg-white rounded-full shadow-sm">or</span>
          <div className="flex-1 h-1 bg-[#ffc0cb] rounded-full"></div>
        </div>

        {/* Pastel Card */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#b4d7f1]"></div>
          <div className="px-6 py-2 bg-gradient-to-r from-[#ffc0cb] to-[#b4d7f1] rounded-full shadow-sm">
            <span className="text-sm text-white font-medium">Sweet</span>
          </div>
          <div className="flex-1 h-px bg-[#ffc0cb]"></div>
        </div>

        {/* Cloud Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[#d4a5d4] to-[#d4a5d4] rounded-full"></div>
          <div className="px-8 py-3 bg-[#f0e5f5] rounded-2xl border-2 border-[#d4a5d4]">
            <span className="text-sm text-[#a78bca] font-medium">Dream</span>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-[#d4a5d4] to-[#d4a5d4] rounded-full"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#a78bca] mb-6">With Icon</h2>

        {/* Heart Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#ffc0cb] rounded-full"></div>
          <div className="p-3 bg-[#ffc0cb] rounded-full shadow-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="flex-1 h-1 bg-[#ffc0cb] rounded-full"></div>
        </div>

        {/* Star Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#b4d7f1] rounded-full"></div>
          <div className="p-3 bg-gradient-to-br from-[#ffc0cb] to-[#b4d7f1] rounded-full shadow-md">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 h-1 bg-[#b4d7f1] rounded-full"></div>
        </div>

        {/* Flower Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#d4a5d4] rounded-full"></div>
          <div className="relative">
            <div className="p-3 bg-white rounded-full border-2 border-[#d4a5d4] shadow-sm">
              <svg className="w-4 h-4 text-[#d4a5d4]" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="19" r="2"/>
                <circle cx="5" cy="12" r="2"/>
                <circle cx="19" cy="12" r="2"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 h-1 bg-[#d4a5d4] rounded-full"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-[#a78bca] mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-white rounded-3xl shadow-sm border-2 border-[#ffc0cb] p-6">
          <div className="text-sm text-[#a78bca] font-medium">Item 1</div>
          <div className="w-1 h-full bg-[#ffc0cb] rounded-full"></div>
          <div className="text-sm text-[#a78bca] font-medium">Item 2</div>
          <div className="w-1 h-full bg-[#b4d7f1] rounded-full"></div>
          <div className="text-sm text-[#a78bca] font-medium">Item 3</div>
        </div>
      </section>

      {/* Decorative Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#a78bca] mb-6">Decorative</h2>

        {/* Wavy */}
        <div className="w-full h-2">
          <svg viewBox="0 0 1200 20" className="w-full h-full">
            <path d="M0,10 Q30,0 60,10 T120,10 T180,10 T240,10 T300,10 T360,10 T420,10 T480,10 T540,10 T600,10 T660,10 T720,10 T780,10 T840,10 T900,10 T960,10 T1020,10 T1080,10 T1140,10 T1200,10"
                  fill="none" stroke="#ffc0cb" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Multi-color Dots */}
        <div className="flex gap-3 justify-center">
          {['#ffc0cb', '#b4d7f1', '#d4a5d4', '#b5dda4', '#ffc0cb', '#b4d7f1', '#d4a5d4', '#b5dda4'].map((color, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>

        {/* Gradient Fade */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#ffc0cb] to-transparent rounded-full"></div>
      </section>
    </div>
  );
}