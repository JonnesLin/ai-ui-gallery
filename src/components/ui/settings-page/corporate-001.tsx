'use client';

import { useState } from 'react';

export default function CorporateSettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-2">
              <ul className="space-y-1">
                {[
                  { id: 'account', label: 'Account Settings' },
                  { id: 'notifications', label: 'Notifications' },
                  { id: 'privacy', label: 'Privacy & Data' },
                  { id: 'security', label: 'Security' },
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-8">
                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        Account Information
                      </h2>
                      <p className="text-sm text-gray-600">
                        Update your account details and personal information
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            defaultValue="John"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="john.doe@company.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          defaultValue="Senior Product Manager"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Product</option>
                          <option>Engineering</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        Notification Preferences
                      </h2>
                      <p className="text-sm text-gray-600">
                        Choose how you want to be notified about updates
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                      <div className="flex items-start justify-between py-4 border-b border-gray-100">
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Receive email notifications about account activity and updates
                          </p>
                        </div>
                        <button
                          onClick={() => setEmailNotifications(!emailNotifications)}
                          className={`ml-4 relative w-14 h-7 rounded-full transition-colors ${
                            emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                              emailNotifications ? 'translate-x-7' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-start justify-between py-4 border-b border-gray-100">
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-gray-900">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Receive push notifications on your device
                          </p>
                        </div>
                        <button
                          onClick={() => setPushNotifications(!pushNotifications)}
                          className={`ml-4 relative w-14 h-7 rounded-full transition-colors ${
                            pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                              pushNotifications ? 'translate-x-7' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        Privacy & Data
                      </h2>
                      <p className="text-sm text-gray-600">
                        Control your privacy settings and data preferences
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-base font-medium text-gray-900 mb-4">
                        Profile Visibility
                      </h3>
                      <div className="space-y-3">
                        {[
                          { value: 'public', label: 'Public', desc: 'Anyone can view your profile' },
                          { value: 'company', label: 'Company Only', desc: 'Only company members can view' },
                          { value: 'private', label: 'Private', desc: 'Only you can view your profile' },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex items-start gap-3 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                          >
                            <input
                              type="radio"
                              name="privacy"
                              className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300"
                              defaultChecked={option.value === 'company'}
                            />
                            <div>
                              <p className="font-medium text-gray-900">{option.label}</p>
                              <p className="text-sm text-gray-600">{option.desc}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        Security Settings
                      </h2>
                      <p className="text-sm text-gray-600">
                        Manage your security preferences and authentication methods
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                      <div className="flex items-start justify-between py-4 border-b border-gray-100">
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-gray-900">
                            Two-Factor Authentication
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <button
                          onClick={() => setTwoFactor(!twoFactor)}
                          className={`ml-4 relative w-14 h-7 rounded-full transition-colors ${
                            twoFactor ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                              twoFactor ? 'translate-x-7' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="pt-4">
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center px-8 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
