export default function RetroDivider() {
  return (
    <div className="w-full min-h-screen bg-[#f5e6d3] p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-[#8b4513] mb-6 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>Horizontal</h2>

        {/* Vintage Line */}
        <div className="w-full h-1 bg-[#cd853f] shadow-[0_2px_0_#8b4513]"></div>

        {/* Double Vintage */}
        <div className="space-y-2">
          <div className="w-full h-0.5 bg-[#d2691e]"></div>
          <div className="w-full h-0.5 bg-[#d2691e]"></div>
        </div>

        {/* Striped Pattern */}
        <div className="w-full h-3 bg-gradient-to-r from-[#ff6347] via-[#ffa500] to-[#ff6347] bg-[length:20px_20px]"></div>

        {/* Dotted Retro */}
        <div className="flex gap-2 justify-center">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#cd853f] rounded-full"></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-[#8b4513] mb-6 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>With Text</h2>

        {/* Center Text - Vintage Badge */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#cd853f]"></div>
          <div className="px-6 py-2 bg-[#ff6347] border-2 border-[#8b4513] shadow-[3px_3px_0_#8b4513]" style={{ fontFamily: 'monospace' }}>
            <span className="text-sm text-[#f5e6d3] font-bold uppercase">OR</span>
          </div>
          <div className="flex-1 h-1 bg-[#cd853f]"></div>
        </div>

        {/* Starburst Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-[#d2691e]"></div>
          <div className="relative px-8 py-3 bg-[#ffa500] border-4 border-[#8b4513]">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#ff6347] border-2 border-[#8b4513]"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff6347] border-2 border-[#8b4513]"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#ff6347] border-2 border-[#8b4513]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#ff6347] border-2 border-[#8b4513]"></div>
            <span className="text-base text-[#8b4513] font-black uppercase" style={{ fontFamily: 'monospace' }}>CLASSIC</span>
          </div>
          <div className="flex-1 h-0.5 bg-[#d2691e]"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-[#8b4513] mb-6 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>With Icon</h2>

        {/* Retro Circle */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#cd853f]"></div>
          <div className="p-4 bg-[#ffa500] border-4 border-[#8b4513] rounded-full shadow-[4px_4px_0_#8b4513]">
            <svg className="w-5 h-5 text-[#8b4513]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="flex-1 h-1 bg-[#cd853f]"></div>
        </div>

        {/* TV Screen Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-[#d2691e]"></div>
          <div className="p-3 bg-[#2f4f4f] border-4 border-[#8b4513]">
            <div className="w-8 h-6 bg-[#98fb98] border-2 border-[#6b8e23] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#2f4f4f] rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 h-1 bg-[#d2691e]"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-bold text-[#8b4513] mb-6 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-[#ffe4b5] border-4 border-[#8b4513] shadow-[6px_6px_0_#cd853f] p-6">
          <div className="text-sm text-[#8b4513] font-bold uppercase" style={{ fontFamily: 'monospace' }}>ITEM 1</div>
          <div className="w-1 h-full bg-[#cd853f]"></div>
          <div className="text-sm text-[#8b4513] font-bold uppercase" style={{ fontFamily: 'monospace' }}>ITEM 2</div>
          <div className="w-1 h-full bg-[#d2691e]"></div>
          <div className="text-sm text-[#8b4513] font-bold uppercase" style={{ fontFamily: 'monospace' }}>ITEM 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-[#8b4513] mb-6 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>Special</h2>

        {/* Zigzag Pattern */}
        <div className="w-full h-2 bg-[#ff6347]" style={{
          clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 50%, 95% 50%, 90% 50%, 85% 50%, 80% 50%, 75% 50%, 70% 50%, 65% 50%, 60% 50%, 55% 50%, 50% 50%, 45% 50%, 40% 50%, 35% 50%, 30% 50%, 25% 50%, 20% 50%, 15% 50%, 10% 50%, 5% 50%, 0 50%)'
        }}></div>

        {/* Triple Color Stripe */}
        <div className="w-full h-4 flex">
          <div className="flex-1 bg-[#ff6347]"></div>
          <div className="flex-1 bg-[#ffa500]"></div>
          <div className="flex-1 bg-[#98fb98]"></div>
        </div>
      </section>
    </div>
  );
}