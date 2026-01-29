import { useState } from 'react'

export default function NeumorphismSidebar() {
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
    <div className="flex h-[600px] bg-[#e0e5ec] p-6">
      <aside
        className={`${
          collapsed ? 'w-24' : 'w-72'
        } bg-[#e0e5ec] rounded-3xl transition-all duration-300 ease-in-out relative flex flex-col shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center">
                <span className="text-gray-600 font-bold">N</span>
              </div>
              <span className="font-semibold text-gray-700">Neumo</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-500 transition-all duration-200"
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
        <nav className="flex-1 py-6 px-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-blue-500'
                      : 'text-gray-600 hover:shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User */}
        <div className="p-5">
          <div
            className={`flex items-center gap-3 p-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center text-gray-600 font-semibold text-sm">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-6">
        <div className="h-full rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] p-8">
          <h1 className="text-xl font-semibold text-gray-700">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Soft UI with neumorphic shadows</p>
        </div>
      </main>
    </div>
  )
}
