'use client';

import { useState } from 'react';

export default function MaterialSwitch() {
  const [switches, setSwitches] = useState({
    default: true,
    small: false,
    large: true,
    labeled: false,
    disabled: true,
    icon: true,
  });

  type SwitchKey = keyof typeof switches;

  const toggleSwitch = (key: SwitchKey) => {
    if (key === 'disabled') return;
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-medium text-gray-900 mb-4 tracking-tight">
            Material Design
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 font-normal tracking-wide">
            Google Material Design switches with elevation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-700 mb-6 tracking-wide uppercase">
              Default
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-14 h-8 rounded-full transition-all duration-200 ${
                switches.default
                  ? 'bg-blue-200'
                  : 'bg-gray-400'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-200 ${
                  switches.default
                    ? 'left-7 bg-blue-600 shadow-md'
                    : 'left-1 bg-white shadow-md'
                }`}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-700 mb-6 tracking-wide uppercase">
              Small
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-10 h-6 rounded-full transition-all duration-200 ${
                switches.small
                  ? 'bg-purple-200'
                  : 'bg-gray-400'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-200 ${
                  switches.small
                    ? 'left-5 bg-purple-600 shadow-sm'
                    : 'left-0.5 bg-white shadow-sm'
                }`}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-700 mb-6 tracking-wide uppercase">
              Large
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-20 h-10 rounded-full transition-all duration-200 ${
                switches.large
                  ? 'bg-green-200'
                  : 'bg-gray-400'
              }`}
            >
              <span
                className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-200 ${
                  switches.large
                    ? 'left-11 bg-green-600 shadow-lg'
                    : 'left-1 bg-white shadow-lg'
                }`}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-700 mb-6 tracking-wide uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-14 h-8 rounded-full transition-all duration-200 ${
                  switches.labeled
                    ? 'bg-orange-200'
                    : 'bg-gray-400'
                }`}
              >
                <span
                  className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-200 ${
                    switches.labeled
                      ? 'left-7 bg-orange-600 shadow-md'
                      : 'left-1 bg-white shadow-md'
                  }`}
                ></span>
              </button>
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  switches.labeled ? 'text-orange-600' : 'text-gray-500'
                }`}
              >
                {switches.labeled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-white rounded-lg p-8 shadow-sm opacity-60">
            <h3 className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase">
              Disabled
            </h3>
            <button
              disabled
              className="relative w-14 h-8 rounded-full bg-gray-300 cursor-not-allowed"
            >
              <span className="absolute top-1 left-7 w-6 h-6 rounded-full bg-gray-400 shadow-sm"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-sm font-medium text-gray-700 mb-6 tracking-wide uppercase">
              Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-16 h-9 rounded-full transition-all duration-200 ${
                switches.icon
                  ? 'bg-red-200'
                  : 'bg-gray-400'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-2">
                <svg
                  className={`w-4 h-4 transition-colors duration-200 ${
                    switches.icon ? 'text-red-600' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-4 h-4 transition-colors duration-200 ${
                    switches.icon ? 'text-red-300' : 'text-white'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span
                className={`absolute top-1 w-7 h-7 rounded-full transition-all duration-200 ${
                  switches.icon
                    ? 'left-8 bg-red-600 shadow-md'
                    : 'left-1 bg-white shadow-md'
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Material Card Layout */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-lg font-medium text-gray-700 mb-6 tracking-wide uppercase">
            Settings Panel
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
              <div>
                <div className="text-base font-medium text-gray-900">Notifications</div>
                <div className="text-sm text-gray-500">Receive push notifications</div>
              </div>
              <button className="relative w-14 h-8 rounded-full bg-blue-200 transition-all duration-200">
                <span className="absolute top-1 left-7 w-6 h-6 rounded-full bg-blue-600 shadow-md"></span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
              <div>
                <div className="text-base font-medium text-gray-900">Auto-sync</div>
                <div className="text-sm text-gray-500">Sync data automatically</div>
              </div>
              <button className="relative w-14 h-8 rounded-full bg-gray-400 transition-all duration-200">
                <span className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
              <div>
                <div className="text-base font-medium text-gray-900">Location</div>
                <div className="text-sm text-gray-500">Share your location</div>
              </div>
              <button className="relative w-14 h-8 rounded-full bg-green-200 transition-all duration-200">
                <span className="absolute top-1 left-7 w-6 h-6 rounded-full bg-green-600 shadow-md"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Material Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="text-5xl font-medium text-blue-600 mb-2">
              {Object.values(switches).filter((v) => v).length}
            </div>
            <div className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Active
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="text-5xl font-medium text-gray-500 mb-2">
              {Object.values(switches).filter((v) => !v).length}
            </div>
            <div className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Inactive
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="text-5xl font-medium text-purple-600 mb-2">
              6
            </div>
            <div className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
