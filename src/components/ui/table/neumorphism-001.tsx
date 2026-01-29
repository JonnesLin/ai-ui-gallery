export default function NeumorphismTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-[#e0e5ec]">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">User Management</h2>

      <div className="overflow-x-auto rounded-2xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] bg-[#e0e5ec] p-1">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-all duration-300 hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] rounded-xl ${
                  index % 2 === 1 ? 'bg-[#e0e5ec]' : ''
                }`}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-600 text-xs font-bold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-gray-500">{user.email}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-medium text-gray-600">{user.role}</span>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff] ${
                    user.status === 'Active'
                      ? 'text-green-600 bg-[#e0e5ec]'
                      : user.status === 'Inactive'
                      ? 'text-gray-500 bg-[#e0e5ec]'
                      : 'text-amber-600 bg-[#e0e5ec]'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="px-3 py-1.5 text-xs font-semibold text-blue-600 rounded-lg shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all mr-2">
                    Edit
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold text-red-500 rounded-lg shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
