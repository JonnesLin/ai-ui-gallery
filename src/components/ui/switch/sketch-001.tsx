'use client';

import { useState } from 'react';

export default function SketchSwitch() {
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
    <div className="min-h-screen bg-amber-50 p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhNzhmNWYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDBoLTJ2Mmgydi0yem0tNCAwdi0yaDJ2MmgtMnptLTQgMGgtMnYyaDJ2LTJ6bS00IDBoLTJ2Mmgydi0yem0tNCAwdi0yaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1
            className="text-5xl font-bold text-gray-800 mb-3 relative inline-block"
            style={{
              filter: 'url(#sketch)',
            }}
          >
            Sketch Switches
            <svg width="0" height="0">
              <filter id="sketch">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="2"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>
          </h1>
          <div className="relative mx-auto w-48 h-0.5 bg-gray-800 transform -rotate-1"></div>
          <p className="text-lg text-gray-600 mt-3 italic">
            Hand-drawn toggle controls
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Switch */}
          <div
            className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform rotate-1"
            style={{
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 transform -rotate-1">
              Default Switch
            </h3>
            <button
              onClick={() => toggleSwitch('default')}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 border-3 transform hover:scale-105 ${
                switches.default
                  ? 'bg-blue-100 border-blue-800'
                  : 'bg-gray-100 border-gray-800'
              }`}
              style={{
                borderRadius: '50px 45px 48px 52px/45px 52px 50px 48px',
                borderWidth: '3px',
                borderStyle: 'solid',
              }}
            >
              <span
                className={`absolute top-0.5 w-8 h-8 shadow-md transition-all duration-300 border-3 ${
                  switches.default
                    ? 'left-11 bg-blue-600 border-blue-900'
                    : 'left-1 bg-gray-400 border-gray-800'
                }`}
                style={{
                  borderRadius: '50% 45% 48% 52%/45% 52% 50% 48%',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                }}
              ></span>
            </button>
          </div>

          {/* Small Size */}
          <div
            className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform -rotate-1"
            style={{
              borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 transform rotate-1">
              Small Size
            </h3>
            <button
              onClick={() => toggleSwitch('small')}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 border-2 transform hover:scale-110 ${
                switches.small
                  ? 'bg-purple-100 border-purple-800'
                  : 'bg-gray-100 border-gray-800'
              }`}
              style={{
                borderRadius: '35px 32px 36px 33px/32px 36px 33px 35px',
                borderStyle: 'solid',
              }}
            >
              <span
                className={`absolute top-0.5 w-6 h-6 shadow-sm transition-all duration-300 border-2 ${
                  switches.small
                    ? 'left-7 bg-purple-600 border-purple-900'
                    : 'left-0.5 bg-gray-400 border-gray-800'
                }`}
                style={{
                  borderRadius: '50% 45% 48% 52%',
                  borderStyle: 'solid',
                }}
              ></span>
            </button>
          </div>

          {/* Large Size */}
          <div
            className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform rotate-0.5"
            style={{
              borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 transform -rotate-0.5">
              Large Size
            </h3>
            <button
              onClick={() => toggleSwitch('large')}
              className={`relative w-28 h-14 rounded-full transition-all duration-300 border-4 transform hover:scale-105 ${
                switches.large
                  ? 'bg-green-100 border-green-800'
                  : 'bg-gray-100 border-gray-800'
              }`}
              style={{
                borderRadius: '70px 65px 68px 72px/65px 72px 70px 68px',
                borderStyle: 'solid',
              }}
            >
              <span
                className={`absolute top-1 w-12 h-12 shadow-lg transition-all duration-300 border-3 ${
                  switches.large
                    ? 'left-15 bg-green-600 border-green-900'
                    : 'left-1 bg-gray-400 border-gray-800'
                }`}
                style={{
                  borderRadius: '50% 45% 52% 48%/48% 52% 45% 50%',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                }}
              ></span>
            </button>
          </div>

          {/* With Label */}
          <div
            className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform -rotate-0.5"
            style={{
              borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 transform rotate-0.5">
              With Label
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleSwitch('labeled')}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 border-3 transform hover:scale-105 ${
                  switches.labeled
                    ? 'bg-orange-100 border-orange-800'
                    : 'bg-gray-100 border-gray-800'
                }`}
                style={{
                  borderRadius: '50px 45px 48px 52px/45px 52px 50px 48px',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                }}
              >
                <span
                  className={`absolute top-0.5 w-8 h-8 shadow-md transition-all duration-300 border-2 ${
                    switches.labeled
                      ? 'left-11 bg-orange-600 border-orange-900'
                      : 'left-1 bg-gray-400 border-gray-800'
                  }`}
                  style={{
                    borderRadius: '50% 48% 45% 52%',
                    borderStyle: 'solid',
                  }}
                ></span>
              </button>
              <span
                className={`text-sm font-medium transform -rotate-1 ${
                  switches.labeled ? 'text-orange-800' : 'text-gray-600'
                }`}
              >
                {switches.labeled ? 'Sketching' : 'Erased'}
              </span>
            </div>
          </div>

          {/* Disabled State */}
          <div
            className="bg-gray-50 rounded-lg p-8 shadow-lg border-2 border-gray-400 opacity-60 transform rotate-1"
            style={{
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-500 mb-6 transform -rotate-1">
              Disabled State
            </h3>
            <button
              disabled
              className="relative w-20 h-10 rounded-full bg-gray-200 border-3 border-gray-400 cursor-not-allowed"
              style={{
                borderRadius: '50px 45px 48px 52px/45px 52px 50px 48px',
                borderWidth: '3px',
              }}
            >
              <span
                className="absolute top-0.5 left-11 w-8 h-8 shadow-md bg-gray-300 border-2 border-gray-500"
                style={{
                  borderRadius: '50% 45% 48% 52%',
                }}
              ></span>
            </button>
          </div>

          {/* With Icons */}
          <div
            className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform -rotate-1"
            style={{
              borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
            }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6 transform rotate-1">
              With Icons
            </h3>
            <button
              onClick={() => toggleSwitch('icon')}
              className={`relative w-24 h-12 rounded-full transition-all duration-300 border-3 transform hover:scale-105 ${
                switches.icon
                  ? 'bg-red-100 border-red-800'
                  : 'bg-gray-100 border-gray-800'
              }`}
              style={{
                borderRadius: '60px 55px 58px 62px/55px 62px 60px 58px',
                borderWidth: '3px',
                borderStyle: 'solid',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-red-700' : 'text-gray-500'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    switches.icon ? 'text-red-400/40' : 'text-gray-700'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <span
                className={`absolute top-1 w-10 h-10 shadow-lg transition-all duration-300 border-3 ${
                  switches.icon
                    ? 'left-13 bg-red-600 border-red-900'
                    : 'left-1 bg-gray-400 border-gray-800'
                }`}
                style={{
                  borderRadius: '50% 48% 52% 45%/45% 52% 48% 50%',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                }}
              ></span>
            </button>
          </div>
        </div>

        {/* Sketch Stats */}
        <div
          className="mt-12 bg-white rounded-lg p-8 shadow-lg border-2 border-gray-800 transform rotate-0.5"
          style={{
            borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
          }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center transform -rotate-0.5">
            Sketch Statistics
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div
              className="bg-blue-50 rounded-lg p-4 text-center border-2 border-blue-800 transform rotate-1"
              style={{
                borderRadius: '15px 105px 15px 95px/95px 15px 105px 15px',
              }}
            >
              <div className="text-3xl font-black text-blue-800 mb-1">
                {Object.values(switches).filter((v) => v).length}
              </div>
              <div className="text-sm text-blue-700 font-medium">Drawn</div>
            </div>
            <div
              className="bg-gray-50 rounded-lg p-4 text-center border-2 border-gray-800 transform -rotate-1"
              style={{
                borderRadius: '95px 15px 105px 15px/15px 105px 15px 95px',
              }}
            >
              <div className="text-3xl font-black text-gray-800 mb-1">
                {Object.values(switches).filter((v) => !v).length}
              </div>
              <div className="text-sm text-gray-700 font-medium">Erased</div>
            </div>
            <div
              className="bg-amber-50 rounded-lg p-4 text-center border-2 border-amber-800 transform rotate-1"
              style={{
                borderRadius: '15px 95px 15px 105px/105px 15px 95px 15px',
              }}
            >
              <div className="text-3xl font-black text-amber-800 mb-1">6</div>
              <div className="text-sm text-amber-700 font-medium">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
