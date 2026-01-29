import { List, ListItem, ListItemIcon, ListItemText, ListItemAction } from './index';

/**
 * Comprehensive example showcasing all List component variants and usage patterns.
 * This file demonstrates the composition-based API design.
 */
export default function ListExample() {
  const items = [
    { id: 1, title: 'Item One', description: 'First item description', icon: '📝' },
    { id: 2, title: 'Item Two', description: 'Second item description', icon: '🎨' },
    { id: 3, title: 'Item Three', description: 'Third item description', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-gray-900">List Component Examples</h1>

        {/* Simple Variant */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Simple Variant</h2>
          <List theme="minimalist" variant="simple" size="md" hoverable>
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-white rounded">
                {item.title}
              </ListItem>
            ))}
          </List>
        </section>

        {/* Bordered Variant */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Bordered Variant</h2>
          <List theme="minimalist" variant="bordered" className="border-gray-200">
            {items.map((item, idx) => (
              <ListItem
                key={item.id}
                className={`px-4 py-3 ${idx !== items.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </section>

        {/* Divided Variant */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Divided Variant</h2>
          <List theme="minimalist" variant="divided" hoverable className="divide-gray-200">
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-white">
                {item.title}
              </ListItem>
            ))}
          </List>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">With Icons</h2>
          <List theme="minimalist" variant="simple" size="md" hoverable>
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-white rounded">
                <ListItemIcon className="text-2xl">{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} secondary={item.description} />
              </ListItem>
            ))}
          </List>
        </section>

        {/* With Actions */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">With Actions</h2>
          <List theme="minimalist" variant="divided" hoverable className="divide-gray-200">
            {items.map((item) => (
              <ListItem key={item.id} className="px-4 py-3 hover:bg-white group justify-between">
                <div className="flex items-center gap-3">
                  <ListItemIcon className="text-xl">{item.icon}</ListItemIcon>
                  <span className="text-gray-900">{item.title}</span>
                </div>
                <ListItemAction className="flex gap-2">
                  <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-all">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm text-red-600 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-all">
                    Delete
                  </button>
                </ListItemAction>
              </ListItem>
            ))}
          </List>
        </section>

        {/* Dark Theme Example */}
        <section className="bg-gray-950 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Dark Theme</h2>
          <List theme="dark" variant="bordered" className="bg-gray-900 border-gray-800 rounded-lg overflow-hidden">
            {items.map((item, idx) => (
              <ListItem
                key={item.id}
                className={`px-5 py-4 hover:bg-gray-800/50 ${
                  idx !== items.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                <ListItemIcon className="text-2xl">{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} secondary={item.description} className="text-gray-100" />
              </ListItem>
            ))}
          </List>
        </section>

        {/* Different Sizes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Size Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Small</h3>
              <List theme="minimalist" variant="simple" size="sm">
                {items.map((item) => (
                  <ListItem key={item.id} className="px-3 py-2 hover:bg-white rounded">
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Medium</h3>
              <List theme="minimalist" variant="simple" size="md">
                {items.map((item) => (
                  <ListItem key={item.id} className="px-4 py-3 hover:bg-white rounded">
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Large</h3>
              <List theme="minimalist" variant="simple" size="lg">
                {items.map((item) => (
                  <ListItem key={item.id} className="px-5 py-4 hover:bg-white rounded">
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </section>

        {/* Complex Nested Structure */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Complex Structure</h2>
          <List theme="minimalist" variant="bordered" className="border-gray-200">
            <ListItem className="px-4 py-4 flex-col items-start">
              <div className="flex items-center gap-3 w-full mb-3">
                <ListItemIcon className="text-2xl">📁</ListItemIcon>
                <ListItemText primary="Project Files" className="font-semibold" />
              </div>
              <div className="pl-9 space-y-2 w-full">
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">components/</div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">utils/</div>
                <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">types/</div>
              </div>
            </ListItem>
          </List>
        </section>
      </div>
    </div>
  );
}
