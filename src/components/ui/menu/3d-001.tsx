'use client';

import { useState } from 'react';

export default function ThreeDMenu() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedItems, setExpandedItems] = useState<string[]>(['modules']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="mb-8 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg transform perspective-1000" style={{
        boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15), inset 0 -3px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">3D Menu</h1>
        <p className="text-sm text-blue-100 mt-1">Depth & dimension</p>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveItem('dashboard')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all transform ${
            activeItem === 'dashboard'
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white translate-y-0 shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-white text-slate-700 hover:translate-y-[-2px] shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)]'
          }`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            activeItem === 'dashboard'
              ? 'bg-blue-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-gradient-to-br from-blue-100 to-blue-200 shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
          }`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span>Dashboard</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('modules')}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl text-sm font-semibold bg-white text-slate-700 hover:translate-y-[-2px] shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)] transition-all transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 shadow-[0_2px_8px_rgba(147,51,234,0.2)] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span>Modules</span>
            </div>
            <div className={`w-6 h-6 rounded-md bg-slate-200 flex items-center justify-center shadow-inner transition-transform ${expandedItems.includes('modules') ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedItems.includes('modules') && (
            <div className="ml-10 mt-3 space-y-2 border-l-4 border-slate-300 pl-4">
              <button
                onClick={() => setActiveItem('analytics')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all transform ${
                  activeItem === 'analytics'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(147,51,234,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
                    : 'bg-white text-slate-600 hover:translate-x-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveItem('reports')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all transform ${
                  activeItem === 'reports'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(147,51,234,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
                    : 'bg-white text-slate-600 hover:translate-x-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setActiveItem('export')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all transform ${
                  activeItem === 'export'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(147,51,234,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
                    : 'bg-white text-slate-600 hover:translate-x-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                }`}
              >
                Export Data
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('users')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all transform ${
            activeItem === 'users'
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white translate-y-0 shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-white text-slate-700 hover:translate-y-[-2px] shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)]'
          }`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            activeItem === 'users'
              ? 'bg-blue-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-gradient-to-br from-green-100 to-green-200 shadow-[0_2px_8px_rgba(34,197,94,0.2)]'
          }`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span>Users</span>
        </button>

        <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full my-4 shadow-inner"></div>

        <button
          onClick={() => setActiveItem('settings')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all transform ${
            activeItem === 'settings'
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white translate-y-0 shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-white text-slate-700 hover:translate-y-[-2px] shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1)]'
          }`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            activeItem === 'settings'
              ? 'bg-blue-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]'
              : 'bg-gradient-to-br from-orange-100 to-orange-200 shadow-[0_2px_8px_rgba(249,115,22,0.2)]'
          }`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
