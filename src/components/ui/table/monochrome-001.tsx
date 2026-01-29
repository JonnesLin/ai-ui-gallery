import React from 'react';

const MonochromeTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Analyst', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">Team Members</h2>
        <p className="text-gray-600">Monochrome design with pure black and white aesthetics</p>
      </div>

      <div className="border-2 border-black">
        <table className="w-full">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-white bg-black checked:bg-white checked:border-white accent-white cursor-pointer"
                />
              </th>
              <th className="p-4 text-left font-bold">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors">
                  Name
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left font-bold">
                <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors">
                  Email
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left font-bold">Role</th>
              <th className="p-4 text-left font-bold">Status</th>
              <th className="p-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`
                  border-t-2 border-black
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                  hover:bg-gray-200 transition-colors
                `}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-black bg-white checked:bg-black checked:border-black accent-black cursor-pointer"
                  />
                </td>
                <td className="p-4 font-semibold text-black">{row.name}</td>
                <td className="p-4 text-gray-700">{row.email}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-black text-white text-sm font-medium border-2 border-black">
                    {row.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-bold border-2
                      ${row.status === 'Active'
                        ? 'bg-white text-black border-black'
                        : 'bg-gray-300 text-gray-700 border-gray-700'
                      }
                    `}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-medium transition-all">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-medium transition-all">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-4">
        <div className="text-sm text-gray-700 font-medium">
          Showing <span className="font-bold text-black">1-5</span> of <span className="font-bold text-black">5</span> results
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-black text-white border-2 border-black font-bold">
            1
          </button>
          <button className="px-4 py-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold transition-all">
            2
          </button>
          <button className="px-4 py-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold transition-all">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonochromeTable;
