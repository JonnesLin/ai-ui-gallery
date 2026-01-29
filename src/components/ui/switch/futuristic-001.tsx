'use client';

import { useState } from 'react';

export default function FuturisticSwitch() {
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
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
            FUTURISTIC SWITCHES
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-cyan-400 font-mono">
            {'>'} NEXT-GEN TOGGLE INTERFACE
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-cyan-400 mb-6 uppercase tracking-wider">
              [001] STANDARD_TOGGLE
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 border ${
                switches.default
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800 border-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 w-9 h-9 rounded-full shadow-lg transition-all duration-300 border-2 ${
                  switches.default
                    ? 'left-10 bg-gradient-to-br from-cyan-300 to-blue-400 border-cyan-200'
                    : 'left-0.5 bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500'
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full ${
                    switches.default ? 'animate-pulse bg-cyan-400/20' : ''
                  }`}
                ></span>
              </span>
              {switches.default && (
                <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30"></span>
              )}
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-lg p-8 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-purple-400 mb-6 uppercase tracking-wider">
              [002] COMPACT_MODE
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 border ${
                switches.small
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 shadow-md shadow-purple-500/50'
                  : 'bg-gray-800 border-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 border ${
                  switches.small
                    ? 'left-7 bg-gradient-to-br from-purple-300 to-pink-400 border-purple-200'
                    : 'left-0.5 bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500'
                }`}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-lg p-8 shadow-2xl shadow-blue-500/20 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-blue-400 mb-6 uppercase tracking-wider">
              [003] EXPANDED_INTERFACE
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-300 border-2 ${
                switches.large
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-400 shadow-xl shadow-blue-500/50'
                  : 'bg-gray-800 border-gray-600'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full shadow-xl transition-all duration-300 border-2 ${
                  switches.large
                    ? 'left-15 bg-gradient-to-br from-blue-300 to-cyan-400 border-blue-200'
                    : 'left-1 bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500'
                }`}
              >
                <span
                  className={`absolute inset-2 rounded-full border ${
                    switches.large
                      ? 'border-blue-200/50 bg-blue-300/30'
                      : 'border-gray-500/50'
                  }`}
                ></span>
              </span>
              {switches.large && (
                <>
                  <span className="absolute inset-0 rounded-full animate-ping bg-blue-400/20"></span>
                  <span className="absolute inset-0 rounded-full animate-pulse bg-blue-400/10"></span>
                </>
              )}
            </button>
          </div>

          {/* With Label */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-lg p-8 shadow-2xl shadow-green-500/20 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-green-400 mb-6 uppercase tracking-wider">
              [004] LABELED_SYSTEM
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 border ${
                  switches.labeled
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 border-green-400 shadow-lg shadow-green-500/50'
                    : 'bg-gray-800 border-gray-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-9 h-9 rounded-full shadow-lg transition-all duration-300 border-2 ${
                    switches.labeled
                      ? 'left-10 bg-gradient-to-br from-green-300 to-emerald-400 border-green-200'
                      : 'left-0.5 bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500'
                  }`}
                ></span>
              </button>
              <span
                className={`text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                  switches.labeled ? 'text-green-400' : 'text-gray-500'
                }`}
              >
                {switches.labeled ? '[ONLINE]' : '[OFFLINE]'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/30 rounded-lg p-8 shadow-2xl opacity-40">
            <h3 className="text-sm font-mono text-gray-600 mb-6 uppercase tracking-wider">
              [005] DISABLED_STATE
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gray-900 border border-gray-800 cursor-not-allowed"
            >
              <span className="absolute top-0.5 left-10 w-9 h-9 rounded-full shadow-lg bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-700"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-lg p-8 shadow-2xl shadow-orange-500/20 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-orange-400 mb-6 uppercase tracking-wider">
              [006] ICON_ENHANCED
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-300 border-2 ${
                switches.icon
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 border-orange-400 shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800 border-gray-600'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    switches.icon ? 'text-orange-200' : 'text-gray-600'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    switches.icon ? 'text-orange-400/30' : 'text-gray-400'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 rounded-full shadow-xl transition-all duration-300 border-2 ${
                  switches.icon
                    ? 'left-13 bg-gradient-to-br from-orange-300 to-red-400 border-orange-200'
                    : 'left-1 bg-gradient-to-br from-gray-600 to-gray-700 border-gray-500'
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full ${
                    switches.icon ? 'animate-pulse bg-orange-400/20' : ''
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>

        {/* System Monitor */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
          <h3 className="text-xl font-mono text-cyan-400 mb-6 uppercase tracking-wider text-center">
            [SYSTEM_MONITOR]
          </h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-xs font-mono text-cyan-400/60 uppercase tracking-wider">
                ACTIVE_NODES
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-xs font-mono text-purple-400/60 uppercase tracking-wider">
                STANDBY_MODE
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
                6
              </div>
              <div className="text-xs font-mono text-green-400/60 uppercase tracking-wider">
                TOTAL_SYSTEMS
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
