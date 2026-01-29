import React from 'react';

const MaterialTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Analyst', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-50">
      <div className="mb-6">
        <h2 className="text-3xl font-medium text-gray-900 mb-1">Team Members</h2>
        <p className="text-gray-600">Material Design with elevation and ripple effects</p>
      </div>

      <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)' }}>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 accent-blue-600 cursor-pointer rounded-sm transition-all"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                />
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-700 font-medium text-sm tracking-wide uppercase">
                  Name
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors text-gray-700 font-medium text-sm tracking-wide uppercase">
                  Email
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left text-gray-700 font-medium text-sm tracking-wide uppercase">Role</th>
              <th className="p-4 text-left text-gray-700 font-medium text-sm tracking-wide uppercase">Status</th>
              <th className="p-4 text-left text-gray-700 font-medium text-sm tracking-wide uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                style={{
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 accent-blue-600 cursor-pointer rounded-sm transition-all"
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </td>
                <td className="p-4 font-medium text-gray-900">{row.name}</td>
                <td className="p-4 text-gray-600 text-sm">{row.email}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                    {row.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-medium rounded-full
                      ${row.status === 'Active'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all rounded text-sm uppercase tracking-wide"
                      style={{
                        boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(37, 99, 235, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(37, 99, 235, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-white text-red-600 hover:bg-red-50 font-medium transition-all rounded text-sm uppercase tracking-wide border border-red-300"
                      style={{
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(220, 38, 38, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'translateY(0)';
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

      <div className="mt-4 flex items-center justify-between px-4 py-3">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium text-gray-900">1-5</span> of <span className="font-medium text-gray-900">5</span> results
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-white text-gray-400 rounded font-medium text-sm uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
            disabled
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded font-medium text-sm"
            style={{ boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)' }}
          >
            1
          </button>
          <button
            className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 rounded font-medium text-sm transition-all border border-gray-200"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          >
            2
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded font-medium text-sm uppercase tracking-wide transition-all"
            style={{
              boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(37, 99, 235, 0.3)';
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialTable;
