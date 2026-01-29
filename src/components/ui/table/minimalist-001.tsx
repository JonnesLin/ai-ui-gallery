export default function MinimalistTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="group transition-colors duration-200 hover:bg-gray-50">
                <td className="px-4 py-4">
                  <span className="text-sm font-light text-gray-900">{user.name}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-light text-gray-500">{user.email}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-light text-gray-700">{user.role}</span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs font-light tracking-wide ${
                    user.status === 'Active' ? 'text-gray-900' :
                    user.status === 'Inactive' ? 'text-gray-400' :
                    'text-gray-600'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="text-xs font-light text-gray-400 hover:text-gray-900 transition-colors mr-4">
                    Edit
                  </button>
                  <button className="text-xs font-light text-gray-400 hover:text-gray-900 transition-colors">
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
