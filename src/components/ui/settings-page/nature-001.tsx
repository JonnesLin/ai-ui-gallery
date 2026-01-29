'use client';

import { useState } from 'react';

export default function NatureSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-4 border-green-200">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8">
            <h1 className="text-4xl font-bold text-white">Settings</h1>
            <p className="text-green-50 mt-2">Grow your preferences</p>
          </div>

          <div className="flex">
            <nav className="w-64 p-6 bg-gradient-to-b from-green-50 to-emerald-50 border-r-2 border-green-200">
              <ul className="space-y-3">
                {[
                  { id: 'account', icon: '🌱', label: 'Account' },
                  { id: 'notifications', icon: '🌿', label: 'Notifications' },
                  { id: 'privacy', icon: '🍃', label: 'Privacy' },
                  { id: 'security', icon: '🌲', label: 'Security' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'text-green-800 hover:bg-green-100'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1 p-8">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                      <span>🌱</span>
                      Your Profile
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-green-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-green-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@nature.com"
                          className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-green-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="@naturelover"
                          className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-green-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white border-2 border-green-300 rounded-xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 resize-none"
                          defaultValue="Nature enthusiast and environmental advocate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">🌿</span>
                        <div>
                          <h3 className="text-lg font-bold text-emerald-800">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-emerald-600 mt-1">
                            Stay updated with nature-inspired content
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          emailNotifications
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                            : 'bg-gray-300'
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

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">🍃</span>
                        <div>
                          <h3 className="text-lg font-bold text-teal-800">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-teal-600 mt-1">
                            Receive instant updates on your device
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          pushNotifications
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500'
                            : 'bg-gray-300'
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
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                    <span>🍃</span>
                    Privacy Settings
                  </h2>
                  <div className="space-y-4">
                    {[
                      { value: 'public', emoji: '🌍', label: 'Public', desc: 'Open to everyone' },
                      { value: 'private', emoji: '🌱', label: 'Private', desc: 'Only visible to you' },
                      { value: 'friends', emoji: '🌿', label: 'Friends', desc: 'Shared with friends' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border-2 border-green-200 cursor-pointer hover:bg-green-50 hover:border-green-300 transition-all"
                      >
                        <input
                          type="radio"
                          name="privacy"
                          className="w-5 h-5 text-green-600"
                          defaultChecked={option.value === 'public'}
                        />
                        <span className="text-2xl">{option.emoji}</span>
                        <div>
                          <p className="font-bold text-green-900">{option.label}</p>
                          <p className="text-sm text-green-600">{option.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                    <span>🌲</span>
                    Security Settings
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg">
                      Change Password
                    </button>
                    <button className="w-full px-6 py-4 bg-white border-2 border-green-300 text-green-800 font-semibold rounded-xl hover:bg-green-50 hover:border-green-400 transition-all">
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg">
                  Save Changes
                </button>
                <button className="px-8 py-4 bg-white border-2 border-green-300 text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
