import { useState } from 'react'

export default function CyberpunkSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '◈', label: 'DASHBOARD' },
    { id: 'projects', icon: '◈', label: 'PROJECTS' },
    { id: 'team', icon: '◈', label: 'SQUAD' },
    { id: 'calendar', icon: '◈', label: 'TIMELINE' },
    { id: 'settings', icon: '◈', label: 'CONFIG' },
  ]

  return (
    <div className="flex h-[600px] bg-black font-mono">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] z-10" />

      <aside
        className={`${
          collapsed ? 'w-20' : 'w-72'
        } bg-gray-950 border-r border-cyan-500/30 transition-all duration-300 relative flex flex-col`}
        style={{
          boxShadow: 'inset 0 0 50px rgba(6, 182, 212, 0.1), 0 0 20px rgba(6, 182, 212, 0.2)',
        }}
      >
        {/* Glitch line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-cyan-500/20">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center relative">
                <span className="text-cyan-400 font-bold text-lg">CP</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500" />
              </div>
              <div>
                <span className="font-bold text-cyan-400 text-sm tracking-widest">CYBER</span>
                <span className="font-bold text-pink-500 text-sm tracking-widest">PUNK</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          >
            <span className="text-lg">{collapsed ? '»' : '«'}</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-xs tracking-widest transition-all relative group ${
                    active === item.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-l-2 border-cyan-400'
                      : 'text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 border-l-2 border-transparent'
                  }`}
                >
                  <span className="text-pink-500">[0{index + 1}]</span>
                  <span className={active === item.id ? 'text-cyan-400' : ''}>{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="font-medium">{item.label}</span>
                      {active === item.id && (
                        <span className="ml-auto text-cyan-400 animate-pulse">_</span>
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* System Status */}
        {!collapsed && (
          <div className="mx-4 mb-4 p-4 border border-pink-500/30 bg-pink-500/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-pink-500 tracking-widest">SYS.STATUS</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="text-xs text-gray-500 font-mono space-y-1">
              <p>CPU: <span className="text-cyan-400">87%</span></p>
              <p>MEM: <span className="text-cyan-400">4.2GB</span></p>
              <p>NET: <span className="text-green-400">ONLINE</span></p>
            </div>
          </div>
        )}

        {/* User */}
        <div className="border-t border-cyan-500/20 p-4">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-12 h-12 border-2 border-pink-500 bg-pink-500/10 flex items-center justify-center relative">
              <span className="text-pink-400 font-bold text-sm">JD</span>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-bold text-cyan-400 tracking-wider">JOHN_DOE</p>
                <p className="text-xs text-pink-500 tracking-widest">LVL.99 ADMIN</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative z-0">
        <div className="h-full bg-gray-950 border border-cyan-500/30 p-6" style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.1)' }}>
          <h1 className="text-2xl font-bold text-cyan-400 tracking-widest">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-600 font-mono">// Neon-lit dystopian interface</p>
        </div>
      </main>
    </div>
  )
}
