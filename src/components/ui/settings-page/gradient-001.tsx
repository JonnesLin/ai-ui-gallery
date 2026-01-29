'use client';

import { useState } from 'react';

export default function GradientSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-white/80">Customize your experience</p>
          </div>

          <div className="flex">
            <nav className="w-64 p-6 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200">
              <ul className="space-y-2">
                {[
                  { id: 'account', label: 'Account', gradient: 'from-blue-500 to-cyan-500' },
                  { id: 'notifications', label: 'Notifications', gradient: 'from-purple-500 to-pink-500' },
                  { id: 'privacy', label: 'Privacy', gradient: 'from-green-500 to-teal-500' },
                  { id: 'security', label: 'Security', gradient: 'from-orange-500 to-red-500' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1 p-8">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                      Account Information
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="@johndoe"
                          className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                          defaultValue="Product designer and creative developer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Email Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Receive updates and news via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          emailNotifications
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
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

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          pushNotifications
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
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
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                    Privacy Settings
                  </h2>
                  <div className="space-y-4">
                    {['Public', 'Private', 'Friends Only'].map((option, index) => (
                      <label
                        key={option}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-green-200 cursor-pointer hover:border-green-400 transition-colors"
                      >
                        <input
                          type="radio"
                          name="privacy"
                          className="w-5 h-5 text-green-600"
                          defaultChecked={index === 0}
                        />
                        <span className="text-gray-800 font-semibold">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                    Security Settings
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-lg">
                      Change Password
                    </button>
                    <button className="w-full px-6 py-4 bg-white border-2 border-orange-200 text-gray-800 font-semibold rounded-xl hover:border-orange-400 transition-colors">
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                  Save Changes
                </button>
                <button className="px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-colors">
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
