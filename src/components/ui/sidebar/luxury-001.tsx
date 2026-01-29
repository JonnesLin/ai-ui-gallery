import { useState } from 'react'

export default function LuxurySidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '◆', label: 'Dashboard' },
    { id: 'portfolio', icon: '◆', label: 'Portfolio' },
    { id: 'clients', icon: '◆', label: 'Clients' },
    { id: 'calendar', icon: '◆', label: 'Calendar' },
    { id: 'settings', icon: '◆', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-stone-100">
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-72'
        } bg-stone-900 transition-all duration-500 ease-out relative flex flex-col`}
      >
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-amber-600 to-amber-400" />

        {/* Logo */}
        <div className="h-24 flex items-center justify-between px-6 border-b border-stone-800">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-amber-500 flex items-center justify-center rotate-45">
                <span className="text-amber-500 font-serif text-lg -rotate-45">L</span>
              </div>
              <div>
                <span className="block font-serif text-amber-500 text-lg tracking-widest">LUXE</span>
                <span className="block text-stone-500 text-[10px] tracking-[0.3em]">STUDIO</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 border border-stone-700 hover:border-amber-500 flex items-center justify-center text-stone-500 hover:text-amber-500 transition-all duration-300"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-500 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-sm tracking-widest transition-all duration-300 ${
                    active === item.id
                      ? 'bg-gradient-to-r from-amber-500/20 to-transparent text-amber-500 border-l-2 border-amber-500'
                      : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/50 border-l-2 border-transparent'
                  }`}
                >
                  <span className={`text-xs ${active === item.id ? 'text-amber-500' : 'text-stone-600'}`}>
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span className="font-light uppercase">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* VIP Card */}
        {!collapsed && (
          <div className="mx-4 mb-6 p-5 border border-amber-500/30 bg-gradient-to-br from-stone-800 to-stone-900">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-amber-500 tracking-[0.2em] uppercase">VIP Status</span>
              <span className="text-amber-500">★★★</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Exclusive access to premium features and priority support.
            </p>
          </div>
        )}

        {/* User */}
        <div className="border-t border-stone-800 p-5">
          <div className={`flex items-center gap-4 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center bg-stone-800">
              <span className="text-amber-500 font-serif text-sm">JD</span>
            </div>
            {!collapsed && (
              <div>
                <p className="text-stone-300 font-light tracking-wide">John Doe</p>
                <p className="text-[10px] text-amber-500 tracking-[0.2em] uppercase">Platinum Member</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="h-full bg-white p-8 shadow-2xl">
          <h1 className="text-2xl font-serif text-stone-800 tracking-wide">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-3 text-sm text-stone-400 tracking-wide">Refined elegance in every detail</p>
        </div>
      </main>
    </div>
  )
}
