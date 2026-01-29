'use client';

import { useState } from 'react';
import { SettingsPage, SettingsNav, SettingsContent, SettingsSection, SettingsItem } from './index';

export default function FlatSettingsPage() {
  const [activeSection, setActiveSection] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [language, setLanguage] = useState('english');

  const sections = [
    { id: 'account', title: 'Account' },
    { id: 'notifications', title: 'Notifications' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'security', title: 'Security' },
  ];

  return (
    <SettingsPage theme="flat">
      <SettingsNav
        theme="flat"
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <SettingsContent theme="flat">
      {activeSection === 'account' && (
        <SettingsSection theme="flat" title="Account Settings">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 text-sm focus:bg-gray-200 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 text-sm focus:bg-gray-200 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Username</label>
            <input
              type="text"
              defaultValue="@johndoe"
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 text-sm focus:bg-gray-200 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Bio</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-100 text-gray-800 text-sm focus:bg-gray-200 focus:outline-none transition-colors resize-none"
              defaultValue="Product designer and developer passionate about creating clean, user-friendly interfaces."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">Language</label>
            <div className="flex gap-3">
              {['english', 'spanish', 'french'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-6 py-3 text-sm font-semibold capitalize transition-colors ${
                    language === lang
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-10 pt-8 border-t-2 border-gray-100">
            <button className="px-8 py-3 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
              Save Changes
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-300 transition-colors">
              Cancel
            </button>
          </div>
        </SettingsSection>
      )}

      {activeSection === 'notifications' && (
        <SettingsSection theme="flat" title="Notification Preferences">
          <SettingsItem
            theme="flat"
            label="Email Notifications"
            description="Receive notifications via email"
          >
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`w-14 h-8 transition-colors ${
                emailNotifications ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white m-1 transition-transform ${
                  emailNotifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <SettingsItem
            theme="flat"
            label="Push Notifications"
            description="Receive push notifications on your devices"
          >
            <button
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`w-14 h-8 transition-colors ${
                pushNotifications ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white m-1 transition-transform ${
                  pushNotifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <SettingsItem
            theme="flat"
            label="Marketing Emails"
            description="Receive updates about new features"
          >
            <button
              onClick={() => setMarketingEmails(!marketingEmails)}
              className={`w-14 h-8 transition-colors ${
                marketingEmails ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white m-1 transition-transform ${
                  marketingEmails ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>
        </SettingsSection>
      )}

      {activeSection === 'privacy' && (
        <SettingsSection theme="flat" title="Privacy Settings">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-4">Profile Visibility</label>
            <div className="space-y-3">
              {['public', 'private', 'friends'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <button
                    type="button"
                    onClick={() => setProfileVisibility(option)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      profileVisibility === option
                        ? 'bg-blue-500'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-white transition-transform ${
                        profileVisibility === option ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </button>
                  <span className="text-sm text-gray-800 capitalize font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button className="px-6 py-3 bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors">
              Delete Account
            </button>
          </div>
        </SettingsSection>
      )}

      {activeSection === 'security' && (
        <SettingsSection theme="flat" title="Security Settings">
          <SettingsItem
            theme="flat"
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
          >
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`w-14 h-8 transition-colors ${
                twoFactor ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white m-1 transition-transform ${
                  twoFactor ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <div className="pt-4">
            <button className="px-6 py-3 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
              Change Password
            </button>
          </div>

          <div className="pt-4">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-300 transition-colors">
              View Login History
            </button>
          </div>
        </SettingsSection>
      )}
      </SettingsContent>
    </SettingsPage>
  );
}
