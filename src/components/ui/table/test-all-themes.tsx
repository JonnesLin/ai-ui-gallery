import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './index';
import type { ThemeName } from '../_themes/types';

export default function TestAllThemes() {
  const themes: ThemeName[] = [
    'minimalist',
    'dark',
    'glassmorphism',
    'neumorphism',
    'flat',
    'gradient',
    'material',
    'luxury',
  ];

  const sampleData = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Wilson', role: 'Manager', status: 'Inactive' },
  ];

  return (
    <div className="p-8 bg-gray-50 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900">Table Component - All Themes</h1>

      {themes.map((theme) => {
        const isDark = ['dark', 'luxury'].includes(theme);
        const isGlass = theme === 'glassmorphism';

        return (
          <div key={theme} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 capitalize">{theme} Theme</h2>

            <div
              className={`p-6 rounded-lg ${
                isDark
                  ? 'bg-gray-900'
                  : isGlass
                  ? 'bg-gradient-to-br from-purple-400 to-blue-500'
                  : 'bg-white'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Simple Variant
                  </h3>
                  <Table theme={theme} variant="simple" size="sm">
                    <TableHeader>
                      <TableRow>
                        <TableCell header>Name</TableCell>
                        <TableCell header>Role</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleData.slice(0, 2).map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.role}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Striped Variant
                  </h3>
                  <Table theme={theme} variant="striped" size="sm">
                    <TableHeader>
                      <TableRow>
                        <TableCell header>Name</TableCell>
                        <TableCell header>Role</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleData.slice(0, 2).map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.role}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Bordered Variant
                  </h3>
                  <Table theme={theme} variant="bordered" size="sm">
                    <TableHeader>
                      <TableRow>
                        <TableCell header>Name</TableCell>
                        <TableCell header>Role</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleData.slice(0, 2).map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.role}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div>
                <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Example (Medium Size)
                </h3>
                <Table theme={theme} variant="simple" size="md" hoverable>
                  <TableHeader>
                    <TableRow>
                      <TableCell header>Name</TableCell>
                      <TableCell header>Role</TableCell>
                      <TableCell header>Status</TableCell>
                      <TableCell header align="right">Actions</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell align="right">
                          <button className="text-sm underline">Edit</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
