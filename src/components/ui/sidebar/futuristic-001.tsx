import { useState } from 'react'

export default function FuturisticSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '⬡', label: 'DASHBOARD' },
    { id: 'projects', icon: '⬡', label: 'PROJECTS' },
    { id: 'analytics', icon: '⬡', label: 'ANALYTICS' },
    { id: 'network', icon: '⬡', label: 'NETWORK' },
    { id: 'settings', icon: '⬡', label: 'SETTINGS' },
  ]

  return (
    <div className="flex h-[600px] bg-slate-950">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-72'
        } bg-gradient-to-b from-slate-900 to-slate-950 transition-all duration-300 ease-in-out relative flex flex-col border-r border-blue-500/20`}
      >
        {/* Animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500" />

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-blue-500/20 rotate-45" />
                <div className="absolute inset-1 bg-blue-500/40 rotate-45" />
                <div className="absolute inset-2 bg-blue-500 rotate-45 flex items-center justify-center">
                  <span className="text-white text-xs font-bold -rotate-45">F</span>
                </div>
              </div>
              <div>
                <span className="block font-bold text-blue-400 text-sm tracking-[0.3em]">FUTURE</span>
                <span className="block text-[10px] text-purple-400 tracking-[0.2em]">INTERFACE</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 flex items-center justify-center text-blue-400 transition-all"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-xs tracking-[0.15em] transition-all duration-200 relative ${
                    active === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/10 text-blue-300'
                      : 'text-slate-500 hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                  style={{
                    clipPath: active === item.id
                      ? 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)'
                      : 'none',
                  }}
                >
                  {active === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                  )}
                  <span className="text-purple-500 text-[10px]">0{index + 1}</span>
                  <span className={active === item.id ? 'text-blue-400' : ''}>{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* System Status */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-4 border border-blue-500/20 bg-blue-500/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-blue-400 tracking-[0.2em]">SYSTEM.STATUS</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-100" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse delay-200" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">CORE.TEMP</span>
                <span className="text-blue-400">47.2°C</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">MEM.USAGE</span>
                <span className="text-purple-400">64%</span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* User */}
        <div className="border-t border-blue-500/20 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-11 h-11 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rotate-45" />
              <div className="absolute inset-0.5 bg-slate-900 rotate-45 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-sm -rotate-45">JD</span>
              </div>
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-blue-300 tracking-wide">JOHN.DOE</p>
                <p className="text-[10px] text-purple-400 tracking-[0.15em]">ADMIN.LVL_5</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full bg-slate-900/50 border border-blue-500/20 p-6 relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-purple-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-500/50" />
          <h1 className="text-xl font-bold text-blue-300 tracking-[0.1em]">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-slate-500">Advanced holographic interface</p>
        </div>
      </main>
    </div>
  )
}
