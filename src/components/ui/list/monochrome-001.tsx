export default function MonochromeList() {
  const items = [
    { id: 1, title: 'System Architecture Review', time: '08:00', status: 'completed', priority: 'high' },
    { id: 2, title: 'Code Quality Audit', time: '10:30', status: 'in-progress', priority: 'high' },
    { id: 3, title: 'Documentation Update', time: '14:00', status: 'pending', priority: 'medium' },
    { id: 4, title: 'Performance Testing', time: '16:00', status: 'scheduled', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Black and White List */}
        <section>
          <h2 className="text-black font-bold mb-4 text-2xl uppercase tracking-wider border-b-4 border-black pb-2">
            Task Queue
          </h2>
          <ul className="border-4 border-black bg-white">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="px-6 py-5 border-b-4 border-black last:border-b-0 hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-4 border-black bg-white group-hover:bg-white group-hover:text-black flex items-center justify-center font-mono font-bold text-lg">
                    {String(item.id).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm font-mono opacity-60 group-hover:opacity-80">{item.time}</p>
                  </div>
                  <span
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-4 border-black ${
                      item.status === 'completed'
                        ? 'bg-black text-white'
                        : item.status === 'in-progress'
                        ? 'bg-gray-300 text-black'
                        : 'bg-white text-black'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Grayscale Cards */}
        <section>
          <h2 className="text-black font-bold mb-4 text-2xl uppercase tracking-wider">Priority Items</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-black text-white group-hover:bg-white group-hover:text-black border-4 border-black font-mono font-bold flex items-center justify-center text-2xl transition-all">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 uppercase tracking-wide">{item.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono opacity-60 group-hover:opacity-80">{item.time}</span>
                        <span className="text-xs font-bold uppercase tracking-wider">{item.priority}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-12 h-12 border-4 border-black bg-white text-black group-hover:bg-white group-hover:text-black font-bold text-xl">
                    →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Monochrome List */}
        <section>
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-black font-bold mb-6 text-xl uppercase tracking-wider border-b-2 border-black pb-3">
              Project Modules
            </h3>
            <ul className="space-y-5">
              <li className="border-l-8 border-black pl-5 bg-gray-100 p-4">
                <div className="font-bold mb-4 uppercase tracking-wide text-lg">Core Systems</div>
                <ul className="space-y-3">
                  <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-3">
                    <span className="w-3 h-3 bg-black"></span>
                    <span className="font-mono">Authentication Module</span>
                  </li>
                  <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-3">
                    <span className="w-3 h-3 bg-black"></span>
                    <span className="font-mono">Database Layer</span>
                  </li>
                  <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-3">
                    <span className="w-3 h-3 bg-black"></span>
                    <span className="font-mono">API Gateway</span>
                  </li>
                </ul>
              </li>
              <li className="border-l-8 border-gray-600 pl-5 bg-gray-50 p-4">
                <div className="font-bold mb-4 uppercase tracking-wide text-lg text-gray-800">User Interface</div>
                <ul className="space-y-3">
                  <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-gray-600"></span>
                    <span className="font-mono">Component Library</span>
                  </li>
                  <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-gray-600"></span>
                    <span className="font-mono">Design Tokens</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Ordered Monochrome Steps */}
        <section>
          <h2 className="text-black font-bold mb-4 text-2xl uppercase tracking-wider">Build Process</h2>
          <ol className="border-4 border-black bg-white">
            {['Compile Source', 'Run Tests', 'Bundle Assets', 'Deploy Build'].map((step, idx) => (
              <li
                key={idx}
                className="p-6 border-b-4 border-black last:border-b-0 hover:bg-gray-100 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-black text-white font-bold flex items-center justify-center text-2xl">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-lg uppercase tracking-wider flex-1">{step}</span>
                  <div className="flex-1 h-1 bg-black"></div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Striped List */}
        <section>
          <h2 className="text-black font-bold mb-4 text-2xl uppercase tracking-wider">System Logs</h2>
          <ul className="border-4 border-black">
            {[
              { msg: 'Application started successfully', level: 'info', time: '08:00:01' },
              { msg: 'Database connection established', level: 'info', time: '08:00:02' },
              { msg: 'Warning: High memory usage detected', level: 'warning', time: '08:15:30' },
              { msg: 'Cache cleared successfully', level: 'info', time: '08:30:45' },
            ].map((log, idx) => (
              <li
                key={idx}
                className={`px-6 py-4 border-b-2 border-black last:border-b-0 font-mono text-sm ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                } ${log.level === 'warning' ? 'bg-gray-300 font-bold' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-black"></span>
                    <span>{log.msg}</span>
                  </div>
                  <span className="opacity-60">{log.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Minimalist Member List */}
        <section>
          <h2 className="text-black font-bold mb-4 text-2xl uppercase tracking-wider">Contributors</h2>
          <ul className="border-4 border-black bg-white">
            {[
              { name: 'John Smith', role: 'Lead Developer', commits: 247 },
              { name: 'Jane Doe', role: 'Senior Engineer', commits: 189 },
              { name: 'Bob Wilson', role: 'Developer', commits: 95 },
            ].map((member, idx) => (
              <li
                key={idx}
                className="px-6 py-5 border-b-4 border-black last:border-b-0 hover:bg-black hover:text-white transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 border-4 border-black bg-white group-hover:bg-white group-hover:text-black font-bold flex items-center justify-center text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg uppercase tracking-wide">{member.name}</h3>
                      <p className="text-sm font-mono opacity-60 group-hover:opacity-80 mt-1">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold">{member.commits}</div>
                      <div className="text-xs uppercase tracking-wider opacity-60 group-hover:opacity-80">Commits</div>
                    </div>
                    <button className="px-6 py-3 border-4 border-black bg-white text-black group-hover:bg-white group-hover:text-black font-bold uppercase tracking-wider hover:translate-x-1 transition-transform">
                      View
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
