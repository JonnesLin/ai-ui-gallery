import React from 'react';

const ThreeDTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Analyst', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
      <div className="mb-8" style={{ transform: 'perspective(1000px) rotateX(2deg)', transformStyle: 'preserve-3d' }}>
        <h2 className="text-4xl font-bold text-slate-800 mb-2 tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
          Team Members
        </h2>
        <p className="text-slate-600 font-medium">Three-dimensional depth and shadow effects</p>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          transform: 'perspective(1000px) rotateX(1deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.5) inset'
        }}
      >
        <table className="w-full">
          <thead>
            <tr
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white"
              style={{
                boxShadow: '0 4px 6px rgba(0,0,0,0.2) inset, 0 -2px 4px rgba(255,255,255,0.1) inset',
              }}
            >
              <th className="p-4 text-left border-b-4 border-blue-800/50">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-white/50 bg-blue-700 checked:bg-white checked:border-blue-800 accent-white cursor-pointer rounded shadow-lg"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)' }}
                />
              </th>
              <th className="p-4 text-left border-b-4 border-blue-800/50">
                <div className="flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-transform font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Name
                  <svg className="w-4 h-4 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left border-b-4 border-blue-800/50">
                <div className="flex items-center gap-2 cursor-pointer hover:translate-y-[-2px] transition-transform font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Email
                  <svg className="w-4 h-4 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left border-b-4 border-blue-800/50 font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Role
              </th>
              <th className="p-4 text-left border-b-4 border-blue-800/50 font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Status
              </th>
              <th className="p-4 text-left border-b-4 border-blue-800/50 font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`
                  ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  hover:bg-blue-50 transition-all border-b border-slate-200
                `}
                style={{
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) translateZ(10px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                }}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-slate-300 bg-white checked:bg-blue-600 checked:border-blue-700 accent-blue-600 cursor-pointer rounded"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)' }}
                  />
                </td>
                <td className="p-4 font-semibold text-slate-800" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                  {row.name}
                </td>
                <td className="p-4 text-slate-600">{row.email}</td>
                <td className="p-4">
                  <span
                    className="px-3 py-1 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white text-sm font-medium rounded-md"
                    style={{
                      boxShadow: '0 4px 8px rgba(99, 102, 241, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {row.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-bold rounded-md
                      ${row.status === 'Active'
                        ? 'bg-gradient-to-br from-green-400 to-green-500 text-white'
                        : 'bg-gradient-to-br from-slate-400 to-slate-500 text-white'
                      }
                    `}
                    style={{
                      boxShadow: row.status === 'Active'
                        ? '0 4px 8px rgba(34, 197, 94, 0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
                        : '0 4px 8px rgba(100, 116, 139, 0.3), inset 0 1px 2px rgba(255,255,255,0.3)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 font-medium transition-all rounded-md"
                      style={{
                        boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)';
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-gradient-to-br from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-medium transition-all rounded-md"
                      style={{
                        boxShadow: '0 4px 8px rgba(239, 68, 68, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(239, 68, 68, 0.4), inset 0 1px 2px rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(239, 68, 68, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)';
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="mt-6 flex items-center justify-between bg-white rounded-lg p-4"
        style={{
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          transform: 'perspective(1000px) rotateX(1deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="text-sm text-slate-700 font-medium">
          Showing <span className="font-bold text-blue-600">1-5</span> of <span className="font-bold text-blue-600">5</span> results
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gradient-to-br from-slate-300 to-slate-400 text-slate-700 rounded-md font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.3)' }}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-md font-bold"
            style={{
              boxShadow: '0 6px 12px rgba(59, 130, 246, 0.4), inset 0 1px 2px rgba(255,255,255,0.2)',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            1
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-br from-white to-slate-50 text-slate-700 hover:from-blue-600 hover:to-blue-700 hover:text-white rounded-md font-bold transition-all"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.3)' }}
          >
            2
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-md font-bold transition-all"
            style={{ boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255,255,255,0.2)' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeDTable;
