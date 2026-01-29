'use client';

import { useState } from 'react';

export default function ThreeDSwitch() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-black text-gray-800 mb-4 tracking-tight uppercase"
            style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.1), 6px 6px 0px rgba(0,0,0,0.05)',
            }}
          >
            3D Switches
          </h1>
          <p className="text-lg text-gray-600 font-medium tracking-wide">
            Dimensional depth and layered shadows
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Default
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                switches.default
                  ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                  : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}
              style={{
                boxShadow: switches.default
                  ? 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 8px 16px rgba(59,130,246,0.3)'
                  : 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <span
                className={`absolute top-1 w-8 h-8 rounded-full bg-white transition-all duration-300 ${
                  switches.default
                    ? 'left-11'
                    : 'left-1'
                }`}
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.5)',
                }}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Small
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                switches.small
                  ? 'bg-gradient-to-br from-purple-400 to-purple-600'
                  : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}
              style={{
                boxShadow: switches.small
                  ? 'inset 0 -2px 3px rgba(0,0,0,0.2), inset 0 2px 3px rgba(255,255,255,0.2), 0 6px 12px rgba(147,51,234,0.3)'
                  : 'inset 0 -2px 3px rgba(0,0,0,0.2), inset 0 2px 3px rgba(255,255,255,0.2), 0 3px 6px rgba(0,0,0,0.1)',
              }}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                  switches.small
                    ? 'left-7'
                    : 'left-0.5'
                }`}
                style={{
                  boxShadow: '0 3px 6px rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)',
                }}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Large
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-300 ${
                switches.large
                  ? 'bg-gradient-to-br from-green-400 to-green-600'
                  : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}
              style={{
                boxShadow: switches.large
                  ? 'inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.2), 0 12px 24px rgba(34,197,94,0.3)'
                  : 'inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.2), 0 6px 12px rgba(0,0,0,0.1)',
              }}
            >
              <span
                className={`absolute top-1 w-12 h-12 rounded-full bg-white transition-all duration-300 ${
                  switches.large
                    ? 'left-15'
                    : 'left-1'
                }`}
                style={{
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2), 0 12px 24px rgba(0,0,0,0.1), inset 0 -3px 6px rgba(0,0,0,0.1), inset 0 3px 6px rgba(255,255,255,0.5)',
                }}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                  switches.labeled
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600'
                    : 'bg-gradient-to-br from-gray-300 to-gray-400'
                }`}
                style={{
                  boxShadow: switches.labeled
                    ? 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 8px 16px rgba(249,115,22,0.3)'
                    : 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <span
                  className={`absolute top-1 w-8 h-8 rounded-full bg-white transition-all duration-300 ${
                    switches.labeled
                      ? 'left-11'
                      : 'left-1'
                  }`}
                  style={{
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.5)',
                  }}
                ></span>
              </button>
              <span
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                  switches.labeled ? 'text-orange-600' : 'text-gray-500'
                }`}
                style={{
                  textShadow: switches.labeled ? '1px 1px 2px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {switches.labeled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gray-100 rounded-xl p-8 opacity-50"
            style={{
              boxShadow: '0 5px 15px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.03)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase">
              Disabled
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 cursor-not-allowed"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.15)',
              }}
            >
              <span
                className="absolute top-1 left-11 w-8 h-8 rounded-full bg-gray-200"
                style={{
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1)',
                }}
              ></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="text-sm font-bold text-gray-700 mb-6 tracking-widest uppercase">
              Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-300 ${
                switches.icon
                  ? 'bg-gradient-to-br from-rose-400 to-rose-600'
                  : 'bg-gradient-to-br from-gray-300 to-gray-400'
              }`}
              style={{
                boxShadow: switches.icon
                  ? 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 8px 16px rgba(244,63,94,0.3)'
                  : 'inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-white' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-rose-200/50' : 'text-gray-700'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
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
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.5)',
                }}
              ></span>
            </button>
          </div>
        </div>

        {/* 3D Stats */}
        <div className="mt-16 bg-white rounded-xl p-8"
          style={{
            boxShadow: '0 15px 35px rgba(0,0,0,0.1), 0 25px 50px rgba(0,0,0,0.05)',
          }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(59,130,246,0.1)',
              }}
            >
              <div className="text-5xl font-black text-blue-600 mb-2"
                style={{
                  textShadow: '2px 2px 4px rgba(59,130,246,0.2)',
                }}
              >
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm font-bold text-blue-700 tracking-widest uppercase">
                Active
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div className="text-5xl font-black text-gray-500 mb-2"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm font-bold text-gray-600 tracking-widest uppercase">
                Inactive
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(147,51,234,0.1)',
              }}
            >
              <div className="text-5xl font-black text-purple-600 mb-2"
                style={{
                  textShadow: '2px 2px 4px rgba(147,51,234,0.2)',
                }}
              >
                6
              </div>
              <div className="text-sm font-bold text-purple-700 tracking-widest uppercase">
                Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
