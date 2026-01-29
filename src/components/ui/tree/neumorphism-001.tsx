'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'workspace',
    icon: '📁',
    children: [
      {
        key: '1-1',
        title: 'frontend',
        icon: '📁',
        children: [
          { key: '1-1-1', title: 'App.tsx', icon: '📄' },
          { key: '1-1-2', title: 'main.css', icon: '📄' },
        ],
      },
      {
        key: '1-2',
        title: 'backend',
        icon: '📁',
        children: [
          { key: '1-2-1', title: 'server.js', icon: '📄' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'assets',
    icon: '📁',
    children: [
      { key: '2-1', title: 'logo.png', icon: '📄' },
    ],
  },
  { key: '3', title: 'package.json', icon: '📄' },
];

export default function NeumorphismTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6" style={{ background: '#e0e5ec' }}>
      <div
        className="rounded-2xl p-6"
        style={{
          background: '#e0e5ec',
          boxShadow: '20px 20px 60px #a3b1c6, -20px -20px 60px #ffffff',
        }}
      >
        <div
          className="p-4 mb-6 rounded-xl"
          style={{
            background: '#e0e5ec',
            boxShadow: 'inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff',
          }}
        >
          <h3 className="text-xl font-bold text-gray-800">Directory Tree</h3>
        </div>
        <div>
          <Tree
            data={treeData}
            theme="neumorphism"
            expandedKeys={['1', '1-1', '1-2', '2']}
          />
        </div>
      </div>
    </div>
  );
}
