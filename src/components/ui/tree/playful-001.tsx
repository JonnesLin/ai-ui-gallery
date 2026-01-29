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
    name: 'Fun Stuff',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Games',
        type: 'folder',
        children: [
          { id: '1-1-1', name: 'tetris.exe', type: 'file' },
          { id: '1-1-2', name: 'snake.js', type: 'file' },
          { id: '1-1-3', name: 'pong.html', type: 'file' },
        ],
      },
      {
        id: '1-2',
        name: 'Music',
        type: 'folder',
        children: [
          { id: '1-2-1', name: 'happy-tune.mp3', type: 'file' },
          { id: '1-2-2', name: 'chill-beats.wav', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Memes',
    type: 'folder',
    children: [
      { id: '2-1', name: 'funny-cat.gif', type: 'file' },
    ],
  },
];

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [bounce, setBounce] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
      setBounce(true);
      setTimeout(() => setBounce(false), 300);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-2 px-3 my-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
          bounce ? 'animate-bounce' : ''
        }`}
        style={{
          marginLeft: `${level * 20}px`,
          background: `linear-gradient(135deg, ${level % 2 === 0 ? '#FFE5B4' : '#E0BBE4'} 0%, ${
            level % 2 === 0 ? '#FFD1DC' : '#D4A5A5'
          } 100%)`,
        }}
        onClick={handleClick}
      >
        {hasChildren ? (
          <span className="text-2xl transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            {isExpanded ? '😊' : '😎'}
          </span>
        ) : (
          <span className="w-7" />
        )}
        <span className="text-2xl">
          {node.type === 'folder' ? '🎈' : '🎮'}
        </span>
        <span className="text-sm font-bold text-purple-800">{node.name}</span>
        <span className="ml-auto text-xl">✨</span>
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

export default function PlayfulTree() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div
        className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-300 transform hover:rotate-1 transition-transform duration-300"
        style={{
          boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)',
        }}
      >
        <div className="p-5 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
          <h3 className="text-2xl font-black text-white flex items-center gap-2 drop-shadow-lg">
            <span className="animate-spin">🎪</span>
            <span>My Cool Files</span>
            <span className="animate-bounce">🎉</span>
          </h3>
        </div>
        <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50">
          {treeData.map((node) => (
            <TreeItem key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
