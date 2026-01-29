export default function GradientAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-gray-50">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <div className="p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 rounded-full border border-white" />
          </div>
          <div className="p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 rounded-full border border-white" />
          </div>
          <div className="p-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 rounded-full border-2 border-white" />
          </div>
          <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white font-medium shadow-lg shadow-rose-500/25">
            JD
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg shadow-violet-500/25">
            SC
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-medium shadow-lg shadow-cyan-500/25">
            MK
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-medium shadow-lg shadow-emerald-500/25">
            AL
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="p-0.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500">
              <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-11 h-11 rounded-full border-2 border-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <div className="p-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500">
              <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-11 h-11 rounded-full border-2 border-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-r from-amber-400 to-orange-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <div className="p-0.5 rounded-full bg-gradient-to-r from-red-400 to-rose-500">
              <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-11 h-11 rounded-full border-2 border-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-r from-red-400 to-rose-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <div className="p-0.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-400">
              <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-11 h-11 rounded-full border-2 border-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-r from-gray-300 to-gray-400 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Avatar Group</h3>
        <div className="flex -space-x-3">
          <div className="p-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
            <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="p-0.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500">
            <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="p-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
            <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center text-sm font-medium text-white">
            +5
          </div>
        </div>
      </div>

      {/* Rainbow Ring */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Rainbow Ring</h3>
        <div className="flex items-center gap-5">
          <div className="p-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
            <img src="https://i.pravatar.cc/48?img=10" alt="Rainbow avatar" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>
          <div className="p-1 rounded-full bg-[conic-gradient(from_0deg,#f43f5e,#ec4899,#a855f7,#6366f1,#3b82f6,#06b6d4,#10b981,#84cc16,#eab308,#f97316,#f43f5e)]">
            <img src="https://i.pravatar.cc/48?img=11" alt="Rainbow avatar" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
