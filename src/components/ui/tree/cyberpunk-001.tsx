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
    name: 'SYSTEM_ROOT',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'neural_net',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'core.ai', type: 'file' },
          { id: '1-1-2', name: 'matrix.glb', type: 'file' },
          { id: '1-1-3', name: 'protocol.exe', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'cyber_ops',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'hack.sh', type: 'file' },
          { id: '1-2-2', name: 'decrypt.py', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'data_vault',
    type: 'folder',
    children: [
      { id: '2-1', name: 'secrets.enc', type: 'file' },
    ],
  },
  { id: '3', name: 'boot.sys', type: 'file' },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-3 py-2 px-3 my-1 rounded cursor-pointer transition-all duration-200 hover:bg-cyan-500/20 border-l-2 border-transparent hover:border-cyan-400 group"
        style={{
          marginLeft: `${level * 20}px`,
          textShadow: '0 0 10px rgba(0,255,255,0.5)',
        }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <span className="text-cyan-400 text-sm font-bold transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            ▶
          </span>
        ) : (
          <span className="w-3" />
        )}
        <span className="text-lg filter drop-shadow-lg">
          {node.type === 'folder' ? '◈' : '◆'}
        </span>
        <span className="text-sm font-mono text-cyan-300 group-hover:text-pink-400 transition-colors">
          {node.name}
        </span>
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
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

export default function CyberpunkTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-black">
      <div
        className="bg-black border-2 border-cyan-500 rounded-lg overflow-hidden relative"
        style={{
          boxShadow: '0 0 20px rgba(0,255,255,0.3), inset 0 0 20px rgba(0,255,255,0.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/50 to-transparent pointer-events-none" />
        <div className="relative bg-gradient-to-r from-cyan-900/30 to-pink-900/30 p-4 border-b-2 border-cyan-500/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
            <h3 className="text-lg font-bold text-cyan-400 font-mono tracking-wider" style={{ textShadow: '0 0 10px rgba(0,255,255,0.8)' }}>
              {'> FILE_SYSTEM.exe'}
            </h3>
          </div>
        </div>
        <div className="relative p-4 bg-black/80">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
        <div className="relative bg-gradient-to-r from-pink-900/30 to-cyan-900/30 p-2 border-t-2 border-cyan-500/50">
          <div className="text-xs text-cyan-400 font-mono">STATUS: CONNECTED | UPTIME: 99.9%</div>
        </div>
      </div>
    </div>
  );
}
