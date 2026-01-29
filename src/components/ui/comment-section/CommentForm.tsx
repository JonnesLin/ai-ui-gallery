import { useState } from 'react';
import { cn } from '../_shared/utils';
import type { CommentFormProps } from './types';

export function CommentForm({
  currentUser,
  onSubmit,
  placeholder = 'Add a comment...',
  autoFocus = false,
  className,
}: CommentFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) {
      return;
    }

    onSubmit(content);
    setContent('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn('flex gap-4', className)}>
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className="w-10 h-10 rounded-full grayscale flex-shrink-0"
      />
      <div className="flex-1">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full border-b border-gray-200 focus:border-gray-400 outline-none resize-none py-2 text-sm text-gray-700 placeholder:text-gray-300 font-light"
          rows={2}
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={handleSubmit}
            disabled={!content.trim()}
            className="text-xs tracking-widest text-gray-900 border-b border-gray-900 pb-px hover:text-gray-500 hover:border-gray-500 transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
