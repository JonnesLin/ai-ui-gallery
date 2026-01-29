export default function NeumorphismList() {
  const items = [
    { id: 1, title: 'Dashboard Overview', count: 24, icon: '📊' },
    { id: 2, title: 'User Analytics', count: 156, icon: '👤' },
    { id: 3, title: 'Revenue Reports', count: 89, icon: '💰' },
    { id: 4, title: 'Team Performance', count: 42, icon: '🎯' },
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Soft UI List */}
        <section>
          <h2 className="text-gray-700 font-bold mb-6 text-xl px-2">Statistics</h2>
          <ul className="bg-gray-200 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-6 space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] p-5 hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.count} items</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pressed List */}
        <section>
          <h2 className="text-gray-700 font-bold mb-6 text-xl px-2">Quick Actions</h2>
          <ul className="space-y-3">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 rounded-2xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] p-5 hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-800 font-medium">{item.title}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{item.count}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Soft UI */}
        <section>
          <div className="bg-gray-200 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] p-6">
            <h3 className="text-gray-700 font-bold mb-4 text-lg">Menu Items</h3>
            <ul className="space-y-3">
              <li className="bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] p-4">
                <div className="text-gray-800 font-semibold mb-3">Settings</div>
                <ul className="space-y-2 pl-4">
                  <li className="text-gray-600 text-sm hover:text-gray-800 transition-colors cursor-pointer py-1">
                    Profile Settings
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-800 transition-colors cursor-pointer py-1">
                    Privacy Options
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-800 transition-colors cursor-pointer py-1">
                    Notifications
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Checkbox List */}
        <section>
          <h2 className="text-gray-700 font-bold mb-6 text-xl px-2">Tasks</h2>
          <ul className="bg-gray-200 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] p-6 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 cursor-pointer group">
                <div className="w-6 h-6 rounded-lg bg-gray-200 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all" />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
