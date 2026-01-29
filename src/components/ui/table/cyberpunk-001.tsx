export default function CyberpunkTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-[0.3em] mb-6 relative">
        <span className="text-pink-500">&gt;</span> USER_MANAGEMENT <span className="animate-pulse">_</span>
      </h2>

      <div className="overflow-x-auto relative">
        <div className="relative">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 opacity-50 blur-sm pointer-events-none" />
          <table className="w-full min-w-[640px] border border-cyan-500/50 relative">
            <thead className="relative">
            <tr className="bg-black border-b border-cyan-500/50">
              <th className="px-5 py-3 text-left text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">// Name</th>
              <th className="px-5 py-3 text-left text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">// Email</th>
              <th className="px-5 py-3 text-left text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">// Role</th>
              <th className="px-5 py-3 text-left text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">// Status</th>
              <th className="px-5 py-3 text-right text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">// Actions</th>
            </tr>
          </thead>
          <tbody className="relative bg-black/90">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-cyan-500/20 transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[inset_0_0_30px_rgba(0,255,255,0.1)] ${
                  index % 2 === 1 ? 'bg-cyan-500/[0.02]' : ''
                }`}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-pink-500 clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                      <div className="absolute inset-[2px] bg-black flex items-center justify-center text-cyan-400 text-xs font-mono font-bold" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <span className="text-sm font-mono text-cyan-100">{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-mono text-gray-500">{user.email}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-mono text-pink-400">{user.role}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider border ${
                    user.status === 'Active'
                      ? 'border-green-500 text-green-400 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                      : user.status === 'Inactive'
                      ? 'border-gray-600 text-gray-500 bg-gray-500/10'
                      : 'border-yellow-500 text-yellow-400 bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.3)]'
                  }`}>
                    [{user.status}]
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="px-3 py-1 text-xs font-mono font-bold uppercase text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black transition-all mr-2 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                    &lt;EDIT/&gt;
                  </button>
                  <button className="px-3 py-1 text-xs font-mono font-bold uppercase text-pink-400 border border-pink-500/50 hover:bg-pink-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    &lt;DEL/&gt;
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
