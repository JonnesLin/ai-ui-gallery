export default function MonochromeDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Horizontal</h2>

        {/* Thin Black */}
        <div className="w-full h-px bg-black"></div>

        {/* Medium Black */}
        <div className="w-full h-0.5 bg-black"></div>

        {/* Thick Black */}
        <div className="w-full h-1 bg-black"></div>

        {/* Gray Scale */}
        <div className="space-y-1">
          <div className="w-full h-px bg-gray-800"></div>
          <div className="w-full h-px bg-gray-600"></div>
          <div className="w-full h-px bg-gray-400"></div>
          <div className="w-full h-px bg-gray-200"></div>
        </div>

        {/* Dotted Pattern */}
        <div className="flex gap-2">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black"></div>
          ))}
        </div>

        {/* Striped */}
        <div className="flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`flex-1 h-2 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">With Text</h2>

        {/* Center Text - Simple */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-black"></div>
          <span className="text-xs text-black uppercase tracking-widest font-bold">OR</span>
          <div className="flex-1 h-px bg-black"></div>
        </div>

        {/* Black Box */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-0.5 bg-gray-800"></div>
          <div className="px-8 py-3 bg-black">
            <span className="text-sm text-white uppercase tracking-wider font-medium">Section</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-800"></div>
        </div>

        {/* White Box with Border */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-black"></div>
          <div className="px-8 py-3 bg-white border-2 border-black">
            <span className="text-sm text-black uppercase tracking-wider font-medium">Content</span>
          </div>
          <div className="flex-1 h-px bg-black"></div>
        </div>

        {/* Gray Box */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <div className="px-6 py-2 bg-gray-200 border border-gray-800">
            <span className="text-sm text-gray-900 uppercase tracking-wide font-medium">Break</span>
          </div>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">With Icon</h2>

        {/* Black Circle Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-black"></div>
          <div className="w-10 h-10 bg-black flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-black"></div>
        </div>

        {/* White Icon with Border */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-0.5 bg-gray-800"></div>
          <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 h-0.5 bg-gray-800"></div>
        </div>

        {/* Square Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-600"></div>
          <div className="w-8 h-8 bg-gray-900 border border-gray-400">
            <svg className="w-full h-full text-white p-1.5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        {/* Diamond */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-black"></div>
          <div className="w-6 h-6 bg-black rotate-45"></div>
          <div className="flex-1 h-px bg-black"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Vertical</h2>
        <div className="flex items-center justify-center gap-12 h-32 border-2 border-black p-6">
          <div className="text-sm text-black font-medium uppercase">Item 1</div>
          <div className="w-px h-full bg-black"></div>
          <div className="text-sm text-black font-medium uppercase">Item 2</div>
          <div className="w-0.5 h-full bg-gray-800"></div>
          <div className="text-sm text-black font-medium uppercase">Item 3</div>
          <div className="w-1 h-full bg-gray-600"></div>
          <div className="text-sm text-black font-medium uppercase">Item 4</div>
        </div>
      </section>

      {/* Decorative Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Decorative</h2>

        {/* Gradient Gray */}
        <div className="flex">
          {[...Array(100)].map((_, i) => {
            const opacity = Math.abs(50 - i) / 50;
            return (
              <div
                key={i}
                className="flex-1 h-1"
                style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
              ></div>
            );
          })}
        </div>

        {/* Checkered Pattern */}
        <div className="flex h-3">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-gray-400'}`}></div>
          ))}
        </div>

        {/* Alternating Heights */}
        <div className="flex gap-1 items-center justify-center">
          {[4, 8, 12, 16, 12, 8, 4, 8, 12, 16, 12, 8, 4, 8, 12, 16, 12, 8, 4].map((h, i) => (
            <div key={i} className="w-2 bg-black" style={{ height: `${h}px` }}></div>
          ))}
        </div>

        {/* Triple Line */}
        <div className="space-y-2">
          <div className="w-full h-px bg-black"></div>
          <div className="w-full h-0.5 bg-gray-600"></div>
          <div className="w-full h-px bg-gray-400"></div>
        </div>
      </section>
    </div>
  );
}