export default function GradientTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <h2 className="text-sm font-medium bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent uppercase tracking-widest mb-6">User Management</h2>

      <div className="overflow-x-auto">
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
          <table className="w-full min-w-[640px] bg-slate-900/95 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10">
                <th className="px-6 py-4 text-left text-xs font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 ${
                    index % 2 === 1 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-purple-500/25">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400">{user.email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-300">{user.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      user.status === 'Active'
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400'
                        : user.status === 'Inactive'
                        ? 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400'
                        : 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all mr-4 font-medium">
                      Edit
                    </button>
                    <button className="text-sm bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-red-300 transition-all font-medium">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
