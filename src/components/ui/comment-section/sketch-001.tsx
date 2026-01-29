export default function SketchCommentSection() {
  return (
    <div className="min-h-screen bg-yellow-50 p-6 md:p-12" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(0,0,0,.03) 35px, rgba(0,0,0,.03) 36px)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 md:p-8 relative" style={{
          border: '3px solid #333',
          borderRadius: '2% 6% 5% 4% / 1% 1% 2% 4%',
          boxShadow: '3px 3px 0 rgba(0,0,0,0.1)'
        }}>
          {/* Sketch decorations */}
          <div className="absolute top-2 right-2 text-gray-400 text-xs transform rotate-12">
            ✎
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block" style={{
              borderBottom: '4px solid #fbbf24',
              transform: 'rotate(-1deg)'
            }}>
              Comments
            </h2>
            <p className="text-gray-600 mt-3 font-handwriting" style={{ transform: 'rotate(-0.5deg)' }}>
              ~ 36 hand-drawn thoughts ~
            </p>
          </div>

          {/* Comment Input */}
          <div className="mb-8 relative" style={{
            border: '2px dashed #9ca3af',
            borderRadius: '3% 2% 4% 3% / 2% 3% 2% 4%',
            padding: '1.25rem',
            background: 'linear-gradient(to bottom, #fef3c7 0%, #fff 100%)'
          }}>
            <div className="flex gap-4">
              <div className="w-14 h-14 flex-shrink-0 rounded-full bg-white relative" style={{
                border: '3px solid #333',
                transform: 'rotate(-3deg)'
              }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Scribble your thoughts here..."
                  className="w-full bg-transparent outline-none resize-none text-gray-800 placeholder:text-gray-500 font-handwriting"
                  rows={3}
                  style={{ border: 'none' }}
                />
                <div className="flex justify-end mt-3">
                  <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold relative hover:bg-yellow-500 transition-colors" style={{
                    border: '3px solid #333',
                    borderRadius: '4% 3% 5% 4% / 2% 4% 3% 5%',
                    transform: 'rotate(-1deg)',
                    boxShadow: '2px 2px 0 #333'
                  }}>
                    POST IT!
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="relative p-5 bg-white" style={{
              border: '2px solid #333',
              borderRadius: '3% 5% 4% 6% / 2% 3% 5% 2%',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              transform: 'rotate(0.5deg)'
            }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-100 relative" style={{
                  border: '3px solid #333',
                  transform: 'rotate(-2deg)'
                }}>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-900">SK</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-gray-900 relative">
                      Sketch King
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"></span>
                    </span>
                    <span className="px-2 py-1 bg-yellow-200 text-gray-900 text-xs font-bold" style={{
                      border: '2px solid #333',
                      borderRadius: '20% 10% 25% 15% / 15% 20% 10% 25%',
                      transform: 'rotate(-2deg)'
                    }}>
                      Artist
                    </span>
                    <span className="text-xs text-gray-600">~ 4hrs ago ~</span>
                  </div>
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    Hand-drawn interfaces have such personality! The imperfect lines and playful rotations make everything feel more human and approachable.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="font-bold text-sm">147</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors">
                      Reply ✏️
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-5 ml-4 space-y-4" style={{
                    borderLeft: '3px dashed #d1d5db',
                    paddingLeft: '1rem'
                  }}>
                    <div className="p-3 bg-pink-50" style={{
                      border: '2px solid #333',
                      borderRadius: '4% 3% 5% 4% / 3% 5% 4% 3%',
                      transform: 'rotate(-0.5deg)'
                    }}>
                      <div className="flex gap-3">
                        <div className="w-9 h-9 flex-shrink-0 rounded-full bg-pink-200" style={{
                          border: '2px solid #333',
                          transform: 'rotate(2deg)'
                        }}>
                          <span className="w-full h-full flex items-center justify-center font-bold text-sm">DR</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-sm">Doodle Rose</span>
                            <span className="text-xs text-gray-600">~ 2hrs ~</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-800">
                            Yes! It's like reading a friend's notebook instead of a sterile app.
                          </p>
                          <button className="mt-2 text-xs font-bold text-gray-700 hover:text-gray-900">
                            ↑ 42 ✏️ Reply
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50" style={{
                      border: '2px solid #333',
                      borderRadius: '4% 3% 5% 4% / 3% 5% 4% 3%',
                      transform: 'rotate(0.5deg)'
                    }}>
                      <div className="flex gap-3">
                        <div className="w-9 h-9 flex-shrink-0 rounded-full bg-green-200" style={{
                          border: '2px solid #333',
                          transform: 'rotate(-3deg)'
                        }}>
                          <span className="w-full h-full flex items-center justify-center font-bold text-sm">PL</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-sm">Pencil Luna</span>
                            <span className="text-xs text-gray-600">~ 1hr ~</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-800">
                            The wobbly borders give it so much character!
                          </p>
                          <button className="mt-2 text-xs font-bold text-gray-700 hover:text-gray-900">
                            ↑ 38 ✏️ Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="relative p-5 bg-white" style={{
              border: '2px solid #333',
              borderRadius: '4% 6% 3% 5% / 3% 2% 4% 3%',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              transform: 'rotate(-0.5deg)'
            }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-orange-100 relative" style={{
                  border: '3px solid #333',
                  transform: 'rotate(3deg)'
                }}>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-900">IC</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 relative">
                      Ink Crusader
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"></span>
                    </span>
                    <span className="text-xs text-gray-600">~ 9hrs ago ~</span>
                  </div>
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    This design reminds me of brainstorming sessions with whiteboards and markers. Creative, casual, and inviting!
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="font-bold text-sm">103</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors">
                      Reply ✏️
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="relative p-5 bg-white" style={{
              border: '2px solid #333',
              borderRadius: '5% 4% 6% 3% / 2% 4% 3% 5%',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              transform: 'rotate(0.3deg)'
            }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-purple-100 relative" style={{
                  border: '3px solid #333',
                  transform: 'rotate(-4deg)'
                }}>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-900">MV</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 relative">
                      Marker Vibe
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"></span>
                    </span>
                    <span className="text-xs text-gray-600">~ 1 day ago ~</span>
                  </div>
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    Love the sketchy aesthetic! It feels like digital art that hasn't forgotten its analog roots.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-yellow-100 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="font-bold text-sm">256</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 transition-colors" style={{
                      border: '2px solid #333',
                      borderRadius: '30% 20% 25% 30% / 20% 25% 30% 20%'
                    }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors">
                      Reply ✏️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-blue-200 text-gray-900 font-bold hover:bg-blue-300 transition-colors" style={{
              border: '3px solid #333',
              borderRadius: '5% 4% 6% 5% / 3% 5% 4% 6%',
              transform: 'rotate(-1deg)',
              boxShadow: '3px 3px 0 #333'
            }}>
              Load More Scribbles ✎
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
