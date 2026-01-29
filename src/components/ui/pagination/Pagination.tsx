import { forwardRef, useState } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { usePagination } from './usePagination';
import type { PaginationProps } from './Pagination.types';

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const DoubleChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
  </svg>
);

const DoubleChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      total,
      pageSize,
      current,
      onChange,
      theme: themeName,
      size = 'md',
      showQuickJumper = false,
      showSizeChanger = false,
      showTotal = false,
      disabled = false,
      siblingCount = 1,
      className,
    },
    ref
  ) => {
    const theme = getTheme(themeName);
    const [jumpValue, setJumpValue] = useState('');
    const [currentPageSize, setCurrentPageSize] = useState(pageSize);

    const { pages, totalPages, canGoToPrev, canGoToNext } = usePagination({
      total,
      pageSize: currentPageSize,
      current,
      siblingCount,
    });

    const handlePageChange = (page: number) => {
      if (disabled || page === current) return;
      if (page < 1 || page > totalPages) {
        throw new Error(`Invalid page: ${page}. Must be between 1 and ${totalPages}`);
      }
      onChange(page);
    };

    const handlePrevPage = () => {
      if (canGoToPrev) {
        handlePageChange(current - 1);
      }
    };

    const handleNextPage = () => {
      if (canGoToNext) {
        handlePageChange(current + 1);
      }
    };

    const handleFirstPage = () => {
      handlePageChange(1);
    };

    const handleLastPage = () => {
      handlePageChange(totalPages);
    };

    const handleJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const page = parseInt(jumpValue, 10);
        if (!isNaN(page) && page >= 1 && page <= totalPages) {
          handlePageChange(page);
          setJumpValue('');
        }
      }
    };

    const handlePageSizeChange = (newSize: number) => {
      setCurrentPageSize(newSize);
      const newTotalPages = Math.ceil(total / newSize);
      const newCurrent = Math.min(current, newTotalPages);
      if (newCurrent !== current) {
        onChange(newCurrent);
      }
    };

    const startItem = (current - 1) * currentPageSize + 1;
    const endItem = Math.min(current * currentPageSize, total);

    const baseButtonClasses = cn(
      'inline-flex items-center justify-center',
      'font-medium transition-all',
      theme.base.radius,
      theme.sizes[size],
    );

    const pageButtonClasses = (isActive: boolean) =>
      cn(
        baseButtonClasses,
        isActive
          ? cn(
              theme.variants.primary.background,
              theme.variants.primary.text,
              theme.variants.primary.border,
              theme.variants.primary.shadow
            )
          : cn(
              theme.base.background,
              theme.base.text,
              theme.base.border,
              theme.states.hover
            ),
        disabled && theme.states.disabled
      );

    const navButtonClasses = cn(
      baseButtonClasses,
      theme.variants.secondary.background,
      theme.variants.secondary.text,
      theme.variants.secondary.border,
      theme.states.hover,
      disabled && theme.states.disabled
    );

    return (
      <nav ref={ref} className={cn('flex flex-col gap-4 items-center', className)}>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFirstPage}
            disabled={disabled || !canGoToPrev}
            className={navButtonClasses}
            aria-label="First page"
          >
            <DoubleChevronLeft />
          </button>
          <button
            onClick={handlePrevPage}
            disabled={disabled || !canGoToPrev}
            className={navButtonClasses}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>

          {pages.map((page, index) =>
            page === 'ellipsis' ? (
              <span
                key={`ellipsis-${index}`}
                className={cn(baseButtonClasses, theme.base.text, 'cursor-default')}
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={disabled}
                className={pageButtonClasses(page === current)}
                aria-label={`Page ${page}`}
                aria-current={page === current ? 'page' : undefined}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={handleNextPage}
            disabled={disabled || !canGoToNext}
            className={navButtonClasses}
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
          <button
            onClick={handleLastPage}
            disabled={disabled || !canGoToNext}
            className={navButtonClasses}
            aria-label="Last page"
          >
            <DoubleChevronRight />
          </button>
        </div>

        {(showTotal || showSizeChanger || showQuickJumper) && (
          <div className="flex items-center gap-4 text-sm">
            {showTotal && (
              <span className={cn(theme.base.text)}>
                {typeof showTotal === 'function'
                  ? showTotal(total, [startItem, endItem])
                  : `Showing ${startItem}-${endItem} of ${total}`}
              </span>
            )}

            {showSizeChanger && (
              <div className="flex items-center gap-2">
                <span className={cn(theme.base.text)}>Items per page:</span>
                <select
                  value={currentPageSize}
                  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                  disabled={disabled}
                  className={cn(
                    'px-3 py-1',
                    theme.base.background,
                    theme.base.text,
                    theme.base.border,
                    theme.base.radius,
                    theme.states.hover,
                    disabled && theme.states.disabled,
                    'cursor-pointer'
                  )}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            )}

            {showQuickJumper && (
              <div className="flex items-center gap-2">
                <span className={cn(theme.base.text)}>Go to:</span>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={jumpValue}
                  onChange={(e) => setJumpValue(e.target.value)}
                  onKeyDown={handleJump}
                  disabled={disabled}
                  className={cn(
                    'w-16 px-2 py-1',
                    theme.base.background,
                    theme.base.text,
                    theme.base.border,
                    theme.base.radius,
                    theme.states.focus,
                    disabled && theme.states.disabled
                  )}
                  placeholder="Page"
                />
              </div>
            )}
          </div>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
