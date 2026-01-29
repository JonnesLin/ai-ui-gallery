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
    name: 'My Projects',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Creative Work',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'sketch.psd', type: 'file' },
          { id: '1-1-2', name: 'design.fig', type: 'file' },
          { id: '1-1-3', name: 'mockup.ai', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Photography',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'sunset.jpg', type: 'file' },
          { id: '1-2-2', name: 'portrait.png', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Inspiration',
    type: 'folder',
    children: [
      { id: '2-1', name: 'mood-board.pdf', type: 'file' },
    ],
  },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const pastelColors = [
    'bg-pink-100 hover:bg-pink-200 border-pink-300',
    'bg-purple-100 hover:bg-purple-200 border-purple-300',
    'bg-blue-100 hover:bg-blue-200 border-blue-300',
    'bg-green-100 hover:bg-green-200 border-green-300',
  ];
  const colorClass = pastelColors[level % pastelColors.length];

  return (
    <div>
      <div
        className={`flex items-center gap-3 py-2.5 px-4 my-1.5 rounded-full cursor-pointer transition-all duration-300 border-2 ${colorClass}`}
        style={{ marginLeft: `${level * 16}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-gray-500 text-xs transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            ♥
          </span>
        ) : (
          <span className="w-3" />
        )}
        <span className="text-xl">
          {node.type === 'folder' ? '🌸' : '✿'}
        </span>
        <span className="text-sm font-medium text-gray-700">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function PastelTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl overflow-hidden border-4 border-pink-200">
        <div className="p-6 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
          <h3 className="text-xl font-bold text-gray-700 flex items-center gap-2">
            <span>🌈</span>
            <span>Lovely Files</span>
          </h3>
        </div>
        <div className="p-4">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
