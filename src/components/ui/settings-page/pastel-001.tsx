'use client';

import { useState } from 'react';

export default function PastelSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-8">
            <h1 className="text-4xl font-bold text-purple-800">Settings</h1>
            <p className="text-purple-600 mt-2">Personalize your experience</p>
          </div>

          <div className="flex">
            <nav className="w-64 p-6 bg-gradient-to-b from-purple-50 to-pink-50">
              <ul className="space-y-3">
                {[
                  { id: 'account', label: 'Account', color: 'bg-pink-200 text-pink-700' },
                  { id: 'notifications', label: 'Notifications', color: 'bg-purple-200 text-purple-700' },
                  { id: 'privacy', label: 'Privacy', color: 'bg-blue-200 text-blue-700' },
                  { id: 'security', label: 'Security', color: 'bg-green-200 text-green-700' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? `${tab.color} shadow-lg scale-105`
                          : 'text-gray-600 hover:bg-white/50'
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
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-purple-800 mb-6">
                      Account Information
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white/80 border-2 border-pink-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-white/80 border-2 border-purple-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="@johndoe"
                          className="w-full px-4 py-3 bg-white/80 border-2 border-blue-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white/80 border-2 border-pink-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-white transition-all resize-none"
                          defaultValue="Creative soul and nature lover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-purple-800">Email Notifications</h3>
                        <p className="text-sm text-purple-600 mt-1">
                          Receive updates via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          emailNotifications
                            ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                            emailNotifications ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-purple-800">Push Notifications</h3>
                        <p className="text-sm text-purple-600 mt-1">
                          Receive push notifications
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          pushNotifications
                            ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                            pushNotifications ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Privacy Settings</h2>
                  <div className="space-y-3">
                    {['Public', 'Private', 'Friends Only'].map((option, index) => (
                      <label
                        key={option}
                        className="flex items-center gap-4 p-4 bg-white/80 rounded-xl border-2 border-blue-200 cursor-pointer hover:bg-white hover:border-blue-300 transition-all"
                      >
                        <input
                          type="radio"
                          name="privacy"
                          className="w-5 h-5 text-blue-500"
                          defaultChecked={index === 0}
                        />
                        <span className="text-blue-900 font-semibold">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">Security Settings</h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold rounded-xl hover:from-green-500 hover:to-teal-500 transition-all shadow-md">
                      Change Password
                    </button>
                    <button className="w-full px-6 py-4 bg-white border-2 border-green-200 text-green-800 font-semibold rounded-xl hover:bg-green-50 hover:border-green-300 transition-all">
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                  Save Changes
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all">
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
