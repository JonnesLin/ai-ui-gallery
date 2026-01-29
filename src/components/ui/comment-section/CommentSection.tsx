import { useState } from 'react';
import { cn } from '../_shared/utils';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import type { CommentSectionProps } from './types';

export function CommentSection({
  comments,
  currentUser,
  onSubmit,
  onLike,
  onReply,
  sortBy = 'newest',
  totalCount,
  className,
}: CommentSectionProps) {
  const [activeSortBy, setActiveSortBy] = useState(sortBy);

  const handleSubmit = (content: string) => {
    onSubmit(content);
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (activeSortBy === 'newest') {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    if (activeSortBy === 'oldest') {
      return a.createdAt.getTime() - b.createdAt.getTime();
    }
    if (activeSortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });

  const displayCount = totalCount || comments.length;

  return (
    <div className={cn('min-h-screen bg-white p-6 md:p-12', className)}>
      <div className="max-w-2xl mx-auto">
        <div className="border-b border-gray-100 pb-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-light tracking-widest text-gray-400 uppercase">
                Discussion
              </h2>
              <p className="mt-1 text-xs text-gray-400">{displayCount} comments</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveSortBy('newest')}
                className={cn(
                  'text-xs uppercase tracking-widest px-3 py-1.5 transition-colors',
                  activeSortBy === 'newest'
                    ? 'text-gray-900 border-b border-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                )}
              >
                Newest
              </button>
              <button
                onClick={() => setActiveSortBy('popular')}
                className={cn(
                  'text-xs uppercase tracking-widest px-3 py-1.5 transition-colors',
                  activeSortBy === 'popular'
                    ? 'text-gray-900 border-b border-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                )}
              >
                Popular
              </button>
            </div>
          </div>
        </div>

        <CommentForm
          currentUser={currentUser}
          onSubmit={handleSubmit}
          className="mb-12"
        />

        <div className="space-y-8">
          {sortedComments.map((comment, index) => (
            <div key={comment.id}>
              <Comment
                comment={comment}
                onLike={onLike}
                onReply={onReply}
              />
              {index < sortedComments.length - 1 && (
                <div className="h-px bg-gray-50 mt-8" />
              )}
            </div>
          ))}
        </div>

        {displayCount > comments.length && (
          <div className="mt-12 text-center">
            <button className="text-xs tracking-widest text-gray-400 hover:text-gray-900 transition-colors uppercase">
              Load more comments
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
