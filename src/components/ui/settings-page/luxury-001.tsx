'use client';

import { useState } from 'react';

export default function LuxurySettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-amber-900/30 shadow-2xl">
          <div className="border-b border-amber-900/30 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-10">
            <h1 className="text-5xl font-light text-amber-100 tracking-wide">Settings</h1>
            <p className="text-amber-200/70 mt-3 text-lg font-light">Exclusive Preferences</p>
          </div>

          <div className="flex">
            <nav className="w-80 p-8 bg-gradient-to-b from-gray-900 to-black border-r border-amber-900/30">
              <ul className="space-y-3">
                {[
                  { id: 'account', label: 'Account' },
                  { id: 'notifications', label: 'Notifications' },
                  { id: 'privacy', label: 'Privacy' },
                  { id: 'security', label: 'Security' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full px-6 py-4 text-left text-base font-light tracking-wide transition-all border-l-2 ${
                        activeTab === tab.id
                          ? 'border-amber-500 bg-amber-900/20 text-amber-100'
                          : 'border-transparent text-amber-200/50 hover:text-amber-100 hover:border-amber-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1 p-10">
              {activeTab === 'account' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-light text-amber-100 mb-2">
                      Account Information
                    </h2>
                    <p className="text-amber-200/60 font-light">
                      Manage your personal details
                    </p>
                  </div>

                  <div className="space-y-6 border-t border-amber-900/30 pt-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-light text-amber-200/80 mb-3 tracking-wide uppercase text-xs">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Alexander"
                          className="w-full px-5 py-3 bg-black/40 border border-amber-900/50 text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-600 transition-all font-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-light text-amber-200/80 mb-3 tracking-wide uppercase text-xs">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Sterling"
                          className="w-full px-5 py-3 bg-black/40 border border-amber-900/50 text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-600 transition-all font-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-light text-amber-200/80 mb-3 tracking-wide uppercase text-xs">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="alexander@luxury.com"
                        className="w-full px-5 py-3 bg-black/40 border border-amber-900/50 text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-600 transition-all font-light"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-light text-amber-200/80 mb-3 tracking-wide uppercase text-xs">
                        Title
                      </label>
                      <input
                        type="text"
                        defaultValue="Executive Member"
                        className="w-full px-5 py-3 bg-black/40 border border-amber-900/50 text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-600 transition-all font-light"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-light text-amber-100 mb-2">
                      Notification Preferences
                    </h2>
                    <p className="text-amber-200/60 font-light">
                      Control your communication settings
                    </p>
                  </div>

                  <div className="space-y-5 border-t border-amber-900/30 pt-8">
                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-amber-900/10 to-transparent border border-amber-900/30">
                      <div>
                        <h3 className="text-xl font-light text-amber-100">
                          Email Communications
                        </h3>
                        <p className="text-sm text-amber-200/60 mt-2 font-light">
                          Receive curated updates and notifications
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-8 border transition-all ${
                          emailNotifications
                            ? 'bg-amber-600 border-amber-500'
                            : 'bg-black border-amber-900/50'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-7 h-7 bg-amber-100 transition-transform ${
                            emailNotifications ? 'translate-x-8' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-amber-900/10 to-transparent border border-amber-900/30">
                      <div>
                        <h3 className="text-xl font-light text-amber-100">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-amber-200/60 mt-2 font-light">
                          Instant alerts on your devices
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-8 border transition-all ${
                          pushNotifications
                            ? 'bg-amber-600 border-amber-500'
                            : 'bg-black border-amber-900/50'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-7 h-7 bg-amber-100 transition-transform ${
                            pushNotifications ? 'translate-x-8' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-light text-amber-100 mb-2">
                      Privacy Settings
                    </h2>
                    <p className="text-amber-200/60 font-light">
                      Your privacy is our priority
                    </p>
                  </div>

                  <div className="border-t border-amber-900/30 pt-8">
                    <h3 className="text-lg font-light text-amber-200/80 mb-5 uppercase text-xs tracking-wider">
                      Profile Visibility
                    </h3>
                    <div className="space-y-4">
                      {['Exclusive Circle', 'Private', 'Invitation Only'].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-5 p-5 border border-amber-900/30 bg-gradient-to-r from-amber-900/5 to-transparent cursor-pointer hover:border-amber-700/50 transition-all"
                        >
                          <input
                            type="radio"
                            name="privacy"
                            className="w-4 h-4 border-amber-700 bg-black"
                            defaultChecked={option === 'Exclusive Circle'}
                          />
                          <span className="text-amber-100 font-light text-lg">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-light text-amber-100 mb-2">
                      Security Settings
                    </h2>
                    <p className="text-amber-200/60 font-light">
                      Advanced security measures
                    </p>
                  </div>

                  <div className="border-t border-amber-900/30 pt-8 space-y-5">
                    <button className="w-full px-8 py-5 bg-gradient-to-r from-amber-600 to-amber-700 border border-amber-500 text-amber-50 font-light text-lg tracking-wide hover:from-amber-700 hover:to-amber-800 transition-all">
                      Update Password
                    </button>
                    <button className="w-full px-8 py-5 bg-transparent border border-amber-900/50 text-amber-200 font-light text-lg tracking-wide hover:border-amber-700 hover:bg-amber-900/10 transition-all">
                      Configure Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-5 mt-12 pt-8 border-t border-amber-900/30">
                <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 border border-amber-500 text-amber-50 font-light tracking-wide hover:from-amber-700 hover:to-amber-800 transition-all">
                  Save Changes
                </button>
                <button className="px-10 py-4 bg-transparent border border-amber-900/50 text-amber-200 font-light tracking-wide hover:border-amber-700 hover:bg-amber-900/10 transition-all">
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
