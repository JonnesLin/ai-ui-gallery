'use client';

import { useState } from 'react';

export default function MonochromeSwitch() {
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
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center border-b-4 border-black pb-8">
          <h1 className="text-6xl font-black text-black mb-2 tracking-tighter uppercase">
            Monochrome
          </h1>
          <p className="text-lg text-gray-600 font-mono">
            Pure black and white toggle controls
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div className="bg-gray-50 border-4 border-black p-8">
            <h3 className="text-sm font-black text-black mb-6 tracking-widest uppercase">
              Default
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 border-4 border-black transition-all duration-300 ${
                switches.default
                  ? 'bg-black'
                  : 'bg-white'
              }`}
            >
              <span
                className={`absolute top-0.5 w-8 h-8 border-4 border-black transition-all duration-300 ${
                  switches.default
                    ? 'left-11 bg-white'
                    : 'left-0.5 bg-black'
                }`}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div className="bg-white border-4 border-black p-8">
            <h3 className="text-sm font-black text-black mb-6 tracking-widest uppercase">
              Small
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 border-3 border-black transition-all duration-300 ${
                switches.small
                  ? 'bg-black'
                  : 'bg-white'
              }`}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 border-3 border-black transition-all duration-300 ${
                  switches.small
                    ? 'left-7 bg-white'
                    : 'left-0.5 bg-black'
                }`}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div className="bg-black p-8">
            <h3 className="text-sm font-black text-white mb-6 tracking-widest uppercase">
              Large
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 border-4 border-white transition-all duration-300 ${
                switches.large
                  ? 'bg-white'
                  : 'bg-black'
              }`}
            >
              <span
                className={`absolute top-1 w-12 h-12 border-4 border-white transition-all duration-300 ${
                  switches.large
                    ? 'left-15 bg-black'
                    : 'left-1 bg-white'
                }`}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div className="bg-gray-100 border-4 border-black p-8">
            <h3 className="text-sm font-black text-black mb-6 tracking-widest uppercase">
              Labeled
            </h3>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 border-4 border-black transition-all duration-300 ${
                  switches.labeled
                    ? 'bg-black'
                    : 'bg-white'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-8 h-8 border-4 border-black transition-all duration-300 ${
                    switches.labeled
                      ? 'left-11 bg-white'
                      : 'left-0.5 bg-black'
                  }`}
                ></span>
              </button>
              <span
                className={`text-base font-black tracking-wide uppercase ${
                  switches.labeled ? 'text-black' : 'text-gray-500'
                }`}
              >
                {switches.labeled ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div className="bg-gray-200 border-4 border-gray-400 p-8 opacity-40">
            <h3 className="text-sm font-black text-gray-600 mb-6 tracking-widest uppercase">
              Disabled
            </h3>
            <button
              disabled
              className="relative w-20 h-10 border-4 border-gray-500 bg-gray-500 cursor-not-allowed"
            >
              <span className="absolute top-0.5 left-11 w-8 h-8 border-4 border-gray-500 bg-gray-300"></span>
            </button>
          </div>

          {/* With Icons */}
          <div className="bg-white border-4 border-black p-8">
            <h3 className="text-sm font-black text-black mb-6 tracking-widest uppercase">
              Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 border-4 border-black transition-all duration-300 ${
                switches.icon
                  ? 'bg-black'
                  : 'bg-white'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-between px-2">
                <svg
                  className={`w-6 h-6 transition-colors duration-300 ${
                    switches.icon ? 'text-white' : 'text-black'
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
                  className={`w-6 h-6 transition-colors duration-300 ${
                    switches.icon ? 'text-gray-700' : 'text-black'
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
                className={`absolute top-1 w-10 h-10 border-4 border-black transition-all duration-300 ${
                  switches.icon
                    ? 'left-13 bg-white'
                    : 'left-1 bg-black'
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Monochrome Stats */}
        <div className="mt-16 border-8 border-black bg-white p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-black mb-2">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm font-black text-black tracking-widest uppercase">
                Active
              </div>
            </div>
            <div className="border-x-4 border-black">
              <div className="text-5xl font-black text-gray-400 mb-2">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm font-black text-gray-400 tracking-widest uppercase">
                Inactive
              </div>
            </div>
            <div>
              <div className="text-5xl font-black text-black mb-2">
                6
              </div>
              <div className="text-sm font-black text-black tracking-widest uppercase">
                Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
