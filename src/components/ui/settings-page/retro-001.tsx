'use client';

import { useState } from 'react';

export default function RetroSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-t-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          <h1 className="text-5xl font-black text-white drop-shadow-lg" style={{ fontFamily: 'serif' }}>
            Settings
          </h1>
          <p className="text-orange-100 text-lg mt-2">Configure your preferences</p>
        </div>

        <div className="flex bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          <nav className="w-64 bg-orange-50 border-r-4 border-orange-200 p-6">
            <ul className="space-y-3">
              {['account', 'notifications', 'privacy', 'security'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full px-4 py-3 rounded-lg text-left font-bold capitalize transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] ${
                      activeTab === tab
                        ? 'bg-orange-400 text-white translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                        : 'bg-white text-orange-800 hover:bg-orange-100'
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 p-8">
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-2xl p-6 border-4 border-orange-200">
                  <h2 className="text-2xl font-black text-orange-900 mb-6" style={{ fontFamily: 'serif' }}>
                    Account Details
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-orange-800 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-lg text-gray-800 font-medium focus:outline-none focus:border-orange-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-orange-800 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-lg text-gray-800 font-medium focus:outline-none focus:border-orange-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-orange-800 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="@johndoe"
                        className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-lg text-gray-800 font-medium focus:outline-none focus:border-orange-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-orange-800 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white border-3 border-orange-300 rounded-lg text-gray-800 font-medium focus:outline-none focus:border-orange-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] resize-none"
                        defaultValue="Designer and creative enthusiast"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-2xl p-6 border-4 border-orange-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-orange-900">Email Notifications</h3>
                      <p className="text-sm text-orange-700 font-medium mt-1">
                        Receive email updates
                      </p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`px-6 py-2 rounded-full font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] transition-all ${
                        emailNotifications
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-orange-800 border-2 border-orange-300'
                      }`}
                    >
                      {emailNotifications ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6 border-4 border-orange-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-orange-900">Push Notifications</h3>
                      <p className="text-sm text-orange-700 font-medium mt-1">
                        Receive push alerts
                      </p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(!pushNotifications)}
                      className={`px-6 py-2 rounded-full font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] transition-all ${
                        pushNotifications
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-orange-800 border-2 border-orange-300'
                      }`}
                    >
                      {pushNotifications ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="bg-amber-50 rounded-2xl p-6 border-4 border-orange-200">
                <h2 className="text-2xl font-black text-orange-900 mb-6" style={{ fontFamily: 'serif' }}>
                  Privacy Options
                </h2>
                <div className="space-y-3">
                  {['Public', 'Private', 'Friends Only'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg border-3 border-orange-200 cursor-pointer hover:bg-orange-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                    >
                      <input
                        type="radio"
                        name="privacy"
                        className="w-5 h-5"
                        defaultChecked={option === 'Public'}
                      />
                      <span className="text-orange-900 font-bold">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-amber-50 rounded-2xl p-6 border-4 border-orange-200">
                <h2 className="text-2xl font-black text-orange-900 mb-6" style={{ fontFamily: 'serif' }}>
                  Security Options
                </h2>
                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all">
                    Change Password
                  </button>
                  <button className="w-full px-6 py-4 bg-white text-orange-800 font-bold rounded-lg border-3 border-orange-300 hover:bg-orange-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all">
                    Enable Two-Factor Auth
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 transition-all">
                Save Changes
              </button>
              <button className="px-8 py-4 bg-white text-orange-800 font-bold rounded-lg border-3 border-orange-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
