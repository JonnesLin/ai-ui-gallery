'use client';

import { useState } from 'react';

export default function CyberpunkSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-black text-cyan-400 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="border-2 border-cyan-500 bg-black/80 backdrop-blur-sm p-8 mb-6 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-pink-500" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-pink-500" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-pink-500" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-pink-500" />

          <h1 className="text-5xl font-black uppercase tracking-wider text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            &gt; SETTINGS_
          </h1>
          <p className="text-pink-500 mt-2 font-mono">[SYSTEM CONFIG v2.077]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <nav className="space-y-3">
            {[
              { id: 'account', label: 'ACCOUNT', color: 'cyan' },
              { id: 'notifications', label: 'NOTIFY', color: 'pink' },
              { id: 'privacy', label: 'PRIVACY', color: 'purple' },
              { id: 'security', label: 'SECURE', color: 'yellow' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-4 py-3 border-2 font-mono font-bold uppercase text-sm transition-all relative overflow-hidden group ${
                  activeTab === tab.id
                    ? `border-${tab.color}-500 bg-${tab.color}-500/20 text-${tab.color}-400 shadow-[0_0_20px_rgba(0,255,255,0.3)]`
                    : 'border-cyan-900 text-cyan-700 hover:border-cyan-500 hover:text-cyan-400'
                }`}
              >
                <span className="relative z-10">&gt; {tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          <div className="md:col-span-3">
            {activeTab === 'account' && (
              <div className="border-2 border-cyan-500 bg-black/80 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-black uppercase mb-6 text-cyan-400 font-mono border-b-2 border-cyan-900 pb-3">
                  &gt; ACCOUNT_DATA
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase mb-2 text-pink-500">
                      [USER_NAME]
                    </label>
                    <input
                      type="text"
                      defaultValue="JOHN DOE"
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-900 font-mono uppercase text-cyan-400 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-2 text-pink-500">
                      [EMAIL_ID]
                    </label>
                    <input
                      type="email"
                      defaultValue="JOHN@CYBERSPACE.NET"
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-900 font-mono uppercase text-cyan-400 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-2 text-pink-500">
                      [HANDLE]
                    </label>
                    <input
                      type="text"
                      defaultValue="@JOHNDOE"
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-900 font-mono uppercase text-cyan-400 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-2 text-pink-500">
                      [BIO_DATA]
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-900 font-mono uppercase text-cyan-400 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] resize-none"
                      defaultValue="CYBER NETRUNNER / CODE ARCHITECT"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="border-2 border-pink-500 bg-black/80 backdrop-blur-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-mono font-black uppercase text-pink-400">
                        [EMAIL_SYNC]
                      </h3>
                      <p className="text-xs font-mono text-pink-700 mt-1">
                        RECEIVE TRANSMISSIONS VIA EMAIL
                      </p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`px-6 py-2 border-2 font-mono font-bold text-sm transition-all ${
                        emailNotifications
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                          : 'border-pink-900 text-pink-700'
                      }`}
                    >
                      {emailNotifications ? '[ON]' : '[OFF]'}
                    </button>
                  </div>
                </div>

                <div className="border-2 border-pink-500 bg-black/80 backdrop-blur-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-mono font-black uppercase text-pink-400">
                        [PUSH_ALERT]
                      </h3>
                      <p className="text-xs font-mono text-pink-700 mt-1">
                        INSTANT NEURAL NOTIFICATIONS
                      </p>
                    </div>
                    <button
                      onClick={() => setPushNotifications(!pushNotifications)}
                      className={`px-6 py-2 border-2 font-mono font-bold text-sm transition-all ${
                        pushNotifications
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                          : 'border-pink-900 text-pink-700'
                      }`}
                    >
                      {pushNotifications ? '[ON]' : '[OFF]'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="border-2 border-purple-500 bg-black/80 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-black uppercase mb-6 text-purple-400 font-mono border-b-2 border-purple-900 pb-3">
                  &gt; PRIVACY_LEVEL
                </h2>
                <div className="space-y-3">
                  {['PUBLIC', 'STEALTH', 'GHOST_MODE'].map((option, index) => (
                    <label
                      key={option}
                      className="flex items-center gap-4 p-4 border-2 border-purple-900 cursor-pointer hover:border-purple-500 transition-colors bg-black/50"
                    >
                      <input
                        type="radio"
                        name="privacy"
                        className="w-4 h-4"
                        defaultChecked={index === 0}
                      />
                      <span className="text-purple-400 font-mono font-bold">[{option}]</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="border-2 border-yellow-500 bg-black/80 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-black uppercase mb-6 text-yellow-400 font-mono border-b-2 border-yellow-900 pb-3">
                  &gt; SECURITY_PROTOCOL
                </h2>
                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-yellow-500/20 border-2 border-yellow-500 font-mono font-black text-yellow-400 uppercase hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] transition-all">
                    [CHANGE_PASSWORD]
                  </button>
                  <button className="w-full px-6 py-4 bg-yellow-500/20 border-2 border-yellow-500 font-mono font-black text-yellow-400 uppercase hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] transition-all">
                    [ENABLE_2FA]
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <button className="px-8 py-4 bg-cyan-500/20 border-2 border-cyan-500 font-mono font-black text-cyan-400 uppercase hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all">
                [SAVE]
              </button>
              <button className="px-8 py-4 border-2 border-pink-900 font-mono font-black text-pink-700 uppercase hover:border-pink-500 hover:text-pink-400 transition-all">
                [CANCEL]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
