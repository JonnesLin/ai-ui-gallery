import { useState } from 'react'

export default function FlatSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '■', label: 'Dashboard', color: 'bg-blue-500' },
    { id: 'projects', icon: '■', label: 'Projects', color: 'bg-green-500' },
    { id: 'team', icon: '■', label: 'Team', color: 'bg-orange-500' },
    { id: 'calendar', icon: '■', label: 'Calendar', color: 'bg-purple-500' },
    { id: 'settings', icon: '■', label: 'Settings', color: 'bg-red-500' },
  ]

  return (
    <div className="flex h-[600px] bg-gray-100">
      <aside
        className={`${
          collapsed ? 'w-16' : 'w-56'
        } bg-white transition-all duration-200 ease-out relative flex flex-col`}
      >
        {/* Logo */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-gray-100">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">F</span>
              </div>
              <span className="font-semibold text-gray-800">FlatUI</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 px-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    active === item.id
                      ? `${item.color} text-white`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`w-2 h-2 ${active === item.id ? 'bg-white/50' : item.color}`}
                  />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition-colors">
                + Task
              </button>
              <button className="p-3 bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-colors">
                + Note
              </button>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-4" />

        {/* User */}
        <div className="p-3">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white font-semibold text-xs">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="h-full bg-white p-6">
          <h1 className="text-lg font-semibold text-gray-800">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Clean flat design without shadows</p>
        </div>
      </main>
    </div>
  )
}
