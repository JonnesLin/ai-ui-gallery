'use client';

import { useState } from 'react';

export default function NeonSwitch() {
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
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-black text-cyan-400 mb-4 tracking-wider uppercase"
            style={{
              textShadow: '0 0 10px rgb(34 211 238), 0 0 20px rgb(34 211 238), 0 0 30px rgb(34 211 238)',
            }}
          >
            Neon Switches
          </h1>
          <div className="w-32 h-1 bg-cyan-400 mx-auto mb-4"
            style={{
              boxShadow: '0 0 10px rgb(34 211 238), 0 0 20px rgb(34 211 238)',
            }}
          ></div>
          <p className="text-lg text-cyan-300/80 font-light tracking-wide">
            Glowing electric toggle controls
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-gray-900 rounded-lg p-8 border border-cyan-500/30"
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
            }}
          >
            <h3 className="text-sm font-bold text-cyan-400 mb-6 tracking-widest uppercase">
              Default
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full border-2 transition-all duration-300 ${
                switches.default
                  ? 'bg-cyan-500/20 border-cyan-400'
                  : 'bg-gray-800 border-gray-600'
              }`}
              style={switches.default ? {
                boxShadow: '0 0 15px rgb(34 211 238), inset 0 0 15px rgb(34 211 238)',
              } : {}}
            >
              <span
                className={`absolute top-0.5 w-8 h-8 rounded-full transition-all duration-300 ${
                  switches.default
                    ? 'left-11 bg-cyan-400'
                    : 'left-0.5 bg-gray-600'
                }`}
                style={switches.default ? {
                  boxShadow: '0 0 20px rgb(34 211 238), 0 0 40px rgb(34 211 238)',
                } : {}}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-gray-900 rounded-lg p-8 border border-pink-500/30"
            style={{
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.1)',
            }}
          >
            <h3 className="text-sm font-bold text-pink-400 mb-6 tracking-widest uppercase">
              Small
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full border-2 transition-all duration-300 ${
                switches.small
                  ? 'bg-pink-500/20 border-pink-400'
                  : 'bg-gray-800 border-gray-600'
              }`}
              style={switches.small ? {
                boxShadow: '0 0 15px rgb(236 72 153), inset 0 0 15px rgb(236 72 153)',
              } : {}}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${
                  switches.small
                    ? 'left-7 bg-pink-400'
                    : 'left-0.5 bg-gray-600'
                }`}
                style={switches.small ? {
                  boxShadow: '0 0 15px rgb(236 72 153), 0 0 30px rgb(236 72 153)',
                } : {}}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/30"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)',
            }}
          >
            <h3 className="text-sm font-bold text-purple-400 mb-6 tracking-widest uppercase">
              Large
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full border-2 transition-all duration-300 ${
                switches.large
                  ? 'bg-purple-500/20 border-purple-400'
                  : 'bg-gray-800 border-gray-600'
              }`}
              style={switches.large ? {
                boxShadow: '0 0 20px rgb(168 85 247), inset 0 0 20px rgb(168 85 247)',
              } : {}}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full transition-all duration-300 ${
                  switches.large
                    ? 'left-15 bg-purple-400'
                    : 'left-1 bg-gray-600'
                }`}
                style={switches.large ? {
                  boxShadow: '0 0 25px rgb(168 85 247), 0 0 50px rgb(168 85 247)',
                } : {}}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-gray-900 rounded-lg p-8 border border-green-500/30"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)',
            }}
          >
            <h3 className="text-sm font-bold text-green-400 mb-6 tracking-widest uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full border-2 transition-all duration-300 ${
                  switches.labeled
                    ? 'bg-green-500/20 border-green-400'
                    : 'bg-gray-800 border-gray-600'
                }`}
                style={switches.labeled ? {
                  boxShadow: '0 0 15px rgb(34 197 94), inset 0 0 15px rgb(34 197 94)',
                } : {}}
              >
                <span
                  className={`absolute top-0.5 w-8 h-8 rounded-full transition-all duration-300 ${
                    switches.labeled
                      ? 'left-11 bg-green-400'
                      : 'left-0.5 bg-gray-600'
                  }`}
                  style={switches.labeled ? {
                    boxShadow: '0 0 20px rgb(34 197 94), 0 0 40px rgb(34 197 94)',
                  } : {}}
                ></span>
              </button>
              <span
                className={`text-sm font-bold tracking-wide transition-all duration-300 ${
                  switches.labeled ? 'text-green-400' : 'text-gray-500'
                }`}
                style={switches.labeled ? {
                  textShadow: '0 0 10px rgb(34 197 94)',
                } : {}}
              >
                {switches.labeled ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700/30 opacity-40">
            <h3 className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase">
              Disabled
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gray-800 border-2 border-gray-700 cursor-not-allowed"
            >
              <span className="absolute top-0.5 left-11 w-8 h-8 rounded-full bg-gray-600"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-gray-900 rounded-lg p-8 border border-orange-500/30"
            style={{
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.1)',
            }}
          >
            <h3 className="text-sm font-bold text-orange-400 mb-6 tracking-widest uppercase">
              Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full border-2 transition-all duration-300 ${
                switches.icon
                  ? 'bg-orange-500/20 border-orange-400'
                  : 'bg-gray-800 border-gray-600'
              }`}
              style={switches.icon ? {
                boxShadow: '0 0 15px rgb(249 115 22), inset 0 0 15px rgb(249 115 22)',
              } : {}}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    switches.icon ? 'text-orange-400' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={switches.icon ? {
                    filter: 'drop-shadow(0 0 8px rgb(249 115 22))',
                  } : {}}
                >
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    switches.icon ? 'text-orange-400/30' : 'text-gray-500'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 rounded-full transition-all duration-300 ${
                  switches.icon
                    ? 'left-13 bg-orange-400'
                    : 'left-1 bg-gray-600'
                }`}
                style={switches.icon ? {
                  boxShadow: '0 0 20px rgb(249 115 22), 0 0 40px rgb(249 115 22)',
                } : {}}
              ></span>
            </button>
          </div>
        </div>

        {/* Neon Stats */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-cyan-500/30"
          style={{
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)',
          }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2"
                style={{
                  textShadow: '0 0 15px rgb(34 211 238), 0 0 30px rgb(34 211 238)',
                }}
              >
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm font-bold text-cyan-300 tracking-widest uppercase">
                Glowing
              </div>
            </div>
            <div className="border-x border-cyan-500/30">
              <div className="text-5xl font-black text-gray-500 mb-2">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                Dark
              </div>
            </div>
            <div>
              <div className="text-5xl font-black text-pink-400 mb-2"
                style={{
                  textShadow: '0 0 15px rgb(236 72 153), 0 0 30px rgb(236 72 153)',
                }}
              >
                6
              </div>
              <div className="text-sm font-bold text-pink-300 tracking-widest uppercase">
                Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
