export default function NeumorphismDivider() {
  return (
    <div className="w-full min-h-screen bg-[#e0e5ec] p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#4a5568] mb-6">Horizontal</h2>

        {/* Pressed Line */}
        <div className="w-full h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>

        {/* Raised Line */}
        <div className="w-full h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>

        {/* Deep Pressed */}
        <div className="w-full h-2 rounded-full shadow-[inset_3px_3px_7px_rgba(0,0,0,0.15),inset_-3px_-3px_7px_rgba(255,255,255,0.8)]"></div>

        {/* Flat with Shadow */}
        <div className="w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-[#a0aec0] to-transparent opacity-30"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mt-px"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#4a5568] mb-6">With Text</h2>

        {/* Center Text - Raised */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
          <div className="px-6 py-2 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.7)] bg-[#e0e5ec]">
            <span className="text-xs text-[#4a5568] uppercase tracking-wider font-medium">or</span>
          </div>
          <div className="flex-1 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
        </div>

        {/* Center Text - Pressed */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
          <div className="px-6 py-2 rounded-xl shadow-[inset_3px_3px_7px_rgba(0,0,0,0.1),inset_-3px_-3px_7px_rgba(255,255,255,0.7)]">
            <span className="text-xs text-[#4a5568] uppercase tracking-wider font-medium">Section</span>
          </div>
          <div className="flex-1 h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#4a5568] mb-6">With Icon</h2>

        {/* Raised Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
          <div className="p-3 rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.7)] bg-[#e0e5ec]">
            <svg className="w-4 h-4 text-[#4a5568]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="flex-1 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
        </div>

        {/* Pressed Circle */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
          <div className="w-4 h-4 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
          <div className="flex-1 h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-[#4a5568] mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-[#e0e5ec] rounded-2xl shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] p-6">
          <div className="text-sm text-[#4a5568] font-medium">Item 1</div>
          <div className="w-1 h-full rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
          <div className="text-sm text-[#4a5568] font-medium">Item 2</div>
          <div className="w-1 h-full rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
          <div className="text-sm text-[#4a5568] font-medium">Item 3</div>
        </div>
      </section>

      {/* Decorative Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-[#4a5568] mb-6">Decorative</h2>

        {/* Triple Line */}
        <div className="flex justify-center gap-2">
          <div className="w-24 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
          <div className="w-24 h-1 rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.7)] bg-[#e0e5ec]"></div>
          <div className="w-24 h-1 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]"></div>
        </div>
      </section>
    </div>
  );
}