import { List, ListItem, ListItemIcon, ListItemText, ListItemAction } from './index';

export default function MinimalistList() {
  const items = [
    { id: 1, title: 'Clean Design Principles', description: 'Focus on essential elements only', icon: '📐' },
    { id: 2, title: 'Typography Matters', description: 'Clear hierarchy and readability', icon: '✍️' },
    { id: 3, title: 'White Space Usage', description: 'Let content breathe naturally', icon: '⬜' },
    { id: 4, title: 'Subtle Interactions', description: 'Minimal but meaningful feedback', icon: '✨' },
  ];

  const nestedItems = [
    {
      id: 1,
      title: 'Design System',
      children: ['Colors', 'Typography', 'Spacing', 'Components'],
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Simple List */}
        <section>
          <h2 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
            Simple List
          </h2>
          <List theme="minimalist" variant="divided" size="sm" hoverable>
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-gray-50 text-gray-900">
                {item.title}
              </ListItem>
            ))}
          </List>
        </section>

        {/* List with Icons */}
        <section>
          <h2 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
            With Icons
          </h2>
          <List theme="minimalist" variant="simple" size="sm" hoverable>
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-gray-50 rounded">
                <ListItemIcon className="text-xl">{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} secondary={item.description} className="text-gray-900" />
              </ListItem>
            ))}
          </List>
        </section>

        {/* Nested List */}
        <section>
          <h2 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
            Nested List
          </h2>
          <List theme="minimalist" variant="bordered" className="border-gray-200">
            {nestedItems.map((item) => (
              <ListItem key={item.id} className="p-4 flex-col items-start">
                <h3 className="text-gray-900 font-medium mb-3">{item.title}</h3>
                <ul className="space-y-2 pl-4 border-l border-gray-200 w-full">
                  {item.children.map((child, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              </ListItem>
            ))}
          </List>
        </section>

        {/* List with Actions */}
        <section>
          <h2 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">
            With Actions
          </h2>
          <List theme="minimalist" variant="divided" hoverable>
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-gray-50 group justify-between">
                <span className="text-gray-900">{item.title}</span>
                <ListItemAction>
                  <button className="text-xs text-gray-400 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
                    Edit
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
