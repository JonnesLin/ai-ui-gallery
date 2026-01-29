export default function RetroAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-amber-50">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">Sizes</h3>
        <div className="flex items-end gap-4">
          <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 rounded-full border-3 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 rounded-full border-4 border-amber-900 sepia" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-200 border-2 border-amber-900 flex items-center justify-center text-amber-900 font-bold font-mono shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
            JD
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-amber-900 flex items-center justify-center text-amber-900 font-bold font-mono shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
            SC
          </div>
          <div className="w-12 h-12 rounded-full bg-red-200 border-2 border-amber-900 flex items-center justify-center text-amber-900 font-bold font-mono shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
            MK
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-200 border-2 border-amber-900 flex items-center justify-center text-amber-900 font-bold font-mono shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]">
            AL
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-900 border-dashed flex items-center justify-center text-amber-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-900 border-dotted flex items-center justify-center text-amber-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-12 h-12 rounded-full border-2 border-amber-900 sepia shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border-2 border-amber-900 rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-12 h-12 rounded-full border-2 border-amber-900 sepia shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-600 border-2 border-amber-900 rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-12 h-12 rounded-full border-2 border-amber-900 sepia shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-700 border-2 border-amber-900 rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-12 h-12 rounded-full border-2 border-amber-900 sepia shadow-[2px_2px_0px_0px_rgba(120,53,15,0.5)]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-amber-600 border-2 border-amber-900 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">Avatar Group</h3>
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-10 h-10 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-10 h-10 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-10 h-10 rounded-full border-2 border-amber-900 sepia" />
          <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-10 h-10 rounded-full border-2 border-amber-900 sepia" />
          <div className="w-10 h-10 rounded-full border-2 border-amber-900 bg-amber-200 flex items-center justify-center text-sm font-bold text-amber-900 font-mono">
            +5
          </div>
        </div>
      </div>

      {/* Polaroid Style */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase font-mono">Polaroid Style</h3>
        <div className="flex items-center gap-4">
          <div className="bg-amber-100 p-1.5 pb-6 shadow-md rotate-2">
            <img src="https://i.pravatar.cc/64?img=10" alt="Polaroid avatar" className="w-16 h-16 sepia" />
          </div>
          <div className="bg-amber-100 p-1.5 pb-6 shadow-md -rotate-3">
            <img src="https://i.pravatar.cc/64?img=11" alt="Polaroid avatar" className="w-16 h-16 sepia" />
          </div>
          <div className="bg-amber-100 p-1.5 pb-6 shadow-md rotate-1">
            <img src="https://i.pravatar.cc/64?img=12" alt="Polaroid avatar" className="w-16 h-16 sepia" />
          </div>
        </div>
      </div>
    </div>
  );
}
