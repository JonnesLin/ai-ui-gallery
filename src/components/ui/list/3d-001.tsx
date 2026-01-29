import React, { useState } from 'react';

export default function ThreeDList() {
  const [selectedId, setSelectedId] = useState<number | null>(2);

  const simpleItems = [
    { id: 1, title: 'Dashboard Overview', status: 'active' },
    { id: 2, title: 'Analytics Reports', status: 'active' },
    { id: 3, title: 'User Management', status: 'active' },
    { id: 4, title: 'System Settings', status: 'disabled' },
  ];

  const iconItems = [
    { id: 1, icon: '🎯', title: 'Project Goals', description: 'Define your project objectives', color: 'from-blue-500 to-blue-600' },
    { id: 2, icon: '📊', title: 'Data Analytics', description: 'Track and analyze performance', color: 'from-purple-500 to-purple-600' },
    { id: 3, icon: '🚀', title: 'Launch Strategy', description: 'Plan your product launch', color: 'from-green-500 to-green-600' },
    { id: 4, icon: '💡', title: 'Innovation Lab', description: 'Explore new ideas', color: 'from-yellow-500 to-yellow-600' },
  ];

  const avatarItems = [
    { id: 1, avatar: 'https://i.pravatar.cc/150?img=11', name: 'Alex Johnson', role: 'Lead Designer', status: 'online' },
    { id: 2, avatar: 'https://i.pravatar.cc/150?img=32', name: 'Sarah Chen', role: 'Developer', status: 'online' },
    { id: 3, avatar: 'https://i.pravatar.cc/150?img=45', name: 'Mike Torres', role: 'Product Manager', status: 'offline' },
    { id: 4, avatar: 'https://i.pravatar.cc/150?img=68', name: 'Emma Davis', role: 'UX Researcher', status: 'away' },
  ];

  const orderedSteps = [
    { id: 1, title: 'Initialize Project', description: 'Set up your development environment', completed: true },
    { id: 2, title: 'Design System', description: 'Create design tokens and components', completed: true },
    { id: 3, title: 'Build Features', description: 'Implement core functionality', completed: false },
    { id: 4, title: 'Test & Deploy', description: 'Quality assurance and launch', completed: false },
  ];

  const nestedCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: '💻',
      children: [
        { id: 11, title: 'React Components', count: 24 },
        { id: 12, title: 'CSS Animations', count: 12 },
        { id: 13, title: 'State Management', count: 8 },
      ],
    },
    {
      id: 2,
      title: 'Backend Services',
      icon: '⚙️',
      children: [
        { id: 21, title: 'API Endpoints', count: 45 },
        { id: 22, title: 'Database Models', count: 18 },
        { id: 23, title: 'Authentication', count: 6 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-black text-gray-900 mb-3"
            style={{
              textShadow: '3px 3px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.05)',
              transform: 'perspective(500px) rotateX(5deg)',
            }}
          >
            3D DEPTH LISTS
          </h1>
          <p className="text-gray-600">Multi-layered shadows with elevated perspective</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Simple List */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
              Simple List
            </h2>
            <ul
              className="bg-white rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 10px 0 0 rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15)',
              }}
            >
              {simpleItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`
                    px-6 py-4 border-b border-gray-100 last:border-0 transition-all duration-200
                    ${item.status === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'}
                    ${selectedId === item.id ? 'bg-gradient-to-r from-blue-50 to-purple-50' : ''}
                  `}
                  style={{
                    transform: selectedId === item.id ? 'translateX(8px)' : 'translateX(0)',
                    boxShadow: selectedId === item.id ? 'inset 4px 0 0 0 rgb(59, 130, 246)' : 'none',
                  }}
                  onClick={() => item.status !== 'disabled' && setSelectedId(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${item.status === 'disabled' ? 'text-gray-400' : 'text-gray-900'}`}>
                      {item.title}
                    </span>
                    {selectedId === item.id && (
                      <span className="text-blue-600 text-xl">✓</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* List with Icons */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
              With Icons
            </h2>
            <ul className="space-y-3">
              {iconItems.map((item, index) => (
                <li
                  key={item.id}
                  className="group bg-white rounded-xl p-5 cursor-pointer transition-all duration-300"
                  style={{
                    boxShadow: '0 6px 0 0 rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.12)',
                    transform: 'translateY(0)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 0 0 rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 0 0 rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.12)';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}
                      style={{
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <button
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-700"
                      style={{
                        transform: 'translateZ(10px)',
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* List with Avatars */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
              With Avatars
            </h2>
            <ul
              className="bg-white rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 10px 0 0 rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15)',
              }}
            >
              {avatarItems.map((item) => (
                <li
                  key={item.id}
                  className="px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                        style={{
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                          item.status === 'online' ? 'bg-green-500' :
                          item.status === 'away' ? 'bg-yellow-500' :
                          'bg-gray-400'
                        }`}
                        style={{
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                      style={{
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                      }}
                    >
                      Message
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* List with Actions */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
              With Actions
            </h2>
            <ul className="space-y-3">
              {iconItems.slice(0, 3).map((item) => (
                <li
                  key={item.id}
                  className="group bg-white rounded-xl p-5 transition-all duration-300"
                  style={{
                    boxShadow: '0 6px 0 0 rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-xl`}
                        style={{
                          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                        }}
                      >
                        {item.icon}
                      </div>
                      <span className="font-bold text-gray-900">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        style={{
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                        style={{
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ordered List */}
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
            Ordered Steps
          </h2>
          <ol className="space-y-4">
            {orderedSteps.map((step, index) => (
              <li
                key={step.id}
                className="bg-white rounded-xl p-6 transition-all duration-300"
                style={{
                  boxShadow: '0 8px 0 0 rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.12)',
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 ${
                      step.completed
                        ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
                        : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700'
                    }`}
                    style={{
                      boxShadow: step.completed
                        ? '0 6px 0 0 rgb(21, 128, 61), 0 8px 16px rgba(34, 197, 94, 0.3)'
                        : '0 4px 0 0 rgb(156, 163, 175), 0 6px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${step.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {!step.completed && (
                    <button
                      className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg transition-all"
                      style={{
                        boxShadow: '0 4px 0 0 rgb(79, 70, 229), 0 6px 16px rgba(59, 130, 246, 0.4)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 0 0 rgb(79, 70, 229), 0 8px 20px rgba(59, 130, 246, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 0 0 rgb(79, 70, 229), 0 6px 16px rgba(59, 130, 246, 0.4)';
                      }}
                    >
                      Start
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Nested List */}
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 ml-2">
            Nested Categories
          </h2>
          <div className="space-y-4">
            {nestedCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl overflow-hidden"
                style={{
                  boxShadow: '0 10px 0 0 rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.15)',
                }}
              >
                <div
                  className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                  </div>
                </div>
                <ul>
                  {category.children.map((child, index) => (
                    <li
                      key={child.id}
                      className="px-8 py-3 border-b border-gray-100 last:border-0 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer group"
                      style={{
                        borderLeft: '4px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = 'rgb(59, 130, 246)';
                        e.currentTarget.style.paddingLeft = '2.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.paddingLeft = '2rem';
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800 group-hover:text-gray-900">
                          {child.title}
                        </span>
                        <span
                          className="px-3 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-xs font-bold rounded-full"
                          style={{
                            boxShadow: '0 2px 0 0 rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08)',
                          }}
                        >
                          {child.count}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
