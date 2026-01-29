export default function BrutalistDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-black text-black mb-6 uppercase tracking-tight">Horizontal</h2>

        {/* Thick Black */}
        <div className="w-full h-2 bg-black"></div>

        {/* Extra Thick */}
        <div className="w-full h-4 bg-black"></div>

        {/* Double Line */}
        <div className="space-y-2">
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
        </div>

        {/* Triple Line */}
        <div className="space-y-1">
          <div className="w-full h-px bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-px bg-black"></div>
        </div>

        {/* Dashed Heavy */}
        <div className="w-full border-t-4 border-dashed border-black"></div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-black text-black mb-6 uppercase tracking-tight">With Text</h2>

        {/* Bold Text Center */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-black"></div>
          <span className="text-lg font-black uppercase tracking-tighter">OR</span>
          <div className="flex-1 h-2 bg-black"></div>
        </div>

        {/* Text with Box */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-black"></div>
          <div className="px-6 py-2 bg-black border-4 border-black">
            <span className="text-sm font-black text-white uppercase tracking-tight">SECTION</span>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        {/* Text with Heavy Border */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-black"></div>
          <div className="px-8 py-3 bg-white border-4 border-black">
            <span className="text-base font-black uppercase tracking-tighter">BREAK</span>
          </div>
          <div className="flex-1 h-2 bg-black"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-black text-black mb-6 uppercase tracking-tight">With Icon</h2>

        {/* Square Icon Container */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-black"></div>
          <div className="p-3 bg-black border-4 border-black">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 h-2 bg-black"></div>
        </div>

        {/* White Background Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-black"></div>
          <div className="p-4 bg-white border-4 border-black">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <rect x="10" y="10" width="4" height="4" />
            </svg>
          </div>
          <div className="flex-1 h-2 bg-black"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-black text-black mb-6 uppercase tracking-tight">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-40 border-4 border-black p-6 bg-white">
          <div className="text-base font-black uppercase">ITEM 1</div>
          <div className="w-1 h-full bg-black"></div>
          <div className="text-base font-black uppercase">ITEM 2</div>
          <div className="w-2 h-full bg-black"></div>
          <div className="text-base font-black uppercase">ITEM 3</div>
        </div>
      </section>

      {/* Decorative Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-black text-black mb-6 uppercase tracking-tight">Decorative</h2>

        {/* Asymmetric */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-3 bg-black"></div>
          <div className="flex-1 h-1 bg-black"></div>
          <div className="w-20 h-3 bg-black"></div>
        </div>

        {/* Stepped */}
        <div className="space-y-1">
          <div className="w-1/4 h-2 bg-black"></div>
          <div className="w-2/4 h-2 bg-black"></div>
          <div className="w-3/4 h-2 bg-black"></div>
          <div className="w-full h-2 bg-black"></div>
        </div>

        {/* Centered Block */}
        <div className="flex justify-center">
          <div className="w-48 h-4 bg-black"></div>
        </div>
      </section>
    </div>
  );
}