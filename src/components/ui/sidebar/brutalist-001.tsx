import { useState } from 'react'

export default function BrutalistSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '■', label: 'DASHBOARD' },
    { id: 'projects', icon: '■', label: 'PROJECTS' },
    { id: 'team', icon: '■', label: 'TEAM' },
    { id: 'calendar', icon: '■', label: 'CALENDAR' },
    { id: 'settings', icon: '■', label: 'SETTINGS' },
  ]

  return (
    <div className="flex h-[600px] bg-yellow-300">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-72'
        } bg-black border-r-8 border-yellow-300 transition-all duration-100 relative flex flex-col`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 border-b-4 border-yellow-300">
          {!collapsed && (
            <span className="font-black text-2xl text-yellow-300 tracking-tighter">
              BRUTAL
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-12 h-12 bg-yellow-300 text-black font-black text-xl hover:bg-white transition-colors"
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 text-sm font-black tracking-wider transition-all ${
                    active === item.id
                      ? 'bg-yellow-300 text-black'
                      : 'text-yellow-300 hover:bg-yellow-300/10'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Alert Box */}
        {!collapsed && (
          <div className="mx-4 p-4 border-4 border-yellow-300 mb-4">
            <p className="text-yellow-300 font-black text-xs uppercase">! WARNING !</p>
            <p className="text-yellow-300/70 text-xs mt-2 font-mono">
              3 TASKS OVERDUE
            </p>
          </div>
        )}

        {/* User */}
        <div className="border-t-4 border-yellow-300 p-4">
          <div className={`flex items-center gap-4 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-12 h-12 bg-yellow-300 flex items-center justify-center text-black font-black text-lg">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="font-black text-yellow-300 uppercase">John Doe</p>
                <p className="text-xs text-yellow-300/60 font-mono uppercase">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="h-full bg-white border-8 border-black p-6">
          <h1 className="text-3xl font-black text-black uppercase tracking-tighter">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-4 text-sm font-mono text-black/60 uppercase">
            Raw, unapologetic design
          </p>
        </div>
      </main>
    </div>
  )
}
