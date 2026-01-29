import { useState } from 'react'

export default function RetroSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '▸', label: 'Dashboard' },
    { id: 'projects', icon: '▸', label: 'Projects' },
    { id: 'team', icon: '▸', label: 'Team' },
    { id: 'calendar', icon: '▸', label: 'Calendar' },
    { id: 'settings', icon: '▸', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-amber-100 font-mono">
      <aside
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } bg-amber-50 border-r-4 border-amber-900 transition-all duration-200 relative flex flex-col shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b-4 border-amber-900">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <span className="text-2xl">📺</span>
              <span className="font-bold text-amber-900 text-lg">RETRO</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 bg-amber-200 border-2 border-amber-900 hover:bg-amber-300 flex items-center justify-center text-amber-900 font-bold transition-colors shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            {collapsed ? '»' : '«'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-all ${
                    active === item.id
                      ? 'bg-amber-900 text-amber-50'
                      : 'text-amber-900 hover:bg-amber-200'
                  }`}
                >
                  <span className={active === item.id ? 'text-amber-300' : 'text-amber-600'}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative CRT Lines */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-3 bg-amber-900 text-amber-100">
            <p className="text-xs">{'>'} SYSTEM STATUS</p>
            <p className="text-xs mt-1 text-amber-300">ALL SYSTEMS GO_</p>
          </div>
        )}

        {/* User */}
        <div className="border-t-4 border-amber-900 p-3">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-amber-900 flex items-center justify-center text-amber-100 font-bold text-sm border-2 border-amber-700">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-bold text-amber-900">John Doe</p>
                <p className="text-xs text-amber-700">Administrator</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full bg-amber-50 border-4 border-amber-900 p-6 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
          <h1 className="text-2xl font-bold text-amber-900">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-amber-700">Vintage computing aesthetics</p>
        </div>
      </main>
    </div>
  )
}
