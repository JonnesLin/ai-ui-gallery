'use client';

import { useState } from 'react';
import { SettingsPage, SettingsNav, SettingsContent, SettingsSection, SettingsItem } from './index';

export default function MaterialSettingsPage() {
  const [activeSection, setActiveSection] = useState('account');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');

  const sections = [
    { id: 'account', title: 'Account', icon: '👤' },
    { id: 'notifications', title: 'Notifications', icon: '🔔' },
    { id: 'privacy', title: 'Privacy', icon: '🔒' },
    { id: 'security', title: 'Security', icon: '🛡️' },
  ];

  return (
    <SettingsPage theme="material">
      <SettingsNav
        theme="material"
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <SettingsContent theme="material">
      {activeSection === 'account' && (
        <SettingsSection
          theme="material"
          title="Account Information"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              defaultValue="@johndoe"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors bg-transparent text-gray-900 resize-none"
              defaultValue="Product designer and developer based in San Francisco"
            />
          </div>

          <div className="flex gap-4 pt-8 border-t">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Save Changes
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors border border-gray-300">
              Cancel
            </button>
          </div>
        </SettingsSection>
      )}

      {activeSection === 'notifications' && (
        <SettingsSection
          theme="material"
          title="Notifications"
          description="Choose how you want to be notified"
        >
          <SettingsItem
            theme="material"
            label="Email Notifications"
            description="Receive notifications and updates via email"
          >
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`relative w-14 h-8 rounded-full transition-all shadow-md ${
                emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                  emailNotifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <SettingsItem
            theme="material"
            label="Push Notifications"
            description="Receive push notifications on your devices"
          >
            <button
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`relative w-14 h-8 rounded-full transition-all shadow-md ${
                pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                  pushNotifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <SettingsItem
            theme="material"
            label="Marketing Emails"
            description="Receive emails about new products and features"
          >
            <button className="relative w-14 h-8 rounded-full bg-gray-300 shadow-md">
              <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg" />
            </button>
          </SettingsItem>
        </SettingsSection>
      )}

      {activeSection === 'privacy' && (
        <SettingsSection
          theme="material"
          title="Privacy"
          description="Control who can see your information"
        >
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Visibility</h3>
            <div className="space-y-3">
              {[
                { value: 'public', label: 'Public', desc: 'Anyone can see your profile' },
                { value: 'private', label: 'Private', desc: 'Only you can see your profile' },
                { value: 'friends', label: 'Friends Only', desc: 'Only friends can see your profile' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-start gap-4 p-5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border-2 border-transparent has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50"
                >
                  <input
                    type="radio"
                    name="privacy"
                    value={option.value}
                    checked={profileVisibility === option.value}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                    className="w-5 h-5 mt-0.5 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Data & Privacy</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Download your data
            </button>
          </div>
        </SettingsSection>
      )}

      {activeSection === 'security' && (
        <SettingsSection
          theme="material"
          title="Security"
          description="Keep your account secure"
        >
          <SettingsItem
            theme="material"
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
          >
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`relative w-14 h-8 rounded-full transition-all shadow-md ${
                twoFactor ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                  twoFactor ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </SettingsItem>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-base font-medium text-gray-900 mb-3">Password</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Change Password
            </button>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="text-base font-medium text-gray-900 mb-3">Sessions</h3>
            <p className="text-sm text-gray-600 mb-3">Manage your active sessions</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Active Sessions
            </button>
          </div>
        </SettingsSection>
      )}
      </SettingsContent>
    </SettingsPage>
  );
}
