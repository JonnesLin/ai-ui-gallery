import React from 'react';

const NeonTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Analyst', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-black min-h-screen">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2 tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Team Members
        </h2>
        <p className="text-cyan-300 font-medium" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
          Neon-lit cyberpunk data visualization
        </p>
      </div>

      <div className="border-2 border-cyan-500 rounded-lg overflow-hidden" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(34, 211, 238, 0.1)' }}>
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm">
              <th className="p-4 text-left border-b-2 border-cyan-500/50">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-pink-500 bg-transparent checked:bg-pink-500 accent-pink-500 cursor-pointer rounded"
                  style={{ filter: 'drop-shadow(0 0 5px rgba(236, 72, 153, 0.8))' }}
                />
              </th>
              <th className="p-4 text-left border-b-2 border-cyan-500/50">
                <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition-all text-cyan-400 font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                  Name
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left border-b-2 border-cyan-500/50">
                <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition-all text-cyan-400 font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                  Email
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left border-b-2 border-cyan-500/50 text-cyan-400 font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                Role
              </th>
              <th className="p-4 text-left border-b-2 border-cyan-500/50 text-cyan-400 font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                Status
              </th>
              <th className="p-4 text-left border-b-2 border-cyan-500/50 text-cyan-400 font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`
                  border-b border-cyan-500/20
                  ${index % 2 === 0 ? 'bg-purple-950/20' : 'bg-cyan-950/20'}
                  hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-cyan-900/40 transition-all
                `}
                style={{
                  transition: 'all 0.3s ease',
                }}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-pink-500 bg-transparent checked:bg-pink-500 accent-pink-500 cursor-pointer rounded"
                    style={{ filter: 'drop-shadow(0 0 5px rgba(236, 72, 153, 0.8))' }}
                  />
                </td>
                <td className="p-4 font-semibold text-cyan-300" style={{ textShadow: '0 0 5px rgba(34, 211, 238, 0.5)' }}>
                  {row.name}
                </td>
                <td className="p-4 text-purple-300">{row.email}</td>
                <td className="p-4">
                  <span
                    className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded border border-pink-500"
                    style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
                  >
                    {row.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-bold rounded border-2
                      ${row.status === 'Active'
                        ? 'bg-green-500/20 text-green-400 border-green-500'
                        : 'bg-red-500/20 text-red-400 border-red-500'
                      }
                    `}
                    style={{
                      boxShadow: row.status === 'Active'
                        ? '0 0 10px rgba(34, 197, 94, 0.5)'
                        : '0 0 10px rgba(239, 68, 68, 0.5)'
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-black font-medium transition-all rounded"
                      style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)' }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500 hover:bg-pink-500 hover:text-black font-medium transition-all rounded"
                      style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)' }}
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

      <div className="mt-6 flex items-center justify-between border-t-2 border-cyan-500/50 pt-4">
        <div className="text-sm text-purple-300 font-medium">
          Showing <span className="font-bold text-cyan-400">1-5</span> of <span className="font-bold text-cyan-400">5</span> results
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500 hover:bg-purple-500 hover:text-black font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded"
            disabled
            style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)' }}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-cyan-500 text-black border border-cyan-500 font-bold rounded"
            style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}
          >
            1
          </button>
          <button
            className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-black font-bold transition-all rounded"
            style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)' }}
          >
            2
          </button>
          <button
            className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500 hover:bg-purple-500 hover:text-black font-bold transition-all rounded"
            style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeonTable;
