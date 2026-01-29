export default function RetroTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-amber-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23d97706" fill-opacity="0.05"%3E%3Ccircle cx="1" cy="1" r="1"/%3E%3C/g%3E%3C/svg%3E")' }}>
      <h2 className="text-lg font-serif font-bold text-amber-900 mb-6 flex items-center gap-2">
        <span className="text-2xl">&#9733;</span>
        User Management
        <span className="text-2xl">&#9733;</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] bg-amber-100 rounded-lg overflow-hidden border-2 border-amber-800 shadow-lg">
          <thead>
            <tr className="bg-gradient-to-b from-amber-700 to-amber-800">
              <th className="px-5 py-3 text-left text-sm font-serif font-bold text-amber-100 tracking-wide">Name</th>
              <th className="px-5 py-3 text-left text-sm font-serif font-bold text-amber-100 tracking-wide">Email</th>
              <th className="px-5 py-3 text-left text-sm font-serif font-bold text-amber-100 tracking-wide">Role</th>
              <th className="px-5 py-3 text-left text-sm font-serif font-bold text-amber-100 tracking-wide">Status</th>
              <th className="px-5 py-3 text-right text-sm font-serif font-bold text-amber-100 tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-300">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors hover:bg-amber-200/50 ${
                  index % 2 === 1 ? 'bg-amber-50' : 'bg-amber-100'
                }`}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-600 to-amber-800 flex items-center justify-center text-amber-100 text-xs font-serif font-bold border-2 border-amber-900 shadow-inner">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-serif font-semibold text-amber-900">{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-serif text-amber-700 italic">{user.email}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-serif font-medium text-amber-800">{user.role}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 text-xs font-serif font-bold rounded-full border ${
                    user.status === 'Active'
                      ? 'bg-green-200 border-green-700 text-green-800'
                      : user.status === 'Inactive'
                      ? 'bg-gray-200 border-gray-600 text-gray-700'
                      : 'bg-orange-200 border-orange-600 text-orange-800'
                  }`}>
                    &#10003; {user.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="px-3 py-1.5 text-xs font-serif font-bold text-amber-100 bg-gradient-to-b from-amber-600 to-amber-700 rounded border border-amber-800 hover:from-amber-500 hover:to-amber-600 transition-all shadow mr-2">
                    Edit
                  </button>
                  <button className="px-3 py-1.5 text-xs font-serif font-bold text-red-100 bg-gradient-to-b from-red-600 to-red-700 rounded border border-red-800 hover:from-red-500 hover:to-red-600 transition-all shadow">
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
