import { List, ListItem, ListItemIcon, ListItemText, ListItemAction } from './index';

export default function DarkList() {
  const items = [
    { id: 1, title: 'Neural Network Training', status: 'active', progress: 87, icon: '🧠' },
    { id: 2, title: 'Data Processing Pipeline', status: 'queued', progress: 0, icon: '⚙️' },
    { id: 3, title: 'Model Optimization', status: 'completed', progress: 100, icon: '✅' },
    { id: 4, title: 'Performance Testing', status: 'active', progress: 45, icon: '📈' },
  ];

  const users = [
    { id: 1, name: 'Alex Morgan', role: 'Lead Developer', avatar: '👨‍💻', online: true },
    { id: 2, name: 'Sarah Chen', role: 'UI Designer', avatar: '👩‍🎨', online: true },
    { id: 3, name: 'Mike Johnson', role: 'DevOps Engineer', avatar: '👨‍🔧', online: false },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Modern Dark List with Progress */}
        <section>
          <h2 className="text-gray-100 font-bold mb-4 text-lg">Active Processes</h2>
          <List theme="dark" variant="bordered" className="bg-gray-900 border-gray-800 rounded-xl overflow-hidden">
            {items.map((item, idx) => (
              <ListItem
                key={item.id}
                className={`px-5 py-4 hover:bg-gray-800/50 flex-col items-start ${
                  idx !== items.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-3 w-full">
                  <ListItemIcon className="text-2xl">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} secondary={item.status} className="text-gray-100" />
                  <span className="text-gray-400 text-sm font-mono flex-shrink-0">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </section>

        {/* User List with Avatars */}
        <section>
          <h2 className="text-gray-100 font-bold mb-4 text-lg">Team Members</h2>
          <List theme="dark" variant="simple" size="md" hoverable>
            {users.map((user) => (
              <ListItem
                key={user.id}
                className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 hover:bg-gray-850"
              >
                <ListItemIcon>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl border-2 border-gray-700">
                      {user.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
                        user.online ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText primary={user.name} secondary={user.role} className="text-gray-100" />
                <ListItemAction>
                  <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors border border-gray-700">
                    Message
                  </button>
                </ListItemAction>
              </ListItem>
            ))}
          </List>
        </section>

        {/* Nested Dark List */}
        <section>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <h3 className="text-gray-100 font-bold mb-4">Project Structure</h3>
            <List theme="dark" variant="simple" size="lg">
              <ListItem className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 flex-col items-start">
                <div className="text-gray-100 font-medium mb-3 flex items-center gap-2">
                  <span>📁</span> Source Files
                </div>
                <ul className="space-y-2 pl-6 border-l-2 border-gray-700 w-full">
                  <li className="text-gray-400 text-sm hover:text-gray-200 transition-colors cursor-pointer">
                    components/
                  </li>
                  <li className="text-gray-400 text-sm hover:text-gray-200 transition-colors cursor-pointer">
                    utils/
                  </li>
                  <li className="text-gray-400 text-sm hover:text-gray-200 transition-colors cursor-pointer">
                    assets/
                  </li>
                </ul>
              </ListItem>
            </List>
          </div>
        </section>

        {/* Action List */}
        <section>
          <h2 className="text-gray-100 font-bold mb-4 text-lg">Quick Actions</h2>
          <List theme="dark" variant="bordered" className="bg-gray-900 border-gray-800 rounded-xl overflow-hidden">
            {items.slice(0, 3).map((item, idx) => (
              <ListItem
                key={item.id}
                className={`px-5 py-4 hover:bg-gray-800/50 group justify-between ${
                  idx !== items.length - 4 ? 'border-b border-gray-800' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <ListItemIcon className="text-xl">{item.icon}</ListItemIcon>
                  <span className="text-gray-100">{item.title}</span>
                </div>
                <ListItemAction className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-gray-400 hover:text-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </ListItemAction>
              </ListItem>
            ))}
          </List>
        </section>
      </div>
    </div>
  );
}
