import React from 'react';

const FlatTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Analyst', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Team Members</h2>
        <p className="text-gray-600">Flat design with bold colors and no shadows</p>
      </div>

      <div className="bg-white overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-white bg-transparent checked:bg-white checked:border-blue-600 accent-blue-600 cursor-pointer"
                />
              </th>
              <th className="p-4 text-left font-bold">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  Name
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
              </th>
              <th className="p-4 text-left font-bold">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
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
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  hover:bg-blue-50 transition-colors
                `}
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 accent-blue-500 cursor-pointer"
                  />
                </td>
                <td className="p-4 font-semibold text-gray-800">{row.name}</td>
                <td className="p-4 text-gray-600">{row.email}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm font-medium">
                    {row.role}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 text-sm font-bold text-white
                      ${row.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}
                    `}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 font-medium transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white hover:bg-red-600 font-medium transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between bg-white p-4">
        <div className="text-sm text-gray-600 font-medium">
          Showing <span className="font-bold text-gray-800">1-5</span> of <span className="font-bold text-gray-800">5</span> results
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-300 text-gray-500 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white font-bold transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 font-bold transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlatTable;
