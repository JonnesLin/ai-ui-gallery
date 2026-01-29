'use client';

import { useState } from 'react';

export default function NatureSwitch() {
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
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-green-100 to-emerald-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-3">
            Nature Switches
          </h1>
          <p className="text-lg text-green-700">
            Organic and earthy toggle controls
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              Default Switch
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
                switches.default
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-300'
                  : 'bg-gradient-to-r from-stone-400 to-stone-500'
              }`}
            >
              <span
                className={`absolute top-1 w-8 h-8 rounded-full shadow-lg transition-all duration-500 ${
                  switches.default
                    ? 'left-11 bg-gradient-to-br from-lime-200 to-green-300'
                    : 'left-1 bg-gradient-to-br from-stone-200 to-stone-300'
                }`}
              >
                {switches.default && (
                  <span className="absolute inset-0 flex items-center justify-center text-green-700 text-xs">
                    🌿
                  </span>
                )}
              </span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Small Size
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-500 ${
                switches.small
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 shadow-md shadow-amber-300'
                  : 'bg-gradient-to-r from-stone-400 to-stone-500'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-500 ${
                  switches.small
                    ? 'left-7 bg-gradient-to-br from-yellow-200 to-amber-300'
                    : 'left-0.5 bg-gradient-to-br from-stone-200 to-stone-300'
                }`}
              >
                {switches.small && (
                  <span className="absolute inset-0 flex items-center justify-center text-amber-700 text-[10px]">
                    🌾
                  </span>
                )}
              </span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>
              Large Size
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-500 ${
                switches.large
                  ? 'bg-gradient-to-r from-blue-500 to-sky-600 shadow-xl shadow-blue-300'
                  : 'bg-gradient-to-r from-stone-400 to-stone-500'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full shadow-xl transition-all duration-500 ${
                  switches.large
                    ? 'left-15 bg-gradient-to-br from-sky-200 to-blue-300'
                    : 'left-1 bg-gradient-to-br from-stone-200 to-stone-300'
                }`}
              >
                {switches.large && (
                  <span className="absolute inset-0 flex items-center justify-center text-blue-700 text-xl">
                    💧
                  </span>
                )}
              </span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-teal-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              With Label
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-500 ${
                  switches.labeled
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg shadow-teal-300'
                    : 'bg-gradient-to-r from-stone-400 to-stone-500'
                }`}
              >
                <span
                  className={`absolute top-1 w-8 h-8 rounded-full shadow-lg transition-all duration-500 ${
                    switches.labeled
                      ? 'left-11 bg-gradient-to-br from-cyan-200 to-teal-300'
                      : 'left-1 bg-gradient-to-br from-stone-200 to-stone-300'
                  }`}
                >
                  {switches.labeled && (
                    <span className="absolute inset-0 flex items-center justify-center text-teal-700 text-xs">
                      🌊
                    </span>
                  )}
                </span>
              </button>
              <span
                className={`text-sm font-medium transition-colors duration-500 ${
                  switches.labeled ? 'text-teal-700' : 'text-stone-600'
                }`}
              >
                {switches.labeled ? 'Growing' : 'Dormant'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-stone-200 opacity-50">
            <h3 className="text-lg font-semibold text-stone-600 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-stone-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
              Disabled State
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gradient-to-r from-stone-300 to-stone-400 cursor-not-allowed"
            >
              <span className="absolute top-1 left-11 w-8 h-8 rounded-full shadow-lg bg-gradient-to-br from-stone-100 to-stone-200"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-rose-200">
            <h3 className="text-lg font-semibold text-rose-800 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-rose-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              With Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-500 ${
                switches.icon
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg shadow-rose-300'
                  : 'bg-gradient-to-r from-stone-400 to-stone-500'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <span className="text-lg">
                  {switches.icon ? '🌸' : '🌑'}
                </span>
                <span className="text-lg opacity-30">
                  {switches.icon ? '🌑' : '🌸'}
                </span>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 rounded-full shadow-lg transition-all duration-500 ${
                  switches.icon
                    ? 'left-13 bg-gradient-to-br from-pink-200 to-rose-300'
                    : 'left-1 bg-gradient-to-br from-stone-200 to-stone-300'
                }`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-lg">
                  {switches.icon ? '🌺' : '🍂'}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Nature Stats */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Ecosystem Status
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm text-green-600 font-medium">
                Blooming
              </div>
            </div>
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-stone-700 mb-1">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm text-stone-600 font-medium">Resting</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">6</div>
              <div className="text-sm text-blue-600 font-medium">
                Total Plants
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
