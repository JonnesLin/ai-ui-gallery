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
    name: 'Executive Suite',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Private Documents',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'Contracts.pdf', type: 'file' },
          { id: '1-1-2', name: 'Agreements.docx', type: 'file' },
          { id: '1-1-3', name: 'Portfolio.xlsx', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Confidential',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'Strategic-Plan.pptx', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Archives',
    type: 'folder',
    children: [
      { id: '2-1', name: 'Legacy-Files.zip', type: 'file' },
    ],
  },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-4 py-3 px-4 my-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 border border-transparent hover:border-amber-200"
        style={{
          marginLeft: `${level * 28}px`,
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-amber-600 text-sm transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            ◆
          </span>
        ) : (
          <span className="w-3" />
        )}
        <span className="text-xl" style={{ filter: 'drop-shadow(0 2px 4px rgba(217, 119, 6, 0.3))' }}>
          {node.type === 'folder' ? '👑' : '📜'}
        </span>
        <span className="text-sm font-serif text-gray-800 tracking-wide">{node.name}</span>
        <div className="ml-auto w-1 h-1 rounded-full bg-amber-500" />
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

export default function LuxuryTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div
        className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 rounded-xl overflow-hidden border-2 border-amber-200"
        style={{
          boxShadow: '0 20px 60px rgba(217, 119, 6, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        }}
      >
        <div
          className="p-6 bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-b border-amber-200"
          style={{
            borderBottom: '2px solid',
            borderImage: 'linear-gradient(to right, #d97706, #fbbf24, #d97706) 1',
          }}
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
            <span className="text-3xl">✦</span>
            <span>Premier Archive</span>
          </h3>
          <p className="text-xs text-gray-600 mt-1 font-sans tracking-wider">CONFIDENTIAL ACCESS</p>
        </div>
        <div className="p-5">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="px-6 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-amber-200">
          <div className="flex items-center justify-between text-xs text-gray-600 font-sans">
            <span>ENCRYPTED</span>
            <span>•</span>
            <span>SECURED</span>
            <span>•</span>
            <span>PRIVATE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
