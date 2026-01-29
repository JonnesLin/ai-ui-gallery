export default function LuxuryTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
      <h2 className="text-sm font-light text-amber-200/80 uppercase tracking-[0.4em] mb-8">User Management</h2>

      <div className="overflow-x-auto">
        <div className="p-[1px] rounded-sm bg-gradient-to-r from-amber-700/50 via-amber-400/50 to-amber-700/50">
          <table className="w-full min-w-[640px] bg-stone-950">
            <thead>
              <tr className="border-b border-amber-700/30">
                <th className="px-8 py-5 text-left text-[10px] font-medium text-amber-300/70 uppercase tracking-[0.3em]">Name</th>
                <th className="px-8 py-5 text-left text-[10px] font-medium text-amber-300/70 uppercase tracking-[0.3em]">Email</th>
                <th className="px-8 py-5 text-left text-[10px] font-medium text-amber-300/70 uppercase tracking-[0.3em]">Role</th>
                <th className="px-8 py-5 text-left text-[10px] font-medium text-amber-300/70 uppercase tracking-[0.3em]">Status</th>
                <th className="px-8 py-5 text-right text-[10px] font-medium text-amber-300/70 uppercase tracking-[0.3em]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-b border-amber-900/20 transition-all duration-500 hover:bg-amber-950/30 ${
                    index % 2 === 1 ? 'bg-stone-900/30' : ''
                  }`}
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-stone-950 text-xs font-semibold ring-1 ring-amber-500/30">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-light text-stone-200 tracking-wide">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-light text-stone-500 tracking-wide">{user.email}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-light text-amber-200/70 tracking-wide">{user.role}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] border ${
                      user.status === 'Active'
                        ? 'border-emerald-700/50 text-emerald-400/80 bg-emerald-950/30'
                        : user.status === 'Inactive'
                        ? 'border-stone-700/50 text-stone-500 bg-stone-900/30'
                        : 'border-amber-700/50 text-amber-400/80 bg-amber-950/30'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-amber-200/80 border border-amber-700/40 hover:bg-amber-900/30 hover:border-amber-600/50 transition-all duration-300 mr-3">
                      Edit
                    </button>
                    <button className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-stone-400 border border-stone-700/40 hover:bg-red-950/30 hover:border-red-800/50 hover:text-red-400/80 transition-all duration-300">
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
