import { cn } from '../_shared/utils';
import type { CommentActionsProps } from './types';

export function CommentActions({
  commentId,
  likes,
  isLiked = false,
  onLike,
  onReply,
  className,
}: CommentActionsProps) {
  const handleLike = () => {
    if (onLike) {
      onLike(commentId);
    }
  };

  const handleReply = () => {
    if (onReply) {
      onReply(commentId);
    }
  };

  return (
    <div className={cn('flex items-center gap-4 mt-3', className)}>
      <button
        onClick={handleLike}
        className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors"
        aria-label={isLiked ? 'Unlike comment' : 'Like comment'}
      >
        <svg
          className="w-4 h-4"
          fill={isLiked ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        <span className="text-xs">{likes}</span>
      </button>

      {onReply && (
        <button
          onClick={handleReply}
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
        >
          Reply
        </button>
      )}
    </div>
  );
}
