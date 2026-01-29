'use client';

import { useState } from 'react';

export default function FlatSwitch() {
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
          <h1 className="text-6xl font-bold text-gray-900 mb-4 tracking-tight uppercase">
            Flat Design
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 font-medium tracking-wide">
            Clean, simple, no shadows
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-white p-8">
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Default
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                switches.default
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-8 h-8 rounded-full bg-white transition-all duration-300 ${
                  switches.default
                    ? 'left-11'
                    : 'left-1'
                }`}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white p-8">
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Small
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                switches.small
                  ? 'bg-purple-500'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                  switches.small
                    ? 'left-7'
                    : 'left-0.5'
                }`}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-white p-8">
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Large
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-300 ${
                switches.large
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full bg-white transition-all duration-300 ${
                  switches.large
                    ? 'left-15'
                    : 'left-1'
                }`}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-white p-8">
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                  switches.labeled
                    ? 'bg-orange-500'
                    : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-8 h-8 rounded-full bg-white transition-all duration-300 ${
                    switches.labeled
                      ? 'left-11'
                      : 'left-1'
                  }`}
                ></span>
              </button>
              <span
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                  switches.labeled ? 'text-orange-500' : 'text-gray-500'
                }`}
              >
                {switches.labeled ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gray-100 p-8 opacity-50">
            <h3 className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase">
              Disabled
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gray-300 cursor-not-allowed"
            >
              <span className="absolute top-1 left-11 w-8 h-8 rounded-full bg-gray-200"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white p-8">
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-300 ${
                switches.icon
                  ? 'bg-red-500'
                  : 'bg-gray-300'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-white' : 'text-gray-600'
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
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-red-300' : 'text-gray-700'
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
                className={`absolute top-1 w-10 h-10 rounded-full bg-white transition-all duration-300 ${
                  switches.icon
                    ? 'left-13'
                    : 'left-1'
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Color Variations */}
        <div className="mt-12 bg-white p-8">
          <h3 className="text-lg font-bold text-gray-700 mb-6 tracking-widest uppercase">
            Color Palette
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="relative w-16 h-8 rounded-full bg-blue-500 transition-all duration-300 hover:bg-blue-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-purple-500 transition-all duration-300 hover:bg-purple-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-green-500 transition-all duration-300 hover:bg-green-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-orange-500 transition-all duration-300 hover:bg-orange-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-red-500 transition-all duration-300 hover:bg-red-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-pink-500 transition-all duration-300 hover:bg-pink-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-indigo-500 transition-all duration-300 hover:bg-indigo-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
            <button className="relative w-16 h-8 rounded-full bg-teal-500 transition-all duration-300 hover:bg-teal-600">
              <span className="absolute top-0.5 right-0.5 w-7 h-7 rounded-full bg-white"></span>
            </button>
          </div>
        </div>

        {/* Flat Stats */}
        <div className="mt-12 bg-white p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-blue-500">
              <div className="text-5xl font-bold text-white mb-2">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm font-bold text-blue-100 tracking-widest uppercase">
                Active
              </div>
            </div>
            <div className="p-6 bg-gray-300">
              <div className="text-5xl font-bold text-gray-700 mb-2">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm font-bold text-gray-600 tracking-widest uppercase">
                Inactive
              </div>
            </div>
            <div className="p-6 bg-purple-500">
              <div className="text-5xl font-bold text-white mb-2">
                6
              </div>
              <div className="text-sm font-bold text-purple-100 tracking-widest uppercase">
                Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
