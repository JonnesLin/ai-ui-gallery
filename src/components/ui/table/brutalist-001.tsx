export default function BrutalistTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-yellow-300">
      <h2 className="text-lg font-black text-black uppercase tracking-tight mb-6 border-b-4 border-black pb-2 inline-block">USER MANAGEMENT</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-white border-4 border-black">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-3 text-left text-sm font-black uppercase border-r-4 border-white">NAME</th>
              <th className="px-4 py-3 text-left text-sm font-black uppercase border-r-4 border-white">EMAIL</th>
              <th className="px-4 py-3 text-left text-sm font-black uppercase border-r-4 border-white">ROLE</th>
              <th className="px-4 py-3 text-left text-sm font-black uppercase border-r-4 border-white">STATUS</th>
              <th className="px-4 py-3 text-right text-sm font-black uppercase">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b-4 border-black transition-colors hover:bg-yellow-200 ${
                  index % 2 === 1 ? 'bg-gray-100' : 'bg-white'
                }`}
              >
                <td className="px-4 py-4 border-r-4 border-black">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-sm font-black">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-bold text-black">{user.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 border-r-4 border-black">
                  <span className="text-sm font-mono text-black">{user.email}</span>
                </td>
                <td className="px-4 py-4 border-r-4 border-black">
                  <span className="text-sm font-bold uppercase text-black">{user.role}</span>
                </td>
                <td className="px-4 py-4 border-r-4 border-black">
                  <span className={`px-3 py-1 text-xs font-black uppercase border-2 ${
                    user.status === 'Active'
                      ? 'bg-green-400 border-black text-black'
                      : user.status === 'Inactive'
                      ? 'bg-gray-400 border-black text-black'
                      : 'bg-orange-400 border-black text-black'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="px-3 py-1 text-xs font-black uppercase bg-blue-500 text-white border-2 border-black hover:bg-blue-600 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] mr-2">
                    EDIT
                  </button>
                  <button className="px-3 py-1 text-xs font-black uppercase bg-red-500 text-white border-2 border-black hover:bg-red-600 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]">
                    DELETE
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
