'use client';

import { useState } from 'react';

export default function SketchRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-amber-50 p-8 flex items-center justify-center"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)
        `
      }}
    >
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1
            className="text-6xl font-black text-gray-800 relative inline-block"
            style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
              transform: 'rotate(-1deg)'
            }}
          >
            Sketch Rating
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-800 transform -rotate-1"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #1F2937 3px, #1F2937 6px)'
              }}
            ></div>
          </h1>
          <p className="text-gray-600 font-handwriting" style={{ transform: 'rotate(1deg)' }}>
            Hand-drawn border effects
          </p>
        </div>

        {/* Main Rating Card */}
        <div
          className="bg-white p-10 relative"
          style={{
            border: '3px solid #1F2937',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '5px 5px 0px rgba(0,0,0,0.1)',
            transform: 'rotate(-0.5deg)'
          }}
        >
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-16 h-16 focus:outline-none transition-transform hover:scale-110"
                  style={{ transform: `rotate(${(index - 3) * 2}deg)` }}
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= displayRating ? '#FCD34D' : '#FFFFFF'}
                      stroke="#1F2937"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: 'url(#sketch-filter)'
                      }}
                    />
                    <defs>
                      <filter id="sketch-filter">
                        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
                        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
                      </filter>
                    </defs>
                  </svg>
                </button>
              ))}
            </div>

            <div className="text-center">
              <div
                className="inline-block border-3 border-gray-800 bg-yellow-100 px-8 py-4"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderRadius: '15px 5px 20px 5px',
                  transform: 'rotate(1deg)',
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                }}
              >
                <span className="text-4xl font-black text-gray-800">{displayRating}.0</span>
              </div>
            </div>
          </div>

          {/* Decorative doodles */}
          <div className="absolute top-2 right-2 text-2xl" style={{ transform: 'rotate(15deg)' }}>✨</div>
          <div className="absolute bottom-2 left-2 text-2xl" style={{ transform: 'rotate(-15deg)' }}>⭐</div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hand-drawn Stars */}
          <div
            className="bg-white p-6"
            style={{
              border: '2.5px solid #1F2937',
              borderRadius: '15px 5px 15px 5px',
              transform: 'rotate(0.5deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-gray-800 font-bold mb-4 text-center"
              style={{
                borderBottom: '2px solid #1F2937',
                paddingBottom: '8px',
                borderImage: 'repeating-linear-gradient(90deg, #1F2937, #1F2937 5px, transparent 5px, transparent 10px) 1'
              }}
            >
              Scribble Stars
            </h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="w-10 h-10"
                  style={{ transform: `rotate(${(index - 3) * 3}deg)` }}
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3 L14 9 L20 10 L16 14 L17 20 L12 17 L7 20 L8 14 L4 10 L10 9 Z"
                      fill={index <= 3 ? '#F59E0B' : '#FFFFFF'}
                      stroke="#1F2937"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: 'url(#sketch-rough)'
                      }}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-3 font-bold">3 / 5</p>
          </div>

          {/* Heart Doodles */}
          <div
            className="bg-pink-50 p-6"
            style={{
              border: '2.5px solid #1F2937',
              borderRadius: '5px 15px 5px 15px',
              transform: 'rotate(-0.5deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-gray-800 font-bold mb-4 text-center"
              style={{
                borderBottom: '2px solid #1F2937',
                paddingBottom: '8px'
              }}
            >
              Heart Sketches
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="w-10 h-10"
                  style={{ transform: `rotate(${(index - 3) * -3}deg)` }}
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21 C6 17, 2 13, 2 8.5 C2 5.5, 4.5 3, 7.5 3 C9.5 3, 11 4, 12 5 C13 4, 14.5 3, 16.5 3 C19.5 3, 22 5.5, 22 8.5 C22 13, 18 17, 12 21 Z"
                      fill={index <= 4 ? '#EC4899' : '#FFFFFF'}
                      stroke="#1F2937"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: 'url(#sketch-rough)'
                      }}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-3 font-bold">4 / 5</p>
          </div>

          {/* Checkboxes */}
          <div
            className="bg-green-50 p-6"
            style={{
              border: '2.5px solid #1F2937',
              borderRadius: '15px 5px 15px 5px',
              transform: 'rotate(0.3deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-gray-800 font-bold mb-4 text-center"
              style={{
                borderBottom: '2px solid #1F2937',
                paddingBottom: '8px'
              }}
            >
              Check Marks
            </h3>
            <div className="space-y-3">
              {['Excellent', 'Great', 'Good', 'Fair', 'Poor'].map((label, index) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center"
                    style={{
                      borderRadius: '3px',
                      transform: `rotate(${index * 2 - 4}deg)`,
                      backgroundColor: index < 3 ? '#FFFFFF' : 'transparent'
                    }}
                  >
                    {index < 3 && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12 L10 17 L20 7"
                          stroke="#1F2937"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-700 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div
            className="bg-blue-50 p-6"
            style={{
              border: '2.5px solid #1F2937',
              borderRadius: '5px 15px 5px 15px',
              transform: 'rotate(-0.3deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-gray-800 font-bold mb-4 text-center"
              style={{
                borderBottom: '2px solid #1F2937',
                paddingBottom: '8px'
              }}
            >
              Progress Bar
            </h3>
            <div className="space-y-3">
              <div
                className="h-8 border-2 border-gray-800 bg-white relative overflow-hidden"
                style={{
                  borderRadius: '5px',
                  transform: 'rotate(-0.5deg)'
                }}
              >
                <div
                  className="h-full bg-blue-300"
                  style={{
                    width: '78%',
                    borderRight: '2px solid #1F2937'
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-700 font-bold">
                <span style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}>Pretty Good!</span>
                <span style={{ transform: 'rotate(1deg)', display: 'inline-block' }}>78%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Number Rating */}
        <div
          className="bg-white p-8"
          style={{
            border: '3px solid #1F2937',
            borderRadius: '20px 5px 20px 5px',
            transform: 'rotate(-0.3deg)',
            boxShadow: '5px 5px 0px rgba(0,0,0,0.1)'
          }}
        >
          <h3
            className="text-gray-800 font-bold mb-6 text-center text-xl"
            style={{
              borderBottom: '3px solid #1F2937',
              paddingBottom: '12px',
              borderImage: 'repeating-linear-gradient(90deg, #1F2937, #1F2937 8px, transparent 8px, transparent 16px) 1'
            }}
          >
            Number Circles
          </h3>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-full border-3 border-gray-800 flex items-center justify-center text-2xl font-black ${
                  index <= 5 ? 'bg-yellow-200' : 'bg-white'
                }`}
                style={{
                  borderWidth: '3px',
                  transform: `rotate(${(index - 3) * 5}deg)`,
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                }}
              >
                {index}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-6 font-bold text-lg" style={{ transform: 'rotate(0.5deg)' }}>
            All checked!
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p
            className="text-gray-700 font-bold inline-block"
            style={{
              borderBottom: '2px solid #1F2937',
              paddingBottom: '4px',
              transform: 'rotate(-1deg)'
            }}
          >
            ✏️ Hand-drawn with love ✏️
          </p>
        </div>

        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="sketch-rough">
              <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" result="turbulence"/>
              <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
