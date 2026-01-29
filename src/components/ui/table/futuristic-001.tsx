export default function FuturisticTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />

      <h2 className="text-xs font-medium text-sky-400 uppercase tracking-[0.5em] mb-8 relative flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
        User Management
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      </h2>

      <div className="overflow-x-auto relative">
        <table className="w-full min-w-[640px] relative">
          <thead>
            <tr className="bg-sky-950/30 border-y border-sky-500/20">
              <th className="px-6 py-4 text-left text-[10px] font-semibold text-sky-300 uppercase tracking-[0.2em]">Name</th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold text-sky-300 uppercase tracking-[0.2em]">Email</th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold text-sky-300 uppercase tracking-[0.2em]">Role</th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold text-sky-300 uppercase tracking-[0.2em]">Status</th>
              <th className="px-6 py-4 text-right text-[10px] font-semibold text-sky-300 uppercase tracking-[0.2em]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-sky-500/10 transition-all duration-300 hover:bg-sky-500/5 group ${
                  index % 2 === 1 ? 'bg-sky-950/10' : ''
                }`}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 relative">
                      <div className="absolute inset-0 bg-sky-500/20 rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                      <div className="absolute inset-1 bg-slate-900 rounded-lg rotate-45 flex items-center justify-center">
                        <span className="text-sky-400 text-xs font-bold -rotate-45">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-white font-light tracking-wide">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-slate-500 font-light tracking-wide">{user.email}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-sky-300/80 font-light tracking-wide">{user.role}</span>
                </td>
                <td className="px-6 py-5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-medium uppercase tracking-wider ${
                    user.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : user.status === 'Inactive'
                      ? 'bg-slate-500/10 text-slate-400 border border-slate-500/30'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      user.status === 'Active' ? 'bg-emerald-400 animate-pulse' :
                      user.status === 'Inactive' ? 'bg-slate-400' : 'bg-amber-400 animate-pulse'
                    }`} />
                    {user.status}
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-sky-400 border border-sky-500/30 rounded hover:bg-sky-500/10 hover:border-sky-400/50 transition-all mr-2 group/btn">
                    <span className="group-hover/btn:animate-pulse">Edit</span>
                  </button>
                  <button className="px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-rose-400 border border-rose-500/30 rounded hover:bg-rose-500/10 hover:border-rose-400/50 transition-all">
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
