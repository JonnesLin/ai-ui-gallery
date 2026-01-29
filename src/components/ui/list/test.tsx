import { List, ListItem, ListItemIcon, ListItemText, ListItemAction } from './index';
import type { ListVariant, ListSize } from './types';

/**
 * Test file to verify all List components work correctly.
 * Run this in your dev environment to validate the implementation.
 */
export default function ListTest() {
  const variants: ListVariant[] = ['simple', 'bordered', 'divided'];
  const sizes: ListSize[] = ['sm', 'md', 'lg'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">List Component Tests</h1>

        {/* Test all variants */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={variant}>
                <h3 className="text-lg font-medium mb-2 text-gray-700">Variant: {variant}</h3>
                <List theme="minimalist" variant={variant} hoverable>
                  <ListItem className="px-4 py-3 hover:bg-white">Item 1</ListItem>
                  <ListItem className="px-4 py-3 hover:bg-white">Item 2</ListItem>
                  <ListItem className="px-4 py-3 hover:bg-white">Item 3</ListItem>
                </List>
              </div>
            ))}
          </div>
        </section>

        {/* Test all sizes */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <div className="space-y-6">
            {sizes.map((size) => (
              <div key={size}>
                <h3 className="text-lg font-medium mb-2 text-gray-700">Size: {size}</h3>
                <List theme="minimalist" variant="simple" size={size}>
                  <ListItem className="px-4 py-2 bg-white rounded">Item 1</ListItem>
                  <ListItem className="px-4 py-2 bg-white rounded">Item 2</ListItem>
                  <ListItem className="px-4 py-2 bg-white rounded">Item 3</ListItem>
                </List>
              </div>
            ))}
          </div>
        </section>

        {/* Test composition */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Composition</h2>
          <List theme="minimalist" variant="bordered" className="bg-white border-gray-200">
            <ListItem className="px-4 py-3 border-b border-gray-100">
              <ListItemIcon className="text-2xl">📝</ListItemIcon>
              <ListItemText primary="With Icon and Text" secondary="Testing composition" />
            </ListItem>
            <ListItem className="px-4 py-3 border-b border-gray-100 justify-between">
              <span>With Action</span>
              <ListItemAction>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Click</button>
              </ListItemAction>
            </ListItem>
            <ListItem className="px-4 py-3">
              <ListItemIcon className="text-2xl">⚡</ListItemIcon>
              <ListItemText primary="Complete Example" secondary="All parts together" />
              <ListItemAction>
                <button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900">Edit</button>
              </ListItemAction>
            </ListItem>
          </List>
        </section>

        {/* Test with dark theme */}
        <section className="bg-gray-950 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white">Dark Theme</h2>
          <List theme="dark" variant="bordered" className="bg-gray-900 border-gray-800">
            <ListItem className="px-4 py-3 border-b border-gray-800">
              <ListItemIcon className="text-2xl">🌙</ListItemIcon>
              <ListItemText primary="Dark Mode Item" secondary="Testing dark theme" className="text-gray-100" />
            </ListItem>
            <ListItem className="px-4 py-3">
              <ListItemIcon className="text-2xl">✨</ListItemIcon>
              <ListItemText primary="Another Item" secondary="Looks great" className="text-gray-100" />
            </ListItem>
          </List>
        </section>

        {/* Test error handling */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <p className="text-sm text-yellow-800">
              Try using an invalid theme name to test error handling:
              <br />
              <code className="bg-yellow-100 px-2 py-1 rounded mt-2 inline-block">
                {`<List theme="invalid" />`}
              </code>
              <br />
              Should throw: "Theme 'invalid' not found"
            </p>
          </div>
        </section>

        {/* Test clickable items */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Items</h2>
          <List theme="minimalist" variant="divided" hoverable className="divide-gray-200">
            <ListItem
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
              onClick={() => alert('Item 1 clicked')}
            >
              Clickable Item 1
            </ListItem>
            <ListItem
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
              onClick={() => alert('Item 2 clicked')}
            >
              Clickable Item 2
            </ListItem>
          </List>
        </section>
      </div>
    </div>
  );
}
