export default function CorporateTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">User Management</h2>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Total Users:</span>
          <span className="font-semibold text-slate-800">{users.length}</span>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-slate-200">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors duration-150 hover:bg-blue-50 ${
                  index % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block">{user.name}</span>
                      <span className="text-xs text-slate-400">ID: {user.id.toString().padStart(4, '0')}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded ${
                    user.role === 'Admin'
                      ? 'bg-blue-100 text-blue-700'
                      : user.role === 'Editor'
                      ? 'bg-slate-100 text-slate-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-500'
                        : user.status === 'Inactive'
                        ? 'bg-gray-400'
                        : 'bg-yellow-500'
                    }`} />
                    <span className="text-sm text-slate-600">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-700 rounded hover:bg-slate-800 transition-colors mr-2">
                    Edit
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-50 border-t border-slate-200">
              <td colSpan={5} className="px-6 py-3">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Showing {users.length} of {users.length} entries</span>
                  <div className="flex gap-1">
                    <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white">Prev</button>
                    <button className="px-3 py-1 rounded bg-slate-800 text-white">1</button>
                    <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white">Next</button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
