export default function CorporateAvatar() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-slate-50">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <img src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" className="w-6 h-6 rounded-md border border-slate-200" />
          <img src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" className="w-8 h-8 rounded-md border border-slate-200" />
          <img src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" className="w-10 h-10 rounded-md border border-slate-200" />
          <img src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" className="w-14 h-14 rounded-lg border border-slate-200" />
          <img src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" className="w-20 h-20 rounded-lg border border-slate-200" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            JD
          </div>
          <div className="w-10 h-10 rounded-md bg-slate-700 flex items-center justify-center text-white text-sm font-semibold">
            SC
          </div>
          <div className="w-10 h-10 rounded-md bg-emerald-600 flex items-center justify-center text-white text-sm font-semibold">
            MK
          </div>
          <div className="w-10 h-10 rounded-md bg-amber-600 flex items-center justify-center text-white text-sm font-semibold">
            AL
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=2" alt="User online" className="w-10 h-10 rounded-md border border-slate-200" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=3" alt="User away" className="w-10 h-10 rounded-md border border-slate-200" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-amber-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=4" alt="User busy" className="w-10 h-10 rounded-md border border-slate-200" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="relative">
            <img src="https://i.pravatar.cc/48?img=5" alt="User offline" className="w-10 h-10 rounded-md border border-slate-200" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-slate-300 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Avatar Group</h3>
        <div className="flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=6" alt="Team member" className="w-9 h-9 rounded-md border-2 border-white shadow-sm" />
          <img src="https://i.pravatar.cc/40?img=7" alt="Team member" className="w-9 h-9 rounded-md border-2 border-white shadow-sm" />
          <img src="https://i.pravatar.cc/40?img=8" alt="Team member" className="w-9 h-9 rounded-md border-2 border-white shadow-sm" />
          <img src="https://i.pravatar.cc/40?img=9" alt="Team member" className="w-9 h-9 rounded-md border-2 border-white shadow-sm" />
          <div className="w-9 h-9 rounded-md border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">
            +3
          </div>
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">With Label</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/48?img=10" alt="John Doe" className="w-10 h-10 rounded-md border border-slate-200" />
            <div>
              <p className="text-sm font-semibold text-slate-800">John Doe</p>
              <p className="text-xs text-slate-500">Product Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/48?img=11" alt="Sarah Chen" className="w-10 h-10 rounded-md border border-slate-200" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Sarah Chen</p>
              <p className="text-xs text-slate-500">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
