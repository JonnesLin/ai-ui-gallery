export default function FlatList() {
  const items = [
    { id: 1, title: 'Product Launch Meeting', time: '9:00 AM', status: 'completed', icon: '🚀', color: 'blue' },
    { id: 2, title: 'Marketing Review', time: '11:30 AM', status: 'upcoming', icon: '📊', color: 'green' },
    { id: 3, title: 'Design Workshop', time: '2:00 PM', status: 'upcoming', icon: '🎨', color: 'purple' },
    { id: 4, title: 'Team Dinner', time: '7:00 PM', status: 'pending', icon: '🍽️', color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Simple Flat List */}
        <section>
          <h2 className="text-gray-800 font-bold mb-4 text-xl">Daily Schedule</h2>
          <ul className="bg-white rounded-none overflow-hidden">
            {items.map((item) => (
              <li
                key={item.id}
                className="px-6 py-4 border-b-2 border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-${item.color}-500 flex items-center justify-center text-2xl`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.time}</p>
                  </div>
                  <span
                    className={`px-4 py-1.5 text-xs font-bold uppercase ${
                      item.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : item.status === 'upcoming'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Flat Color Blocks */}
        <section>
          <h2 className="text-gray-800 font-bold mb-4 text-xl">Priority Tasks</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="bg-white p-6 border-l-8 border-blue-500 hover:border-purple-500 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.time}</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Flat List */}
        <section>
          <div className="bg-white p-6">
            <h3 className="text-gray-800 font-bold mb-6 text-lg">Project Categories</h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-green-500 pl-4">
                <div className="text-gray-800 font-semibold mb-3">Active Projects</div>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-green-500 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 block"></span>
                    Website Redesign
                  </li>
                  <li className="text-gray-600 hover:text-green-500 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 block"></span>
                    Mobile App Development
                  </li>
                  <li className="text-gray-600 hover:text-green-500 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 block"></span>
                    Marketing Campaign
                  </li>
                </ul>
              </li>
              <li className="border-l-4 border-orange-500 pl-4">
                <div className="text-gray-800 font-semibold mb-3">Pending Projects</div>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 block"></span>
                    Brand Strategy
                  </li>
                  <li className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 block"></span>
                    User Research
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Ordered List */}
        <section>
          <h2 className="text-gray-800 font-bold mb-4 text-xl">Steps to Success</h2>
          <ol className="bg-white">
            {['Define Goals', 'Create Strategy', 'Execute Plan', 'Monitor Results'].map((step, idx) => (
              <li key={idx} className="p-5 border-b-2 border-gray-200 last:border-b-0 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center text-lg">
                    {idx + 1}
                  </div>
                  <span className="text-gray-800 font-semibold">{step}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* List with Actions */}
        <section>
          <h2 className="text-gray-800 font-bold mb-4 text-xl">Team Members</h2>
          <ul className="bg-white">
            {[
              { name: 'Sarah Johnson', role: 'Product Manager', status: 'active' },
              { name: 'Mike Chen', role: 'Lead Designer', status: 'active' },
              { name: 'Emma Davis', role: 'Developer', status: 'inactive' },
            ].map((member, idx) => (
              <li
                key={idx}
                className="px-6 py-4 border-b-2 border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 text-white font-bold flex items-center justify-center text-lg">
                      {member.name[0]}
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">{member.name}</h3>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                      Edit
                    </button>
                    <button
                      className={`px-4 py-2 font-semibold ${
                        member.status === 'active'
                          ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          : 'bg-gray-200 text-gray-400'
                      } transition-colors`}
                      disabled={member.status === 'inactive'}
                    >
                      {member.status === 'active' ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
