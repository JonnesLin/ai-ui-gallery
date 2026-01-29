export default function SketchTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ]

  return (
    <div className="min-h-screen p-8 bg-[#fdfbf7]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23e5e0d5' stroke-width='0.5'/%3E%3C/svg%3E")` }}>
      <h2 className="text-xl font-medium text-gray-700 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
        User Management ~
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-2 border-gray-800 rounded-sm" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
          <thead>
            <tr className="border-b-2 border-gray-800 bg-gray-100">
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Name</th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Email</th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Role</th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Status</th>
              <th className="px-5 py-3 text-right text-sm font-semibold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-gray-400 border-dashed transition-colors hover:bg-yellow-50 ${
                  index % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                }`}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 border-2 border-gray-800 bg-white flex items-center justify-center text-gray-700 text-sm font-bold"
                      style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', fontFamily: 'Comic Sans MS, cursive' }}
                    >
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600 underline decoration-wavy decoration-gray-400" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{user.email}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{user.role}</span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium border-2 ${
                      user.status === 'Active'
                        ? 'border-green-600 text-green-700 bg-green-50'
                        : user.status === 'Inactive'
                        ? 'border-gray-500 text-gray-600 bg-gray-50'
                        : 'border-orange-500 text-orange-700 bg-orange-50'
                    }`}
                    style={{ borderRadius: '10px 25px 15px 30px', fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    className="px-3 py-1.5 text-xs font-medium text-blue-700 border-2 border-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors mr-2"
                    style={{ borderRadius: '20px 5px 15px 10px', fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1.5 text-xs font-medium text-red-700 border-2 border-red-500 bg-red-50 hover:bg-red-100 transition-colors"
                    style={{ borderRadius: '5px 20px 10px 15px', fontFamily: 'Comic Sans MS, cursive' }}
                  >
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
