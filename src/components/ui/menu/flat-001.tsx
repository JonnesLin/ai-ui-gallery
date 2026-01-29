'use client';

import { useState } from 'react';

export default function FlatMenu() {
  const [activeItem, setActiveItem] = useState('home');
  const [expandedItems, setExpandedItems] = useState<string[]>(['menu']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Menu</h1>
        <p className="text-sm text-gray-500 mt-1">Simple and flat</p>
      </div>

      <nav className="space-y-1">
        <button
          onClick={() => setActiveItem('home')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'home'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Home</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('menu')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
              </svg>
              <span>Menu Items</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform ${expandedItems.includes('menu') ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>

          {expandedItems.includes('menu') && (
            <div className="ml-8 mt-1 space-y-1">
              <button
                onClick={() => setActiveItem('item1')}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeItem === 'item1'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Item One
              </button>
              <button
                onClick={() => setActiveItem('item2')}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeItem === 'item2'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Item Two
              </button>
              <button
                onClick={() => setActiveItem('item3')}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeItem === 'item3'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Item Three
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('messages')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'messages'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
          </svg>
          <span>Messages</span>
          <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">7</span>
        </button>

        <button
          onClick={() => setActiveItem('notifications')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'notifications'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span>Notifications</span>
        </button>

        <div className="h-px bg-gray-200 my-4"></div>

        <button
          onClick={() => setActiveItem('profile')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'profile'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>Profile</span>
        </button>

        <button
          onClick={() => setActiveItem('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'settings'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
          <span>Settings</span>
        </button>

        <button
          onClick={() => setActiveItem('help')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeItem === 'help'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
          </svg>
          <span>Help</span>
        </button>
      </nav>
    </div>
  );
}
