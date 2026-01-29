import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from './index';

export default function MinimalistTableRefactored() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Viewer', status: 'Pending' },
    { id: 6, name: 'Diana Ross', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">User Management</h2>

      <Table theme="minimalist" variant="simple" size="md">
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
              <TableCell>
                <span className="text-sm font-light text-gray-900">{user.name}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm font-light text-gray-500">{user.email}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm font-light text-gray-700">{user.role}</span>
              </TableCell>
              <TableCell>
                <span
                  className={`text-xs font-light tracking-wide ${
                    user.status === 'Active'
                      ? 'text-gray-900'
                      : user.status === 'Inactive'
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
              <TableCell align="right">
                <button className="text-xs font-light text-gray-400 hover:text-gray-900 transition-colors mr-4">
                  Edit
                </button>
                <button className="text-xs font-light text-gray-400 hover:text-gray-900 transition-colors">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
