'use client';

import { useState } from 'react';
import { Switch } from './Switch';

export default function SwitchExample() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Switch Component
          </h1>
          <p className="text-lg text-gray-600">
            A clean, accessible switch component
          </p>
        </div>

        <div className="space-y-12">
          {/* Basic Usage */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Basic Usage
            </h2>
            <div className="space-y-6">
              <Switch
                checked={notificationsEnabled}
                onChange={setNotificationsEnabled}
                label="Enable Notifications"
              />
              <Switch
                checked={darkModeEnabled}
                onChange={setDarkModeEnabled}
                label="Dark Mode"
              />
              <Switch
                checked={autoSaveEnabled}
                onChange={setAutoSaveEnabled}
                label="Auto Save"
              />
            </div>
          </section>

          {/* Sizes */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-8">
              <Switch
                defaultChecked
                size="sm"
                label="Small"
              />
              <Switch
                defaultChecked
                size="md"
                label="Medium"
              />
              <Switch
                defaultChecked
                size="lg"
                label="Large"
              />
            </div>
          </section>

          {/* Colors */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Colors
            </h2>
            <div className="space-y-6">
              <Switch
                defaultChecked
                color="primary"
                label="Primary"
              />
              <Switch
                defaultChecked
                color="success"
                label="Success"
              />
              <Switch
                defaultChecked
                color="warning"
                label="Warning"
              />
              <Switch
                defaultChecked
                color="error"
                label="Error"
              />
            </div>
          </section>

          {/* Label Placement */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Label Placement
            </h2>
            <div className="space-y-6">
              <Switch
                defaultChecked
                label="Label on the Right"
                labelPlacement="right"
              />
              <Switch
                defaultChecked
                label="Label on the Left"
                labelPlacement="left"
              />
            </div>
          </section>

          {/* Disabled State */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Disabled State
            </h2>
            <div className="space-y-6">
              <Switch
                checked={false}
                disabled
                label="Disabled (Off)"
              />
              <Switch
                checked
                disabled
                label="Disabled (On)"
              />
            </div>
          </section>

          {/* Without Label */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Without Label
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <Switch defaultChecked aria-label="Toggle feature" />
              <Switch defaultChecked color="success" aria-label="Toggle success" />
              <Switch defaultChecked color="warning" aria-label="Toggle warning" />
              <Switch defaultChecked color="error" aria-label="Toggle error" />
            </div>
          </section>

          {/* Form Integration */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Form Integration
            </h2>
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Receive Notifications
                </span>
                <Switch
                  checked={notificationsEnabled}
                  onChange={setNotificationsEnabled}
                  name="notifications"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Dark Mode
                </span>
                <Switch
                  checked={darkModeEnabled}
                  onChange={setDarkModeEnabled}
                  name="darkMode"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Auto Save
                </span>
                <Switch
                  checked={autoSaveEnabled}
                  onChange={setAutoSaveEnabled}
                  name="autoSave"
                />
              </div>
            </div>
          </section>

          {/* State Display */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Current State
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="text-sm text-gray-800">
                {JSON.stringify(
                  {
                    notifications: notificationsEnabled,
                    darkMode: darkModeEnabled,
                    autoSave: autoSaveEnabled,
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
