import { useState } from 'react'

export default function GradientSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'projects', icon: '📁', label: 'Projects' },
    { id: 'team', icon: '👥', label: 'Team' },
    { id: 'calendar', icon: '📅', label: 'Calendar' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-slate-100">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-64'
        } bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 ease-in-out relative flex flex-col shadow-xl shadow-purple-500/25`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-white">Gradient</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
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
        <nav className="flex-1 py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-white text-purple-600 shadow-lg shadow-black/10'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stats Card */}
        {!collapsed && (
          <div className="mx-4 p-4 rounded-xl bg-white/10 backdrop-blur mb-4">
            <p className="text-xs text-white/60 uppercase tracking-wider">Storage Used</p>
            <p className="text-2xl font-bold text-white mt-1">75%</p>
            <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-white rounded-full" />
            </div>
          </div>
        )}

        {/* User */}
        <div className="p-4 border-t border-white/10">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold text-sm shadow-lg">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-xs text-white/60">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full rounded-2xl bg-white shadow-xl shadow-purple-500/5 p-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Vibrant gradient with smooth transitions</p>
        </div>
      </main>
    </div>
  )
}
