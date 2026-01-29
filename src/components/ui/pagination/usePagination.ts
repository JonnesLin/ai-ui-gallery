import type { UsePaginationParams, UsePaginationResult, PageItem } from './Pagination.types';

export function usePagination({
  total,
  pageSize,
  current,
  siblingCount = 1,
}: UsePaginationParams): UsePaginationResult {
  const totalPages = Math.ceil(total / pageSize);

  const generatePages = (): PageItem[] => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 2);
    const rightSiblingIndex = Math.min(current + siblingCount, totalPages - 1);

    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
      return [...leftRange, 'ellipsis' as const, totalPages];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightRange = Array.from(
        { length: 3 + siblingCount * 2 },
        (_, i) => totalPages - (3 + siblingCount * 2) + i + 1
      );
      return [1, 'ellipsis' as const, ...rightRange];
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, 'ellipsis' as const, ...middleRange, 'ellipsis' as const, totalPages];
  };

  const pages = generatePages();

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      throw new Error(`Invalid page number: ${page}. Must be between 1 and ${totalPages}`);
    }
  };

  return {
    pages,
    totalPages,
    canGoToPrev: current > 1,
    canGoToNext: current < totalPages,
    goToPage,
    goToPrev: () => goToPage(Math.max(1, current - 1)),
    goToNext: () => goToPage(Math.min(totalPages, current + 1)),
    goToFirst: () => goToPage(1),
    goToLast: () => goToPage(totalPages),
  };
}
