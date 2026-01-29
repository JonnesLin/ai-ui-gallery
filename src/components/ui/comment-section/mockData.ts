import type { CommentData, CommentAuthor } from './types';

export const mockCurrentUser: CommentAuthor = {
  name: 'You',
  avatar: 'https://i.pravatar.cc/80?img=1',
};

export const mockComments: CommentData[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/80?img=12',
    },
    content:
      'This approach to design really resonates with me. The emphasis on whitespace and typography creates such a calm, focused experience.',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2h ago
    likes: 42,
    isLiked: false,
    replies: [
      {
        id: '1-1',
        author: {
          name: 'Alex Rivera',
          avatar: 'https://i.pravatar.cc/80?img=33',
        },
        content: 'Completely agree. Less truly is more in this context.',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1h ago
        likes: 12,
        isLiked: false,
      },
      {
        id: '1-2',
        author: {
          name: 'Maya Patel',
          avatar: 'https://i.pravatar.cc/80?img=45',
        },
        content: 'The subtle animations add so much polish without overwhelming.',
        createdAt: new Date(Date.now() - 45 * 60 * 1000), // 45m ago
        likes: 8,
        isLiked: false,
      },
    ],
  },
  {
    id: '2',
    author: {
      name: 'James Wilson',
      avatar: 'https://i.pravatar.cc/80?img=22',
    },
    content:
      "I've been trying to incorporate more minimalist principles into my work. This is excellent inspiration.",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4h ago
    likes: 28,
    isLiked: false,
  },
  {
    id: '3',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://i.pravatar.cc/80?img=58',
    },
    content: 'Beautiful execution. The attention to detail in the spacing is remarkable.',
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6h ago
    likes: 56,
    isLiked: true,
  },
];
