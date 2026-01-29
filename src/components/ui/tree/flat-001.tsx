'use client';

import { useState } from 'react';

interface TreeNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    id: '1',
    name: 'workspace',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'frontend',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'index.html', type: 'file' },
          { id: '1-1-2', name: 'styles.css', type: 'file' },
          { id: '1-1-3', name: 'app.js', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'backend',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'server.js', type: 'file' },
          { id: '1-2-2', name: 'routes.js', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'assets',
    type: 'folder',
    children: [
      { id: '2-1', name: 'logo.svg', type: 'file' },
      { id: '2-2', name: 'banner.png', type: 'file' },
    ],
  },
  { id: '3', name: 'package.json', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const bgColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-green-500',
  ];
  const bgColor = bgColors[level % bgColors.length];

  return (
    <div>
      <div
        className={`
          flex items-center gap-3 py-3 px-4 my-1
          cursor-pointer transition-all duration-200
          ${hasChildren ? bgColor : 'bg-gray-400'}
          hover:opacity-90
        `}
        style={{
          marginLeft: `${level * 20}px`,
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-white text-xs font-bold w-4">
            {isExpanded ? '▼' : '▶'}
          </span>
        ) : (
          <span className="w-4" />
        )}
        <span className="text-white text-base">
          {node.type === 'folder' ? '▣' : '▢'}
        </span>
        <span className="text-sm font-bold text-white tracking-wide uppercase">
          {node.name}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FlatTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-100">
      <div className="bg-white overflow-hidden">
        <div className="p-6 bg-red-500">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
            Flat Tree
          </h3>
          <p className="text-xs text-red-100 mt-1 font-bold uppercase">
            Modern Design
          </p>
        </div>
        <div className="p-4 bg-white">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="px-6 py-4 bg-yellow-500 flex items-center justify-between">
          <div className="bg-white px-3 py-1">
            <p className="text-xs font-bold text-gray-900 uppercase">3 Folders</p>
          </div>
          <div className="bg-white px-3 py-1">
            <p className="text-xs font-bold text-gray-900 uppercase">8 Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}
