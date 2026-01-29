export default function PlayfulTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  const avatarColors = [
    'from-red-400 to-pink-500',
    'from-orange-400 to-red-500',
    'from-yellow-400 to-orange-500',
    'from-green-400 to-emerald-500',
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500',
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 flex items-center gap-3">
        <span className="text-3xl">&#127881;</span>
        User Management
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <th className="px-6 py-5 text-left text-sm font-bold text-white">Name</th>
              <th className="px-6 py-5 text-left text-sm font-bold text-white">Email</th>
              <th className="px-6 py-5 text-left text-sm font-bold text-white">Role</th>
              <th className="px-6 py-5 text-left text-sm font-bold text-white">Status</th>
              <th className="px-6 py-5 text-right text-sm font-bold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-purple-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 ${
                  index % 2 === 1 ? 'bg-purple-50/30' : 'bg-white'
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold shadow-lg rotate-3 hover:rotate-0 transition-transform`}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-bold text-gray-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 text-xs font-bold rounded-xl ${
                    user.role === 'Admin'
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                      : user.role === 'Editor'
                      ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'
                      : 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-2 text-xs font-bold rounded-full inline-flex items-center gap-2 ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : user.status === 'Inactive'
                      ? 'bg-gray-100 text-gray-500'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      user.status === 'Active' ? 'bg-green-500' :
                      user.status === 'Inactive' ? 'bg-gray-400' : 'bg-yellow-500'
                    }`} />
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 mr-2">
                    Edit
                  </button>
                  <button className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:-translate-y-0.5">
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
