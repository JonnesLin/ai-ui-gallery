'use client';

import { useState } from 'react';

export default function GlassmorphismSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-white/70">Manage your account preferences</p>
          </div>

          <div className="flex">
            <nav className="w-64 p-6 border-r border-white/10">
              <ul className="space-y-2">
                {[
                  { id: 'account', icon: '👤', label: 'Account' },
                  { id: 'notifications', icon: '🔔', label: 'Notifications' },
                  { id: 'privacy', icon: '🔒', label: 'Privacy' },
                  { id: 'security', icon: '🛡️', label: 'Security' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white/20 text-white shadow-lg'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
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
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl resize-none"
                          defaultValue="Product designer and developer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4">
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email Notifications</h3>
                        <p className="text-sm text-white/70 mt-1">
                          Receive updates via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          emailNotifications ? 'bg-white/30' : 'bg-white/10'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                            emailNotifications ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Push Notifications</h3>
                        <p className="text-sm text-white/70 mt-1">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          pushNotifications ? 'bg-white/30' : 'bg-white/10'
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
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h2 className="text-xl font-semibold text-white mb-6">Privacy Settings</h2>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/15 transition-colors">
                      <input type="radio" name="privacy" className="w-5 h-5" defaultChecked />
                      <div>
                        <p className="text-white font-medium">Public</p>
                        <p className="text-sm text-white/70">Anyone can see your profile</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/15 transition-colors">
                      <input type="radio" name="privacy" className="w-5 h-5" />
                      <div>
                        <p className="text-white font-medium">Private</p>
                        <p className="text-sm text-white/70">Only you can see your profile</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-white/70 mt-1">
                          Add an extra layer of security
                        </p>
                      </div>
                      <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          twoFactor ? 'bg-white/30' : 'bg-white/10'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                            twoFactor ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                    <button className="text-white font-medium hover:underline">
                      Change Password
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg">
                  Save Changes
                </button>
                <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-xl border border-white/20">
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
