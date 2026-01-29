'use client';

import { useState } from 'react';

export default function DarkSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-gray-900 rounded-2xl p-2 border border-gray-800">
              <ul className="space-y-1">
                {[
                  { id: 'account', label: 'Account', icon: '👤' },
                  { id: 'notifications', label: 'Notifications', icon: '🔔' },
                  { id: 'privacy', label: 'Privacy', icon: '🔒' },
                  { id: 'security', label: 'Security', icon: '🛡️' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex-1">
            <div className="bg-gray-900 rounded-2xl border border-gray-800">
              <div className="p-8">
                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="@johndoe"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          defaultValue="Product designer and developer based in San Francisco"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Notifications</h2>
                      <p className="text-gray-400">Manage how you receive notifications</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-5 bg-gray-800 rounded-xl border border-gray-700">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-white">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive notifications and updates via email
                          </p>
                        </div>
                        <button
                          onClick={() => setEmailNotifications(!emailNotifications)}
                          className={`relative w-14 h-8 rounded-full transition-colors ${
                            emailNotifications ? 'bg-blue-600' : 'bg-gray-700'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                              emailNotifications ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-5 bg-gray-800 rounded-xl border border-gray-700">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-white">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive push notifications on your devices
                          </p>
                        </div>
                        <button
                          onClick={() => setPushNotifications(!pushNotifications)}
                          className={`relative w-14 h-8 rounded-full transition-colors ${
                            pushNotifications ? 'bg-blue-600' : 'bg-gray-700'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                              pushNotifications ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Privacy</h2>
                      <p className="text-gray-400">Control your privacy settings</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Profile Visibility
                      </h3>
                      <div className="space-y-3">
                        {['Public', 'Private', 'Friends Only'].map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors"
                          >
                            <input
                              type="radio"
                              name="privacy"
                              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
                              defaultChecked={option === 'Public'}
                            />
                            <span className="text-white font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Security</h2>
                      <p className="text-gray-400">Keep your account secure</p>
                    </div>

                    <div className="flex items-center justify-between p-5 bg-gray-800 rounded-xl border border-gray-700">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          twoFactor ? 'bg-blue-600' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                            twoFactor ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-5 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-base font-semibold text-white mb-3">Password</h3>
                      <button className="text-blue-500 hover:text-blue-400 font-medium">
                        Change Password
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4 px-8 py-6 border-t border-gray-800">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
                <button className="px-6 py-3 bg-gray-800 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-colors">
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
