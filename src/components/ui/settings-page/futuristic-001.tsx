'use client';

import { useState } from 'react';

export default function FuturisticSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="relative p-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
              Settings
            </h1>
            <p className="text-blue-200/70 mt-2 relative">Configure your experience</p>
          </div>

          <div className="flex">
            <nav className="w-72 p-6 bg-gradient-to-b from-white/5 to-transparent border-r border-white/10">
              <ul className="space-y-2">
                {[
                  { id: 'account', label: 'Account', icon: '▸' },
                  { id: 'notifications', label: 'Notifications', icon: '▸' },
                  { id: 'privacy', label: 'Privacy', icon: '▸' },
                  { id: 'security', label: 'Security', icon: '▸' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border border-blue-400/50 shadow-lg shadow-blue-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className={`transition-transform ${activeTab === tab.id ? 'translate-x-1' : ''}`}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1 p-8">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Account Configuration
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2 uppercase tracking-wider">
                          Display Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-black/40 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-purple-300 mb-2 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@future.tech"
                          className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-pink-300 mb-2 uppercase tracking-wider">
                          User ID
                        </label>
                        <input
                          type="text"
                          defaultValue="@john_future"
                          className="w-full px-4 py-3 bg-black/40 border border-pink-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:shadow-lg focus:shadow-pink-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-cyan-300 mb-2 uppercase tracking-wider">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all resize-none"
                          defaultValue="Tech innovator and future builder"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-300">
                          Email Synchronization
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Receive email notifications and updates
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          emailNotifications
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50'
                            : 'bg-gray-700 border border-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transition-transform ${
                            emailNotifications ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-300">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Real-time push notifications to your devices
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          pushNotifications
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                            : 'bg-gray-700 border border-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transition-transform ${
                            pushNotifications ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Privacy Controls
                  </h2>
                  <div className="space-y-3">
                    {['Public Access', 'Private Mode', 'Selective Sharing'].map((option, index) => (
                      <label
                        key={option}
                        className="flex items-center gap-4 p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <input
                          type="radio"
                          name="privacy"
                          className="w-5 h-5"
                          defaultChecked={index === 0}
                        />
                        <span className="text-white font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Security Protocol
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30">
                      Update Password
                    </button>
                    <button className="w-full px-6 py-4 bg-transparent border border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all">
                      Configure 2FA
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                  Save Configuration
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
