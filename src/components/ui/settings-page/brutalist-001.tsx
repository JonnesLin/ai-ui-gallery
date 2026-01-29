'use client';

import { useState } from 'react';

export default function BrutalistSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-8 border-black bg-yellow-300 p-8 mb-6">
          <h1 className="text-6xl font-black uppercase tracking-tight">SETTINGS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <nav className="space-y-4">
            {['ACCOUNT', 'NOTIFICATIONS', 'PRIVACY', 'SECURITY'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full px-6 py-4 border-4 border-black font-black text-lg uppercase transition-all ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="md:col-span-3">
            {activeTab === 'account' && (
              <div className="border-4 border-black bg-white p-8">
                <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4">
                  ACCOUNT INFO
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-black uppercase mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      defaultValue="JOHN DOE"
                      className="w-full px-4 py-3 border-4 border-black font-bold uppercase focus:outline-none focus:bg-yellow-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black uppercase mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      defaultValue="JOHN@EXAMPLE.COM"
                      className="w-full px-4 py-3 border-4 border-black font-bold uppercase focus:outline-none focus:bg-yellow-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black uppercase mb-2">
                      USERNAME
                    </label>
                    <input
                      type="text"
                      defaultValue="@JOHNDOE"
                      className="w-full px-4 py-3 border-4 border-black font-bold uppercase focus:outline-none focus:bg-yellow-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black uppercase mb-2">
                      BIO
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-4 border-black font-bold uppercase focus:outline-none focus:bg-yellow-100 resize-none"
                      defaultValue="DESIGNER & DEVELOPER"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="border-4 border-black bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black uppercase">EMAIL NOTIFICATIONS</h3>
                      <p className="text-sm font-bold mt-1">GET UPDATES VIA EMAIL</p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`w-20 h-10 border-4 border-black font-black ${
                        emailNotifications ? 'bg-black text-white' : 'bg-white text-black'
                      }`}
                    >
                      {emailNotifications ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>

                <div className="border-4 border-black bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black uppercase">PUSH NOTIFICATIONS</h3>
                      <p className="text-sm font-bold mt-1">GET PUSH ALERTS</p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(!pushNotifications)}
                      className={`w-20 h-10 border-4 border-black font-black ${
                        pushNotifications ? 'bg-black text-white' : 'bg-white text-black'
                      }`}
                    >
                      {pushNotifications ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="border-4 border-black bg-white p-8">
                <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4">
                  PRIVACY
                </h2>
                <div className="space-y-4">
                  {['PUBLIC', 'PRIVATE', 'FRIENDS'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-4 p-4 border-4 border-black cursor-pointer hover:bg-yellow-100"
                    >
                      <input
                        type="radio"
                        name="privacy"
                        className="w-6 h-6 border-4 border-black"
                        defaultChecked={option === 'PUBLIC'}
                      />
                      <span className="text-xl font-black">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="border-4 border-black bg-white p-8">
                <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4">
                  SECURITY
                </h2>
                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-red-500 border-4 border-black font-black text-white text-lg uppercase hover:bg-red-600">
                    CHANGE PASSWORD
                  </button>
                  <button className="w-full px-6 py-4 bg-white border-4 border-black font-black text-black text-lg uppercase hover:bg-gray-100">
                    ENABLE 2FA
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <button className="px-8 py-4 bg-black text-white border-4 border-black font-black text-lg uppercase hover:bg-gray-800">
                SAVE
              </button>
              <button className="px-8 py-4 bg-white text-black border-4 border-black font-black text-lg uppercase hover:bg-gray-100">
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
