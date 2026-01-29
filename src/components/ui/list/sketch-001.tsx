export default function SketchList() {
  const items = [
    { id: 1, title: 'Brainstorm New Ideas', time: '10:00 AM', status: 'done', icon: '💡' },
    { id: 2, title: 'Sketch Wireframes', time: '2:00 PM', status: 'active', icon: '✏️' },
    { id: 3, title: 'Review Concepts', time: '4:00 PM', status: 'todo', icon: '👀' },
    { id: 4, title: 'Share with Team', time: '5:30 PM', status: 'waiting', icon: '📤' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-8" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)`
    }}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hand-drawn List */}
        <section>
          <h2 className="text-gray-800 font-bold mb-6 text-2xl" style={{
            fontFamily: 'Comic Sans MS, cursive',
            transform: 'rotate(-1deg)'
          }}>
            ✨ Today's Tasks
          </h2>
          <ul className="bg-white p-6 rounded-lg relative" style={{
            border: '3px solid #333',
            borderRadius: '15px 25px 20px 18px',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.1)',
            transform: 'rotate(0.5deg)'
          }}>
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="py-4 border-b-2 border-dashed border-gray-300 last:border-b-0 hover:bg-yellow-50/50 transition-all cursor-pointer"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -0.3 : 0.3}deg)`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-200 rounded-full flex items-center justify-center text-3xl relative" style={{
                    border: '2.5px solid #333',
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
                    transform: 'rotate(-5deg)'
                  }}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold text-lg" style={{
                      fontFamily: 'Comic Sans MS, cursive'
                    }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1" style={{
                      fontFamily: 'Comic Sans MS, cursive'
                    }}>
                      {item.time}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg relative ${
                    item.status === 'done' ? 'bg-green-200' :
                    item.status === 'active' ? 'bg-blue-200' :
                    item.status === 'todo' ? 'bg-orange-200' : 'bg-gray-200'
                  }`} style={{
                    border: '2px solid #333',
                    fontFamily: 'Comic Sans MS, cursive',
                    fontWeight: 'bold',
                    transform: 'rotate(2deg)'
                  }}>
                    {item.status === 'done' && '✓ Done'}
                    {item.status === 'active' && '→ Active'}
                    {item.status === 'todo' && '○ Todo'}
                    {item.status === 'waiting' && '⏳ Wait'}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sticky Note Cards */}
        <section>
          <h2 className="text-gray-800 font-bold mb-6 text-2xl" style={{
            fontFamily: 'Comic Sans MS, cursive',
            transform: 'rotate(-1deg)'
          }}>
            📌 Quick Notes
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.slice(0, 3).map((item, idx) => (
              <li
                key={item.id}
                className={`p-6 relative cursor-pointer hover:scale-105 transition-all ${
                  idx === 0 ? 'bg-yellow-200' :
                  idx === 1 ? 'bg-pink-200' : 'bg-blue-200'
                }`}
                style={{
                  border: '2.5px solid #333',
                  borderRadius: '12px 18px 15px 20px',
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
                  transform: `rotate(${idx === 0 ? -2 : idx === 1 ? 1 : -1}deg)`,
                  fontFamily: 'Comic Sans MS, cursive'
                }}
              >
                <div className="absolute top-2 right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-xl" style={{
                  border: '2px solid #333',
                  transform: 'rotate(15deg)'
                }}>
                  📍
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-gray-800 font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.time}</p>
                <div className="w-full py-2 bg-white rounded-lg text-center font-bold" style={{
                  border: '2.5px solid #333',
                  transform: 'rotate(-1deg)'
                }}>
                  View Details →
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Doodle Nested List */}
        <section>
          <div className="bg-white p-8 relative" style={{
            border: '3px solid #333',
            borderRadius: '20px 25px 18px 22px',
            boxShadow: '6px 6px 0 rgba(0,0,0,0.1)',
            transform: 'rotate(-0.5deg)'
          }}>
            <h3 className="text-gray-800 font-bold mb-6 text-xl flex items-center gap-2" style={{
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              🎨 Project Folders
            </h3>
            <ul className="space-y-5">
              <li className="border-l-4 border-purple-500 pl-5 bg-purple-50 p-4 rounded-r-lg" style={{
                borderLeftWidth: '5px',
                borderLeftStyle: 'dashed'
              }}>
                <div className="text-purple-700 font-bold mb-3 text-lg" style={{
                  fontFamily: 'Comic Sans MS, cursive'
                }}>
                  ✎ Design Ideas
                </div>
                <ul className="space-y-3 pl-4">
                  {['Landing Page Sketches', 'Icon Concepts', 'Color Palettes'].map((item, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-purple-700 transition-colors cursor-pointer flex items-center gap-2" style={{
                      fontFamily: 'Comic Sans MS, cursive'
                    }}>
                      <span className="text-lg">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="border-l-4 border-green-500 pl-5 bg-green-50 p-4 rounded-r-lg" style={{
                borderLeftWidth: '5px',
                borderLeftStyle: 'dashed'
              }}>
                <div className="text-green-700 font-bold mb-3 text-lg" style={{
                  fontFamily: 'Comic Sans MS, cursive'
                }}>
                  ✓ Completed
                </div>
                <ul className="space-y-3 pl-4">
                  {['Logo Design', 'Brand Guidelines'].map((item, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-green-700 transition-colors cursor-pointer flex items-center gap-2" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textDecoration: 'line-through',
                      textDecorationStyle: 'wavy'
                    }}>
                      <span className="text-lg">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Hand-drawn Steps */}
        <section>
          <h2 className="text-gray-800 font-bold mb-6 text-2xl" style={{
            fontFamily: 'Comic Sans MS, cursive',
            transform: 'rotate(-1deg)'
          }}>
            🚀 Design Process
          </h2>
          <ol className="bg-white p-6 space-y-4" style={{
            border: '3px solid #333',
            borderRadius: '18px 22px 20px 25px',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.1)'
          }}>
            {['Research & Discovery', 'Sketch Ideas', 'Create Mockups', 'Get Feedback'].map((step, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-all"
                style={{
                  border: '2.5px solid #333',
                  borderRadius: '10px 15px 12px 14px',
                  transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)`
                }}
              >
                <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center text-xl font-bold" style={{
                  border: '2.5px solid #333',
                  fontFamily: 'Comic Sans MS, cursive',
                  boxShadow: '3px 3px 0 rgba(0,0,0,0.1)'
                }}>
                  {idx + 1}
                </div>
                <span className="text-gray-800 font-bold text-lg flex-1" style={{
                  fontFamily: 'Comic Sans MS, cursive'
                }}>
                  {step}
                </span>
                <div className="w-8 h-0.5 bg-gray-400" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #666 0, #666 5px, transparent 5px, transparent 10px)'
                }}></div>
              </li>
            ))}
          </ol>
        </section>

        {/* Sketch Team List */}
        <section>
          <h2 className="text-gray-800 font-bold mb-6 text-2xl" style={{
            fontFamily: 'Comic Sans MS, cursive',
            transform: 'rotate(-1deg)'
          }}>
            👥 Creative Team
          </h2>
          <ul className="bg-white p-6 space-y-4" style={{
            border: '3px solid #333',
            borderRadius: '20px 18px 22px 25px',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.1)'
          }}>
            {[
              { name: 'Sarah Sketch', role: 'Lead Designer', avatar: '🎨' },
              { name: 'Mike Marker', role: 'Illustrator', avatar: '✏️' },
              { name: 'Lisa Lines', role: 'UI Designer', avatar: '📐' },
            ].map((member, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all border-2 border-dashed border-blue-300"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-3xl" style={{
                    border: '3px solid #333',
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
                    transform: 'rotate(-5deg)'
                  }}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-lg" style={{
                      fontFamily: 'Comic Sans MS, cursive'
                    }}>
                      {member.name}
                    </h3>
                    <p className="text-gray-600" style={{
                      fontFamily: 'Comic Sans MS, cursive'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-5 py-2 bg-yellow-300 rounded-lg font-bold hover:bg-yellow-400 transition-all" style={{
                    border: '2.5px solid #333',
                    fontFamily: 'Comic Sans MS, cursive',
                    transform: 'rotate(1deg)',
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.1)'
                  }}>
                    View Work
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Checklist */}
        <section>
          <div className="bg-white p-6" style={{
            border: '3px solid #333',
            borderRadius: '18px 25px 20px 22px',
            boxShadow: '5px 5px 0 rgba(0,0,0,0.1)',
            transform: 'rotate(0.3deg)'
          }}>
            <h3 className="text-gray-800 font-bold mb-6 text-xl" style={{
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              ☑️ Design Checklist
            </h3>
            <ul className="space-y-4">
              {[
                { task: 'Create mood board', done: true },
                { task: 'Sketch 3 concepts', done: true },
                { task: 'Digital mockup', done: false },
                { task: 'Client presentation', done: false },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-all"
                  style={{
                    border: '2px solid #333',
                    borderRadius: '8px 12px 10px 14px'
                  }}
                >
                  <div className={`w-7 h-7 rounded border-3 flex items-center justify-center font-bold text-lg ${
                    item.done ? 'bg-green-300' : 'bg-white'
                  }`} style={{
                    border: '2.5px solid #333',
                    fontFamily: 'Comic Sans MS, cursive'
                  }}>
                    {item.done && '✓'}
                  </div>
                  <span className={`flex-1 ${item.done ? 'line-through text-gray-500' : 'text-gray-800'} font-medium`} style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    textDecorationStyle: item.done ? 'wavy' : undefined
                  }}>
                    {item.task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
