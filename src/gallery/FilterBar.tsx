import { useMemo } from 'react'
import type { ComponentType, FilterState, VisualStyle } from '../types'
import { ALL_COMPONENT_TYPES, ALL_VISUAL_STYLES, COMPONENT_CATEGORIES, STYLE_METADATA } from '../types'

interface FilterBarProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  totalCount: number
  filteredCount: number
}

export function FilterBar({ filters, onFilterChange, totalCount, filteredCount }: FilterBarProps) {
  const availableTypes = useMemo(() => {
    if (!filters.category) return ALL_COMPONENT_TYPES
    return COMPONENT_CATEGORIES[filters.category] ?? ALL_COMPONENT_TYPES
  }, [filters.category])

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.types.length > 0 ||
    filters.styles.length > 0 ||
    filters.category !== null

  const update = (patch: Partial<FilterState>) => {
    onFilterChange({ ...filters, ...patch })
  }

  const toggleType = (type: ComponentType) => {
    update({
      types: filters.types.includes(type)
        ? filters.types.filter(t => t !== type)
        : [...filters.types, type],
    })
  }

  const toggleStyle = (style: VisualStyle) => {
    update({
      styles: filters.styles.includes(style)
        ? filters.styles.filter(s => s !== style)
        : [...filters.styles, style],
    })
  }

  const clearAll = () => {
    update({ types: [], styles: [], search: '', category: null })
  }

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur">
      <div className="max-w-[1920px] mx-auto px-4 py-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <h1 className="text-lg font-semibold text-white truncate">AI UI Gallery</h1>
              <span className="text-sm text-white/50">
                Showing <span className="text-white">{filteredCount}</span> of {totalCount}
              </span>
            </div>
            <button
              type="button"
              onClick={clearAll}
              disabled={!hasActiveFilters}
              className="px-3 py-2 text-sm rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:hover:bg-white/5 disabled:hover:text-white/70 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
            {/* Search */}
            <label className="md:col-span-5 relative">
              <span className="sr-only">Search</span>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                value={filters.search}
                onChange={(e) => update({ search: e.target.value })}
                placeholder="Search components, types, styles..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20"
              />
            </label>

            {/* Category */}
            <label className="md:col-span-2">
              <span className="sr-only">Category</span>
              <select
                value={filters.category ?? ''}
                onChange={(e) => {
                  const nextCategory = e.target.value || null
                  update({ category: nextCategory, types: [] })
                }}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20"
              >
                <option value="">All categories</option>
                {Object.keys(COMPONENT_CATEGORIES).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            {/* Types */}
            <details className="md:col-span-2 relative group">
              <summary className="cursor-pointer list-none px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors flex items-center justify-between gap-2">
                <span className="text-sm">
                  Types{filters.types.length > 0 ? ` (${filters.types.length})` : ''}
                </span>
                <svg className="w-4 h-4 text-white/50 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-[320px] max-h-[340px] overflow-auto rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl p-2 z-50">
                <div className="grid grid-cols-2 gap-1">
                  {availableTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={filters.types.includes(type)}
                        onChange={() => toggleType(type)}
                        className="accent-white"
                      />
                      <span className="text-sm text-white/80 truncate">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </details>

            {/* Styles */}
            <details className="md:col-span-3 relative group">
              <summary className="cursor-pointer list-none px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors flex items-center justify-between gap-2">
                <span className="text-sm">
                  Styles{filters.styles.length > 0 ? ` (${filters.styles.length})` : ''}
                </span>
                <svg className="w-4 h-4 text-white/50 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-[360px] max-h-[340px] overflow-auto rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl p-2 z-50">
                <div className="grid grid-cols-2 gap-1">
                  {ALL_VISUAL_STYLES.map((style) => {
                    const meta = STYLE_METADATA[style]
                    return (
                      <label
                        key={style}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={filters.styles.includes(style)}
                          onChange={() => toggleStyle(style)}
                          className="accent-white"
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: meta.color }}
                        />
                        <span className="text-sm text-white/80 truncate">{meta.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            </details>
          </div>

          {/* Selected chips */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2">
              {filters.category && (
                <button
                  type="button"
                  onClick={() => update({ category: null, types: [] })}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/15 transition-colors"
                  title="Remove category"
                >
                  <span>{filters.category}</span>
                  <span className="text-white/50">×</span>
                </button>
              )}

              {filters.search.trim().length > 0 && (
                <button
                  type="button"
                  onClick={() => update({ search: '' })}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/15 transition-colors"
                  title="Clear search"
                >
                  <span className="max-w-[240px] truncate">“{filters.search.trim()}”</span>
                  <span className="text-white/50">×</span>
                </button>
              )}

              {filters.types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleType(type)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/15 transition-colors"
                  title="Remove type"
                >
                  <span>{type}</span>
                  <span className="text-white/50">×</span>
                </button>
              ))}

              {filters.styles.map((style) => {
                const meta = STYLE_METADATA[style]
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => toggleStyle(style)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/15 transition-colors"
                    title="Remove style"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: meta.color }} />
                    <span>{meta.label}</span>
                    <span className="text-white/50">×</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

