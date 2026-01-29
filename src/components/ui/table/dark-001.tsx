export default function DarkTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gray-950">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <thead>
            <tr className="bg-gray-800/50 border-b border-gray-800">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors duration-200 hover:bg-gray-800/50 ${
                  index % 2 === 1 ? 'bg-gray-900/50' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300 text-xs font-medium border border-gray-700">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-gray-100">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-300">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                    user.status === 'Active'
                      ? 'bg-green-500/10 text-green-400 ring-1 ring-green-500/20'
                      : user.status === 'Inactive'
                      ? 'bg-gray-500/10 text-gray-400 ring-1 ring-gray-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-gray-400 hover:text-blue-400 transition-colors mr-4">
                    Edit
                  </button>
                  <button className="text-sm text-gray-400 hover:text-red-400 transition-colors">
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
