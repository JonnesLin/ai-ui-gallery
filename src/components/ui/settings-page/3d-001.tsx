'use client';

import { useState } from 'react';

export default function ThreeDSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 transform perspective-1000">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={{
            textShadow: '0 4px 6px rgba(0,0,0,0.3), 0 8px 12px rgba(0,0,0,0.2), 0 12px 24px rgba(0,0,0,0.1)'
          }}>
            Settings
          </h1>
          <p className="text-purple-200 text-lg drop-shadow-lg">Manage your account preferences</p>
        </div>

        <div className="flex gap-8">
          <nav className="w-72 flex-shrink-0">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6" style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}>
              <ul className="space-y-3">
                {[
                  { id: 'account', label: 'Account', icon: '👤' },
                  { id: 'notifications', label: 'Notifications', icon: '🔔' },
                  { id: 'privacy', label: 'Privacy', icon: '🔒' },
                  { id: 'security', label: 'Security', icon: '🛡️' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white transform scale-105'
                          : 'bg-white/5 text-purple-200 hover:bg-white/10 hover:text-white'
                      }`}
                      style={{
                        boxShadow: activeTab === tab.id
                          ? '0 12px 24px rgba(168,85,247,0.4), 0 6px 12px rgba(236,72,153,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                          : '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                      }}
                    >
                      <span className="mr-3 text-xl">{tab.icon}</span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-8" style={{
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 12px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}>
              {activeTab === 'account' && (
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Account Information</h2>
                    <p className="text-purple-200">Update your personal details</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-purple-100 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        style={{
                          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-purple-100 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        style={{
                          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-purple-100 mb-3">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="@johndoe"
                        className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        style={{
                          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-purple-100 mb-3">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
                        style={{
                          boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)'
                        }}
                        defaultValue="Product designer and developer with a passion for 3D interfaces"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Notifications</h2>
                    <p className="text-purple-200">Control how you receive updates</p>
                  </div>

                  <div className="space-y-5">
                    <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-between" style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          Email Notifications
                        </h3>
                        <p className="text-sm text-purple-200">
                          Receive updates and news via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                          emailNotifications ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-white/10'
                        }`}
                        style={{
                          boxShadow: emailNotifications
                            ? '0 6px 12px rgba(16,185,129,0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
                            : 'inset 0 4px 8px rgba(0,0,0,0.3)'
                        }}
                      >
                        <span
                          className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-300 ${
                            emailNotifications ? 'bg-white' : 'bg-white/30'
                          }`}
                          style={{
                            [emailNotifications ? 'right' : 'left']: '4px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                          }}
                        />
                      </button>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-between" style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-purple-200">
                          Get instant alerts on your devices
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                          pushNotifications ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-white/10'
                        }`}
                        style={{
                          boxShadow: pushNotifications
                            ? '0 6px 12px rgba(16,185,129,0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
                            : 'inset 0 4px 8px rgba(0,0,0,0.3)'
                        }}
                      >
                        <span
                          className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-300 ${
                            pushNotifications ? 'bg-white' : 'bg-white/30'
                          }`}
                          style={{
                            [pushNotifications ? 'right' : 'left']: '4px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Privacy Settings</h2>
                    <p className="text-purple-200">Control your data and visibility</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-5">Profile Visibility</h3>
                    <div className="space-y-4">
                      {[
                        { value: 'public', label: 'Public', desc: 'Everyone can view your profile', icon: '🌍' },
                        { value: 'private', label: 'Private', desc: 'Only you can see your profile', icon: '🔐' },
                        { value: 'friends', label: 'Friends Only', desc: 'Only friends can view', icon: '👥' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-5 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                            profileVisibility === option.value
                              ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-lg transform scale-105'
                              : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
                          }`}
                          style={{
                            boxShadow: profileVisibility === option.value
                              ? '0 12px 24px rgba(168,85,247,0.4), 0 6px 12px rgba(236,72,153,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                              : '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
                          }}
                        >
                          <div className="text-3xl">{option.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-white mb-1">{option.label}</h4>
                            <p className="text-sm text-purple-200">{option.desc}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            profileVisibility === option.value
                              ? 'border-white bg-gradient-to-br from-purple-500 to-pink-500'
                              : 'border-purple-300'
                          }`} style={{
                            boxShadow: profileVisibility === option.value
                              ? '0 4px 8px rgba(168,85,247,0.5), inset 0 1px 2px rgba(255,255,255,0.3)'
                              : 'inset 0 2px 4px rgba(0,0,0,0.2)'
                          }}>
                            {profileVisibility === option.value && (
                              <div className="w-3 h-3 bg-white rounded-full" style={{
                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                              }} />
                            )}
                          </div>
                          <input
                            type="radio"
                            name="privacy"
                            value={option.value}
                            checked={profileVisibility === option.value}
                            onChange={(e) => setProfileVisibility(e.target.value)}
                            className="sr-only"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Security</h2>
                    <p className="text-purple-200">Keep your account secure</p>
                  </div>

                  <div className="space-y-5">
                    <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-between" style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-sm text-purple-200">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        onClick={() => setTwoFactor(!twoFactor)}
                        className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                          twoFactor ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-white/10'
                        }`}
                        style={{
                          boxShadow: twoFactor
                            ? '0 6px 12px rgba(16,185,129,0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
                            : 'inset 0 4px 8px rgba(0,0,0,0.3)'
                        }}
                      >
                        <span
                          className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-300 ${
                            twoFactor ? 'bg-white' : 'bg-white/30'
                          }`}
                          style={{
                            [twoFactor ? 'right' : 'left']: '4px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                          }}
                        />
                      </button>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl" style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                      <h3 className="text-base font-bold text-white mb-3">Change Password</h3>
                      <button className="text-sm text-purple-200 hover:text-white font-semibold transition-colors underline decoration-purple-400">
                        Update your password →
                      </button>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl" style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                      <h3 className="text-base font-bold text-white mb-2">Active Sessions</h3>
                      <p className="text-sm text-purple-200 mb-3">Currently signed in on 2 devices</p>
                      <button className="text-sm text-purple-200 hover:text-white font-semibold transition-colors underline decoration-purple-400">
                        Manage all sessions →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-5 mt-10 pt-8 border-t border-white/10">
                <button
                  className="px-10 py-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: '0 12px 24px rgba(168,85,247,0.4), 0 6px 12px rgba(236,72,153,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  Save Changes
                </button>
                <button
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm text-purple-200 font-bold rounded-xl hover:bg-white/15 hover:text-white transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
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
