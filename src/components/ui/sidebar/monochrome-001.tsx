import { useState } from 'react'

export default function MonochromeSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '▪', label: 'Dashboard' },
    { id: 'projects', icon: '▪', label: 'Projects' },
    { id: 'team', icon: '▪', label: 'Team' },
    { id: 'calendar', icon: '▪', label: 'Calendar' },
    { id: 'settings', icon: '▪', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-neutral-100">
      <aside
        className={`${
          collapsed ? 'w-16' : 'w-60'
        } bg-neutral-900 transition-all duration-300 ease-in-out relative flex flex-col`}
      >
        {/* Logo */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-neutral-800">
          {!collapsed && (
            <span className="font-medium text-neutral-100 tracking-wider text-sm">MONO</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2">
          <ul className="space-y-0.5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-500 hover:bg-neutral-800 hover:text-neutral-300'
                  }`}
                >
                  <span className={active === item.id ? 'text-neutral-900' : 'text-neutral-600'}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Minimal Divider */}
        <div className="mx-4 h-px bg-neutral-800" />

        {/* Quick Stats */}
        {!collapsed && (
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-neutral-600">Tasks</p>
                <p className="text-lg font-medium text-neutral-100">24</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Done</p>
                <p className="text-lg font-medium text-neutral-100">18</p>
              </div>
            </div>
          </div>
        )}

        {/* User */}
        <div className="border-t border-neutral-800 p-3">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center text-neutral-900 font-medium text-xs">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm text-neutral-200">John Doe</p>
                <p className="text-xs text-neutral-600">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full bg-white border border-neutral-200 p-6">
          <h1 className="text-lg font-medium text-neutral-900">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-neutral-500">Pure black and white simplicity</p>
        </div>
      </main>
    </div>
  )
}
