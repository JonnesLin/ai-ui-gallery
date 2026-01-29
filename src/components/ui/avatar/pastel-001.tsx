export default function PastelAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 rounded-full ring-2 ring-pink-200" />
          <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 rounded-full ring-2 ring-purple-200" />
          <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 rounded-full ring-2 ring-blue-200" />
          <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 rounded-full ring-3 ring-mint-200 ring-green-200" />
          <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 rounded-full ring-4 ring-yellow-200" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-medium">
            JD
          </div>
          <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-medium">
            SC
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-medium">
            MK
          </div>
          <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-medium">
            AL
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-600 font-medium">
            RB
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-12 h-12 rounded-full ring-2 ring-pink-200" />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-300 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-12 h-12 rounded-full ring-2 ring-purple-200" />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-yellow-300 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-12 h-12 rounded-full ring-2 ring-blue-200" />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-300 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-12 h-12 rounded-full ring-2 ring-green-200" />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">Avatar Group</h3>
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-10 h-10 rounded-full ring-2 ring-white" />
          <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-10 h-10 rounded-full ring-2 ring-white" />
          <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-10 h-10 rounded-full ring-2 ring-white" />
          <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-10 h-10 rounded-full ring-2 ring-white" />
          <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-sm font-medium text-purple-600">
            +5
          </div>
        </div>
      </div>

      {/* Soft Shadow */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-purple-400 uppercase">Soft Shadow</h3>
        <div className="flex items-center gap-5">
          <img src="https://i.pravatar.cc/48?img=10" alt="Shadow avatar" className="w-12 h-12 rounded-full shadow-lg shadow-pink-200/50" />
          <img src="https://i.pravatar.cc/48?img=11" alt="Shadow avatar" className="w-12 h-12 rounded-full shadow-lg shadow-purple-200/50" />
          <img src="https://i.pravatar.cc/48?img=12" alt="Shadow avatar" className="w-12 h-12 rounded-full shadow-lg shadow-blue-200/50" />
        </div>
      </div>
    </div>
  );
}
