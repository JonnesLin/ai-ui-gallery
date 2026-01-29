'use client';

import { Tree } from './Tree';
import type { TreeNodeData } from './types';

const treeData: TreeNodeData[] = [
  {
    key: '1',
    title: 'root',
    icon: '📂',
    children: [
      {
        key: '1-1',
        title: 'src',
        icon: '📂',
        children: [
          { key: '1-1-1', title: 'main.ts', icon: '📃' },
          { key: '1-1-2', title: 'app.ts', icon: '📃' },
          { key: '1-1-3', title: 'config.ts', icon: '📃' },
        ],
      },
      {
        key: '1-2',
        title: 'tests',
        icon: '📂',
        children: [
          { key: '1-2-1', title: 'unit.test.ts', icon: '📃' },
          { key: '1-2-2', title: 'integration.test.ts', icon: '📃' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'dist',
    icon: '📂',
    children: [
      { key: '2-1', title: 'bundle.js', icon: '📃' },
    ],
  },
  { key: '3', title: 'tsconfig.json', icon: '📃' },
];

export default function DarkTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-950">
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-lg font-semibold text-gray-100 font-mono">$ tree</h3>
        </div>
        <div className="p-3">
          <Tree
            data={treeData}
            theme="dark"
            expandedKeys={['1', '1-1', '1-2', '2']}
          />
        </div>
      </div>
    </div>
  );
}
