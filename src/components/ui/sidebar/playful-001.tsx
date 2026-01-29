import { useState } from 'react'

export default function PlayfulSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '🎮', label: 'Dashboard', bg: 'from-orange-400 to-pink-500' },
    { id: 'projects', icon: '🚀', label: 'Projects', bg: 'from-blue-400 to-purple-500' },
    { id: 'team', icon: '🦄', label: 'Team', bg: 'from-pink-400 to-red-500' },
    { id: 'calendar', icon: '🎯', label: 'Calendar', bg: 'from-green-400 to-teal-500' },
    { id: 'settings', icon: '⚡', label: 'Settings', bg: 'from-yellow-400 to-orange-500' },
  ]

  return (
    <div className="flex h-[600px] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <aside
        className={`${
          collapsed ? 'w-24' : 'w-72'
        } bg-white rounded-r-[2rem] transition-all duration-300 ease-in-out relative flex flex-col shadow-2xl shadow-purple-200/50`}
      >
        {/* Decorative circles */}
        <div className="absolute top-10 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg" />
        <div className="absolute top-20 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-lg" />

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-300 rotate-12 hover:rotate-0 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-xl">
                Playful
              </span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-300 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-lg">{collapsed ? '→' : '←'}</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm transition-all duration-300 ${
                    active === item.id
                      ? `bg-gradient-to-r ${item.bg} text-white shadow-lg scale-105`
                      : 'text-gray-600 hover:bg-gray-100 hover:scale-102'
                  }`}
                >
                  <span className={`text-2xl ${active === item.id ? 'animate-bounce' : ''}`}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className="font-bold">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fun Stats */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold">Level Progress</span>
              <span className="text-2xl">🏆</span>
            </div>
            <div className="h-3 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-white rounded-full animate-pulse" />
            </div>
            <p className="text-xs mt-2 text-white/80">750 / 1000 XP to next level!</p>
          </div>
        )}

        {/* User */}
        <div className="p-5">
          <div
            className={`flex items-center gap-4 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-200 ring-4 ring-white">
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="font-bold text-gray-800">John Doe</p>
                <p className="text-xs text-purple-500 font-semibold">Pro Player ⭐</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="h-full rounded-3xl bg-white p-8 shadow-xl shadow-purple-100">
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-gray-500">Fun and engaging interface</p>
        </div>
      </main>
    </div>
  )
}
