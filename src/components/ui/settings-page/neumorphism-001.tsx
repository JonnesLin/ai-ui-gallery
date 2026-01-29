'use client';

import { useState } from 'react';

export default function NeumorphismSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#e0e5ec] rounded-3xl shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

          <div className="flex gap-8">
            <nav className="w-56 flex-shrink-0">
              <ul className="space-y-3">
                {['account', 'notifications', 'privacy', 'security'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full px-6 py-4 rounded-2xl text-sm font-medium capitalize transition-all ${
                        activeTab === tab
                          ? 'bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#bec3c9,inset_-8px_-8px_16px_#ffffff] text-gray-900'
                          : 'bg-[#e0e5ec] shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1">
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Account Information
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-[#e0e5ec] rounded-xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] text-gray-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-[#e0e5ec] rounded-xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] text-gray-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue="@johndoe"
                          className="w-full px-4 py-3 bg-[#e0e5ec] rounded-xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] text-gray-800 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-[#e0e5ec] rounded-xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] text-gray-800 focus:outline-none resize-none"
                          defaultValue="Product designer and developer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-5">
                  <div className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Email Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Receive notifications via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`w-16 h-8 rounded-full shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] flex items-center transition-all ${
                          emailNotifications ? 'bg-[#e0e5ec]' : 'bg-[#e0e5ec]'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-transform ${
                            emailNotifications ? 'translate-x-9 ml-1' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Receive push notifications
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`w-16 h-8 rounded-full shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] flex items-center transition-all ${
                          pushNotifications ? 'bg-[#e0e5ec]' : 'bg-[#e0e5ec]'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-transform ${
                            pushNotifications ? 'translate-x-9 ml-1' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Privacy Settings</h2>
                  <div className="space-y-4">
                    {['Public', 'Private', 'Friends Only'].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-4 p-4 bg-[#e0e5ec] rounded-xl shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="privacy"
                          className="w-5 h-5"
                          defaultChecked={option === 'Public'}
                        />
                        <span className="text-gray-800 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Security Settings
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] text-gray-800 font-medium hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-all">
                      Change Password
                    </button>
                    <button className="w-full px-6 py-4 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] text-gray-800 font-medium hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-all">
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-4 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] text-gray-800 font-semibold hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-all">
                  Save Changes
                </button>
                <button className="px-8 py-4 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] text-gray-600 font-semibold hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] transition-all">
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
