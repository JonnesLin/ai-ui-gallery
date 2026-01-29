export default function MaterialList() {
  const items = [
    { id: 1, title: 'Design System Updates', time: '9:00 AM', status: 'completed', icon: '🎨', avatar: 'DS' },
    { id: 2, title: 'Component Library Review', time: '11:30 AM', status: 'in-progress', icon: '📚', avatar: 'CR' },
    { id: 3, title: 'User Testing Session', time: '2:00 PM', status: 'upcoming', icon: '👥', avatar: 'UT' },
    { id: 4, title: 'Sprint Planning', time: '4:30 PM', status: 'pending', icon: '📋', avatar: 'SP' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Material Elevation List */}
        <section>
          <h2 className="text-gray-800 font-medium mb-4 text-2xl">Today's Activities</h2>
          <ul className="bg-white rounded-lg shadow-md overflow-hidden">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                    {item.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-medium text-base">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : item.status === 'upcoming'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {item.status}
                    </span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Material Cards with Ripple Effect */}
        <section>
          <h2 className="text-gray-800 font-medium mb-4 text-2xl">Quick Actions</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg active:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-3xl shadow-md group-hover:shadow-lg transition-shadow">
                    {item.icon}
                  </div>
                  <div className="text-gray-500 text-sm">{item.time}</div>
                </div>
                <h3 className="text-gray-900 font-medium text-lg mb-2">{item.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-600 text-sm capitalize">{item.status.replace('-', ' ')}</span>
                  <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg transition-all">
                    →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Material List */}
        <section>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-800 font-medium mb-6 text-xl">Project Categories</h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-5 py-3 bg-blue-50/50 rounded-r">
                <div className="text-gray-900 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  Active Projects
                </div>
                <ul className="space-y-2.5 pl-7">
                  <li className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Mobile App Redesign
                  </li>
                  <li className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Dashboard Analytics
                  </li>
                  <li className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Design System V2
                  </li>
                </ul>
              </li>
              <li className="border-l-4 border-orange-500 pl-5 py-3 bg-orange-50/50 rounded-r">
                <div className="text-gray-900 font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  Pending Review
                </div>
                <ul className="space-y-2.5 pl-7">
                  <li className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    User Research Report
                  </li>
                  <li className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-2 py-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Prototype Feedback
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Material Stepper List */}
        <section>
          <h2 className="text-gray-800 font-medium mb-4 text-2xl">Project Timeline</h2>
          <ol className="bg-white rounded-lg shadow-md overflow-hidden">
            {['Discovery Phase', 'Design Iteration', 'Development', 'Testing & Launch'].map((step, idx) => (
              <li
                key={idx}
                className="p-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold flex items-center justify-center rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                    {idx + 1}
                  </div>
                  <span className="text-gray-900 font-medium flex-1">{step}</span>
                  {idx === 0 && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Completed
                    </span>
                  )}
                  {idx === 1 && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      In Progress
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Material List with Actions */}
        <section>
          <h2 className="text-gray-800 font-medium mb-4 text-2xl">Team Members</h2>
          <ul className="bg-white rounded-lg shadow-md">
            {[
              { name: 'Emily Johnson', role: 'Product Designer', email: 'emily@example.com', active: true },
              { name: 'Michael Chen', role: 'UX Researcher', email: 'michael@example.com', active: true },
              { name: 'Sarah Williams', role: 'Design Lead', email: 'sarah@example.com', active: false },
            ].map((member, idx) => (
              <li
                key={idx}
                className="px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white font-semibold flex items-center justify-center text-lg shadow-md">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">{member.name}</h3>
                      <p className="text-gray-600 text-sm mt-0.5">{member.role}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {member.active ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        Inactive
                      </span>
                    )}
                    <button
                      className={`px-5 py-2 rounded shadow-sm transition-all ${
                        member.active
                          ? 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 hover:shadow-md'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!member.active}
                    >
                      Message
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Material Checkbox List */}
        <section>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-800 font-medium mb-6 text-xl">Task Checklist</h3>
            <ul className="space-y-3">
              {[
                { task: 'Review design mockups', completed: true },
                { task: 'Update component library', completed: true },
                { task: 'Conduct user interviews', completed: false },
                { task: 'Create prototype', completed: false },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    item.completed
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-400 group-hover:border-blue-500'
                  }`}>
                    {item.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`flex-1 ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {item.task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
