'use client';

import { useState } from 'react';

export default function NeonSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3" style={{
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
          }}>
            Settings
          </h1>
          <p className="text-purple-300 text-lg">Configure your account preferences</p>
        </div>

        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="space-y-3">
              {[
                { id: 'account', label: 'Account', color: '#00ffff' },
                { id: 'notifications', label: 'Notifications', color: '#ff00ff' },
                { id: 'privacy', label: 'Privacy', color: '#ffff00' },
                { id: 'security', label: 'Security', color: '#00ff00' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-900'
                      : 'hover:bg-gray-900/50'
                  }`}
                  style={activeTab === tab.id ? {
                    color: tab.color,
                    textShadow: `0 0 10px ${tab.color}`,
                    boxShadow: `inset 0 0 20px ${tab.color}40, 0 0 10px ${tab.color}60`,
                    border: `2px solid ${tab.color}`
                  } : {
                    color: '#888',
                    border: '2px solid #333'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex-1">
            <div className="bg-gray-900 p-8 rounded-lg" style={{
              border: '2px solid #00ffff40',
              boxShadow: '0 0 20px #00ffff20'
            }}>
              {activeTab === 'account' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6" style={{
                      color: '#00ffff',
                      textShadow: '0 0 10px #00ffff'
                    }}>
                      Account Settings
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-3" style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff'
                      }}>
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-5 py-4 bg-gray-950 text-white focus:outline-none"
                        style={{
                          border: '2px solid #00ffff',
                          boxShadow: '0 0 10px #00ffff40, inset 0 0 10px #00ffff20'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3" style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff'
                      }}>
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-5 py-4 bg-gray-950 text-white focus:outline-none"
                        style={{
                          border: '2px solid #00ffff',
                          boxShadow: '0 0 10px #00ffff40, inset 0 0 10px #00ffff20'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3" style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff'
                      }}>
                        USERNAME
                      </label>
                      <input
                        type="text"
                        defaultValue="@johndoe"
                        className="w-full px-5 py-4 bg-gray-950 text-white focus:outline-none"
                        style={{
                          border: '2px solid #00ffff',
                          boxShadow: '0 0 10px #00ffff40, inset 0 0 10px #00ffff20'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3" style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff'
                      }}>
                        BIO
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-5 py-4 bg-gray-950 text-white focus:outline-none resize-none"
                        style={{
                          border: '2px solid #00ffff',
                          boxShadow: '0 0 10px #00ffff40, inset 0 0 10px #00ffff20'
                        }}
                        defaultValue="Digital artist and developer exploring the neon frontier"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-3" style={{
                      color: '#ff00ff',
                      textShadow: '0 0 10px #ff00ff'
                    }}>
                      Notifications
                    </h2>
                    <p className="text-purple-300">Manage how you receive alerts</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-gray-950 flex items-center justify-between" style={{
                      border: '2px solid #ff00ff60',
                      boxShadow: '0 0 15px #ff00ff30'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold" style={{
                          color: '#ff00ff',
                          textShadow: '0 0 8px #ff00ff'
                        }}>
                          Email Notifications
                        </h3>
                        <p className="text-sm text-purple-300 mt-2">
                          Receive updates and alerts via email
                        </p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className="relative w-16 h-9 transition-all"
                        style={{
                          border: '2px solid #ff00ff',
                          boxShadow: emailNotifications
                            ? '0 0 15px #ff00ff, inset 0 0 10px #ff00ff'
                            : '0 0 5px #ff00ff40',
                          backgroundColor: emailNotifications ? '#ff00ff40' : '#00000040'
                        }}
                      >
                        <span
                          className="absolute top-0.5 w-7 h-7 transition-all"
                          style={{
                            backgroundColor: '#ff00ff',
                            boxShadow: '0 0 10px #ff00ff',
                            [emailNotifications ? 'right' : 'left']: '2px'
                          }}
                        />
                      </button>
                    </div>

                    <div className="p-6 bg-gray-950 flex items-center justify-between" style={{
                      border: '2px solid #ff00ff60',
                      boxShadow: '0 0 15px #ff00ff30'
                    }}>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold" style={{
                          color: '#ff00ff',
                          textShadow: '0 0 8px #ff00ff'
                        }}>
                          Push Notifications
                        </h3>
                        <p className="text-sm text-purple-300 mt-2">
                          Get instant push notifications
                        </p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className="relative w-16 h-9 transition-all"
                        style={{
                          border: '2px solid #ff00ff',
                          boxShadow: pushNotifications
                            ? '0 0 15px #ff00ff, inset 0 0 10px #ff00ff'
                            : '0 0 5px #ff00ff40',
                          backgroundColor: pushNotifications ? '#ff00ff40' : '#00000040'
                        }}
                      >
                        <span
                          className="absolute top-0.5 w-7 h-7 transition-all"
                          style={{
                            backgroundColor: '#ff00ff',
                            boxShadow: '0 0 10px #ff00ff',
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
                    <h2 className="text-3xl font-bold mb-3" style={{
                      color: '#ffff00',
                      textShadow: '0 0 10px #ffff00'
                    }}>
                      Privacy
                    </h2>
                    <p className="text-purple-300">Control your visibility</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-5" style={{
                      color: '#ffff00',
                      textShadow: '0 0 8px #ffff00'
                    }}>
                      Profile Visibility
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: 'public', label: 'Public', desc: 'Everyone can view' },
                        { value: 'private', label: 'Private', desc: 'Only you can view' },
                        { value: 'friends', label: 'Friends', desc: 'Friends only' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-start gap-4 p-5 bg-gray-950 cursor-pointer transition-all"
                          style={{
                            border: `2px solid ${profileVisibility === option.value ? '#ffff00' : '#ffff0040'}`,
                            boxShadow: profileVisibility === option.value
                              ? '0 0 20px #ffff00, inset 0 0 15px #ffff0020'
                              : '0 0 5px #ffff0020'
                          }}
                        >
                          <input
                            type="radio"
                            name="privacy"
                            value={option.value}
                            checked={profileVisibility === option.value}
                            onChange={(e) => setProfileVisibility(e.target.value)}
                            className="w-5 h-5 mt-1"
                            style={{
                              accentColor: '#ffff00'
                            }}
                          />
                          <div>
                            <p className="font-bold" style={{
                              color: '#ffff00',
                              textShadow: '0 0 5px #ffff00'
                            }}>
                              {option.label}
                            </p>
                            <p className="text-sm text-purple-300 mt-1">{option.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-3" style={{
                      color: '#00ff00',
                      textShadow: '0 0 10px #00ff00'
                    }}>
                      Security
                    </h2>
                    <p className="text-purple-300">Protect your account</p>
                  </div>

                  <div className="p-6 bg-gray-950 flex items-center justify-between" style={{
                    border: '2px solid #00ff0060',
                    boxShadow: '0 0 15px #00ff0030'
                  }}>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold" style={{
                        color: '#00ff00',
                        textShadow: '0 0 8px #00ff00'
                      }}>
                        Two-Factor Authentication
                      </h3>
                      <p className="text-sm text-purple-300 mt-2">
                        Extra security layer for your account
                      </p>
                    </div>
                    <button
                      onClick={() => setTwoFactor(!twoFactor)}
                      className="relative w-16 h-9 transition-all"
                      style={{
                        border: '2px solid #00ff00',
                        boxShadow: twoFactor
                          ? '0 0 15px #00ff00, inset 0 0 10px #00ff00'
                          : '0 0 5px #00ff0040',
                        backgroundColor: twoFactor ? '#00ff0040' : '#00000040'
                      }}
                    >
                      <span
                        className="absolute top-0.5 w-7 h-7 transition-all"
                        style={{
                          backgroundColor: '#00ff00',
                          boxShadow: '0 0 10px #00ff00',
                          [twoFactor ? 'right' : 'left']: '2px'
                        }}
                      />
                    </button>
                  </div>

                  <div className="p-6 bg-gray-950" style={{
                    border: '2px solid #00ff0060',
                    boxShadow: '0 0 15px #00ff0030'
                  }}>
                    <h3 className="text-base font-bold mb-4" style={{
                      color: '#00ff00',
                      textShadow: '0 0 8px #00ff00'
                    }}>
                      Password
                    </h3>
                    <button className="font-bold" style={{
                      color: '#00ff00',
                      textShadow: '0 0 5px #00ff00'
                    }}>
                      Change Password →
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-10 pt-8" style={{
                borderTop: '2px solid #00ffff40'
              }}>
                <button
                  className="px-8 py-4 font-bold transition-all"
                  style={{
                    backgroundColor: '#00ffff40',
                    color: '#00ffff',
                    border: '2px solid #00ffff',
                    boxShadow: '0 0 20px #00ffff60',
                    textShadow: '0 0 10px #00ffff'
                  }}
                >
                  Save Changes
                </button>
                <button
                  className="px-8 py-4 font-bold transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#888',
                    border: '2px solid #444'
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
