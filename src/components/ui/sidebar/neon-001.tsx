import { useState } from 'react'

export default function NeonSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '◈', label: 'Dashboard', color: 'from-pink-500 to-rose-500', glow: 'shadow-pink-500/50' },
    { id: 'projects', icon: '◈', label: 'Projects', color: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/50' },
    { id: 'team', icon: '◈', label: 'Team', color: 'from-green-400 to-emerald-500', glow: 'shadow-green-500/50' },
    { id: 'calendar', icon: '◈', label: 'Calendar', color: 'from-yellow-400 to-orange-500', glow: 'shadow-yellow-500/50' },
    { id: 'settings', icon: '◈', label: 'Settings', color: 'from-purple-400 to-violet-500', glow: 'shadow-purple-500/50' },
  ]

  const activeItem = menuItems.find((item) => item.id === active)

  return (
    <div className="flex h-[600px] bg-gray-950">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-72'
        } bg-gray-900/80 backdrop-blur-xl transition-all duration-300 ease-in-out relative flex flex-col border-r border-gray-800`}
      >
        {/* Neon glow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 relative z-10">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/50">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-xl">
                NEON
              </span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all hover:shadow-lg hover:shadow-pink-500/20"
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
        <nav className="flex-1 py-6 px-3 relative z-10">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm transition-all duration-300 ${
                    active === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg ${item.glow}`
                      : 'text-gray-500 hover:bg-gray-800/50 hover:text-gray-300'
                  }`}
                >
                  <span
                    className={`text-lg ${
                      active === item.id ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!collapsed && <span className="font-semibold">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Neon Stats */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-300">Power Level</span>
              <span className="text-xs text-cyan-400">MAX</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full w-4/5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse"
                style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
              />
            </div>
          </div>
        )}

        {/* User */}
        <div className="border-t border-gray-800 p-4 relative z-10">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-pink-500/30 ring-2 ring-pink-500/30">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-semibold text-gray-200">John Doe</p>
                <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 font-medium">
                  Pro Gamer
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        <div
          className={`h-full rounded-2xl bg-gray-900/50 backdrop-blur border border-gray-800 p-6 relative overflow-hidden`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeItem?.color}`}
            style={{ boxShadow: `0 0 20px ${activeItem?.glow}` }}
          />
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            {activeItem?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Vibrant neon glow aesthetic</p>
        </div>
      </main>
    </div>
  )
}
