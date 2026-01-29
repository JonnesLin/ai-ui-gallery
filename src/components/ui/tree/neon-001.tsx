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
    name: 'cyber_root',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'neural_net',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'matrix.dat', type: 'file' },
          { id: '1-1-2', name: 'weights.bin', type: 'file' },
          { id: '1-1-3', name: 'activations.log', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'quantum',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'qubits.qasm', type: 'file' },
          { id: '1-2-2', name: 'entangle.py', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'sync',
    type: 'folder',
    children: [
      { id: '2-1', name: 'blockchain.json', type: 'file' },
      { id: '2-2', name: 'ledger.db', type: 'file' },
    ],
  },
  { id: '3', name: 'manifest.yaml', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const neonColors = [
    'from-cyan-400 to-blue-500',
    'from-pink-400 to-purple-500',
    'from-green-400 to-emerald-500',
  ];
  const neonColor = neonColors[level % neonColors.length];

  return (
    <div>
      <div
        className={`
          flex items-center gap-3 py-2 px-3 my-1 rounded cursor-pointer
          transition-all duration-300 border border-transparent
          hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]
          group relative
        `}
        style={{
          paddingLeft: `${level * 24 + 12}px`,
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span
            className={`text-cyan-400 text-xs transition-all duration-300 ${
              isExpanded ? '' : 'rotate-180'
            }`}
            style={{
              textShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
              filter: 'drop-shadow(0 0 2px cyan)'
            }}
          >
            ▼
          </span>
        ) : (
          <span className="w-3" />
        )}
        <span
          className={`text-base bg-gradient-to-r ${neonColor} bg-clip-text text-transparent`}
          style={{ filter: 'drop-shadow(0 0 3px currentColor)' }}
        >
          {node.type === 'folder' ? '▶' : '●'}
        </span>
        <span
          className="text-sm font-mono text-pink-300 group-hover:text-cyan-300 transition-colors"
          style={{ textShadow: '0 0 8px rgba(236, 72, 153, 0.5)' }}
        >
          {node.name}
        </span>
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 rounded transition-all duration-300"
        />
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

export default function NeonTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-black">
      <div
        className="bg-gray-950 rounded-xl overflow-hidden border-2 border-cyan-500"
        style={{
          boxShadow: '0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 50px rgba(6, 182, 212, 0.1)'
        }}
      >
        <div
          className="p-5 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 border-b-2 border-cyan-500"
          style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
        >
          <h3
            className="text-xl font-bold font-mono text-cyan-400 tracking-wider"
            style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}
          >
            NEON FILE SYSTEM
          </h3>
          <p
            className="text-xs text-pink-400 mt-1 font-mono"
            style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.6)' }}
          >
            CYBERDRIVE://ACCESS
          </p>
        </div>
        <div className="p-4">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div
          className="px-5 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t-2 border-cyan-500/50"
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400" style={{ textShadow: '0 0 8px rgba(34, 211, 238, 0.6)' }}>
              ONLINE
            </span>
            <span className="text-pink-400">●</span>
            <span className="text-purple-400" style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}>
              ENCRYPTED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
