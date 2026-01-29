'use client';

import { useState } from 'react';

export default function MonochromeSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-black mb-3">Settings</h1>
          <p className="text-gray-600 text-lg">Manage your account preferences</p>
        </div>

        <div className="flex gap-12">
          <nav className="w-56 flex-shrink-0">
            <div className="space-y-1">
              {[
                { id: 'account', label: 'Account' },
                { id: 'notifications', label: 'Notifications' },
                { id: 'privacy', label: 'Privacy' },
                { id: 'security', label: 'Security' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex-1">
            {activeTab === 'account' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-8">Account Information</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-5 py-4 bg-white border-2 border-black text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-5 py-4 bg-white border-2 border-black text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-3">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="@johndoe"
                      className="w-full px-5 py-4 bg-white border-2 border-black text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-3">
                      Bio
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-4 bg-white border-2 border-black text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 resize-none"
                      defaultValue="Product designer and developer. Building beautiful interfaces for the web."
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">Notifications</h2>
                  <p className="text-gray-600">Choose what notifications you receive</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-6 border-2 border-black">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-black">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Receive updates and notifications via email
                      </p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`relative w-16 h-9 border-2 border-black transition-colors ${
                        emailNotifications ? 'bg-black' : 'bg-white'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-7 h-7 transition-all ${
                          emailNotifications
                            ? 'right-0.5 bg-white'
                            : 'left-0.5 bg-black'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 border-2 border-black">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-black">
                        Push Notifications
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Receive push notifications on your device
                      </p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(!pushNotifications)}
                      className={`relative w-16 h-9 border-2 border-black transition-colors ${
                        pushNotifications ? 'bg-black' : 'bg-white'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-7 h-7 transition-all ${
                          pushNotifications
                            ? 'right-0.5 bg-white'
                            : 'left-0.5 bg-black'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 border-2 border-black">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-black">
                        Weekly Digest
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Receive a weekly summary of your activity
                      </p>
                    </div>
                    <button className="relative w-16 h-9 border-2 border-black bg-white">
                      <span className="absolute top-0.5 left-0.5 w-7 h-7 bg-black" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">Privacy</h2>
                  <p className="text-gray-600">Control your privacy settings</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-5">
                    Profile Visibility
                  </h3>
                  <div className="space-y-3">
                    {[
                      { value: 'public', label: 'Public', desc: 'Visible to everyone' },
                      { value: 'private', label: 'Private', desc: 'Only visible to you' },
                      { value: 'friends', label: 'Friends', desc: 'Visible to friends only' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-start gap-4 p-6 border-2 cursor-pointer transition-all ${
                          profileVisibility === option.value
                            ? 'border-black bg-gray-100'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="privacy"
                          value={option.value}
                          checked={profileVisibility === option.value}
                          onChange={(e) => setProfileVisibility(e.target.value)}
                          className="w-6 h-6 mt-0.5 border-2 border-black text-black focus:ring-0 focus:ring-offset-0"
                        />
                        <div>
                          <p className="font-bold text-black text-base">{option.label}</p>
                          <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-black">
                  <button className="text-black font-bold underline hover:no-underline">
                    Download Your Data
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">Security</h2>
                  <p className="text-gray-600">Protect your account</p>
                </div>

                <div className="flex items-center justify-between p-6 border-2 border-black">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-black">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Add extra security to your account
                    </p>
                  </div>
                  <button
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative w-16 h-9 border-2 border-black transition-colors ${
                      twoFactor ? 'bg-black' : 'bg-white'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-7 h-7 transition-all ${
                        twoFactor ? 'right-0.5 bg-white' : 'left-0.5 bg-black'
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6 border-2 border-black bg-gray-50">
                  <h3 className="text-base font-bold text-black mb-3">Password</h3>
                  <button className="text-black font-bold underline hover:no-underline">
                    Change Password
                  </button>
                </div>

                <div className="p-6 border-2 border-black bg-gray-50">
                  <h3 className="text-base font-bold text-black mb-3">Active Sessions</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You are currently signed in on 3 devices
                  </p>
                  <button className="text-black font-bold underline hover:no-underline">
                    Manage Sessions
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-12 pt-8 border-t-2 border-black">
              <button className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                Save Changes
              </button>
              <button className="px-8 py-4 bg-white text-black font-bold border-2 border-black hover:bg-gray-100 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
