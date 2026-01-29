export default function BrutalistList() {
  const items = [
    { id: 1, title: 'CONCRETE FOUNDATIONS', tag: 'ESSENTIAL', icon: '█' },
    { id: 2, title: 'RAW MATERIALS', tag: 'BASIC', icon: '▓' },
    { id: 3, title: 'STRUCTURAL DESIGN', tag: 'CORE', icon: '▒' },
    { id: 4, title: 'BOLD STATEMENTS', tag: 'CRITICAL', icon: '░' },
  ];

  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heavy Border List */}
        <section>
          <h2 className="text-4xl font-black mb-6 uppercase border-8 border-black bg-white p-4 inline-block">
            PRIMARY LIST
          </h2>
          <ul className="border-8 border-black bg-white">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`p-6 ${idx !== items.length - 1 ? 'border-b-8 border-black' : ''} hover:bg-yellow-400 transition-colors cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black">{item.icon}</span>
                    <span className="text-2xl font-black uppercase">{item.title}</span>
                  </div>
                  <span className="bg-black text-white px-4 py-2 font-black text-sm">
                    {item.tag}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Stacked Cards */}
        <section>
          <h2 className="text-4xl font-black mb-6 uppercase">FEATURED</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="border-8 border-black bg-white p-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-lg font-bold uppercase">{item.tag}</p>
                  </div>
                  <div className="w-16 h-16 border-4 border-black bg-yellow-400 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Bold List */}
        <section>
          <div className="border-8 border-black bg-white p-6">
            <h3 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-4">
              STRUCTURE
            </h3>
            <ul className="space-y-4">
              <li className="border-4 border-black bg-yellow-400 p-4">
                <div className="text-xl font-black mb-3 uppercase">MAIN CATEGORY</div>
                <ul className="space-y-2 border-l-8 border-black pl-4 ml-2">
                  <li className="text-lg font-bold hover:bg-white transition-colors cursor-pointer p-2">
                    SUB-ITEM ONE
                  </li>
                  <li className="text-lg font-bold hover:bg-white transition-colors cursor-pointer p-2">
                    SUB-ITEM TWO
                  </li>
                  <li className="text-lg font-bold hover:bg-white transition-colors cursor-pointer p-2">
                    SUB-ITEM THREE
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Checkbox List */}
        <section>
          <h2 className="text-4xl font-black mb-6 uppercase">TASKS</h2>
          <ul className="border-8 border-black bg-white p-6 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4 cursor-pointer group">
                <div className="w-8 h-8 border-4 border-black bg-white group-hover:bg-black transition-colors" />
                <span className="text-xl font-black uppercase group-hover:underline">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Action List */}
        <section>
          <ul className="space-y-0">
            {items.slice(0, 3).map((item, idx) => (
              <li
                key={item.id}
                className={`border-8 ${idx === 0 ? '' : 'border-t-0'} border-black bg-white p-6 hover:bg-black hover:text-white transition-colors cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black">{item.icon}</span>
                    <span className="text-xl font-black uppercase">{item.title}</span>
                  </div>
                  <button className="border-4 border-black bg-yellow-400 group-hover:bg-white px-6 py-2 font-black text-sm transition-colors">
                    ACTION
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
