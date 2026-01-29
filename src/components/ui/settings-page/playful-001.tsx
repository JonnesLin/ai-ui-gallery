'use client';

import { useState } from 'react';

export default function PlayfulSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden transform rotate-[-0.5deg]">
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 p-8 transform rotate-[0.5deg]">
            <h1 className="text-5xl font-black text-white transform -rotate-1">Settings</h1>
            <p className="text-white/90 mt-2 font-semibold transform rotate-1">
              Make it yours!
            </p>
          </div>

          <div className="flex p-6 gap-6">
            <nav className="w-64 space-y-3">
              {[
                { id: 'account', emoji: '😊', label: 'Account' },
                { id: 'notifications', emoji: '🔔', label: 'Notifications' },
                { id: 'privacy', emoji: '🔐', label: 'Privacy' },
                { id: 'security', emoji: '🛡️', label: 'Security' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-5 py-4 rounded-2xl text-left font-bold transition-all transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg rotate-[-1deg]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-2xl mr-3">{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="flex-1">
              {activeTab === 'account' && (
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-orange-200 transform rotate-[0.5deg]">
                    <h2 className="text-3xl font-black text-orange-600 mb-6 flex items-center gap-3">
                      <span>👤</span>
                      Your Profile
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-black text-orange-700 mb-2 uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-xl text-gray-800 font-semibold focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transform hover:scale-[1.02] transition-transform"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-black text-orange-700 mb-2 uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-xl text-gray-800 font-semibold focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transform hover:scale-[1.02] transition-transform"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-black text-orange-700 mb-2 uppercase">
                          About You
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-xl text-gray-800 font-semibold focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-200 resize-none transform hover:scale-[1.02] transition-transform"
                          defaultValue="I love creating awesome things!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-4 border-pink-200 transform -rotate-[0.5deg] hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-black text-pink-600 flex items-center gap-2">
                          <span>📧</span>
                          Email Updates
                        </h3>
                        <p className="text-sm text-pink-600 font-semibold mt-1">
                          Get cool emails from us!
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-20 h-10 rounded-full transition-all transform hover:scale-110 ${
                          emailNotifications
                            ? 'bg-gradient-to-r from-pink-400 to-purple-400'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg transition-transform flex items-center justify-center text-lg ${
                            emailNotifications ? 'translate-x-10' : 'translate-x-0'
                          }`}
                        >
                          {emailNotifications ? '✓' : '✗'}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-4 border-purple-200 transform rotate-[0.5deg] hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-black text-purple-600 flex items-center gap-2">
                          <span>💬</span>
                          Push Alerts
                        </h3>
                        <p className="text-sm text-purple-600 font-semibold mt-1">
                          Get instant notifications!
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-20 h-10 rounded-full transition-all transform hover:scale-110 ${
                          pushNotifications
                            ? 'bg-gradient-to-r from-purple-400 to-blue-400'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg transition-transform flex items-center justify-center text-lg ${
                            pushNotifications ? 'translate-x-10' : 'translate-x-0'
                          }`}
                        >
                          {pushNotifications ? '✓' : '✗'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-4 border-blue-200 transform -rotate-[0.3deg]">
                  <h2 className="text-3xl font-black text-blue-600 mb-6 flex items-center gap-3">
                    <span>🔐</span>
                    Privacy Settings
                  </h2>
                  <div className="space-y-4">
                    {[
                      { value: 'public', emoji: '🌍', label: 'Public' },
                      { value: 'private', emoji: '🤫', label: 'Private' },
                      { value: 'friends', emoji: '👥', label: 'Friends' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border-3 border-blue-200 cursor-pointer hover:bg-blue-50 transition-all transform hover:scale-105 hover:rotate-1"
                      >
                        <input type="radio" name="privacy" className="w-5 h-5" defaultChecked={option.value === 'public'} />
                        <span className="text-3xl">{option.emoji}</span>
                        <span className="text-blue-900 font-black text-lg">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-4 border-green-200 transform rotate-[0.3deg]">
                  <h2 className="text-3xl font-black text-green-600 mb-6 flex items-center gap-3">
                    <span>🛡️</span>
                    Keep It Safe!
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-teal-400 text-white font-black rounded-xl hover:from-green-500 hover:to-teal-500 transition-all shadow-lg transform hover:scale-105 hover:-rotate-1 text-lg">
                      Change Password 🔑
                    </button>
                    <button className="w-full px-6 py-4 bg-white border-4 border-green-300 text-green-700 font-black rounded-xl hover:bg-green-50 transition-all shadow-lg transform hover:scale-105 hover:rotate-1 text-lg">
                      Enable 2FA 🔐
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black rounded-2xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg transform hover:scale-110 hover:-rotate-2 text-lg">
                  Save! 💾
                </button>
                <button className="px-8 py-4 bg-white border-4 border-gray-300 text-gray-700 font-black rounded-2xl hover:bg-gray-100 transition-all shadow-lg transform hover:scale-110 hover:rotate-2 text-lg">
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
