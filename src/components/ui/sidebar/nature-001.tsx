import { useState } from 'react'

export default function NatureSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '🌿', label: 'Dashboard' },
    { id: 'garden', icon: '🌺', label: 'Garden' },
    { id: 'wildlife', icon: '🦋', label: 'Wildlife' },
    { id: 'weather', icon: '☀️', label: 'Weather' },
    { id: 'settings', icon: '🍃', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-68'
        } bg-gradient-to-b from-emerald-800 via-green-800 to-teal-900 transition-all duration-300 ease-in-out relative flex flex-col overflow-hidden`}
      >
        {/* Decorative leaves */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-300">
            <path d="M50 0 C30 20 10 40 10 60 C10 80 30 100 50 100 C70 100 90 80 90 60 C90 40 70 20 50 0" />
          </svg>
        </div>
        <div className="absolute bottom-20 -left-10 w-40 h-40 opacity-10 rotate-45">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-300">
            <path d="M50 0 C30 20 10 40 10 60 C10 80 30 100 50 100 C70 100 90 80 90 60 C90 40 70 20 50 0" />
          </svg>
        </div>

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 relative z-10">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-900/30">
                <span className="text-xl">🌲</span>
              </div>
              <span className="font-semibold text-green-100 text-lg">Naturea</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 rounded-full bg-green-700/50 hover:bg-green-600/50 flex items-center justify-center text-green-200 transition-colors"
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
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-gradient-to-r from-green-600/40 to-emerald-600/20 text-green-100 shadow-lg shadow-green-900/20'
                      : 'text-green-300 hover:bg-green-700/30 hover:text-green-100'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Eco Stats */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-4 rounded-xl bg-green-700/30 backdrop-blur relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌍</span>
              <span className="font-medium text-green-100 text-sm">Eco Impact</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-xl font-bold text-green-100">127</p>
                <p className="text-xs text-green-400">Trees Planted</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-green-100">2.4t</p>
                <p className="text-xs text-green-400">CO2 Offset</p>
              </div>
            </div>
          </div>
        )}

        {/* User */}
        <div className="border-t border-green-700/50 p-4 relative z-10">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-semibold text-sm ring-2 ring-green-500/30 shadow-lg">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="font-medium text-green-100">John Doe</p>
                <p className="text-xs text-green-400">Eco Warrior</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full rounded-2xl bg-white/70 backdrop-blur-sm border border-green-200/50 p-6 shadow-xl shadow-green-100">
          <h1 className="text-xl font-semibold text-green-800">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-green-600">Organic design inspired by nature</p>
        </div>
      </main>
    </div>
  )
}
