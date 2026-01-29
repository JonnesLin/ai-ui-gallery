'use client';

import { useState } from 'react';

export default function LuxurySwitch() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-light text-amber-400 mb-4 tracking-widest uppercase">
            Luxury Switches
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-amber-200/60 font-light tracking-wide">
            Sophisticated elegance in motion
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 shadow-2xl">
            <h3 className="text-sm font-light text-amber-400 mb-6 tracking-widest uppercase">
              Signature
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
                switches.default
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/50'
                  : 'bg-gradient-to-r from-gray-700 to-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 w-8 h-8 rounded-full shadow-lg transition-all duration-500 ${
                  switches.default
                    ? 'left-11 bg-gradient-to-br from-amber-300 to-amber-100'
                    : 'left-1 bg-gradient-to-br from-gray-300 to-gray-100'
                }`}
              >
                <span className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-gray-100"></span>
              </span>
              <span
                className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                  switches.default
                    ? 'border-amber-400/30'
                    : 'border-gray-500/30'
                }`}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 shadow-2xl">
            <h3 className="text-sm font-light text-amber-400 mb-6 tracking-widest uppercase">
              Petite
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-500 ${
                switches.small
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-md shadow-amber-500/50'
                  : 'bg-gradient-to-r from-gray-700 to-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-500 ${
                  switches.small
                    ? 'left-7 bg-gradient-to-br from-amber-300 to-amber-100'
                    : 'left-0.5 bg-gradient-to-br from-gray-300 to-gray-100'
                }`}
              >
                <span className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-gray-100"></span>
              </span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 shadow-2xl">
            <h3 className="text-sm font-light text-amber-400 mb-6 tracking-widest uppercase">
              Grand
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-500 ${
                switches.large
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-xl shadow-amber-500/50'
                  : 'bg-gradient-to-r from-gray-700 to-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full shadow-xl transition-all duration-500 ${
                  switches.large
                    ? 'left-15 bg-gradient-to-br from-amber-300 to-amber-100'
                    : 'left-1 bg-gradient-to-br from-gray-300 to-gray-100'
                }`}
              >
                <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-gray-100"></span>
                <span
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                    switches.large
                      ? 'border-amber-200/50'
                      : 'border-gray-400/30'
                  }`}
                ></span>
              </span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 shadow-2xl">
            <h3 className="text-sm font-light text-amber-400 mb-6 tracking-widest uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
                  switches.labeled
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/50'
                    : 'bg-gradient-to-r from-gray-700 to-gray-600'
                }`}
              >
                <span
                  className={`absolute top-1 w-8 h-8 rounded-full shadow-lg transition-all duration-500 ${
                    switches.labeled
                      ? 'left-11 bg-gradient-to-br from-amber-300 to-amber-100'
                      : 'left-1 bg-gradient-to-br from-gray-300 to-gray-100'
                  }`}
                >
                  <span className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-gray-100"></span>
                </span>
              </button>
              <span
                className={`text-sm font-light tracking-wide transition-colors duration-500 ${
                  switches.labeled ? 'text-amber-400' : 'text-gray-500'
                }`}
              >
                {switches.labeled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-800/20 shadow-2xl opacity-40">
            <h3 className="text-sm font-light text-gray-500 mb-6 tracking-widest uppercase">
              Inactive
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 cursor-not-allowed"
            >
              <span className="absolute top-1 left-11 w-8 h-8 rounded-full shadow-lg bg-gradient-to-br from-gray-600 to-gray-500"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 shadow-2xl">
            <h3 className="text-sm font-light text-amber-400 mb-6 tracking-widest uppercase">
              Premium
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-500 ${
                switches.icon
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/50'
                  : 'bg-gradient-to-r from-gray-700 to-gray-600'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-all duration-500 ${
                    switches.icon ? 'text-amber-200' : 'text-gray-400'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <svg
                  className={`w-5 h-5 transition-all duration-500 ${
                    switches.icon ? 'text-amber-400/30' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 rounded-full shadow-xl transition-all duration-500 ${
                  switches.icon
                    ? 'left-13 bg-gradient-to-br from-amber-300 to-amber-100'
                    : 'left-1 bg-gradient-to-br from-gray-300 to-gray-100'
                }`}
              >
                <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-gray-100"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Luxury Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg px-8 py-6 border border-amber-900/20 shadow-2xl">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-amber-400 mb-1">
                  {Object.values(switches).filter((v) => v).length}
                </div>
                <div className="text-xs font-light text-amber-200/60 tracking-widest uppercase">
                  Active
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-900/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-400 mb-1">
                  {Object.values(switches).filter((v) => !v).length}
                </div>
                <div className="text-xs font-light text-gray-500 tracking-widest uppercase">
                  Inactive
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-900/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-amber-400/60 mb-1">
                  6
                </div>
                <div className="text-xs font-light text-amber-200/40 tracking-widest uppercase">
                  Total
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
