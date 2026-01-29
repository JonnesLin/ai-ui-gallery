export default function PastelTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  const pastelColors = ['bg-pink-100', 'bg-purple-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-orange-100']

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <h2 className="text-lg font-medium text-purple-400 mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl shadow-purple-100/50 border border-white">
          <thead>
            <tr className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
              <th className="px-6 py-4 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-pink-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-blue-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-green-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-orange-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100/50">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-all duration-300 hover:bg-white/80 ${
                  index % 2 === 1 ? 'bg-purple-50/30' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl ${pastelColors[index % pastelColors.length]} flex items-center justify-center text-purple-600 text-xs font-semibold shadow-sm`}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-600">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : user.status === 'Inactive'
                      ? 'bg-gray-100 text-gray-500'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-1.5 text-xs font-medium text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors mr-2">
                    Edit
                  </button>
                  <button className="px-4 py-1.5 text-xs font-medium text-pink-500 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
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
