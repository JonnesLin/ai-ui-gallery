'use client';

import { useState } from 'react';

export default function SketchSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');

  return (
    <div className="min-h-screen bg-white p-8" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-black text-gray-900 mb-3" style={{
            transform: 'rotate(-1deg)',
            display: 'inline-block'
          }}>
            Settings
          </h1>
          <p className="text-gray-600 text-lg ml-2">Your account preferences</p>
        </div>

        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-yellow-50 p-4 rounded-lg" style={{
              border: '3px solid #000',
              borderRadius: '20px',
              transform: 'rotate(-0.5deg)',
              boxShadow: '4px 4px 0px #000'
            }}>
              <ul className="space-y-2">
                {[
                  { id: 'account', label: 'Account' },
                  { id: 'notifications', label: 'Notifications' },
                  { id: 'privacy', label: 'Privacy' },
                  { id: 'security', label: 'Security' },
                ].map((tab, idx) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-5 py-3 text-sm font-bold transition-all rounded-lg ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                      style={{
                        border: '2px solid #000',
                        transform: activeTab === tab.id ? 'rotate(1deg)' : `rotate(${idx % 2 ? 0.5 : -0.5}deg)`,
                        boxShadow: activeTab === tab.id ? '3px 3px 0px #000' : '2px 2px 0px #000'
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex-1">
            <div className="bg-white p-8 rounded-2xl" style={{
              border: '3px solid #000',
              boxShadow: '6px 6px 0px #000',
              transform: 'rotate(0.5deg)'
            }}>
              {activeTab === 'account' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-8" style={{
                      transform: 'rotate(-1deg)',
                      display: 'inline-block'
                    }}>
                      Account Info
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3" style={{
                        transform: 'rotate(-0.5deg)',
                        display: 'inline-block'
                      }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 bg-yellow-50 text-gray-900 font-medium focus:outline-none"
                        style={{
                          border: '2px solid #000',
                          borderRadius: '12px',
                          transform: 'rotate(0.3deg)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3" style={{
                        transform: 'rotate(0.5deg)',
                        display: 'inline-block'
                      }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-3 bg-blue-50 text-gray-900 font-medium focus:outline-none"
                        style={{
                          border: '2px solid #000',
                          borderRadius: '12px',
                          transform: 'rotate(-0.3deg)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3" style={{
                        transform: 'rotate(-0.3deg)',
                        display: 'inline-block'
                      }}>
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="@johndoe"
                        className="w-full px-4 py-3 bg-pink-50 text-gray-900 font-medium focus:outline-none"
                        style={{
                          border: '2px solid #000',
                          borderRadius: '12px',
                          transform: 'rotate(0.4deg)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3" style={{
                        transform: 'rotate(0.4deg)',
                        display: 'inline-block'
                      }}>
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-green-50 text-gray-900 font-medium focus:outline-none resize-none"
                        style={{
                          border: '2px solid #000',
                          borderRadius: '12px',
                          transform: 'rotate(-0.2deg)'
                        }}
                        defaultValue="Creative soul drawing outside the lines ✏️"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-2" style={{
                      transform: 'rotate(-1deg)',
                      display: 'inline-block'
                    }}>
                      Notifications
                    </h2>
                    <p className="text-gray-600 ml-2">Stay in the loop</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-purple-50 rounded-xl flex items-center justify-between" style={{
                      border: '3px solid #000',
                      transform: 'rotate(0.5deg)',
                      boxShadow: '3px 3px 0px #000'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-gray-900">
                          Email Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Get updates in your inbox
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          emailNotifications ? 'bg-black' : 'bg-white'
                        }`}
                        style={{
                          border: '3px solid #000',
                          boxShadow: '2px 2px 0px #000'
                        }}
                      >
                        <span
                          className={`absolute top-0.5 w-7 h-7 rounded-full transition-all ${
                            emailNotifications ? 'bg-yellow-400' : 'bg-gray-300'
                          }`}
                          style={{
                            border: '2px solid #000',
                            [emailNotifications ? 'right' : 'left']: '2px'
                          }}
                        />
                      </button>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-xl flex items-center justify-between" style={{
                      border: '3px solid #000',
                      transform: 'rotate(-0.5deg)',
                      boxShadow: '3px 3px 0px #000'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-gray-900">
                          Push Notifications
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Real-time alerts on your device
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-16 h-9 rounded-full transition-all ${
                          pushNotifications ? 'bg-black' : 'bg-white'
                        }`}
                        style={{
                          border: '3px solid #000',
                          boxShadow: '2px 2px 0px #000'
                        }}
                      >
                        <span
                          className={`absolute top-0.5 w-7 h-7 rounded-full transition-all ${
                            pushNotifications ? 'bg-pink-400' : 'bg-gray-300'
                          }`}
                          style={{
                            border: '2px solid #000',
                            [pushNotifications ? 'right' : 'left']: '2px'
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-2" style={{
                      transform: 'rotate(-1deg)',
                      display: 'inline-block'
                    }}>
                      Privacy
                    </h2>
                    <p className="text-gray-600 ml-2">Control who sees what</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-5" style={{
                      transform: 'rotate(0.5deg)',
                      display: 'inline-block'
                    }}>
                      Profile Visibility
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: 'public', label: 'Public', desc: 'Everyone can see', color: 'bg-green-50' },
                        { value: 'private', label: 'Private', desc: 'Just for you', color: 'bg-red-50' },
                        { value: 'friends', label: 'Friends', desc: 'Friends only', color: 'bg-yellow-50' },
                      ].map((option, idx) => (
                        <label
                          key={option.value}
                          className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all ${option.color}`}
                          style={{
                            border: `3px solid ${profileVisibility === option.value ? '#000' : '#ccc'}`,
                            transform: `rotate(${idx % 2 ? 0.5 : -0.5}deg)`,
                            boxShadow: profileVisibility === option.value ? '4px 4px 0px #000' : '2px 2px 0px #ccc'
                          }}
                        >
                          <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{
                            border: '3px solid #000',
                            backgroundColor: profileVisibility === option.value ? '#000' : '#fff'
                          }}>
                            {profileVisibility === option.value && (
                              <div className="w-3 h-3 rounded-full bg-yellow-400" style={{
                                border: '1px solid #000'
                              }} />
                            )}
                          </div>
                          <div>
                            <p className="font-black text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
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
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-2" style={{
                      transform: 'rotate(-1deg)',
                      display: 'inline-block'
                    }}>
                      Security
                    </h2>
                    <p className="text-gray-600 ml-2">Keep your account safe</p>
                  </div>

                  <div className="p-6 bg-red-50 rounded-xl flex items-center justify-between" style={{
                    border: '3px solid #000',
                    transform: 'rotate(0.5deg)',
                    boxShadow: '4px 4px 0px #000'
                  }}>
                    <div className="flex-1">
                      <h3 className="text-base font-black text-gray-900">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Extra security for your account
                      </p>
                    </div>
                    <button
                      onClick={() => setTwoFactor(!twoFactor)}
                      className={`relative w-16 h-9 rounded-full transition-all ${
                        twoFactor ? 'bg-black' : 'bg-white'
                      }`}
                      style={{
                        border: '3px solid #000',
                        boxShadow: '2px 2px 0px #000'
                      }}
                    >
                      <span
                        className={`absolute top-0.5 w-7 h-7 rounded-full transition-all ${
                          twoFactor ? 'bg-green-400' : 'bg-gray-300'
                        }`}
                        style={{
                          border: '2px solid #000',
                          [twoFactor ? 'right' : 'left']: '2px'
                        }}
                      />
                    </button>
                  </div>

                  <div className="p-6 bg-orange-50 rounded-xl" style={{
                    border: '3px solid #000',
                    transform: 'rotate(-0.3deg)',
                    boxShadow: '3px 3px 0px #000'
                  }}>
                    <h3 className="text-base font-black text-gray-900 mb-3">Password</h3>
                    <button className="font-bold text-gray-900 underline decoration-wavy decoration-2 hover:no-underline">
                      Change Password →
                    </button>
                  </div>

                  <div className="p-6 bg-cyan-50 rounded-xl" style={{
                    border: '3px solid #000',
                    transform: 'rotate(0.4deg)',
                    boxShadow: '3px 3px 0px #000'
                  }}>
                    <h3 className="text-base font-black text-gray-900 mb-2">Active Sessions</h3>
                    <p className="text-sm text-gray-600 mb-3">Currently signed in on 2 devices</p>
                    <button className="font-bold text-gray-900 underline decoration-wavy decoration-2 hover:no-underline">
                      Manage Sessions →
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-10 pt-8" style={{
                borderTop: '3px dashed #000'
              }}>
                <button
                  className="px-8 py-4 bg-black text-white font-black rounded-xl hover:translate-y-0.5 transition-transform"
                  style={{
                    border: '3px solid #000',
                    boxShadow: '4px 4px 0px #000',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  Save Changes
                </button>
                <button
                  className="px-8 py-4 bg-white text-gray-900 font-black rounded-xl hover:translate-y-0.5 transition-transform"
                  style={{
                    border: '3px solid #000',
                    boxShadow: '4px 4px 0px #000',
                    transform: 'rotate(1deg)'
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
