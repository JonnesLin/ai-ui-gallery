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
    name: 'Forest',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Oak Trees',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'leaf-001.png', type: 'file' },
          { id: '1-1-2', name: 'bark-texture.jpg', type: 'file' },
          { id: '1-1-3', name: 'acorn.svg', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Pine Trees',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'needle.png', type: 'file' },
          { id: '1-2-2', name: 'pinecone.obj', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Flowers',
    type: 'folder',
    children: [
      { id: '2-1', name: 'rose.png', type: 'file' },
      { id: '2-2', name: 'sunflower.jpg', type: 'file' },
    ],
  },
  { id: '3', name: 'nature-guide.pdf', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-3 py-2 px-3 my-1 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-50 group"
        style={{ paddingLeft: `${level * 24 + 12}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {level > 0 && (
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-green-500"
            style={{ left: `${level * 24 - 8}px` }}
          />
        )}
        {hasChildren ? (
          <span className="text-green-600 text-base transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            🌿
          </span>
        ) : (
          <span className="w-5" />
        )}
        <span className="text-xl">
          {node.type === 'folder' ? '🌳' : '🍃'}
        </span>
        <span className="text-sm font-medium text-green-900 group-hover:text-green-700 transition-colors">
          {node.name}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <div className="relative">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function NatureTree() {
  return (
    <div
      className="w-full max-w-md mx-auto p-6"
      style={{
        background: 'linear-gradient(to bottom, #f0fdf4, #dcfce7)',
      }}
    >
      <div
        className="bg-white/90 backdrop-blur rounded-2xl overflow-hidden shadow-xl border-2 border-green-200"
        style={{
          boxShadow: '0 10px 40px rgba(34, 197, 94, 0.2)',
        }}
      >
        <div
          className="p-5 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 border-b-2 border-green-300"
        >
          <h3 className="text-xl font-bold text-green-900 flex items-center gap-2">
            <span>🌲</span>
            <span>Nature Collection</span>
            <span>🌺</span>
          </h3>
          <p className="text-xs text-green-700 mt-1">Organic file structure</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200">
          <div className="flex items-center gap-2 text-xs text-green-700">
            <span>🌱</span>
            <span>Growing naturally since 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
