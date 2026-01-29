export default function CorporateList() {
  const items = [
    { id: 1, title: 'Q4 Financial Report', department: 'Finance', priority: 'High', date: '2024-03-15' },
    { id: 2, title: 'Marketing Strategy Review', department: 'Marketing', priority: 'Medium', date: '2024-03-18' },
    { id: 3, title: 'HR Policy Update', department: 'Human Resources', priority: 'Low', date: '2024-03-20' },
    { id: 4, title: 'IT Infrastructure Audit', department: 'Technology', priority: 'High', date: '2024-03-22' },
  ];

  const employees = [
    { id: 1, name: 'Sarah Johnson', title: 'Chief Executive Officer', initial: 'SJ', status: 'Available' },
    { id: 2, name: 'Michael Chen', title: 'Chief Technology Officer', initial: 'MC', status: 'In Meeting' },
    { id: 3, name: 'Emily Rodriguez', title: 'VP of Operations', initial: 'ER', status: 'Available' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Professional Table List */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-gray-900 font-semibold text-lg">Document Management</h2>
              <p className="text-gray-500 text-sm mt-1">Review and manage corporate documents</p>
            </div>
            <ul>
              {items.map((item, idx) => (
                <li
                  key={item.id}
                  className={`px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    idx !== items.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium">{item.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {item.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.priority === 'High'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : item.priority === 'Medium'
                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                            : 'bg-green-50 text-green-700 border border-green-200'
                        }`}
                      >
                        {item.priority}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Executive List */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 font-semibold text-lg mb-4">Leadership Team</h2>
            <ul className="space-y-4">
              {employees.map((employee) => (
                <li
                  key={employee.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {employee.initial}
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">{employee.name}</h3>
                      <p className="text-gray-500 text-sm">{employee.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          employee.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                      />
                      {employee.status}
                    </span>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Contact
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Nested Department List */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 font-semibold text-lg mb-4">Department Structure</h2>
            <ul className="space-y-3">
              <li className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-900 font-medium mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  Operations Division
                </div>
                <ul className="space-y-2 pl-7 border-l-2 border-gray-200">
                  <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer py-1">
                    Sales Team
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer py-1">
                    Customer Success
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer py-1">
                    Business Development
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Checklist */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 font-semibold text-lg mb-4">Action Items</h2>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
                >
                  <div className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-blue-600 transition-colors" />
                  <span className="text-gray-700 flex-1">{item.title}</span>
                  <span className="text-gray-400 text-sm">{item.department}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Statistics Grid */}
        <section>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-gray-900 font-semibold text-lg mb-4">Key Metrics</h2>
            <ul className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-pointer"
                >
                  <div className="text-gray-500 text-sm mb-1">{item.department}</div>
                  <div className="text-gray-900 text-2xl font-semibold mb-1">
                    {Math.floor(Math.random() * 100)}%
                  </div>
                  <div className="text-gray-600 text-xs">{item.priority} Priority</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
