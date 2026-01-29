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
    name: 'QUANTUM_CORE',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'neural_systems',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'ai_engine.qnt', type: 'file' },
          { id: '1-1-2', name: 'cognition.ml', type: 'file' },
          { id: '1-1-3', name: 'learning.dat', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'holographic_data',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'projection.holo', type: 'file' },
          { id: '1-2-2', name: 'render.3d', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'SPACE_ARCHIVES',
    type: 'folder',
    children: [
      { id: '2-1', name: 'galaxy_map.star', type: 'file' },
    ],
  },
  { id: '3', name: 'config.quantum', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-3 py-2.5 px-4 my-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-500/10 border border-transparent hover:border-blue-400/50 group relative overflow-hidden"
        style={{
          marginLeft: `${level * 20}px`,
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {hasChildren ? (
          <span className="text-blue-400 text-sm transition-all duration-300 z-10" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            ▸
          </span>
        ) : (
          <span className="w-3" />
        )}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg z-10">
          <span className="text-white text-xs">
            {node.type === 'folder' ? '◈' : '●'}
          </span>
        </div>
        <span className="text-sm font-mono text-gray-200 z-10">{node.name}</span>
        <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-75" />
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse delay-150" />
        </div>
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

export default function FuturisticTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-blue-500/30 relative"
        style={{
          boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), inset 0 0 50px rgba(59, 130, 246, 0.05)',
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        <div className="relative p-5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white font-mono tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>QUANTUM FILE SYSTEM</span>
              </h3>
              <p className="text-xs text-blue-300 mt-1">v4.2.1 | ONLINE</p>
            </div>
          </div>
        </div>
        <div className="relative p-4">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="relative px-5 py-3 bg-gradient-to-r from-gray-900 to-gray-950 border-t border-blue-500/30">
          <div className="flex items-center justify-between text-xs text-blue-400 font-mono">
            <span>SYNC: 100%</span>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-blue-500 rounded" />
              <div className="w-1 h-3 bg-blue-500 rounded" />
              <div className="w-1 h-3 bg-blue-500 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
