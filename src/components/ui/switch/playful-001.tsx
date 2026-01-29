'use client';

import { useState } from 'react';

export default function PlayfulSwitch() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-purple-600 mb-3 transform -rotate-2">
            Playful Switches
          </h1>
          <p className="text-lg text-purple-500 font-medium">
            Fun and bouncy toggle switches
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-300 transform hover:rotate-1 transition-transform">
            <h3 className="text-xl font-bold text-purple-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎨</span> Default Switch
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 ease-bounce transform hover:scale-105 active:scale-95 ${
                switches.default
                  ? 'bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg shadow-purple-300'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 ease-bounce flex items-center justify-center ${
                  switches.default ? 'left-11' : 'left-1'
                }`}
              >
                <span className="text-lg">
                  {switches.default ? '😊' : '😴'}
                </span>
              </span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-pink-300 transform hover:-rotate-1 transition-transform">
            <h3 className="text-xl font-bold text-pink-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span> Small Size
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ease-bounce transform hover:scale-110 active:scale-95 ${
                switches.small
                  ? 'bg-gradient-to-r from-yellow-400 to-pink-500 shadow-md shadow-pink-300'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-bounce flex items-center justify-center text-xs ${
                  switches.small ? 'left-7' : 'left-0.5'
                }`}
              >
                {switches.small ? '🌟' : '⭐'}
              </span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-300 transform hover:rotate-1 transition-transform">
            <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎪</span> Large Size
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-300 ease-bounce transform hover:scale-105 active:scale-95 ${
                switches.large
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-500 shadow-xl shadow-blue-300'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 ease-bounce flex items-center justify-center ${
                  switches.large ? 'left-15' : 'left-1'
                }`}
              >
                <span className="text-2xl">
                  {switches.large ? '🎉' : '🎈'}
                </span>
              </span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-300 transform hover:-rotate-1 transition-transform">
            <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">🏷️</span> With Label
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 ease-bounce transform hover:scale-105 active:scale-95 ${
                  switches.labeled
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-300'
                    : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 ease-bounce flex items-center justify-center ${
                    switches.labeled ? 'left-11' : 'left-1'
                  }`}
                >
                  <span className="text-lg">
                    {switches.labeled ? '✅' : '❌'}
                  </span>
                </span>
              </button>
              <span className="text-lg font-bold text-green-600">
                {switches.labeled ? 'Party Mode!' : 'Quiet Mode'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-gray-300 opacity-60">
            <h3 className="text-xl font-bold text-gray-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">🚫</span> Disabled State
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gray-200 cursor-not-allowed"
            >
              <span className="absolute top-1 left-11 w-8 h-8 bg-gray-400 rounded-full shadow-sm flex items-center justify-center">
                <span className="text-lg">😐</span>
              </span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-orange-300 transform hover:rotate-1 transition-transform">
            <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎭</span> With Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-300 ease-bounce transform hover:scale-105 active:scale-95 ${
                switches.icon
                  ? 'bg-gradient-to-r from-orange-400 to-red-500 shadow-lg shadow-orange-300'
                  : 'bg-gradient-to-r from-gray-400 to-gray-500'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <span className="text-xl">{switches.icon ? '🌞' : '🌙'}</span>
                <span className="text-xl opacity-40">
                  {switches.icon ? '🌙' : '🌞'}
                </span>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 bg-white rounded-full shadow-lg transition-all duration-300 ease-bounce flex items-center justify-center ${
                  switches.icon ? 'left-13' : 'left-1'
                }`}
              >
                <span className="text-2xl">
                  {switches.icon ? '☀️' : '🌜'}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg border-4 border-indigo-300">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
            🎮 Switch Stats
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-purple-600">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm font-bold text-purple-500">Active</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-orange-600">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm font-bold text-orange-500">Inactive</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-green-600">6</div>
              <div className="text-sm font-bold text-green-500">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
