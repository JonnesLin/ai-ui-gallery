export default function BrutalistAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-yellow-300">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 border-2 border-black" />
          <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 border-2 border-black" />
          <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 border-3 border-black" />
          <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 border-4 border-black" />
          <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 border-4 border-black" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            JD
          </div>
          <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            SC
          </div>
          <div className="w-12 h-12 bg-blue-500 border-4 border-black flex items-center justify-center text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            MK
          </div>
          <div className="w-12 h-12 bg-green-400 border-4 border-black flex items-center justify-center text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            AL
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-pink-400 border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-3 border-black"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-300 border-3 border-black"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 border-3 border-black"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 border-3 border-black"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Avatar Group</h3>
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-11 h-11 border-4 border-black bg-white" />
          <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-11 h-11 border-4 border-black bg-white" />
          <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-11 h-11 border-4 border-black bg-white" />
          <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-11 h-11 border-4 border-black bg-white" />
          <div className="w-11 h-11 border-4 border-black bg-white flex items-center justify-center text-sm font-black text-black">
            +5
          </div>
        </div>
      </div>

      {/* Rotated Variant */}
      <div className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Rotated Variant</h3>
        <div className="flex items-center gap-6">
          <div className="rotate-3">
            <img src="https://i.pravatar.cc/48?img=10" alt="Rotated avatar" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
          </div>
          <div className="-rotate-3">
            <div className="w-12 h-12 bg-cyan-400 border-4 border-black flex items-center justify-center text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              AB
            </div>
          </div>
          <div className="rotate-6">
            <img src="https://i.pravatar.cc/48?img=11" alt="Rotated avatar" className="w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
