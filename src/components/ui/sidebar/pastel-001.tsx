import { useState } from 'react'

export default function PastelSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', color: 'bg-pink-200' },
    { id: 'projects', icon: '📂', label: 'Projects', color: 'bg-purple-200' },
    { id: 'team', icon: '💜', label: 'Team', color: 'bg-blue-200' },
    { id: 'calendar', icon: '📅', label: 'Calendar', color: 'bg-green-200' },
    { id: 'settings', icon: '⚙️', label: 'Settings', color: 'bg-yellow-200' },
  ]

  return (
    <div className="flex h-[600px] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-64'
        } bg-white/70 backdrop-blur-sm border-r border-pink-200/50 transition-all duration-300 ease-in-out relative flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                <span className="text-white text-lg">✿</span>
              </div>
              <span className="font-semibold text-purple-600">Pastel</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-9 h-9 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500 transition-colors"
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
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all duration-200 ${
                    active === item.id
                      ? `${item.color} text-gray-700 shadow-sm`
                      : 'text-gray-500 hover:bg-white/50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cute Card */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌸</span>
              <span className="font-medium text-purple-700 text-sm">Spring Sale!</span>
            </div>
            <p className="text-xs text-purple-600/80">Get 20% off on all premium features</p>
            <button className="mt-3 w-full py-2 rounded-xl bg-white/80 text-purple-600 text-xs font-medium hover:bg-white transition-colors">
              Learn More
            </button>
          </div>
        )}

        {/* User */}
        <div className="border-t border-pink-200/50 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-pink-200">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-pink-400">Premium User</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full rounded-3xl bg-white/60 backdrop-blur-sm border border-pink-200/30 p-6 shadow-xl shadow-pink-100/50">
          <h1 className="text-xl font-semibold text-purple-600">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-pink-400">Soft colors and gentle vibes</p>
        </div>
      </main>
    </div>
  )
}
