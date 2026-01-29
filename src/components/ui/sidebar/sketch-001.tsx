import { useState } from 'react'

export default function SketchSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '✎', label: 'Dashboard' },
    { id: 'projects', icon: '✎', label: 'Projects' },
    { id: 'team', icon: '✎', label: 'Team' },
    { id: 'calendar', icon: '✎', label: 'Calendar' },
    { id: 'settings', icon: '✎', label: 'Settings' },
  ]

  return (
    <div className="flex h-[600px] bg-amber-50">
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <aside
        className={`${
          collapsed ? 'w-20' : 'w-64'
        } bg-white transition-all duration-300 ease-in-out relative flex flex-col`}
        style={{
          borderRight: '3px solid #374151',
          borderImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'6\' height=\'100\'%3E%3Cpath d=\'M3,0 Q0,25 3,50 Q6,75 3,100\' stroke=\'%23374151\' fill=\'none\' stroke-width=\'2\'/%3E%3C/svg%3E") 1 stretch',
        }}
      >
        {/* Logo */}
        <div
          className="h-20 flex items-center justify-between px-5"
          style={{
            borderBottom: '2px dashed #9CA3AF',
          }}
        >
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  border: '2px solid #374151',
                  borderRadius: '50%',
                }}
              >
                <span className="text-gray-700 font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  S
                </span>
              </div>
              <span
                className="text-gray-700 text-lg"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                Sketch
              </span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 rounded-lg border-2 border-gray-400 border-dashed hover:border-gray-600 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors bg-white"
          >
            <span style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              {collapsed ? '→' : '←'}
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    active === item.id
                      ? 'bg-amber-100 text-gray-800'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    border: active === item.id ? '2px solid #374151' : '2px solid transparent',
                    borderStyle: active === item.id ? 'dashed' : 'solid',
                  }}
                >
                  <span className="text-gray-400">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Notes */}
        {!collapsed && (
          <div
            className="mx-4 mb-4 p-4 bg-yellow-100 transform rotate-1"
            style={{
              boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
            }}
          >
            <p
              className="text-sm text-gray-700"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              📝 Don't forget to review the design mockups!
            </p>
          </div>
        )}

        {/* User */}
        <div
          className="p-4"
          style={{ borderTop: '2px dashed #9CA3AF' }}
        >
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div
              className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center"
              style={{
                border: '2px solid #374151',
              }}
            >
              <span
                className="text-gray-700 font-bold"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                JD
              </span>
            </div>
            {!collapsed && (
              <div>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  John Doe
                </p>
                <p
                  className="text-xs text-gray-500"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Designer
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        <div
          className="h-full bg-white p-6"
          style={{
            border: '2px solid #374151',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.1)',
            transform: 'rotate(-0.5deg)',
          }}
        >
          <h1
            className="text-2xl text-gray-700"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            {menuItems.find((item) => item.id === active)?.label}
          </h1>
          <p
            className="mt-2 text-gray-500"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            Hand-drawn wireframe style
          </p>
        </div>
      </main>
    </div>
  )
}
