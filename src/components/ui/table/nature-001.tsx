export default function NatureTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-emerald-50 to-green-100">
      <h2 className="text-lg font-medium text-emerald-800 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        User Management
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-emerald-200/50 border border-emerald-200">
          <thead>
            <tr className="bg-gradient-to-r from-emerald-600 to-green-600">
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors duration-200 hover:bg-emerald-50 ${
                  index % 2 === 1 ? 'bg-green-50/50' : 'bg-white/50'
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white text-xs font-semibold shadow-md">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-emerald-900">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-emerald-700/70">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    user.role === 'Admin'
                      ? 'bg-emerald-100 text-emerald-700'
                      : user.role === 'Editor'
                      ? 'bg-teal-100 text-teal-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      user.status === 'Active'
                        ? 'bg-emerald-500'
                        : user.status === 'Inactive'
                        ? 'bg-stone-400'
                        : 'bg-amber-500'
                    }`} />
                    <span className={`text-sm ${
                      user.status === 'Active'
                        ? 'text-emerald-700'
                        : user.status === 'Inactive'
                        ? 'text-stone-500'
                        : 'text-amber-700'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-4 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm mr-2">
                    Edit
                  </button>
                  <button className="px-4 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-lg hover:bg-emerald-200 transition-colors">
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
