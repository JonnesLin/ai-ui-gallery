import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './index';
import type { ThemeName } from '../_themes/types';
import type { TableVariant, TableSize } from './types';

export default function TableDemo() {
  const [theme, setTheme] = useState<ThemeName>('minimalist');
  const [variant, setVariant] = useState<TableVariant>('simple');
  const [size, setSize] = useState<TableSize>('md');
  const [hoverable, setHoverable] = useState(true);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [loading, setLoading] = useState(false);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ];

  const themes: ThemeName[] = ['minimalist', 'dark', 'glassmorphism', 'neumorphism', 'flat'];
  const variants: TableVariant[] = ['simple', 'striped', 'bordered'];
  const sizes: TableSize[] = ['sm', 'md', 'lg'];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Table Component System</h1>
          <p className="text-gray-600">Composable table components with theme support</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeName)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {themes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as TableVariant)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {variants.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as TableSize)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hoverable}
                onChange={(e) => setHoverable(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Hoverable</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={stickyHeader}
                onChange={(e) => setStickyHeader(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Sticky Header</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={loading}
                onChange={(e) => setLoading(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Loading</span>
            </label>
          </div>
        </div>

        <div className={theme === 'dark' ? 'bg-gray-900 p-6 rounded-lg' : 'bg-white p-6 rounded-lg shadow-sm'}>
          <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            User Management
          </h2>

          <Table
            theme={theme}
            variant={variant}
            size={size}
            hoverable={hoverable}
            stickyHeader={stickyHeader}
            loading={loading}
          >
            <TableHeader>
              <TableRow>
                <TableCell header>Name</TableCell>
                <TableCell header>Email</TableCell>
                <TableCell header>Role</TableCell>
                <TableCell header>Status</TableCell>
                <TableCell header align="right">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell align="right">
                    <button className="text-sm text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Code Example</h2>
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm">
            <code>{`<Table
  theme="${theme}"
  variant="${variant}"
  size="${size}"
  hoverable={${hoverable}}
  stickyHeader={${stickyHeader}}
  loading={${loading}}
>
  <TableHeader>
    <TableRow>
      <TableCell header>Name</TableCell>
      <TableCell header>Email</TableCell>
      <TableCell header>Role</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
