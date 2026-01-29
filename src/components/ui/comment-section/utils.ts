export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  return date.toLocaleDateString();
}

export function sortComments<T extends { createdAt: Date; likes: number }>(
  comments: T[],
  sortBy: 'newest' | 'oldest' | 'popular'
): T[] {
  return [...comments].sort((a, b) => {
    if (sortBy === 'newest') {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    if (sortBy === 'oldest') {
      return a.createdAt.getTime() - b.createdAt.getTime();
    }
    if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });
}
