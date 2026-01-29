export default function GlassmorphismTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="px-6 py-4 text-left text-xs font-semibold text-white/90 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white/90 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white/90 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white/90 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-white/90 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-white/5 transition-all duration-300 hover:bg-white/10 ${
                  index % 2 === 1 ? 'bg-white/[0.02]' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur flex items-center justify-center text-white text-xs font-medium border border-white/20">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-white">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-white/70">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-white/90">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full backdrop-blur-sm border ${
                    user.status === 'Active'
                      ? 'bg-green-400/20 text-green-200 border-green-400/30'
                      : user.status === 'Inactive'
                      ? 'bg-gray-400/20 text-gray-300 border-gray-400/30'
                      : 'bg-yellow-400/20 text-yellow-200 border-yellow-400/30'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-white/60 hover:text-white transition-colors mr-4">
                    Edit
                  </button>
                  <button className="text-sm text-white/60 hover:text-red-300 transition-colors">
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
