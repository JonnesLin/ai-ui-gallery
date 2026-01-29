import { useState } from 'react'

export default function MinimalistSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '○', label: 'Dashboard' },
    { id: 'projects', icon: '□', label: 'Projects' },
    { id: 'team', icon: '◇', label: 'Team' },
    { id: 'calendar', icon: '△', label: 'Calendar' },
    { id: 'settings', icon: '◎', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-gray-50 font-light">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-64'
        } bg-white border-r border-gray-100 transition-all duration-300 ease-in-out relative flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          {!collapsed && (
            <span className="text-sm font-light tracking-[0.3em] text-gray-900 uppercase">
              Minima
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-3 text-sm tracking-wide transition-all duration-200 ${
                    active === item.id
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User */}
        <div className="border-t border-gray-100 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">JD</span>
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm text-gray-900">John Doe</p>
                <p className="text-xs text-gray-400 tracking-wide">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="h-full rounded-lg border border-gray-100 bg-white p-6">
          <h1 className="text-lg font-light text-gray-900 tracking-wide">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-400">Minimalist design with clean lines</p>
        </div>
      </main>
    </div>
  )
}
