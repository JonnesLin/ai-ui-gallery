import { useState } from 'react'

export default function ThreeDSidebar() {
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
    <div className="flex h-[600px] bg-gradient-to-br from-slate-200 to-slate-300 p-6" style={{ perspective: '1000px' }}>
      <aside
        className={`${
          collapsed ? 'w-24' : 'w-72'
        } bg-white transition-all duration-300 ease-in-out relative flex flex-col`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-5deg)',
          boxShadow: '20px 20px 60px rgba(0,0,0,0.15), -5px -5px 20px rgba(255,255,255,0.8)',
          borderRadius: '20px',
        }}
      >
        {/* Side edge */}
        <div
          className="absolute top-0 bottom-0 -right-3 w-3 bg-slate-100"
          style={{
            transform: 'rotateY(90deg) translateX(1.5px)',
            transformOrigin: 'left',
            borderRadius: '0 8px 8px 0',
          }}
        />

        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg"
                style={{
                  borderRadius: '12px',
                  boxShadow: '4px 4px 10px rgba(99,102,241,0.3), -2px -2px 6px rgba(255,255,255,0.5)',
                  transform: 'translateZ(10px)',
                }}
              >
                3D
              </div>
              <span className="font-bold text-slate-800 text-lg">Depth</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all"
            style={{
              borderRadius: '10px',
              boxShadow: '3px 3px 6px rgba(0,0,0,0.1), -2px -2px 4px rgba(255,255,255,0.9)',
            }}
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
        <nav className="flex-1 py-4 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  style={{
                    borderRadius: '14px',
                    boxShadow: active === item.id
                      ? '6px 6px 12px rgba(99,102,241,0.3), -2px -2px 6px rgba(255,255,255,0.5)'
                      : '3px 3px 6px rgba(0,0,0,0.05), -2px -2px 4px rgba(255,255,255,0.8)',
                    transform: active === item.id ? 'translateZ(5px)' : 'none',
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && <span className="font-semibold">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Card */}
        {!collapsed && (
          <div
            className="mx-4 mb-4 p-5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
            style={{
              borderRadius: '16px',
              boxShadow: '8px 8px 20px rgba(99,102,241,0.3)',
              transform: 'translateZ(8px)',
            }}
          >
            <p className="font-semibold">Upgrade to Pro</p>
            <p className="text-sm text-indigo-200 mt-1">Unlock 3D features</p>
            <button
              className="mt-4 w-full py-2.5 bg-white text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors"
              style={{
                borderRadius: '10px',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              Upgrade Now
            </button>
          </div>
        )}

        {/* User */}
        <div className="p-5 border-t border-slate-100">
          <div className={`flex items-center gap-4 ${collapsed ? 'justify-center' : ''}`}>
            <div
              className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold"
              style={{
                borderRadius: '50%',
                boxShadow: '4px 4px 10px rgba(251,146,60,0.3), -2px -2px 6px rgba(255,255,255,0.5)',
              }}
            >
              JD
            </div>
            {!collapsed && (
              <div>
                <p className="font-semibold text-slate-800">John Doe</p>
                <p className="text-xs text-slate-500">Designer</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-6">
        <div
          className="h-full bg-white p-8"
          style={{
            borderRadius: '20px',
            boxShadow: '20px 20px 60px rgba(0,0,0,0.1), -10px -10px 30px rgba(255,255,255,0.9)',
            transform: 'rotateY(3deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <h1 className="text-2xl font-bold text-slate-800">
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p className="mt-2 text-slate-500">Perspective and depth effects</p>
        </div>
      </main>
    </div>
  )
}
